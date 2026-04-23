// ===== I18N =====
const translations = {
  en: {
    'meta.title': 'Pulse X9 — The Smartwatch That Knows You',
    'nav.features': 'Features', 'nav.specs': 'Specs', 'nav.colors': 'Colors', 'nav.reviews': 'Reviews',
    'hero.eyebrow': 'New · 2026 Edition',
    'hero.title': 'The smartwatch<br/>that <span class="grad">knows you</span>.',
    'hero.lead': "Track your heart, sleep, runs and recovery on a stunning AMOLED display — with a 14-day battery that won't quit on you.",
    'hero.buy': 'Buy Now — $249',
    'hero.watch': '▶ Watch the film',
    'hero.stat1': 'Battery life', 'hero.stat2': 'Water resistant', 'hero.stat3': 'Workout modes',
    'watch.date': 'Wed, Apr 22', 'watch.bpm': 'BPM',
    'features.title': 'Built for everything you do.',
    'features.sub': 'Performance, precision, and presence — wrapped in aerospace-grade titanium.',
    'features.f1.title': 'Always-on Health',
    'features.f1.desc': 'Continuous heart rate, SpO2, ECG and skin temperature tracking — accurate to medical-grade sensors.',
    'features.f2.title': '14-day Battery',
    'features.f2.desc': 'One charge. Two weeks of use. Fast-charge to a full day in just 12 minutes.',
    'features.f3.title': 'Dual-band GPS',
    'features.f3.desc': 'Pinpoint accuracy in the densest cities and the deepest trails — no phone required.',
    'features.f4.title': 'AMOLED Always-on',
    'features.f4.desc': 'A 1.4″ retina-class display you can read in direct sunlight. Sapphire crystal protected.',
    'colors.eyebrow': 'Personalize',
    'colors.title': 'Choose your finish.',
    'colors.sub': 'Three premium colorways. Crafted from a single block of titanium.',
    'colors.selected': 'Selected:',
    'colors.configure': 'Configure Yours',
    'specs.title': 'The details matter.',
    'specs.display': 'Display', 'specs.displayV': '1.4″ AMOLED, 600 nits',
    'specs.battery': 'Battery', 'specs.batteryV': '14 days typical use',
    'specs.water': 'Water', 'specs.waterV': '50m / 5 ATM',
    'specs.material': 'Material', 'specs.materialV': 'Grade-5 titanium',
    'specs.connect': 'Connectivity', 'specs.connectV': 'Bluetooth 5.3, Wi-Fi, NFC',
    'specs.sensors': 'Sensors', 'specs.sensorsV': 'HR, SpO2, ECG, Skin temp, Gyro',
    'specs.os': 'OS', 'specs.osV': 'PulseOS 4 (iOS & Android)',
    'specs.weight': 'Weight', 'specs.weightV': '38g without strap',
    'reviews.title': 'Loved by 200,000+ wearers.',
    'reviews.r1': '"Best smartwatch I\'ve ever owned. The battery is unreal."',
    'reviews.r1c': '— Maya R., Marathon Runner',
    'reviews.r2': '"It looks like a luxury watch but does everything my old fitness band did — and more."',
    'reviews.r2c': '— David K., Designer',
    'reviews.r3': '"The sleep tracking actually changed my routine. Worth every penny."',
    'reviews.r3c': '— Aisha L., Doctor',
    'cta.eyebrow': 'Free 2-day shipping · 30-day returns',
    'cta.title': 'Get yours today.',
    'cta.sub': 'Limited launch pricing. Ships in 24 hours.',
    'cta.add': 'Add to Cart',
    'footer.copy': '© 2026 Pulse Wearables, Inc.',
    'footer.tag': 'Designed in San Francisco. Built worldwide.',
    'cart.title': 'Your Cart',
    'cart.empty': 'Your cart is empty.',
    'cart.total': 'Total',
    'cart.checkout': 'Checkout',
    'toast.added': 'Added to cart',
    'toast.removed': 'Removed from cart',
    'toast.checkout': 'Order placed! Thank you.',
    'toast.empty': 'Your cart is empty.',
    'toast.trailer': 'Trailer coming soon...',
    'lang.switch': 'العربية',
  },
  ar: {
    'meta.title': 'بَلس X9 — الساعة الذكية التي تعرفك',
    'nav.features': 'المميزات', 'nav.specs': 'المواصفات', 'nav.colors': 'الألوان', 'nav.reviews': 'التقييمات',
    'hero.eyebrow': 'جديد · إصدار 2026',
    'hero.title': 'الساعة الذكية<br/>التي <span class="grad">تعرفك</span>.',
    'hero.lead': 'تابع نبضات قلبك، نومك، جريك وتعافيك على شاشة AMOLED مذهلة — مع بطارية تدوم ١٤ يوماً لا تتوقف.',
    'hero.buy': 'اشترِ الآن — ٢٤٩$',
    'hero.watch': '▶ شاهد الفيلم',
    'hero.stat1': 'عمر البطارية', 'hero.stat2': 'مقاومة للماء', 'hero.stat3': 'نمط تمرين',
    'watch.date': 'الأربعاء، ٢٢ أبريل', 'watch.bpm': 'نبضة',
    'features.title': 'مصمّمة لكل ما تفعله.',
    'features.sub': 'أداء، دقة، وحضور — مغلّفة بتيتانيوم بدرجة الفضاء.',
    'features.f1.title': 'صحة دائمة التشغيل',
    'features.f1.desc': 'تتبع مستمر لمعدل ضربات القلب، الأكسجين، تخطيط القلب ودرجة حرارة الجلد — بدقة المستشعرات الطبية.',
    'features.f2.title': 'بطارية ١٤ يوماً',
    'features.f2.desc': 'شحنة واحدة. أسبوعان من الاستخدام. شحن سريع ليوم كامل خلال ١٢ دقيقة فقط.',
    'features.f3.title': 'نظام GPS ثنائي النطاق',
    'features.f3.desc': 'دقة مطلقة في أكثف المدن وأعمق المسارات — دون الحاجة للهاتف.',
    'features.f4.title': 'شاشة AMOLED دائمة العمل',
    'features.f4.desc': 'شاشة ١٫٤ بوصة بدقة الريتنا تقرأها تحت أشعة الشمس المباشرة. محمية بكريستال السافاير.',
    'colors.eyebrow': 'خصّصها',
    'colors.title': 'اختر لمستك.',
    'colors.sub': 'ثلاث ألوان فاخرة. مصنوعة من قطعة واحدة من التيتانيوم.',
    'colors.selected': 'المختار:',
    'colors.configure': 'خصّص ساعتك',
    'specs.title': 'التفاصيل تهم.',
    'specs.display': 'الشاشة', 'specs.displayV': '١٫٤ بوصة AMOLED، ٦٠٠ شمعة',
    'specs.battery': 'البطارية', 'specs.batteryV': '١٤ يوماً استخدام عادي',
    'specs.water': 'الماء', 'specs.waterV': '٥٠ متر / ٥ ATM',
    'specs.material': 'الخامة', 'specs.materialV': 'تيتانيوم درجة ٥',
    'specs.connect': 'الاتصال', 'specs.connectV': 'بلوتوث ٥٫٣، واي فاي، NFC',
    'specs.sensors': 'المستشعرات', 'specs.sensorsV': 'نبض، أكسجين، ECG، حرارة، جيروسكوب',
    'specs.os': 'النظام', 'specs.osV': 'PulseOS 4 (iOS و Android)',
    'specs.weight': 'الوزن', 'specs.weightV': '٣٨ جرام بدون السوار',
    'reviews.title': 'يحبها أكثر من ٢٠٠٬٠٠٠ مستخدم.',
    'reviews.r1': '«أفضل ساعة ذكية امتلكتها. البطارية لا تُصدق.»',
    'reviews.r1c': '— مايا ر.، عدّاءة ماراثون',
    'reviews.r2': '«تبدو كساعة فاخرة وتفعل كل ما كانت تفعله سواري الرياضي القديم — وأكثر.»',
    'reviews.r2c': '— ديفيد ك.، مصمم',
    'reviews.r3': '«تتبع النوم غيّر روتيني فعلاً. تستحق كل قرش.»',
    'reviews.r3c': '— عائشة ل.، طبيبة',
    'cta.eyebrow': 'شحن مجاني خلال يومين · إرجاع خلال ٣٠ يوم',
    'cta.title': 'احصل عليها اليوم.',
    'cta.sub': 'سعر إطلاق محدود. تُشحن خلال ٢٤ ساعة.',
    'cta.add': 'أضف للسلة',
    'footer.copy': '© ٢٠٢٦ Pulse Wearables, Inc.',
    'footer.tag': 'مُصمَّمة في سان فرانسيسكو. مصنوعة عالمياً.',
    'cart.title': 'سلة المشتريات',
    'cart.empty': 'سلتك فارغة.',
    'cart.total': 'الإجمالي',
    'cart.checkout': 'إتمام الشراء',
    'toast.added': 'تمت الإضافة للسلة',
    'toast.removed': 'تم الحذف من السلة',
    'toast.checkout': 'تم تأكيد الطلب! شكراً لك.',
    'toast.empty': 'سلتك فارغة.',
    'toast.trailer': 'العرض الترويجي قريباً...',
    'lang.switch': 'English',
  },
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', lang === 'ar');

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) el.innerHTML = dict[key];
  });

  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = dict['lang.switch'];

  // Update color name
  const activeSwatch = document.querySelector('.swatch.active');
  if (activeSwatch) {
    const nameAttr = lang === 'ar' ? 'nameAr' : 'nameEn';
    document.getElementById('colorName').textContent = activeSwatch.dataset[nameAttr];
  }

  renderCart();
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'ar' : 'en');
});

