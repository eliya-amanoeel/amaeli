import { useState, useEffect } from "react";
import { SECTIONS, scrollToSection } from "../navigation";
import { useT } from "../../context/LanguageContext";

export function SideNav() {
  const { t } = useT();
  const [active, setActive] = useState<string>("work");

  useEffect(() => {
    const map = new Map<Element, string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = map.get(entry.target);
            if (id) setActive(id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) { map.set(el, id); observer.observe(el); }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="side-nav-container"
      aria-label="Page sections"
      style={{
        position: "fixed",
        right: "32px",
        top: "50%",
        transform: "translateY(-50%)",
        flexDirection: "column",
        gap: "0",
        zIndex: 40,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "10px",
          color: "var(--app-index)",
          letterSpacing: "0.05em",
          marginBottom: "12px",
          display: "block",
        }}
      >
        // index
      </span>
      {SECTIONS.map(({ id, num }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "8px",
            padding: "4px 0",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            letterSpacing: "0.04em",
            textDecoration: "none",
            color: active === id ? "var(--app-fg)" : "var(--app-muted)",
            transition: "color 150ms ease",
          }}
          onMouseEnter={(e) => {
            if (active !== id) (e.currentTarget as HTMLElement).style.color = "var(--app-fg)";
          }}
          onMouseLeave={(e) => {
            if (active !== id) (e.currentTarget as HTMLElement).style.color = "var(--app-muted)";
          }}
        >
          <span
            aria-hidden="true"
            style={{
              color: active === id ? "var(--app-accent)" : "var(--app-subtle)",
              transition: "color 150ms ease",
              minWidth: "16px",
              fontSize: "10px",
            }}
          >
            {num}
          </span>
          {t.nav.sections[id]}
        </a>
      ))}
    </nav>
  );
}
