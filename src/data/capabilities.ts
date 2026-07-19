import type { CapabilityGroup, MethodologyStep } from "@/types/portfolio";

export const capabilities: CapabilityGroup[] = [
  {
    id: "frontend",
    title: "Frontend Architecture",
    summary: "Component-driven interfaces with accessibility and state discipline.",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Responsive UI",
      "State management",
      "Accessibility",
      "API integration",
      "Component architecture",
    ],
    usage:
      "Used to build the PillSafe patient interface, the PathoIntern review workflow, and a freelance commerce storefront — typed components, predictable state, accessible by default.",
    relatedProjects: ["pillsafe", "pathointern"],
  },
  {
    id: "backend",
    title: "Distributed Backends",
    summary: "Service boundaries, authentication, and async processing at the API layer.",
    technologies: [
      "Java",
      "Spring Boot",
      "C#",
      "ASP.NET Web API",
      "Python",
      "FastAPI",
      "REST APIs",
      "Microservices",
      "Authentication",
      "RBAC",
      "Async processing",
    ],
    usage:
      "At EY: Spring Boot microservices for a Fortune 500 technology client's global e-commerce platform and Java/.NET financial dashboards for a leading investment bank — plus the async FastAPI backends powering PillSafe and SentinelEDU's 20+ endpoint API.",
    relatedProjects: ["pillsafe", "sentineledu", "agentic-ai-platform-architecture"],
  },
  {
    id: "ai",
    title: "AI Orchestration",
    summary: "Agent workflows, retrieval pipelines, and evaluation-driven LLM systems.",
    technologies: [
      "LLM integration",
      "RAG pipelines",
      "LangChain",
      "LangGraph",
      "AI agents",
      "Tool calling",
      "Prompt engineering",
      "Embeddings",
      "Vector databases",
      "Evaluation",
      "Hallucination reduction",
      "Computer vision",
      "OCR",
    ],
    usage:
      "SentinelEDU's FAISS + Claude RAG advisor and model suite, PathoIntern's embedding-based triage, and PillSafe's OCR and privacy-preserving LLM layer — every output validated, every pipeline measured.",
    relatedProjects: ["sentineledu", "pathointern", "pillsafe"],
  },
  {
    id: "data",
    title: "Data Engineering",
    summary: "Schemas, migrations, and data quality as foundations, not afterthoughts.",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "SQL",
      "Data preprocessing",
      "Data validation",
      "Schema design",
      "Migrations",
      "Feature engineering",
    ],
    usage:
      "SQLAlchemy schemas and DVC-versioned data pipelines in SentinelEDU, prescription and patient data models in PillSafe, and transactional commerce schemas in freelance work.",
    relatedProjects: ["sentineledu", "pillsafe", "agentic-ai-platform-architecture"],
  },
  {
    id: "infra",
    title: "Infrastructure and MLOps",
    summary: "Cloud deployment, CI/CD, and operational visibility for apps and models.",
    technologies: [
      "AWS",
      "EC2",
      "Terraform",
      "Docker",
      "GitHub Actions",
      "Azure DevOps",
      "CI/CD",
      "Cloud deployment",
      "Monitoring",
      "Model deployment",
      "Environment management",
    ],
    usage:
      "GitHub Actions CI with Render + Vercel deployment for PillSafe, reproducible DVC pipelines for SentinelEDU, and Azure DevOps + AWS experience from EY delivery work.",
    relatedProjects: ["pillsafe", "sentineledu", "agentic-ai-platform-architecture"],
  },
  {
    id: "quality",
    title: "Testing and Quality",
    summary: "Confidence through layered testing, validation, and observability.",
    technologies: [
      "Unit testing",
      "Integration testing",
      "API testing",
      "Selenium",
      "Validation",
      "Performance testing",
      "Error handling",
      "Observability",
    ],
    usage:
      "40 CI-enforced backend tests in PillSafe (including RBAC and degradation paths), 5-fold cross-validation on every SentinelEDU model, and integration testing across EY release cycles.",
    relatedProjects: ["pillsafe", "sentineledu", "agentic-ai-platform-architecture"],
  },
];

export const methodology: MethodologyStep[] = [
  {
    step: 1,
    title: "Understand the business problem",
    detail:
      "Clarify who the system serves, what outcome matters, and how success will be measured before writing any code.",
  },
  {
    step: 2,
    title: "Define system boundaries",
    detail:
      "Identify services, data ownership, security requirements, integrations, failure modes, and operational constraints before implementation.",
  },
  {
    step: 3,
    title: "Design the architecture",
    detail:
      "Choose components, data flow, and technologies deliberately — documenting trade-offs so decisions can be revisited with context.",
  },
  {
    step: 4,
    title: "Build, test, and observe",
    detail:
      "Implement in vertical slices with tests shaped to real failure modes, and instrument the system from the first deploy.",
  },
  {
    step: 5,
    title: "Measure, refine, and scale",
    detail:
      "Let production signals — latency, errors, evaluation scores, user feedback — drive iteration and scaling decisions.",
  },
];
