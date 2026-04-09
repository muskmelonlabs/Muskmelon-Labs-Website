import { FadeIn } from "./FadeIn";

const quotes = [
  {
    text: "We don't build for trends.\nWe build for long-term systems.",
    attr: null,
  },
  {
    text: "Constraints create innovation.",
    attr: null,
  },
  {
    text: "Simplicity scales.",
    attr: null,
  },
];

export function Philosophy() {
  return (
    <section
      id="vision"
      style={{
        background: "#0B0F14",
        padding: "100px 80px",
        borderBottom: "1px solid #1F2937",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background diagonal lines */}
      <svg
        aria-hidden
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          height: "100%",
          width: "40%",
          opacity: 0.03,
          pointerEvents: "none",
        }}
        viewBox="0 0 400 600"
        preserveAspectRatio="none"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <line key={i} x1={i * 44} y1="0" x2={i * 44 + 300} y2="600" stroke="#FF6A00" strokeWidth="1" />
        ))}
      </svg>

      <FadeIn>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#FF6A00",
            borderLeft: "2px solid #FF6A00",
            paddingLeft: 12,
            marginBottom: 12,
          }}
        >
          Thinking
        </div>
        <h2
          style={{
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 900,
            color: "#E5E7EB",
            letterSpacing: "-0.03em",
            margin: 0,
            marginBottom: 64,
          }}
        >
          Our Thinking
        </h2>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#1F2937" }}>
        {quotes.map((q, i) => (
          <FadeIn key={i} delay={i * 80}>
            <div
              style={{
                background: "#080C10",
                padding: "48px 36px",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontSize: 48,
                  color: "rgba(255,106,0,0.1)",
                  fontFamily: "Georgia, serif",
                  lineHeight: 1,
                  marginBottom: 20,
                  fontWeight: 900,
                }}
              >
                "
              </div>
              <blockquote
                style={{
                  fontSize: "clamp(15px, 1.4vw, 18px)",
                  fontWeight: 600,
                  color: "#E5E7EB",
                  lineHeight: 1.55,
                  letterSpacing: "-0.01em",
                  margin: 0,
                  whiteSpace: "pre-line",
                }}
              >
                {q.text}
              </blockquote>

              {/* Bottom accent line */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 36,
                  right: 36,
                  height: 1,
                  background: "linear-gradient(90deg, rgba(255,106,0,0.3) 0%, transparent 100%)",
                }}
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
