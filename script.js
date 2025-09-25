// Small interactive behaviors: nav toggle, accordion, contact form => mailto
document.addEventListener('DOMContentLoaded', function(){
  // year in footer
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year'); if(yearEl) yearEl.textContent = y;

  // nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  navToggle && navToggle.addEventListener('click', ()=>{
    if(siteNav.style.display === 'block') siteNav.style.display = '';
    else siteNav.style.display = 'block';
  });

  // accordion
  document.querySelectorAll('.accordion-toggle').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const panel = btn.nextElementSibling;
      const open = panel.style.display === 'block';
      document.querySelectorAll('.accordion-panel').forEach(p=>p.style.display = 'none');
      if(!open) panel.style.display = 'block';
    });
  });

  // contact form: open mailto with filled values (simple, client-side)
  const form = document.getElementById('contact-form');
  form && form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = encodeURIComponent(document.getElementById('name').value.trim());
    const email = encodeURIComponent(document.getElementById('email').value.trim());
    const phone = encodeURIComponent(document.getElementById('phone').value.trim());
    const message = encodeURIComponent(document.getElementById('message').value.trim());

    const recipient = 'hello@balance4profit.example'; // replace with real email
    const subject = encodeURIComponent('Website contact from ' + (name || 'website visitor'));
    const body = encodeURIComponent(`Name: ${decodeURIComponent(name)}\nEmail: ${decodeURIComponent(email)}\nPhone: ${decodeURIComponent(phone)}\n\nMessage:\n${decodeURIComponent(message)}`);

    // open mail client
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });

  // request callback button placeholder
  const cb = document.getElementById('call-btn');
  cb && cb.addEventListener('click', ()=>{
    alert('Thanks — please leave your phone number and we will call you.');
    document.getElementById('phone').focus();
  });
});