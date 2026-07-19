"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "Home" },
  { id: "architecture", label: "Architecture" },
  { id: "projects", label: "Projects" },
  { id: "capabilities", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function FloatingNavigation() {
  const active = useActiveSection(links.map((l) => l.id));
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.div
        initial={reduceMotion ? false : { y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 240, damping: 26 }}
        className={cn(
          "w-full max-w-5xl rounded-2xl bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-transparent p-px transition-shadow duration-300",
          scrolled ? "shadow-[0_8px_40px_-8px_rgba(0,0,0,0.6)]" : "shadow-[0_4px_24px_-8px_rgba(0,0,0,0.4)]"
        )}
      >
        <nav
          aria-label="Primary"
          className="flex items-center justify-between gap-4 rounded-[15px] bg-[#0D1233]/75 px-3 py-2 backdrop-blur-2xl"
        >
          {/* Brand */}
          <a
            href="#home"
            className="focus-ring group flex shrink-0 items-center gap-2.5 rounded-xl px-1.5 py-1"
            aria-label="Sumanth Reddy — back to top"
          >
            <span
              aria-hidden
              className="flex h-8 w-8 items-center justify-center rounded-[10px] border border-accent/25 bg-gradient-to-br from-accent/20 to-accent/5 font-display text-[11px] font-bold text-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors group-hover:border-accent/40"
            >
              SR
            </span>
            <span className="hidden whitespace-nowrap font-display text-sm font-bold tracking-tight text-content-primary md:inline lg:hidden xl:inline">
              Sumanth Reddy
            </span>
          </a>

          {/* Links */}
          <ul className="hidden items-center lg:flex">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <li key={l.id} className="relative">
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 420, damping: 34 }
                      }
                      className="absolute inset-0 rounded-xl bg-white/[0.06] shadow-[inset_0_0_0_1px_rgba(232,121,249,0.22),0_0_18px_-6px_rgba(232,121,249,0.35)]"
                      aria-hidden
                    />
                  ) : null}
                  <a
                    href={`#${l.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "focus-ring relative z-10 block rounded-xl px-3.5 py-2 text-[13px] transition-colors duration-200",
                      isActive
                        ? "font-medium text-accent"
                        : "text-content-secondary hover:text-content-primary"
                    )}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-1">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="focus-ring hidden rounded-xl p-2 text-content-muted transition-colors hover:bg-white/[0.05] hover:text-content-primary sm:inline-flex"
            >
              <Github size={16} aria-hidden />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="focus-ring hidden rounded-xl p-2 text-content-muted transition-colors hover:bg-white/[0.05] hover:text-content-primary sm:inline-flex"
            >
              <Linkedin size={16} aria-hidden />
            </a>
            <span aria-hidden className="mx-1.5 hidden h-5 w-px bg-white/10 sm:block" />
            <a
              href={profile.resumeUrl}
              download
              className="focus-ring group inline-flex items-center gap-1 rounded-xl bg-white px-4 py-2 text-[13px] font-semibold text-base-950 shadow-[0_0_22px_-6px_rgba(232,121,249,0.55)] transition-all hover:shadow-[0_0_28px_-4px_rgba(232,121,249,0.7)]"
            >
              Resume
              <ArrowUpRight
                size={14}
                aria-hidden
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="focus-ring inline-flex rounded-xl p-2 text-content-secondary hover:bg-white/[0.05] hover:text-content-primary lg:hidden"
            >
              {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open ? (
            <motion.div
              id="mobile-menu"
              initial={reduceMotion ? false : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.16 }}
              className="mt-2 rounded-2xl border border-white/[0.07] bg-[#0D1233]/95 p-2 backdrop-blur-2xl lg:hidden"
            >
              <ul>
                {links.map((l) => (
                  <li key={l.id}>
                    <a
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "focus-ring block rounded-xl px-4 py-3 text-sm transition-colors",
                        active === l.id
                          ? "bg-white/[0.06] font-medium text-accent shadow-[inset_0_0_0_1px_rgba(232,121,249,0.22)]"
                          : "text-content-secondary hover:text-content-primary"
                      )}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
