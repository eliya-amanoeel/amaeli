import { useState } from "react";
import { SectionLabel } from "./SectionLabel";
import { TechTag } from "./TechTag";

interface WorkCard {
  id: string;
  client: string;
  period: string;
  role: string;
  description: string;
  tags: string[];
}

const work: WorkCard[] = [
  {
    id: "forsvarsmakten-fullstack",
    client: "Försvarsmakten",
    period: "2024",
    role: "Fullstack .NET Developer",
    description: "Developed features across the full stack of Mitt Försvarsmakten — a large internal HR application used across the Swedish Armed Forces. Worked in a Scrum team with end-to-end responsibility: picking up requirements, writing code, and shipping to production.",
    tags: ["C#", ".NET", "Angular", "MVC", "Azure DevOps", "GIT"],
  },
  {
    id: "forsvarsmakten-sharepoint",
    client: "Försvarsmakten",
    period: "2019 – present",
    role: "SharePoint Developer",
    description: "Developed and shipped new functionality across a large SharePoint platform, and led the technical migration from SharePoint 2016 to SharePoint Subscription Edition — including designing the migration approach, writing the tooling, and executing the transition without disrupting live services.",
    tags: ["SharePoint SE", "SharePoint 2016", "C#", "PowerShell", "Azure DevOps", "TDD", "SpecFlow"],
  },
  {
    id: "trafikverket",
    client: "Trafikverket",
    period: "2016 – 2019",
    role: "SharePoint Developer & Migration Architect",
    description: "Designed and built a custom migration platform from scratch to move Trafikverket's SharePoint environments from 2010 to 2016. Architected and coded the full pipeline — export scripts, XML transformation layers, and import tooling — that handled all content, structure, and metadata across multiple complex environments.",
    tags: ["SharePoint 2010", "SharePoint 2016", "C#", "CSOM", "PowerShell", "XML", "TFS"],
  },
  {
    id: "receptkontroll",
    client: "Receptkontroll — IVO",
    period: "2013 – 2019",
    role: ".NET & SharePoint Developer",
    description: "Lead developer on ReceptKontroll — a platform built for the Swedish Health and Social Care Inspectorate (IVO) to monitor narcotic prescriptions and detect potential over-prescribing. Developed new features in C# on SharePoint Server 2007, built and maintained the BizTalk integration layer connecting to the Swedish eHealth Agency, and owned the full release cycle over six years.",
    tags: ["SharePoint 2007", "C#", ".NET", "BizTalk", "PowerShell", "JavaScript", "TFS"],
  },
];

export function SelectedWork() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="work" style={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "96px" }} className="section-pad">
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <SectionLabel number="01" label="SELECTED WORK" />
        <div>
          {work.map((card, i) => (
            <div key={card.id}>
              <div
                id={`work-${card.id}`}
                onMouseEnter={() => setHovered(card.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ padding: "32px 16px", backgroundColor: hovered === card.id ? "#1C1E21" : "transparent", transition: "background-color 150ms ease", cursor: "default" }}
              >
                <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "22px", fontWeight: 500, lineHeight: 1.3, color: "#F0EDE8", margin: "0 0 8px 0" }}>
                  {card.client}
                </h3>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", fontWeight: 400, lineHeight: 1.5, color: "#8C8985", margin: "0 0 16px 0" }}>
                  {card.period} · {card.role}
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: 1.7, color: "#8C8985", maxWidth: "600px", margin: "0 0 20px 0" }}>
                  {card.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {card.tags.map((tag) => (
                    <TechTag key={tag} label={tag} />
                  ))}
                </div>
              </div>
              {i < work.length - 1 && <div style={{ height: "1px", backgroundColor: "#1F2124" }} />}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .section-pad { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </section>
  );
}
