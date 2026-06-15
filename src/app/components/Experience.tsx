import { SectionLabel } from "./SectionLabel";
import { useT } from "../../context/LanguageContext";

const dates = [
  "2015 – 2018",
  "Apr – Nov 2016",
  "May – Jun 2016",
  "2015 – 2016",
  "2013 – 2019",
  "2013 – 2014",
  "2012 – 2013",
];

const clients = [
  "Stockholm Stad · CGI Sverige",
  "Skatteverket · CGI Sverige",
  "Valmyndigheten · CGI Sverige",
  "CGI Collaboration Platform (CCP) · CGI Sverige",
  "IVO — Inspektionen för Vård och Omsorg · CGI Sverige",
  "Alecta · CGI Sverige",
  "Cybercom",
];

export function Experience() {
  const { t } = useT();

  return (
    <section id="experience" className="section-pad fade-section" style={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "64px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <SectionLabel number="04" label={t.experience.sectionLabel} />
        <div style={{ borderLeft: "1px solid var(--app-border-strong)", paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "32px" }}>
          {t.experience.entries.map((entry, i) => (
            <div key={i} style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: "-29px", top: "6px", width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "var(--app-border-strong)" }} />
              <span className="experience-date" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "var(--app-accent)", display: "block", marginBottom: "4px" }}>
                {dates[i]}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 500, color: "var(--app-fg)" }}>
                  {clients[i]}
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
