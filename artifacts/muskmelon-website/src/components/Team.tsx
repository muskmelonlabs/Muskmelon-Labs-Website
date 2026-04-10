import { FadeIn } from "./FadeIn";

const members = [
  {
    name: "Founder",
    role: "Product & Systems",
    bio: "Obsessed with building systems that outlast the hype. Loves constraints.",
    initials: "ML",
    color: "#FF6A00",
  },
  {
    name: "Lead Engineer",
    role: "Infrastructure",
    bio: "Open systems evangelist. If it can be built without a vendor, it will be.",
    initials: "LE",
    color: "#333333",
  },
  {
    name: "Design Lead",
    role: "Product Design",
    bio: "Systems thinker. Sharp edges, clear hierarchy, no unnecessary decoration.",
    initials: "DL",
    color: "#3a3a3a",
  },
  {
    name: "AI Researcher",
    role: "AI / Cognition",
    bio: "Building tools for thinking — not just tools for generating.",
    initials: "AR",
    color: "#2a2a2a",
  },
  {
    name: "Open Position",
    role: "Developer",
    bio: "We're looking for builders who care about systems over features.",
    initials: "?",
    color: "#222222",
    open: true,
  },
];

export function Team() {
  return (
    <section id="team" style={{
      background: "#161616",
      padding: "96px 0",
      borderBottom: "1px solid #2e2e2e",
      borderTop: "1px solid #2e2e2e",
    }}>
      <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between" style={{ marginBottom: 48, gap: 16 }}>
            <div>
              <div className="section-label">Team</div>
              <h2 style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 900,
                color: "#F9FAFB",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                margin: 0,
                fontFamily: "'Inter', sans-serif",
              }}>
                The Builders
              </h2>
            </div>
            <p style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.7, maxWidth: 280 }}>
              Small team. High leverage.
              Focused on systems that matter.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" style={{ gap: 12 }}>
          {members.map((m, i) => (
            <FadeIn key={m.name} delay={i * 60} style={{ display: "flex" }}>
              <div
                style={{
                  background: "#252525",
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  border: m.open ? "1px dashed #2e2e2e" : "1px solid #2e2e2e",
                  clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                  transition: "border-color 0.2s",
                  width: "100%",
                }}
              >
                {/* Avatar */}
                <div style={{
                  width: 52,
                  height: 52,
                  background: m.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 800,
                  color: m.open ? "#444444" : "#F9FAFB",
                  letterSpacing: "-0.02em",
                  flexShrink: 0,
                  clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                }}>
                  {m.initials}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: m.open ? "#444444" : "#F9FAFB",
                    letterSpacing: "-0.01em",
                    marginBottom: 4,
                  }}>
                    {m.name}
                  </div>
                  <div style={{
                    fontSize: 10,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: m.open ? "#444444" : "#FF6A00",
                    marginBottom: 12,
                  }}>
                    {m.role}
                  </div>
                  <p style={{ fontSize: 11, color: "#666666", lineHeight: 1.6 }}>
                    {m.bio}
                  </p>
                </div>

                {!m.open && (
                  <div style={{
                    width: 24,
                    height: 24,
                    border: "1px solid #2e2e2e",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <rect x="0.5" y="3.5" width="2" height="7" stroke="#555555" strokeWidth="1"/>
                      <circle cx="1.5" cy="1.5" r="1" stroke="#555555" strokeWidth="1"/>
                      <path d="M4.5 3.5v7M4.5 5.5C4.5 4.4 5.4 3.5 6.5 3.5h1C8.6 3.5 9.5 4.4 9.5 5.5v5" stroke="#555555" strokeWidth="1"/>
                    </svg>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
