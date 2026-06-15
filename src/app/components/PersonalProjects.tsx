import { useState } from "react";
import { SectionLabel } from "./SectionLabel";
import { TechTag } from "./TechTag";
import { useT } from "../../context/LanguageContext";

interface ProjectMeta {
  id: string;
  name: string;
  url?: string;
  statusColor: string;
  tags: string[];
}

const projectsMeta: ProjectMeta[] = [
  {
    id: "marnarsay",
    name: "kor.marnarsay.se",
    url: "https://kor.marnarsay.se",
    statusColor: "var(--app-accent)",
    tags: ["Blazor", "C#", ".NET", "Figma", "GitHub Copilot"],
  },
  {
    id: "voltio",
    name: "voltioel.se",
    url: "https://voltioel.se",
    statusColor: "var(--app-accent)",
    tags: ["React", "Figma", "GitHub Copilot"],
  },
  {
    id: "firmware",
    name: "Hardware & Mobile — Stealth",
    statusColor: "var(--app-blue)",
    tags: ["C++", "Flutter", "Figma", "OpenAI API", "Claude / Anthropic"],
  },
];

export function PersonalProjects() {
  const { t } = useT();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="projects" style={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "64px" }} className="section-pad fade-section">
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <SectionLabel number="05" label={t.personalProjects.sectionLabel} />
        <div>
          {projectsMeta.map((project, i) => {
            const entry = t.personalProjects.entries[project.id];
            return (
              <div key={project.id}>
                <div
                  onMouseEnter={() => setHovered(project.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ padding: "32px 16px", backgroundColor: hovered === project.id ? "var(--app-card-hover)" : "transparent", transition: "background-color 150ms ease", cursor: "default" }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "4px" }}>
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
                      {entry?.status}
                    </span>
                  </div>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "var(--app-muted)", letterSpacing: "0.04em", margin: "0 0 12px 0" }}>
                    {t.personalProjects.ownershipNote}
                  </p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: 1.7, color: "var(--app-muted)", maxWidth: "600px", margin: "0 0 20px 0" }}>
                    {entry?.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {project.tags.map((tag) => (
                      <TechTag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
                {i < projectsMeta.length - 1 && <div style={{ height: "1px", backgroundColor: "var(--app-border)" }} />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
