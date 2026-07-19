"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowRightLeft, ArrowUpRight, Cpu } from "lucide-react";
import { architectureNodes } from "@/data/architecture";
import type { ArchitectureNodeData } from "@/types/portfolio";
import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";

function DetailPanel({ node }: { node: ArchitectureNodeData }) {
  return (
    <motion.div
      key={node.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
      className="rounded-xl border border-line bg-surface-raised p-5"
    >
      <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
        {node.sublabel}
      </p>
      <h3 className="mt-1 text-lg font-semibold text-content-primary">{node.label}</h3>
      <p className="mt-2 text-sm leading-relaxed text-content-secondary">{node.purpose}</p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-content-muted">Input</p>
          <p className="mt-1 text-[13px] text-content-secondary">{node.inputs}</p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-content-muted">Output</p>
          <p className="mt-1 text-[13px] text-content-secondary">{node.outputs}</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="font-mono text-[11px] uppercase tracking-wider text-content-muted">
          Technologies
        </p>
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {node.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-[11px] text-content-secondary"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <p className="font-mono text-[11px] uppercase tracking-wider text-content-muted">
          Why it is built this way
        </p>
        <p className="mt-1 text-[13px] leading-relaxed text-content-secondary">{node.rationale}</p>
      </div>

      <div className="mt-4">
        <p className="font-mono text-[11px] uppercase tracking-wider text-content-muted">
          Engineering considerations
        </p>
        <ul className="mt-2 grid gap-1 sm:grid-cols-2">
          {node.considerations.map((c) => (
            <li key={c} className="flex items-start gap-1.5 text-[13px] text-content-secondary">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
              {c}
            </li>
          ))}
        </ul>
      </div>

      {node.usedIn?.length ? (
        <div className="mt-4 border-t border-line pt-4">
          <p className="font-mono text-[11px] uppercase tracking-wider text-content-muted">
            Proven in practice
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {node.usedIn.map((ref) => (
              <li key={ref.slug + ref.label}>
                <Link
                  href={`/projects/${ref.slug}`}
                  className="focus-ring inline-flex items-center gap-1 rounded-lg border border-accent/25 bg-accent/5 px-2.5 py-1.5 text-[12px] text-accent transition-colors hover:bg-accent/15"
                >
                  {ref.label}
                  <ArrowUpRight size={12} aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </motion.div>
  );
}

export default function ArchitectureDiagram() {
  const [selectedId, setSelectedId] = useState(architectureNodes[0].id);
  const selected = architectureNodes.find((n) => n.id === selectedId)!;
  const reduceMotion = useReducedMotion();

  return (
    <section id="architecture" className="grid-backdrop border-y border-line bg-black/20 py-24">
      <div className="mx-auto max-w-shell px-6">
        <SectionHeader
          index="01"
          eyebrow="Design Blueprint"
          title="How I design AI systems"
          description="Not a single product — this is the reference blueprint distilled from the real systems below. Select any layer to see its purpose, technologies, and which of my projects proves it in practice."
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          {/* Pipeline */}
          <div
            role="tablist"
            aria-label="Architecture layers"
            aria-orientation="vertical"
            className="relative flex flex-col"
          >
            {architectureNodes.map((node, i) => {
              const isActive = node.id === selectedId;
              return (
                <div key={node.id} className="flex flex-col items-stretch">
                  <motion.button
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="architecture-detail"
                    id={`arch-tab-${node.id}`}
                    type="button"
                    onClick={() => setSelectedId(node.id)}
                    onMouseEnter={() => setSelectedId(node.id)}
                    onFocus={() => setSelectedId(node.id)}
                    whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                    className={cn(
                      "focus-ring group flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-colors",
                      isActive
                        ? "border-accent/50 bg-surface-high shadow-[0_0_0_1px_rgba(232,121,249,0.25)]"
                        : "border-line bg-surface hover:border-line-strong"
                    )}
                  >
                    <div className="min-w-0">
                      <p
                        className={cn(
                          "truncate text-sm font-medium",
                          isActive ? "text-content-primary" : "text-content-secondary"
                        )}
                      >
                        {node.label}
                      </p>
                      <p className="truncate font-mono text-[11px] text-content-muted">
                        {node.sublabel}
                      </p>
                    </div>
                    <Cpu
                      size={15}
                      aria-hidden
                      className={cn(
                        "shrink-0 transition-colors",
                        isActive ? "text-accent" : "text-content-muted/50"
                      )}
                    />
                  </motion.button>

                  {i < architectureNodes.length - 1 ? (
                    <div className="flex justify-center py-0.5" aria-hidden>
                      <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                        <line
                          x1="8"
                          y1="0"
                          x2="8"
                          y2="18"
                          stroke={isActive ? "#E879F9" : "rgba(242,239,230,0.15)"}
                          strokeWidth="1.5"
                          className={isActive ? "flow-line" : undefined}
                        />
                      </svg>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          {/* Detail panel */}
          <div
            id="architecture-detail"
            role="tabpanel"
            aria-labelledby={`arch-tab-${selected.id}`}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <AnimatePresence mode="wait">
              <DetailPanel node={selected} />
            </AnimatePresence>
            <p className="mt-3 flex items-center gap-1.5 font-mono text-[11px] text-content-muted">
              <ArrowRightLeft size={12} aria-hidden />
              Hover, tap, or use arrow keys across layers to trace the pipeline.
            </p>
          </div>
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-wider text-content-muted lg:hidden">
          <ArrowDown size={12} aria-hidden /> Data flows top to bottom
        </p>
      </div>
    </section>
  );
}
