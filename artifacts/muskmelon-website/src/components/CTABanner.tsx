import { FadeIn } from "./FadeIn";

export function CTABanner() {
  return (
    <section style={{
      background: "#1e1e1e",
      padding: "0 64px 64px",
    }}>
      <FadeIn>
        <div style={{
          background: "#252525",
          border: "1px solid #2e2e2e",
          padding: "52px 56px",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
          gap: 48,
          position: "relative",
          overflow: "hidden",
        }}>
          <svg
            aria-hidden
            style={{ position: "absolute", right: 200, top: "50%", transform: "translateY(-50%)", opacity: 0.06 }}
            viewBox="0 0 80 80"
            width="80"
            height="80"
          >
            {[0,30,60,90,120,150].map(a => (
              <line key={a}
                x1={40 + 38 * Math.cos((a * Math.PI)/180)}
                y1={40 + 38 * Math.sin((a * Math.PI)/180)}
                x2={40 - 38 * Math.cos((a * Math.PI)/180)}
                y2={40 - 38 * Math.sin((a * Math.PI)/180)}
                stroke="#FF6A00" strokeWidth="4"
              />
            ))}
          </svg>

          <div>
            <h2 style={{
              fontSize: "clamp(28px, 3vw, 44px)",
              fontWeight: 900,
              color: "#F9FAFB",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: 0,
              marginBottom: 14,
              fontFamily: "'Inter', sans-serif",
            }}>
              Let's build something{" "}
              <span style={{ color: "#FF6A00" }}>interesting.</span>
            </h2>
            <p style={{ fontSize: 14, color: "#9CA3AF", margin: 0, maxWidth: 480 }}>
              We're selective. If you have an unconventional problem that deserves
              an unconventional solution — we want to hear about it.
            </p>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <a href="#contact" className="btn btn-fill" style={{ whiteSpace: "nowrap" }}>
              Start a Conversation
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
