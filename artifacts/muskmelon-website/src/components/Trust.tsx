import { FadeIn } from "./FadeIn";

const pillars = ["Open Systems", "AI Tools", "Developer First", "Built for Scale", "No Vendor Lock-in", "Ship Early"];

export function Trust() {
  return (
    <section style={{
      background: "#161616",
      borderBottom: "1px solid #2e2e2e",
      overflow: "hidden",
    }}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {pillars.map((p, i) => (
          <FadeIn
            key={p}
            delay={i * 40}
            style={{
              borderRight: "1px solid #2e2e2e",
              borderBottom: "1px solid #2e2e2e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{
              padding: "20px 16px",
              textAlign: "center",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#555555",
              transition: "color 0.2s",
              cursor: "default",
              width: "100%",
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
