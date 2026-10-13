import { SectionLabel } from "./SectionLabel";
import { useT } from "../../context/LanguageContext";
import photo from "../../imports/eliya-photo.webp";

function ContactRow({ label, href, display, external }: { label: string; href: string; display: string; external?: boolean }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "16px", alignItems: "baseline", padding: "10px 0", borderBottom: "1px solid var(--app-border)" }}>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 500, color: "var(--app-accent)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {label}
      </span>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, color: "var(--app-muted)", textDecoration: "none", transition: "color 150ms ease" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--app-fg)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--app-muted)")}
      >
        {display}
      </a>
    </div>
  );
}

export function Contact() {
  const { t } = useT();

  return (
    <section id="contact" style={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "80px" }} className="section-pad fade-section">
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <SectionLabel number="11" label={t.contact.sectionLabel} />

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
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 500, color: "var(--app-fg)", margin: 0, lineHeight: 1.4 }}>
              Eliya Amanoeel
            </p>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "var(--app-muted)", margin: "4px 0 0 0", lineHeight: 1.4 }}>
              {t.contact.title}
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--app-border)" }}>
          <ContactRow label={t.contact.emailLabel} href="mailto:eliya.amanoeel@gmail.com" display="eliya.amanoeel@gmail.com" />
          <ContactRow label={t.contact.phoneLabel} href="tel:+46702068908" display="+46 70-206 89 08" />
          <ContactRow label={t.contact.linkedinLabel} href="https://www.linkedin.com/in/eliya-amanoeel/" display="linkedin.com/in/eliya-amanoeel" external />
          <ContactRow label={t.contact.githubLabel} href="https://github.com/eliya-amanoeel" display="github.com/eliya-amanoeel" external />
        </div>

      </div>
    </section>
  );
}
