export type MetricStatus = "verified" | "placeholder" | "target";

export type ProjectMetric = {
  label: string;
  value: string;
  status: MetricStatus;
};

export type CaseStudy = {
  summary: string;
  problem: string;
  stakeholders: string[];
  constraints: string[];
  decisions: { choice: string; rationale: string }[];
  implementation: string;
  security: string[];
  scalability: string[];
  testing: string[];
  results: string;
  lessons: string[];
  future: string[];
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  plainEnglish: string;
  description: string;
  challenge: string;
  solution: string;
  architecture: string[];
  technologies: string[];
  contribution: string;
  metrics: ProjectMetric[];
  images?: ProjectImage[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  caseStudy: CaseStudy;
};

export type CapabilityGroup = {
  id: string;
  title: string;
  summary: string;
  technologies: string[];
  usage: string;
  relatedProjects: string[];
};

export type ExperienceEntry = {
  company: string;
  logo?: string;
  tagline?: string;
  scope?: { label: string; percent: number };
  role: string;
  period: string;
  location?: string;
  focus: string[];
};

export type EducationEntry = {
  program: string;
  institution: string;
  logo?: string;
  period: string;
  note?: string;
};

export type ArchitectureNodeData = {
  id: string;
  label: string;
  sublabel: string;
  purpose: string;
  technologies: string[];
  inputs: string;
  outputs: string;
  rationale: string;
  considerations: string[];
  usedIn?: { label: string; slug: string }[];
};

export type MethodologyStep = {
  step: number;
  title: string;
  detail: string;
};

export type CertificationEntry = {
  name: string;
  issuer: string;
  logo?: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
};
