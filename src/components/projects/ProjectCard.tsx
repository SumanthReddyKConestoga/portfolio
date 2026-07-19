"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe, Sparkles } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { fadeUp } from "@/lib/animations";

const MAX_CHIPS = 6;

export default function ProjectCard({ project }: { project: Project }) {
  const chips = project.technologies.slice(0, MAX_CHIPS);
  const extra = project.technologies.length - chips.length;

  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent/30"
    >
      {project.images?.[0] ? (
        <Link
          href={`/projects/${project.slug}`}
          tabIndex={-1}
          aria-hidden
          className="relative block aspect-[16/9] overflow-hidden border-b border-line"
        >
          <Image
            src={project.images[0].src}
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
      <div>
        <h3 className="font-display text-xl font-bold text-content-primary">{project.title}</h3>
        <p className="mt-0.5 text-sm text-accent">{project.subtitle}</p>
      </div>

      <p className="mt-3 rounded-xl border border-accent/20 bg-accent/[0.07] p-3.5 text-[13px] leading-relaxed text-content-secondary">
        <span className="mb-1 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
          <Sparkles size={11} aria-hidden /> In plain English
        </span>
        {project.plainEnglish}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-content-secondary [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
        {project.description}
      </p>

      {project.metrics.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.metrics.slice(0, 2).map((metric) => (
            <li
              key={metric.label}
              className="rounded-lg border border-line bg-surface-raised px-3 py-1.5"
            >
              <span className="text-sm font-semibold text-content-primary">{metric.value}</span>
              <span className="ml-1.5 text-[11px] text-content-muted">{metric.label}</span>
              {metric.status !== "verified" ? (
                <span className="ml-1.5 font-mono text-[10px] uppercase tracking-wider text-accent/70">
                  target
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}

      <ul className="mb-5 mt-4 flex flex-wrap gap-1.5" aria-label="Technology stack">
        {chips.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-line bg-surface-raised px-2 py-0.5 font-mono text-[11px] text-content-secondary"
          >
            {tech}
          </li>
        ))}
        {extra > 0 ? (
          <li className="rounded-md px-2 py-0.5 font-mono text-[11px] text-content-muted">
            +{extra} more
          </li>
        ) : null}
      </ul>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
        <div className="flex items-center gap-2">
          <Link
            href={`/projects/${project.slug}`}
            className="focus-ring inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-[13px] font-semibold text-base-950 shadow-[0_0_20px_-8px_rgba(232,121,249,0.5)] transition-all hover:shadow-[0_0_26px_-6px_rgba(232,121,249,0.65)]"
          >
            Read case study
            <ArrowUpRight
              size={14}
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code on GitHub`}
              title="View code on GitHub"
              className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-xl border border-line text-content-secondary transition-colors hover:border-accent/40 hover:text-content-primary"
            >
              <Github size={16} aria-hidden />
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              title="Open live demo"
              className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-xl border border-line text-content-secondary transition-colors hover:border-accent/40 hover:text-content-primary"
            >
              <Globe size={16} aria-hidden />
            </a>
          ) : null}
        </div>
        <p className="hidden font-mono text-[11px] text-content-muted sm:block">
          {project.architecture.length} components
        </p>
      </div>
      </div>
    </motion.article>
  );
}
