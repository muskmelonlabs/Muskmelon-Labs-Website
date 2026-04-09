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
    title: "Research & Strategy Development",
    desc: "Map the problem space. Understand constraints. Define what success actually looks like before writing a single line of code.",
  },
  {
    num: "03",
    title: "Rapid Prototyping",
    desc: "Build fast. Test faster. The goal is a working signal, not a polished product. We compress feedback loops until the answer is obvious.",
  },
  {
    num: "04",
    title: "System Design",
    desc: "Structure for scale. Patterns emerge from working prototypes. We formalize what works into systems that won't break under weight.",
  },
  {
    num: "05",
    title: "Iteration",
    desc: "Refine based on real usage. Data beats opinions. We instrument everything and let reality guide the roadmap.",
  },
  {
    num: "06",
    title: "Deployment",
    desc: "Ship early. Improve continuously. Done is better than perfect. A product in the world teaches you more than a year of planning.",
  },
];

export function Process() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="process" style={{
      background: "#0B0F14",
      padding: "96px 64px",
      borderBottom: "1px solid #1F2937",
    }}>
      <FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "flex-start" }}>
          <div>
            <div className="section-label">Process</div>
            <h2 style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 900,
              color: "#F9FAFB",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              margin: 0,
            }}>
              Our Working Process
            </h2>
          </div>
          <p style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.75, paddingTop: 16 }}>
            Step-by-step from unconventional idea to production system.
            Every phase is purposeful; nothing is ceremonial.
          </p>
        </div>
      </FadeIn>

      <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 1, background: "#1F2937" }}>
        {steps.map((step, i) => {
          const isOpen = open === i;
          return (
            <FadeIn key={step.num} delay={i * 40}>
              <div
                style={{
                  background: isOpen ? "#111827" : "#0B0F14",
                  borderLeft: isOpen ? `3px solid #FF6A00` : "3px solid transparent",
                  cursor: "pointer",
                  transition: "background 0.2s, border-color 0.2s",
                }}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "22px 28px",
                  gap: 24,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                    <span style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: isOpen ? "#FF6A00" : "#374151",
                      letterSpacing: "0.12em",
                      flexShrink: 0,
                      transition: "color 0.2s",
                      minWidth: 28,
                    }}>
                      {step.num}
                    </span>
                    <span style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: isOpen ? "#F9FAFB" : "#9CA3AF",
                      letterSpacing: "-0.01em",
                      transition: "color 0.2s",
                    }}>
                      {step.title}
                    </span>
                  </div>
                  <div style={{
                    width: 28,
                    height: 28,
                    border: `1px solid ${isOpen ? "#FF6A00" : "#2D3F55"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 300,
                    color: isOpen ? "#FF6A00" : "#4B5563",
                    flexShrink: 0,
                    transition: "all 0.2s",
                    transform: isOpen ? "rotate(45deg)" : "none",
                  }}>
                    +
                  </div>
                </div>

                <div className="accordion-body" style={{
                  maxHeight: isOpen ? 160 : 0,
                  opacity: isOpen ? 1 : 0,
                }}>
                  <p style={{
                    fontSize: 13,
                    color: "#9CA3AF",
                    lineHeight: 1.8,
                    padding: "0 28px 24px 76px",
                    margin: 0,
                  }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
