import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { FadeIn } from "@/components/FadeIn";

const colors = [
  { name: "Orange Primary",   hex: "#FF6A00", label: "Brand orange — actions, highlights, accent" },
  { name: "Dark Orange",      hex: "#D26123", label: "Depth layer — shadows, secondary fills" },
  { name: "Deep Brown",       hex: "#B94F22", label: "Tertiary depth — corners, contrast" },
  { name: "Background",       hex: "#1e1e1e", label: "Primary dark background" },
  { name: "Surface",          hex: "#252525", label: "Card and panel surface" },
  { name: "Alt Surface",      hex: "#161616", label: "Alternate section background" },
  { name: "Border",           hex: "#2e2e2e", label: "Dividers and borders" },
  { name: "Text Primary",     hex: "#F9FAFB", label: "Primary text — headings" },
  { name: "Text Secondary",   hex: "#9CA3AF", label: "Body copy and descriptions" },
  { name: "Sage Green",       hex: "#9EB493", label: "Logo accent — natural complement" },
];

const typeScales = [
  { label: "Display",   size: "80px / 900wt",  sample: "Build. Break. Evolve." },
  { label: "H1",        size: "52px / 900wt",  sample: "What We're Building" },
  { label: "H2",        size: "32px / 800wt",  sample: "How We Work" },
  { label: "H3",        size: "18px / 800wt",  sample: "GitArchive" },
  { label: "Body",      size: "14px / 400wt",  sample: "Experimental software built on open systems." },
  { label: "Caption",   size: "11px / 700wt",  sample: "SECTION LABEL · UPPERCASE" },
  { label: "Micro",     size: "10px / 700wt",  sample: "01 · TAG · META" },
];

const guidelines = [
  {
    rule: "No rounded corners",
    detail: "All UI elements use sharp, angular edges. Clip paths use the diagonal cut pattern for cards and avatars.",
  },
  {
    rule: "Orange as signal",
    detail: "Orange (#FF6A00) is reserved for interactive elements, CTAs, active states, and emphasis. Never decorative.",
  },
  {
    rule: "Dark-first",
    detail: "All surfaces are dark. No light-mode variant. Depth is expressed through layered background values — #161616, #1e1e1e, #252525.",
  },
  {
    rule: "Monospaced numbers",
    detail: "Numerical labels, version strings, and step indicators use monospaced styling with uppercase letterSpacing.",
  },
  {
    rule: "Minimal animation",
    detail: "FadeUp on scroll entry. Float for logo. No bouncing, spinning, or decorative transitions. Purposeful only.",
  },
  {
    rule: "Inter typeface",
    detail: "A single typeface — Inter — across all weights. No serif, no decorative fonts. Hierarchy through weight and size alone.",
  },
];

