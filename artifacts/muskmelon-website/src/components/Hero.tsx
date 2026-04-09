import { FadeIn } from "./FadeIn";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      background: "#0B0F14",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      padding: "80px 64px 64px",
      gap: 48,
      borderBottom: "1px solid #1F2937",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* radial glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 55% 55% at 75% 45%, rgba(255,106,0,0.05) 0%, transparent 70%)",
      }} />

      {/* left */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <FadeIn delay={0}>
          <div style={{
            display: "inline-block",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#FF6A00",
            borderLeft: "2px solid #FF6A00",
            paddingLeft: 12,
            marginBottom: 32,
          }}>
            Experimental Product Lab
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <h1 style={{
            fontSize: "clamp(52px, 5.5vw, 80px)",
            fontWeight: 900,
            color: "#F9FAFB",
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            marginBottom: 28,
          }}>
            Build.<br />
            <span style={{ color: "#FF6A00" }}>Break.</span><br />
            Evolve.
          </h1>
        </FadeIn>

        <FadeIn delay={160}>
          <p style={{
            fontSize: 16,
            color: "#9CA3AF",
            lineHeight: 1.75,
            maxWidth: 460,
            marginBottom: 44,
          }}>
            Experimental software products built on open systems, AI,
            and unconventional thinking.
          </p>
        </FadeIn>

        <FadeIn delay={240}>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="#products" className="btn btn-fill">Explore Products</a>
            <a href="#work"     className="btn btn-stroke">View Work</a>
          </div>
        </FadeIn>

        <FadeIn delay={320}>
          <div style={{
            display: "flex",
            gap: 32,
            marginTop: 56,
            paddingTop: 32,
            borderTop: "1px solid #1F2937",
          }}>
            {[["Open Systems", "Foundation"], ["AI Tools", "Core"], ["Dev-First", "Philosophy"]].map(([val, label]) => (
              <div key={label}>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#FF6A00", letterSpacing: "-0.02em" }}>
                  {val}
                </div>
                <div style={{ fontSize: 11, color: "#4B5563", textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 2 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* right — geometric illustration */}
      <FadeIn delay={200} style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}>
        <HeroIllustration />
      </FadeIn>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div style={{ position: "relative", width: 440, height: 440 }}>
      <svg viewBox="0 0 440 440" fill="none" style={{ width: "100%", height: "100%" }}>
        {/* Grid */}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 55} x2="440" y2={i * 55} stroke="#1F2937" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 55} y1="0" x2={i * 55} y2="440" stroke="#1F2937" strokeWidth="0.5" />
        ))}

        {/* Main rotated square */}
        <rect x="120" y="120" width="200" height="200" stroke="#2D3F55" strokeWidth="1" transform="rotate(12,220,220)" fill="none" />
        <rect x="120" y="120" width="200" height="200" stroke="rgba(255,106,0,0.12)" strokeWidth="1" transform="rotate(-12,220,220)" fill="none" />

        {/* Center diamond */}
        <polygon points="220,140 300,220 220,300 140,220" fill="none" stroke="rgba(255,106,0,0.2)" strokeWidth="1" />
        <polygon points="220,160 280,220 220,280 160,220" fill="rgba(255,106,0,0.04)" stroke="rgba(255,106,0,0.15)" strokeWidth="1" />

        {/* Accent triangle top-right */}
        <polygon points="300,100 380,140 340,220" fill="rgba(255,106,0,0.07)" stroke="rgba(255,106,0,0.22)" strokeWidth="1" />

        {/* Accent triangle bottom-left */}
        <polygon points="100,300 160,380 60,360" fill="rgba(255,106,0,0.04)" stroke="rgba(255,106,0,0.1)" strokeWidth="0.8" />

        {/* Cross-hairs at center */}
        <circle cx="220" cy="220" r="4" fill="none" stroke="#FF6A00" strokeWidth="1.5" />
        <line x1="205" y1="220" x2="235" y2="220" stroke="#FF6A00" strokeWidth="0.8" opacity="0.7" />
        <line x1="220" y1="205" x2="220" y2="235" stroke="#FF6A00" strokeWidth="0.8" opacity="0.7" />

        {/* Floating asterisk / star decor top-right */}
        {[0,60,120,180,240,300].map(angle => (
          <line
            key={angle}
            x1={372 + 10 * Math.cos((angle * Math.PI) / 180)}
            y1={72  + 10 * Math.sin((angle * Math.PI) / 180)}
            x2={372 - 10 * Math.cos((angle * Math.PI) / 180)}
            y2={72  - 10 * Math.sin((angle * Math.PI) / 180)}
            stroke="#FF6A00" strokeWidth="2" strokeLinecap="square"
          />
        ))}

        {/* Small star bottom-left */}
        {[0,60,120,180,240,300].map(angle => (
          <line
            key={`s2-${angle}`}
            x1={68 + 7 * Math.cos((angle * Math.PI) / 180)}
            y1={372 + 7 * Math.sin((angle * Math.PI) / 180)}
            x2={68 - 7 * Math.cos((angle * Math.PI) / 180)}
            y2={372 - 7 * Math.sin((angle * Math.PI) / 180)}
            stroke="rgba(255,106,0,0.5)" strokeWidth="1.5" strokeLinecap="square"
          />
        ))}

        {/* Corner marks */}
        {[[40,40],[400,40],[400,400],[40,400]].map(([x,y],i) => (
          <g key={i}>
            <line x1={x-10} y1={y} x2={x+10} y2={y} stroke="#2D3F55" strokeWidth="1" />
            <line x1={x} y1={y-10} x2={x} y2={y+10} stroke="#2D3F55" strokeWidth="1" />
          </g>
        ))}

        {/* Dot accents */}
        <circle cx="380" cy="140" r="4" fill="#FF6A00" opacity="0.6" />
        <circle cx="60"  cy="300" r="3" fill="#FF6A00" opacity="0.35" />
        <circle cx="300" cy="380" r="2.5" fill="rgba(255,106,0,0.4)" />

        {/* Dashed lines */}
        <line x1="380" y1="140" x2="220" y2="220" stroke="rgba(255,106,0,0.12)" strokeWidth="1" strokeDasharray="5 7" />
        <line x1="60"  y1="300" x2="220" y2="220" stroke="rgba(255,106,0,0.07)" strokeWidth="1" strokeDasharray="5 9" />

        {/* Annotation text */}
        <text x="388" y="80" fontSize="8" fill="rgba(255,106,0,0.6)" fontFamily="Inter, monospace">[X]</text>
        <text x="20" y="378" fontSize="8" fill="rgba(255,255,255,0.15)" fontFamily="Inter, monospace">v0.1</text>
      </svg>

      {/* Floating label badges */}
      <div style={{
        position: "absolute", top: 28, left: 20,
        background: "#111827",
        border: "1px solid #1F2937",
        padding: "6px 14px",
        fontSize: 10, fontWeight: 700, color: "#4B5563",
        letterSpacing: "0.12em", textTransform: "uppercase",
      }}>
        EXPERIMENTAL
      </div>
      <div style={{
        position: "absolute", bottom: 16, right: 16,
        background: "#111827",
        border: "1px solid rgba(255,106,0,0.25)",
        padding: "6px 14px",
        fontSize: 10, fontWeight: 700, color: "#FF6A00",
        letterSpacing: "0.12em", textTransform: "uppercase",
      }}>
        OPEN SYSTEMS
      </div>
    </div>
  );
}
