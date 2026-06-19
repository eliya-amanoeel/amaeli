import { SectionLabel } from "./SectionLabel";
import { useT } from "../../context/LanguageContext";

export function HowIWork() {
  const { t } = useT();

  return (
    <section id="how-i-work" style={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "64px" }} className="section-pad fade-section">
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <SectionLabel number="03" label={t.howIWork.sectionLabel} />
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {t.howIWork.items.map((item) => (
            <div key={item.heading} className="print-entry">
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "var(--app-accent)", letterSpacing: "0.08em", display: "block", marginBottom: "8px", textTransform: "uppercase" }}>
                {item.heading}
              </span>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: 1.7, color: "var(--app-muted)", margin: 0 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
