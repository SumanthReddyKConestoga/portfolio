# Sumanth Reddy Konannagari — Portfolio

A premium, interactive full-stack AI engineer portfolio built with **Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion**.

## Features

- Floating navigation with live availability badge, active-section tracking, and mobile menu
- Centered hero with availability badge, CTAs, and technology badges
- Interactive **system architecture diagram** — select any layer to inspect purpose, technologies, data flow, and engineering considerations
- Bento project grid with **full case-study pages** per project (`/projects/[slug]`)
- Capabilities control panel grouped by engineering domain (no arbitrary percentages)
- Experience timeline, education, "currently exploring", and engineering methodology
- Accessible contact form (React Hook Form + Zod) with honeypot spam prevention, wired for Web3Forms with a mailto fallback
- Full SEO: metadata, canonical URLs, sitemap, robots, JSON-LD Person/ProfilePage/Breadcrumb schema, generated Open Graph image (1200×630)
- `prefers-reduced-motion` support, keyboard navigation, WCAG-minded markup

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Replace the content (all in `src/data/`)

| What | Where |
|---|---|
| Name, headline, email, links, availability | `src/data/portfolio.ts` |
| Projects, case studies, metrics | `src/data/projects.ts` |
| Capability groups | `src/data/capabilities.ts` |
| Experience + education (fill `REPLACE_WITH_DATES` / `REPLACE_WITH_INSTITUTION`) | `src/data/experience.ts` |
| Architecture diagram nodes | `src/data/architecture.ts` |

### Metrics integrity

Every project metric has a `status: "verified" | "placeholder" | "target"`.
Non-verified metrics automatically render with a **"Target performance metric"** label.
Change the status to `"verified"` only once you can back the number.

### Resume

Drop your PDF at `public/resume/Sumanth_Reddy_Konannagari_Resume.pdf` (see `public/resume/README.txt`).

### Project links

`githubUrl` / `liveUrl` are optional per project in `src/data/projects.ts` — buttons only render when a URL is present, so nothing ships with dead links. Add them as repos go public.

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used in metadata, sitemap, and JSON-LD |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Web3Forms access key for the contact form (free at web3forms.com). If unset, the form falls back to opening the visitor's email client. |

No secrets live in this project — both variables are public by design.

## Deploy

### Vercel (recommended)

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — Next.js is auto-detected.
3. Add the two environment variables in Project Settings → Environment Variables.
4. Deploy. Set `NEXT_PUBLIC_SITE_URL` to your final domain and redeploy so metadata/sitemap use it.

### Netlify

1. Push to GitHub and import at app.netlify.com.
2. Build command `npm run build` — the Next.js runtime plugin is applied automatically.
3. Add the environment variables and deploy.

### After deploying

- Validate the LinkedIn preview at the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).
- Run Lighthouse (Chrome DevTools) — the site is built to score 90+ across categories.
- Submit `https://your-domain.com/sitemap.xml` in Google Search Console.
