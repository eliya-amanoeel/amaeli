import { useSpring, animated } from "@react-spring/web";
import { useTheme } from "../../hooks/useTheme";

export function EdisonBulb() {
  const { isDark, toggleTheme } = useTheme();
  const [{ y }, api] = useSpring(() => ({
    y: 0,
    config: { tension: 260, friction: 9 },
  }));

  const handleClick = () => {
    toggleTheme();
    api.start({ from: { y: 10 }, to: { y: 0 } });
  };

  const lit = !isDark;

  return (
    <button
      onClick={handleClick}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0 2px",
        lineHeight: 0,
        color: lit ? "var(--app-fg)" : "var(--app-muted)",
        transition: "color 350ms ease",
      }}
    >
      <animated.div style={{ y, display: "flex" }}>
        <svg
          width="18"
          height="47"
          viewBox="0 0 18 47"
          fill="none"
          style={{
            filter: lit ? "drop-shadow(0 0 6px rgba(255, 200, 40, 1)) drop-shadow(0 0 12px rgba(255, 180, 20, 0.8))" : "none",
            transition: "filter 400ms ease",
          }}
        >
          {/* Cord */}
          <line
            x1="9" y1="0" x2="9" y2="14"
            stroke="currentColor"
            strokeOpacity={lit ? 0.7 : 0.35}
            strokeWidth="1.5"
            strokeDasharray="1.5 1.5"
          />

          {/* Socket cap */}
          <rect
            x="4" y="14" width="10" height="9" rx="1"
            fill="currentColor" fillOpacity={lit ? 0.5 : 0.2}
            stroke="currentColor" strokeOpacity={lit ? 0.8 : 0.4}
            strokeWidth="1"
          />
          <line x1="4.5" y1="17.5" x2="13.5" y2="17.5"
            stroke="currentColor" strokeOpacity={lit ? 0.2 : 0.08} strokeWidth="0.75" />
          <line x1="4.5" y1="20.5" x2="13.5" y2="20.5"
            stroke="currentColor" strokeOpacity={lit ? 0.2 : 0.08} strokeWidth="0.75" />

          {/* Glass */}
          <path
            d="M 4 23
               C 0 24, 0 28, 0 32
               C 0 39, 4 45, 9 46
               C 14 45, 18 39, 18 32
               C 18 28, 18 24, 14 23
               Z"
            fill="currentColor" fillOpacity={lit ? 0.1 : 0}
            stroke="currentColor" strokeOpacity={lit ? 0.75 : 0.38}
            strokeWidth="1.1"
            style={{ transition: "fill-opacity 400ms ease, stroke-opacity 400ms ease" }}
          />

          {/* Filament */}
          <line x1="7" y1="28" x2="7" y2="40"
            stroke="currentColor" strokeOpacity={lit ? 0.95 : 0.2}
            strokeWidth={lit ? 1.2 : 0.8} strokeLinecap="round"
            style={{ transition: "stroke-opacity 400ms ease" }}
          />
          <line x1="11" y1="28" x2="11" y2="40"
            stroke="currentColor" strokeOpacity={lit ? 0.95 : 0.2}
            strokeWidth={lit ? 1.2 : 0.8} strokeLinecap="round"
            style={{ transition: "stroke-opacity 400ms ease" }}
          />
          <path d="M 7 40 C 7 44 11 44 11 40"
            stroke="currentColor" strokeOpacity={lit ? 0.95 : 0.2}
            strokeWidth={lit ? 1.2 : 0.8} strokeLinecap="round" fill="none"
            style={{ transition: "stroke-opacity 400ms ease" }}
          />
          <line x1="7" y1="28" x2="11" y2="28"
            stroke="currentColor" strokeOpacity={lit ? 0.95 : 0.2}
            strokeWidth={lit ? 1.2 : 0.8} strokeLinecap="round"
            style={{ transition: "stroke-opacity 400ms ease" }}
          />
        </svg>
      </animated.div>
    </button>
  );
}
