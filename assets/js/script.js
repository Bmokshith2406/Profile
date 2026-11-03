'use strict';

/* =========================================================================
   DATA
   ========================================================================= */

const ORGS = [
  { name: "Lyzr AI", logo: "./assets/images/org-lyzr.svg", mono: "L", tint: "ai" },
  { name: "Infosys", logo: "./assets/images/org-infosys.webp", mono: "In", tint: "web" },
  { name: "Deloitte", logo: "./assets/images/org-deloitte.jpg", mono: "D.", tint: "data" },
  { name: "Innovat.tech", logo: "./assets/images/org-innovat.png", mono: "it", tint: "web" },
  { name: "CodeSprint", logo: "./assets/images/org-codesprint.jpeg", mono: "CS", tint: "block" }
];

const SKILLS = [
  {
    group: "AI & Agents",
    items: ["RAG", "LangGraph", "Prompt Engineering", "LLM Evaluation", "Agent Design"]
  },
  {
    group: "Backend & Cloud",
    items: ["Python", "FastAPI", "Node.js", "MongoDB", "Redis", "GCP", "Docker"]
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    group: "Testing & QA",
    items: ["Playwright", "Selenium", "Appium"]
  }
];

const EXPERIENCE = [
  {
    logo: "./assets/images/org-lyzr.svg",
    role: "Forward Deployed Engineer", org: "Lyzr AI",
    meta: "Bengaluru · Sep 2026 — Present",
    text: "Forward-deployed engineering on enterprise agentic AI — working directly with customers to design, build and ship LLM-powered solutions into production."
  },
  {
    logo: "./assets/images/org-infosys.webp",
    role: "Trainee", org: "Infosys",
    meta: "Mysuru · Jul 2026 — Sep 2026",
    text: "Foundation training across software engineering practices, system design and enterprise development workflows."
  },
  {
    logo: "./assets/images/org-deloitte.jpg",
    role: "Software Developer Intern, GenAI & RAG", org: "Deloitte India",
    meta: "Hyderabad · Jul 2025 — Feb 2026",
    text: "Built an enterprise semantic-search and RAG system across large software test repositories, cutting manual test-case discovery time by ~70–80%. Engineered the full retrieval workflow — ingestion, preprocessing, embeddings, semantic retrieval, relevance filtering, context construction and LLM-assisted generation — and integrated it into downstream automation."
  },
  {
    logo: "./assets/images/org-innovat.png",
    role: "Software Developer & ML Intern", org: "Innovat.tech",
    meta: "Hyderabad · Oct 2024 — Nov 2024",
    text: "Developed time-series data pipelines and forecasting models (Python, LSTM, XGBoost) across 10+ financial-market indicators, improving baseline predictive accuracy by 18.25% via feature engineering, technical-indicator integration and hyperparameter tuning."
  },
  {
    logo: "./assets/images/org-codesprint.jpeg",
    role: "Web Development Intern", org: "CodeSprint",
    meta: "Hyderabad · Jul 2024 — Oct 2024",
    text: "Built a full-stack Inventory Management System on the MERN stack for efficient inventory tracking and management."
  }
];

const EDUCATION = [
  {
    logo: "./assets/images/org-cbit.jpg",
    role: "Chaitanya Bharathi Institute of Technology", org: "",
    meta: "Hyderabad · Oct 2022 — May 2026",
    text: "Bachelor of Engineering in Information Technology · CGPA 8.3 / 10."
  }
];

