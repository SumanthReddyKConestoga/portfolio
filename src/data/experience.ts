import type { CertificationEntry, EducationEntry, ExperienceEntry } from "@/types/portfolio";

export const experience: ExperienceEntry[] = [
  {
    company: "Independent",
    role: "Freelance Full-Stack Developer",
    period: "Project-based",
    focus: [
      "Designed and delivered a complete commerce platform for a private client — Spring Boot REST backend, React frontend, and SQL database, owned end to end from requirements to deployment",
      "Built product, inventory, cart, and order workflows with transactional integrity and a payments integration layer",
      "Containerized the system with Docker and handled release, monitoring, and post-delivery iteration",
      "Client engagement under private ownership — code is not publicly available, but the architecture and delivery process are covered in detail on request",
    ],
  },
  {
    company: "EY LLP",
    logo: "/images/logos/ey.png",
    role: "Associate Consultant",
    tagline: "Java full-stack, microservices, and AI-enabled solutions — Fortune 500 global technology client (e-commerce platform)",
    scope: { label: "Enterprise delivery ownership, security leadership, and stakeholder management", percent: 100 },
    period: "Oct 2023 — Nov 2024",
    focus: [
      "Designed, enhanced, and supported ~15–25 Java Spring Boot microservices and REST API components handling product, inventory, order, and operational data across multiple global regions",
      "Implemented JWT-based authentication and role-based authorization, and identified and remediated ~20–40 application vulnerabilities, insecure dependencies, and legacy security findings",
      "Modernized business-critical legacy applications — refactoring outdated code, upgrading libraries, improving modularity — and supported 8–12 production releases with minimal operational disruption",
      "Contributed to AI/ML-oriented prototypes and intelligent automation concepts in Python, exploring faster anomaly detection, operational insights, and engineering productivity",
      "Coordinated 2–3 concurrent technical workstreams, collaborated directly with client stakeholders and architects, and provided code-review and debugging guidance to 2–4 junior team members",
    ],
  },
  {
    company: "EY LLP",
    logo: "/images/logos/ey.png",
    role: "Senior Analyst",
    tagline: "Java and .NET full-stack development with regression automation — leading global investment bank",
    scope: { label: "Independent module ownership, full-stack delivery, and quality engineering", percent: 70 },
    period: "Sept 2022 — Sept 2023",
    focus: [
      "Developed and maintained 10–20 enterprise application modules and REST APIs using Java, Spring Boot, C#, ASP.NET Web API, Angular, and SQL for financial dashboards and operational workflows",
      "Built reusable Angular components integrated with Java and .NET backend services across ~10–15 user-facing screens",
      "Refactored legacy Java and .NET modules, strengthened validation and exception handling, and resolved ~20–30 functional and integration defects",
      "Created and maintained 25–40 automated regression scenarios in Katalon Studio covering critical UI, API, and end-to-end business workflows",
      "Reduced repetitive manual regression effort by ~30–40% while coordinating delivery across development, QA, SIT, and deployment teams",
    ],
  },
  {
    company: "EY LLP",
    logo: "/images/logos/ey.png",
    role: "Technology Intern",
    tagline: "Java full-stack foundation and supervised enterprise delivery — Fortune 500 global technology client (e-commerce platform)",
    scope: { label: "Learning, development support, and foundational delivery", percent: 40 },
    period: "Feb 2022 — July 2022",
    focus: [
      "Contributed to enterprise e-commerce applications using Java, Spring Boot, REST APIs, SQL, HTML, CSS, and JavaScript, supporting product, inventory, customer, and order-management workflows",
      "Developed and enhanced ~5–10 REST API endpoints and supported database integrations across a structured three-tier application architecture",
      "Resolved 10–15 application defects and development tickets, improving stability ahead of testing and release cycles",
      "Participated in ~6–8 Agile sprints — requirement discussions, stand-ups, code reviews, unit testing, and technical documentation — collaborating with senior developers, QA, and business analysts",
    ],
  },
  {
    company: "Wipro Infrastructure Engineering",
    logo: "/images/logos/wipro.png",
    role: "Engineering Intern",
    period: "March 2019 — July 2019",
    focus: [
      "Programmed and maintained PLC control logic for automated manufacturing and CNC machining operations",
      "Built reinforcement-learning experiments for automated pick-and-place robots, training control policies to optimize grasp positioning and cycle time",
      "Bridged industrial automation and machine learning — an early foundation for later work in applied AI and intelligent control systems",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    program: "Applied Artificial Intelligence and Machine Learning",
    institution: "Conestoga College, Waterloo, Canada",
    logo: "/images/logos/conestoga.png",
    period: "Jan 2026 — Present",
    note: "GPA 3.71",
  },
  {
    program: "Cloud Development and Operations",
    institution: "Conestoga College, Waterloo, Canada",
    logo: "/images/logos/conestoga.png",
    period: "Jan 2025 — Aug 2025",
    note: "GPA 3.47",
  },
  {
    program: "M.Tech — Instrumentation and Control Engineering",
    institution: "SASTRA University, India",
    logo: "/images/logos/sastra.png",
    period: "2017 — 2022",
  },
];

export const certifications: CertificationEntry[] = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    logo: "/images/logos/microsoft.png",
    date: "May 2024",
    credentialId: "D9AF10DA643B6DE4",
    verifyUrl: "https://learn.microsoft.com/en-us/users/ksumanthreddy-5024/credentials/d9af10da643b6de4",
  },
  {
    name: "LFS101: Introduction to Linux",
    issuer: "The Linux Foundation",
    logo: "/images/logos/linuxfoundation.png",
    date: "Feb 2025",
    verifyUrl: "https://www.credly.com/badges/09a38aab-ba17-4290-8741-2ba015b7a54c",
  },
  {
    name: "EY Artificial Intelligence — Applied AI (Bronze Learning)",
    issuer: "EY",
    logo: "/images/logos/ey.png",
    date: "Jul 2024",
    verifyUrl: "https://www.credly.com/badges/d7a81a00-1e44-400c-88ad-d2a6d3dd5d38",
  },
  {
    name: "EY Cloud — Learning",
    issuer: "EY",
    logo: "/images/logos/ey.png",
    date: "Dec 2022",
    verifyUrl: "https://www.credly.com/badges/3bf654e9-30bf-4031-bb24-5a69ff84389b",
  },
];
