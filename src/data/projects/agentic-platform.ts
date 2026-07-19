import type { Project } from "@/types/portfolio";

export const agenticPlatform: Project = {
  slug: "agentic-ai-platform-architecture",
  title: "Distributed Agentic AI Platform",
  subtitle: "Reference architecture: multi-agent orchestration + enterprise RAG on an event-driven backbone",
  plainEnglish:
    "A blueprint showing how AI assistants, document search, and real-time messaging fit together into one dependable system — the design thinking behind my real projects.",
  description:
    "A concept build unifying three systems I originally designed separately — a multi-agent workflow engine, an enterprise RAG pipeline, and a real-time event-driven backend. Merged deliberately: in production these are not three products but three layers of one platform, and the integration is where the real engineering lives.",
  challenge:
    "Agent demos break down in production because the three hard problems — coordinating multi-step AI work, grounding generation in retrievable truth, and moving events reliably between services — are usually solved in isolation and never integrated.",
  solution:
    "One architecture with explicit seams: an event broker decouples ingress from processing, a LangGraph supervisor orchestrates specialized agents over typed shared state, and a hybrid-retrieval RAG layer with reranking and citation checks grounds every generation — wrapped in evaluation, guardrails, and observability.",
  architecture: [
    "WebSocket/API ingress behind a load-balanced gateway",
    "Event broker decoupling producers from async workers",
    "LangGraph supervisor orchestrating specialized agents",
    "Typed workflow state in PostgreSQL (resumable runs)",
    "Semantic chunking + embedding pipeline",
    "Hybrid retrieval (dense + keyword) with reranking",
    "LLM generation with source citations and faithfulness checks",
    "Redis for hot state, retry policies with dead-letter queues",
    "Evaluation harness + guardrails + observability",
    "Dockerized deployment with CI/CD",
  ],
  technologies: [
    "Python",
    "FastAPI",
    "LangGraph",
    "LangChain",
    "FAISS",
    "PostgreSQL",
    "Redis",
    "WebSockets",
    "Pydantic",
    "Docker",
  ],
  contribution:
    "Designed as a reference architecture consolidating patterns proven in my real projects — the RAG advisor from SentinelEDU, validated LLM boundaries from PillSafe, and event-driven coordination principles — into one documented, defensible system design.",
  metrics: [
    {
      label: "Multi-step processing latency reduction vs sequential baseline",
      value: "42%",
      status: "target",
    },
    {
      label: "Concurrent WebSocket connections (design target)",
      value: "15,000",
      status: "target",
    },
  ],
  featured: false,
  caseStudy: {
    summary:
      "A concept build answering one question: what does it take to run agentic AI reliably in production? The answer is not a better prompt — it is typed state, grounded retrieval, explicit failure handling, and continuous evaluation, integrated.",
    problem:
      "Each layer fails differently. Agents produce unvalidated output; retrieval returns plausible-but-wrong context; real-time systems melt under retry storms. Solving them separately produces three demos; integrating them produces a platform.",
    stakeholders: [
      "Teams moving LLM prototypes toward production",
      "Engineers evaluating how I reason about AI system architecture",
    ],
    constraints: [
      "Every LLM output validated against a schema before touching persistent state",
      "Every generated answer must cite retrievable sources",
      "Every message path needs an explicit delivery, retry, and failure story",
      "Cost and token budgets bounded per workflow run",
    ],
    decisions: [
      {
        choice: "Supervisor graph over prompt chaining",
        rationale:
          "Explicit state graphs make each agent step observable, retryable, and independently evaluable — a pattern proven in my SentinelEDU and PillSafe LLM boundaries.",
      },
      {
        choice: "Hybrid retrieval with reranking over pure vector search",
        rationale:
          "Dense retrieval catches semantics, keyword search catches exact terms, reranking arbitrates — the biggest lever against hallucination.",
      },
      {
        choice: "Event broker between ingress and agents",
        rationale:
          "Spikes queue instead of cascading; agent workers scale independently of connection handling.",
      },
      {
        choice: "Dead-letter queues and backoff-with-jitter everywhere",
        rationale:
          "Failed work becomes a debuggable artifact instead of a silent loss or a retry storm.",
      },
    ],
    implementation:
      "Requests enter through a validated gateway and publish to the broker. The orchestrator dispatches agents that read and write typed workflow state; retrieval-dependent steps query the hybrid RAG layer and must pass citation-faithfulness checks before results persist. Guardrails reject unsupported claims; traces and eval scores flow to observability.",
    security: [
      "Per-agent scopes so one compromised prompt cannot reach unrelated data",
      "Prompt-injection filtering on ingested content",
      "Credentials in environment configuration, never in agent context",
    ],
    scalability: [
      "Stateless gateway, worker, and agent tiers scale independently",
      "Designed for 15,000 concurrent WebSocket connections (stated design target, not a verified production figure)",
      "Incremental re-indexing keeps the knowledge layer current without downtime",
    ],
    testing: [
      "Agent unit tests with recorded LLM fixtures",
      "Retrieval precision and citation-faithfulness evaluation sets",
      "Chaos tests killing workers and broker nodes mid-flow",
    ],
    results:
      "A documented reference architecture with stated design targets (42% latency reduction over sequential processing; 15,000 concurrent connections). Concept build — targets are engineering goals, not measured production results.",
    lessons: [
      "Integration is the hard part — each layer's guarantees must survive contact with the others",
      "Evaluation harnesses matter more than prompt cleverness",
      "Backpressure and typed state cannot be retrofitted; they are day-one decisions",
    ],
    future: [
      "Working implementation of the full integrated stack",
      "Human-in-the-loop checkpoints for high-stakes agent actions",
      "Multi-region broker replication",
    ],
  },
};