const PROJECTS = [
  {
    id: "ai-test-automation",
    title: "Enterprise AI Test Automation Platform",
    category: "AI & ML",
    cat: "ai & ml",
    icon: "git-network-outline",
    cover: "ai",
    tagline: "Script-first, self-healing test automation with bounded LLM reasoning.",
    images: ["./assets/images/projects/ai-test-automation/arch.png"],
    imageFit: "contain",
    body: [
      "An intelligent, script-first AI platform for automated software testing across web, mobile and desktop. It combines deterministic test execution with bounded LLM reasoning to autonomously assist with test creation, failure analysis and step-level self-healing.",
      "A knowledge driven, RAG based architecture reuses validated test logic, execution history and repair insights, while verifier gated execution keeps everything auditable and CI/CD-compatible."
    ],
    highlights: [
      "Turns requirements into structured test cases and executable scripts across web, mobile & desktop",
      "Multi-stage workflows: execution, failure isolation, staged retries, bounded repair, verifier-gated re-execution",
      "RAG reuse of validated logic, execution history & repair insights",
      "Demonstrated to 8 QA organizations → multiple proof-of-concept discussions"
    ],
    tech: ["Python", "FastAPI", "MongoDB", "Redis", "LLMs", "LangGraph", "Playwright", "Appium", "RAG"],
    links: [
      { label: "GitHub", url: "https://github.com/Bmokshith2406/Testing-Automation-System", icon: "logo-github" }
    ]
  },
  {
    id: "testcases-rag",
    title: "TestCasesRAG",
    category: "AI & ML",
    cat: "ai & ml",
    icon: "search-outline",
    cover: "ai",
    tagline: "Semantic search & LLM enrichment for test cases.",
    body: [
      "A FastAPI backend for storing, enriching, searching and maintaining software test cases and their linked Playwright scripts. It replaces spreadsheet sprawl and brittle keyword search with embedding based semantic retrieval, and uses a configurable LLM for enrichment, de-duplication, query expansion and reranking.",
      "Built production-first: JWT auth with role-based access (viewer / editor / admin), audit logging, background ingestion jobs, Redis-backed search caching with namespace invalidation, fail-fast startup validation, Prometheus style metrics and health probes, with pluggable LLM (Gemini / OpenAI / Anthropic / local) and embedding backends (MiniLM / MPNet / BGE)."
    ],
    highlights: [
      "Embedding-based semantic search over test cases (MongoDB vector index)",
      "LLM-driven enrichment, dedupe, query expansion & reranking",
      "JWT auth + RBAC, audit logging, persistent background ingestion jobs",
      "Redis cache invalidation, Prometheus metrics, health probes & React dashboard"
    ],
    tech: ["Python", "FastAPI", "MongoDB", "Redis", "RAG", "Embeddings", "JWT", "React", "Vite"],
    links: [
      { label: "GitHub", url: "https://github.com/Bmokshith2406/TestCases-RAG-Version-3.0", icon: "logo-github" }
    ]
  },
  {
    id: "etw-genai-monitor",
    title: "ETW-GenAI Monitor",
    category: "AI & ML",
    cat: "ai & ml",
    icon: "speedometer-outline",
    cover: "ai",
    tagline: "Real-time causal RCA for Windows performance, explained by LLMs.",
    images: ["./assets/images/projects/etw-genai-monitor/architecture.png"],
    imageFit: "contain",
    body: [
      "A real-time performance diagnostics and automated Root Cause Analysis platform for Windows, built on low-level Event Tracing for Windows (ETW) telemetry and multivariate causal inference. Instead of just reporting symptoms (CPU/RAM alarms), it identifies the actual processes responsible for a performance regression.",
      "For each incident window it ranks processes by a causal confidence score combining robust Z-score and Mahalanobis anomaly detection, energy-contribution attribution, and temporal correlation, then sends the evidence to Google Gemini to generate a human understandable RCA report (summary, causal explanation, impact, remediation), surfaced live in a React dashboard. The system is read-only and non-invasive."
    ],
    highlights: [
      "Kernel-level ETW telemetry with rolling statistical baselines & spike detection",
      "Causal PID ranking: Z-score + Mahalanobis + energy attribution + temporal correlation",
      "Automated RCA reports generated by Google Gemini 2.5 Flash",
      "Real-time React dashboard; 100% read-only, non-invasive monitoring"
    ],
    tech: ["Python", "FastAPI", "NumPy", "SciPy", "C# / .NET", "ETW", "Google Gemini", "React", "Vite"],
    links: [
      { label: "GitHub", url: "https://github.com/Bmokshith2406/RCA-GENAI-MONITOR", icon: "logo-github" }
    ]
  },
  {
    id: "apnaweb",
    title: "ApnaWEB",
    category: "AI & ML",
    cat: "ai & ml",
    icon: "globe-outline",
    cover: "ai",
    tagline: "AI that turns your inputs into a personal website beyond the resume.",
    body: [
      "ApnaWEB reimagines the job application: instead of a static resume, it turns structured user inputs into personalized portfolio websites and resumes through automated generation and publishing.",
      "I designed the full pipeline that includes ingestion, generation, templating and deployment, delivering personalized assets to 150+ users."
    ],
    highlights: [
      "AI-powered generation of personal sites & resumes from structured inputs",
      "End-to-end ingestion → generation → templating → deployment pipeline",
      "Delivered personalized assets to 150+ users"
    ],
    tech: ["Python", "Gemini", "Apps Script", "Google Sheets", "JavaScript"],
    links: [
      { label: "Frontend", url: "https://github.com/Bmokshith2406/ApnaWEB_Frontend", icon: "logo-github" },
      { label: "Backend", url: "https://github.com/Bmokshith2406/ApnaWEB_Backend", icon: "logo-github" }
    ]
  },
  {
    id: "property-platform",
    title: "Cloud-Native Property Management Platform",
    category: "Web & Backend",
    cat: "web & backend",
    icon: "cloud-outline",
    cover: "web",
    tagline: "20+ independently deployable backend services on GCP Cloud Run.",
    body: [
      "A cloud-native platform of 20+ independently deployable backend services supporting property, tenant, maintenance, media, geographic and access-control workflows.",
      "Built scalable REST services on GCP Cloud Run with multi-region deployment, health checks, environment configuration and service-to-service communication and debugged the hard production issues: authentication, regional deployment and distributed connectivity and many more."
    ],
    highlights: [
      "20+ independently deployable microservices",
      "GCP Cloud Run · multi-region · health checks · service-to-service comms",
      "Hardened against real production failure modes"
    ],
    tech: ["GCP", "Cloud Run", "Python", "FastAPI", "Docker", "REST APIs"],
    links: []
  },
  {
    id: "apnatax",
    title: "ApnaTAX",
    category: "AI & ML",
    cat: "ai & ml",
    icon: "calculator-outline",
    cover: "ai",
    tagline: "Personalized, data-driven tax planning & estimation.",
    body: [
      "ApnaTAX rethinks tax planning: leveraging technology and data analytics to give individuals personalized, comprehensive tax estimation instead of generic filing that misses deductions and exemptions.",
      "The goal is to simplify tax planning and help people optimize their liabilities starting with income-tax approximation and expanding toward full personalized planning."
    ],
    highlights: [
      "Personalized income-tax estimation",
      "Data-driven approach to deductions & exemptions"
    ],
    tech: ["Python", "Data Analytics", "Web"],
    links: [
      { label: "GitHub", url: "https://github.com/Bmokshith2406/ApnaTAX", icon: "logo-github" }
    ]
  },
  {
    id: "cert-verification",
    title: "Blockchain Certificate Verification",
    category: "Blockchain",
    cat: "blockchain",
    icon: "shield-checkmark-outline",
    cover: "block",
    tagline: "Tamper-proof academic credentials on Ethereum + IPFS.",
    body: [
      "A decentralized, tamper-proof platform for verifying academic and professional credentials. Using Ethereum, Solidity and IPFS (via Pinata), certificates are securely stored, immutable and verifiable in real time.",
      "It removes dependence on centralized databases, improves cross-border accessibility, and builds trust among institutions, employers and students with a single interface for issuing and validating certificates."
    ],
    highlights: [
      "Immutable certificate storage on Ethereum + IPFS / Pinata",
      "Real-time, cross-border verification",
      "Unified issue + validate interface"
    ],
    tech: ["Ethereum", "Solidity", "IPFS", "Pinata", "Web3", "React"],
    links: [
      { label: "GitHub", url: "https://github.com/Bmokshith2406/Certificate-Verification-System", icon: "logo-github" }
    ]
  },
  {
    id: "dropout-analysis",
    title: "Dropout Analysis & Prediction",
    category: "Data & Analytics",
    cat: "data & analytics",
    icon: "pulse-outline",
    cover: "data",
    tagline: "88%-accurate student dropout prediction with Flask.",
    body: [
      "A comprehensive dropout analysis on a synthetic dataset, built with Flask and classic HTML/CSS. Beyond presenting the analysis, it offers a live prediction tool.",
      "By inputting details such as birthplace, area of residence, religion and caste, users get a graduate vs dropout prediction from a model reaching 88% accuracy on the dataset."
    ],
    highlights: [
      "Prediction model at 88% accuracy",
      "Interactive Flask prediction tool",
      "Full exploratory data analysis & visualization"
    ],
    tech: ["Python", "Flask", "scikit-learn", "Pandas", "HTML/CSS"],
    links: [
      { label: "GitHub", url: "https://github.com/Bmokshith2406/Gujarat-Dropout-Data-Analysis-and-Prediction", icon: "logo-github" }
    ]
  },
  {
    id: "university-rankings",
    title: "World University Rankings Analysis",
    category: "Data & Analytics",
    cat: "data & analytics",
    icon: "bar-chart-outline",
    cover: "data",
    tagline: "EDA & statistical analysis of global university rankings.",
    body: [
      "An exploratory data analysis of the World University Rankings dataset using EDA, statistical analysis and visualization to surface trends, relationships and the key factors influencing rankings.",
      "The insights help universities improve, guide policymakers, and assist students in making informed educational choices."
    ],
    highlights: [
      "EDA, statistical analysis & visualization",
      "Identifies the key drivers behind rankings"
    ],
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    links: [
      { label: "GitHub", url: "https://github.com/Bmokshith2406/DAV_Project", icon: "logo-github" }
    ]
  },
  {
    id: "inventory",
    title: "Inventory Management System",
    category: "Web & Backend",
    cat: "web & backend",
    icon: "cube-outline",
    cover: "web",
    tagline: "Full-stack MERN inventory tracking & orders.",
    body: [
      "A web-based MERN solution that streamlines and automates inventory tracking for businesses managing stock levels, processing orders and maintaining essential inventory data through a responsive React interface.",
      "A Node/Express backend handles server requests and business logic, while MongoDB enables flexible storage and real-time tracking minimizing human error and scaling with the business."
    ],
    highlights: [
      "Real-time stock & order tracking",
      "Responsive React UI · Node/Express API · MongoDB",
      "Built to minimize human error and scale"
    ],
    tech: ["MongoDB", "Express", "React", "Node.js"],
    links: [
      { label: "GitHub", url: "https://github.com/Bmokshith2406/TW.2324", icon: "logo-github" }
    ]
  },
  {
    id: "placement-drive",
    title: "Placement Drive",
    category: "Web & Backend",
    cat: "web & backend",
    icon: "people-outline",
    cover: "web",
    tagline: "Campus recruitment platform connecting students & employers.",
    body: [
      "A placement platform that streamlines campus recruitment: students build detailed profiles (academics, skills, resumes) while employers post openings and company profiles.",
      "It includes application management, online assessments and interview scheduling, plus reports and analytics on placement statistics, student performance and employer engagement."
    ],
    highlights: [
      "Student profiles + employer job posting",
      "Applications, assessments & interview scheduling",
      "Placement analytics & reporting"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    links: [
      { label: "GitHub", url: "https://github.com/Bmokshith2406/Placement_Drive", icon: "logo-github" }
    ]
  }
];

/* screenshot galleries — attached by project id (count of images per project) */
const PROJECT_IMAGES = {
  "apnatax": 3,
  "apnaweb": 3,
  "cert-verification": 3,
  "dropout-analysis": 3,
  "inventory": 4,
  "placement-drive": 3,
  "university-rankings": 2
};
PROJECTS.forEach(p => {
  const n = PROJECT_IMAGES[p.id];
  if (n) p.images = Array.from({ length: n }, (_, i) => `./assets/images/projects/${p.id}/${i + 1}.jpeg`);
});

/* =========================================================================
   HELPERS
   ========================================================================= */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const toggleClass = (el, cls = "active") => el.classList.toggle(cls);
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* =========================================================================
   THEME TOGGLE
   ========================================================================= */

(function initTheme() {
  const toggle = $("[data-theme-toggle]");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) { }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", next === "dark" ? "#0e0e10" : "#f3f3f5");
  });
})();

