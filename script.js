/* ==========================================================
   DATA
========================================================== */
// لقد قمت بإضافة خاصية `link` لكل مشروع. استبدل الرابط برابط مشروعك الحقيقي.
const projects = [
  { 
    title: "Epic Games Store Clone", 
    cat: "Landing Page", 
    desc: "Sticky nav, hero, game grid and a working sign-in modal with localStorage.", 
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/your-username/epic-games-clone" // ضع رابطك هنا
  },
  { 
    title: "Developer Portfolio",    
    cat: "Portfolio",    
    desc: "Clean, responsive personal portfolio with smooth sections and hand-crafted CSS.", 
    tags: ["HTML", "CSS", "JavaScript"],
    link: " https://riffiabdelamlik.github.io/my-protfolio/" // ضع رابطك هنا
  },
  { 
    title: "Contact Page",           
    cat: "UI Template",  
    desc: "Focused, accessible contact page with client-side validation.", 
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/your-username/contact-page" // ضع رابطك هنا
  },
  { 
    title: "Aura Storefront",        
    cat: "Landing Page", 
    desc: "E-commerce landing with CSS Grid and scroll interactions.", 
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/your-username/aura-store" // ضع رابطك هنا
  },
  { 
    title: "Studio Minimal",         
    cat: "Portfolio",    
    desc: "Editorial portfolio focused on typography and pacing.", 
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/your-username/studio-minimal" // ضع رابطك هنا
  },
  { 
    title: "Vertex Dashboard",       
    cat: "UI Template",  
    desc: "Static fintech dashboard with CSS variables for theming.", 
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/your-username/vertex-dashboard" // ضع رابطك هنا
  },
];

/* ==========================================================
   RENDER PROJECTS
========================================================== */
const grid = document.getElementById("projectGrid");

function renderProjects(filter = "all") {
  const list = filter === "all" ? projects : projects.filter(p => p.cat === filter);

  // التعديل هنا: إضافة <a> تغلف البطاقة بالكامل لتعمل كرابط
  grid.innerHTML = list.map(p => `
    <a href="${p.link}" target="_blank" class="card-link">
      <article class="card glass reveal visible">
        <div class="thumb"></div>
        <div class="body">
          <span class="cat">${p.cat}</span>
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="tags">
            ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
          </div>
        </div>
      </article>
    </a>
  `).join("");
}

renderProjects();

/* ==========================================================
   CATEGORY FILTERS
========================================================== */
document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.f);
  });
});

/* ==========================================================
   NAV: SCROLL STATE + MOBILE MENU
========================================================== */
const nav = document.getElementById("nav");
const navLinks = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuBtn");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));

document.querySelectorAll("#navLinks a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

/* ==========================================================
   SCROLL REVEAL
========================================================== */
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      entry.target.querySelectorAll(".bar span").forEach(s => {
        s.style.width = s.dataset.w + "%";
      });
    }
  });
}, { threshold: 0.15 });

// إعطاء وقت قصير للمتصفح ليقوم بتعريف العناصر الجديدة قبل مراقبتها
setTimeout(() => {
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}, 100);

/* ==========================================================
   CONTACT FORM
========================================================== */
const toast = document.getElementById("toast");

function showToast(message, type = "success") {
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  setTimeout(() => toast.classList.remove("show"), 3500);
}

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    showToast("Please fill out every field.", "error");
    return;
  }

  // Demo persistence — replace with a fetch() call to your backend
  const store = JSON.parse(localStorage.getItem("contactMessages") || "[]");
  store.push({ name, email, message, date: new Date().toISOString() });
  localStorage.setItem("contactMessages", JSON.stringify(store));

  e.target.reset();
  showToast("Thanks! I'll get back to you within 24 hours.");
});

/* ==========================================================
   FOOTER YEAR
========================================================== */
document.getElementById("year").textContent = new Date().getFullYear();