import { useState, useEffect } from "react";
import { SECTIONS, scrollToSection } from "../navigation";

export function SideNav() {
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
      if (el) {
        map.set(el, id);
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .side-nav-container { display: none; }
        @media (min-width: 1080px) {
          .side-nav-container { display: flex; }
        }
      `}</style>
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
            color: "#3A3C40",
            letterSpacing: "0.05em",
            marginBottom: "12px",
            display: "block",
          }}
        >
          // index
        </span>
        {SECTIONS.map(({ id, label, num }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(id);
            }}
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "8px",
              padding: "4px 0",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.04em",
              textDecoration: "none",
              color: active === id ? "#F0EDE8" : "#9E9B97",
              transition: "color 150ms ease",
            }}
            onMouseEnter={(e) => {
              if (active !== id) (e.currentTarget as HTMLElement).style.color = "#F0EDE8";
            }}
            onMouseLeave={(e) => {
              if (active !== id) (e.currentTarget as HTMLElement).style.color = "#9E9B97";
            }}
          >
            <span
              aria-hidden="true"
              style={{
                color: active === id ? "#6EBF9E" : "#52504D",
                transition: "color 150ms ease",
                minWidth: "16px",
                fontSize: "10px",
              }}
            >
              {num}
            </span>
            {label}
          </a>
        ))}
      </nav>
    </>
  );
}
