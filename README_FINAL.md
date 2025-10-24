# SectoNet — Final Deployment Guide

**Generated:** 2025-10-20 22:28 UTC

Welcome to **SectoNet**, a professional landing page and backend package for your decentralized encrypted storage project. This guide explains how to deploy, configure, and optimize the project.

---

## Folder Structure

```
SectoNet_final_package/
├─ index.html            # Main landing page (English)
├─ styles.css            # Styling for the landing page
├─ scripts.js            # Frontend JS (animations, form)
├─ server.js             # Node.js backend (Express) for form/email handling
├─ package.json          # Node.js dependencies
├─ subscribers.csv       # Stores submitted emails
├─ assets/               # Images, logos, previews, whitepaper placeholder
├─ public/               # Static version of site for hosting / GitHub Pages
├─ .github/workflows/    # GitHub Actions for Pages deployment
├─ .env.example          # SMTP config template
├─ LICENSE               # MIT License
├─ README.md             # Original instructions
├─ README_FINAL.md       # This guide
├─ README_CONFIG.txt     # Quick deploy/config notes
```

---

## Local Setup (Node.js Backend)

1. Make sure you have **Node.js 18+** installed.
2. Navigate to project folder:
```bash
cd SectoNet_final_package
```
3. Install dependencies:
```bash
npm install
```
4. Create `.env` based on `.env.example` if you want email confirmations:
```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_user
SMTP_PASS=your_pass
SMTP_SECURE=false
MAIL_FROM="SectoNet <no-reply@sectonet.example>"
```
5. Start the server:
```bash
npm start
```
6. Open browser: [http://localhost:3000](http://localhost:3000)

> The subscription form saves emails in `subscribers.csv`. If SMTP is configured, confirmation emails are sent.

---

## Static Hosting (GitHub Pages / Netlify / Vercel)

- Copy or deploy the `public/` folder.
- GitHub Actions workflow is included (`.github/workflows/deploy.yml`) for automatic deployment to GitHub Pages.
- Replace `index.html` OG meta tags with your domain URL:
```html
<meta property="og:url" content="https://your-domain.com/" />
<meta property="og:image" content="assets/og_image_1200x630.png" />
```
- Ensure your domain uses HTTPS for proper OG image preview on social media.

---

## Google Analytics & Meta Pixel

- Google Analytics: insert GA4 ID in `index.html` comments:
```html
<!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script> -->
```
- Meta Pixel: insert your Pixel ID:
```html
<!-- fbq('init', 'PIXEL_ID'); -->
```

---

## Mailchimp Integration (Optional)

- If you prefer Mailchimp over SMTP, replace the backend form endpoint (`/api/subscribe`) with Mailchimp API POST call.
- Keep the input field and validation in `index.html` / `scripts.js` unchanged.

---

## Assets and Branding

- Logos: `assets/logo_*.svg`
- OG Image: `assets/og_image_1200x630.png`
- Preview: `assets/preview.png`
- Whitepaper (placeholder): `assets/SectoNet_Whitepaper_EN.pdf`

Replace placeholder assets with your final designs as needed.

---

## SEO & Open Graph

- Ensure `<title>`, `<meta name="description">`, and OG meta tags are updated.
- Images for social sharing: 1200x630px recommended for Twitter and Facebook preview cards.

---

## Security Notes

- Keep `.env` and SMTP credentials private.
- Use HTTPS for all production deployments.
- Regularly backup `subscribers.csv` if using backend subscription storage.

---

## License

MIT License — see `LICENSE` file.

---

**Enjoy your professional SectoNet deployment!**