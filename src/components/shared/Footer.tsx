import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-black/30">
      <div className="mx-auto flex max-w-shell flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-content-primary">{profile.name}</p>
          <p className="text-sm text-content-muted">Full-Stack AI Engineer</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-1.5 rounded-md text-sm text-content-secondary transition-colors hover:text-content-primary"
          >
            <Linkedin size={15} aria-hidden /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-1.5 rounded-md text-sm text-content-secondary transition-colors hover:text-content-primary"
          >
            <Github size={15} aria-hidden /> GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring inline-flex items-center gap-1.5 rounded-md text-sm text-content-secondary transition-colors hover:text-content-primary"
          >
            <Mail size={15} aria-hidden /> Email
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="focus-ring inline-flex items-center gap-1.5 rounded-md text-sm text-content-secondary transition-colors hover:text-content-primary"
          >
            <FileDown size={15} aria-hidden /> Resume
          </a>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-shell flex-col gap-2 px-6 py-5 font-mono text-xs text-content-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, and
            systems thinking.
          </p>
          <p>
            PORTFOLIO_STATUS:{" "}
            <span className="text-accent-success">OPERATIONAL</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
