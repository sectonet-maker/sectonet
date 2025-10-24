
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.card').forEach((c,i)=>{ c.style.opacity=0; setTimeout(()=>{ c.style.transition='opacity .6s ease'; c.style.opacity=1; }, 300 + i*100); });
  const form = document.getElementById('subscribe-form');
  if(form){
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const data = new FormData(form);
      const email = data.get('email');
      if(!email) return alert('Please enter your email.');
      const btn = form.querySelector('button');
      btn.disabled = true; btn.textContent = 'Submitting...';
      try{
        const res = await fetch('/api/subscribe', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email}) });
        const j = await res.json();
        if(res.ok) alert(j.message || 'Subscribed — check your email for confirmation.');
        else alert('Error: ' + (j.error || 'Subscription failed.'));
      }catch(err){
        alert('Network error: ' + err.message);
      }finally{ btn.disabled=false; btn.textContent='Subscribe'; }
    });
  }
});