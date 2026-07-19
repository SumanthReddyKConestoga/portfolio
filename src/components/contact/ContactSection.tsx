"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Check, Copy, FileDown, Github, Linkedin, Loader2, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import SectionHeader from "@/components/shared/SectionHeader";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  opportunityType: z.enum(
    ["full-stack", "ai-ml", "backend", "cloud-mlops", "contract", "other"],
    { errorMap: () => ({ message: "Please choose an opportunity type" }) }
  ),
  message: z.string().min(10, "Please add a short message (at least 10 characters)"),
  // Honeypot — real users never fill this.
  website: z.string().max(0).optional().or(z.literal("")),
});

type ContactForm = z.infer<typeof contactSchema>;

const opportunityOptions = [
  { value: "full-stack", label: "Full-Stack Engineering" },
  { value: "ai-ml", label: "AI / ML Engineering" },
  { value: "backend", label: "Backend Development" },
  { value: "cloud-mlops", label: "Cloud / MLOps" },
  { value: "contract", label: "Contract / Freelance" },
  { value: "other", label: "Other" },
];

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const onSubmit = async (data: ContactForm) => {
    if (data.website) return; // honeypot tripped — silently drop
    setStatus("idle");
    try {
      if (!WEB3FORMS_KEY) {
        // Form service not configured — open Gmail compose prefilled (works without a mail app).
        const subject = encodeURIComponent(`Portfolio contact from ${data.name}`);
        const body = encodeURIComponent(
          `${data.message}\n\n— ${data.name} (${data.email})${data.company ? `, ${data.company}` : ""}`
        );
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${subject}&body=${body}`,
          "_blank",
          "noopener,noreferrer"
        );
        setStatus("success");
        reset();
        return;
      }
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio contact from ${data.name}`,
          name: data.name,
          email: data.email,
          company: data.company ?? "",
          opportunity_type: data.opportunityType,
          message: data.message,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "focus-ring w-full rounded-lg border border-line bg-surface-raised px-3.5 py-2.5 text-sm text-content-primary placeholder:text-content-muted/70";
  const labelClass = "mb-1.5 block text-[13px] font-medium text-content-secondary";
  const errorClass = "mt-1 text-xs text-red-400";

  return (
    <section id="contact" className="border-t border-line bg-black/20 py-24">
      <div className="mx-auto max-w-shell px-6">
        <SectionHeader
          index="05"
          eyebrow="Contact"
          title="Let's build systems that matter."
          description="I am open to full-stack software engineering, AI/ML engineering, backend development, cloud, and MLOps opportunities."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-3"
          >
            <motion.div variants={fadeUp} className="rounded-xl border border-line bg-surface p-5">
              <p className="font-mono text-[11px] uppercase tracking-wider text-content-muted">
                Direct
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent("Opportunity for Sumanth Reddy")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-base-950 transition-transform hover:scale-[1.02]"
                >
                  <Mail size={15} aria-hidden /> Email me
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="focus-ring inline-flex items-center gap-2 rounded-lg border border-line bg-surface-raised px-4 py-2 text-sm text-content-secondary transition-colors hover:text-content-primary"
                >
                  {copied ? (
                    <>
                      <Check size={15} aria-hidden className="text-accent-success" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy size={15} aria-hidden /> Copy email
                    </>
                  )}
                </button>
              </div>
              <p className="mt-3 font-mono text-[13px] text-content-secondary">{profile.email}</p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-xl border border-line bg-surface p-5">
              <p className="font-mono text-[11px] uppercase tracking-wider text-content-muted">
                Profiles
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-lg border border-line bg-surface-raised px-4 py-2 text-sm text-content-secondary transition-colors hover:text-content-primary"
                >
                  <Linkedin size={15} aria-hidden /> LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-lg border border-line bg-surface-raised px-4 py-2 text-sm text-content-secondary transition-colors hover:text-content-primary"
                >
                  <Github size={15} aria-hidden /> GitHub
                </a>
                <a
                  href={profile.resumeUrl}
                  download
                  className="focus-ring inline-flex items-center gap-2 rounded-lg border border-line bg-surface-raised px-4 py-2 text-sm text-content-secondary transition-colors hover:text-content-primary"
                >
                  <FileDown size={15} aria-hidden /> Resume
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-xl border border-line bg-surface p-5">
              <p className="flex items-center gap-1.5 text-sm text-content-secondary">
                <MapPin size={14} aria-hidden className="text-accent" />
                {profile.location} — {profile.workEligibility}
              </p>
              <p className="mt-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-content-muted">
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent-success" aria-hidden />
                {profile.availability}
              </p>
            </motion.div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="rounded-2xl border border-line bg-surface p-6"
            aria-label="Contact form"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={inputClass}
                  {...register("name")}
                />
                {errors.name ? (
                  <p id="contact-name-error" role="alert" className={errorClass}>
                    {errors.name.message}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="contact-email" className={labelClass}>
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={inputClass}
                  {...register("email")}
                />
                {errors.email ? (
                  <p id="contact-email-error" role="alert" className={errorClass}>
                    {errors.email.message}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="contact-company" className={labelClass}>
                  Company <span className="text-content-muted">(optional)</span>
                </label>
                <input
                  id="contact-company"
                  type="text"
                  autoComplete="organization"
                  className={inputClass}
                  {...register("company")}
                />
              </div>
              <div>
                <label htmlFor="contact-type" className={labelClass}>
                  Opportunity type
                </label>
                <select
                  id="contact-type"
                  aria-invalid={!!errors.opportunityType}
                  aria-describedby={errors.opportunityType ? "contact-type-error" : undefined}
                  className={inputClass}
                  defaultValue=""
                  {...register("opportunityType")}
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  {opportunityOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.opportunityType ? (
                  <p id="contact-type-error" role="alert" className={errorClass}>
                    {errors.opportunityType.message}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="contact-message" className={labelClass}>
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={inputClass}
                {...register("message")}
              />
              {errors.message ? (
                <p id="contact-message-error" role="alert" className={errorClass}>
                  {errors.message.message}
                </p>
              ) : null}
            </div>

            {/* Honeypot field — hidden from real users */}
            <div aria-hidden="true" className="absolute -left-[9999px] top-auto">
              <label htmlFor="contact-website">Leave this field empty</label>
              <input id="contact-website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
            </div>

            <div className="mt-5 flex items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="focus-ring inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-base-950 transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={15} aria-hidden className="animate-spin" /> Sending…
                  </>
                ) : (
                  "Send message"
                )}
              </button>

              <div aria-live="polite">
                {status === "success" ? (
                  <p className="flex items-center gap-1.5 text-sm text-accent-success">
                    <Check size={15} aria-hidden /> Message sent — I will get back to you soon.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p role="alert" className="text-sm text-red-400">
                    Something went wrong. Email me directly at {profile.email}.
                  </p>
                ) : null}
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
