import { SectionLabel } from "./SectionLabel";

export function HowIWork() {
  return (
    <section style={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "64px" }} className="section-pad">
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <SectionLabel number="02" label="HOW I WORK" />
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: 1.7, color: "#8C8985", margin: "0 0 24px 0" }}>
          With over 13 years in the field, I've learned that most technical problems are organisational ones in disguise. Before writing any code, I spend time understanding the constraints — legacy systems, governance requirements, stakeholder expectations — that will determine whether the solution actually holds up in production. At Försvarsmakten, where I've been engaged since 2019, that meant owning both active feature development and a full platform migration while keeping live services running.
        </p>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: 1.7, color: "#8C8985", margin: "0 0 24px 0" }}>
          I use AI models — OpenAI, Claude, and GitHub Copilot — as everyday tools, not novelties. They let me move faster, work across domains I wouldn't have touched alone, and spend more time on the decisions that actually require experience. I've built and shipped complete products this way, including a full Blazor application and a project that spans mobile and embedded firmware.
        </p>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: 1.7, color: "#8C8985", margin: 0 }}>
          I work well both as the sole technical person in the room and as a senior contributor in a larger team. I'm comfortable translating between business stakeholders and implementation, running Scrum ceremonies, and taking end-to-end ownership from requirements to release.
        </p>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .section-pad { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </section>
  );
}
