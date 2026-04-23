const services = [
  { slug: "strategy-consulting", title: "Strategy Consulting", tagline: "Clarity in complex markets.", icon: "S",
    hero: "We partner with executive teams to define clear, actionable strategic direction that drives sustainable growth and competitive advantage.",
    body: ["In an era of rapid market evolution, competitive advantage belongs to organizations that can see beyond the immediate horizon while executing flawlessly in the present. Our Strategy Consulting practice is designed for mid-market companies facing critical inflection points—whether navigating aggressive growth, defending against disruption, or evaluating transformative acquisitions.", "We believe strategy is not a theoretical exercise delivered in a dense presentation. It is a series of hard choices about where to play and how to win. Our methodology strips away management consulting jargon, focusing instead on objective market realities, internal capabilities, and empirical data.", "Working closely with the C-suite and board of directors, we help articulate a cohesive vision, identify the most viable pathways to achieve it, and build the organizational alignment necessary for execution. We bring an external, unbiased perspective that challenges entrenched assumptions and uncovers blind spots.", "The result is a clear, executable roadmap. Not just a vision for the future, but a precise articulation of the operational shifts, resource allocations, and capability developments required to get there. We measure our success not by the elegance of our frameworks, but by the tangible enterprise value our strategic interventions create."],
    included: ["Comprehensive market and competitive landscape analysis", "Strategic option modeling and scenario planning", "Core capability and resource gap assessment", "Go-to-market strategy and positioning definition", "M&A target identification and strategic rationale", "Executive alignment workshops and facilitation", "Multi-year strategic roadmap development"],
    process: [["Discovery & Immersion", "We embed deeply within your organization to understand your current position, constraints, and aspirations."], ["Market Diagnostics", "Rigorous analysis of external forces, competitive dynamics, and emerging opportunities."], ["Option Formulation", "Developing distinct, viable strategic pathways and evaluating their associated risks and returns."], ["Strategic Selection", "Facilitating leadership alignment around a singular, cohesive direction."], ["Execution Planning", "Translating the strategy into actionable initiatives, resource requirements, and timelines."]],
    audience: ["CEOs and Boards navigating market disruption or stagnation.", "Organizations preparing for significant capital events or acquisitions.", "Leadership teams requiring alignment on long-term direction.", "Companies seeking to enter new markets or geographic regions."],
    seo: { title: "Strategy Consulting | Northwind Consulting", desc: "Actionable strategic direction and competitive advantage for mid-market companies." } },
  { slug: "operations-optimization", title: "Operations Optimization", tagline: "Frictionless execution.", icon: "O",
    hero: "We systematically dismantle operational bottlenecks, transforming sluggish processes into efficient, scalable engines of value creation.",
    body: ["Growth often outpaces the systems designed to support it. What worked at $50M in revenue frequently fractures at $150M. Our Operations Optimization practice identifies and eliminates the friction that degrades margins, frustrates employees, and ultimately impacts the customer experience.", "We do not approach operations purely as an exercise in cost reduction. While efficiency is critical, true optimization is about building resilience and scalability. We examine the entire value chain—from procurement and production to delivery and customer service—identifying constraints and redesigning workflows for maximum throughput.", "Our approach is deeply pragmatic. We spend time on the factory floor, in the warehouse, and shadowing customer service representatives. We look for the unwritten workarounds and the hidden inefficiencies that rarely appear in high-level operational dashboards.", "By establishing clear standardized operating procedures, implementing robust performance metrics, and fostering a culture of continuous improvement, we help organizations achieve operational excellence. The outcome is a more agile organization capable of delivering higher quality at lower cost, with the capacity to scale without proportional increases in overhead."],
    included: ["End-to-end value stream mapping and constraint analysis", "Process redesign and standardized operating procedures (SOPs)", "Supply chain and procurement optimization", "Working capital and inventory management improvement", "Key Performance Indicator (KPI) framework development", "Lean and Six Sigma methodology implementation", "Organizational design and span-of-control review"],
    process: [["Current State Assessment", "Mapping existing workflows to identify bottlenecks, redundancies, and value leakage."], ["Root Cause Analysis", "Isolating the fundamental systemic issues driving operational friction."], ["Future State Design", "Architecting optimized processes that maximize throughput and minimize waste."], ["Implementation & Piloting", "Rolling out new processes in controlled environments to validate impact."], ["Standardization & Training", "Embedding the new operating model into the organizational culture."]],
    audience: ["Companies experiencing declining margins despite revenue growth.", "Organizations suffering from chronic delivery delays or quality issues.", "Businesses preparing for rapid scaling requiring robust operational foundations.", "Post-merger entities needing to consolidate redundant operational functions."],
    seo: { title: "Operations Optimization | Northwind Consulting", desc: "Transform operations into scalable engines of value creation." } },
  { slug: "digital-transformation", title: "Digital Transformation", tagline: "Modernize without disruption.", icon: "D",
    hero: "We guide organizations through the complexities of technological modernization, ensuring digital investments translate into tangible business outcomes.",
    body: ["Digital transformation is rarely just about technology; it is fundamentally about how technology enables new ways of working and delivering value. Too often, companies invest heavily in new systems only to digitize existing inefficiencies. Our Digital Transformation practice ensures that technological modernization is firmly anchored to strategic business objectives.", "We act as an independent, objective advisor in a landscape crowded with vendor bias. We help mid-market companies navigate the transition from legacy, monolithic systems to agile, integrated architectures. Our focus is on pragmatic modernization—avoiding 'big bang' deployments in favor of iterative, value-driven technological adoption.", "Our work encompasses everything from ERP and CRM selection to data architecture design and the automation of manual workflows. We ensure that your digital infrastructure is not just current, but capable of adapting to future technological shifts.", "Successful transformation requires as much focus on people as it does on software. We integrate change management principles directly into our digital initiatives, ensuring that your team is prepared, trained, and motivated to utilize new tools to their fullest potential."],
    included: ["Current state technology ecosystem assessment", "Digital capability gap analysis and roadmap development", "Vendor evaluation, selection, and negotiation", "Legacy system modernization strategy", "Workflow automation and digitization planning", "Enterprise architecture design (ERP, CRM, HRIS)", "Digital adoption and training frameworks"],
    process: [["Digital Maturity Assessment", "Evaluating current technological capabilities against industry benchmarks."], ["Architecture & Strategy", "Designing a scalable technology ecosystem aligned with business goals."], ["Vendor Selection", "Objective evaluation and procurement of software and implementation partners."], ["Implementation Oversight", "Governing the deployment to ensure it remains on time, on budget, and on spec."], ["Adoption & Optimization", "Driving user adoption to ensure the technology delivers its promised ROI."]],
    audience: ["Companies constrained by outdated, fragmented legacy systems.", "Organizations struggling to realize ROI from previous technology investments.", "Leadership teams needing objective guidance on vendor selection.", "Businesses looking to automate manual processes to scale efficiently."],
    seo: { title: "Digital Transformation | Northwind Consulting", desc: "Pragmatic technological modernization and digital adoption." } },
  { slug: "data-analytics", title: "Data & Analytics", tagline: "Intelligence over intuition.", icon: "A",
    hero: "We build robust data ecosystems that transform fragmented information into clear, actionable insights for decisive leadership.",
    body: ["Most organizations are rich in data but poor in insight. Information is trapped in silos, reporting is manual and retrospective, and critical decisions are still driven primarily by intuition. Our Data & Analytics practice helps companies build the infrastructure and capabilities necessary to become genuinely data-driven.", "We start by untangling the complexity of your current data landscape. We help establish single sources of truth, ensuring that leadership is looking at consistent, accurate information. From foundational data governance to advanced predictive modeling, we build solutions scaled to your specific maturity level and business needs.", "Our approach focuses on democratization—getting the right data to the right people at the right time. We design intuitive, automated executive dashboards that track leading indicators rather than just lagging financial results, enabling proactive management rather than reactive firefighting.", "We do not just build dashboards; we build organizational capability. We help your team develop the analytical acumen required to interpret data correctly, ask better questions, and ultimately drive superior business outcomes through empirical decision-making."],
    included: ["Data maturity assessment and roadmap development", "Data governance and quality framework implementation", "Executive dashboard and KPI scorecard design", "Data warehousing and architecture advisory", "Predictive modeling and advanced analytics scoping", "Self-service BI enablement and training", "Data-driven culture transformation programs"],
    process: [["Data Audit", "Assessing data quality, sources, and existing reporting mechanisms."], ["Infrastructure Design", "Architecting the appropriate data storage and processing environment."], ["Metric Definition", "Aligning on the critical leading and lagging indicators that drive the business."], ["Visualization & Development", "Building automated, intuitive dashboards tailored to different user personas."], ["Capability Building", "Training the organization to leverage insights for daily decision-making."]],
    audience: ["Leadership teams relying on manual, spreadsheet-based reporting.", "Organizations struggling with conflicting data from different departments.", "Companies seeking to leverage data for competitive advantage.", "Businesses needing visibility into customer profitability and unit economics."],
    seo: { title: "Data & Analytics Consulting | Northwind Consulting", desc: "Transform fragmented data into actionable insights." } },
  { slug: "change-management", title: "Change Management", tagline: "Evolution, engineered.", icon: "C",
    hero: "We minimize resistance and accelerate adoption during critical organizational transitions, ensuring strategic initiatives actually take root.",
    body: ["The failure rate of major corporate initiatives is staggeringly high, and the culprit is rarely the strategy itself—it is the execution of change. Organizations are complex human systems that naturally resist disruption. Our Change Management practice provides the structured methodology required to guide your workforce through significant transitions.", "We believe change cannot be mandated via executive memos. It must be engineered, communicated, and reinforced. Whether you are restructuring the organization, integrating an acquisition, or rolling out a new enterprise system, we help you anticipate resistance, build critical mass, and sustain momentum.", "Our approach integrates behavioral science with rigorous project management. We develop comprehensive stakeholder analyses, targeted communication plans, and robust training programs. We focus heavily on frontline leadership, equipping middle managers with the tools they need to guide their teams through uncertainty.", "By actively managing the human element of transition, we minimize productivity dips, retain key talent, and accelerate the time-to-value of your strategic investments. We turn organizational resistance into active participation."],
    included: ["Change readiness and cultural assessment", "Stakeholder mapping and impact analysis", "Comprehensive strategic communication planning", "Leadership alignment and sponsorship coaching", "Change champion network development", "Training strategy and curriculum design", "Post-implementation reinforcement and sustainment"],
    process: [["Readiness Assessment", "Evaluating the organization's capacity for change and identifying potential resistance."], ["Strategy & Planning", "Developing tailored communication, sponsorship, and training plans."], ["Leadership Enablement", "Equipping leaders to actively sponsor and drive the change."], ["Execution & Engagement", "Deploying targeted communications and activating change networks."], ["Measurement & Sustainment", "Tracking adoption metrics and reinforcing new behaviors."]],
    audience: ["Organizations undergoing significant restructuring or cultural shifts.", "Companies integrating newly acquired businesses.", "Leadership teams rolling out major new technology platforms.", "Businesses attempting to shift deeply entrenched operational habits."],
    seo: { title: "Change Management | Northwind Consulting", desc: "Accelerate adoption and minimize resistance during transitions." } },
  { slug: "leadership-coaching", title: "Leadership Coaching", tagline: "Elevated capability.", icon: "L",
    hero: "We provide targeted, objective counsel to executives, helping them navigate complex challenges and maximize their organizational impact.",
    body: ["Executive leadership is inherently isolating. As responsibility increases, the availability of objective, unvarnished feedback decreases dramatically. Our Leadership Coaching practice provides a confidential, highly strategic sounding board for C-suite executives and high-potential leaders navigating critical phases of their careers.", "We do not offer generic motivational coaching. Our advisors are seasoned practitioners who understand the specific pressures of mid-market executive roles. We focus on pragmatic capability development—enhancing strategic thinking, improving communication effectiveness, and navigating complex organizational dynamics.", "Our engagements are highly customized, beginning with a rigorous assessment phase that may include 360-degree feedback and psychometric evaluation. We work with leaders to identify specific development areas and establish measurable behavioral goals.", "Whether a CEO is leading a company through a massive turnaround, a founder is transitioning to a chairman role, or a newly appointed executive is establishing their authority, we provide the external perspective and structure needed to accelerate their development and solve complex leadership challenges."],
    included: ["Executive assessment and 360-degree feedback", "Customized leadership development planning", "One-on-one confidential advisory sessions", "Conflict resolution and team dynamic coaching", "Succession planning and transition support", "Board dynamics and communication coaching", "High-potential talent acceleration"],
    process: [["Assessment", "Gathering comprehensive feedback and baseline data."], ["Goal Setting", "Defining clear, measurable behavioral and business objectives."], ["Coaching Cadence", "Regular, structured advisory sessions focused on real-world challenges."], ["Action & Application", "Applying new strategies and behaviors in the day-to-day role."], ["Review & Calibration", "Measuring progress against initial goals and adjusting course as needed."]],
    audience: ["C-suite executives seeking objective counsel.", "Founders transitioning operational control.", "Newly promoted leaders establishing authority.", "High-potential executives preparing for succession."],
    seo: { title: "Leadership Coaching | Northwind Consulting", desc: "Targeted, objective counsel to elevate executive capability." } }
];

