import { FadeIn } from "./FadeIn";

const cases = [
  {
    label: "Storage",
    title: "GitArchive",
    desc: "A new way to think about storage using Git as infrastructure. Content-addressed, distributed, and free from vendor dependence.",
    stat1: { val: "∞", label: "Storage limit" },
    stat2: { val: "Git", label: "Infrastructure" },
  },
  {
    label: "Cognition",
    title: "AI Cognition System",
    desc: "Persona-based thinking models for decision making. Structured reasoning, not just generation.",
    stat1: { val: "N", label: "Persona layers" },
    stat2: { val: "AI", label: "Core engine" },
  },
  {
    label: "Tools",
    title: "Internal Tools",
    desc: "Tools built to solve real problems fast. Opinionated, focused, and built to last.",
    stat1: { val: "0→1", label: "Velocity" },
    stat2: { val: "Real", label: "Problem-solving" },
  },
];

export function CaseStudies() {
  return (
    <section
      id="work"
      style={{
        background: "#080C10",
        padding: "100px 80px",
        borderBottom: "1px solid #1F2937",
      }}
    >
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
          Work
        </div>
        <h2
          style={{
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 900,
            color: "#E5E7EB",
            letterSpacing: "-0.03em",
            margin: 0,
            marginBottom: 56,
          }}
        >
          What We've Built
        </h2>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {cases.map((c, i) => (
          <FadeIn key={c.title} delay={i * 80}>
            <div
              className="card-glow"
              style={{
                background: "#111827",
                border: "1px solid #1F2937",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 24,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Diagonal cut accent top right */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 0,
                  height: 0,
                  borderStyle: "solid",
                  borderWidth: "0 40px 40px 0",
                  borderColor: `transparent #0B0F14 transparent transparent`,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 0,
                  height: 0,
                  borderStyle: "solid",
                  borderWidth: "0 38px 38px 0",
                  borderColor: `transparent rgba(255,106,0,0.08) transparent transparent`,
                }}
              />

              <div>
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#FF6A00",
                    marginBottom: 14,
                  }}
                >
                  {c.label}
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#E5E7EB",
                    letterSpacing: "-0.02em",
                    margin: 0,
                    marginBottom: 12,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "#9CA3AF",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {c.desc}
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 1,
                  background: "#1F2937",
                  borderTop: "1px solid #1F2937",
                  paddingTop: 20,
                }}
              >
                {[c.stat1, c.stat2].map((stat, si) => (
                  <div
                    key={si}
                    style={{
                      background: "#0B0F14",
                      padding: "12px 0",
                    }}
                  >
                    <div style={{ fontSize: 18, fontWeight: 900, color: "#E5E7EB", letterSpacing: "-0.02em" }}>
                      {stat.val}
                    </div>
                    <div style={{ fontSize: 10, color: "#4B5563", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
