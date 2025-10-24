const express = require('express');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
const SUB_FILE = path.join(__dirname, 'subscribers.csv');
function isValidEmail(e){ return typeof e==='string' && /\S+@\S+\.\S+/.test(e); }
app.post('/api/subscribe', async (req, res) => {
  try{
    const email = (req.body && req.body.email || '').trim();
    if(!isValidEmail(email)) return res.status(400).json({ error: 'Invalid email' });
    const line = `"${email}",${new Date().toISOString()}\n`;
    fs.appendFileSync(SUB_FILE, line);
    if(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS){
      try{
        let transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
          secure: process.env.SMTP_SECURE === 'true',
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        });
        await transporter.sendMail({
          from: process.env.MAIL_FROM || '"SectoNet" <no-reply@sectonet.example>',
          to: email,
          subject: 'SectoNet — Subscription Received',
          text: 'Thanks for subscribing to SectoNet updates.'
        });
      }catch(err){ console.error('SMTP error', err); }
    }
    return res.json({ message: 'Subscription saved' });
  }catch(err){ console.error(err); return res.status(500).json({ error: 'Server error' }); }
});
app.use('/', express.static(path.join(__dirname, 'public')));
app.listen(PORT, ()=>console.log('Server listening on', PORT));