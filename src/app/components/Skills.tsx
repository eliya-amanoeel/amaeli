import { SectionLabel } from "./SectionLabel";
import { TechTag } from "./TechTag";

const groups = [
  {
    label: "AI & Modern Tooling",
    skills: ["OpenAI API", "Claude / Anthropic", "GitHub Copilot", "Prompt Engineering"],
  },
  {
    label: "Platforms",
    skills: ["SharePoint SE", "SharePoint Online", "SharePoint 2016", "SharePoint 2013", "SharePoint 2010", "SharePoint 2007", "Office 365", "Azure", "Blazor", "Angular"],
  },
  {
    label: "Languages",
    skills: ["C#", ".NET", "ASP.NET", "CSOM", "JSOM", "PowerShell", "JavaScript", "SQL", "HTML", "CSS", "React", "XML", "C++"],
  },
  {
    label: "Tools & DevOps",
    skills: ["Azure DevOps", "DevOps Pipelines", "Visual Studio", "VS Code", "Figma", "TFS", "GIT", "BizTalk", "DocAve", "Scrum", "Agile"],
  },
  {
    label: "Practices",
    skills: ["TDD", "SpecFlow", "MVC", "REST APIs", "CI/CD"],
  },
];

export function Skills() {
  return (
    <section style={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "64px" }} className="section-pad">
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <SectionLabel number="07" label="SKILLS" />
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {groups.map((group, i) => (
            <div key={i}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "#6EBF9E", margin: "0 0 12px 0", letterSpacing: "0.05em" }}>
                {group.label}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {group.skills.map((skill) => (
                  <TechTag key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .section-pad { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </section>
  );
}