// ===== WATCH UI =====
const screenTime = document.getElementById('screenTime');
function tick() {
  const d = new Date();
  const h = String(d.getHours()).padStart(2, '0');
  const m = String(d.getMinutes()).padStart(2, '0');
  if (screenTime) screenTime.textContent = `${h}:${m}`;
}
tick();
setInterval(tick, 10_000);

const bpmEl = document.getElementById('bpm');
setInterval(() => {
  if (bpmEl) bpmEl.textContent = 68 + Math.floor(Math.random() * 12);
}, 1500);

// ===== COLOR PICKER =====
const swatches = document.querySelectorAll('.swatch');
const colorPreview = document.getElementById('colorPreview');
const colorName = document.getElementById('colorName');
const watchCase = document.querySelector('.watch-case');

let selectedColor = { hex: '#0f0f12', nameEn: 'Midnight Black', nameAr: 'أسود منتصف الليل' };

function lighten(hex, amt) {
  const c = hex.replace('#', '');
  const r = Math.min(255, parseInt(c.slice(0, 2), 16) + amt);
  const g = Math.min(255, parseInt(c.slice(2, 4), 16) + amt);
  const b = Math.min(255, parseInt(c.slice(4, 6), 16) + amt);
  return `rgb(${r},${g},${b})`;
}

