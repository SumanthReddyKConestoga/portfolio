import type { Project } from "@/types/portfolio";

export const sentineledu: Project = {
  slug: "sentineledu",
  title: "SentinelEDU",
  subtitle: "Real-time student performance monitoring and early intervention",
  plainEnglish:
    "A system that spots struggling students weeks before they fail, and tells academic advisors exactly who needs help and what kind of help to offer.",
  description:
    "An end-to-end early-warning platform that predicts academic risk before it becomes failure — 10+ ML/DL models, live event streaming, a YAML-configurable alert engine, severity-weighted intervention recommendations, and a RAG-powered AI advisor, all surfaced in a multi-page dashboard.",
  challenge:
    "By the time a failing grade hits a report card it is too late. Advisors track hundreds of students on gut instinct while three-week quiz declines and dropping LMS logins go unnoticed until they compound.",
  solution:
    "A DVC-orchestrated pipeline trains Ridge regression (grade prediction), an MLP (risk classification), a 1D-CNN (temporal decline detection over 8-week sequences), and K-Means segmentation. A producer/consumer streaming layer runs live inference, fires YAML-defined alerts with cooldowns, generates fatigue-aware recommendations, and a FAISS + Claude RAG advisor gives grounded intervention advice.",
  architecture: [
    "DVC pipeline: load → preprocess → train classical → train deep → evaluate",
    "Ridge regression grade prediction",
    "3-layer MLP risk classifier (Low/Medium/High/Critical)",
    "1D-CNN over 8-week behavioral sequences",
    "K-Means behavioral segmentation (4 groups)",
    "Producer/consumer streaming with in-memory feature store",
    "YAML alert engine — threshold, slope, and compound rules",
    "Severity-weighted recommendations with 14-day fatigue prevention",
    "RAG advisor: FAISS + MiniLM embeddings + Claude",
    "FastAPI backend (20+ endpoints) + Streamlit dashboard",
    "SQLite + SQLAlchemy (5 relational tables)",
  ],
  technologies: [
    "Python",
    "scikit-learn",
    "TensorFlow",
    "FastAPI",
    "Streamlit",
    "DVC",
    "FAISS",
    "sentence-transformers",
    "Claude API",
    "SQLAlchemy",
    "Plotly",
  ],
  contribution:
    "Team lead of the three-person Team Sentinel (with Param and Viraj) — designed the system architecture and end-to-end workflows, and built the backend: FastAPI services, the streaming and alerting engine, and the model-serving layer.",
  metrics: [
    {
      label: "Grade-prediction R² (Ridge, UCI test split)",
      value: "0.925",
      status: "verified",
    },
    {
      label: "Risk-classification accuracy (MLP)",
      value: "80%",
      status: "verified",
    },
    {
      label: "Trained and compared models",
      value: "10+",
      status: "verified",
    },
  ],
  images: [
    {
      src: "/images/projects/sentineledu-poster.jpg",
      alt: "SentinelEDU — predict early, intervene smartly, empower success",
      caption: "Predict · Alert · Advise · Intervene · Empower — the five-stage intervention loop",
      width: 1260,
      height: 704,
    },
    {
      src: "/images/projects/sentineledu-architecture.jpg",
      alt: "SentinelEDU architecture: DVC ML pipeline, models, RAG pipeline, FastAPI backend, Streamlit dashboard",
      caption: "Seven-layer architecture from data ingestion through models, RAG advisor, API, and dashboard",
      width: 1253,
      height: 684,
    },
    {
      src: "/images/projects/sentineledu-conclusion.jpg",
      alt: "SentinelEDU achievements summary",
      caption: "An end-to-end early-warning system bridging the gap between data and action",
      width: 1158,
      height: 616,
    },
  ],
  githubUrl: "https://github.com/SumanthReddyKConestoga/FinalProject_SentinelEDU",
  featured: true,
  caseStudy: {
    summary:
      "A production-style early-warning system that fuses classical ML, deep learning, temporal pattern detection, streaming, and RAG into one coherent platform — every model choice justified and every metric reproducible via DVC.",
    problem:
      "Advisors can't watch every student's trajectory simultaneously. Two students with identical 75% average attendance look the same in a spreadsheet — but steady-75% and 90%→60%→50% are completely different situations, and only the second needs urgent help.",
    stakeholders: [
      "Academic advisors triaging hundreds of students",
      "Students whose decline patterns get caught weeks earlier",
      "Institutions measuring intervention effectiveness",
    ],
    constraints: [
      "Only 649 UCI records — model complexity had to match data scale",
      "Every metric reproducible: DVC re-runs stages when params change",
      "Alert rules editable by administrators without touching Python",
      "AI advisor must work without an API key (template fallback)",
    ],
    decisions: [
      {
        choice: "Ridge regression over a neural network for grade prediction",
        rationale:
          "With 649 samples a neural net overfits; Ridge handles the G1/G2 collinearity, trains in milliseconds, and stays interpretable — R² ≈ 0.925.",
      },
      {
        choice: "A 1D-CNN specifically for temporal decline",
        rationale:
          "The MLP sees averages; the CNN sees trends. Three consecutive high-risk CNN weeks fire the platform's only critical-severity alert.",
      },
      {
        choice: "threading.Queue over Kafka for streaming",
        rationale:
          "Zero-config and sufficient at demo scale — and deliberately decoupled so swapping in a Kafka consumer is a ~20-line change.",
      },
      {
        choice: "Local FAISS + sentence-transformers over cloud vector services",
        rationale:
          "No external dependency, no per-query cost — with Claude generating advice grounded in 15 curated intervention documents.",
      },
    ],
    implementation:
      "Streaming events update per-student rolling 8-week windows in an in-memory feature store. Each event triggers inference across all four production models; results persist to SQLite and flow through the alert engine, whose YAML rules support threshold, slope, and compound conditions with per-rule cooldowns. Fired alerts generate severity-weighted recommendations, skipping any action already suggested within 14 days.",
    security: [
      "API key isolation via .env (never committed)",
      "Alert thresholds and actions in reviewable YAML config",
      "Honest disclosure: behavioral stream is synthesized, documented transparently",
    ],
    scalability: [
      "SQLite + threading serves thousands of students; the swap path to PostgreSQL + Kafka is documented",
      "Models retrain reproducibly through the 5-stage DVC pipeline",
    ],
    testing: [
      "5-fold stratified cross-validation on every classical model",
      "Full evaluation reports: confusion matrices, loss curves, residuals, silhouette analysis",
      "Model comparison across 10+ candidates before production selection",
    ],
    results:
      "Ridge achieves RMSE ≈ 0.835 and R² ≈ 0.925 on grade prediction; the MLP reaches 80% accuracy (macro-F1 ≈ 0.80) on four-class risk; the CNN detects sustained decline patterns that averages hide. Full pipeline reproducible from clone to dashboard in eight commands.",
    lessons: [
      "Match model complexity to data scale — Ridge beat deep nets here, and knowing why matters",
      "Temporal patterns are a different signal class than snapshots; they need their own model",
      "Reproducibility (DVC) turns 'trust me' metrics into 'run it yourself' metrics",
    ],
    future: [
      "Fairness audit across demographic slices",
      "Real LMS integration via LTI (Canvas/Moodle)",
      "Policy learning from advisor action outcomes",
    ],
  },
};
