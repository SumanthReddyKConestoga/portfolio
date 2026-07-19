import type { Project } from "@/types/portfolio";
import { pillsafe } from "@/data/projects/pillsafe";
import { pathointern } from "@/data/projects/pathointern";
import { sentineledu } from "@/data/projects/sentineledu";
import { agenticPlatform } from "@/data/projects/agentic-platform";

// One file per project lives in src/data/projects/ — edit those to change
// content. This index controls ordering and lookups.

export const projects: Project[] = [pillsafe, pathointern, sentineledu, agenticPlatform];

export const featuredProjects = projects.filter((p) => p.featured);
export const secondaryProjects = projects.filter((p) => !p.featured);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
