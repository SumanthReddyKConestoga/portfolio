import type { ArchitectureNodeData } from "@/types/portfolio";

export const architectureNodes: ArchitectureNodeData[] = [
  {
    id: "ui",
    label: "User Interface",
    sublabel: "React + TypeScript Frontend",
    purpose:
      "Delivers the product experience — typed components, client-side state, and accessible interactions.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    inputs: "User interactions, API responses, streamed model output",
    outputs: "HTTPS requests to the API gateway",
    rationale:
      "A typed component layer keeps UI state predictable and lets the interface evolve without breaking API contracts.",
    considerations: [
      "Code splitting and lazy loading",
      "Optimistic UI with rollback",
      "Accessibility (WCAG 2.2 AA)",
    ],
    usedIn: [{ label: "PillSafe — React SPA", slug: "pillsafe" }, { label: "PathoIntern — Next.js app", slug: "pathointern" }],
  },
  {
    id: "gateway",
    label: "API Gateway",
    sublabel: "FastAPI / Spring Boot Services",
    purpose:
      "Validates requests, enforces authentication, routes workloads, and exposes asynchronous service endpoints.",
    technologies: ["FastAPI", "Spring Boot", "Pydantic", "JWT", "OAuth", "Redis", "PostgreSQL"],
    inputs: "Client HTTPS requests, service-to-service calls",
    outputs: "Routed, validated requests to domain services",
    rationale:
      "A single validated entry point centralizes auth, rate limiting, and versioning instead of duplicating them per service.",
    considerations: [
      "Rate limiting",
      "Async processing",
      "Schema validation",
      "Error handling",
      "API versioning",
      "Observability",
    ],
    usedIn: [{ label: "SentinelEDU — 20+ endpoint FastAPI", slug: "sentineledu" }, { label: "PillSafe — async FastAPI", slug: "pillsafe" }],
  },
  {
    id: "auth",
    label: "Authentication and RBAC",
    sublabel: "Identity, sessions, permissions",
    purpose:
      "Verifies identity and enforces role-based permissions on every request path before business logic runs.",
    technologies: ["JWT", "OAuth 2.0", "Refresh tokens", "RBAC policies"],
    inputs: "Credentials, tokens, role definitions",
    outputs: "Authenticated principals with scoped permissions",
    rationale:
      "Authorization as a dedicated layer means a permissions bug is a policy fix, not a hunt through business logic.",
    considerations: [
      "Short-lived tokens with rotation",
      "Least-privilege role design",
      "Audit logging",
    ],
    usedIn: [{ label: "PillSafe — JWT + admin-blocked RBAC", slug: "pillsafe" }, { label: "PathoIntern — role-based review access", slug: "pathointern" }],
  },
  {
    id: "orchestration",
    label: "Agent Orchestration Layer",
    sublabel: "LangGraph / LangChain Agents",
    purpose:
      "Coordinates multi-step AI workflows — dispatching specialized agents, managing typed state, and handling retries.",
    technologies: ["LangGraph", "LangChain", "Pydantic", "State graphs", "Tool calling"],
    inputs: "Validated task requests, workflow state",
    outputs: "Agent tool calls, retrieval queries, state transitions",
    rationale:
      "Explicit orchestration makes agent behavior observable and testable — each step can be retried, evaluated, or replaced independently.",
    considerations: [
      "Resumable workflow state",
      "Per-step output validation",
      "Token and cost budgets",
      "Fallback paths on agent failure",
    ],
    usedIn: [{ label: "SentinelEDU — alert + recommendation engine", slug: "sentineledu" }, { label: "Agentic Platform — supervisor graph design", slug: "agentic-ai-platform-architecture" }],
  },
  {
    id: "retrieval",
    label: "Retrieval and Knowledge Layer",
    sublabel: "Embeddings + Vector Database",
    purpose:
      "Turns documents into searchable knowledge — chunking, embedding, and hybrid retrieval with reranking.",
    technologies: ["Pinecone", "Milvus", "FAISS", "Embedding models", "Hybrid search", "Rerankers"],
    inputs: "Documents, queries from the orchestration layer",
    outputs: "Ranked, cited context passages",
    rationale:
      "Grounding generation in retrieved sources is the single biggest lever against hallucination.",
    considerations: [
      "Semantic chunking strategy",
      "Incremental re-indexing",
      "Access control at retrieval time",
      "Retrieval precision evaluation",
    ],
    usedIn: [{ label: "PillSafe — Health Canada DIN RAG", slug: "pillsafe" }, { label: "SentinelEDU — FAISS + MiniLM advisor", slug: "sentineledu" }, { label: "PathoIntern — pgvector similarity", slug: "pathointern" }],
  },
  {
    id: "llm",
    label: "LLM and Model Services",
    sublabel: "Inference, generation, vision",
    purpose:
      "Runs inference — text generation with citations, structured extraction, and vision tasks like OCR.",
    technologies: ["LLM APIs", "Structured outputs", "OpenCV", "PaddleOCR", "Model adapters"],
    inputs: "Prompts with retrieved context, images",
    outputs: "Validated structured responses, cited answers",
    rationale:
      "An adapter layer over model providers keeps the system portable as models improve and pricing shifts.",
    considerations: [
      "Structured output validation",
      "Provider fallback",
      "Latency and cost tracking",
      "Prompt versioning",
    ],
    usedIn: [{ label: "PillSafe — privacy-preserving Claude layer", slug: "pillsafe" }, { label: "PathoIntern — CTransPath embeddings + local LLM", slug: "pathointern" }],
  },
  {
    id: "observability",
    label: "Observability, Evaluation and Guardrails",
    sublabel: "Tracing, evals, safety rails",
    purpose:
      "Watches everything — request tracing, model evaluation, and guardrails that reject unsafe or unfaithful output.",
    technologies: ["Tracing", "Structured logging", "Eval harnesses", "Guardrail policies", "Alerting"],
    inputs: "Traces, model outputs, evaluation datasets",
    outputs: "Metrics, alerts, blocked responses, eval scores",
    rationale:
      "AI systems drift silently; continuous evaluation is the only way to know quality is holding.",
    considerations: [
      "Faithfulness and precision metrics",
      "Regression evals on every change",
      "PII filtering",
      "Anomaly alerting",
    ],
    usedIn: [{ label: "SentinelEDU — full evaluation reports", slug: "sentineledu" }, { label: "PillSafe — 40 CI-enforced tests", slug: "pillsafe" }],
  },
  {
    id: "infra",
    label: "Cloud Infrastructure and CI/CD",
    sublabel: "AWS · Docker · Pipelines",
    purpose:
      "Runs and ships the platform — containerized services, infrastructure as code, and automated deploy pipelines.",
    technologies: ["AWS", "EC2", "Docker", "Terraform", "GitHub Actions", "Azure DevOps"],
    inputs: "Build artifacts, infrastructure definitions",
    outputs: "Deployed, monitored, scalable environments",
    rationale:
      "Reproducible infrastructure and automated pipelines turn deployment from an event into a non-event.",
    considerations: [
      "Environment parity",
      "Zero-downtime deploys",
      "Secret management",
      "Cost monitoring",
    ],
    usedIn: [{ label: "PillSafe — GitHub Actions, Render + Vercel", slug: "pillsafe" }, { label: "PathoIntern — Docker, Nginx, auto-deploy QA", slug: "pathointern" }],
  },
];
