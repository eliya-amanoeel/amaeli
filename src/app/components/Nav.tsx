import { useState, useEffect } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
          <span style={{ color: "#52504D" }}>{">"}_</span>
          <span style={{ color: "#6EBF9E" }}>EA</span>
        </a>

        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "#8C8985", textDecoration: "none", letterSpacing: "0.04em", transition: "color 150ms ease" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F0EDE8")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#8C8985")}
        >
          Contact ↓
        </a>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .nav-inner { padding: 0 20px !important; }
        }
      `}</style>
    </nav>
  );
}
