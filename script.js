/* Core interactions: theme toggle, hamburger menu, search filter, cookie banner, small animations */

// Theme toggle (top-right button)
// Applies class on documentElement to switch CSS variables
function setTheme(mode) {
  if (mode === 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme','dark');
    updateThemeButton('dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme','light');
    updateThemeButton('light');
  }
}

function updateThemeButton(mode){
  const texts = {'dark':'☀️', 'light':'🌙'};
  document.querySelectorAll('.theme-btn').forEach(b=>b.textContent = texts[mode] + ' Tema');
  const topBtn = document.getElementById('themeBtn');
  if(topBtn) topBtn.textContent = texts[mode];
}

// Try to restore theme on load
document.addEventListener('DOMContentLoaded', ()=>{
  const saved = localStorage.getItem('theme') || 'light';
  setTheme(saved);
  // show cookie if not accepted
  if(!localStorage.getItem('cookiesAccepted')){
    const banner = document.getElementById('cookieBanner');
    if(banner) banner.classList.remove('hidden');
  }
});

// Make top theme button clickable (index)
document.addEventListener('click', (e)=>{
  if(e.target && e.target.id === 'themeBtn'){
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  }
});

// Also for per-page theme buttons
document.querySelectorAll('.theme-btn').forEach(b=>{
  b.addEventListener('click', ()=>{
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  });
});

// Hamburger menu toggles sidenav (index and pages)
document.querySelectorAll('.hamburger').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const s = document.querySelector('.sidenav');
    if(!s) return;
    if(getComputedStyle(s).left === '-320px' || s.style.left === '-320px' || s.style.transform === 'translateX(-320px)'){
      s.style.left = '0';
    } else {
      s.style.left = '-320px';
    }
    s.classList.toggle('open');
  });
});

// Close sidenav when clicking outside on mobile
document.addEventListener('click', (e)=>{
  if(window.innerWidth <= 900){
    const s = document.querySelector('.sidenav');
    if(!s) return;
    const menuBtn = e.target.closest('.hamburger');
    if(menuBtn) return;
    if(!e.target.closest('.sidenav')){
      s.style.left = '-320px';
    }
  }
});

// Search filter (index)
const searchInput = document.getElementById('searchInput');
if(searchInput){
  searchInput.addEventListener('input', (e)=>{
    const q = e.target.value.trim().toLowerCase();
    const cards = document.querySelectorAll('#cardsList .card');
    cards.forEach(card=>{
      const tags = (card.getAttribute('data-tags')||'').toLowerCase();
      const title = card.querySelector('h3').textContent.toLowerCase();
      const text = card.querySelector('p').textContent.toLowerCase();
      const match = q === '' || title.includes(q) || text.includes(q) || tags.includes(q);
      card.style.display = match ? 'flex' : 'none';
      if(match){
        // small pulse animation
        card.animate([{transform:'scale(1)'},{transform:'scale(1.02)'},{transform:'scale(1)'}], {duration:420});
      }
    });
  });
}

// Cookie accept
document.addEventListener('click', (e)=>{
  if(e.target && e.target.id === 'acceptCookies'){
    localStorage.setItem('cookiesAccepted','true');
    const b = document.getElementById('cookieBanner');
    if(b) b.classList.add('hidden');
  }
  if(e.target && e.target.id === 'acceptCookies2'){
    localStorage.setItem('cookiesAccepted','true');
    const b = document.getElementById('cookieBanner2');
    if(b) b.classList.add('hidden');
  }
  if(e.target && e.target.id === 'acceptCookies3'){
    localStorage.setItem('cookiesAccepted','true');
    const b = document.getElementById('cookieBanner3');
    if(b) b.classList.add('hidden');
  }
  if(e.target && e.target.id === 'acceptCookies4'){
    localStorage.setItem('cookiesAccepted','true');
    const b = document.getElementById('cookieBanner4');
    if(b) b.classList.add('hidden');
  }
  if(e.target && e.target.id === 'acceptCookies5'){
    localStorage.setItem('cookiesAccepted','true');
    const b = document.getElementById('cookieBanner5');
    if(b) b.classList.add('hidden');
  }
  if(e.target && e.target.id === 'acceptCookies6'){
    localStorage.setItem('cookiesAccepted','true');
    const b = document.getElementById('cookieBanner6');
    if(b) b.classList.add('hidden');
  }
});

// Small entrance animation for cards
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.card').forEach((c,i)=>{
    c.style.opacity = 0;
    c.style.transform = 'translateY(8px)';
    setTimeout(()=>{
      c.style.transition = 'opacity .5s ease, transform .45s ease';
      c.style.opacity = 1;
      c.style.transform = 'translateY(0)';
    }, 120 * i);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    });
  }

  // Mantém o tema salvo
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});