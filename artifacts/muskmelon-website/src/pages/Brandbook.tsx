import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { FadeIn } from "@/components/FadeIn";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const colors = [
  { name: "Orange", hex: "#FF6A00", role: "Primary Accent", dark: false },
  { name: "Deep Background", hex: "#161616", role: "Page Background", dark: true },
  { name: "Surface", hex: "#1e1e1e", role: "Card / Section Background", dark: true },
  { name: "Elevated", hex: "#252525", role: "Elevated Surface", dark: true },
  { name: "Border", hex: "#2e2e2e", role: "Borders & Dividers", dark: true },
  { name: "Muted Text", hex: "#9CA3AF", role: "Secondary Text", dark: true },
  { name: "Primary Text", hex: "#F9FAFB", role: "Headlines & Body", dark: true },
  { name: "Sage Green", hex: "#9EB493", role: "Brand Mark — Leaf", dark: false },
];

const typeScales = [
  { label: "Display", size: "72px", weight: "900", usage: "Hero headlines" },
  { label: "H1", size: "52px", weight: "900", usage: "Page titles" },
  { label: "H2", size: "40px", weight: "900", usage: "Section headings" },
  { label: "H3", size: "24px", weight: "800", usage: "Card titles" },
  { label: "Body", size: "15px", weight: "400", usage: "Paragraphs & descriptions" },
  { label: "Caption", size: "13px", weight: "500", usage: "Supporting text" },
  { label: "Label", size: "11px", weight: "700", usage: "Section labels, tags, badges" },
];

const logoVariants = [
  { label: "Full Mark + Wordmark", bg: "#161616" },
  { label: "Mark Only", bg: "#1e1e1e" },
  { label: "On Light Background", bg: "#F9FAFB" },
];

const usageRules = [
  {
    type: "do",
    rules: [
      "Use the orange accent (#FF6A00) for interactive elements and key highlights only.",
      "Maintain sharp, angular geometry. Avoid rounded corners throughout.",
      "Keep whitespace consistent using the 8px base grid.",
      "Apply border lines (#2e2e2e) to define space without using heavy shadows.",
    ],
  },
  {
    type: "dont",
    rules: [
      "Don't apply rounded corners to any UI element.",
      "Don't use gradients as fills — only as subtle background glows.",
      "Don't stretch or recolor the logo mark.",
      "Don't use orange for large background fills — it should remain a precise accent.",
    ],
  },
];

