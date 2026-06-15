import { SectionLabel } from "./SectionLabel";
import { useT } from "../../context/LanguageContext";

export function SpokenLanguages() {
  const { t } = useT();

  return (
    <section id="languages" style={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "64px" }} className="section-pad fade-section">
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <SectionLabel number="07" label={t.spokenLanguages.sectionLabel} />
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {t.spokenLanguages.entries.map((lang) => (
            <div key={lang.name} style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", fontWeight: 500, color: "var(--app-fg)", margin: 0, minWidth: "96px" }}>
                {lang.name}
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "var(--app-muted)", margin: 0 }}>
                {lang.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
