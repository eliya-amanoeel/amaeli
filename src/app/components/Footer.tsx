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
        backgroundColor: "var(--app-nav-bg-scrolled)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderTop: "1px solid var(--app-border-strong)",
        zIndex: 50,
        transition: "background-color 200ms ease, border-color 200ms ease",
      }}
    >
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          color: "var(--app-muted)",
        }}
      >
        © {new Date().getFullYear()} Eliya Amanoeel
      </span>
    </footer>
  );
}
