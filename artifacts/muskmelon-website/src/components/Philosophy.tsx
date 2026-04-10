import { FadeIn } from "./FadeIn";

const quotes = [
  {
    quote: "We don't build for trends. We build for long-term systems.",
    label: "On Product Strategy",
  },
  {
    quote: "Constraints create innovation. Every limitation is a forcing function for better thinking.",
    label: "On Engineering",
  },
  {
    quote: "Simplicity scales. Complexity collapses. Choose the former, always.",
    label: "On Design",
  },
];

export function Philosophy() {
  return (
    <section id="vision" style={{
      background: "#1e1e1e",
      padding: "96px 64px",
      borderBottom: "1px solid #2e2e2e",
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
              fontFamily: "'Inter', sans-serif",
            }}>
              Our Thinking
            </h2>
          </div>
        </div>
      </FadeIn>

      <div style={{ display: "flex", gap: 12, alignItems: "stretch" }}>
        {quotes.map((t, i) => (
          <FadeIn key={i} delay={i * 80} style={{ flex: 1, display: "flex" }}>
            <div style={{
              background: "#161616",
              border: "1px solid #2e2e2e",
              clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 24,
              width: "100%",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,106,0,0.3)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#2e2e2e"; }}
            >
              {/* Orange bar accent */}
              <div style={{ width: 32, height: 2, background: "#FF6A00" }} />

              <blockquote style={{
                fontSize: 15,
                fontWeight: 600,
                color: "#E5E7EB",
                lineHeight: 1.65,
                margin: 0,
                flex: 1,
              }}>
                "{t.quote}"
              </blockquote>

              <div style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#555555",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                paddingTop: 16,
                borderTop: "1px solid #2e2e2e",
              }}>
                {t.label} · Muskmelon Labs
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
