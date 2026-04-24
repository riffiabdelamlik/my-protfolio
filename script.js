/* ══════════════════════════════════
   TRANSLATIONS
══════════════════════════════════ */
const translations = {
  en: {
    "nav.about":"About","nav.projects":"Projects",
    "nav.services":"Services","nav.contact":"Contact","nav.hire":"Hire Me",
    "hero.badge":"Available for freelance work",
    "hero.h1a":"Building ","hero.h1b":"fast, beautiful","hero.h1c":" web experiences.",
    "hero.p":"I'm Riffi Abdelmalik, a front-end developer crafting accessible, high-performance interfaces with HTML, CSS, and JavaScript.",
    "hero.cta1":"View Work →","hero.cta2":"Get in Touch",
    "about.h2a":"Design driven by ","about.h2b":"purpose.",
    "about.p":"I am a dedicated Frontend Developer passionate about turning complex ideas into simple, beautiful, and functional digital experiences.",
    "skills.0":"HTML5 & Semantic Markup","skills.1":"CSS3, Flexbox & Grid",
    "skills.2":"JavaScript (ES6+)","skills.3":"Responsive UI","skills.4":"Animations & Performance",
    "projects.h2a":"Featured ","projects.h2b":"Work",
    "projects.p":"A selection of recent front-end builds. Click any card to explore all projects.",
    "services.h2a":"What I ","services.h2b":"Offer","services.p":"End-to-end front-end services.",
    "services.0.title":"Landing Pages",
    "services.0.desc":"High-converting marketing pages with smooth animations and responsive layouts.",
    "services.1.title":"Multi-Page Websites",
    "services.1.desc":"Complete, SEO-friendly websites with great user experience across all devices.",
    "contact.h2a":"Let's ","contact.h2b":"Talk",
    "contact.p":"Have a project in mind? Send a message.",
    "contact.nameLbl":"Name","contact.namePh":"Your name",
    "contact.emailLbl":"Email","contact.emailPh":"you@example.com",
    "contact.msgLbl":"Message","contact.msgPh":"Tell me about your project...",
    "contact.send":"Send Message →","contact.sending":"Sending…",
    "contact.success":"Message sent! I'll get back to you soon.",
    "contact.error":"Oops! Something went wrong.",
    "contact.locationLbl":"Location","contact.locationVal":"Algeria · Worldwide",
    "contact.responseLbl":"Response time","contact.responseVal":"Within 24 hours",
    "contact.boxTitle":"Ready to start your project?",
    "contact.boxP":"Whether you need a landing page or a full website — I'm here to help.",
    "footer.crafted":"Crafted with care.",
  },
  ar: {
    "nav.about":"عن","nav.projects":"المشاريع",
    "nav.services":"الخدمات","nav.contact":"تواصل","nav.hire":"وظفني",
    "hero.badge":"متاح للعمل الحر",
    "hero.h1a":"بناء ","hero.h1b":"تجارب ويب سريعة وجميلة","hero.h1c":".",
    "hero.p":"أنا رفي عبد المالك، مطور واجهات أمامية أصنع واجهات سريعة وسهلة الوصول بـ HTML وCSS وJavaScript.",
    "hero.cta1":"عرض أعمالي ←","hero.cta2":"تواصل معي",
    "about.h2a":"تصميم مدفوع ","about.h2b":"بالهدف.",
    "about.p":"أنا مطور واجهات أمامية متحمس لتحويل الأفكار المعقدة إلى تجارب رقمية بسيطة وجميلة وعملية.",
    "skills.0":"HTML5 والترميز الدلالي","skills.1":"CSS3 وFlexbox وGrid",
    "skills.2":"JavaScript (ES6+)","skills.3":"واجهات متجاوبة","skills.4":"الرسوم المتحركة والأداء",
    "projects.h2a":"أعمال ","projects.h2b":"مميزة",
    "projects.p":"مجموعة من أحدث مشاريع الواجهات. انقر على أي بطاقة لاستعراض المشاريع.",
    "services.h2a":"ما ","services.h2b":"أقدمه","services.p":"خدمات واجهات أمامية متكاملة.",
    "services.0.title":"صفحات الهبوط",
    "services.0.desc":"صفحات تسويقية عالية التحويل مع رسوم متحركة سلسة وتخطيطات متجاوبة.",
    "services.1.title":"مواقع متعددة الصفحات",
    "services.1.desc":"مواقع كاملة صديقة لمحركات البحث مع تجربة مستخدم ممتازة.",
    "contact.h2a":"لنتحدث ","contact.h2b":"معًا",
    "contact.p":"لديك مشروع في ذهنك؟ أرسل رسالة.",
    "contact.nameLbl":"الاسم","contact.namePh":"اسمك",
    "contact.emailLbl":"البريد الإلكتروني","contact.emailPh":"example@email.com",
    "contact.msgLbl":"الرسالة","contact.msgPh":"أخبرني عن مشروعك...",
    "contact.send":"إرسال الرسالة ←","contact.sending":"جارٍ الإرسال…",
    "contact.success":"تم إرسال رسالتك! سأتواصل معك قريبًا.",
    "contact.error":"عذرًا! حدث خطأ ما.",
    "contact.locationLbl":"الموقع","contact.locationVal":"الجزائر · في كل مكان",
    "contact.responseLbl":"وقت الرد","contact.responseVal":"خلال 24 ساعة",
    "contact.boxTitle":"هل أنت مستعد لبدء مشروعك؟",
    "contact.boxP":"سواء احتجت صفحة هبوط أو موقعًا متكاملًا — أنا هنا للمساعدة.",
    "footer.crafted":"صُنع بعناية.",
  }
};

