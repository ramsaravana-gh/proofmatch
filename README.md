# ProofMatch — GitHub vs. Job Description Proof-of-Work Matcher

> **Stop claiming skills. Start proving them.**

## Problem Statement
Traditional resume screening relies heavily on self-reported skills, keyword stuffing, and generic bullet points. Candidates frequently list technologies they barely touched, while recruiters struggle to quickly verify whether a candidate's actual GitHub work backs up the requirements of a job posting.

## Solution Overview
**ProofMatch** is a zero-backend, client-side proof-of-work analysis platform that compares a candidate's GitHub portfolio against any job description. It separates **demonstrated code evidence**, **inferred metadata**, **self-reported resume claims**, and **unverified gaps**—producing a transparent, deterministic match score and an actionable improvement plan.

## Key Features
- **Live Job Description Analyzer:** Client-side parser with a weighted skill taxonomy and alias normalization (e.g., `Postgres → PostgreSQL`, `JS → JavaScript`, `K8s → Kubernetes`), plus experience and education extraction.
- **Direct GitHub REST API Integration:** Analyzes public repositories by GitHub username or specific repository URLs, inspecting primary languages, topics, descriptions, stars, forks, update recency, and README contents.
- **Deterministic 5-Factor Scoring Engine:** Transparent 0–100 scoring with no double-counting and clear evidence confidence tiers (`Strong`, `Moderate`, `Weak`, `No evidence`).
- **Offline Hackathon Demo Mode:** Three one-click realistic sample portfolios (Full-Stack Developer, Machine Learning Engineer, Cloud/DevOps Engineer) that run the real scoring engine completely offline with a visible `DEMO DATA` badge.
- **Manual Repository Fallback:** Add manual repository entries if GitHub rate limits are reached or to test private/local projects.
- **Optional AI Intelligence (BYOK):** Bring Your Own Gemini API Key for recruiter assessments, gap explanations, project ideas, and evidence-based resume bullets.
- **Export & Sharing:** Copy plain-text reports to clipboard or download `.txt` and `.json` reports.

## Technology Stack
- **HTML5** (Semantic, accessible markup)
- **CSS3** (Modern dark-mode SaaS design, responsive grid, reduced-motion support)
- **Vanilla JavaScript (ES6+)** (Modular IIFE architecture, Fetch API, `Promise.allSettled`, safe DOM construction)
- **Zero Frameworks / Zero Build Tools / Zero Backend**

## Architecture Overview
```text
/proofmatch
  ├── index.html   # Semantic layout, workspace, results dashboard, modals
  ├── style.css    # Dark-mode design system, responsive layout, animations
  ├── app.js       # Skill taxonomy, JD parser, GitHub client, scoring engine, BYOK Gemini client
  └── README.md    # Documentation and deployment instructions
```

## Scoring Methodology
ProofMatch calculates a deterministic 0–100 score across five weighted dimensions:
1. **Technical Skill Coverage (35%):** Share of job-required skills backed by repository evidence.
2. **Project Evidence Quality (25%):** Depth of proof (primary language + topics + multi-repo support outrank isolated README mentions).
3. **Repository Relevance (20%):** Proportion of analyzed repositories aligned with the target role.
4. **Activity & Maintenance (10%):** Recency of repository updates.
5. **Documentation Quality (10%):** Descriptions, topic tags, and substantive README content.

> **Important Note:** GitHub repository metadata, topics, and README mentions provide structured evidence signals—they do **not** establish definitive proof of production coding proficiency.

## GitHub API Integration
- Uses official unauthenticated GitHub REST API endpoints (`api.github.com/users/{user}/repos` and `api.github.com/repos/{owner}/{repo}/readme`).
- Handles 404s, 403 rate limits (60 requests/hour unauthenticated), missing READMEs, and network failures gracefully without fabricating data.

## Gemini BYOK Integration
1. Toggle **AI Intelligence — Bring Your Own Key** in the right-hand workspace panel.
2. Select a Gemini model (e.g., `gemini-2.5-flash`) and paste your Gemini API key.
3. Run the analysis. If the Gemini call fails, deterministic scores are automatically preserved.

## Privacy & Security Considerations
- All deterministic parsing and scoring runs 100% locally in your browser.
- Optional Gemini API keys are stored **only in browser memory**, never logged, and never committed.
- **Disclosure:** Browser-based BYOK exposes entered keys to the browser environment; do not use sensitive production credentials.
- Untrusted GitHub descriptions and README text are rendered using safe DOM APIs (`textContent`) to prevent XSS injection.

## Local Setup
No installation or build step is required:
1. Clone or download the repository.
2. Open `index.html` directly in any modern browser (or run a simple static server such as `python3 -m http.server 8000`).

## Deployment Instructions
Deploy the root directory directly with **no build command**:

- **GitHub Pages:** Push the four files to a public repository → go to **Settings → Pages** → select the `main` branch and `/ (root)` folder → Save.
- **Netlify:** Drag and drop the `/proofmatch` folder into Netlify Drop, or connect the GitHub repo with an empty build command and publish directory `.`.
- **Vercel:** Import the GitHub repository in Vercel, select **Other** as framework preset, leave build command empty, and deploy.

## Known Limitations
- Unauthenticated GitHub API requests are limited to 60 requests per hour per IP.
- Private repositories cannot be fetched via public unauthenticated endpoints (use Manual Repo Entry instead).
- Resume file upload supports `.txt` and `.md` directly; PDF resumes should be copied and pasted into the text area.

## Future Roadmap
- Optional GitHub OAuth / PAT support for higher rate limits and commit-level diff analysis.
- Language byte-percentage analysis via GitHub's `/languages` endpoint.
- Side-by-side multi-candidate comparison mode for hiring teams.
