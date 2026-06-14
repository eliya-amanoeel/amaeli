import { SectionLabel } from "./SectionLabel";

const certifications = [
  "Core Solutions of Microsoft SharePoint Server 2013 (70-331, MCTS)",
  "Programming in HTML5 with JavaScript and CSS3 (70-480, MCSD)",
];

export function Education() {
  return (
    <section id="education" style={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "64px" }} className="section-pad fade-section">
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <SectionLabel number="06" label="EDUCATION" />
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "var(--app-accent)", margin: "0 0 8px 0", letterSpacing: "0.05em" }}>
              Aug 2011 – Jan 2013
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 500, color: "var(--app-fg)", margin: "0 0 2px 0", lineHeight: 1.4 }}>
              SharePoint Development
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "var(--app-muted)", margin: 0 }}>
              Nackademin Yrkeshögskola
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "var(--app-accent)", margin: "0 0 12px 0", letterSpacing: "0.05em" }}>
              CERTIFICATIONS
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {certifications.map((cert) => (
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
