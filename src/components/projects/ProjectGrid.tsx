"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import SectionHeader from "@/components/shared/SectionHeader";
import ProjectCard from "@/components/projects/ProjectCard";
import { stagger, viewportOnce } from "@/lib/animations";

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-shell px-6">
        <SectionHeader
          index="02"
          eyebrow="Featured Work"
          title="Engineering case studies"
          description="Real systems built end to end — each with a plain-English summary and a full case study covering architecture, trade-offs, and lessons learned."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
