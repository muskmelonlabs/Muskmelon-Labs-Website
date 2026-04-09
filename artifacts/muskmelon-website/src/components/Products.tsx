import { FadeIn } from "./FadeIn";

const products = [
  {
    number: "01",
    title: "GitArchive",
    desc: "Unlimited storage powered by Git infrastructure. Version everything. Lose nothing.",
    tag: "Infrastructure",
  },
  {
    number: "02",
    title: "AI Assist Systems",
    desc: "Intelligent tools designed to think with you — not for you.",
    tag: "AI",
  },
  {
    number: "03",
    title: "Experimental Interfaces",
    desc: "New ways to interact with software. Beyond the grid.",
    tag: "Design",
  },
  {
    number: "04",
    title: "Automation Tools",
    desc: "Reduce friction. Increase output. Let systems handle the repetitive.",
    tag: "Productivity",
  },
  {
    number: "05",
    title: "Open Infrastructure",
    desc: "Built on systems that scale freely. No lock-in. No compromise.",
    tag: "Open Source",
  },
  {
    number: "06",
    title: "Data Systems",
    desc: "Structured, searchable, extensible. Data as a first-class citizen.",
    tag: "Data",
  },
];

export function Products() {
  return (
    <section
      id="products"
      style={{
        background: "#0B0F14",
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
          Products
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
          What We're Building
        </h2>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          background: "#1F2937",
        }}
      >
        {products.map((p, i) => (
          <FadeIn key={p.number} delay={i * 60}>
            <div
              className="card-glow clip-card"
              style={{
                background: "#111827",
                border: "1px solid #1F2937",
                padding: "32px 28px",
                cursor: "pointer",
                position: "relative",
                minHeight: 200,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#374151",
                  letterSpacing: "0.14em",
                }}
              >
                {p.number}
              </div>

              {/* Tag */}
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  right: 28,
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#374151",
                  border: "1px solid #1F2937",
                  padding: "3px 8px",
                }}
              >
                {p.tag}
              </div>

              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#E5E7EB",
                    letterSpacing: "-0.02em",
                    margin: 0,
                    marginBottom: 10,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "#9CA3AF",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {p.desc}
                </p>
              </div>

              {/* Corner accent */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: 0,
                  borderStyle: "solid",
                  borderWidth: "0 0 20px 20px",
                  borderColor: `transparent transparent #0B0F14 transparent`,
                }}
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
