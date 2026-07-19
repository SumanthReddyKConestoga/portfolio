"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { capabilities } from "@/data/capabilities";
import { getProject } from "@/data/projects";
import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";

export default function CapabilityPanel() {
  const [activeId, setActiveId] = useState(capabilities[0].id);
  const active = capabilities.find((c) => c.id === activeId)!;

  return (
    <section id="capabilities" className="border-y border-line bg-black/20 py-24">
      <div className="mx-auto max-w-shell px-6">
        <SectionHeader
          index="03"
          eyebrow="Skills"
          title="Skills & Technologies"
          description="Grouped by engineering domain — every skill backed by the real projects it was used to build, not by arbitrary percentages."
        />

        <div
          role="tablist"
          aria-label="Capability domains"
          className="flex flex-wrap gap-2"
        >
          {capabilities.map((cap) => (
            <button
              key={cap.id}
              role="tab"
              id={`cap-tab-${cap.id}`}
              aria-selected={cap.id === activeId}
              aria-controls="capability-detail"
              type="button"
              onClick={() => setActiveId(cap.id)}
              className={cn(
                "focus-ring rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors",
                cap.id === activeId
                  ? "border-accent/50 bg-surface-high text-content-primary"
                  : "border-line bg-surface text-content-secondary hover:border-line-strong hover:text-content-primary"
              )}
            >
              {cap.title}
            </button>
          ))}
        </div>

        <div
          id="capability-detail"
          role="tabpanel"
          aria-labelledby={`cap-tab-${active.id}`}
          className="mt-6"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="grid gap-4 rounded-2xl border border-line bg-surface p-6 lg:grid-cols-[1.2fr_0.8fr]"
            >
              <div>
                <h3 className="font-display text-xl font-bold text-content-primary">{active.title}</h3>
                <p className="mt-1 text-sm text-content-secondary">{active.summary}</p>

                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
                  {active.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-line bg-surface-raised px-2.5 py-1 font-mono text-[11px] text-content-secondary"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-[13px] leading-relaxed text-content-muted">
                  {active.usage}
                </p>
              </div>

              <div className="rounded-xl border border-line bg-surface-raised p-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-content-muted">
                  Applied in
                </p>
                <ul className="mt-3 space-y-2">
                  {active.relatedProjects.map((slug) => {
                    const project = getProject(slug);
                    if (!project) return null;
                    return (
                      <li key={slug}>
                        <Link
                          href={`/projects/${slug}`}
                          className="focus-ring group flex items-center justify-between gap-2 rounded-lg border border-line bg-surface px-3 py-2.5 transition-colors hover:border-accent/40"
                        >
                          <span className="text-[13px] text-content-secondary group-hover:text-content-primary">
                            {project.title}
                          </span>
                          <ArrowUpRight size={14} aria-hidden className="shrink-0 text-accent" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
