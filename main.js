/**
 * ALEX HARTWELL - OFFICIAL SITE ENGINE
 * قمت بتحديث القاموس ليشمل كل حرف في الـ HTML الخاص بك
 */

const i18n = {
  en: {
    "brand.name": "Alex Hartwell",
    "nav.impact": "Impact", "nav.cases": "Case Studies", "nav.metrics": "Metrics", "nav.stack": "Stack", "nav.cta": "Book a call",
    "hero.tag": "Available for Q3 2026 engagements",
    "hero.before": "Helping SaaS companies scale their organic traffic by",
    "hero.after": "through data-led content strategies.",
    "hero.sub": "I'm a senior growth and SEO strategist. Over the last seven years I've built repeatable content engines that generate qualified pipeline — not vanity traffic.",
    "hero.btn1": "See the case studies", "hero.btn2": "Get in touch →",
    "hero.stat1": "SaaS engagements", "hero.stat2": "Pipeline influenced", "hero.stat3": "Years specialized", "hero.stat4": "Client retention",
    // Section 01 - Metrics
    "s1.eyebrow": "01 — Headline metrics", "s1.title": "Numbers that moved the business.", "s1.lede": "Aggregated outcomes across recent engagements. Every figure is attributable, dashboarded, and defensible in a board meeting.",
    "s1.m1.label": "Avg. organic sessions lift", "s1.m1.trend": "▲ vs. baseline", "s1.m1.window": "12-month window",
    "s1.m2.label": "SQLs sourced from content", "s1.m2.trend": "▲ pipeline contribution", "s1.m2.window": "Per quarter",
    "s1.m3.label": "CAC reduction (paid offset)", "s1.m3.trend": "▼ blended CAC", "s1.m3.window": "Within 9 months",
    "s1.m4.label": "Top-3 ranking keywords gained", "s1.m4.trend": "▲ across portfolio", "s1.m4.window": "2024 → 2026",
    // Section 02 - STAR
    "s2.eyebrow": "02 — Impact & Results", "s2.title": "How I work, in four moves.", "s2.lede": "Every engagement follows the STAR framework. Situation. Task. Action. Result.",
    "s2.s.title": "Situation", "s2.s.li1": "Mid-market B2B SaaS, ARR plateau at $14M.", "s2.s.li2": "Organic channel responsible for <6% of pipeline.", "s2.s.li3": "Content team producing volume without intent mapping.", "s2.s.li4": "Paid CAC climbing 22% YoY across LinkedIn and Google.",
    "s2.t.title": "Task", "s2.t.li1": "Lift organic to 25%+ of new pipeline within 4 quarters.", "s2.t.li2": "Build a defensible topic moat in the integrations category.", "s2.t.li3": "Reduce blended CAC by 30% without cutting paid spend.", "s2.t.li4": "Stand up reporting the CFO would actually trust.",
    "s2.a.title": "Action", "s2.a.li1": "Audited 1,200 URLs; pruned 38% of low-intent pages.", "s2.a.li2": "Built a 90-cluster keyword map weighted by SERP economics.", "s2.a.li3": "Launched programmatic comparison hub (412 pages in 11 weeks).", "s2.a.li4": "Wired GA4 → Snowflake → Looker for attribution clarity.",
    "s2.r.title": "Result", "s2.r.li1": "<strong>+214%</strong> organic sessions in 12 months.", "s2.r.li2": "<strong>3.4x</strong> SQLs sourced from content per quarter.", "s2.r.li3": "<strong>−38%</strong> blended CAC; paid spend held flat.", "s2.r.li4": "<strong>$6.2M</strong> attributable pipeline added in year one.",
    // Section 03 - Charts
    "s3.eyebrow": "03 — Before vs. after", "s3.title": "The shape of the growth curve.", "s3.lede": "Two charts I bring to every kickoff. Left: monthly organic sessions before and after engagement. Right: pipeline contribution by channel.",
    "s3.c1.title": "Monthly organic sessions", "s3.c1.sub": "Before vs. after, indexed to month 0", "s3.c1.before": "Before", "s3.c1.after": "After", "s3.c1.foot": "Source: GA4, anonymized client cohort (n = 6).",
    "s3.c2.title": "Pipeline contribution by channel", "s3.c2.sub": "Quarter over quarter, last 8 quarters", "s3.c2.organic": "Organic content", "s3.c2.paid": "Paid acquisition", "s3.c2.foot": "Attribution: position-based, validated against MMM.",
    // Section 04 - Case Studies
    "s4.eyebrow": "04 — Case studies", "s4.title": "Selected engagements.", "s4.lede": "Three recent wins. Tap any card to expand the STAR breakdown.",
    "s4.c1.tag": "SaaS · Series B", "s4.c1.title": "Northwind Analytics", "s4.c1.desc": "Built the integrations content moat that became 41% of inbound pipeline.",
    "s4.c1.metric1": "Organic MQLs", "s4.c1.metric2": "Blended CAC", "s4.c1.s": "Series B SaaS, 19 competitors, organic at 7% of pipeline.", "s4.c1.t": "Take #1 share of voice in 'X integrations' SERPs.", "s4.c1.a": "Programmatic hub of 412 integration pages.", "s4.c1.r": "<strong>+312%</strong> organic MQLs · <strong>$4.8M</strong> attributable ARR.",
    "s4.c2.tag": "FinTech · PLG", "s4.c2.title": "Ledgerly", "s4.c2.desc": "Rebuilt the editorial calendar around bottom-of-funnel intent.",
    "s4.c2.metric1": "Trial signups", "s4.c2.metric2": "Organic sessions", "s4.c2.s": "PLG fintech with 2,800 indexed pages, 71% zero clicks.", "s4.c2.t": "Cut the index footprint in half while growing trial signups.", "s4.c2.a": "Pruned 1,400 URLs, rebuilt templates around intent.", "s4.c2.r": "<strong>3.1x</strong> trials · <strong>+187%</strong> sessions · <strong>-52%</strong> indexed bloat.",
    "s4.c3.tag": "DevTools · Open Source", "s4.c3.title": "Forklane CI", "s4.c3.desc": "Took a developer brand from 14k to 220k monthly devs.",
    "s4.c3.metric1": "Monthly devs", "s4.c3.metric2": "NPS lift", "s4.c3.s": "OSS devtool, strong community, weak discoverability.", "s4.c3.t": "Treat docs as acquisition surface; lift activation 3x.", "s4.c3.a": "Reorganized 2,100 doc pages into JTBD flows.", "s4.c3.r": "<strong>15.7x</strong> monthly devs · <strong>+92</strong> NPS · <strong>62%</strong> activation.",
    // Section 05 & 06
    "s5.eyebrow": "05 — Stack", "s5.title": "Tools I run engagements on.", "s5.lede": "Opinionated, not exhaustive. Clean data flowing into decisions.",
    "s5.col1.title": "Research & Strategy", "s5.col1.li3": "Custom SERP scrapers (Python)",
    "s5.col2.title": "Analytics & Attribution", "s5.col2.li3": "Position-based + MMM blending",
    "s5.col3.title": "Production & Ops", "s5.col3.li3": "Zapier · n8n for workflow glue",
    "s5.col4.title": "Experimentation", "s5.col4.li2": "Bayesian sample-size planning", "s5.col4.li3": "SQL-first holdout cohorts",
    "quote.text": "\"Alex showed up with a spreadsheet that mapped every URL to revenue outcome. Three quarters later, organic was our largest channel. He sells math you take to the board.\"", "quote.name": "Priya Raman", "quote.role": "VP Marketing, Northwind Analytics",
    "s6.eyebrow": "06 — Get in touch", "s6.title": "Let's see if the numbers line up.", "s6.lede": "I'll reply within two business days with a candid assessment.",
    "s6.email": "Email", "s6.linkedin": "LinkedIn", "s6.based": "Based", "s6.location": "Austin, TX · working globally",
    "form.name": "Name", "form.email": "Work email", "form.company": "Company", "form.metric": "Metric you want to move",
    "form.opt0": "Select one…", "form.opt1": "Organic traffic / SEO", "form.opt2": "Pipeline contribution", "form.opt3": "CAC reduction", "form.opt4": "Activation / PLG", "form.opt5": "Something else",
    "form.context": "Brief context", "form.placeholder": "Where you are, where you'd like to be...", "form.submit": "Send brief →",
    "footer.cases": "Case studies", "footer.contact": "Contact", "footer.copy": "© <span id=\"year\"></span> Alex Hartwell. Data-led growth for SaaS.",
    "lang.label": "العربية"
  },
  ar: {
    "brand.name": "أليكس هارتويل",
    "nav.impact": "التأثير", "nav.cases": "دراسات الحالة", "nav.metrics": "المقاييس", "nav.stack": "التقنيات", "nav.cta": "احجز مكالمة",
    "hero.tag": "متاح للتعاقدات في الربع الثالث من ٢٠٢٦",
    "hero.before": "أساعد شركات الـ SaaS على مضاعفة زياراتها العضوية بنسبة",
    "hero.after": "عبر استراتيجيات محتوى مبنية على البيانات.",
    "hero.sub": "خبير استراتيجي في النمو والسيو. قمت ببناء محركات محتوى تولد مبيعات حقيقية وليست مجرد أرقام زيارات وهمية. إليك الأرقام والنتائج.",
    "hero.btn1": "مشاهدة دراسات الحالة", "hero.btn2": "تواصل معي ←",
    "hero.stat1": "مشاريع SaaS", "hero.stat2": "تأثير المبيعات", "hero.stat3": "سنوات تخصص", "hero.stat4": "رضا العملاء",
    // Section 01
    "s1.eyebrow": "٠١ — المقاييس الرئيسية", "s1.title": "أرقام غيرت مسار العمل.", "s1.lede": "نتائج مجمعة عبر المشاريع الأخيرة. كل رقم موثق ويمكن الدفاع عنه في اجتماعات مجلس الإدارة.",
    "s1.m1.label": "نمو الزيارات العضوية", "s1.m1.trend": "▲ مقارنة بالأساس", "s1.m1.window": "خلال ١٢ شهراً",
    "s1.m2.label": "مبيعات (SQLs) من المحتوى", "s1.m2.trend": "▲ مساهمة المبيعات", "s1.m2.window": "لكل ربع سنة",
    "s1.m3.label": "خفض تكلفة الاستحواذ", "s1.m3.trend": "▼ إجمالي التكلفة", "s1.m3.window": "خلال ٩ أشهر",
    "s1.m4.label": "كلمات مفتاحية متصدرة", "s1.m4.trend": "▲ عبر كامل المحفظة", "s1.m4.window": "٢٠٢٤ ← ٢٠٢٦",
    // Section 02
    "s2.eyebrow": "٠٢ — التأثير والنتائج", "s2.title": "كيف أعمل، في ٤ خطوات.", "s2.lede": "كل مشروع يتبع إطار عمل STAR المنهجي: الوضع، المهمة، الإجراء، والنتيجة.",
    "s2.s.title": "الوضع", "s2.s.li1": "شركة SaaS متوسطة، توقف نموها عند ١٤ مليون دولار.", "s2.s.li2": "القنوات العضوية مسؤولة عن أقل من ٦٪ من المبيعات.", "s2.s.li3": "فريق المحتوى ينتج كميات كبيرة دون ربطها بنية الشراء.", "s2.s.li4": "تكلفة الاستحواذ المدفوعة ترتفع بنسبة ٢٢٪ سنوياً.",
    "s2.t.title": "المهمة", "s2.t.li1": "رفع الحصة العضوية إلى ٢٥٪+ من المبيعات خلال ٤ فصول.", "s2.t.li2": "بناء حصن محتوى منيع في فئة التكاملات البرمجية.", "s2.t.li3": "خفض التكلفة الكلية بنسبة ٣٠٪ دون تقليص ميزانية الإعلانات.", "s2.t.li4": "إنشاء تقارير دقيقة يثق بها المدير المالي.",
    "s2.a.title": "الإجراء", "s2.a.li1": "تدقيق ١٢٠٠ رابط؛ وحذف ٣٨٪ من الصفحات غير المجدية.", "s2.a.li2": "بناء خريطة كلمات مفتاحية من ٩٠ عنقوداً ذكياً.", "s2.a.li3": "إطلاق مركز مقارنة برمجية (٤١٢ صفحة في ١١ أسبوعاً).", "s2.a.li4": "ربط GA4 بقواعد البيانات للتحقق من مصدر الأرباح.",
    "s2.r.title": "النتيجة", "s2.r.li1": "<strong>+٢١٤٪</strong> زيارات عضوية في ١٢ شهراً.", "s2.r.li2": "<strong>٣.٤ ضعف</strong> مبيعات من المحتوى لكل ربع.", "s2.r.li3": "<strong>-٣٨٪</strong> خفض في تكلفة الاستحواذ الإجمالية.", "s2.r.li4": "<strong>$٦.٢ مليون</strong> مبيعات مضافة في العام الأول.",
    // Section 03
    "s3.eyebrow": "٠٣ — قبل وبعد", "s3.title": "شكل منحنى النمو.", "s3.lede": "رسمان بيانيان أعرضهما في كل بداية عمل. اليسار: الزيارات قبل وبعد. اليمين: مساهمة القنوات في المبيعات.",
    "s3.c1.title": "الزيارات العضوية الشهرية", "s3.c1.sub": "مقارنة قبل وبعد، بدءاً من الشهر صفر", "s3.c1.before": "قبل", "s3.c1.after": "بعد", "s3.c1.foot": "المصدر: GA4، بيانات عملاء مجهولة.",
    "s3.c2.title": "المساهمة في المبيعات", "s3.c2.sub": "ربع سنوي، لآخر ٨ فصول", "s3.c2.organic": "محتوى عضوي", "s3.c2.paid": "استحواذ مدفوع", "s3.c2.foot": "الإسناد: مبني على الموقع والنتائج المحققة.",
    // Section 04
    "s4.eyebrow": "٠٤ — دراسات الحالة", "s4.title": "مشاريع مختارة.", "s4.lede": "ثلاثة نجاحات أخيرة. اضغط على أي بطاقة لعرض تفاصيل STAR.",
    "s4.c1.tag": "برمجيات · فئة ب", "s4.c1.title": "نورثويند للتحليلات", "s4.c1.desc": "بناء حصن محتوى للتكاملات أصبح مسؤولاً عن ٤١٪ من المبيعات.",
    "s4.c1.metric1": "مبيعات عضوية", "s4.c1.metric2": "تكلفة الاستحواذ", "s4.c1.s": "شركة نمو، ١٩ منافساً أقوياء، الحصة العضوية ٧٪ فقط.", "s4.c1.t": "الاستحواذ على الصدارة في كلمات البحث 'X integrations'.", "s4.c1.a": "إنشاء ٤١٢ صفحة تكامل مع استراتيجية روابط داخلية.", "s4.c1.r": "<strong>+٣١٢٪</strong> مبيعات · <strong>$٤.٨ مليون</strong> إيرادات مضافة.",
    "s4.c2.tag": "تقنية مالية", "s4.c2.title": "ليدجرلي", "s4.c2.desc": "إعادة بناء خطة المحتوى حول النية الشرائية العالية.",
    "s4.c2.metric1": "تسجيلات تجريبية", "s4.c2.metric2": "زيارات عضوية", "s4.c2.s": "شركة نمو، ٢٨٠٠ صفحة، ٧١٪ منها لا تجلب أي نقرات.", "s4.c2.t": "تقليص عدد الصفحات للنصف مع زيادة كفاءة التسجيلات.", "s4.c2.a": "حذف ١٤٠٠ رابط غير فعال وتطوير قوالب 'البدائل'.", "s4.c2.r": "<strong>٣.١ ضعف</strong> تسجيلات · <strong>+١٨٧٪</strong> زيارات · <strong>-٥٢٪</strong> تقليص الفهرس.",
    "s4.c3.tag": "أدوات مطورين", "s4.c3.title": "فوركلين CI", "s4.c3.desc": "نمو هائل عبر التوثيق البرمجي من ١٤ ألف إلى ٢٢٠ ألف مطور.",
    "s4.c3.metric1": "مطورين شهرياً", "s4.c3.metric2": "معدل الرضا", "s4.c3.s": "أداة مفتوحة المصدر، مجتمع قوي ولكن اكتشاف ضعيف.", "s4.c3.t": "تحويل التوثيق لقناة اكتساب؛ رفع التفعيل ٣ أضعاف.", "s4.c3.a": "إعادة تنظيم ٢١٠٠ صفحة توثيق وفقاً لمهام المطورين.", "s4.c3.r": "<strong>١٥.٧ ضعف</strong> مطورين · <strong>+٩٢</strong> رضا · <strong>٦٢٪</strong> تفعيل.",
    // Section 05 & 06
    "s5.eyebrow": "٠٥ — التقنيات", "s5.title": "الأدوات التي أعتمد عليها.", "s5.lede": "خيارات محددة تضمن تدفق بيانات نظيفة لاتخاذ القرارات.",
    "s5.col1.title": "البحث والاستراتيجية", "s5.col1.li3": "أدوات كشط مخصصة (بايثون)",
    "s5.col2.title": "التحليلات والإسناد", "s5.col2.li3": "دمج الإسناد المتعدد مع MMM",
    "s5.col3.title": "الإنتاج والعمليات", "s5.col3.li3": "أتمتة العمليات عبر Zapier و n8n",
    "s5.col4.title": "التجريب", "s5.col4.li2": "تخطيط أحجام العينات (Bayesian)", "s5.col4.li3": "مجموعات اختبار معزولة برمجياً",
    "quote.text": "\"أليكس لا يبيع مجرد زيارات — هو يقدم حسابات دقيقة يمكنك عرضها في مجلس الإدارة بكل ثقة. أصبح السيو أكبر قناة مبيعات لدينا.\"", "quote.name": "بريا رامان", "quote.role": "مديرة التسويق، نورثويند للتحليلات",
    "s6.eyebrow": "٠٦ — تواصل معي", "s6.title": "لنرى ما إذا كانت الأرقام تتطابق.", "s6.lede": "سأرد عليك خلال يومي عمل بتقييم صريح لمشروعك.",
    "s6.email": "البريد", "s6.linkedin": "لينكد إن", "s6.based": "المقر", "s6.location": "أوستن، تكساس · أعمل عالمياً",
    "form.name": "الاسم", "form.email": "البريد الإلكتروني", "form.company": "الشركة", "form.metric": "المقياس المستهدف",
    "form.opt0": "اختر واحداً…", "form.opt1": "الزيارات العضوية / سيو", "form.opt2": "مساهمة المبيعات", "form.opt3": "خفض التكاليف", "form.opt4": "تحسين قمع PLG", "form.opt5": "شيء آخر",
    "form.context": "سياق موجز", "form.placeholder": "أين أنت الآن، وأين تريد الوصول، وأي عوائق تواجهها...", "form.submit": "إرسال ←",
    "footer.cases": "دراسات الحالة", "footer.contact": "اتصل بي", "footer.copy": "© <span id=\"year\"></span> أليكس هارتويل. نمو قائم على البيانات لشركات الـ SaaS.",
    "lang.label": "English"
  }
};