/* =========================================================================
   RENDER: orgs, skills, projects
   ========================================================================= */

(function renderOrgs() {
  const list = $("[data-orgs]");
  if (!list) return;
  list.innerHTML = ORGS.map(o => `
    <li class="clients-item">
      <div class="org-chip" title="${o.name}">
        ${o.logo
      ? `<img src="${o.logo}" alt="${o.name}" loading="lazy">`
      : `<span class="org-mono tint-${o.tint}">${o.mono}</span>`}
        <span class="org-name">${o.name}</span>
      </div>
    </li>`).join("");
})();

(function renderSkills() {
  const list = $("[data-skills]");
  if (!list) return;
  list.innerHTML = SKILLS.map(s => `
    <li class="skillset-item content-card">
      <h5 class="h5 skillset-group">${s.group}</h5>
      <ul class="chip-list">
        ${s.items.map(i => `<li class="chip">${i}</li>`).join("")}
      </ul>
    </li>`).join("");
})();

(function renderTimelines() {
  const render = (items) => items.map(e => `
    <li class="timeline-item">
      <span class="tl-logo"><img src="${e.logo}" alt="${e.org || e.role}" loading="lazy"></span>
      <h4 class="h4 timeline-item-title">${e.role}${e.org ? ` — ${e.org}` : ""}</h4>
      <span class="tl-meta">${e.meta}</span>
      <p class="timeline-text">${e.text}</p>
    </li>`).join("");

  const exp = $("[data-experience]");
  if (exp) exp.innerHTML = render(EXPERIENCE);
  const edu = $("[data-education]");
  if (edu) edu.innerHTML = render(EDUCATION);
})();

