// ===== Sticky navbar =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 8);
});

// ===== Mobile menu =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger?.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks?.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ===== Reveal-on-scroll =====
const revealObs = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); }
  }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => revealObs.observe(el));

// ===== Animated counters =====
const counterObs = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseInt(el.dataset.count, 10);
    const start = performance.now();
    const fmt = (n) => {
      if (target >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M+';
      if (target >= 1000) return Math.round(n / 1000) + 'K+';
      return Math.round(n).toString();
    };
    const tick = (now) => {
      const t = Math.min(1, (now - start) / 1600);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = fmt(target * eased);
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = fmt(target);
    };
    requestAnimationFrame(tick);
    counterObs.unobserve(el);
  }),
  { threshold: 0.4 }
);
document.querySelectorAll('[data-count]').forEach((el) => counterObs.observe(el));

// ===== Toast =====
const toast = document.getElementById('toast');
let toastTimer;
function showToast(msg, type = 'success') {
  toast.textContent = msg;
  toast.className = 'toast ' + type;
  toast.hidden = false;
  requestAnimationFrame(() => toast.classList.add('show'));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => (toast.hidden = true), 300);
  }, 3500);
}

// ===== Modal system =====
const modals = document.querySelectorAll('.modal');
function openModal(id) {
  closeAllModals();
  const m = document.getElementById('modal-' + id);
  if (!m) return;
  m.hidden = false;
  document.body.style.overflow = 'hidden';
  setTimeout(() => m.querySelector('input')?.focus(), 50);
}
function closeAllModals() {
  modals.forEach((m) => (m.hidden = true));
  document.body.style.overflow = '';
}
document.querySelectorAll('[data-open]').forEach((el) =>
  el.addEventListener('click', (e) => { e.preventDefault(); openModal(el.dataset.open); })
);
document.querySelectorAll('[data-close]').forEach((el) =>
  el.addEventListener('click', closeAllModals)
);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAllModals(); });

// ===== Email sender (uses default mail client) =====
function sendEmail(to, subject, body) {
  const url = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  // Open in a hidden frame so it doesn't disrupt the page
  const a = document.createElement('a');
  a.href = url;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => a.remove(), 100);
}

// ===== Account state (localStorage) =====
const ACCOUNTS_KEY = 'edulearn_accounts';
const SESSION_KEY = 'edulearn_session';
const SUBS_KEY = 'edulearn_subs';

const getAccounts = () => JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || '{}');
const saveAccounts = (a) => localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(a));
const getSession = () => JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
const setSession = (s) => s ? localStorage.setItem(SESSION_KEY, JSON.stringify(s)) : localStorage.removeItem(SESSION_KEY);

const accountPill = document.getElementById('accountPill');
const accountEmail = document.getElementById('accountEmail');
const signInBtn = document.querySelector('.nav-actions [data-open="signin"]');
const signUpBtn = document.querySelector('.nav-actions [data-open="signup"]');
const signOut = document.getElementById('signOut');

function renderAuth() {
  const s = getSession();
  if (s) {
    accountPill.hidden = false;
    accountEmail.textContent = s.email;
    if (signInBtn) signInBtn.hidden = true;
    if (signUpBtn) {
      signUpBtn.textContent = 'Dashboard';
      signUpBtn.dataset.open = '';
    }
  } else {
    accountPill.hidden = true;
    if (signInBtn) signInBtn.hidden = false;
    if (signUpBtn) {
      signUpBtn.textContent = 'Get started';
      signUpBtn.dataset.open = 'signup';
    }
  }
}
signOut?.addEventListener('click', () => {
  setSession(null);
  renderAuth();
  showToast('Signed out successfully');
});
renderAuth();

// ===== Sign up =====
document.querySelector('[data-form="signup"]').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const accounts = getAccounts();
  if (accounts[data.email]) { showToast('An account with that email already exists', 'error'); return; }
  accounts[data.email] = { name: data.name, password: data.password, createdAt: Date.now() };
  saveAccounts(accounts);
  setSession({ email: data.email, name: data.name });
  closeAllModals();
  renderAuth();
  showToast(`Welcome, ${data.name}! Check your email for a confirmation.`);
  sendEmail(
    data.email,
    'Welcome to EduLearn — Your account is ready',
    `Hi ${data.name},\n\nThanks for joining EduLearn! Your 7-day free trial starts now.\n\nYou now have unlimited access to 12,000+ courses, live cohorts, and verified certificates.\n\nStart learning here: ${location.origin}\n\nHappy learning,\nThe EduLearn Team`
  );
  e.target.reset();
});

