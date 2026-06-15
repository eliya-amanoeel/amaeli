interface Props {
  number: string;
  label: string;
}

export function SectionLabel({ number, label }: Props) {
  return (
    <p
      className="section-label"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "13px",
        fontWeight: 400,
        lineHeight: 1.4,
        color: "var(--app-accent)",
        letterSpacing: "0.08em",
        margin: "0 0 32px 0",
      }}
    >
      {number} / {label}
    </p>
  );
}
