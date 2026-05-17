import { SectionLabel } from "./SectionLabel";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import photo from "../../imports/eliya-photo.jpg";

function ContactRow({ label, href, display, external }: { label: string; href: string; display: string; external?: boolean }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "16px", alignItems: "baseline", padding: "16px 0", borderBottom: "1px solid #1F2124" }}>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 500, color: "#6EBF9E", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {label}
      </span>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, color: "#8C8985", textDecoration: "none", transition: "color 150ms ease" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F0EDE8")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#8C8985")}
      >
        {display}
      </a>
    </div>
  );
}

function DownloadRow() {
  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    window.print();
  };

  return (
    <div className="no-print" style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "16px", alignItems: "baseline", padding: "16px 0", borderBottom: "1px solid #1F2124" }}>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 500, color: "#6EBF9E", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        CV
      </span>
      <a
        href="#"
        onClick={handlePrint}
        style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, color: "#8C8985", textDecoration: "none", transition: "color 150ms ease", cursor: "pointer" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F0EDE8")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#8C8985")}
      >
        Download as PDF ↓
      </a>
    </div>
  );
}

export function Contact() {
  return (
    <section style={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "128px" }} className="section-pad">
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <SectionLabel number="07" label="CONTACT" />

        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "48px" }}>
          <ImageWithFallback
            src={photo}
            alt="Eliya Amanoeel"
            style={{ width: "72px", height: "72px", objectFit: "cover", borderRadius: "4px", filter: "grayscale(20%)", flexShrink: 0 }}
          />
          <div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 500, color: "#F0EDE8", margin: 0, lineHeight: 1.4 }}>
              Eliya Amanoeel
            </p>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "#8C8985", margin: "4px 0 0 0", lineHeight: 1.4 }}>
              Senior Developer & Solutions Architect
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1F2124" }}>
          <ContactRow label="Email" href="mailto:contact@amaeli.se" display="contact@amaeli.se" />
          <ContactRow label="Phone" href="tel:+46702068908" display="+46 70-206 89 08" />
          <ContactRow label="LinkedIn" href="https://www.linkedin.com/in/eliya-amanoeel/" display="linkedin.com/in/eliya-amanoeel" external />
          <ContactRow label="GitHub" href="https://github.com/eliya-amanoeel" display="github.com/eliya-amanoeel" external />
          <DownloadRow />
        </div>

        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#52504D", marginTop: "64px", marginBottom: 0 }}>
          © 2026 Eliya Amanoeel
        </p>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .section-pad { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </section>
  );
}
