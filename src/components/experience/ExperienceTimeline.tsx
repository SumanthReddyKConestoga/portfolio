"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, GraduationCap, Telescope } from "lucide-react";
import { experience, education, certifications } from "@/data/experience";
import { currentlyExploring } from "@/data/portfolio";
import { methodology } from "@/data/capabilities";
import SectionHeader from "@/components/shared/SectionHeader";
import OrgLogo from "@/components/shared/OrgLogo";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-shell px-6">
        <SectionHeader
          index="04"
          eyebrow="Experience"
          title="Where the systems shipped"
        />

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Timeline */}
          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative space-y-6 border-l border-line pl-6"
          >
            {experience.map((entry) => (
              <motion.li key={`${entry.company}-${entry.role}`} variants={fadeUp} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full border border-accent bg-base-950"
                />
                <div className="rounded-xl border border-line bg-surface p-5">
                  <div className="flex items-start gap-3">
                    <OrgLogo src={entry.logo} name={entry.company} size={40} />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-semibold text-content-primary">{entry.role}</h3>
                        <p className="font-mono text-[11px] uppercase tracking-wider text-content-muted">
                          {entry.period}
                        </p>
                      </div>
                      <p className="mt-0.5 text-sm text-accent">{entry.company}</p>
                      {entry.tagline ? (
                        <p className="mt-1 text-[12px] italic leading-snug text-content-muted">
                          {entry.tagline}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {entry.focus.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[13px] leading-relaxed text-content-secondary"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/70" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </motion.ol>

          {/* Education + exploring + methodology */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4"
          >
            <motion.div variants={fadeUp} className="rounded-xl border border-line bg-surface p-5">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-content-primary">
                <GraduationCap size={16} aria-hidden className="text-accent" /> Education
              </h3>
              <ul className="mt-3 space-y-3">
                {education.map((entry) => (
                  <li key={entry.program} className="flex items-start gap-3">
                    <OrgLogo src={entry.logo} name={entry.institution} size={38} />
                    <div className="min-w-0">
                      <p className="text-[13px] font-medium leading-snug text-content-primary">
                        {entry.program}
                      </p>
                      <p className="font-mono text-[11px] text-content-muted">
                        {entry.institution} · {entry.period}
                        {entry.note ? <span className="text-accent"> · {entry.note}</span> : null}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-xl border border-line bg-surface p-5">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-content-primary">
                <Award size={16} aria-hidden className="text-accent" /> Certifications
              </h3>
              <ul className="mt-4 space-y-3">
                {certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="rounded-xl border border-line bg-surface-raised p-3.5 transition-colors hover:border-accent/30"
                  >
                    <div className="flex items-start gap-3">
                      <OrgLogo src={cert.logo} name={cert.issuer} size={44} />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold leading-snug text-content-primary">
                          {cert.verifyUrl ? (
                            <a
                              href={cert.verifyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="focus-ring inline-flex items-start gap-1.5 rounded-sm transition-colors hover:text-accent"
                            >
                              {cert.name}
                              <BadgeCheck size={15} aria-hidden className="mt-0.5 shrink-0 text-accent" />
                            </a>
                          ) : (
                            cert.name
                          )}
                        </p>
                        <p className="mt-1 font-mono text-xs text-content-muted">
                          {cert.issuer} · {cert.date}
                        </p>
                        {cert.credentialId ? (
                          <p className="font-mono text-[11px] text-content-muted/80">
                            ID: {cert.credentialId}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-xl border border-line bg-surface p-5">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-content-primary">
                <Telescope size={16} aria-hidden className="text-accent" /> Currently exploring
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {currentlyExploring.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-md border border-line bg-surface-raised px-2.5 py-1 font-mono text-[11px] text-content-secondary"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-xl border border-line bg-surface p-5">
              <h3 className="text-sm font-semibold text-content-primary">How I engineer</h3>
              <ol className="mt-3 space-y-1">
                {methodology.map((step) => (
                  <li key={step.step}>
                    <details className="group rounded-lg open:bg-surface-raised">
                      <summary className="focus-ring flex cursor-pointer list-none items-center gap-3 rounded-lg px-2 py-2 text-[13px] text-content-secondary transition-colors hover:text-content-primary [&::-webkit-details-marker]:hidden">
                        <span className="font-mono text-[11px] text-accent">
                          {String(step.step).padStart(2, "0")}
                        </span>
                        {step.title}
                      </summary>
                      <p className="px-2 pb-3 pl-9 text-[13px] leading-relaxed text-content-muted">
                        {step.detail}
                      </p>
                    </details>
                  </li>
                ))}
              </ol>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