/* --- 1. محرك الرسوم البيانية (SVG Engine) --- */

function drawCharts() {
  const chartBar = document.getElementById('chart-bar');
  const chartLine = document.getElementById('chart-line');
  if (!chartBar || !chartLine) return;

  const svgNS = "http://www.w3.org/2000/svg";
  chartBar.innerHTML = ''; chartLine.innerHTML = '';

  // رسم الأعمدة (Bar Chart)
  [25, 45, 35, 65, 50, 85, 70, 100].forEach((val, i) => {
    const h = (val / 100) * 220;
    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("x", i * 75 + 40); rect.setAttribute("y", 260 - h);
    rect.setAttribute("width", 45); rect.setAttribute("height", h);
    rect.setAttribute("fill", i % 2 === 0 ? "rgba(255,255,255,0.08)" : "#00d1b2");
    rect.setAttribute("rx", "6");
    chartBar.appendChild(rect);
  });

  // رسم الخطوط (Line Chart)
  const drawPath = (data, color, isDashed) => {
    const path = document.createElementNS(svgNS, "path");
    const d = data.map((v, i) => `${i * 85 + 40},${260 - (v / 120 * 220)}`).join(' L ');
    path.setAttribute("d", "M " + d); path.setAttribute("stroke", color);
    path.setAttribute("fill", "none"); path.setAttribute("stroke-width", "3.5");
    if (isDashed) path.setAttribute("stroke-dasharray", "6,6");
    return path;
  };

  chartLine.appendChild(drawPath([50, 52, 48, 55, 51, 54, 50], "rgba(255,255,255,0.15)", true));
  chartLine.appendChild(drawPath([20, 38, 55, 82, 95, 110, 115], "#00d1b2", false));
}

