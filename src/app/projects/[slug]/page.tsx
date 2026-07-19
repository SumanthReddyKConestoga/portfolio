import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, Globe, Sparkles } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { profile } from "@/data/portfolio";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study | ${profile.name}`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — Engineering Case Study`,
      description: project.description,
    },
  };
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-line bg-surface p-5">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{label}</h2>
      <div className="mt-3 text-sm leading-relaxed text-content-secondary">{children}</div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectCaseStudy({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();
  const cs = project.caseStudy;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: profile.siteUrl },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${profile.siteUrl}/#projects` },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${profile.siteUrl}/projects/${project.slug}`,
      },
    ],
  };

  return (
    <main className="mx-auto max-w-4xl px-6 pb-24 pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Link
        href="/#projects"
        className="focus-ring inline-flex items-center gap-1.5 rounded-lg text-sm text-content-secondary transition-colors hover:text-content-primary"
      >
        <ArrowLeft size={15} aria-hidden /> Back to projects
      </Link>

      <header className="mt-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          Engineering Case Study
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-content-primary sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-2 text-lg text-content-secondary">{project.subtitle}</p>

        <p className="mt-5 rounded-xl border border-accent/20 bg-accent/[0.07] p-4 text-sm leading-relaxed text-content-secondary">
          <span className="mb-1 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
            <Sparkles size={11} aria-hidden /> In plain English
          </span>
          {project.plainEnglish}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 text-sm text-content-secondary transition-colors hover:text-content-primary"
            >
              <Github size={15} aria-hidden /> Source
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 text-sm text-content-secondary transition-colors hover:text-content-primary"
            >
              <Globe size={15} aria-hidden /> Live demo
            </a>
          ) : null}
        </div>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technology stack">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-[11px] text-content-secondary"
            >
              {tech}
            </li>
          ))}
        </ul>
      </header>

      {project.images?.length ? (
        <section aria-label="Project visuals" className="mt-10 grid gap-6">
          {project.images.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-xl border border-line bg-surface"
            >
              <a
                href={image.src}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring block"
                aria-label={`${image.caption} — open full size`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(min-width: 1024px) 896px, 100vw"
                  className="w-full"
                />
              </a>
              <figcaption className="border-t border-line px-4 py-3 text-[13px] text-content-muted">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </section>
      ) : null}

      <div className="mt-10 grid gap-4">
        <Block label="Executive Summary">{cs.summary}</Block>
        <Block label="Problem">{cs.problem}</Block>

        <div className="grid gap-4 sm:grid-cols-2">
          <Block label="Users and Stakeholders">
            <List items={cs.stakeholders} />
          </Block>
          <Block label="Constraints">
            <List items={cs.constraints} />
          </Block>
        </div>

        <Block label="System Architecture">
          <ol className="grid gap-2 sm:grid-cols-2">
            {project.architecture.map((component, i) => (
              <li
                key={component}
                className="flex items-center gap-2.5 rounded-lg border border-line bg-surface-raised px-3 py-2"
              >
                <span className="font-mono text-[11px] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[13px] text-content-secondary">{component}</span>
              </li>
            ))}
          </ol>
        </Block>

        <Block label="Technology Decisions">
          <ul className="space-y-3">
            {cs.decisions.map((decision) => (
              <li key={decision.choice}>
                <p className="font-medium text-content-primary">{decision.choice}</p>
                <p className="mt-0.5 text-content-muted">{decision.rationale}</p>
              </li>
            ))}
          </ul>
        </Block>

        <Block label="Implementation">{cs.implementation}</Block>

        <div className="grid gap-4 sm:grid-cols-2">
          <Block label="Security Considerations">
            <List items={cs.security} />
          </Block>
          <Block label="Scalability Considerations">
            <List items={cs.scalability} />
          </Block>
        </div>

        <Block label="Testing Strategy">
          <List items={cs.testing} />
        </Block>

        <Block label="Results">
          {cs.results}
          {project.metrics.some((metric) => metric.status !== "verified") ? (
            <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-accent/70">
              Metrics marked as targets are design goals, not verified production figures.
            </p>
          ) : null}
        </Block>

        <div className="grid gap-4 sm:grid-cols-2">
          <Block label="Lessons Learned">
            <List items={cs.lessons} />
          </Block>
          <Block label="Future Improvements">
            <List items={cs.future} />
          </Block>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between rounded-xl border border-line bg-surface p-5">
        <p className="text-sm text-content-secondary">
          Interested in how this could apply to your team?
        </p>
        <Link
          href="/#contact"
          className="focus-ring rounded-lg bg-white px-4 py-2 text-sm font-semibold text-base-950 transition-transform hover:scale-[1.02]"
        >
          Get in touch
        </Link>
      </div>
    </main>
  );
}
