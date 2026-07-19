"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ index, eyebrow, title, description }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mb-12"
    >
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        <span className="mr-2 text-content-muted">{index}</span>
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-content-primary sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-content-secondary">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
