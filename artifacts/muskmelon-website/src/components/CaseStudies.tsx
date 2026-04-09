import { FadeIn } from "./FadeIn";

const cases = [
  {
    tag: "Storage",
    title: "GitArchive",
    desc: "A new way to think about storage using Git as infrastructure. Content-addressed, distributed, free from vendor dependence.",
  },
  {
    tag: "Cognition",
    title: "AI Cognition System",
    desc: "Persona-based thinking models for decision making. Structured reasoning, not just generation.",
  },
  {
    tag: "Tools",
    title: "Internal Tools Suite",
    desc: "Tools built to solve real problems fast. Opinionated, focused, and built to outlast the sprint.",
  },
];

export function CaseStudies() {
  return (
    <section id="work" style={{
      background: "#080C10",
      padding: "96px 64px",
      borderBottom: "1px solid #1F2937",
      borderTop: "1px solid #1F2937",
    }}>
      <FadeIn>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48 }}>
          <div>
            <div className="section-label">Case Studies</div>
            <h2 style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 900,
              color: "#F9FAFB",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              margin: 0,
            }}>
              What We've Built
            </h2>
          </div>
        </div>
      </FadeIn>

      {/* 3-column with dividers — matches reference */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        background: "#111827",
        border: "1px solid #1F2937",
      }}>
        {cases.map((c, i) => (
          <FadeIn key={c.title} delay={i * 80}>
            <div style={{
              padding: "40px 36px",
              borderRight: i < cases.length - 1 ? "1px solid #1F2937" : "none",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              minHeight: 280,
            }}>
              <div>
                <div style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.16em",
                  textTransform: "uppercase", color: "#FF6A00", marginBottom: 16,
                }}>
                  {c.tag}
                </div>
                <h3 style={{
                  fontSize: 20, fontWeight: 800, color: "#F9FAFB",
                  letterSpacing: "-0.025em", marginBottom: 14,
                }}>
                  {c.title}
                </h3>
                <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.75 }}>
                  {c.desc}
                </p>
              </div>
              <div style={{ marginTop: "auto", paddingTop: 20, borderTop: "1px solid #1F2937" }}>
                <a href="#contact" style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#FF6A00",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  transition: "gap 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.gap = "12px")}
                onMouseLeave={e => (e.currentTarget.style.gap = "6px")}
                >
                  Learn Case <span>→</span>
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
