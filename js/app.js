// js/app.js — Navigation, mobile menu, quotes, BMI, nutrition tabs, progress chart

// ── Section navigation ───────────────────────────────────────────
let currentSection = 'home';

function showSection(id) {
  document.querySelectorAll('main > section').forEach(s => s.style.display = 'none');
  const target = document.getElementById(id + '-section');
  if (target) {
    target.style.display = 'block';
    currentSection = id;
    window.scrollTo(0, 0);
  }

  // Active nav link
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active-nav', a.dataset.section === id);
  });

  // Lazy-init programs when first opened
  if (id === 'programs' && typeof initPrograms === 'function') {
    initPrograms();
  }
}

// ── Mobile menu ──────────────────────────────────────────────────
const mobileMenu    = document.getElementById('mobile-menu');
const mobileBtn     = document.getElementById('mobile-menu-btn');
const closeMenuBtn  = document.getElementById('close-menu-btn');
const menuOverlay   = document.getElementById('menu-overlay');

function openMobileMenu()  { mobileMenu.classList.add('open'); menuOverlay.classList.add('open'); }
function closeMobileMenu() { mobileMenu.classList.remove('open'); menuOverlay.classList.remove('open'); }

mobileBtn?.addEventListener('click', openMobileMenu);
closeMenuBtn?.addEventListener('click', closeMobileMenu);
menuOverlay?.addEventListener('click', closeMobileMenu);

// ── Motivational quotes ──────────────────────────────────────────
const QUOTES = [
  { text: "The only bad workout is the one that didn't happen.", author: "FitZone" },
  { text: "Your body can stand almost anything. It's your mind you have to convince.", author: "Unknown" },
  { text: "The hard days are what make you stronger.", author: "Aly Raisman" },
  { text: "Fitness is not about being better than someone else. It's about being better than you used to be.", author: "Unknown" },
  { text: "Take care of your body. It's the only place you have to live.", author: "Jim Rohn" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "All progress takes place outside the comfort zone.", author: "Michael John Bobak" }
];

let quoteIdx = 0;
const quoteText   = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');

function rotateQuote() {
  quoteText?.classList.remove('quote-active');
  quoteAuthor?.classList.remove('quote-active');
  setTimeout(() => {
    quoteIdx = (quoteIdx + 1) % QUOTES.length;
    if (quoteText)   quoteText.textContent   = `"${QUOTES[quoteIdx].text}"`;
    if (quoteAuthor) quoteAuthor.textContent = `— ${QUOTES[quoteIdx].author}`;
    quoteText?.classList.add('quote-active');
    quoteAuthor?.classList.add('quote-active');
  }, 900);
}
setInterval(rotateQuote, 8000);

// ── Nutrition tabs ────────────────────────────────────────────────
function initNutritionTabs() {
  const plans = ['weight-loss', 'muscle-gain', 'maintenance'];
  const btns  = plans.map(p => document.getElementById(p + '-btn'));
  const divs  = plans.map(p => document.getElementById(p + '-plan'));

  btns.forEach((btn, i) => {
    btn?.addEventListener('click', () => {
      divs.forEach((d, j) => {
        d?.classList.toggle('hidden', j !== i);
        btns[j]?.classList.toggle('bg-fitzone-neon', j === i);
        btns[j]?.classList.toggle('text-fitzone-dark', j === i);
        btns[j]?.classList.toggle('bg-fitzone-gray', j !== i);
        btns[j]?.classList.toggle('text-white', j !== i);
      });
    });
  });
}
initNutritionTabs();

// ── Progress chart ────────────────────────────────────────────────
function initProgressChart() {
  const ctx = document.getElementById('progress-chart');
  if (!ctx) return;
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
      datasets: [{
        label: 'Weight Lifted (lbs)',
        data: [135, 145, 145, 155, 160, 165],
        borderColor: '#39ff14',
        backgroundColor: 'rgba(57,255,20,0.08)',
        tension: 0.3,
        fill: true,
        pointBackgroundColor: '#39ff14'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { labels: { color: 'white' } } },
      scales: {
        y: { beginAtZero: false, grid: { color: 'rgba(255,255,255,0.08)' }, ticks: { color: 'rgba(255,255,255,0.7)' } },
        x: { grid: { color: 'rgba(255,255,255,0.08)' }, ticks: { color: 'rgba(255,255,255,0.7)' } }
      }
    }
  });
}
initProgressChart();

// ── BMI calculator ────────────────────────────────────────────────
const bmiModal = document.getElementById('bmi-calculator');
document.getElementById('close-bmi-btn')?.addEventListener('click', () => bmiModal?.classList.add('hidden'));
bmiModal?.addEventListener('click', e => { if (e.target === bmiModal) bmiModal.classList.add('hidden'); });

document.querySelectorAll('.bmi-calculator-btn').forEach(b =>
  b.addEventListener('click', () => bmiModal?.classList.remove('hidden'))
);

document.getElementById('bmi-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const h = parseFloat(document.getElementById('bmi-height')?.value) / 100;
  const w = parseFloat(document.getElementById('bmi-weight')?.value);
  if (!h || !w) return;
  const bmi = w / (h * h);
  document.getElementById('bmi-value').textContent = bmi.toFixed(1);
  const cat = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal weight' : bmi < 30 ? 'Overweight' : 'Obese';
  document.getElementById('bmi-category').textContent = cat;
  document.getElementById('bmi-result')?.classList.remove('hidden');
});

// ── Form handling ─────────────────────────────────────────────────
document.getElementById('workout-log-form')?.addEventListener('submit', e => {
  e.preventDefault();
  showToast('Workout logged! In the full version this saves to your account.', 'success');
});

document.getElementById('contact-form')?.addEventListener('submit', e => {
  e.preventDefault();
  showToast('Message sent! We will get back to you soon.', 'success');
});

// ── Toast notification ────────────────────────────────────────────
function showToast(msg, type = 'info') {
  const t = document.createElement('div');
  t.className = `fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] px-6 py-3 rounded-full font-bold text-sm shadow-lg transition-all
    ${type === 'success' ? 'bg-fitzone-neon text-fitzone-dark' : 'bg-fitzone-gray text-white'}`;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 500); }, 3000);
}

// ── Init on load ──────────────────────────────────────────────────
showSection('home');
