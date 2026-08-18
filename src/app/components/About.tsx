import { SectionLabel } from "./SectionLabel";
import { useT } from "../../context/LanguageContext";

export function About() {
  const { t } = useT();

  return (
    <section id="about" style={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "64px" }} className="section-pad fade-section">
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <SectionLabel number="10" label={t.about.sectionLabel} />
        <div className="print-entry" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {t.about.paragraphs.map((paragraph, i) => (
            <p key={i} style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: 1.7, color: "var(--app-muted)", margin: 0, maxWidth: "600px" }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
