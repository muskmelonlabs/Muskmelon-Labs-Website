import { FadeIn } from "./FadeIn";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const cases = [
  {
    tag: "Storage",
    title: "GitArchive",
    desc: "A new way to think about storage using Git as infrastructure. Content-addressed, distributed, free from vendor dependence.",
    cta: "Learn Case",
    href: "#contact",
    external: false,
  },
  {
    tag: "Cognition",
    title: "AI Cognition System",
    desc: "Persona-based thinking models for decision making. Structured reasoning, not just generation.",
    cta: "Learn Case",
    href: "#contact",
    external: false,
  },
  {
    tag: "Tools",
    title: "Internal Tools Suite",
    desc: "Tools built to solve real problems fast. Opinionated, focused, and built to outlast the sprint.",
    cta: "Learn Case",
    href: "#contact",
    external: false,
  },
  {
    tag: "Brand",
    title: "Brand Identity System",
    desc: "A complete brand design system for Muskmelon Labs including logo, color system, typography, and visual language.",
    cta: "View Brandbook",
    href: "/brandbook",
    external: false,
    highlight: true,
  },
];

export function CaseStudies() {
  return (
    <section id="work" style={{
      background: "#161616",
      padding: "96px 0",
      borderBottom: "1px solid #2e2e2e",
      borderTop: "1px solid #2e2e2e",
    }}>
      <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: 48 }}>
            <div className="section-label">Case Studies</div>
            <h2 style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 900,
              color: "#F9FAFB",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              margin: 0,
              fontFamily: "'Inter', sans-serif",
            }}>
              What We've Built
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{
          background: "#252525",
          border: "1px solid #2e2e2e",
        }}>
          {cases.map((c, i) => (
            <FadeIn key={c.title} delay={i * 80}>
              <div style={{
                padding: "40px 32px",
                borderBottom: "1px solid #2e2e2e",
                borderRight: "1px solid #2e2e2e",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                minHeight: 280,
                background: c.highlight ? "rgba(255,106,0,0.03)" : "transparent",
              }}>
                <div>
                  <div style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: c.highlight ? "#FF6A00" : "#FF6A00",
                    marginBottom: 16,
                  }}>
                    {c.tag}
                  </div>
                  <h3 style={{
                    fontSize: 18, fontWeight: 800, color: "#F9FAFB",
                    letterSpacing: "-0.025em", marginBottom: 14,
                  }}>
                    {c.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.75 }}>
                    {c.desc}
                  </p>
                </div>
                <div style={{ marginTop: "auto", paddingTop: 20, borderTop: "1px solid #2e2e2e" }}>
                  <a
                    href={c.external ? c.href : `${BASE}${c.href}`}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#FF6A00",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      transition: "gap 0.15s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.gap = "12px")}
                    onMouseLeave={e => (e.currentTarget.style.gap = "6px")}
                  >
                    {c.cta} <span>→</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
