import { FadeIn } from "./FadeIn";

export function Team() {
  return (
    <section
      id="team"
      style={{
        background: "#080C10",
        padding: "100px 80px",
        borderBottom: "1px solid #1F2937",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <FadeIn>
          <div>
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
              Team
            </div>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 900,
                color: "#E5E7EB",
                letterSpacing: "-0.03em",
                margin: 0,
                marginBottom: 24,
              }}
            >
              The Builders
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#9CA3AF",
                lineHeight: 1.8,
                margin: 0,
                maxWidth: 420,
              }}
            >
              Small team. High leverage.
              Focused on building systems that matter.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#1F2937" }}>
            {[
              { label: "Team size",    val: "Small" },
              { label: "Leverage",     val: "High" },
              { label: "Focus",        val: "Systems" },
              { label: "Philosophy",   val: "Build what matters" },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  background: "#111827",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  padding: "20px 24px",
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 600, color: "#4B5563", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {row.label}
                </span>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#E5E7EB" }}>
                  {row.val}
                </span>
              </div>
            ))}
            <div
              style={{
                background: "#0B0F14",
                padding: "20px 24px",
                fontSize: 11,
                color: "#374151",
                letterSpacing: "0.08em",
                textAlign: "center",
              }}
            >
              Real profiles coming soon.
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
