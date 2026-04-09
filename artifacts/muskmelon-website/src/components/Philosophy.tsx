import { FadeIn } from "./FadeIn";

const testimonials = [
  {
    quote: "We don't build for trends. We build for long-term systems.",
    name: "On Product Strategy",
    company: "Muskmelon Labs",
    initials: "PS",
  },
  {
    quote: "Constraints create innovation. Every limitation is a forcing function for better thinking.",
    name: "On Engineering",
    company: "Muskmelon Labs",
    initials: "EN",
  },
  {
    quote: "Simplicity scales. Complexity collapses. Choose the former, always.",
    name: "On Design",
    company: "Muskmelon Labs",
    initials: "DS",
  },
];

export function Philosophy() {
  return (
    <section id="vision" style={{
      background: "#0B0F14",
      padding: "96px 64px",
      borderBottom: "1px solid #1F2937",
    }}>
      <FadeIn>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48 }}>
          <div>
            <div className="section-label">Thinking</div>
            <h2 style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 900,
              color: "#F9FAFB",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              margin: 0,
            }}>
              Our Thinking
            </h2>
          </div>
        </div>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
        {testimonials.map((t, i) => (
          <FadeIn key={i} delay={i * 80}>
            <div className="card-dark" style={{
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 28,
              minHeight: 220,
            }}>
              {/* Stars row */}
              <div style={{ display: "flex", gap: 4 }}>
                {[...Array(5)].map((_, si) => (
                  <svg key={si} width="12" height="12" viewBox="0 0 12 12" fill="#FF6A00">
                    <polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9.5 3,11 3.5,7.5 1,5 4.5,4.5"/>
                  </svg>
                ))}
              </div>

              <blockquote style={{
                fontSize: 14,
                fontWeight: 500,
                color: "#E5E7EB",
                lineHeight: 1.7,
                fontStyle: "italic",
                margin: 0,
                flex: 1,
              }}>
                "{t.quote}"
              </blockquote>

              <div style={{ display: "flex", alignItems: "center", gap: 14, paddingTop: 16, borderTop: "1px solid #1F2937" }}>
                <div style={{
                  width: 36,
                  height: 36,
                  background: "#111827",
                  border: "1px solid #2D3F55",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  fontWeight: 800,
                  color: "#9CA3AF",
                  letterSpacing: "0.04em",
                  flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#F9FAFB" }}>{t.name}</div>
                  <div style={{ fontSize: 10, color: "#4B5563", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {t.company}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
