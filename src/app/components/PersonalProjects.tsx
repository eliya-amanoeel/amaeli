import { useState } from "react";
import { SectionLabel } from "./SectionLabel";
import { TechTag } from "./TechTag";

interface Project {
  id: string;
  name: string;
  url?: string;
  status: string;
  statusColor: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: "marnarsay",
    name: "kor.marnarsay.se",
    url: "https://kor.marnarsay.se",
    status: "LIVE",
    statusColor: "var(--app-accent)",
    description: "A complete web application for a local choir to create, store, and edit hymns, and assemble printed programmes for services. Built solo in Blazor with a custom data model for hymn structure and programme composition. Actively used.",
    tags: ["Blazor", "C#", ".NET", "Figma", "GitHub Copilot"],
  },
  {
    id: "voltio",
    name: "voltioel.se",
    url: "https://voltioel.se",
    status: "LIVE",
    statusColor: "var(--app-accent)",
    description: "Marketing website for a startup founded by two electricians. Designed and built end-to-end — from layout and content to deployment.",
    tags: ["React", "Figma", "GitHub Copilot"],
  },
  {
    id: "firmware",
    name: "Hardware & Mobile — Stealth",
    status: "IN PROGRESS",
    statusColor: "var(--app-blue)",
    description: "A product-stage venture in the field of outdoor sports and hunting dogs — co-developed with a partner. Involves custom hardware with firmware written in C++, paired with a companion mobile application. AI models are central to how this is being built, enabling two people to work effectively across embedded systems and mobile development.",
    tags: ["C++", "Mobile", "Figma", "OpenAI API", "Claude / Anthropic"],
  },
];

export function PersonalProjects() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="projects" style={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "64px" }} className="section-pad fade-section">
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <SectionLabel number="05" label="PERSONAL PROJECTS" />
        <div>
          {projects.map((project, i) => (
            <div key={project.id}>
              <div
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ padding: "32px 16px", backgroundColor: hovered === project.id ? "var(--app-card-hover)" : "transparent", transition: "background-color 150ms ease", cursor: "default" }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px" }}>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "22px", fontWeight: 500, lineHeight: 1.3, color: "var(--app-fg)", textDecoration: "none", transition: "color 150ms ease" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--app-blue)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--app-fg)")}
                    >
                      {project.name} ↗
                    </a>
                  ) : (
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "22px", fontWeight: 500, lineHeight: 1.3, color: "var(--app-fg)" }}>
                      {project.name}
                    </span>
                  )}
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: project.statusColor, letterSpacing: "0.05em" }}>
                    {project.status}
                  </span>
                </div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: 1.7, color: "var(--app-muted)", maxWidth: "600px", margin: "0 0 20px 0" }}>
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.tags.map((tag) => (
                    <TechTag key={tag} label={tag} />
                  ))}
                </div>
              </div>
              {i < projects.length - 1 && <div style={{ height: "1px", backgroundColor: "var(--app-border)" }} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
