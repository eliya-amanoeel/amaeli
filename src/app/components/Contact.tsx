import { type MouseEvent } from "react";
import { SectionLabel } from "./SectionLabel";
import photo from "../../imports/eliya-photo.webp";

function ContactRow({ label, href, display, external }: { label: string; href: string; display: string; external?: boolean }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "16px", alignItems: "baseline", padding: "10px 0", borderBottom: "1px solid #1F2124" }}>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 500, color: "#6EBF9E", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {label}
      </span>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, color: "#9E9B97", textDecoration: "none", transition: "color 150ms ease" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F0EDE8")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9E9B97")}
      >
        {display}
      </a>
    </div>
  );
}

function DownloadRow() {
  const handlePrint = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.print();
  };

  return (
    <div className="no-print" style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "16px", alignItems: "baseline", padding: "10px 0", borderBottom: "1px solid #1F2124" }}>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 500, color: "#6EBF9E", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        RESUMÉ
      </span>
      <a
        href="#"
        onClick={handlePrint}
        style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, color: "#9E9B97", textDecoration: "none", transition: "color 150ms ease", cursor: "pointer" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F0EDE8")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9E9B97")}
      >
        download a copy ↓
      </a>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" style={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "80px" }} className="section-pad fade-section">
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <SectionLabel number="09" label="CONTACT" />

        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "32px" }}>
          <img
            src={photo}
            alt="Eliya Amanoeel"
            loading="lazy"
            width={72}
            height={72}
            style={{ width: "72px", height: "72px", objectFit: "cover", objectPosition: "50% 15%", borderRadius: "4px", filter: "grayscale(20%)", flexShrink: 0 }}
          />
          <div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 500, color: "#F0EDE8", margin: 0, lineHeight: 1.4 }}>
              Eliya Amanoeel
            </p>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "#9E9B97", margin: "4px 0 0 0", lineHeight: 1.4 }}>
              Senior Developer & Solutions Architect
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1F2124" }}>
          <ContactRow label="Email" href="mailto:contact@amaeli.se" display="contact@amaeli.se" />
          <ContactRow label="Phone" href="tel:+46702068908" display="+46 70-206 89 08" />
          <ContactRow label="LinkedIn" href="https://www.linkedin.com/in/eliya-amanoeel/" display="linkedin.com/in/eliya-amanoeel" external />
          <DownloadRow />
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
