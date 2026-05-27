import { useState, useEffect } from "react";

const SECTIONS = [
  { id: "work",        label: "work",             num: "01" },
  { id: "how-i-work",  label: "how i work",       num: "02" },
  { id: "experience",  label: "experience",        num: "03" },
  { id: "education",   label: "education",         num: "04" },
  { id: "languages",   label: "languages",         num: "05" },
  { id: "projects",    label: "projects",          num: "06" },
  { id: "skills",      label: "skills",            num: "07" },
  { id: "contact",     label: "contact",           num: "08" },
];

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
              const el = document.getElementById(id);
              if (!el) return;
              const top = el.getBoundingClientRect().top + window.scrollY - 72;
              window.scrollTo({ top, behavior: "smooth" });
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
              color: active === id ? "#F0EDE8" : "#8C8985",
              transition: "color 150ms ease",
            }}
            onMouseEnter={(e) => {
              if (active !== id) (e.currentTarget as HTMLElement).style.color = "#F0EDE8";
            }}
            onMouseLeave={(e) => {
              if (active !== id) (e.currentTarget as HTMLElement).style.color = "#8C8985";
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
