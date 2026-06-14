import { SectionLabel } from "./SectionLabel";

interface Entry {
  dates: string;
  client: string;
  role: string;
  description?: string;
}

const entries: Entry[] = [
  {
    dates: "2015 – 2018",
    client: "Stockholm Stad · CGI Sverige",
    role: ".NET Developer",
    description: "Built and maintained custom .NET solutions for municipal digital services across the City of Stockholm.",
  },
  {
    dates: "Apr – Nov 2016",
    client: "Skatteverket · CGI Sverige",
    role: "PowerShell Developer",
    description: "Automated operational workflows via PowerShell for Sweden's national tax authority.",
  },
  {
    dates: "May – Jun 2016",
    client: "Valmyndigheten · CGI Sverige",
    role: "Requirements Analyst",
    description: "Gathered and structured technical requirements for the Swedish Election Authority.",
  },
  {
    dates: "2015 – 2016",
    client: "CGI Collaboration Platform (CCP) · CGI Sverige",
    role: "SharePoint Online Developer",
    description: "Developed SharePoint Online features for CGI's internal global collaboration platform.",
  },
  {
    dates: "2013 – 2019",
    client: "IVO — Inspektionen för Vård och Omsorg · CGI Sverige",
    role: "SharePoint Developer",
    description: "Longest engagement — delivered and maintained SharePoint solutions for the national healthcare and social care inspectorate.",
  },
  {
    dates: "2013 – 2014",
    client: "Alecta · CGI Sverige",
    role: "SharePoint Consultant & On-site Support",
    description: "On-site SharePoint support and consultation for one of Sweden's largest occupational pension providers.",
  },
  {
    dates: "2012 – 2013",
    client: "Cybercom",
    role: "Trainee SharePoint Developer",
    description: "First professional role; built SharePoint solutions and grew core .NET development skills.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-pad fade-section" style={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "64px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <SectionLabel number="04" label="EXPERIENCE" />
        <div style={{ borderLeft: "1px solid var(--app-border-strong)", paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "32px" }}>
          {entries.map((entry, i) => (
            <div key={i} style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: "-29px", top: "6px", width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "var(--app-border-strong)" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "var(--app-accent)", display: "block", marginBottom: "4px" }}>
                {entry.dates}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 500, color: "var(--app-fg)" }}>
                  {entry.client}
                </span>
              </div>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "var(--app-muted)" }}>
                {entry.role}
              </span>
              {entry.description && (
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "var(--app-subtle)", lineHeight: 1.6, margin: "6px 0 0 0" }}>
                  {entry.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
