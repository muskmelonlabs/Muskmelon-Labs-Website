import { FadeIn } from "./FadeIn";

const pillars = ["Open Systems", "AI Tools", "Developer First", "Built for Scale", "No Vendor Lock-in", "Ship Early"];

export function Trust() {
  return (
    <section style={{
      background: "#161616",
      borderBottom: "1px solid #2e2e2e",
      padding: "0 64px",
      overflow: "hidden",
    }}>
      <div style={{
        display: "flex",
        alignItems: "stretch",
      }}>
        {pillars.map((p, i) => (
          <FadeIn key={p} delay={i * 40} style={{ flex: 1 }}>
            <div style={{
              borderRight: i < pillars.length - 1 ? "1px solid #2e2e2e" : "none",
              padding: "20px 24px",
              textAlign: "center",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#555555",
              transition: "color 0.2s",
              cursor: "default",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#9CA3AF")}
            onMouseLeave={e => (e.currentTarget.style.color = "#555555")}
            >
              {p}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