(function renderProjects() {
  const list = $("[data-project-list]");
  if (!list) return;
  list.innerHTML = PROJECTS.map(p => `
    <li class="project-item active" data-filter-item data-category="${p.cat}">
      <button class="project-card" data-project="${p.id}" aria-label="Open ${p.title} details">
        <div class="project-img ${p.images ? "has-image" + (p.imageFit === "contain" ? " contain" : "") : "cover-" + p.cover}"${p.images ? ` style="background-image:url('${p.images[0]}')"` : ""}>
          <div class="project-item-icon-box"><ion-icon name="open-outline"></ion-icon></div>
          ${p.images ? "" : `<ion-icon class="project-cover-icon" name="${p.icon}"></ion-icon>`}
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-category">${p.category}</p>
      </button>
    </li>`).join("");

  // attach modal open
  $$("[data-project]").forEach(btn => {
    btn.addEventListener("click", () => openProjectModal(btn.dataset.project));
  });
})();

/* =========================================================================
   PROJECT MODAL
   ========================================================================= */

const modalContainer = $("[data-modal-container]");
const modalOverlay = $("[data-overlay]");
const modalCloseBtn = $("[data-modal-close-btn]");

function openProjectModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  const cover = $("[data-modal-cover]");
  const thumbs = $("[data-modal-thumbs]");
  if (p.images && p.images.length) {
    cover.className = "modal-cover has-image" + (p.imageFit === "contain" ? " contain" : "");
    cover.innerHTML = `<img class="modal-main-img" data-modal-main src="${p.images[0]}" alt="${p.title}">`;
    if (p.images.length > 1) {
      thumbs.innerHTML = p.images.map((im, i) =>
        `<button type="button" class="modal-thumb${i === 0 ? " active" : ""}" data-thumb="${im}"><img src="${im}" alt="" loading="lazy"></button>`).join("");
      thumbs.hidden = false;
      const main = $("[data-modal-main]");
      $$("[data-thumb]", thumbs).forEach(t => t.addEventListener("click", () => {
        main.src = t.dataset.thumb;
        $$(".modal-thumb", thumbs).forEach(x => x.classList.remove("active"));
        t.classList.add("active");
      }));
    } else {
      thumbs.innerHTML = ""; thumbs.hidden = true;
    }
  } else {
    cover.className = "modal-cover cover-" + p.cover;
    cover.innerHTML = `<ion-icon name="${p.icon}"></ion-icon>`;
    if (thumbs) { thumbs.innerHTML = ""; thumbs.hidden = true; }
  }

  $("[data-modal-category]").textContent = p.category;
  $("[data-modal-title]").textContent = p.title;
  $("[data-modal-tagline]").textContent = p.tagline;

  $("[data-modal-body]").innerHTML = p.body.map(para => `<p>${para}</p>`).join("");

  const hl = $("[data-modal-highlights]");
  hl.innerHTML = p.highlights.length
    ? `<h4 class="modal-subhead">Highlights</h4><ul class="highlight-list">${p.highlights.map(h => `<li><ion-icon name="checkmark-circle-outline"></ion-icon><span>${h}</span></li>`).join("")}</ul>`
    : "";

  $("[data-modal-tech]").innerHTML = p.tech.map(t => `<li class="chip">${t}</li>`).join("");

  const links = $("[data-modal-links]");
  links.innerHTML = p.links.length
    ? p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="modal-link-btn"><ion-icon name="${l.icon}"></ion-icon><span>${l.label}</span></a>`).join("")
    : `<span class="modal-no-link"><ion-icon name="lock-closed-outline"></ion-icon> Private / internal project</span>`;

  modalContainer.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  modalContainer.classList.remove("active");
  document.body.style.overflow = "";
}

if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProjectModal);
if (modalOverlay) modalOverlay.addEventListener("click", closeProjectModal);
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modalContainer.classList.contains("active")) closeProjectModal();
});

/* =========================================================================
   SIDEBAR (mobile)
   ========================================================================= */

(function initSidebar() {
  const sidebar = $("[data-sidebar]");
  const sidebarBtn = $("[data-sidebar-btn]");
  if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener("click", () => toggleClass(sidebar));
  }
})();

/* =========================================================================
   PORTFOLIO FILTER
   ========================================================================= */

(function initFilter() {
  const select = $("[data-select]");
  const selectItems = $$("[data-select-item]");
  const selectValue = $("[data-select-value]");
  const filterBtns = $$("[data-filter-btn]");
  const filterItems = $$("[data-filter-item]");

  const filter = (value) => {
    filterItems.forEach(item => {
      if (value === "all" || value === item.dataset.category) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  if (select) select.addEventListener("click", () => toggleClass(select));

  selectItems.forEach(item => {
    item.addEventListener("click", function () {
      const value = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      toggleClass(select);
      filter(value);
    });
  });

  let lastBtn = filterBtns[0];
  filterBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const value = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      filter(value);
      if (lastBtn) lastBtn.classList.remove("active");
      this.classList.add("active");
      lastBtn = this;
    });
  });
})();

/* =========================================================================
   CONTACT FORM → mailto
   ========================================================================= */

(function initForm() {
  const form = $("[data-form]");
  const inputs = $$("[data-form-input]");
  const btn = $("[data-form-btn]");
  if (!form) return;

  inputs.forEach(inp => {
    inp.addEventListener("input", () => {
      if (form.checkValidity()) btn.removeAttribute("disabled");
      else btn.setAttribute("disabled", "");
    });
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = form.fullname.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const bodyText = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:mokshithbalidi@gmail.com?subject=${subject}&body=${bodyText}`;
  });
})();

/* =========================================================================
   PAGE NAVIGATION (tabs)
   ========================================================================= */

(function initNav() {
  const navLinks = $$("[data-nav-link]");
  const pages = $$("[data-page]");

  const activate = (name) => {
    pages.forEach(page => page.classList.toggle("active", page.dataset.page === name));
    navLinks.forEach(link => {
      const linkName = link.querySelector("span").innerText.toLowerCase();
      link.classList.toggle("active", linkName === name);
    });
    window.scrollTo(0, 0);
  };

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      activate(this.querySelector("span").innerText.toLowerCase());
    });
  });
})();

/* =========================================================================
   COUNT-UP STATS
   ========================================================================= */

(function initCounters() {
  const counters = $$("[data-count]");
  if (!counters.length) return;

  if (prefersReduced) return; // leave final values as written in HTML

  const run = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    const duration = 1100;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        run(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(c => io.observe(c));
})();
