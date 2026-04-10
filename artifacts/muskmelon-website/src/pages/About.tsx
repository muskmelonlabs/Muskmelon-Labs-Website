import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { FadeIn } from "@/components/FadeIn";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const vision = [
  {
    label: "01",
    title: "Build things worth building",
    body: "We don't chase trends. We build for long-term systems — software that compounds in value over time and holds up under pressure.",
  },
  {
    label: "02",
    title: "Constraints are the brief",
    body: "Every limitation is a forcing function for better thinking. We welcome hard problems because they produce the most interesting solutions.",
  },
  {
    label: "03",
    title: "Openness as default",
    body: "We build on open systems. No lock-in, no black boxes. If something can be transparent, it should be.",
  },
];

const whatWeBuild = [
  {
    tag: "Storage",
    title: "GitArchive",
    desc: "Unlimited, distributed storage built on Git infrastructure.",
  },
  {
    tag: "Cognition",
    title: "AI Systems",
    desc: "Persona-driven models for structured decision making — thinking tools, not generation tools.",
  },
  {
    tag: "Infrastructure",
    title: "Open Infra",
    desc: "Infrastructure that scales freely, without vendor lock-in or compromise.",
  },
  {
    tag: "Automation",
    title: "Automation Tools",
    desc: "Reduce friction. Increase output. Let systems handle the repetitive.",
  },
];

const philosophy = [
  {
    quote: "Done is better than perfect. A product in the world teaches you more than a year of planning.",
    label: "On Shipping",
  },
  {
    quote: "Simplicity scales. Complexity collapses. Choose the former, always.",
    label: "On Design",
  },
  {
    quote: "We instrument everything and let reality guide the roadmap — not opinions.",
    label: "On Iteration",
  },
];

export function About() {
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
          background: "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(255,106,0,0.04) 0%, transparent 70%)",
        }} />
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
          <FadeIn>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.16em",
              textTransform: "uppercase", color: "#FF6A00",
              borderLeft: "2px solid #FF6A00", paddingLeft: 12,
              marginBottom: 32, display: "inline-block",
            }}>
              About
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
                About<br />
                <span style={{ color: "#FF6A00" }}>Muskmelon</span><br />
                Labs.
              </h1>
            </FadeIn>

            <FadeIn delay={120}>
              <div style={{ maxWidth: 400 }}>
                <p style={{ fontSize: 15, color: "#9CA3AF", lineHeight: 1.8, marginBottom: 28 }}>
                  An experimental product lab building software on open systems, AI, and unconventional thinking. Small team. High leverage. Focused on systems that matter.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Logo size={32} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: "#F9FAFB", letterSpacing: "-0.01em" }}>Muskmelon Labs</div>
                    <div style={{ fontSize: 10, color: "#555555", letterSpacing: "0.1em", textTransform: "uppercase" }}>Est. 2024</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid #2e2e2e" }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: 40 }}>
              <div className="section-label">Vision</div>
              <h2 style={{
                fontSize: "clamp(24px, 3vw, 40px)",
                fontWeight: 900,
                color: "#F9FAFB",
                letterSpacing: "-0.03em",
                margin: 0,
                fontFamily: "'Inter', sans-serif",
              }}>
                What We Stand For
              </h2>
            </div>
          </FadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#2e2e2e" }}>
            {vision.map((v, i) => (
              <FadeIn key={v.label} delay={i * 60}>
                <div className="flex flex-col sm:flex-row" style={{
                  background: "#1e1e1e",
                  padding: "32px 28px",
                  gap: 24,
                  borderLeft: "3px solid transparent",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderLeftColor = "#FF6A00";
                  (e.currentTarget as HTMLDivElement).style.background = "#252525";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderLeftColor = "transparent";
                  (e.currentTarget as HTMLDivElement).style.background = "#1e1e1e";
                }}
                >
                  <div style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#444444",
                    letterSpacing: "0.12em",
                    flexShrink: 0,
                    minWidth: 32,
                    paddingTop: 4,
                  }}>
                    {v.label}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 17, fontWeight: 800, color: "#F9FAFB", letterSpacing: "-0.02em", marginBottom: 10 }}>
                      {v.title}
                    </div>
                    <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.75, margin: 0 }}>
                      {v.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid #2e2e2e", background: "#161616" }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: 40 }}>
              <div className="section-label">Products</div>
              <h2 style={{
                fontSize: "clamp(24px, 3vw, 40px)",
                fontWeight: 900,
                color: "#F9FAFB",
                letterSpacing: "-0.03em",
                margin: 0,
                fontFamily: "'Inter', sans-serif",
              }}>
                What We Build
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 12 }}>
            {whatWeBuild.map((w, i) => (
              <FadeIn key={w.title} delay={i * 60}>
                <div style={{
                  background: "#252525",
                  border: "1px solid #2e2e2e",
                  clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                  padding: "28px 24px",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,106,0,0.4)"}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = "#2e2e2e"}
                >
                  <div style={{
                    fontSize: 10, fontWeight: 700, color: "#FF6A00",
                    letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14,
                  }}>
                    {w.tag}
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#F9FAFB", letterSpacing: "-0.02em", marginBottom: 10 }}>
                    {w.title}
                  </div>
                  <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.65, margin: 0 }}>
                    {w.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={280}>
            <div style={{ marginTop: 32, textAlign: "center" }}>
              <a href={`${BASE}/#products`} className="btn btn-stroke" style={{ fontSize: 12 }}>
                View All Services →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid #2e2e2e" }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: 40 }}>
              <div className="section-label">Philosophy</div>
              <h2 style={{
                fontSize: "clamp(24px, 3vw, 40px)",
                fontWeight: 900,
                color: "#F9FAFB",
                letterSpacing: "-0.03em",
                margin: 0,
                fontFamily: "'Inter', sans-serif",
              }}>
                How We Think
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: 12 }}>
            {philosophy.map((p, i) => (
              <FadeIn key={i} delay={i * 80} style={{ display: "flex" }}>
                <div style={{
                  background: "#161616",
                  border: "1px solid #2e2e2e",
                  clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                  padding: "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  width: "100%",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,106,0,0.3)"}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = "#2e2e2e"}
                >
                  <div style={{ width: 32, height: 2, background: "#FF6A00" }} />
                  <blockquote style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#E5E7EB",
                    lineHeight: 1.65,
                    margin: 0,
                    flex: 1,
                  }}>
                    "{p.quote}"
                  </blockquote>
                  <div style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#555555",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    paddingTop: 16,
                    borderTop: "1px solid #2e2e2e",
                  }}>
                    {p.label} · Muskmelon Labs
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0" }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between" style={{
              background: "#252525",
              border: "1px solid #2e2e2e",
              clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
              padding: "48px 40px",
              gap: 32,
            }}>
              <div>
                <h3 style={{
                  fontSize: "clamp(20px, 2.5vw, 32px)",
                  fontWeight: 900,
                  color: "#F9FAFB",
                  letterSpacing: "-0.03em",
                  marginBottom: 10,
                  fontFamily: "'Inter', sans-serif",
                }}>
                  Ready to work together?
                </h3>
                <p style={{ fontSize: 14, color: "#9CA3AF", margin: 0 }}>
                  We're selective. Unconventional problems welcome.
                </p>
              </div>
              <a href={`${BASE}/#contact`} className="btn btn-fill" style={{ whiteSpace: "nowrap", flexShrink: 0, textAlign: "center" }}>
                Get in Touch
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
