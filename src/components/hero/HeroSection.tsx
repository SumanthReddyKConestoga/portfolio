"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile, credibilityCards } from "@/data/portfolio";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_0%,rgba(232,121,249,0.1),transparent)]"
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <motion.div variants={fadeUp} className="mb-5">
          <span className="relative inline-block rounded-full bg-gradient-to-b from-accent/50 to-accent/10 p-[3px] shadow-[0_0_40px_-10px_rgba(232,121,249,0.5)]">
            <Image
              src="/images/sumanth.jpg"
              alt="Sumanth Reddy Konannagari"
              width={160}
              height={160}
              priority
              className="h-32 w-32 rounded-full border-2 border-base-950 object-cover sm:h-40 sm:w-40"
            />
          </span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mb-2 font-display text-2xl font-bold tracking-tight text-content-primary sm:text-3xl"
        >
          Sumanth Reddy Konannagari
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent"
        >
          Full-Stack AI Engineer
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-content-secondary"
        >
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent-success" aria-hidden />
          {profile.availability}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-display text-[2.6rem] font-bold leading-[1.1] tracking-tight text-content-primary sm:text-6xl"
        >
          I engineer intelligent full-stack systems that{" "}
          <span className="text-accent">reason</span>, <span className="text-accent">scale</span>,
          and ship.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base leading-relaxed text-content-secondary sm:text-lg"
        >
          {profile.heroDescription}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="focus-ring inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-base-950 shadow-[0_0_28px_-8px_rgba(232,121,249,0.6)] transition-all hover:shadow-[0_0_36px_-6px_rgba(232,121,249,0.75)]"
          >
            Explore My Work <ArrowRight size={16} aria-hidden />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="focus-ring inline-flex items-center gap-2 rounded-xl border border-line-strong bg-surface px-6 py-3 text-sm font-medium text-content-primary transition-colors hover:border-accent/50"
          >
            <FileDown size={16} aria-hidden /> Download Resume
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-content-muted"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} aria-hidden /> {profile.location}
          </span>
          <span>{profile.workEligibility}</span>
          <span className="flex items-center gap-1">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="focus-ring rounded-lg p-1.5 transition-colors hover:text-content-primary"
            >
              <Github size={16} aria-hidden />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="focus-ring rounded-lg p-1.5 transition-colors hover:text-content-primary"
            >
              <Linkedin size={16} aria-hidden />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email Sumanth"
              className="focus-ring rounded-lg p-1.5 transition-colors hover:text-content-primary"
            >
              <Mail size={16} aria-hidden />
            </a>
          </span>
        </motion.div>

        <motion.ul
          variants={fadeUp}
          className="mt-8 flex flex-wrap justify-center gap-2"
          aria-label="Core technologies"
        >
          {profile.heroBadges.map((badge) => (
            <li
              key={badge}
              className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[11px] tracking-wider text-content-secondary"
            >
              {badge}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Credibility strip */}
      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto mt-20 grid max-w-shell gap-3 px-6 sm:grid-cols-2 lg:grid-cols-5"
        aria-label="Professional credibility"
      >
        {credibilityCards.map((card) => (
          <motion.li
            key={card.title}
            variants={fadeUp}
            className="rounded-xl border border-line bg-surface p-4 transition-colors hover:border-accent/30"
          >
            <h3 className="text-sm font-semibold text-content-primary">{card.title}</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-content-muted">
              {card.description}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
