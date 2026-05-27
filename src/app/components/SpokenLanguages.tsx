import { SectionLabel } from "./SectionLabel";

const languages = [
  { name: "Swedish", level: "Fluent" },
  { name: "English", level: "Fluent" },
];

export function SpokenLanguages() {
  return (
    <section id="languages" style={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "64px" }} className="section-pad fade-section">
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <SectionLabel number="05" label="LANGUAGES" />
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {languages.map((lang) => (
            <div key={lang.name} style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", fontWeight: 500, color: "#F0EDE8", margin: 0, minWidth: "96px" }}>
                {lang.name}
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#8C8985", margin: 0 }}>
                {lang.level}
              </p>
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
