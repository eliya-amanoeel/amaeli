import { SectionLabel } from "./SectionLabel";
import { useT } from "../../context/LanguageContext";

const entries = [
  { employer: "CAG Arete AB", period: "Jun 2019 – Present" },
  { employer: "CGI Sverige AB", period: "Aug 2013 – Jun 2019" },
];

export function Employment() {
  const { t } = useT();

  return (
    <section id="employment" style={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "64px" }} className="section-pad fade-section">
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <SectionLabel number="07" label={t.employment.sectionLabel} />
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {entries.map((entry) => (
            <div key={entry.employer} style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", fontWeight: 500, color: "var(--app-fg)", margin: 0, minWidth: "160px" }}>
                {entry.employer}
              </p>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "var(--app-muted)", margin: 0 }}>
                {entry.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
