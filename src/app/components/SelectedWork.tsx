import { useState } from "react";
import { SectionLabel } from "./SectionLabel";
import { TechTag } from "./TechTag";
import { useT } from "../../context/LanguageContext";

interface WorkCard {
  id: string;
  client: string;
  period: string;
  tags: string[];
}

const work: WorkCard[] = [
  {
    id: "forsvarsmakten-fullstack",
    client: "Försvarsmakten",
    period: "2024",
    tags: ["C#", ".NET", "Angular", "MVC", "Azure DevOps", "GIT"],
  },
  {
    id: "forsvarsmakten-sharepoint",
    client: "Försvarsmakten",
    period: "2019 – present",
    tags: ["C#", "PowerShell", "Azure DevOps", "TDD", "SpecFlow", "SharePoint SE", "SharePoint 2016"],
  },
  {
    id: "trafikverket",
    client: "Trafikverket",
    period: "2016 – 2019",
    tags: ["C#", "CSOM", "PowerShell", "XML", "TFS", "SharePoint 2010", "SharePoint 2016"],
  },
  {
    id: "receptkontroll",
    client: "Receptkontroll — IVO",
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
