import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "#0B0F14",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "0 80px",
        gap: 64,
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid #1F2937",
      }}
    >
      {/* Diagonal gradient backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(255,106,0,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Left: text */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <FadeIn delay={0}>
          <div
            style={{
              display: "inline-block",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#FF6A00",
              borderLeft: "2px solid #FF6A00",
              paddingLeft: 12,
              marginBottom: 32,
            }}
          >
            Experimental Product Lab
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <h1
            style={{
              fontSize: "clamp(48px, 6vw, 80px)",
              fontWeight: 900,
              color: "#E5E7EB",
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
              margin: 0,
              marginBottom: 28,
            }}
          >
            Build.
            <br />
            <span style={{ color: "#FF6A00" }}>Break.</span>
            <br />
            Evolve.
          </h1>
        </FadeIn>

        <FadeIn delay={160}>
          <p
            style={{
              fontSize: 17,
              color: "#9CA3AF",
              lineHeight: 1.75,
              maxWidth: 460,
              margin: 0,
              marginBottom: 44,
            }}
          >
            Experimental software products built on open systems,
            AI, and unconventional thinking.
          </p>
        </FadeIn>

        <FadeIn delay={240}>
          <div style={{ display: "flex", gap: 12 }}>
            <a
              href="#products"
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "13px 28px",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.04em",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              Explore Products
            </a>
            <a
              href="#vision"
              className="btn-outline"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "13px 28px",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.04em",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              View Vision
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Right: geometric visual */}
      <FadeIn delay={200} className="flex items-center justify-center">
        <GeometricVisual />
      </FadeIn>
    </section>
  );
}

function GeometricVisual() {
  return (
    <div style={{ position: "relative", width: 400, height: 400 }}>
      <svg
        viewBox="0 0 400 400"
        fill="none"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        {/* Grid lines */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={i * 57 + 4}
            x2="400"
            y2={i * 57 + 4}
            stroke="#1F2937"
            strokeWidth="0.5"
          />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <line
            key={`v${i}`}
            x1={i * 57 + 4}
            y1="0"
            x2={i * 57 + 4}
            y2="400"
            stroke="#1F2937"
            strokeWidth="0.5"
          />
        ))}

        {/* Large background plane */}
        <polygon
          points="80,40 360,80 320,360 40,340"
          fill="none"
          stroke="#1F2937"
          strokeWidth="1"
        />
        <polygon
          points="80,40 360,80 320,360 40,340"
          fill="rgba(255,106,0,0.03)"
        />

        {/* Inner diamond */}
        <polygon
          points="200,60 340,200 200,340 60,200"
          fill="none"
          stroke="rgba(255,106,0,0.15)"
          strokeWidth="1"
        />

        {/* Accent triangle — top right */}
        <polygon
          points="240,60 360,80 340,200"
          fill="rgba(255,106,0,0.06)"
          stroke="rgba(255,106,0,0.25)"
          strokeWidth="1"
        />

        {/* Accent triangle — bottom left */}
        <polygon
          points="60,200 80,320 200,340"
          fill="rgba(255,140,66,0.04)"
          stroke="rgba(255,106,0,0.12)"
          strokeWidth="0.8"
        />

        {/* Crosshair center mark */}
        <circle cx="200" cy="200" r="3" fill="none" stroke="#FF6A00" strokeWidth="1.5" />
        <line x1="188" y1="200" x2="212" y2="200" stroke="#FF6A00" strokeWidth="0.8" opacity="0.6" />
        <line x1="200" y1="188" x2="200" y2="212" stroke="#FF6A00" strokeWidth="0.8" opacity="0.6" />

        {/* Corner marks */}
        {[
          [60, 60], [340, 60], [340, 340], [60, 340],
        ].map(([x, y], i) => (
          <g key={i}>
            <line x1={x - 8} y1={y} x2={x + 8} y2={y} stroke="#1F2937" strokeWidth="1" />
            <line x1={x} y1={y - 8} x2={x} y2={y + 8} stroke="#1F2937" strokeWidth="1" />
          </g>
        ))}

        {/* Edge marks on outer polygon */}
        <circle cx="360" cy="80" r="3" fill="#FF6A00" opacity="0.5" />
        <circle cx="40" cy="340" r="2" fill="#FF6A00" opacity="0.3" />

        {/* Angled lines */}
        <line x1="360" y1="80" x2="200" y2="200" stroke="rgba(255,106,0,0.1)" strokeWidth="1" strokeDasharray="4 6" />
        <line x1="80" y1="40" x2="200" y2="200" stroke="rgba(255,106,0,0.06)" strokeWidth="1" strokeDasharray="4 8" />
      </svg>

      {/* Annotation labels */}
      <div style={{ position: "absolute", top: 44, right: 0, fontSize: 9, color: "#FF6A00", letterSpacing: "0.1em", opacity: 0.7 }}>
        [X:AXIS]
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, fontSize: 9, color: "#9CA3AF", letterSpacing: "0.1em", opacity: 0.5 }}>
        v0.1 / EXPERIMENTAL
      </div>
    </div>
  );
}