function applySelectedColor() {
  const color = selectedColor.hex;
  if (colorPreview) colorPreview.style.background = `radial-gradient(circle at 30% 30%, ${lighten(color, 25)}, ${color})`;
  if (watchCase) watchCase.style.background = `linear-gradient(160deg, ${lighten(color, 15)}, ${color})`;
  if (colorName) colorName.textContent = currentLang === 'ar' ? selectedColor.nameAr : selectedColor.nameEn;
}

swatches.forEach((sw) => {
  sw.addEventListener('click', () => {
    swatches.forEach((s) => s.classList.remove('active'));
    sw.classList.add('active');
    selectedColor = {
      hex: sw.dataset.color,
      nameEn: sw.dataset.nameEn,
      nameAr: sw.dataset.nameAr,
    };
    applySelectedColor();
    // Update existing cart items to reflect chosen color
    cart.forEach((item) => {
      item.color = selectedColor.hex;
      item.colorEn = selectedColor.nameEn;
      item.colorAr = selectedColor.nameAr;
    });
    saveCart();
    renderCart();
  });
});

// ===== TOAST =====
const toast = document.getElementById('toast');
let toastTimer;
function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

// ===== CART =====
let cart = JSON.parse(localStorage.getItem('cart') || '[]');

const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartItemsEl = document.getElementById('cartItems');
const cartEmptyEl = document.getElementById('cartEmpty');
const cartTotalEl = document.getElementById('cartTotal');
const cartCountEl = document.getElementById('cartCount');

