interface Props {
  label: string;
}

export function TechTag({ label }: Props) {
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "11px",
        fontWeight: 500,
        lineHeight: 1,
        color: "#6EBF9E",
        backgroundColor: "#1A2C3D",
        padding: "4px 8px",
        borderRadius: "4px",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
      }}
    >
      {label}
    </span>
  );
}
