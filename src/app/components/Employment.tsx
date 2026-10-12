import { SectionLabel } from "./SectionLabel";
import { useT } from "../../context/LanguageContext";

const employers = ["CAG Arete AB", "CGI Sverige AB"];

export function Employment() {
  const { t } = useT();

  return (
    <section id="employment" style={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "64px" }} className="section-pad fade-section">
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <SectionLabel number="07" label={t.employment.sectionLabel} />
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {employers.map((employer, i) => (
            <div key={employer} style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", fontWeight: 500, color: "var(--app-fg)", margin: 0, minWidth: "160px" }}>
                {employer}
              </p>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "var(--app-muted)", margin: 0 }}>
                {t.employment.periods[i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
