import type { Project } from "@/types/portfolio";

export const pathointern: Project = {
  slug: "pathointern",
  title: "PathoIntern",
  subtitle: "Non-diagnostic AI triage for blood smear review",
  plainEnglish:
    "A tool that sorts blood-test slides so doctors see the most worrying ones first. It never diagnoses — it just makes sure urgent cases don't wait at the back of the queue.",
  description:
    "An AI triage assistant that helps pathologists prioritize digitized blood smear slides — CTransPath embeddings and k-NN anomaly detection assign each patch a 0–100 criticality score and a four-tier urgency, so expert review lands where it matters most. Non-diagnostic by design: every verdict belongs to the pathologist.",
  challenge:
    "Pathologist workloads rise 5–10% annually and burnout drives diagnostic errors — yet critical blood smears wait in unsorted queues because no AI triage tools exist for smear review.",
  solution:
    "A four-step pipeline: technologists upload smear patches, CTransPath encodes each into a 768-dimensional morphological vector, k-NN anomaly scoring maps it to an Urgent/High/Elevated/Routine tier, and pathologists work a prioritized worklist with similar-case retrieval and fully audited verdicts.",
  architecture: [
    "Next.js web application",
    "Patch upload pipeline (PNG/JPG)",
    "CTransPath encoder — 768-dim morphological embeddings",
    "k-NN anomaly detection and criticality scoring (0–100)",
    "Four-tier triage: Urgent / High / Elevated / Routine",
    "Prioritized pathologist worklist with similar-case view",
    "Audited verdict and override tracking",
    "QA environment at qa.pathointern.ca",
  ],
  technologies: [
    "Next.js",
    "TypeScript",
    "Python",
    "CTransPath",
    "Embeddings",
    "k-NN anomaly detection",
    "Computer vision",
  ],
  contribution:
    "Built the backend, the RAG pipeline, and led model training on the four-person team (with Muthuraj Jayakumar, Lohith Reddy, and Ali Ozdemir) — from the embedding-based triage approach, grounded in peer-reviewed literature, through the scoring engine.",
  metrics: [
    {
      label: "Criticality scoring range mapped to four review tiers",
      value: "0–100",
      status: "verified",
    },
  ],
  images: [
    {
      src: "/images/projects/pathointern-overview.jpg",
      alt: "PathoIntern — AI triage assistant for blood smear pathology, pipeline overview",
      caption: "The triage pipeline: patch upload → AI anomaly scoring → priority-sorted pathologist worklist",
      width: 1672,
      height: 941,
    },
    {
      src: "/images/projects/pathointern-architecture.jpg",
      alt: "PathoIntern complete architecture diagram across eight system layers",
      caption: "Complete architecture: Next.js frontend, FastAPI, ML triage engine, pgvector data layer, and RAG assistant",
      width: 1672,
      height: 941,
    },
    {
      src: "/images/projects/pathointern-conclusion.jpg",
      alt: "PathoIntern conclusion — safe, explainable triage support",
      caption: "AI should sharpen the review queue, not replace the reviewer",
      width: 1672,
      height: 941,
    },
  ],
  liveUrl: "https://qa.pathointern.ca",
  featured: true,
  caseStudy: {
    summary:
      "A digital intern for pathology labs: first-pass analysis that flags anomalous blood smear patches for priority review — never diagnosing, always deferring to the pathologist, with every decision audited.",
    problem:
      "Slides are reviewed roughly in arrival order. A critical case can sit behind dozens of routine ones — the literature shows AI worklist reordering cut critical-case turnaround by 56% in radiology, but nothing equivalent existed for blood smears.",
    stakeholders: [
      "Pathologists working prioritized review queues",
      "Lab technologists uploading digitized smear patches",
      "Patients whose critical results reach experts sooner",
    ],
    constraints: [
      "Strictly non-diagnostic — output is pattern similarity, never diagnostic probability",
      "Final interpretation always by a licensed pathologist",
      "Every AI suggestion, override, and verdict must be auditable",
      "Approach had to be grounded in peer-reviewed evidence",
    ],
    decisions: [
      {
        choice: "CTransPath embeddings + anomaly detection over a diagnostic classifier",
        rationale:
          "Dippel et al. (NEJM AI, 2024) showed this exact approach reaching 95% AUROC for histopathological triage — and framing output as anomaly similarity keeps the tool honestly non-diagnostic.",
      },
      {
        choice: "Four-tier triage instead of raw scores",
        rationale:
          "Urgent/High/Elevated/Routine maps directly onto how labs already batch work — a 0–100 number alone doesn't change behaviour.",
      },
      {
        choice: "Full audit trail on every verdict and override",
        rationale:
          "Trust in a clinical-adjacent tool comes from reviewability — the pathologist always has the final, recorded word.",
      },
    ],
    implementation:
      "Uploaded patches are encoded by CTransPath into 768-dimensional feature vectors and scored by k-NN distance against previously reviewed cases. Scores map to review tiers that drive the prioritized worklist; reviewers see similar past cases alongside each patch and submit verdicts that feed back into the reference set.",
    security: [
      "Authenticated access with sign-in gated review workflows",
      "Non-diagnostic disclaimers enforced across the product",
      "Complete audit logging of AI outputs and human decisions",
    ],
    scalability: [
      "Embedding-based similarity scales with vector search — Phase II targets UNI foundation-model embeddings (validated across 34 pathology tasks)",
      "Staged rollout: Phase I MVP in QA before broader deployment",
    ],
    testing: [
      "QA environment (qa.pathointern.ca) exercising the full upload-score-review loop",
      "Tier thresholds validated against reviewed-case baselines",
    ],
    results:
      "Phase I MVP live in QA with the complete pipeline — upload, embedding, scoring, tiered worklist, and audited pathologist review. Phase II (foundation-model embeddings and similarity search) is scoped.",
    lessons: [
      "In clinical-adjacent AI, what the tool refuses to claim matters as much as what it does",
      "Literature-grounded design decisions make stakeholder conversations far easier",
    ],
    future: [
      "Phase II: UNI foundation-model embeddings and case-similarity search",
      "Expanded slide types beyond blood smears",
    ],
  },
};
