import { useState, useEffect } from "react";
import { TechTag } from "./TechTag";

const FULL_NAME = "Eliya Amanoeel";
const keySkills = ["C#", ".NET", "Azure", "Angular", "Blazor", "React", "PowerShell", "JavaScript", "DevOps Pipelines", "SharePoint"];

export function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(FULL_NAME.slice(0, i));
      if (i === FULL_NAME.length) {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="hero-section"
      style={{ paddingTop: "120px", paddingBottom: "64px", paddingLeft: "48px", paddingRight: "48px" }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(40px, 5vw, 68px)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "0.03em",
            color: "var(--app-fg)",
            margin: 0,
          }}
        >
          {displayed}
          <span className={typingDone ? "hero-cursor-blink" : "hero-cursor-visible"}>_</span>
        </h1>

        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: 1.7, color: "var(--app-muted)", marginTop: "16px", marginBottom: 0 }}>
          Senior Developer & Solutions Architect — Stockholm
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "24px" }}>
          {keySkills.map((s) => <TechTag key={s} label={s} />)}
        </div>

        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: 1.7, color: "var(--app-muted)", maxWidth: "560px", marginTop: "40px", marginBottom: 0 }}>
          I've been writing software professionally since 2013. I care about systems that hold up, solutions that are honest about their complexity, and staying genuinely curious about what new tooling makes possible.
        </p>

        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: 1.7, color: "var(--app-muted)", maxWidth: "560px", marginTop: "20px", marginBottom: 0 }}>
          13+ years building internal platforms, migration solutions, and governance tools on the Microsoft stack. I work across the full delivery chain — from architecture to release — and use AI models as a core part of how I design and build software today.
        </p>

        <div className="scroll-hint no-print" style={{ marginTop: "56px" }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "var(--app-subtle)", letterSpacing: "0.06em" }}>scroll</span>
          <span className="scroll-arrow" style={{ display: "block", color: "var(--app-subtle)", fontSize: "14px", marginTop: "4px" }}>↓</span>
        </div>
      </div>
    </section>
  );
}
