(() => {
  "use strict";

  /* =========================================================================
   * 1. WEIGHTED SKILL TAXONOMY & ALIASES
   * ========================================================================= */
  const SKILL_TAXONOMY = [
    { name: "JavaScript", category: "Language", weight: 1.2, aliases: ["javascript", "js", "ecmascript", "es6", "es2020", "vanilla js"] },
    { name: "TypeScript", category: "Language", weight: 1.2, aliases: ["typescript", "ts"] },
    { name: "Python", category: "Language", weight: 1.25, aliases: ["python", "python 3", "python3", "py"] },
    { name: "Java", category: "Language", weight: 1.15, aliases: ["java", "jdk", "jvm"] },
    { name: "Go", category: "Language", weight: 1.15, aliases: ["golang", "go lang"] },
    { name: "Rust", category: "Language", weight: 1.15, aliases: ["rust", "rustlang"] },
    { name: "C++", category: "Language", weight: 1.15, aliases: ["c++", "cpp", "c++17", "c++20"] },
    { name: "SQL", category: "Language", weight: 1.1, aliases: ["sql", "structured query language", "t-sql", "pl/sql"] },
    { name: "HTML/CSS", category: "Language", weight: 0.9, aliases: ["html", "html5", "css", "css3", "sass", "scss"] },
    { name: "Bash", category: "Language", weight: 1.0, aliases: ["bash", "shell scripting", "shell", "sh"] },

    { name: "React", category: "Framework", weight: 1.2, aliases: ["react", "reactjs", "react.js"] },
    { name: "Next.js", category: "Framework", weight: 1.1, aliases: ["next.js", "nextjs"] },
    { name: "Vue.js", category: "Framework", weight: 1.1, aliases: ["vue", "vuejs", "vue.js"] },
    { name: "Node.js", category: "Framework", weight: 1.2, aliases: ["node.js", "nodejs", "node"] },
    { name: "Express.js", category: "Framework", weight: 1.0, aliases: ["express", "expressjs", "express.js"] },
    { name: "Django", category: "Framework", weight: 1.1, aliases: ["django"] },
    { name: "FastAPI", category: "Framework", weight: 1.1, aliases: ["fastapi", "fast api"] },
    { name: "Flask", category: "Framework", weight: 1.0, aliases: ["flask"] },
    { name: "Spring Boot", category: "Framework", weight: 1.15, aliases: ["spring boot", "springboot", "spring"] },
    { name: "GraphQL", category: "API", weight: 1.0, aliases: ["graphql", "apollo"] },
    { name: "REST APIs", category: "API", weight: 1.0, aliases: ["rest api", "rest apis", "restful", "openapi", "swagger"] },

    { name: "Machine Learning", category: "AI/ML", weight: 1.25, aliases: ["machine learning", "ml", "supervised learning", "unsupervised learning"] },
    { name: "Deep Learning", category: "AI/ML", weight: 1.2, aliases: ["deep learning", "neural networks", "cnn", "rnn", "transformers"] },
    { name: "TensorFlow", category: "AI/ML", weight: 1.2, aliases: ["tensorflow", "tf", "keras"] },
    { name: "PyTorch", category: "AI/ML", weight: 1.2, aliases: ["pytorch", "torch"] },
    { name: "Scikit-learn", category: "AI/ML", weight: 1.1, aliases: ["scikit-learn", "sklearn", "scikit learn"] },
    { name: "Pandas", category: "Data", weight: 1.0, aliases: ["pandas"] },
    { name: "NumPy", category: "Data", weight: 1.0, aliases: ["numpy"] },
    { name: "MLOps", category: "AI/ML", weight: 1.15, aliases: ["mlops", "mlflow", "model deployment", "model serving", "kubeflow"] },
    { name: "Artificial Intelligence", category: "AI/ML", weight: 1.05, aliases: ["artificial intelligence", "generative ai", "llm", "llms", "nlp"] },

    { name: "PostgreSQL", category: "Database", weight: 1.15, aliases: ["postgresql", "postgres", "psql"] },
    { name: "MongoDB", category: "Database", weight: 1.1, aliases: ["mongodb", "mongo"] },
    { name: "MySQL", category: "Database", weight: 1.05, aliases: ["mysql", "mariadb"] },
    { name: "Redis", category: "Database", weight: 1.05, aliases: ["redis"] },
    { name: "SQLite", category: "Database", weight: 0.95, aliases: ["sqlite", "sqlite3"] },

    { name: "AWS", category: "Cloud", weight: 1.25, aliases: ["aws", "amazon web services", "ec2", "s3", "lambda", "eks"] },
    { name: "Google Cloud", category: "Cloud", weight: 1.2, aliases: ["gcp", "google cloud", "google cloud platform"] },
    { name: "Azure", category: "Cloud", weight: 1.2, aliases: ["azure", "microsoft azure"] },
    { name: "Docker", category: "DevOps", weight: 1.2, aliases: ["docker", "dockerfile", "containerization", "containers"] },
    { name: "Kubernetes", category: "DevOps", weight: 1.25, aliases: ["kubernetes", "k8s", "helm"] },
    { name: "Terraform", category: "DevOps", weight: 1.2, aliases: ["terraform", "iac", "infrastructure as code"] },
    { name: "CI/CD", category: "DevOps", weight: 1.1, aliases: ["ci/cd", "cicd", "github actions", "gitlab ci", "jenkins", "continuous integration"] },
    { name: "Linux", category: "DevOps", weight: 1.05, aliases: ["linux", "ubuntu", "debian", "systemd"] },
    { name: "Git", category: "Tooling", weight: 0.85, aliases: ["git", "github", "gitlab"] },
    { name: "Automated Testing", category: "Quality", weight: 1.05, aliases: ["jest", "pytest", "cypress", "playwright", "unit testing", "automated testing", "tdd"] }
  ];

  /* =========================================================================
   * 2. OFFLINE HACKATHON DEMO SAMPLES
   * ========================================================================= */
  const DEMO_SAMPLES = {
    fullstack: {
      label: "Sample 1 — Full-Stack Developer",
      username: "alex-dev-demo",
      resume: "Full-Stack Developer experienced with React, JavaScript, TypeScript, Node.js, PostgreSQL, Docker, GraphQL, and Automated Testing.",
      jd: `Senior Full-Stack Developer
We are looking for a Full-Stack Developer with 3+ years of experience building scalable web applications.
Bachelor's degree in Computer Science or equivalent practical experience.

Requirements:
- Strong proficiency in JavaScript (ES6+), TypeScript, and React
- Backend experience building REST APIs with Node.js and Express.js
- Solid database design skills using PostgreSQL and Redis
- Experience containerizing services with Docker and setting up CI/CD pipelines
- Familiarity with Automated Testing (Jest/Playwright) and GraphQL

Responsibilities:
- Design and ship responsive frontend interfaces and backend APIs
- Optimize database queries and maintain high test coverage`,
      repos: [
        {
          name: "pulseboard-web",
          html_url: "https://github.com/alex-dev-demo/pulseboard-web",
          description: "Real-time team analytics dashboard built with React, JavaScript, and REST APIs.",
          language: "JavaScript",
          topics: ["react", "javascript", "frontend", "dashboard"],
          stargazers_count: 42,
          forks_count: 9,
          updated_at: "2026-10-18T12:00:00Z",
          readme: "# PulseBoard Web\nA modern React and JavaScript dashboard consuming REST APIs.\n## Architecture\nBuilt with modular React hooks, state management, and Jest unit testing.\n## Setup\nRun npm install and npm run dev."
        },
        {
          name: "ledger-api-node",
          html_url: "https://github.com/alex-dev-demo/ledger-api-node",
          description: "Multi-tenant billing REST API powered by Node.js, Express.js, PostgreSQL, and Docker.",
          language: "JavaScript",
          topics: ["nodejs", "express", "postgresql", "docker", "rest-api"],
          stargazers_count: 31,
          forks_count: 6,
          updated_at: "2026-11-05T09:30:00Z",
          readme: "# Ledger API\nProduction-ready Node.js and Express.js service backed by PostgreSQL.\n## Deployment\nIncludes Dockerfile and docker-compose.yml plus GitHub Actions CI/CD workflow.\n## Testing\nIncludes integration tests with Jest."
        },
        {
          name: "quicknotes-spa",
          html_url: "https://github.com/alex-dev-demo/quicknotes-spa",
          description: "Offline-first markdown notes app in React and HTML/CSS.",
          language: "JavaScript",
          topics: ["react", "html5", "css3"],
          stargazers_count: 14,
          forks_count: 2,
          updated_at: "2026-07-12T15:00:00Z",
          readme: "# QuickNotes\nLightweight React notes app with local storage persistence."
        }
      ]
    },

    ml: {
      label: "Sample 2 — Machine Learning Engineer",
      username: "priya-ml-demo",
      resume: "Machine Learning Engineer skilled in Python, TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, Docker, Kubernetes, and AWS.",
      jd: `Machine Learning Engineer
Seeking an ML Engineer with 2+ years of experience developing and deploying production ML models.
Master's or Bachelor's degree in Computer Science, Data Science, or related field.

Requirements:
- Expert in Python, Pandas, NumPy, and Scikit-learn
- Deep Learning experience with TensorFlow or PyTorch
- Production MLOps and model deployment using FastAPI, Docker, and Kubernetes
- Cloud experience with AWS (S3, EC2, SageMaker) and SQL for feature pipelines
- Strong Automated Testing practices using pytest

Responsibilities:
- Train, evaluate, and deploy machine learning models at scale
- Build reproducible data processing and monitoring pipelines`,
      repos: [
        {
          name: "medvision-classifier",
          html_url: "https://github.com/priya-ml-demo/medvision-classifier",
          description: "Medical X-ray classification pipeline using Python, TensorFlow, and NumPy.",
          language: "Python",
          topics: ["python", "tensorflow", "deep-learning", "machine-learning"],
          stargazers_count: 58,
          forks_count: 13,
          updated_at: "2026-11-10T10:00:00Z",
          readme: "# MedVision Classifier\nConvolutional neural network built in Python 3 with TensorFlow and Keras.\n## Data Pipeline\nUses Pandas and NumPy for preprocessing and Scikit-learn for ROC-AUC evaluation.\n## Serving\nExposed via a FastAPI inference endpoint with a Dockerfile."
        },
        {
          name: "churn-predict-lab",
          html_url: "https://github.com/priya-ml-demo/churn-predict-lab",
          description: "Customer churn prediction experiments using Scikit-learn, Pandas, and MLflow.",
          language: "Python",
          topics: ["machine-learning", "scikit-learn", "pandas", "mlops"],
          stargazers_count: 19,
          forks_count: 4,
          updated_at: "2026-09-22T08:15:00Z",
          readme: "# Churn Predict Lab\nEnd-to-end supervised learning workflow using Scikit-learn, Pandas, and MLflow tracking."
        },
        {
          name: "eda-notebooks",
          html_url: "https://github.com/priya-ml-demo/eda-notebooks",
          description: "Exploratory data analysis notebooks in Python.",
          language: "Python",
          topics: ["python", "data-science"],
          stargazers_count: 5,
          forks_count: 1,
          updated_at: "2025-11-01T10:00:00Z",
          readme: "# EDA Notebooks\nCollection of Pandas and NumPy data exploration notebooks."
        }
      ]
    },

    devops: {
      label: "Sample 3 — Cloud / DevOps Engineer",
      username: "sam-cloud-demo",
      resume: "Cloud & DevOps Engineer experienced with AWS, Linux, Docker, Kubernetes, Terraform, CI/CD, Bash, Python, and Go.",
      jd: `Cloud / DevOps Engineer
We need a Cloud Infrastructure Engineer with 3+ years of experience automating cloud platforms.
Bachelor's degree in Engineering or equivalent hands-on infrastructure experience.

Requirements:
- Strong hands-on experience with AWS and Terraform (Infrastructure as Code)
- Production container orchestration with Docker and Kubernetes
- Solid Linux administration and Bash or Python scripting
- Automated CI/CD pipelines (GitHub Actions, GitLab CI)
- Monitoring, PostgreSQL operations, and Go tooling are a plus

Responsibilities:
- Provision reproducible multi-environment cloud infrastructure
- Maintain zero-downtime deployment pipelines and cluster reliability`,
      repos: [
        {
          name: "aws-eks-terraform-blueprint",
          html_url: "https://github.com/sam-cloud-demo/aws-eks-terraform-blueprint",
          description: "Production AWS EKS cluster modules provisioned with Terraform and GitHub Actions CI/CD.",
          language: "HCL",
          topics: ["aws", "terraform", "kubernetes", "iac", "cicd"],
          stargazers_count: 74,
          forks_count: 18,
          updated_at: "2026-11-18T14:20:00Z",
          readme: "# AWS EKS Terraform Blueprint\nReusable Terraform modules for VPC, IAM, and Amazon EKS.\n## CI/CD\nAutomated plan and apply checks using GitHub Actions.\n## Operations\nIncludes Helm charts for Kubernetes ingress and Linux node hardening scripts."
        },
        {
          name: "docker-observability-stack",
          html_url: "https://github.com/sam-cloud-demo/docker-observability-stack",
          description: "One-command Docker Compose stack for Linux server metrics and log aggregation.",
          language: "Shell",
          topics: ["docker", "linux", "bash", "devops"],
          stargazers_count: 29,
          forks_count: 7,
          updated_at: "2026-10-02T11:00:00Z",
          readme: "# Docker Observability Stack\nContainerized Prometheus, Grafana, and Loki setup with Bash bootstrap scripts for Ubuntu Linux."
        },
        {
          name: "cloud-cost-janitor",
          html_url: "https://github.com/sam-cloud-demo/cloud-cost-janitor",
          description: "Python CLI that audits idle AWS EC2 and EBS resources.",
          language: "Python",
          topics: ["aws", "python", "automation"],
          stargazers_count: 16,
          forks_count: 3,
          updated_at: "2026-08-29T16:45:00Z",
          readme: "# Cloud Cost Janitor\nPython utility using boto3 to identify unused AWS resources and post alerts."
        }
      ]
    }
  };

  /* =========================================================================
   * 3. APPLICATION STATE (In-Memory Only)
   * ========================================================================= */
  const state = {
    isAnalyzing: false,
    activeRunId: 0,
    manualRepos: [],
    lastReport: null,
    isDemoMode: false,
    demoReposOverride: null
  };

  /* =========================================================================
   * 4. DOM REFERENCES
   * ========================================================================= */
  const dom = {
    form: document.getElementById("analysis-form"),
    jdInput: document.getElementById("jd-input"),
    jdCharCount: document.getElementById("jd-char-count"),
    usernameInput: document.getElementById("github-username"),
    repoUrlsInput: document.getElementById("repo-urls"),
    resumeText: document.getElementById("resume-text"),
    resumeFile: document.getElementById("resume-file"),
    analyzeBtn: document.getElementById("analyze-btn"),
    formError: document.getElementById("form-error"),

    manualReposBanner: document.getElementById("manual-repos-banner"),
    manualReposCount: document.getElementById("manual-repos-count"),
    clearManualReposBtn: document.getElementById("clear-manual-repos-btn"),
    openManualRepoBtn: document.getElementById("open-manual-repo-btn"),
    resetAllBtn: document.getElementById("reset-all-btn"),
    heroDemoBtn: document.getElementById("hero-demo-btn"),

    previewSkillCount: document.getElementById("preview-skill-count"),
    jdPreviewSkills: document.getElementById("jd-preview-skills"),
    jdPreviewMeta: document.getElementById("jd-preview-meta"),
    previewExp: document.getElementById("preview-exp"),
    previewEdu: document.getElementById("preview-edu"),

    byokToggle: document.getElementById("byok-toggle"),
    byokPanel: document.getElementById("byok-panel"),
    byokModel: document.getElementById("byok-model"),
    byokKey: document.getElementById("byok-key"),
    navAiPill: document.getElementById("nav-ai-pill"),
    navAiLabel: document.getElementById("nav-ai-label"),

    dashboardSection: document.getElementById("dashboard-section"),
    dashboardEmpty: document.getElementById("dashboard-empty"),
    dashboardLoading: document.getElementById("dashboard-loading"),
    loadingTitle: document.getElementById("loading-status-title"),
    loadingSub: document.getElementById("loading-status-sub"),
    dashboardResults: document.getElementById("dashboard-results"),

    demoModeBadge: document.getElementById("demo-mode-badge"),
    aiEnhancedBadge: document.getElementById("ai-enhanced-badge"),
    reportSubtitle: document.getElementById("report-subtitle"),
    apiWarningBanner: document.getElementById("api-warning-banner"),

    scoreRingProgress: document.getElementById("score-ring-progress"),
    overallScoreValue: document.getElementById("overall-score-value"),
    overallVerdictBadge: document.getElementById("overall-verdict-badge"),
    overallVerdictTitle: document.getElementById("overall-verdict-title"),
    overallVerdictDesc: document.getElementById("overall-verdict-desc"),
    dimensionBars: document.getElementById("dimension-bars"),
    kpiGrid: document.getElementById("kpi-grid"),
    skillMatrixList: document.getElementById("skill-matrix-list"),
    strongCountPill: document.getElementById("strong-count-pill"),
    missingCountPill: document.getElementById("missing-count-pill"),
    strongSkillsList: document.getElementById("strong-skills-list"),
    missingSkillsList: document.getElementById("missing-skills-list"),
    repoCountPill: document.getElementById("repo-count-pill"),
    repoCardsGrid: document.getElementById("repo-cards-grid"),
    recommendationsList: document.getElementById("recommendations-list"),

    aiResultsCard: document.getElementById("ai-results-card"),
    aiResultsContent: document.getElementById("ai-results-content"),

    copyReportBtn: document.getElementById("copy-report-btn"),
    exportTxtBtn: document.getElementById("export-txt-btn"),
    exportJsonBtn: document.getElementById("export-json-btn"),

    manualRepoModal: document.getElementById("manual-repo-modal"),
    manualRepoForm: document.getElementById("manual-repo-form"),
    methodologyModal: document.getElementById("methodology-modal"),
    openMethodologyBtn: document.getElementById("open-methodology-btn"),
    toastContainer: document.getElementById("toast-container")
  };

  /* =========================================================================
   * 5. UTILITIES & SAFE DOM HELPERS
   * ========================================================================= */
  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function hasSkillMatch(text, aliases) {
    if (!text) return false;
    const lower = text.toLowerCase();
    for (const alias of aliases) {
      const escaped = escapeRegex(alias.toLowerCase());
      const pattern = new RegExp(`(^|[^a-z0-9])${escaped}(?=$|[^a-z0-9])`, "i");
      if (pattern.test(lower)) return true;
    }
    return false;
  }

  function el(tag, className, textContent) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (textContent !== undefined && textContent !== null) {
      node.textContent = String(textContent);
    }
    return node;
  }

  function showToast(message, type = "info") {
    const toast = el("div", `toast toast--${type}`, message);
    dom.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3400);
  }

  function setFormError(msg) {
    if (!msg) {
      dom.formError.classList.add("hidden");
      dom.formError.textContent = "";
      return;
    }
    dom.formError.textContent = msg;
    dom.formError.classList.remove("hidden");
  }

  function formatRelativeDate(isoDate) {
    if (!isoDate) return "Unknown";
    const diffDays = Math.floor((Date.now() - new Date(isoDate).getTime()) / 86400000);
    if (Number.isNaN(diffDays)) return "Unknown";
    if (diffDays <= 1) return "Updated today";
    if (diffDays < 30) return `Updated ${diffDays}d ago`;
    const months = Math.floor(diffDays / 30);
    if (months < 12) return `Updated ${months}mo ago`;
    return `Updated ${Math.floor(months / 12)}y ago`;
  }

  /* =========================================================================
   * 6. JOB DESCRIPTION & RESUME PARSER
   * ========================================================================= */
  function parseJobDescription(jdText) {
    const text = (jdText || "").trim();
    const extractedSkills = [];

    for (const skill of SKILL_TAXONOMY) {
      if (hasSkillMatch(text, skill.aliases)) {
        extractedSkills.push({ ...skill });
      }
    }

    const expMatch = text.match(/(\d+\+?\s*(?:to|-)\s*\d+\s*years?|\d+\+?\s*years?)/i);
    const experience = expMatch ? expMatch[0] : "Not specified";

    const eduPatterns = [
      /Ph\.?D\.?|Doctorate/i,
      /Master'?s|M\.?S\.?|M\.?Tech/i,
      /Bachelor'?s|B\.?S\.?|B\.?Tech|B\.?E\.?/i,
      /Computer Science|Software Engineering|Engineering/i
    ];
    let education = "Not specified";
    for (const pattern of eduPatterns) {
      const m = text.match(pattern);
      if (m) {
        education = m[0];
        break;
      }
    }

    const responsibilities = text
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => /^[-•*]\s+/.test(line) && line.length > 20)
      .slice(0, 6)
      .map((line) => line.replace(/^[-•*]\s+/, ""));

    return {
      skills: extractedSkills,
      experience,
      education,
      responsibilities
    };
  }

  function parseClaimedSkills(resumeText) {
    const claimed = new Set();
    if (!resumeText || !resumeText.trim()) return claimed;
    for (const skill of SKILL_TAXONOMY) {
      if (hasSkillMatch(resumeText, skill.aliases)) {
        claimed.add(skill.name);
      }
    }
    return claimed;
  }

  function updateJdPreview() {
    const text = dom.jdInput.value;
    dom.jdCharCount.textContent = `${text.length} chars`;
    const parsed = parseJobDescription(text);

    dom.previewSkillCount.textContent = `${parsed.skills.length} skill${parsed.skills.length === 1 ? "" : "s"}`;
    dom.jdPreviewSkills.innerHTML = "";

    if (parsed.skills.length === 0) {
      dom.jdPreviewSkills.appendChild(
        el("span", "empty-inline", "Paste a job description or load a sample to inspect extracted requirements.")
      );
      dom.jdPreviewMeta.classList.add("hidden");
      return;
    }

    for (const skill of parsed.skills) {
      const chip = el("span", "chip");
      chip.appendChild(document.createTextNode(skill.name + " "));
      chip.appendChild(el("span", "chip-cat", skill.category));
      dom.jdPreviewSkills.appendChild(chip);
    }

    dom.previewExp.textContent = parsed.experience;
    dom.previewEdu.textContent = parsed.education;
    dom.jdPreviewMeta.classList.remove("hidden");
  }

  /* =========================================================================
   * 7. GITHUB REST API CLIENT
   * ========================================================================= */
  function parseRepoUrls(rawText) {
    if (!rawText || !rawText.trim()) return [];
    const lines = rawText
      .split(/[\r\n,]+/)
      .map((s) => s.trim())
      .filter(Boolean);

    const parsed = [];
    const seen = new Set();

    for (const line of lines) {
      const match = line.match(/github\.com\/([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)/i);
      if (match) {
        const owner = match[1];
        const repo = match[2].replace(/\.git$/i, "");
        const key = `${owner}/${repo}`.toLowerCase();
        if (!seen.has(key)) {
          seen.add(key);
          parsed.push({ owner, repo });
        }
      }
    }
    return parsed;
  }

  function decodeBase64Utf8(base64Str) {
    try {
      const cleaned = base64Str.replace(/\s/g, "");
      const binary = atob(cleaned);
      const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
      return new TextDecoder("utf-8", { fatal: false }).decode(bytes).slice(0, 6000);
    } catch {
      return "";
    }
  }

  async function fetchGitHubJson(url) {
    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json"
      }
    });

    if (res.status === 403) {
      const remaining = res.headers.get("X-RateLimit-Remaining");
      if (remaining === "0") {
        throw new Error("GitHub API rate limit exceeded (60 req/hr unauthenticated). Use Manual Repo Entry or Demo Mode.");
      }
      throw new Error("GitHub API access forbidden (403).");
    }
    if (res.status === 404) {
      throw new Error("GitHub user or repository not found (404).");
    }
    if (!res.ok) {
      throw new Error(`GitHub API error (${res.status}).`);
    }
    return res.json();
  }

  async function fetchRepoReadme(owner, repoName) {
    try {
      const data = await fetchGitHubJson(`https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repoName)}/readme`);
      if (data && data.content) {
        return decodeBase64Utf8(data.content);
      }
      return "";
    } catch {
      return "";
    }
  }

  async function fetchGitHubPortfolio(username, repoUrlSpecs) {
    const warnings = [];
    const collectedRepos = [];
    const seenKeys = new Set();

    if (username) {
      const cleanUser = username.trim().replace(/^@/, "");
      if (!/^[A-Za-z0-9-]+$/.test(cleanUser)) {
        throw new Error("Invalid GitHub username format.");
      }

      dom.loadingTitle.textContent = `Fetching @${cleanUser} from GitHub…`;
      const repos = await fetchGitHubJson(
        `https://api.github.com/users/${encodeURIComponent(cleanUser)}/repos?sort=updated&per_page=12&type=owner`
      );

      if (Array.isArray(repos)) {
        for (const r of repos) {
          if (r.fork) continue;
          const key = (r.full_name || r.name).toLowerCase();
          if (!seenKeys.has(key)) {
            seenKeys.add(key);
            collectedRepos.push({
              owner: r.owner?.login || cleanUser,
              name: r.name,
              html_url: r.html_url,
              description: r.description || "",
              language: r.language || "",
              topics: Array.isArray(r.topics) ? r.topics : [],
              stargazers_count: r.stargazers_count || 0,
              forks_count: r.forks_count || 0,
              updated_at: r.updated_at || "",
              readme: ""
            });
          }
        }
      }
    }

    if (repoUrlSpecs.length > 0) {
      dom.loadingTitle.textContent = "Fetching specified GitHub repositories…";
      const urlResults = await Promise.allSettled(
        repoUrlSpecs.map(({ owner, repo }) =>
          fetchGitHubJson(`https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`)
        )
      );

      urlResults.forEach((result, idx) => {
        if (result.status === "fulfilled" && result.value) {
          const r = result.value;
          const key = (r.full_name || r.name).toLowerCase();
          if (!seenKeys.has(key)) {
            seenKeys.add(key);
            collectedRepos.push({
              owner: r.owner?.login || repoUrlSpecs[idx].owner,
              name: r.name,
              html_url: r.html_url,
              description: r.description || "",
              language: r.language || "",
              topics: Array.isArray(r.topics) ? r.topics : [],
              stargazers_count: r.stargazers_count || 0,
              forks_count: r.forks_count || 0,
              updated_at: r.updated_at || "",
              readme: ""
            });
          }
        } else {
          warnings.push(`Could not fetch ${repoUrlSpecs[idx].owner}/${repoUrlSpecs[idx].repo} (private, invalid, or rate-limited).`);
        }
      });
    }

    const readmeTargets = collectedRepos.slice(0, 8);
    if (readmeTargets.length > 0) {
      dom.loadingTitle.textContent = "Inspecting repository READMEs…";
      const readmeResults = await Promise.allSettled(
        readmeTargets.map((repo) => fetchRepoReadme(repo.owner, repo.name))
      );
      readmeResults.forEach((res, i) => {
        if (res.status === "fulfilled") {
          readmeTargets[i].readme = res.value || "";
        }
      });
    }

    return { repos: collectedRepos, warnings };
  }

  /* =========================================================================
   * 8. DETERMINISTIC PROOF-OF-WORK SCORING ENGINE
   * ========================================================================= */
  function evaluatePortfolio(jdParsed, repos, claimedSkills) {
    const requiredSkills = jdParsed.skills;
    const skillEvidence = [];
    const repoMatchesMap = new Map();

    repos.forEach((repo, idx) => {
      repoMatchesMap.set(idx, {
        repo,
        matchedSkills: new Set(),
        strongMatches: new Set(),
        docScore: 0,
        activityScore: 0
      });
    });

    for (const skill of requiredSkills) {
      let inLanguage = false;
      let inTopics = false;
      let inDescription = false;
      let inReadme = false;
      const supportingRepos = [];

      repos.forEach((repo, idx) => {
        const langMatch = hasSkillMatch(repo.language || "", skill.aliases);
        const topicMatch = hasSkillMatch((repo.topics || []).join(" "), skill.aliases);
        const descMatch = hasSkillMatch(repo.description || "", skill.aliases);
        const readmeMatch = hasSkillMatch(repo.readme || "", skill.aliases);

        if (langMatch || topicMatch || descMatch || readmeMatch) {
          supportingRepos.push(repo.name);
          const entry = repoMatchesMap.get(idx);
          entry.matchedSkills.add(skill.name);
          if (langMatch || topicMatch) entry.strongMatches.add(skill.name);
        }

        if (langMatch) inLanguage = true;
        if (topicMatch) inTopics = true;
        if (descMatch) inDescription = true;
        if (readmeMatch) inReadme = true;
      });

      const multiRepo = supportingRepos.length >= 2;
      const isClaimed = claimedSkills.has(skill.name);

      let level = "No evidence";
      let classification = isClaimed ? "Claimed Only (Unverified)" : "Unverified";
      let quality = 0;

      if (inLanguage || (inTopics && (inDescription || inReadme)) || (multiRepo && (inTopics || inDescription))) {
        level = "Strong evidence";
        classification = "Demonstrated in Code / Repo";
        quality = multiRepo ? 1.0 : 0.88;
      } else if (inTopics || inDescription || (inReadme && multiRepo)) {
        level = "Moderate evidence";
        classification = "Inferred from Repo Metadata";
        quality = 0.62;
      } else if (inReadme) {
        level = "Weak evidence";
        classification = "Mentioned in README Only";
        quality = 0.32;
      }

      const signals = [];
      if (inLanguage) signals.push("Primary language");
      if (inTopics) signals.push("Repo topics");
      if (inDescription) signals.push("Repo description");
      if (inReadme) signals.push("README text");
      if (multiRepo) signals.push(`${supportingRepos.length} repos`);
      if (isClaimed) signals.push("Claimed on resume");

      skillEvidence.push({
        name: skill.name,
        category: skill.category,
        weight: skill.weight,
        level,
        classification,
        quality,
        isClaimed,
        supportingRepos,
        signals: signals.length > 0 ? signals : ["No GitHub signal detected"]
      });
    }

    const totalWeight = skillEvidence.reduce((sum, s) => sum + s.weight, 0) || 1;
    const weightedCoverage = skillEvidence.reduce(
      (sum, s) => sum + (s.quality > 0 ? s.weight * Math.min(1, s.quality + 0.12) : 0),
      0
    );
    const skillCoveragePct = requiredSkills.length > 0
      ? Math.round((weightedCoverage / totalWeight) * 100)
      : 0;

    const avgEvidenceQuality = requiredSkills.length > 0
      ? Math.round((skillEvidence.reduce((sum, s) => sum + s.quality, 0) / requiredSkills.length) * 100)
      : 0;

    const relevantReposCount = Array.from(repoMatchesMap.values()).filter((r) => r.matchedSkills.size > 0).length;
    const repoRelevancePct = repos.length > 0
      ? Math.round((relevantReposCount / repos.length) * 100)
      : 0;

    const now = Date.now();
    let activityTotal = 0;
    repos.forEach((repo, idx) => {
      const updatedMs = repo.updated_at ? new Date(repo.updated_at).getTime() : 0;
      const daysOld = updatedMs ? Math.max(0, (now - updatedMs) / 86400000) : 999;
      let score = 20;
      if (daysOld <= 30) score = 100;
      else if (daysOld <= 90) score = 85;
      else if (daysOld <= 180) score = 70;
      else if (daysOld <= 365) score = 50;
      repoMatchesMap.get(idx).activityScore = score;
      activityTotal += score;
    });
    const activityPct = repos.length > 0 ? Math.round(activityTotal / repos.length) : 0;

    let docTotal = 0;
    repos.forEach((repo, idx) => {
      let score = 0;
      if (repo.description && repo.description.trim().length >= 15) score += 30;
      if (Array.isArray(repo.topics) && repo.topics.length >= 2) score += 20;
      const readmeLen = (repo.readme || "").trim().length;
      if (readmeLen >= 400) score += 50;
      else if (readmeLen >= 120) score += 30;
      else if (readmeLen > 0) score += 15;
      repoMatchesMap.get(idx).docScore = score;
      docTotal += score;
    });
    const documentationPct = repos.length > 0 ? Math.round(docTotal / repos.length) : 0;

    const overallScore = Math.round(
      skillCoveragePct * 0.35 +
      avgEvidenceQuality * 0.25 +
      repoRelevancePct * 0.20 +
      activityPct * 0.10 +
      documentationPct * 0.10
    );

    const dimensions = [
      {
        name: "Technical Skill Coverage",
        weight: 35,
        score: skillCoveragePct,
        reason: `${skillEvidence.filter((s) => s.quality > 0).length} of ${requiredSkills.length} required skills have at least partial GitHub evidence.`
      },
      {
        name: "Project Evidence Quality",
        weight: 25,
        score: avgEvidenceQuality,
        reason: `${skillEvidence.filter((s) => s.level === "Strong evidence").length} strong, ${skillEvidence.filter((s) => s.level === "Moderate evidence").length} moderate, and ${skillEvidence.filter((s) => s.level === "Weak evidence").length} weak skill signals.`
      },
      {
        name: "Repository Relevance",
        weight: 20,
        score: repoRelevancePct,
        reason: `${relevantReposCount} of ${repos.length} analyzed repositories directly align with job requirements.`
      },
      {
        name: "Activity & Maintenance",
        weight: 10,
        score: activityPct,
        reason: `Based on last-updated timestamps across ${repos.length} repositories.`
      },
      {
        name: "Documentation Quality",
        weight: 10,
        score: documentationPct,
        reason: `Evaluates repository descriptions, topic tags, and substantive README documentation.`
      }
    ];

    const rankedRepos = Array.from(repoMatchesMap.values())
      .map((entry) => ({
        ...entry.repo,
        matchedSkills: Array.from(entry.matchedSkills),
        strongMatches: Array.from(entry.strongMatches),
        docScore: entry.docScore,
        activityScore: entry.activityScore
      }))
      .sort((a, b) => b.matchedSkills.length - a.matchedSkills.length || b.stargazers_count - a.stargazers_count);

    const recommendations = buildRecommendations(skillEvidence, rankedRepos, documentationPct, activityPct);

    return {
      overallScore,
      dimensions,
      skillEvidence,
      rankedRepos,
      recommendations,
      jdParsed,
      generatedAt: new Date().toISOString()
    };
  }

  function buildRecommendations(skillEvidence, rankedRepos, docPct, activityPct) {
    const recs = [];
    const missing = skillEvidence.filter((s) => s.level === "No evidence");
    const weak = skillEvidence.filter((s) => s.level === "Weak evidence");

    missing.slice(0, 4).forEach((skill) => {
      recs.push({
        priority: "High",
        title: `Demonstrate ${skill.name} in a public repository`,
        detail: skill.isClaimed
          ? `${skill.name} is claimed on your resume, but no GitHub evidence was found. Publish a focused project or add verifiable implementation details using ${skill.name}.`
          : `${skill.name} (${skill.category}) is required by the job description with zero current GitHub signals. Build a compact, deployed project showcasing ${skill.name}.`
      });
    });

    weak.slice(0, 3).forEach((skill) => {
      recs.push({
        priority: "Medium",
        title: `Strengthen ${skill.name} beyond README mentions`,
        detail: `${skill.name} currently only appears in README text (${skill.supportingRepos.join(", ")}). Add repository topics, clear architecture notes, and runnable code demonstrating ${skill.name}.`
      });
    });

    if (docPct < 70) {
      recs.push({
        priority: "Medium",
        title: "Upgrade repository documentation & topic tags",
        detail: `Your documentation score is ${docPct}/100. Add concise descriptions, 3–5 relevant GitHub topics, and README sections covering architecture, setup, and screenshots.`
      });
    }

    if (activityPct < 60) {
      recs.push({
        priority: "Low",
        title: "Refresh portfolio activity on top relevant repos",
        detail: `Your activity score is ${activityPct}/100. Ship a small update, add automated tests, or refine documentation on your most relevant repositories.`
      });
    }

    if (recs.length === 0) {
      recs.push({
        priority: "Low",
        title: "Pin your highest-relevance repositories",
        detail: "Your portfolio already shows strong alignment. Pin your top 3 matching repositories on your GitHub profile so recruiters see them within seconds."
      });
    }

    return recs;
  }

  /* =========================================================================
   * 9. OPTIONAL GEMINI BYOK INTEGRATION
   * ========================================================================= */
  async function fetchGeminiInsights(report, apiKey, model) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;

    const compactSummary = {
      overallScore: report.overallScore,
      strongSkills: report.skillEvidence.filter((s) => s.level === "Strong evidence").map((s) => s.name),
      missingSkills: report.skillEvidence.filter((s) => s.level === "No evidence").map((s) => s.name),
      weakSkills: report.skillEvidence.filter((s) => s.level === "Weak evidence").map((s) => s.name),
      topRepos: report.rankedRepos.slice(0, 4).map((r) => ({
        name: r.name,
        language: r.language,
        description: r.description,
        matchedSkills: r.matchedSkills
      }))
    };

    const prompt = `You are a senior technical recruiter and staff engineer. Based ONLY on this deterministic GitHub proof-of-work analysis JSON, return a valid JSON object (no markdown fences) with these exact keys:
{
  "recruiterAssessment": "2-3 sentence candid recruiter assessment",
  "technicalGapExplanation": "2-3 sentences explaining the biggest skill gaps",
  "suggestedProjectIdeas": ["idea 1", "idea 2"],
  "resumeBulletImprovements": ["evidence-based bullet 1", "evidence-based bullet 2"],
  "portfolioSuggestions": ["actionable suggestion 1", "actionable suggestion 2"]
}
Never fabricate skills that are not in the data. Analysis data:
${JSON.stringify(compactSummary)}`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.3,
          responseMimeType: "application/json"
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Gemini API returned status ${response.status}. Deterministic results preserved.`);
    }

    const data = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) {
      throw new Error("Gemini returned an empty response.");
    }

    const cleaned = rawText.replace(/^```json\s*/i, "").replace(/```$/i, "").trim();
    return JSON.parse(cleaned);
  }

  /* =========================================================================
   * 10. DASHBOARD RENDERING
   * ========================================================================= */
  function renderDashboard(report, warnings = [], aiData = null) {
    dom.dashboardEmpty.classList.add("hidden");
    dom.dashboardLoading.classList.add("hidden");
    dom.dashboardResults.classList.remove("hidden");

    dom.demoModeBadge.classList.toggle("hidden", !state.isDemoMode);
    dom.aiEnhancedBadge.classList.toggle("hidden", !aiData);
    dom.reportSubtitle.textContent = `Analyzed ${report.rankedRepos.length} repositories against ${report.jdParsed.skills.length} extracted job requirements.`;

    if (warnings.length > 0) {
      dom.apiWarningBanner.textContent = warnings.join(" ");
      dom.apiWarningBanner.classList.remove("hidden");
    } else {
      dom.apiWarningBanner.classList.add("hidden");
    }

    const score = report.overallScore;
    const circumference = 364.42;
    const offset = circumference - (score / 100) * circumference;
    dom.overallScoreValue.textContent = String(score);

    let verdict = "Needs Stronger Proof";
    let verdictClass = "ev-none";
    let strokeColor = "#ef4444";
    let verdictDesc = "Significant gaps between job requirements and verifiable GitHub evidence.";

    if (score >= 78) {
      verdict = "Strong Proof-of-Work";
      verdictClass = "ev-strong";
      strokeColor = "#22c55e";
      verdictDesc = "Portfolio provides solid, verifiable alignment across core role requirements.";
    } else if (score >= 55) {
      verdict = "Moderate Proof-of-Work";
      verdictClass = "ev-moderate";
      strokeColor = "#38bdf8";
      verdictDesc = "Good foundation with several demonstrated skills, plus clear opportunities to close gaps.";
    } else if (score >= 35) {
      verdict = "Partial Evidence";
      verdictClass = "ev-weak";
      strokeColor = "#f59e0b";
      verdictDesc = "Some relevant signals exist, but key job requirements lack direct code evidence.";
    }

    dom.overallVerdictBadge.className = `verdict-badge ${verdictClass}`;
    dom.overallVerdictBadge.textContent = verdict;
    dom.overallVerdictDesc.textContent = verdictDesc;
    dom.scoreRingProgress.style.stroke = strokeColor;

    requestAnimationFrame(() => {
      dom.scoreRingProgress.style.strokeDashoffset = String(offset);
    });

    dom.dimensionBars.innerHTML = "";
    report.dimensions.forEach((dim) => {
      const wrap = el("div", "dim-row");
      const top = el("div", "dim-row-top");
      top.appendChild(el("span", "dim-name", `${dim.name} (${dim.weight}%)`));
      top.appendChild(el("span", "dim-score", `${dim.score}/100`));

      const track = el("div", "bar-track");
      const fill = el("div", "bar-fill");
      track.appendChild(fill);

      wrap.appendChild(top);
      wrap.appendChild(track);
      wrap.appendChild(el("div", "dim-reason", dim.reason));
      dom.dimensionBars.appendChild(wrap);

      requestAnimationFrame(() => {
        fill.style.width = `${dim.score}%`;
      });
    });

    const strongCount = report.skillEvidence.filter((s) => s.level === "Strong evidence").length;
    const moderateCount = report.skillEvidence.filter((s) => s.level === "Moderate evidence").length;
    const missingCount = report.skillEvidence.filter((s) => s.level === "No evidence").length;
    const claimedUnverified = report.skillEvidence.filter((s) => s.isClaimed && s.level === "No evidence").length;

    dom.kpiGrid.innerHTML = "";
    const kpis = [
      { label: "Demonstrated Skills", value: `${strongCount}/${report.skillEvidence.length}`, sub: "Strong code/repo signals" },
      { label: "Inferred Signals", value: String(moderateCount), sub: "Topics or descriptions" },
      { label: "Unverified Gaps", value: String(missingCount), sub: `${claimedUnverified} claimed on resume` },
      { label: "Repos Analyzed", value: String(report.rankedRepos.length), sub: "Public + manual entries" }
    ];
    kpis.forEach((k) => {
      const card = el("div", "kpi-card");
      card.appendChild(el("div", "kpi-label", k.label));
      card.appendChild(el("div", "kpi-value", k.value));
      card.appendChild(el("div", "kpi-sub", k.sub));
      dom.kpiGrid.appendChild(card);
    });

    dom.skillMatrixList.innerHTML = "";
    report.skillEvidence.forEach((skill) => {
      const row = el("div", "skill-row");
      const head = el("div", "skill-row-head");
      head.appendChild(el("span", "skill-title", skill.name));

      const badges = el("div", "skill-badges");
      const badgeClass =
        skill.level === "Strong evidence" ? "ev-strong" :
        skill.level === "Moderate evidence" ? "ev-moderate" :
        skill.level === "Weak evidence" ? "ev-weak" : "ev-none";
      badges.appendChild(el("span", `ev-badge ${badgeClass}`, skill.level));
      if (skill.isClaimed) {
        badges.appendChild(el("span", "ev-badge ev-claimed", "Claimed"));
      }

      head.appendChild(badges);
      row.appendChild(head);
      row.appendChild(el("div", "skill-signals", `${skill.classification} · Signals: ${skill.signals.join(", ")}`));
      dom.skillMatrixList.appendChild(row);
    });

    const strongItems = report.skillEvidence.filter((s) => s.level === "Strong evidence" || s.level === "Moderate evidence");
    const missingItems = report.skillEvidence.filter((s) => s.level === "No evidence" || s.level === "Weak evidence");

    dom.strongCountPill.textContent = String(strongItems.length);
    dom.missingCountPill.textContent = String(missingItems.length);

    dom.strongSkillsList.innerHTML = "";
    if (strongItems.length === 0) {
      dom.strongSkillsList.appendChild(el("p", "empty-inline", "No strong or moderate skill matches detected yet."));
    } else {
      strongItems.forEach((s) => {
        const item = el("div", "evidence-item");
        const head = el("div", "evidence-item-head");
        head.appendChild(el("strong", "", s.name));
        head.appendChild(el("span", `ev-badge ${s.level === "Strong evidence" ? "ev-strong" : "ev-moderate"}`, s.level));
        item.appendChild(head);
        item.appendChild(el("p", "", `Supported by: ${s.supportingRepos.join(", ")} (${s.signals.join(", ")})`));
        dom.strongSkillsList.appendChild(item);
      });
    }

    dom.missingSkillsList.innerHTML = "";
    if (missingItems.length === 0) {
      dom.missingSkillsList.appendChild(el("p", "empty-inline", "All extracted job requirements have moderate or strong evidence."));
    } else {
      missingItems.forEach((s) => {
        const item = el("div", "evidence-item");
        const head = el("div", "evidence-item-head");
        head.appendChild(el("strong", "", s.name));
        head.appendChild(el("span", `ev-badge ${s.level === "Weak evidence" ? "ev-weak" : "ev-none"}`, s.level));
        item.appendChild(head);
        item.appendChild(el("p", "", s.level === "Weak evidence"
          ? `Only mentioned in README (${s.supportingRepos.join(", ")}). Needs stronger code/topic proof.`
          : s.isClaimed
            ? "Claimed on resume, but not verified in analyzed GitHub repositories."
            : "Required by job description with no GitHub evidence found."));
        dom.missingSkillsList.appendChild(item);
      });
    }

    dom.repoCountPill.textContent = `${report.rankedRepos.length} repos`;
    dom.repoCardsGrid.innerHTML = "";
    report.rankedRepos.forEach((repo) => {
      const card = el("article", "repo-card");
      const head = el("div", "repo-head");

      if (repo.html_url && /^https?:\/\//i.test(repo.html_url)) {
        const link = el("a", "repo-name", repo.name);
        link.href = repo.html_url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        head.appendChild(link);
      } else {
        head.appendChild(el("span", "repo-name", repo.name));
      }

      head.appendChild(el("span", "pill pill-accent", `${repo.matchedSkills.length} matches`));
      card.appendChild(head);
      card.appendChild(el("p", "repo-desc", repo.description || "No repository description provided."));

      const stats = el("div", "repo-stats");
      stats.appendChild(el("span", "", `Lang: ${repo.language || "N/A"}`));
      stats.appendChild(el("span", "", `★ ${repo.stargazers_count || 0}`));
      stats.appendChild(el("span", "", `Forks: ${repo.forks_count || 0}`));
      stats.appendChild(el("span", "", formatRelativeDate(repo.updated_at)));
      stats.appendChild(el("span", "", `Docs: ${repo.docScore}/100`));
      card.appendChild(stats);

      if (repo.matchedSkills.length > 0) {
        const chips = el("div", "chip-list");
        repo.matchedSkills.forEach((m) => chips.appendChild(el("span", "chip", m)));
        card.appendChild(chips);
      }

      dom.repoCardsGrid.appendChild(card);
    });

    dom.recommendationsList.innerHTML = "";
    report.recommendations.forEach((rec) => {
      const item = el("div", "rec-item");
      const prioClass = rec.priority === "High" ? "rec-high" : rec.priority === "Medium" ? "rec-med" : "rec-low";
      item.appendChild(el("span", `rec-priority ${prioClass}`, rec.priority));
      const body = el("div", "rec-body");
      body.appendChild(el("h4", "", rec.title));
      body.appendChild(el("p", "", rec.detail));
      item.appendChild(body);
      dom.recommendationsList.appendChild(item);
    });

    if (aiData) {
      dom.aiResultsCard.classList.remove("hidden");
      dom.aiResultsContent.innerHTML = "";

      const addTextBlock = (title, text) => {
        const b = el("div", "ai-block");
        b.appendChild(el("h4", "", title));
        b.appendChild(el("p", "", text || "No commentary returned."));
        dom.aiResultsContent.appendChild(b);
      };

      const addListBlock = (title, items) => {
        const b = el("div", "ai-block");
        b.appendChild(el("h4", "", title));
        const ul = el("ul");
        (Array.isArray(items) ? items : []).forEach((it) => ul.appendChild(el("li", "", it)));
        b.appendChild(ul);
        dom.aiResultsContent.appendChild(b);
      };

      addTextBlock("Recruiter Assessment", aiData.recruiterAssessment);
      addTextBlock("Technical Gap Explanation", aiData.technicalGapExplanation);
      addListBlock("Suggested Project Ideas", aiData.suggestedProjectIdeas);
      addListBlock("Evidence-Based Resume Bullets", aiData.resumeBulletImprovements);
    } else {
      dom.aiResultsCard.classList.add("hidden");
    }
  }

  /* =========================================================================
   * 11. MAIN ANALYSIS ORCHESTRATION
   * ========================================================================= */
  async function runAnalysis({ useDemoSample = null } = {}) {
    if (state.isAnalyzing) return;

    setFormError("");
    const jdText = dom.jdInput.value.trim();
    if (jdText.length < 20) {
      setFormError("Please paste a job description (at least 20 characters) before running analysis.");
      return;
    }

    const jdParsed = parseJobDescription(jdText);
    if (jdParsed.skills.length === 0) {
      setFormError("No recognized technical skills were found in the job description. Include specific languages, frameworks, or tools.");
      return;
    }

    const username = dom.usernameInput.value.trim();
    const repoUrlSpecs = parseRepoUrls(dom.repoUrlsInput.value);
    const isDemo = Boolean(useDemoSample || state.demoReposOverride);

    if (!isDemo && !username && repoUrlSpecs.length === 0 && state.manualRepos.length === 0) {
      setFormError("Enter a GitHub username, at least one repository URL, add a manual repository, or click a Demo button.");
      return;
    }

    const runId = ++state.activeRunId;
    state.isAnalyzing = true;
    state.isDemoMode = isDemo;

    dom.analyzeBtn.disabled = true;
    dom.analyzeBtn.querySelector(".spinner").classList.remove("hidden");
    dom.dashboardEmpty.classList.add("hidden");
    dom.dashboardResults.classList.add("hidden");
    dom.dashboardLoading.classList.remove("hidden");
    dom.dashboardSection.scrollIntoView({ behavior: "smooth", block: "start" });

    try {
      let repos = [];
      let warnings = [];

      if (isDemo) {
        dom.loadingTitle.textContent = "Running offline demonstration analysis…";
        dom.loadingSub.textContent = "Scoring realistic sample repositories against extracted job requirements.";
        const demoSource = useDemoSample ? DEMO_SAMPLES[useDemoSample].repos : state.demoReposOverride;
        repos = [...demoSource, ...state.manualRepos];
      } else {
        if (username || repoUrlSpecs.length > 0) {
          const fetched = await fetchGitHubPortfolio(username, repoUrlSpecs);
          repos = [...fetched.repos, ...state.manualRepos];
          warnings = fetched.warnings;
        } else {
          repos = [...state.manualRepos];
        }
      }

      if (runId !== state.activeRunId) return;

      if (repos.length === 0) {
        throw new Error("No public repositories found to analyze. Try another username or use Manual Repo Entry.");
      }

      const claimedSkills = parseClaimedSkills(dom.resumeText.value);
      const report = evaluatePortfolio(jdParsed, repos, claimedSkills);
      state.lastReport = report;

      let aiData = null;
      if (dom.byokToggle.checked) {
        const key = dom.byokKey.value.trim();
        if (!key) {
          warnings.push("AI mode is enabled but no Gemini API key was entered. Showing deterministic results.");
        } else {
          dom.loadingTitle.textContent = "Generating optional Gemini insights…";
          dom.loadingSub.textContent = "Deterministic scores are locked; requesting advisory commentary.";
          try {
            aiData = await fetchGeminiInsights(report, key, dom.byokModel.value);
          } catch (aiErr) {
            warnings.push(aiErr.message || "Gemini request failed. Deterministic results preserved.");
          }
        }
      }

      if (runId !== state.activeRunId) return;

      renderDashboard(report, warnings, aiData);
      showToast(isDemo ? "Demo analysis complete." : "Proof-of-work analysis complete.", "success");
    } catch (err) {
      if (runId !== state.activeRunId) return;
      dom.dashboardLoading.classList.add("hidden");
      dom.dashboardEmpty.classList.remove("hidden");
      setFormError(err.message || "Analysis failed. You can use Manual Repo Entry or Demo Mode.");
      showToast("Analysis failed — see error details.", "error");
    } finally {
      if (runId === state.activeRunId) {
        state.isAnalyzing = false;
        dom.analyzeBtn.disabled = false;
        dom.analyzeBtn.querySelector(".spinner").classList.add("hidden");
      }
    }
  }

  /* =========================================================================
   * 12. EXPORT & REPORT FORMATTING
   * ========================================================================= */
  function buildPlainTextReport(report) {
    const lines = [
      "PROOFMATCH — PROOF-OF-WORK ANALYSIS REPORT",
      "==========================================",
      `Generated: ${new Date(report.generatedAt).toLocaleString()}`,
      `Mode: ${state.isDemoMode ? "DEMO DATA" : "Live Analysis"}`,
      `Overall Score: ${report.overallScore}/100`,
      "",
      "SCORE BREAKDOWN:",
      ...report.dimensions.map((d) => `- ${d.name} (${d.weight}%): ${d.score}/100 — ${d.reason}`),
      "",
      "SKILL EVIDENCE:",
      ...report.skillEvidence.map((s) => `- ${s.name}: ${s.level} (${s.classification}) | ${s.signals.join(", ")}`),
      "",
      "ACTIONABLE RECOMMENDATIONS:",
      ...report.recommendations.map((r) => `- [${r.priority}] ${r.title}: ${r.detail}`),
      "",
      "Disclaimer: Repository metadata and README mentions provide structured signals, not definitive proof of coding proficiency."
    ];
    return lines.join("\n");
  }

  function downloadFile(filename, content, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  /* =========================================================================
   * 13. EVENT LISTENERS & INITIALIZATION
   * ========================================================================= */
  function syncManualReposBanner() {
    const count = state.manualRepos.length;
    dom.manualReposCount.textContent = `${count} manual repositor${count === 1 ? "y" : "ies"}`;
    dom.manualReposBanner.classList.toggle("hidden", count === 0);
  }

  function syncByokUi() {
    const enabled = dom.byokToggle.checked;
    dom.byokPanel.classList.toggle("hidden", !enabled);
    dom.navAiLabel.textContent = enabled ? "AI: BYOK On" : "AI: Off";
    dom.navAiPill.classList.toggle("status-pill--active", enabled);
    dom.navAiPill.classList.toggle("status-pill--muted", !enabled);
  }

  function loadDemoSample(sampleKey) {
    const sample = DEMO_SAMPLES[sampleKey];
    if (!sample) return;
    dom.jdInput.value = sample.jd;
    dom.usernameInput.value = sample.username;
    dom.repoUrlsInput.value = "";
    dom.resumeText.value = sample.resume;
    state.demoReposOverride = sample.repos;
    updateJdPreview();
    runAnalysis({ useDemoSample: sampleKey });
  }

  [dom.usernameInput, dom.repoUrlsInput].forEach((input) => {
    input.addEventListener("input", () => {
      state.demoReposOverride = null;
    });
  });

  dom.jdInput.addEventListener("input", updateJdPreview);
  dom.byokToggle.addEventListener("change", syncByokUi);

  dom.form.addEventListener("submit", (e) => {
    e.preventDefault();
    runAnalysis();
  });

  document.querySelectorAll("[data-sample]").forEach((btn) => {
    btn.addEventListener("click", () => loadDemoSample(btn.getAttribute("data-sample")));
  });

  dom.heroDemoBtn.addEventListener("click", () => loadDemoSample("fullstack"));

  dom.resumeFile.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      dom.resumeText.value = String(reader.result || "").slice(0, 15000);
      showToast(`Loaded ${file.name}`, "success");
    };
    reader.onerror = () => showToast("Could not read file.", "error");
    reader.readAsText(file);
  });

  dom.openManualRepoBtn.addEventListener("click", () => {
    dom.manualRepoModal.classList.remove("hidden");
  });

  dom.openMethodologyBtn.addEventListener("click", () => {
    dom.methodologyModal.classList.remove("hidden");
  });

  document.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-close-modal");
      document.getElementById(id)?.classList.add("hidden");
    });
  });

  dom.manualRepoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("m-repo-name").value.trim();
    const language = document.getElementById("m-repo-lang").value.trim();
    const topicsRaw = document.getElementById("m-repo-topics").value.trim();
    const description = document.getElementById("m-repo-desc").value.trim();
    const readme = document.getElementById("m-repo-readme").value.trim();

    if (!name || !language) return;

    state.manualRepos.push({
      name,
      html_url: "",
      language,
      topics: topicsRaw ? topicsRaw.split(",").map((t) => t.trim()).filter(Boolean) : [],
      description,
      readme,
      stargazers_count: 0,
      forks_count: 0,
      updated_at: new Date().toISOString()
    });

    syncManualReposBanner();
    dom.manualRepoForm.reset();
    dom.manualRepoModal.classList.add("hidden");
    showToast(`Added manual repository "${name}".`, "success");
  });

  dom.clearManualReposBtn.addEventListener("click", () => {
    state.manualRepos = [];
    syncManualReposBanner();
    showToast("Cleared manual repositories.");
  });

  dom.resetAllBtn.addEventListener("click", () => {
    state.activeRunId++;
    state.isAnalyzing = false;
    state.manualRepos = [];
    state.lastReport = null;
    state.isDemoMode = false;
    state.demoReposOverride = null;

    dom.form.reset();
    syncManualReposBanner();
    updateJdPreview();
    setFormError("");
    dom.dashboardResults.classList.add("hidden");
    dom.dashboardLoading.classList.add("hidden");
    dom.dashboardEmpty.classList.remove("hidden");
    showToast("Workspace reset.");
  });

  dom.copyReportBtn.addEventListener("click", async () => {
    if (!state.lastReport) return;
    try {
      await navigator.clipboard.writeText(buildPlainTextReport(state.lastReport));
      showToast("Report copied to clipboard.", "success");
    } catch {
      showToast("Clipboard access blocked by browser.", "error");
    }
  });

  dom.exportTxtBtn.addEventListener("click", () => {
    if (!state.lastReport) return;
    downloadFile("proofmatch-report.txt", buildPlainTextReport(state.lastReport), "text/plain;charset=utf-8");
    showToast("Downloaded proofmatch-report.txt", "success");
  });

  dom.exportJsonBtn.addEventListener("click", () => {
    if (!state.lastReport) return;
    downloadFile("proofmatch-report.json", JSON.stringify(state.lastReport, null, 2), "application/json;charset=utf-8");
    showToast("Downloaded proofmatch-report.json", "success");
  });

  syncByokUi();
  updateJdPreview();
})();
