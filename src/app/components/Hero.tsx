export function Hero() {
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{ paddingTop: "120px", paddingBottom: "64px", paddingLeft: "48px", paddingRight: "48px" }}
      className="hero-section"
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(40px, 5vw, 68px)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "0.03em",
            color: "#F0EDE8",
            margin: 0,
          }}
        >
          ELIYA AMANOEEL
        </h1>

        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: 1.7, color: "#8C8985", marginTop: "16px", marginBottom: 0 }}>
          Senior Developer & Solutions Architect — Stockholm
        </p>

        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: 1.7, color: "#8C8985", maxWidth: "560px", marginTop: "40px", marginBottom: 0 }}>
          I've been writing software professionally since 2012. I care about systems that hold up, solutions that are honest about their complexity, and staying genuinely curious about what new tooling makes possible.
        </p>

        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: 1.7, color: "#8C8985", maxWidth: "560px", marginTop: "20px", marginBottom: 0 }}>
          13+ years building internal platforms, migration solutions, and governance tools on the Microsoft stack. I work across the full delivery chain — from architecture to release — and use AI models as a core part of how I design and build software today.
        </p>

        <a
          href="#work"
          onClick={handleScroll}
          style={{ display: "inline-block", marginTop: "32px", fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", fontWeight: 400, color: "#5B9BD5", textDecoration: "none", letterSpacing: "0.02em" }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.textDecoration = "underline")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.textDecoration = "none")}
        >
          View work ↓
        </a>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-section { padding-left: 20px !important; padding-right: 20px !important; padding-top: 120px !important; }
        }
      `}</style>
    </section>
  );
}