// ── Scroll-reveal observer ────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

function initReveal() {
  document.querySelectorAll(".reveal, .reveal-stagger").forEach(el => revealObserver.observe(el));
}

// ── Stat counter ─────────────────────────────────────────────
function animateCounters() {
  document.querySelectorAll(".stat .num").forEach(el => {
    const raw = el.textContent.trim();
    const prefix = raw.startsWith("$") ? "$" : "";
    const suffix = raw.endsWith("B+") ? "B+" : raw.endsWith("+") ? "+" : "";
    const target = parseInt(raw.replace(/\D/g, ""), 10);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 45));
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = prefix + current + suffix;
      if (current >= target) clearInterval(timer);
    }, 28);
  });
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounters();
      statObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

// ── Testimonial auto-rotate ───────────────────────────────────
let testiTimer = null;
function startTestiRotate() {
  let idx = 0;
  testiTimer = setInterval(() => {
    const cards = document.querySelectorAll(".testi-card");
    if (!cards.length) { clearInterval(testiTimer); return; }
    cards.forEach(c => c.classList.remove("active"));
    idx = (idx + 1) % cards.length;
    cards[idx].classList.add("active");
  }, 3500);
}

// ── App Init ─────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const navLinksHTML = `
    <a href="#/">Home</a>
    <a href="#/services">Services</a>
    <a href="#/contact">Contact</a>
  `;
  document.getElementById("navLinks").innerHTML = navLinksHTML;
  document.getElementById("mobileMenu").innerHTML = navLinksHTML;
  document.getElementById("footServices").innerHTML =
    services.map(s => `<a href="#/${s.slug}">${s.title}</a>`).join("");

  // Mobile menu
  document.getElementById("menuBtn").addEventListener("click", () => {
    document.getElementById("mobileMenu").classList.toggle("open");
  });

  // Scroll effects
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const total = document.body.scrollHeight - window.innerHeight;
    document.getElementById("progress-bar").style.width =
      total > 0 ? (scrolled / total * 100) + "%" : "0%";
    document.querySelector("header.nav").classList.toggle("scrolled", scrolled > 60);
    document.getElementById("back-top").classList.toggle("visible", scrolled > 600);
  });

  // Back-to-top
  document.getElementById("back-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Hash routing with page fade
  window.addEventListener("hashchange", () => {
    const app = document.getElementById("app");
    app.classList.add("fade-out");
    if (testiTimer) { clearInterval(testiTimer); testiTimer = null; }
    setTimeout(() => {
      route();
      app.classList.remove("fade-out");
    }, 220);
  });

  route();
});

// ── Router ───────────────────────────────────────────────────
function route() {
  const hash = window.location.hash || "#/";
  const app = document.getElementById("app");
  document.getElementById("mobileMenu").classList.remove("open");

  document.querySelectorAll(".nav-links a, .mobile-menu a").forEach(link => {
    const href = link.getAttribute("href");
    const isActive = href === hash ||
      (hash !== "#/" && hash !== "#/contact" && href === "#/services" && hash.startsWith("#/"));
    link.classList.toggle("active", isActive);
  });

  window.scrollTo(0, 0);

  if (hash === "#/") {
    app.innerHTML = renderHome();
    document.title = "Northwind Consulting — Strategic clarity for mid-market companies";
    const statEl = document.querySelector(".stat");
    if (statEl) statObserver.observe(statEl);
    startTestiRotate();
  } else if (hash === "#/services") {
    app.innerHTML = renderAllServices();
    document.title = "All Services | Northwind Consulting";
  } else if (hash === "#/contact") {
    app.innerHTML = renderContact();
    document.title = "Contact | Northwind Consulting";
  } else {
    const slug = hash.replace("#/", "");
    const service = services.find(s => s.slug === slug);
    app.innerHTML = service ? renderServiceDetail(service) : renderHome();
    if (service) document.title = service.seo.title;
  }

  initReveal();
}

// ── Views ────────────────────────────────────────────────────
function renderHome() {
  const cards = services.map(s => `
    <a href="#/${s.slug}" class="card">
      <div class="ico">${s.icon}</div>
      <div class="tagline">${s.tagline}</div>
      <h3>${s.title}</h3>
      <p>${s.hero}</p>
      <div class="arrow">Learn more →</div>
    </a>
  `).join("");

  return `
    <section class="hero">
      <div class="container">
        <div class="hero-animate">
          <h1>Strategic clarity for mid-market companies.</h1>
          <p class="lead">Northwind Consulting helps mid-market companies modernize strategy, operations, and technology with senior-only advisory teams.</p>
          <div class="actions">
            <a href="#/services" class="btn">Explore Services</a>
            <a href="#/contact" class="btn ghost">Contact Us</a>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="section-head reveal">
          <h2>Our Expertise</h2>
          <p>Targeted solutions for complex organizational challenges.</p>
        </div>
        <div class="grid cols-3 reveal-stagger">${cards}</div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="value-strip reveal-stagger">
          <div class="value-item">
            <span class="value-icon">🎯</span>
            <h4>Senior-Only Teams</h4>
            <p>Every engagement is led by a partner with 15+ years of operating experience.</p>
          </div>
          <div class="value-item">
            <span class="value-icon">🔒</span>
            <h4>Confidential by Default</h4>
            <p>We operate under strict NDAs. Your strategy stays yours.</p>
          </div>
          <div class="value-item">
            <span class="value-icon">⚖️</span>
            <h4>Independent Counsel</h4>
            <p>No vendor relationships. No hidden incentives. Pure objectivity.</p>
          </div>
          <div class="value-item">
            <span class="value-icon">📈</span>
            <h4>Outcome-Driven</h4>
            <p>We measure success in enterprise value created, not deliverables produced.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <div class="container">
        <div class="section-head reveal">
          <h2>What Our Clients Say</h2>
          <p>Trusted by leadership teams across North America and Europe.</p>
        </div>
        <div class="testi-grid reveal-stagger" id="testiGrid">
          <div class="testi-card active">
            <p class="testi-quote">Northwind gave us the strategic clarity we had been searching for. Within six months we had exited two underperforming divisions and doubled down on our core — revenue grew 34% the following year.</p>
            <div class="testi-author">Sarah K.</div>
            <div class="testi-role">CEO, $180M Manufacturing Group</div>
          </div>
          <div class="testi-card">
            <p class="testi-quote">Unlike the big firms, every meeting was with a senior partner who had actually run a P&L. The advice was direct, practical, and immediately actionable.</p>
            <div class="testi-author">James R.</div>
            <div class="testi-role">CFO, Private Equity Portfolio Company</div>
          </div>
          <div class="testi-card">
            <p class="testi-quote">Our ERP migration had stalled for two years. Northwind's Digital Transformation team got us live in four months. The ROI was visible within the first quarter.</p>
            <div class="testi-author">Maria L.</div>
            <div class="testi-role">COO, $90M Distribution Company</div>
          </div>
        </div>
      </div>
    </section>

    <section class="alt stat">
      <div class="container">
        <div class="grid cols-3" style="text-align:center">
          <div><div class="num">15+</div><div class="lbl">Years Experience</div></div>
          <div><div class="num">250+</div><div class="lbl">Projects Delivered</div></div>
          <div><div class="num">$2B+</div><div class="lbl">Value Created</div></div>
        </div>
      </div>
    </section>
  `;
}

function renderAllServices() {
  const cards = services.map(s => `
    <a href="#/${s.slug}" class="card">
      <div class="ico">${s.icon}</div>
      <div class="tagline">${s.tagline}</div>
      <h3>${s.title}</h3>
      <p>${s.hero}</p>
      <div class="arrow">Learn more →</div>
    </a>
  `).join("");

  return `
    <section class="detail-hero">
      <div class="container">
        <div class="crumb"><a href="#/">Home</a> / Services</div>
        <h1>Our Capabilities</h1>
        <p class="lead">We provide senior-level advisory across the entire organizational life cycle.</p>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="grid cols-2 reveal-stagger">${cards}</div>
      </div>
    </section>
  `;
}

function renderServiceDetail(service) {
  const bodyHTML = service.body.map(p => `<p>${p}</p>`).join("");
  const includedHTML = service.included.map(i => `<li>${i}</li>`).join("");
  const processHTML = service.process.map(p => `
    <div class="process-step reveal">
      <h4>${p[0]}</h4>
      <p>${p[1]}</p>
    </div>
  `).join("");
  const audienceHTML = service.audience.map(a => `<li>${a}</li>`).join("");

  return `
    <section class="detail-hero">
      <div class="container">
        <div class="crumb"><a href="#/">Home</a> / <a href="#/services">Services</a> / ${service.title}</div>
        <div class="eyebrow">${service.tagline}</div>
        <h1>${service.title}</h1>
        <p class="lead">${service.hero}</p>
      </div>
    </section>
    <section class="detail-body">
      <div class="container lay">
        <div class="prose reveal">
          <h2>Overview</h2>
          ${bodyHTML}
          <h2 style="margin-top:48px">Our Approach</h2>
          <div style="margin-top:24px">${processHTML}</div>
        </div>
        <aside class="reveal">
          <div class="panel">
            <h4>Capabilities</h4>
            <ul>${includedHTML}</ul>
          </div>
          <div class="panel">
            <h4>Who We Help</h4>
            <ul class="audience">${audienceHTML}</ul>
          </div>
        </aside>
      </div>
      <div class="container">
        <div class="cta-block reveal">
          <h3>Ready to gain clarity?</h3>
          <p>Schedule a confidential consultation with one of our senior partners.</p>
          <a href="#/contact" class="btn">Contact Us</a>
        </div>
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    <section class="detail-hero">
      <div class="container">
        <div class="crumb"><a href="#/">Home</a> / Contact</div>
        <h1>Start the Conversation</h1>
        <p class="lead">Reach out to discuss how we can partner to achieve your strategic objectives.</p>
      </div>
    </section>
    <section class="detail-body">
      <div class="container">
        <div class="form-wrap reveal" style="margin:0 auto">
          <div class="field">
            <label>Name</label>
            <input type="text" placeholder="Jane Doe" />
            <div class="err">This field is required.</div>
          </div>
          <div class="field">
            <label>Email</label>
            <input type="email" placeholder="jane@example.com" />
            <div class="err">Please enter a valid email address.</div>
          </div>
          <div class="field">
            <label>Message</label>
            <textarea rows="5" placeholder="How can we help?"></textarea>
            <div class="err">This field is required.</div>
          </div>
          <button class="btn" style="width:100%" onclick="showToast()">Send Message</button>
        </div>
      </div>
    </section>
  `;
}

// ── Toast + form validation ───────────────────────────────────
function showToast() {
  let valid = true;

  document.querySelectorAll(".field").forEach(field => {
    const input = field.querySelector("input, textarea");
    if (!input) return;
    field.classList.remove("invalid");

    if (!input.value.trim()) {
      field.classList.add("invalid");
      valid = false;
    } else if (input.type === "email" && !/\S+@\S+\.\S+/.test(input.value)) {
      field.classList.add("invalid");
      valid = false;
    }
  });

  if (!valid) return;

  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}
