import { FadeIn } from "./FadeIn";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      background: "#1e1e1e",
      borderBottom: "1px solid #2e2e2e",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* subtle angled accent line */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 50% 60% at 72% 48%, rgba(255,106,0,0.04) 0%, transparent 70%)",
      }} />

      <div className="flex flex-col lg:flex-row items-center" style={{
        minHeight: "100vh",
        padding: "80px 24px 64px",
        gap: 48,
        position: "relative",
        zIndex: 1,
        maxWidth: 1280,
        margin: "0 auto",
      }}>
        {/* left */}
        <div className="w-full lg:w-1/2" style={{ position: "relative", zIndex: 1 }}>
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
              fontSize: "clamp(40px, 7vw, 80px)",
              fontWeight: 900,
              color: "#F9FAFB",
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
              marginBottom: 28,
              fontFamily: "'Inter', sans-serif",
            }}>
              Build.<br />
              <span style={{ color: "#FF6A00" }}>Break.</span><br />
              Evolve.
            </h1>
          </FadeIn>

          <FadeIn delay={160}>
            <p style={{
              fontSize: "clamp(15px, 2vw, 16px)",
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
            <div className="flex flex-col sm:flex-row" style={{ gap: 12 }}>
              <a href="#products" className="btn btn-fill" style={{ textAlign: "center" }}>Explore Products</a>
              <a href="#work"     className="btn btn-stroke" style={{ textAlign: "center" }}>View Work</a>
            </div>
          </FadeIn>

          <FadeIn delay={320}>
            <div className="flex flex-wrap" style={{
              gap: 32,
              marginTop: 56,
              paddingTop: 32,
              borderTop: "1px solid #2e2e2e",
            }}>
              {[["Open Systems", "Foundation"], ["AI Tools", "Core"], ["Dev-First", "Philosophy"]].map(([val, label]) => (
                <div key={label}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "#FF6A00", letterSpacing: "-0.02em" }}>
                    {val}
                  </div>
                  <div style={{ fontSize: 11, color: "#555555", textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 2 }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* right — logo mark as hero visual */}
        <FadeIn delay={200} className="w-full lg:w-1/2" style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}>
          <HeroLogoMark />
        </FadeIn>
      </div>
    </section>
  );
}

function HeroLogoMark() {
  return (
    <div style={{ position: "relative", width: "min(460px, 90vw)", aspectRatio: "460/440", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Background grid */}
      <svg viewBox="0 0 460 440" fill="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 55} x2="460" y2={i * 55} stroke="#2e2e2e" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 55} y1="0" x2={i * 55} y2="440" stroke="#2e2e2e" strokeWidth="0.5" />
        ))}
        {/* Corner marks */}
        {[[32,32],[428,32],[428,408],[32,408]].map(([x,y],i) => (
          <g key={i}>
            <line x1={x-12} y1={y} x2={x+12} y2={y} stroke="#444444" strokeWidth="1" />
            <line x1={x} y1={y-12} x2={x} y2={y+12} stroke="#444444" strokeWidth="1" />
          </g>
        ))}
        {/* Asterisk accent */}
        {[0,60,120,180,240,300].map(angle => (
          <line
            key={angle}
            x1={408 + 11 * Math.cos((angle * Math.PI) / 180)}
            y1={52  + 11 * Math.sin((angle * Math.PI) / 180)}
            x2={408 - 11 * Math.cos((angle * Math.PI) / 180)}
            y2={52  - 11 * Math.sin((angle * Math.PI) / 180)}
            stroke="#FF6A00" strokeWidth="2" strokeLinecap="square"
          />
        ))}
        <text x="38" y="420" fontSize="9" fill="rgba(255,255,255,0.12)" fontFamily="Inter, monospace">MUSKMELON LABS — v1</text>
        <text x="350" y="64" fontSize="8" fill="rgba(255,106,0,0.5)" fontFamily="Inter, monospace">[X]</text>
      </svg>

      {/* The logo mark, large and floating */}
      <div className="float" style={{ position: "relative", zIndex: 2, filter: "drop-shadow(0 32px 48px rgba(255,106,0,0.18)) drop-shadow(0 8px 16px rgba(0,0,0,0.5))" }}>
        <Logo size={Math.min(260, typeof window !== 'undefined' ? window.innerWidth * 0.4 : 260)} />
      </div>

      {/* Tag labels */}
      <div style={{
        position: "absolute", top: 24, left: 18,
        background: "#252525",
        border: "1px solid #2e2e2e",
        padding: "6px 14px",
        fontSize: 10, fontWeight: 700, color: "#555555",
        letterSpacing: "0.12em", textTransform: "uppercase",
      }}>
        EXPERIMENTAL
      </div>
      <div style={{
        position: "absolute", bottom: 16, right: 18,
        background: "#252525",
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