let currentLang = "en";

function applyLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir  = lang === "ar" ? "rtl" : "ltr";
  document.getElementById("langBtn").textContent = lang === "en" ? "🇩🇿 AR" : "🇬🇧 EN";

  // Text nodes
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  // Placeholder
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) el.placeholder = t[key];
  });
}

document.getElementById("langBtn").addEventListener("click", () => {
  applyLang(currentLang === "en" ? "ar" : "en");
});

/* ══════════════════════════════════
   PROJECT DATA
══════════════════════════════════ */
const categories = [
  {
    slug:"personal", label:"Modern Portfolio", icon:"◆",
    tagline:"Personal portfolio projects showcasing creativity and code.",
    image:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
    desc:"My main portfolio designed with advanced CSS effects and smooth animations.",
    projects:[
      { title:"Main Portfolio v2", tags:["HTML","CSS","JS"], link:"https://riffiabdelamlik.github.io/my-protfolio/", image:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80" },
      { title:"Dark Theme Portfolio", tags:["HTML","CSS"], link:"https://riffiabdelamlik.github.io/my-protfolio/", image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80" },
      { title:"Creative Resume Page", tags:["HTML","CSS","JS"], link:"https://riffiabdelamlik.github.io/my-protfolio/", image:"https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80" },
      { title:"Portfolio with Filters", tags:["HTML","CSS","JS"], link:"https://riffiabdelamlik.github.io/my-protfolio/", image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" },
    ]
  },
  {
    slug:"ui-design", label:"Landing Page", icon:"◉",
    tagline:"High-converting & Stunning Landing Pages.",
    image:"https://images.unsplash.com/photo-1545665277-5937489579f2?auto=format&fit=crop&w=600&q=80",
    desc:"Foucesd on speed, UX, and conversion rates to turn visitors int customers and achieve your business goals.",
    projects:[
      { title:"E-Commerce", tags:["HTML","CSS"], link:"https://riffiabdelamlik.github.io/my-protfolio/watch/watch.html", image:"https://images.unsplash.com/photo-1545665277-5937489579f2?auto=format&fit=crop&w=600&q=80" },
      { title:"Service Booking", tags:["HTML","CSS"], link:"https://riffiabdelamlik.github.io/my-protfolio/food/food.html", image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
      { title:"Ed-Teach-Platforme", tags:["HTML","CSS"], link:"https://riffiabdelamlik.github.io/my-protfolio/study/index.html", image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
      { title:"Team Members Grid", tags:["HTML","CSS"], link:"https://riffiabdelamlik.github.io/my-protfolio/", image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" },
    ]
  },
  {
    slug:"Corporate Solution", label:"End-To-End Comprehensive Web Development", icon:"◇",
    tagline:"Professional Multi-Page Business Site.",
    image:"https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=600&q=80",
    desc:" A complete digital presence for companies, featuring service modules, team profiles, and dynamic contact sections.",
    projects:[
      { title:"Legal Solution", tags:["HTML","CSS","JS"], link:"https://riffiabdelamlik.github.io/my-protfolio/busnies/company.html", image:"https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=600&q=80" },
      { title:"Consultancy Hub", tags:["HTML","CSS","JS"], link:"https://riffiabdelamlik.github.io/my-protfolio/", image:"https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&q=80" },
      { title:"Image Gallery Lightbox", tags:["HTML","CSS","JS"], link:"https://riffiabdelamlik.github.io/my-protfolio/", image:"https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=80" },
      { title:"Dark/Light Mode Toggle", tags:["HTML","CSS","JS"], link:"https://riffiabdelamlik.github.io/my-protfolio/", image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80" },
    ]
  }
];

/* ══════════════════════════════════
   RENDER / ROUTING
══════════════════════════════════ */
function renderHomePage() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;
  grid.innerHTML = categories.map(cat => `
    <a href="#" class="card-link reveal" onclick="showCategory('${cat.slug}');return false;">
      <article class="card glass">
        <div class="thumb-wrap">
          <img class="thumb" src="${cat.image}" alt="${cat.label}" loading="lazy">
          <div class="thumb-overlay"><span>View ${cat.projects.length} Projects →</span></div>
          <div class="count-badge">${cat.projects.length} projects</div>
        </div>
        <div class="body">
          <span class="cat">${cat.label}</span>
          <h3>${cat.tagline}</h3>
          <p>${cat.desc}</p>
          <div class="card-footer"><span>Explore all ${cat.projects.length}</span><span>→</span></div>
        </div>
      </article>
    </a>
  `).join("");
  observeAll();
}

function showCategory(slug) {
  const cat = categories.find(c => c.slug === slug);
  if (!cat) return;
  document.body.innerHTML = `
    <div style="min-height:100vh;background:var(--bg);color:var(--text);">
      <nav class="nav scrolled" style="position:sticky;top:0;">
        <div class="container nav-inner">
          <a href="index.html" class="logo"><span class="gradient-text">Riffi</span>.dev</a>
          <a href="index.html" style="color:var(--muted);font-size:.9rem;">← Back to Projects</a>
        </div>
      </nav>
      <main class="container" style="padding:4rem 1.25rem;">
        <div style="margin-bottom:3rem;">
          <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:1rem;">
            <div style="width:40px;height:40px;border-radius:.7rem;background:linear-gradient(135deg,#3b82f6,#8b5cf6,#ec4899);display:grid;place-items:center;color:#fff;font-size:1.1rem;">${cat.icon}</div>
            <span style="font-size:.8rem;color:var(--muted);text-transform:uppercase;letter-spacing:.1em;">${cat.projects.length} Projects</span>
          </div>
          <h1 style="font-size:clamp(2rem,5vw,3.5rem);font-weight:700;background:linear-gradient(135deg,#3b82f6,#8b5cf6,#ec4899);-webkit-background-clip:text;background-clip:text;color:transparent;">${cat.label}</h1>
          <p style="color:var(--muted);margin-top:.75rem;font-size:1.05rem;">${cat.tagline}</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,340px),1fr));gap:1.5rem;">
          ${cat.projects.map(p => `
            <a href="${p.link}" target="_blank" rel="noreferrer" style="display:block;text-decoration:none;color:inherit;" class="card-link">
              <article class="card glass">
                <div class="thumb-wrap">
                  <img class="thumb" src="${p.image}" alt="${p.title}" loading="lazy">
                  <div class="thumb-overlay"><span>View Project →</span></div>
                </div>
                <div class="body">
                  <h3>${p.title}</h3>
                  <div class="tags" style="display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.75rem;">
                    ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
                  </div>
                </div>
              </article>
            </a>
          `).join("")}
        </div>
        <div style="text-align:center;margin-top:4rem;">
          <a href="index.html#contact" class="btn btn-primary">Get in Touch →</a>
        </div>
      </main>
    </div>
  `;
}

/* ══════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    entry.target.querySelectorAll(".bar span").forEach(b => {
      b.style.width = b.dataset.w + "%";
    });
  });
}, { threshold: 0.12 });

function observeAll() {
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

/* ══════════════════════════════════
   NAVBAR
══════════════════════════════════ */
window.addEventListener("scroll", () => {
  document.getElementById("nav")?.classList.toggle("scrolled", window.scrollY > 50);
}, { passive: true });

const menuBtn  = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.classList.toggle("open", open);
});
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.classList.remove("open");
  });
});

/* ══════════════════════════════════
   CONTACT FORM
══════════════════════════════════ */
document.getElementById("contactForm").addEventListener("submit", async e => {
  e.preventDefault();
  const btn    = e.target.querySelector("button[type=submit]");
  const status = document.getElementById("formStatus");
  const t      = translations[currentLang];
  btn.disabled = true;
  btn.textContent = t["contact.sending"];
  status.className = "form-status";
  status.textContent = "";
  try {
    const res = await fetch(e.target.action, {
      method:"POST", body:new FormData(e.target),
      headers:{Accept:"application/json"}
    });
    if (res.ok) {
      status.className = "form-status success";
      status.textContent = t["contact.success"];
      e.target.reset();
    } else throw new Error();
  } catch {
    status.className = "form-status error";
    status.textContent = t["contact.error"];
  }
  btn.disabled = false;
  btn.textContent = t["contact.send"];
  setTimeout(() => { status.textContent = ""; }, 5000);
});

/* ══════════════════════════════════
   INIT
══════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  renderHomePage();
  observeAll();
  applyLang("en");
});