function saveCart() { localStorage.setItem('cart', JSON.stringify(cart)); }

function openCart() {
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('show');
  cartDrawer.setAttribute('aria-hidden', 'false');
}
function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('show');
  cartDrawer.setAttribute('aria-hidden', 'true');
}

document.getElementById('cartToggle').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

function addToCart(name, price) {
  const existing = cart.find((i) => i.name === name);
  if (existing) {
    existing.qty += 1;
    existing.color = selectedColor.hex;
    existing.colorEn = selectedColor.nameEn;
    existing.colorAr = selectedColor.nameAr;
  } else {
    cart.push({
      name,
      price: Number(price),
      qty: 1,
      color: selectedColor.hex,
      colorEn: selectedColor.nameEn,
      colorAr: selectedColor.nameAr,
    });
  }
  saveCart();
  renderCart();
  showToast(translations[currentLang]['toast.added']);
  // pulse cart icon
  cartCountEl.classList.remove('bump'); void cartCountEl.offsetWidth; cartCountEl.classList.add('bump');
}

function removeFromCart(name) {
  cart = cart.filter((i) => i.name !== name);
  saveCart();
  renderCart();
  showToast(translations[currentLang]['toast.removed']);
}

function updateQty(name, delta) {
  const item = cart.find((i) => i.name === name);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  renderCart();
}

function renderCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + i.qty * i.price, 0);
  cartCountEl.textContent = count;
  cartCountEl.classList.toggle('visible', count > 0);
  cartTotalEl.textContent = `$${total}`;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '';
    cartEmptyEl.style.display = 'block';
    return;
  }
  cartEmptyEl.style.display = 'none';
  cartItemsEl.innerHTML = cart.map((i) => {
    const c = i.color || '#0f0f12';
    const cName = currentLang === 'ar' ? (i.colorAr || '') : (i.colorEn || '');
    const thumbBg = `linear-gradient(135deg, ${lighten(c, 20)}, ${c})`;
    return `
    <div class="cart-item">
      <div class="cart-item-thumb" style="background:${thumbBg}"></div>
      <div class="cart-item-info">
        <strong>${i.name}</strong>
        <span class="cart-item-color"><span class="dot" style="background:${c}"></span>${cName}</span>
        <span>$${i.price}</span>
        <div class="qty">
          <button data-qty="-1" data-name="${i.name}">−</button>
          <span>${i.qty}</span>
          <button data-qty="1" data-name="${i.name}">+</button>
        </div>
      </div>
      <button class="cart-item-remove" data-remove="${i.name}" aria-label="Remove">✕</button>
    </div>
  `;
  }).join('');
  cartItemsEl.querySelectorAll('[data-qty]').forEach((b) => {
    b.addEventListener('click', () => updateQty(b.dataset.name, Number(b.dataset.qty)));
  });
  cartItemsEl.querySelectorAll('[data-remove]').forEach((b) => {
    b.addEventListener('click', () => removeFromCart(b.dataset.remove));
  });
}

document.querySelectorAll('.add-to-cart').forEach((btn) => {
  btn.addEventListener('click', () => addToCart(btn.dataset.product, btn.dataset.price));
});

document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (cart.length === 0) { showToast(translations[currentLang]['toast.empty']); return; }
  cart = []; saveCart(); renderCart(); closeCart();
  showToast(translations[currentLang]['toast.checkout']);
});

// ===== MISC =====
document.getElementById('ctaWatch')?.addEventListener('click', () => showToast(translations[currentLang]['toast.trailer']));

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

const revealEls = document.querySelectorAll('.feature, .spec, .review-grid blockquote, .section-title, .cta-card');
revealEls.forEach((el) => el.classList.add('reveal'));
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }),
  { threshold: 0.12 }
);
revealEls.forEach((el) => io.observe(el));

// Init
applyLang(currentLang);
renderCart();