/* --- 2. محرك العدادات (Counter Engine) --- */

function animateCounter(el) {
  const target = parseFloat(el.getAttribute('data-target'));
  const prefix = el.getAttribute('data-prefix') || '';
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 1800;
  let startTimestamp = null;

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const current = (progress * target).toFixed(target % 1 === 0 ? 0 : 1);
    
    let result = prefix + current + suffix;
    if (document.documentElement.lang === 'ar') {
       result = result.replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
    }
    el.textContent = result;
    if (progress < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
}

/* --- 3. محرك واجهة المستخدم (UI Engine) --- */

function updateUI(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  localStorage.setItem('alex-lang', lang);

  // ترجمة النصوص
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });

  // ترجمة HTML
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
  });

  // ترجمة Placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[lang][key]) el.placeholder = i18n[lang][key];
  });

  // زر اللغة
  document.getElementById('lang-toggle-label').textContent = i18n[lang]['lang.label'];

  // إعادة التنشيط
  drawCharts();
  document.querySelectorAll('[data-counter]').forEach(animateCounter);
}

/* --- 4. التهيئة عند التشغيل --- */

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('alex-lang') || 'en';
  updateUI(savedLang);

  document.getElementById('lang-toggle').addEventListener('click', () => {
    updateUI(document.documentElement.lang === 'en' ? 'ar' : 'en');
  });

  document.getElementById('year').textContent = new Date().getFullYear();
});