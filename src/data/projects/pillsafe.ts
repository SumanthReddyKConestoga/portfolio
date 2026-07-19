import type { Project } from "@/types/portfolio";

export const pillsafe: Project = {
  slug: "pillsafe",
  title: "PillSafe",
  subtitle: "AI-powered medication safety for patients who deserve to understand their prescriptions",
  plainEnglish:
    "An app that reads medicine labels aloud and explains them in simple words — in four languages — so elderly and low-vision patients never mix up their pills.",
  description:
    "A multimodal medication analysis platform that helps elderly, low-literacy, and visually impaired patients safely identify medications and understand prescription labels — camera-based scanning, OCR, plain-language guidance, multilingual voice reminders, and automatic dose notifications.",
  challenge:
    "Medication errors start with misread labels and missed doses. Existing apps assume English fluency, good eyesight, and comfort with technology — exactly what the most at-risk patients lack.",
  solution:
    "A React SPA over an async FastAPI backend: PaddleOCR reads prescription labels, a parser turns 'three times daily with meals' into structured schedules, OpenCV analyzes pill photos against a DIN lookup, and a privacy-preserving Claude layer explains results in plain language — spoken aloud in English, French, Arabic, or Spanish.",
  architecture: [
    "React 18 SPA (Vite + Tailwind)",
    "Async FastAPI backend (Python 3.11)",
    "JWT auth with RBAC (admins blocked from patient data)",
    "PaddleOCR label reading + prescription parser",
    "OpenCV pill detection + DIN lookup",
    "Privacy-preserving Claude guidance layer",
    "Multilingual reminders and instructions (en/fr/ar/es)",
    "Web Speech + Notification APIs for voice and dose alerts",
    "SQLite + SQLAlchemy 2.x async ORM",
    "GitHub Actions CI · Render + Vercel deploy",
  ],
  technologies: [
    "React",
    "TypeScript",
    "Vite",
    "Zustand",
    "FastAPI",
    "Python",
    "SQLAlchemy",
    "PaddleOCR",
    "OpenCV",
    "Claude API",
    "JWT",
    "GitHub Actions",
  ],
  contribution:
    "Team lead of the five-person Team Apex capstone (Conestoga AIML-6900) — led the Health Canada DIN-grounded RAG pipeline, model training, and the complete backend design and workflow, working alongside Ali Cihan Ozdemir, Muthuraj Jayakumar, Lohith Reddy Danda, and Abdallah Mohamed.",
  metrics: [
    {
      label: "Automated backend tests passing in CI",
      value: "40",
      status: "verified",
    },
    {
      label: "Languages for spoken reminders and instructions",
      value: "4",
      status: "verified",
    },
  ],
  images: [
    {
      src: "/images/projects/pillsafe-title.jpg",
      alt: "PillSafe — multi-modal medication safety and verification auditor overview",
      caption: "PillSafe — multimodal medication safety for elderly, low-vision, and multilingual patients",
      width: 1280,
      height: 720,
    },
    {
      src: "/images/projects/pillsafe-building.jpg",
      alt: "PillSafe core functions: prescription scan, pill identification, reminders and voice guidance",
      caption: "Three core functions: prescription scanning, pill identification, and voice-guided reminders",
      width: 1280,
      height: 720,
    },
    {
      src: "/images/projects/pillsafe-problem.jpg",
      alt: "The problem PillSafe solves: medication errors, low adherence, and access barriers",
      caption: "The problem: 100,000+ annual deaths from medication errors across three vulnerable populations",
      width: 1280,
      height: 720,
    },
    {
      src: "/images/projects/pillsafe-architecture.jpg",
      alt: "PillSafe complete three-tier system architecture diagram",
      caption: "Complete system architecture: React frontend, FastAPI backend, and the Health Canada RAG layer",
      width: 1491,
      height: 1055,
    },
  ],
  githubUrl: "https://github.com/SumanthReddyKConestoga/PillSafe",
  featured: true,
  caseStudy: {
    summary:
      "A medication-safety companion that reads labels and pills so patients do not have to guess — built with accessibility, multilingual support, and privacy as first-class requirements, not afterthoughts.",
    problem:
      "By the time a patient realizes they misread a label or missed a dose, the harm is done. Elderly, low-vision, and non-English-speaking patients are the most exposed and the least served by existing tools.",
    stakeholders: [
      "Elderly, low-literacy, and visually impaired patients",
      "Caregivers and family members",
      "Admins who manage the platform but must never see patient data",
    ],
    constraints: [
      "Decision support only — never medical advice (enforced with disclaimers and design)",
      "Patient photos and PHI must never leave the machine — the LLM receives only structured attributes",
      "Must run fully without optional heavy dependencies (OCR/CV degrade gracefully)",
      "Usable across languages, vision levels, and tech comfort",
    ],
    decisions: [
      {
        choice: "OpenCV math + DIN lookup instead of custom ML training",
        rationale:
          "No YOLOv8, no scraped datasets — deterministic colour/shape/imprint analysis is explainable, testable, and honest about its limits.",
      },
      {
        choice: "Claude receives structured attributes only, never raw images",
        rationale:
          "AI-written guidance without transmitting photos or PHI — privacy enforced by architecture, not policy.",
      },
      {
        choice: "Template-based multilingual instructions over live translation",
        rationale:
          "Deterministic, reviewable sentences in en/fr/ar/es built from parsed fields — zero external translation dependency.",
      },
      {
        choice: "RBAC where admins are 403-blocked from all patient-data endpoints",
        rationale:
          "Platform operators can manage users and stats but structurally cannot read prescriptions.",
      },
    ],
    implementation:
      "A prescription photo flows through PaddleOCR into a parser that splits multi-drug printouts, extracts dosage, food timing, and purpose, and converts frequency phrases into exact clock times. Pill photos run through OpenCV threshold-contour-HSV analysis plus imprint OCR, matched against a DIN table. The browser handles voice via the Web Speech API and fires dose notifications 30 minutes before and at each dose time.",
    security: [
      "JWT (HS256) with silent refresh, bcrypt cost-12 hashing",
      "Admins receive 403 on every patient-data endpoint via a dedicated dependency",
      "Raw images and PHI never sent to external APIs",
      "Ownership checks on prescription image retrieval",
    ],
    scalability: [
      "Async FastAPI throughout; OCR/CV features are optional installs that gate cleanly",
      "Stateless API tier deployable to Render with static frontend on Vercel",
    ],
    testing: [
      "40 pytest tests: auth, prescriptions CRUD and ownership, admin-block enforcement, multi-medication parsing, pill analysis degradation paths, multilingual templates",
      "CI on every push — backend pytest plus frontend typecheck and build",
    ],
    results:
      "Working platform with CI passing: camera scanning, multi-medication OCR parsing, pill identification, multilingual spoken guidance, and automatic dose reminders — deployed API on Render with static frontend on Vercel.",
    lessons: [
      "Image preprocessing is most of the OCR battle",
      "Privacy enforced by architecture beats privacy enforced by promises",
      "Accessibility constraints improve the design for every user",
    ],
    future: [
      "Seed the DIN table with real Health Canada DPD data",
      "Background push notifications via service worker",
      "Drug-interaction warnings",
    ],
  },
};
