import { useState } from "react";
import { FadeIn } from "./FadeIn";

const steps = [
  {
    num: "01",
    title: "Ideation",
    desc: "Identify unconventional opportunities. We don't start with features — we start with friction. What problem has been ignored because it's too hard or too weird to solve?",
  },
  {
    num: "02",
    title: "Rapid Prototyping",
    desc: "Build fast. Test faster. The goal is a working signal, not a polished product. We compress feedback loops until the answer is obvious.",
  },
  {
    num: "03",
    title: "System Design",
    desc: "Structure for scale. Patterns emerge from working prototypes. We formalize what works into systems that won't break under weight.",
  },
  {
    num: "04",
    title: "Iteration",
    desc: "Refine based on real usage. Data beats opinions. We instrument everything and let reality guide the roadmap.",
  },
  {
    num: "05",
    title: "Deployment",
    desc: "Ship early. Improve continuously. Done is better than perfect. A product in the world teaches you more than a year of planning.",
  },
];

export function Process() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="process"
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
          Process
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
          How We Work
        </h2>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
        {/* Accordion */}
        <div>
          {steps.map((step, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={step.num} delay={i * 40}>
                <div
                  style={{
                    borderBottom: "1px solid #1F2937",
                    cursor: "pointer",
                  }}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "20px 0",
                      gap: 16,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          color: isOpen ? "#FF6A00" : "#374151",
                          letterSpacing: "0.12em",
                          width: 24,
                          flexShrink: 0,
                          transition: "color 0.2s",
                        }}
                      >
                        {step.num}
                      </span>
                      <span
                        style={{
                          fontSize: 15,
                          fontWeight: 600,
                          color: isOpen ? "#E5E7EB" : "#9CA3AF",
                          letterSpacing: "-0.01em",
                          transition: "color 0.2s",
                        }}
                      >
                        {step.title}
                      </span>
                    </div>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: isOpen ? "#FF6A00" : "#374151",
                        fontSize: 16,
                        flexShrink: 0,
                        transition: "color 0.2s, transform 0.2s",
                        transform: isOpen ? "rotate(45deg)" : "none",
                      }}
                    >
                      +
                    </div>
                  </div>

                  <div
                    style={{
                      maxHeight: isOpen ? 200 : 0,
                      overflow: "hidden",
                      transition: "max-height 0.3s ease, opacity 0.3s ease",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p
                      style={{
                        fontSize: 13,
                        color: "#9CA3AF",
                        lineHeight: 1.8,
                        padding: "0 0 20px 44px",
                        margin: 0,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Right: step visual */}
        <FadeIn delay={100}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              background: "#1F2937",
              alignSelf: "flex-start",
            }}
          >
            {steps.map((step, i) => (
              <div
                key={step.num}
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  background: open === i ? "#111827" : "#0B0F14",
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  cursor: "pointer",
                  transition: "background 0.2s",
                  borderLeft: open === i ? "2px solid #FF6A00" : "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  if (open !== i) (e.currentTarget as HTMLElement).style.background = "#0e1318";
                }}
                onMouseLeave={(e) => {
                  if (open !== i) (e.currentTarget as HTMLElement).style.background = "#0B0F14";
                }}
              >
                <span style={{ fontSize: 9, fontWeight: 700, color: open === i ? "#FF6A00" : "#374151", letterSpacing: "0.14em" }}>
                  {step.num}
                </span>
                <span style={{ fontSize: 12, fontWeight: 500, color: open === i ? "#E5E7EB" : "#4B5563", letterSpacing: "0.02em" }}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
