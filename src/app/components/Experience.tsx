import { SectionLabel } from "./SectionLabel";

interface Entry {
  dates: string;
  client: string;
  role: string;
  linkedWork?: string;
}

const entries: Entry[] = [
  { dates: "2024", client: "Försvarsmakten · CAG Arete", role: "Fullstack .NET Developer", linkedWork: "#work-forsvarsmakten-fullstack" },
  { dates: "2019 – present", client: "Försvarsmakten · CAG Arete", role: "SharePoint Developer", linkedWork: "#work-forsvarsmakten-sharepoint" },
  { dates: "2016 – 2019", client: "Trafikverket · CGI Sverige", role: "SharePoint Developer & Migration Architect", linkedWork: "#work-trafikverket" },
  { dates: "2015 – 2018", client: "Stockholm Stad · CGI Sverige", role: ".NET Developer" },
  { dates: "Apr – Nov 2016", client: "Skatteverket · CGI Sverige", role: "PowerShell Developer" },
  { dates: "May – Jun 2016", client: "Valmyndigheten · CGI Sverige", role: "Requirements Analyst" },
  { dates: "2015 – 2016", client: "CGI Collaboration Platform (CCP) · CGI Sverige", role: "SharePoint Online Developer" },
  { dates: "2013 – 2019", client: "IVO — Inspektionen för Vård och Omsorg · CGI Sverige", role: "SharePoint Developer" },
  { dates: "Jun 2013 – Sep 2019", client: "Receptkontroll — IVO · CGI Sverige", role: ".NET & SharePoint Developer", linkedWork: "#work-receptkontroll" },
  { dates: "2013 – 2014", client: "Alecta · CGI Sverige", role: "SharePoint Consultant & On-site Support" },
  { dates: "2012 – 2013", client: "Cybercom", role: "Trainee SharePoint Developer" },
];

export function Experience() {
  const handleScrollTo = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{ paddingLeft: "48px", paddingRight: "48px", paddingBottom: "96px" }} className="section-pad">
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <SectionLabel number="03" label="EXPERIENCE" />
        <div style={{ borderLeft: "1px solid #2A2C30", paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "32px" }}>
          {entries.map((entry, i) => (
            <div key={i} style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: "-29px", top: "6px", width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#2A2C30" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "#6EBF9E", display: "block", marginBottom: "4px" }}>
                {entry.dates}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 500, color: "#F0EDE8" }}>
                  {entry.client}
                </span>
                {entry.linkedWork && (
                  <a
                    href={entry.linkedWork}
                    onClick={(e) => handleScrollTo(e, entry.linkedWork!)}
                    style={{ color: "#8C8985", textDecoration: "none", fontSize: "11px", transition: "color 150ms ease" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#5B9BD5")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#8C8985")}
                    title="View project"
                  >
                    ↗
                  </a>
                )}
              </div>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#8C8985" }}>
                {entry.role}
              </span>
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
