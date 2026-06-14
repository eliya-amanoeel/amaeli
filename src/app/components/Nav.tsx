import { useState, useEffect, useRef } from "react";
import { SECTIONS, scrollToSection } from "../navigation";

export function Nav() {
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

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: scrolled ? "rgba(14,15,17,0.85)" : "#0E0F11",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled ? "1px solid #1F2124" : "1px solid transparent",
          transition: "border-color 150ms ease, backdrop-filter 150ms ease",
        }}
      >
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "0 48px",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="nav-inner"
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
            <span style={{ color: "#52504D" }} aria-hidden="true">{">"}_</span>
            <span className="nav-logo-ea" style={{ color: "#6EBF9E" }}>EA</span>
          </a>

          <button
            className="nav-menu-btn"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px",
              color: "#9E9B97",
              letterSpacing: "0.06em",
              padding: "4px 0",
              transition: "color 150ms ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F0EDE8")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9E9B97")}
          >
            [ menu ]
          </button>
        </div>

        <style>{`
          @media (max-width: 640px) {
            .nav-inner { padding: 0 20px !important; }
          }
          .nav-menu-btn { display: none; }
          @media (max-width: 1079px) {
            .nav-menu-btn { display: block; }
          }
          .nav-logo { animation: navGlitch 8s infinite; }
          @keyframes navGlitch {
            0%, 95%   { transform: none; opacity: 1; }
            95.5%     { transform: translateX(-2px) skewX(-3deg); opacity: 0.8; }
            96%       { transform: translateX(2px) skewX(2deg); opacity: 0.9; }
            96.5%     { transform: translateX(-1px) skewX(-1deg); opacity: 0.75; }
            97%, 100% { transform: none; opacity: 1; }
          }
        `}</style>
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
          backgroundColor: "#0E0F11",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 200ms ease",
        }}
      >
        {/* Close button */}
        <button
          ref={closeRef}
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
          style={{
            position: "absolute",
            top: "16px",
            right: "20px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
            color: "#9E9B97",
            letterSpacing: "0.06em",
            padding: "4px 0",
            transition: "color 150ms ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F0EDE8")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9E9B97")}
        >
          [ × ]
        </button>

        {/* Index */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
          <span
            aria-hidden="true"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              color: "#3A3C40",
              letterSpacing: "0.05em",
              marginBottom: "20px",
              display: "block",
            }}
          >
            // index
          </span>
          {SECTIONS.map(({ id, label, num }) => (
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
                color: "#9E9B97",
                transition: "color 150ms ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F0EDE8")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9E9B97")}
            >
              <span
                aria-hidden="true"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  color: "#52504D",
                  minWidth: "20px",
                }}
              >
                {num}
              </span>
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

