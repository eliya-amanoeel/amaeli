import { SectionLabel } from "./SectionLabel";
import { TechTag } from "./TechTag";
import { useT } from "../../context/LanguageContext";

const skillNames = [
  ["OpenAI API", "Claude / Anthropic", "GitHub Copilot", "Prompt Engineering"],
  ["Office 365", "Azure", "Blazor", "Angular", "SharePoint SE", "SharePoint Online", "SharePoint 2016", "SharePoint 2013", "SharePoint 2010", "SharePoint 2007"],
  ["C#", ".NET", "ASP.NET", "CSOM", "JSOM", "PowerShell", "JavaScript", "SQL", "HTML", "CSS", "React", "XML", "C++"],
  ["Azure DevOps", "DevOps Pipelines", "Visual Studio", "VS Code", "Figma", "TFS", "GIT", "BizTalk", "DocAve", "Scrum", "Agile"],
  ["TDD", "SpecFlow", "Playwright", "E2E Testing", "MVC", "REST APIs", "CI/CD"],
];

export function Skills() {
  const { t } = useT();

  return (
    <section id="skills" style={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "64px" }} className="section-pad fade-section">
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <SectionLabel number="09" label={t.skills.sectionLabel} />
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {t.skills.groups.map((group, i) => (
            <div key={i}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "var(--app-muted)", margin: "0 0 12px 0", letterSpacing: "0.05em" }}>
                {group.label}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {skillNames[i].map((skill) => (
                  <TechTag key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
