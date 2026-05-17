export function Footer() {
  return (
    <footer
      className="no-print"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 48px",
        backgroundColor: "rgba(14, 15, 17, 0.85)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderTop: "1px solid #2A2C30",
        zIndex: 50,
      }}
    >
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          color: "#52504D",
        }}
      >
        © {new Date().getFullYear()} Eliya Amanoeel
      </span>
    </footer>
  );
}