// ===== Sign in =====
document.querySelector('[data-form="signin"]').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const accounts = getAccounts();
  const account = accounts[data.email];
  if (!account || account.password !== data.password) {
    showToast('Invalid email or password', 'error');
    return;
  }
  setSession({ email: data.email, name: account.name });
  closeAllModals();
  renderAuth();
  showToast(`Welcome back, ${account.name}!`);
  e.target.reset();
});

// ===== Buy / Checkout =====
let currentPlan = null;
let currentBilling = 'monthly';

function openBuyModal(plan, monthly, yearly) {
  currentPlan = { name: plan, monthly: +monthly, yearly: +yearly };
  updateBuyPrice();
  // Pre-fill email if signed in
  const s = getSession();
  if (s) document.querySelector('[data-form="buy"] [name="email"]').value = s.email;
  openModal('buy');
}
function updateBuyPrice() {
  if (!currentPlan) return;
  const price = '$' + (currentBilling === 'yearly' ? currentPlan.yearly : currentPlan.monthly);
  document.getElementById('buyPlanName').textContent = currentPlan.name;
  document.getElementById('buyPlanPrice').textContent = price;
  document.getElementById('buyPayAmount').textContent = price;
}
document.querySelectorAll('[data-buy]').forEach((btn) =>
  btn.addEventListener('click', () => openBuyModal(btn.dataset.buy, btn.dataset.priceMonthly, btn.dataset.priceYearly))
);

// Card formatters
const cardInput = document.querySelector('[name="cardnumber"]');
cardInput?.addEventListener('input', (e) => {
  let v = e.target.value.replace(/\D/g, '').slice(0, 16);
  e.target.value = v.replace(/(.{4})/g, '$1 ').trim();
});
const expInput = document.querySelector('[name="exp"]');
expInput?.addEventListener('input', (e) => {
  let v = e.target.value.replace(/\D/g, '').slice(0, 4);
  if (v.length >= 3) v = v.slice(0, 2) + '/' + v.slice(2);
  e.target.value = v;
});

document.querySelector('[data-form="buy"]').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const btn = e.target.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.innerHTML = 'Processing...';
  setTimeout(() => {
    const subs = JSON.parse(localStorage.getItem(SUBS_KEY) || '[]');
    subs.push({
      plan: currentPlan.name,
      billing: currentBilling,
      price: currentBilling === 'yearly' ? currentPlan.yearly : currentPlan.monthly,
      email: data.email,
      cardname: data.cardname,
      last4: data.cardnumber.replace(/\s/g, '').slice(-4),
      date: new Date().toISOString(),
    });
    localStorage.setItem(SUBS_KEY, JSON.stringify(subs));
    closeAllModals();
    btn.disabled = false;
    btn.innerHTML = 'Pay <span id="buyPayAmount">$' + (currentBilling === 'yearly' ? currentPlan.yearly : currentPlan.monthly) + '</span> &amp; subscribe';
    showToast(`🎉 Subscription to ${currentPlan.name} confirmed! Receipt sent to your email.`);
    sendEmail(
      data.email,
      `Your EduLearn ${currentPlan.name} subscription is active`,
      `Hi ${data.cardname},\n\nThank you for subscribing to EduLearn ${currentPlan.name}!\n\nPlan: ${currentPlan.name}\nBilling: ${currentBilling}\nAmount: $${currentBilling === 'yearly' ? currentPlan.yearly : currentPlan.monthly}/${currentBilling === 'yearly' ? 'month (billed yearly)' : 'month'}\nCard ending in: ${data.cardnumber.replace(/\s/g, '').slice(-4)}\n\nYou can manage your subscription anytime from your account settings.\n\nWelcome aboard!\nThe EduLearn Team`
    );
    e.target.reset();
  }, 1200);
});

// ===== Pricing toggle =====
const billingButtons = document.querySelectorAll('.billing-toggle button');
const amounts = document.querySelectorAll('.amount');
billingButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    billingButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    currentBilling = btn.dataset.billing;
    amounts.forEach((a) => {
      const v = currentBilling === 'yearly' ? a.dataset.yearly : a.dataset.monthly;
      a.textContent = '$' + v;
    });
    updateBuyPrice();
  });
});

// ===== Hero email form =====
const heroForm = document.getElementById('heroForm');
heroForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = heroForm.querySelector('input').value.trim();
  if (!email) return;
  // Open signup pre-filled
  openModal('signup');
  const signupEmail = document.querySelector('[data-form="signup"] [name="email"]');
  if (signupEmail) signupEmail.value = email;
  document.querySelector('[data-form="signup"] [name="name"]')?.focus();
  heroForm.reset();
});
