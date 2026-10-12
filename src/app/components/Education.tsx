import { SectionLabel } from "./SectionLabel";
import { useT } from "../../context/LanguageContext";

export function Education() {
  const { t } = useT();

  return (
    <section id="education" style={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "64px" }} className="section-pad fade-section">
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <SectionLabel number="06" label={t.education.sectionLabel} />
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "var(--app-accent)", margin: "0 0 8px 0", letterSpacing: "0.05em" }}>
              {t.education.period}
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 500, color: "var(--app-fg)", margin: "0 0 2px 0", lineHeight: 1.4 }}>
              {t.education.programme}
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "var(--app-muted)", margin: 0 }}>
              Nackademin Yrkeshögskola
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "var(--app-accent)", margin: "0 0 12px 0", letterSpacing: "0.05em" }}>
              {t.education.certifications}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {t.education.certs.map((cert) => (
                <p key={cert} style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "var(--app-muted)", margin: 0, lineHeight: 1.5 }}>
                  {cert}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
