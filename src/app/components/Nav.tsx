import { useState, useEffect, useRef } from "react";
import { SECTIONS, scrollToSection } from "../navigation";
import { useT } from "../../context/LanguageContext";
import { EdisonBulb } from "./EdisonBulb";

export function Nav() {
  const { lang, t, toggleLanguage } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
      setTimeout(() => closeRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => scrollToSection(id), 220);
  };

  const btnStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "12px",
    color: "var(--app-muted)",
    letterSpacing: "0.06em",
    padding: "4px 0",
    transition: "color 150ms ease",
  } as const;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: scrolled ? "var(--app-nav-bg-scrolled)" : "var(--app-nav-bg)",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled ? "1px solid var(--app-border)" : "1px solid transparent",
          overflow: "visible",
          transition: "border-color 150ms ease, backdrop-filter 150ms ease, background-color 200ms ease",
        }}
      >
        <div
          className="nav-inner"
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "0 48px",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            href="#"
            className="nav-logo"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              textDecoration: "none",
              letterSpacing: "0.04em",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span style={{ color: "var(--app-subtle)" }} aria-hidden="true">{">"}_</span>
            <span style={{ color: "var(--app-accent)" }}>EA</span>
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ alignSelf: "flex-start" }} className="no-print">
              <EdisonBulb />
            </div>

            <button
              aria-label={lang === "en" ? "Switch to Swedish" : "Byt till engelska"}
              onClick={toggleLanguage}
              style={btnStyle}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--app-fg)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--app-muted)")}
            >
              [ {lang === "en" ? "sv" : "en"} ]
            </button>

            <button
              className="nav-menu-btn"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              style={btnStyle}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--app-fg)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--app-muted)")}
            >
              {t.nav.menu}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 100,
          backgroundColor: "var(--app-nav-bg)",
          display: "flex",
          flexDirection: "column",
          /* Scrolls when the list is taller than the viewport. Centring is done
             with margin:auto on the inner block instead of justify-content, which
             would make the overflowing top unreachable on short screens. */
          overflowY: "auto",
          overscrollBehavior: "contain",
          WebkitOverflowScrolling: "touch",
          padding: "64px 24px 32px",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 200ms ease",
        }}
      >
        <button
          ref={closeRef}
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
          style={{
            /* fixed, not absolute: the overlay scrolls, and the close button
               must stay reachable at the top of a long list. */
            position: "fixed",
            top: "16px",
            right: "20px",
            zIndex: 1,
            ...btnStyle,
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--app-fg)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--app-muted)")}
        >
          [ × ]
        </button>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px", margin: "auto", flexShrink: 0 }}>
          <span
            aria-hidden="true"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              color: "var(--app-index)",
              letterSpacing: "0.05em",
              marginBottom: "20px",
              display: "block",
            }}
          >
            // index
          </span>
          {SECTIONS.map(({ id, num }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(id); }}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "14px",
                padding: "8px 0",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "22px",
                letterSpacing: "0.02em",
                textDecoration: "none",
                color: "var(--app-muted)",
                transition: "color 150ms ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--app-fg)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--app-muted)")}
            >
              <span
                aria-hidden="true"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  color: "var(--app-subtle)",
                  minWidth: "20px",
                }}
              >
                {num}
              </span>
              {t.nav.sections[id]}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