export function Brandbook() {
  return (
    <div style={{ background: "#1e1e1e", minHeight: "100vh" }}>
      <Nav />

      {/* Hero */}
      <section style={{
        paddingTop: 120,
        paddingBottom: 80,
        borderBottom: "1px solid #2e2e2e",
        background: "#161616",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 50% 70% at 90% 50%, rgba(255,106,0,0.05) 0%, transparent 70%)",
        }} />
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
          <FadeIn>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.16em",
              textTransform: "uppercase", color: "#FF6A00",
              borderLeft: "2px solid #FF6A00", paddingLeft: 12,
              marginBottom: 32, display: "inline-block",
            }}>
              Brand Identity System
            </div>
          </FadeIn>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between" style={{ gap: 40 }}>
            <FadeIn delay={60}>
              <h1 style={{
                fontSize: "clamp(36px, 5vw, 72px)",
                fontWeight: 900,
                color: "#F9FAFB",
                letterSpacing: "-0.04em",
                lineHeight: 1.0,
                fontFamily: "'Inter', sans-serif",
                margin: 0,
              }}>
                Brand Identity<br />
                <span style={{ color: "#FF6A00" }}>System.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={120}>
              <div style={{ maxWidth: 380 }}>
                <p style={{ fontSize: 15, color: "#9CA3AF", lineHeight: 1.8, marginBottom: 0 }}>
                  The design language behind Muskmelon Labs. A complete reference for logo usage, color system, typography, and visual guidelines.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Logo */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid #2e2e2e" }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: 40 }}>
              <div className="section-label">Logo</div>
              <h2 style={{
                fontSize: "clamp(24px, 3vw, 40px)",
                fontWeight: 900,
                color: "#F9FAFB",
                letterSpacing: "-0.03em",
                margin: 0,
                fontFamily: "'Inter', sans-serif",
              }}>
                The Mark
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3" style={{
            border: "1px solid #2e2e2e",
          }}>
            {logoVariants.map((v, i) => (
              <FadeIn key={v.label} delay={i * 80}>
                <div style={{
                  background: v.bg,
                  borderRight: "1px solid #2e2e2e",
                  padding: "56px 40px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 32,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <Logo size={i === 1 ? 48 : 36} />
                    {i !== 1 && (
                      <span style={{
                        fontSize: 16,
                        fontWeight: 800,
                        color: v.bg === "#F9FAFB" ? "#161616" : "#F9FAFB",
                        letterSpacing: "-0.02em",
                        fontFamily: "'Inter', sans-serif",
                      }}>
                        Muskmelon Labs
                      </span>
                    )}
                  </div>
                  <div style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: v.bg === "#F9FAFB" ? "#555555" : "#555555",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}>
                    {v.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <div style={{
              marginTop: 1,
              background: "#252525",
              border: "1px solid #2e2e2e",
              borderTop: "none",
              padding: "24px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#FF6A00", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Construction
              </div>
              <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.75, margin: 0, maxWidth: 640 }}>
                The mark is composed of six triangular facets derived from a geometric slice of a muskmelon. The warm orange tones represent energy and precision; the sage green references organic growth. Do not alter proportions or individual face colors.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Colors */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid #2e2e2e", background: "#161616" }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: 40 }}>
              <div className="section-label">Colors</div>
              <h2 style={{
                fontSize: "clamp(24px, 3vw, 40px)",
                fontWeight: 900,
                color: "#F9FAFB",
                letterSpacing: "-0.03em",
                margin: 0,
                fontFamily: "'Inter', sans-serif",
              }}>
                Color System
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-4" style={{
            border: "1px solid #2e2e2e",
          }}>
            {colors.map((c, i) => (
              <FadeIn key={c.hex} delay={i * 50}>
                <div style={{
                  borderRight: "1px solid #2e2e2e",
                  borderBottom: "1px solid #2e2e2e",
                  display: "flex",
                  flexDirection: "column",
                }}>
                  <div style={{
                    height: 80,
                    background: c.hex,
                  }} />
                  <div style={{ padding: "16px 18px", background: "#252525" }}>
                    <div style={{ fontSize: 13, fontWeight: 800, color: "#F9FAFB", marginBottom: 4, letterSpacing: "-0.01em" }}>
                      {c.name}
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#FF6A00", fontFamily: "monospace", marginBottom: 6 }}>
                      {c.hex}
                    </div>
                    <div style={{ fontSize: 11, color: "#555555", letterSpacing: "0.06em" }}>
                      {c.role}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid #2e2e2e" }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: 40 }}>
              <div className="section-label">Typography</div>
              <h2 style={{
                fontSize: "clamp(24px, 3vw, 40px)",
                fontWeight: 900,
                color: "#F9FAFB",
                letterSpacing: "-0.03em",
                margin: 0,
                fontFamily: "'Inter', sans-serif",
              }}>
                Type Scale
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={60}>
            <div style={{
              background: "#252525",
              border: "1px solid #2e2e2e",
              padding: "24px 32px",
              marginBottom: 1,
              display: "flex",
              gap: 48,
              alignItems: "baseline",
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#555555", letterSpacing: "0.12em", textTransform: "uppercase", minWidth: 80 }}>Typeface</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#F9FAFB", letterSpacing: "-0.04em", fontFamily: "'Inter', sans-serif" }}>
                Inter
              </div>
              <div style={{ fontSize: 13, color: "#9CA3AF" }}>
                Variable — 400 / 500 / 600 / 700 / 800 / 900
              </div>
            </div>
          </FadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {typeScales.map((t, i) => (
              <FadeIn key={t.label} delay={i * 50 + 80}>
                <div className="flex flex-col sm:flex-row sm:items-center" style={{
                  background: "#1e1e1e",
                  border: "1px solid #2e2e2e",
                  padding: "20px 32px",
                  gap: 16,
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = "#252525"}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = "#1e1e1e"}
                >
                  <div style={{ minWidth: 80, fontSize: 11, fontWeight: 700, color: "#555555", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    {t.label}
                  </div>
                  <div style={{
                    fontSize: t.size,
                    fontWeight: t.weight,
                    color: "#F9FAFB",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    fontFamily: "'Inter', sans-serif",
                    flex: 1,
                  }}>
                    Aa
                  </div>
                  <div style={{ display: "flex", gap: 32, flexShrink: 0 }}>
                    <div>
                      <div style={{ fontSize: 10, color: "#555555", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Size</div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#9CA3AF", fontFamily: "monospace" }}>{t.size}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 10, color: "#555555", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Weight</div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#9CA3AF", fontFamily: "monospace" }}>{t.weight}</div>
                    </div>
                    <div style={{ minWidth: 160 }}>
                      <div style={{ fontSize: 10, color: "#555555", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Usage</div>
                      <div style={{ fontSize: 12, color: "#9CA3AF" }}>{t.usage}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid #2e2e2e", background: "#161616" }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: 40 }}>
              <div className="section-label">Guidelines</div>
              <h2 style={{
                fontSize: "clamp(24px, 3vw, 40px)",
                fontWeight: 900,
                color: "#F9FAFB",
                letterSpacing: "-0.03em",
                margin: 0,
                fontFamily: "'Inter', sans-serif",
              }}>
                Usage Guidelines
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 12 }}>
            {usageRules.map((group, gi) => (
              <FadeIn key={group.type} delay={gi * 100}>
                <div style={{
                  background: "#252525",
                  border: "1px solid #2e2e2e",
                  borderTop: `2px solid ${group.type === "do" ? "#FF6A00" : "#444444"}`,
                  padding: "32px 32px",
                  height: "100%",
                }}>
                  <div style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: group.type === "do" ? "#FF6A00" : "#9CA3AF",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    marginBottom: 24,
                  }}>
                    {group.type === "do" ? "Do" : "Don't"}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {group.rules.map((rule, ri) => (
                      <div key={ri} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                        <div style={{
                          width: 16,
                          height: 16,
                          background: group.type === "do" ? "rgba(255,106,0,0.15)" : "rgba(68,68,68,0.3)",
                          border: `1px solid ${group.type === "do" ? "rgba(255,106,0,0.4)" : "#444444"}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 2,
                        }}>
                          <span style={{
                            fontSize: 9,
                            fontWeight: 900,
                            color: group.type === "do" ? "#FF6A00" : "#555555",
                          }}>
                            {group.type === "do" ? "✓" : "✗"}
                          </span>
                        </div>
                        <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.65, margin: 0 }}>
                          {rule}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Work CTA */}
      <section style={{ padding: "64px 0" }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#555555", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
                  Muskmelon Labs · Brand Identity System
                </div>
                <div style={{ fontSize: 14, color: "#9CA3AF" }}>
                  Questions about usage? Reach out.
                </div>
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <a href={`${BASE}/#work`} className="btn btn-stroke" style={{ fontSize: 12 }}>
                  ← Back to Work
                </a>
                <a href={`${BASE}/#contact`} className="btn btn-fill" style={{ fontSize: 12 }}>
                  Get in Touch
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
