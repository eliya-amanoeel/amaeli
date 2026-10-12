import { useState } from "react";
import { SectionLabel } from "./SectionLabel";
import { TechTag } from "./TechTag";
import { useT } from "../../context/LanguageContext";

interface WorkCard {
  id: string;
  client: string;
  period: string;
  tags: string[];
  links?: Array<{ kind: "live" | "source"; url: string }>;
}

const work: WorkCard[] = [
  {
    id: "forsvarsmakten-inventeringsportalen",
    client: "Försvarsmakten — Inventeringsportalen",
    period: "2026 – present",
    tags: ["Claude", "C#", ".NET 10", "Blazor", "EF Core", "SQL Server", "Clean Architecture", "Active Directory", "Azure DevOps", "Playwright"],
  },
  {
    id: "akerogarden",
    client: "Åkerögården — Booking & Admin System",
    period: "2025 – present",
    tags: ["Claude Code", "C#", ".NET 10", "Blazor", "EF Core", "PostgreSQL", "Azure", "Bicep", "Azure DevOps", "Playwright"],
    links: [
      { kind: "live", url: "https://akerogarden.se" },
      { kind: "source", url: "https://github.com/eliya-amanoeel/akerogarden" },
    ],
  },
  {
    id: "forsvarsmakten-fullstack",
    client: "Försvarsmakten — Mitt Försvarsmakten",
    period: "2024",
    tags: ["C#", ".NET", "Angular", "MVC", "Playwright", "Azure DevOps", "Git"],
  },
  {
    id: "trafikverket",
    client: "Trafikverket",
    period: "2016 – 2019",
    tags: ["C#", ".NET Framework", "WinForms", "CSOM", "XML", "PowerShell", "TFS", "SharePoint"],
  },
  {
    id: "receptkontroll",
    client: "ReceptKontroll — IVO",
    period: "2013 – 2019",
    tags: ["C#", ".NET", "BizTalk", "PowerShell", "JavaScript", "TFS", "SharePoint 2007"],
  },
];

export function SelectedWork() {
  const { t } = useT();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="work" style={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "64px" }} className="section-pad fade-section">
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <SectionLabel number="02" label={t.selectedWork.sectionLabel} />
        <div>
          {work.map((card, i) => {
            const entry = t.selectedWork.entries[card.id];
            return (
              <div key={card.id} className="print-entry">
                <div
                  id={`work-${card.id}`}
                  onMouseEnter={() => setHovered(card.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ padding: "32px 16px", backgroundColor: hovered === card.id ? "var(--app-card-hover)" : "transparent", transition: "background-color 150ms ease", cursor: "default" }}
                >
                  <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "22px", fontWeight: 500, lineHeight: 1.3, color: "var(--app-fg)", margin: "0 0 8px 0" }}>
                    {card.client}
                  </h2>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", fontWeight: 400, lineHeight: 1.5, color: "var(--app-muted)", margin: "0 0 16px 0" }}>
                    {entry?.period ?? card.period} · {entry?.role}
                  </p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: 1.7, color: "var(--app-muted)", maxWidth: "600px", margin: "0 0 20px 0" }}>
                    {entry?.description}
                  </p>
                  {card.links && (
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", lineHeight: 1.5, color: "var(--app-muted)", margin: "0 0 20px 0" }}>
                      {card.links.map((link, j) => (
                        <span key={link.url}>
                          {j > 0 && " · "}
                          {t.selectedWork.linkLabels[link.kind]}:{" "}
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--app-fg)", textDecoration: "none", transition: "color 150ms ease" }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--app-blue)")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--app-fg)")}
                          >
                            {link.url.replace(/^https?:\/\//, "")} ↗
                          </a>
                        </span>
                      ))}
                    </p>
                  )}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {card.tags.map((tag) => (
                      <TechTag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
                {i < work.length - 1 && <div style={{ height: "1px", backgroundColor: "var(--app-border)" }} />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