export function BrandBook() {
  return (
    <div style={{ background: "#1e1e1e", minHeight: "100vh" }}>
      <Nav />

      {/* Hero */}
      <section style={{
        paddingTop: 120,
        paddingBottom: 80,
        borderBottom: "1px solid #2e2e2e",
        background: "#161616",
      }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#FF6A00",
              borderLeft: "2px solid #FF6A00",
              paddingLeft: 12,
              marginBottom: 32,
              display: "inline-block",
            }}>
              Design System
            </div>
          </FadeIn>
          <FadeIn delay={60}>
            <h1 style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 900,
              color: "#F9FAFB",
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              marginBottom: 20,
              fontFamily: "'Inter', sans-serif",
            }}>
              Brand Identity System
            </h1>
          </FadeIn>
          <FadeIn delay={120}>
            <p style={{ fontSize: 16, color: "#9CA3AF", lineHeight: 1.75, maxWidth: 520 }}>
              The design language behind Muskmelon Labs — a complete system for logo, color, typography, and visual expression.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Logo Section */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid #2e2e2e" }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: 40 }}>
              <div className="section-label">Logo</div>
              <h2 style={{
                fontSize: "clamp(24px, 3vw, 36px)",
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

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 12 }}>
            {/* Primary mark */}
            <FadeIn delay={40}>
              <div style={{
                background: "#252525",
                border: "1px solid #2e2e2e",
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 24,
              }}>
                <Logo size={120} />
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#555555", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 6 }}>Primary Mark</div>
                  <div style={{ fontSize: 12, color: "#9CA3AF" }}>Full color on dark</div>
                </div>
              </div>
            </FadeIn>

            {/* On dark */}
            <FadeIn delay={80}>
              <div style={{
                background: "#161616",
                border: "1px solid #2e2e2e",
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 24,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Logo size={48} />
                  <span style={{ fontSize: 18, fontWeight: 800, color: "#F9FAFB", letterSpacing: "-0.02em", fontFamily: "'Inter', sans-serif" }}>
                    Muskmelon Labs
                  </span>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#555555", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 6 }}>Wordmark</div>
                  <div style={{ fontSize: 12, color: "#9CA3AF" }}>Logo + name lockup</div>
                </div>
              </div>
            </FadeIn>

            {/* Clearspace */}
            <FadeIn delay={120}>
              <div style={{
                background: "#252525",
                border: "1px solid #2e2e2e",
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#555555", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 4 }}>Usage Rules</div>
                {[
                  "Always use on dark backgrounds",
                  "Minimum size: 24px height",
                  "Maintain clear space equal to mark width",
                  "Do not recolor individual paths",
                  "Do not distort or rotate",
                ].map((rule, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 6, height: 6, background: "#FF6A00", flexShrink: 0, marginTop: 5 }} />
                    <span style={{ fontSize: 12, color: "#9CA3AF", lineHeight: 1.6 }}>{rule}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid #2e2e2e", background: "#161616" }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: 40 }}>
              <div className="section-label">Colors</div>
              <h2 style={{
                fontSize: "clamp(24px, 3vw, 36px)",
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" style={{ gap: 12 }}>
            {colors.map((c, i) => (
              <FadeIn key={c.hex} delay={i * 40}>
                <div style={{
                  background: "#252525",
                  border: "1px solid #2e2e2e",
                  overflow: "hidden",
                }}>
                  <div style={{
                    height: 72,
                    background: c.hex,
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }} />
                  <div style={{ padding: "14px 16px" }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#F9FAFB", marginBottom: 4 }}>{c.name}</div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#FF6A00", letterSpacing: "0.08em", marginBottom: 8, fontFamily: "monospace" }}>{c.hex}</div>
                    <div style={{ fontSize: 11, color: "#555555", lineHeight: 1.5 }}>{c.label}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid #2e2e2e" }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: 40 }}>
              <div className="section-label">Typography</div>
              <h2 style={{
                fontSize: "clamp(24px, 3vw, 36px)",
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

          <FadeIn delay={40}>
            <div style={{
              background: "#252525",
              border: "1px solid #2e2e2e",
              marginBottom: 24,
              padding: "20px 28px",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#555555", letterSpacing: "0.12em", textTransform: "uppercase", minWidth: 80 }}>Typeface</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#F9FAFB", letterSpacing: "-0.02em" }}>Inter</div>
              <div style={{ fontSize: 12, color: "#9CA3AF", marginLeft: 8 }}>Weights: 400 · 500 · 600 · 700 · 800 · 900</div>
            </div>
          </FadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#2e2e2e" }}>
            {typeScales.map((t, i) => (
              <FadeIn key={t.label} delay={i * 40}>
                <div style={{
                  background: "#1e1e1e",
                  padding: "20px 28px",
                  display: "flex",
                  alignItems: "baseline",
                  gap: 24,
                  flexWrap: "wrap",
                }}>
                  <div style={{ minWidth: 80, flexShrink: 0 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#555555", letterSpacing: "0.12em", textTransform: "uppercase" }}>{t.label}</div>
                    <div style={{ fontSize: 9, color: "#444444", marginTop: 3, fontFamily: "monospace" }}>{t.size}</div>
                  </div>
                  <div style={{
                    fontSize: t.label === "Display" ? "clamp(24px,4vw,48px)"
                            : t.label === "H1"      ? "clamp(20px,3vw,36px)"
                            : t.label === "H2"      ? 24
                            : t.label === "H3"      ? 18
                            : t.label === "Body"    ? 14
                            : t.label === "Caption" ? 11
                            : 10,
                    fontWeight: t.label === "Display" || t.label === "H1" ? 900
                               : t.label === "H2" || t.label === "H3" ? 800
                               : t.label === "Caption" || t.label === "Micro" ? 700
                               : 400,
                    color: t.label === "Caption" || t.label === "Micro" ? "#9CA3AF" : "#F9FAFB",
                    letterSpacing: t.label === "Display" || t.label === "H1" ? "-0.04em"
                                 : t.label === "Caption" || t.label === "Micro" ? "0.14em"
                                 : "-0.01em",
                    textTransform: (t.label === "Caption" || t.label === "Micro") ? "uppercase" : "none",
                    flex: 1,
                  }}>
                    {t.sample}
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
                fontSize: "clamp(24px, 3vw, 36px)",
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 12 }}>
            {guidelines.map((g, i) => (
              <FadeIn key={g.rule} delay={i * 60}>
                <div style={{
                  background: "#252525",
                  border: "1px solid #2e2e2e",
                  clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                  padding: "28px 28px",
                }}>
                  <div style={{ width: 28, height: 2, background: "#FF6A00", marginBottom: 20 }} />
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#F9FAFB", letterSpacing: "-0.01em", marginBottom: 12 }}>
                    {g.rule}
                  </div>
                  <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.7 }}>
                    {g.detail}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
