import { useT } from "../../context/LanguageContext";

export interface EntryLink {
  kind: "live" | "source";
  url: string;
}

export function LinkLine({ links }: { links: EntryLink[] }) {
  const { t } = useT();

  return (
    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", lineHeight: 1.5, color: "var(--app-muted)", margin: "0 0 20px 0" }}>
      {links.map((link, i) => (
        <span key={link.url}>
          {i > 0 && " · "}
          {link.kind === "source" && `${t.links.source}: `}
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--app-fg)", textDecoration: "none", transition: "color 150ms ease" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--app-blue)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--app-fg)")}
          >
            {link.url.replace(/^https?:\/\//, "")} ↗
          </a>
        </span>
      ))}
    </p>
  );
}
