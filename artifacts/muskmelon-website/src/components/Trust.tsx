import { FadeIn } from "./FadeIn";

const items = [
  "Open Systems",
  "AI Tools",
  "Developer First",
  "Built for Scale",
];

export function Trust() {
  return (
    <section
      style={{
        background: "#080C10",
        borderBottom: "1px solid #1F2937",
        padding: "28px 80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
      }}
    >
      {items.map((item, i) => (
        <FadeIn key={item} delay={i * 60}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 0,
            }}
          >
            <div
              style={{
                padding: "10px 40px",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#4B5563",
                borderRight: i < items.length - 1 ? "1px solid #1F2937" : "none",
                transition: "color 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#9CA3AF")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#4B5563")}
            >
              {item}
            </div>
          </div>
        </FadeIn>
      ))}
    </section>
  );
}
