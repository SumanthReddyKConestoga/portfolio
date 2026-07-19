# Portfolio — Ship Readiness Document

**Owner:** Sumanth Reddy Konannagari · ksumanthreddy321@gmail.com
**Status:** ✅ Final check passed — production build verified, all content and assets in place
**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion

---

## 1. What this site is

A single-page portfolio with dedicated case-study pages, positioning Sumanth as a
Full-Stack Software Engineer | AI/ML Engineer | Cloud and MLOps Developer, targeting
recruiters, hiring managers, and engineering leads. Every metric, date, and claim on
the site is either verified against source documents or explicitly labeled as a target.

**Live sections (in order):** Hero → Credibility strip → "How I design AI systems"
(interactive blueprint) → Engineering case studies → Skills & Technologies →
Experience (+ Education / Certifications / Currently exploring / How I engineer) →
Contact → Footer.

---

## 2. Design system

| Element | Value |
|---|---|
| Theme | Deep teal → midnight navy → violet gradient (fixed), inspired reference approved by owner |
| Base background | `#0B1030` with teal/violet radial washes |
| Text | `#F7F8FC` primary · `#C9CDE4` secondary · `#9BA1C4` muted |
| Accent | Fuchsia `#E879F9` (hover `#F0ABFC`) |
| Primary buttons | White pill, dark navy text, soft fuchsia glow |
| Cards | Translucent glass (`white/5` fills, hairline `white/14` borders) |
| Headings | Bricolage Grotesque (bold) |
| Body | Inter · Code/labels: JetBrains Mono |
| Nav | Floating glass bar, gradient hairline border, animated active glow, SR monogram |

Accessibility: `prefers-reduced-motion` support, keyboard navigation, focus rings,
ARIA labels throughout, alt text on all images.

---

## 3. Content inventory (all data-driven, in `src/data/`)

### Projects (`src/data/projects/`) — one file each
| Project | Role | Links | Metrics status |
|---|---|---|---|
| PillSafe | Team lead, Team Apex (5) — DIN RAG pipeline, model training, backend design | GitHub | Verified (40 CI tests, 4 languages) |
| PathoIntern | Backend, RAG pipeline, model training (4-person team) | Live: qa.pathointern.ca | Verified |
| SentinelEDU | Team lead, Team Sentinel (3) — architecture, workflows, backend | GitHub | Verified (R² 0.925, 80% acc, 10+ models) |
| Distributed Agentic AI Platform | Concept/reference build | — | Labeled as targets |

Each project: plain-English summary, description, architecture list, tech stack,
team-credited contribution, metrics, image gallery (10 optimized visuals in
`public/images/projects/`), and a full case-study page at `/projects/[slug]`.

### Experience (`src/data/experience.ts`) — verified against EY letters
| Role | Period | Client (anonymized) |
|---|---|---|
| Freelance Full-Stack Developer | Project-based | Private client |
| EY — Associate Consultant | Oct 2023 – Nov 2024 | Fortune 500 global technology client (e-commerce platform) |
| EY — Senior Analyst | Sept 2022 – Sept 2023 | Leading global investment bank |
| EY — Technology Intern | Feb 2022 – July 2022 | Fortune 500 global technology client (e-commerce platform) |
| Wipro Infrastructure Engineering — Intern | Mar 2019 – Jul 2019 | — |

EY dates match the official experience letter (employment 05-Sep-2022 → 29-Nov-2024;
Associate Consultant effective 01-Oct-2023). **Client names never appear anywhere**
(grep-verified). Bullets use honest ranges (e.g., ~15–25 microservices).

### Education & Certifications
- Conestoga College — Applied AI & ML (Jan 2026–present, GPA 3.71) and Cloud
  Development & Operations (Jan 2025–Aug 2025, GPA 3.47)
- SASTRA University — M.Tech Instrumentation & Control (2017–2022)
- Certifications (all with one-click verification links): Azure Fundamentals
  (Microsoft Learn), LFS101 Linux (Credly), EY Applied AI Bronze (Credly),
  EY Cloud (Credly)
- Official logos in `public/images/logos/` with initials-tile fallback if any fail

---

## 4. Assets verified present

- ✅ Resume PDF → `public/resume/Sumanth_Reddy_Konannagari_Resume.pdf` (all Resume buttons)
- ✅ Headshot → `public/images/sumanth.jpg` (optimized 800×800, 67 KB)
- ✅ 10 project visuals → `public/images/projects/` (150–380 KB each)
- ✅ 6 org logos → `public/images/logos/`
- ✅ Favicon (`src/app/icon.svg`) + generated 1200×630 OG image (`opengraph-image.tsx`)

## 5. SEO / sharing

Metadata + canonical URLs, `robots.ts`, `sitemap.xml` (home + 4 case studies),
JSON-LD Person/ProfilePage + Breadcrumb schema, Open Graph + Twitter cards with a
build-generated preview image matching the site theme.

## 6. Build health (last verified)

- `next build`: ✅ compiles, type-checks, 12 static pages
- First Load JS: ~87 kB shared; home ~101 kB routes — well within performance budget
- No placeholders, no `#` dead links, no TODOs, no client names (automated grep)

---

## 7. Housekeeping (optional, cosmetic only)

Safe to delete whenever (inert leftovers a sandbox file-lock prevented me removing):
- `src/components/hero/InteractiveTerminal.tsx`, `src/data/terminalCommands.ts`,
  `src/components/projects/ProjectSpotlight.tsx` (retired stubs)
- `public/images/`: `Picture1–6.png`, the four UUID-named `.png` originals,
  `sumanth.jpg.png`, `EY logo.png`, `conestoga logo.jpg`, `SASTRA logo.jpg`
- `public/images/logos/`: `Microsoft.png`, `linux.png` (superseded by lowercase names)
- `node_modules` folder shipped from an interrupted install — delete before first
  `npm install` if not already done

## 8. Next steps to ship

1. **Deploy to Vercel** — push to GitHub → import at vercel.com/new → set
   `NEXT_PUBLIC_SITE_URL` (and later `NEXT_PUBLIC_WEB3FORMS_KEY`) → deploy.
2. **Contact form** — create a free Web3Forms key and add it in Vercel env vars;
   until then the form falls back to opening the visitor's email client.
3. **Validate the LinkedIn preview** at linkedin.com/post-inspector after deploy.
4. **Run Lighthouse** on the live URL (target 90+ across categories).
5. **Sync the resume PDF** with the site's experience wording so both documents
   tell the identical story under recruiter scrutiny.
6. Optional custom domain → update `NEXT_PUBLIC_SITE_URL` and redeploy.

## 9. Content editing map (for future updates)

| Change | File |
|---|---|
| Name, links, availability, hero text | `src/data/portfolio.ts` |
| Projects & case studies | `src/data/projects/*.ts` |
| Experience / education / certifications | `src/data/experience.ts` |
| Skills groups | `src/data/capabilities.ts` |
| Architecture blueprint layers | `src/data/architecture.ts` |
| Theme colors | `tailwind.config.ts` + `src/app/globals.css` |
