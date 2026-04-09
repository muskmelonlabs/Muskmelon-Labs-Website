import React from "react";

const LOGO_SVG_SM = (
  <svg width="40" height="34" viewBox="0 0 253 213" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M234.273 133.561L192.884 100.246L136.671 208.21L234.273 133.561Z" fill="#B94F22" />
    <path d="M240.516 0L192.884 100.246L234.273 133.561L253 65.7299L240.516 0Z" fill="#D26123" />
    <path d="M0 122.263L192.884 100.246L240.516 0L0 122.263Z" fill="#FAB680" />
    <path d="M136.671 208.21L0 164.227L33.0625 191.052L134.56 213L136.671 208.21Z" fill="#9EB493" />
    <path d="M234.273 133.561L136.671 208.21L134.56 213L195.416 191.052L234.273 133.561Z" fill="#758673" />
    <path d="M192.884 100.246L0 122.263V164.227L136.671 208.21L192.884 100.246Z" fill="#E8842B" />
  </svg>
);

const LOGO_SVG_LG = (
  <svg width="64" height="54" viewBox="0 0 253 213" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M234.273 133.561L192.884 100.246L136.671 208.21L234.273 133.561Z" fill="#B94F22" />
    <path d="M240.516 0L192.884 100.246L234.273 133.561L253 65.7299L240.516 0Z" fill="#D26123" />
    <path d="M0 122.263L192.884 100.246L240.516 0L0 122.263Z" fill="#FAB680" />
    <path d="M136.671 208.21L0 164.227L33.0625 191.052L134.56 213L136.671 208.21Z" fill="#9EB493" />
    <path d="M234.273 133.561L136.671 208.21L134.56 213L195.416 191.052L234.273 133.561Z" fill="#758673" />
    <path d="M192.884 100.246L0 122.263V164.227L136.671 208.21L192.884 100.246Z" fill="#E8842B" />
  </svg>
);

function GeometricAccent({ className = "", opacity = 0.045 }: { className?: string; opacity?: number }) {
  return (
    <svg
      className={`absolute pointer-events-none select-none ${className}`}
      width="220"
      height="185"
      viewBox="0 0 253 213"
      fill="none"
      style={{ opacity }}
    >
      <path d="M234.273 133.561L192.884 100.246L136.671 208.21L234.273 133.561Z" fill="#B94F22" />
      <path d="M240.516 0L192.884 100.246L234.273 133.561L253 65.7299L240.516 0Z" fill="#D26123" />
      <path d="M0 122.263L192.884 100.246L240.516 0L0 122.263Z" fill="#FAB680" />
      <path d="M136.671 208.21L0 164.227L33.0625 191.052L134.56 213L136.671 208.21Z" fill="#9EB493" />
      <path d="M234.273 133.561L136.671 208.21L134.56 213L195.416 191.052L234.273 133.561Z" fill="#758673" />
      <path d="M192.884 100.246L0 122.263V164.227L136.671 208.21L192.884 100.246Z" fill="#E8842B" />
    </svg>
  );
}

function FacetedDivider() {
  return (
    <div className="relative h-px w-full overflow-visible my-0">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(232,132,43,0.2) 30%, rgba(232,132,43,0.12) 70%, transparent 100%)",
        }}
      />
      <svg className="absolute left-0 top-[-4px]" width="48" height="9" viewBox="0 0 48 9" fill="none">
        <polygon points="0,9 12,0 24,9 36,0 48,9" fill="rgba(232,132,43,0.2)" />
      </svg>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span
        style={{
          display: "inline-block",
          width: 6,
          height: 6,
          background: "#E8842B",
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
      />
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase" as const,
          color: "#E8842B",
        }}
      >
        {children}
      </span>
    </div>
  );
}

function Tag({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "accent" | "muted" }) {
  const styles: Record<string, React.CSSProperties> = {
    default: { background: "#1a1a1a", border: "1px solid #2a2a2a", color: "#999" },
    accent: { background: "rgba(232,132,43,0.10)", border: "1px solid rgba(232,132,43,0.28)", color: "#E8842B" },
    muted: { background: "#111", border: "1px solid #1e1e1e", color: "#555" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "3px 10px",
        borderRadius: 4,
        fontFamily: "Inter, sans-serif",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.02em",
        ...styles[variant],
      }}
    >
      {children}
    </span>
  );
}

function Card({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        background: "#111",
        border: "1px solid #1e1e1e",
        borderRadius: 8,
        padding: "24px",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function AngleCut({ position = "top-right" }: { position?: "top-right" | "bottom-left" | "top-left" }) {
  const cuts: Record<string, React.CSSProperties> = {
    "top-right": { position: "absolute", top: 0, right: 0, width: 0, height: 0, borderStyle: "solid", borderWidth: "0 28px 28px 0", borderColor: "transparent #0a0a0a transparent transparent" },
    "bottom-left": { position: "absolute", bottom: 0, left: 0, width: 0, height: 0, borderStyle: "solid", borderWidth: "0 0 28px 28px", borderColor: "transparent transparent #0a0a0a transparent" },
    "top-left": { position: "absolute", top: 0, left: 0, width: 0, height: 0, borderStyle: "solid", borderWidth: "28px 28px 0 0", borderColor: "#0a0a0a transparent transparent transparent" },
  };
  return <div style={cuts[position]} />;
}

function Section({ children, dark = false, style = {} }: { children: React.ReactNode; dark?: boolean; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        background: dark ? "#080808" : "#0a0a0a",
        borderTop: "1px solid #1a1a1a",
        padding: "64px 56px",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function RuleRow({ label, desc, isLast = false }: { label: string; desc: string; isLast?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 24,
        padding: "18px 0",
        borderBottom: isLast ? "none" : "1px solid #161616",
      }}
    >
      <div style={{ width: 120, fontSize: 12, fontWeight: 600, color: "#E8842B", flexShrink: 0 }}>{label}</div>
      <div style={{ fontSize: 14, color: "#888" }}>{desc}</div>
    </div>
  );
}

function DoDont({ dos, donts }: { dos: string[]; donts: string[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
      <Card style={{ padding: "16px 20px" }}>
        <AngleCut />
        <div style={{ fontSize: 10, fontWeight: 600, color: "#4CAF50", letterSpacing: "0.1em", marginBottom: 10 }}>DO</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {dos.map((r) => (
            <div key={r} style={{ fontSize: 12, color: "#777", display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ color: "#4CAF50", fontSize: 10 }}>✓</span> {r}
            </div>
          ))}
        </div>
      </Card>
      <Card style={{ padding: "16px 20px" }}>
        <AngleCut />
        <div style={{ fontSize: 10, fontWeight: 600, color: "#E8842B", letterSpacing: "0.1em", marginBottom: 10 }}>DON'T</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {donts.map((r) => (
            <div key={r} style={{ fontSize: 12, color: "#777", display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ color: "#E8842B", fontSize: 10 }}>✕</span> {r}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default function BrandBook() {
  return (
    <div
      style={{
        fontFamily: "Inter, -apple-system, sans-serif",
        background: "#0a0a0a",
        color: "#e0e0e0",
        minHeight: "100vh",
      }}
    >
      {/* Sticky nav */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(8,8,8,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #1a1a1a",
          padding: "14px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {LOGO_SVG_SM}
          <span style={{ fontSize: 13, fontWeight: 600, color: "#e0e0e0", letterSpacing: "-0.01em" }}>
            Muskmelon Labs
          </span>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {[
            ["Identity", "#identity"],
            ["Values", "#values"],
            ["Logo", "#logo"],
            ["Color", "#color"],
            ["Typography", "#typography"],
            ["Design Language", "#design-language"],
            ["Principles", "#principles"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: 12,
                color: "#555",
                textDecoration: "none",
                fontWeight: 500,
                letterSpacing: "0.01em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#E8842B")}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#555")}
            >
              {label}
            </a>
          ))}
        </div>
        <Tag variant="muted">v1.0</Tag>
      </nav>

      {/* HERO */}
      <div
        style={{
          padding: "96px 80px 80px",
          background: "#080808",
          borderBottom: "1px solid #1a1a1a",
          position: "relative",
          overflow: "hidden",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <GeometricAccent className="right-[-20px] top-[-20px]" opacity={0.05} />

        <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 32 }}>
          {LOGO_SVG_LG}
          <div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#f0f0f0",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                marginBottom: 6,
              }}
            >
              Muskmelon Labs
            </div>
            <div
              style={{
                fontSize: 11,
                color: "#555",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Brand Identity System
            </div>
          </div>
        </div>

        <div
          style={{
            fontSize: 15,
            color: "#777",
            lineHeight: 1.8,
            maxWidth: 560,
            marginBottom: 36,
          }}
        >
          An experimental product lab building thoughtful, system-driven tools
          at the intersection of design, technology, and iteration.
          Simple. Useful. Human-centered.
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Tag variant="accent">Build</Tag>
          <Tag>Test</Tag>
          <Tag>Iterate</Tag>
          <Tag>Refine</Tag>
          <Tag>Repeat</Tag>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(232,132,43,0.18) 40%, rgba(232,132,43,0.10) 60%, transparent)",
          }}
        />
      </div>

      {/* IDENTITY */}
      <div id="identity" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Section>
          <SectionLabel>Identity</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
            <Card>
              <AngleCut />
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", marginBottom: 16 }}>
                We are
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["A product lab", "A design-first system thinker", "An experimental builder"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 4, height: 4, background: "#E8842B", clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "#bbb", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card style={{ borderColor: "rgba(232,132,43,0.15)" }}>
              <AngleCut />
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#E8842B", marginBottom: 16 }}>
                We are not
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["A corporate agency", "A hype-driven AI brand", "A generic tech startup"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 4, height: 4, background: "#333", borderRadius: 1, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "#555", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Calm", "Thoughtful", "Precise", "Minimal", "Never loud or salesy"].map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </Section>
      </div>

      <FacetedDivider />

      {/* VALUES */}
      <div id="values" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Section dark>
          <SectionLabel>Values</SectionLabel>
          <div>
            <RuleRow label="Systematic" desc="Structured thinking, not chaos" />
            <RuleRow label="Experimental" desc="Always iterating" />
            <RuleRow label="Minimal" desc="Only what matters" />
            <RuleRow label="Intelligent" desc="Not flashy, but smart" />
            <RuleRow label="Grounded" desc="Practical, not theoretical" isLast />
          </div>
        </Section>
      </div>

      <FacetedDivider />

      {/* LOGO */}
      <div id="logo" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Section>
          <SectionLabel>Logo</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 28 }}>
            {[
              {
                title: "Icon only",
                sub: "Favicon · App icon",
                content: (
                  <svg width="36" height="30" viewBox="0 0 253 213" fill="none">
                    <path d="M234.273 133.561L192.884 100.246L136.671 208.21L234.273 133.561Z" fill="#B94F22" />
                    <path d="M240.516 0L192.884 100.246L234.273 133.561L253 65.7299L240.516 0Z" fill="#D26123" />
                    <path d="M0 122.263L192.884 100.246L240.516 0L0 122.263Z" fill="#FAB680" />
                    <path d="M136.671 208.21L0 164.227L33.0625 191.052L134.56 213L136.671 208.21Z" fill="#9EB493" />
                    <path d="M234.273 133.561L136.671 208.21L134.56 213L195.416 191.052L234.273 133.561Z" fill="#758673" />
                    <path d="M192.884 100.246L0 122.263V164.227L136.671 208.21L192.884 100.246Z" fill="#E8842B" />
                  </svg>
                ),
              },
              {
                title: "Horizontal lockup",
                sub: "Headers · Nav",
                content: (
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <svg width="28" height="23" viewBox="0 0 253 213" fill="none">
                      <path d="M234.273 133.561L192.884 100.246L136.671 208.21L234.273 133.561Z" fill="#B94F22" />
                      <path d="M240.516 0L192.884 100.246L234.273 133.561L253 65.7299L240.516 0Z" fill="#D26123" />
                      <path d="M0 122.263L192.884 100.246L240.516 0L0 122.263Z" fill="#FAB680" />
                      <path d="M136.671 208.21L0 164.227L33.0625 191.052L134.56 213L136.671 208.21Z" fill="#9EB493" />
                      <path d="M234.273 133.561L136.671 208.21L134.56 213L195.416 191.052L234.273 133.561Z" fill="#758673" />
                      <path d="M192.884 100.246L0 122.263V164.227L136.671 208.21L192.884 100.246Z" fill="#E8842B" />
                    </svg>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#e0e0e0", letterSpacing: "-0.01em" }}>Muskmelon Labs</span>
                  </div>
                ),
              },
              {
                title: "Stacked lockup",
                sub: "Social · Presentations",
                content: (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 6 }}>
                    <svg width="24" height="20" viewBox="0 0 253 213" fill="none">
                      <path d="M234.273 133.561L192.884 100.246L136.671 208.21L234.273 133.561Z" fill="#B94F22" />
                      <path d="M240.516 0L192.884 100.246L234.273 133.561L253 65.7299L240.516 0Z" fill="#D26123" />
                      <path d="M0 122.263L192.884 100.246L240.516 0L0 122.263Z" fill="#FAB680" />
                      <path d="M136.671 208.21L0 164.227L33.0625 191.052L134.56 213L136.671 208.21Z" fill="#9EB493" />
                      <path d="M234.273 133.561L136.671 208.21L134.56 213L195.416 191.052L234.273 133.561Z" fill="#758673" />
                      <path d="M192.884 100.246L0 122.263V164.227L136.671 208.21L192.884 100.246Z" fill="#E8842B" />
                    </svg>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "#e0e0e0", letterSpacing: "-0.01em", lineHeight: 1.2 }}>Muskmelon<br />Labs</span>
                  </div>
                ),
              },
            ].map((item) => (
              <Card key={item.title} style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
                <AngleCut />
                <div style={{ minHeight: 60, display: "flex", alignItems: "center" }}>{item.content}</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#c0c0c0", marginBottom: 2 }}>{item.title}</div>
                  <div style={{ fontSize: 11, color: "#555" }}>{item.sub}</div>
                </div>
              </Card>
            ))}
          </div>
          <DoDont
            dos={["Maintain proportions", "Correct colors", "Sufficient spacing"]}
            donts={["Stretch or distort", "Add shadows", "Change colors", "Rotate"]}
          />
        </Section>
      </div>

      <FacetedDivider />

      {/* COLOR */}
      <div id="color" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Section dark>
          <SectionLabel>Color</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
            {[
              { name: "Ember", hex: "#E8842B", role: "Primary accent — CTAs, highlights, brand moments", swatch: "#E8842B" },
              { name: "Rust", hex: "#B94F22", role: "Active states, pressed, depth accent", swatch: "#B94F22" },
              { name: "Sandstone", hex: "#FAB680", role: "Warm fill, subtle tints on dark", swatch: "#FAB680" },
              { name: "Sage", hex: "#9EB493", role: "Support only — sparingly on success states", swatch: "#9EB493" },
              { name: "Slate", hex: "#758673", role: "Muted text, secondary elements", swatch: "#758673" },
            ].map((color) => (
              <div
                key={color.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "14px 16px",
                  background: "#111",
                  border: "1px solid #1a1a1a",
                  borderRadius: 6,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 4,
                    background: color.swatch,
                    flexShrink: 0,
                    clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 3 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#c0c0c0" }}>{color.name}</span>
                    <code style={{ fontSize: 11, color: "#555", fontFamily: "monospace" }}>{color.hex}</code>
                  </div>
                  <div style={{ fontSize: 12, color: "#555" }}>{color.role}</div>
                </div>
              </div>
            ))}
          </div>
          <DoDont
            dos={["Keep balance", "Use contrast", "Follow hierarchy"]}
            donts={["Over-saturate", "Mix too many colors", "Overuse gradients"]}
          />
        </Section>
      </div>

      <FacetedDivider />

      {/* TYPOGRAPHY */}
      <div id="typography" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Section>
          <SectionLabel>Typography</SectionLabel>
          <Card style={{ marginBottom: 16, padding: "40px 36px" }}>
            <AngleCut />
            <div style={{ fontSize: 34, fontWeight: 600, color: "#f0f0f0", letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: 18 }}>
              Heading — SemiBold 600
            </div>
            <div style={{ fontSize: 15, fontWeight: 400, color: "#888", lineHeight: 1.75, marginBottom: 14 }}>
              Body — Regular 400. Clean, readable, generous line height.
            </div>
            <div style={{ fontSize: 12, color: "#555", letterSpacing: "0.02em" }}>
              Caption / Secondary — lower opacity, tight tracking.
            </div>
          </Card>
          <DoDont
            dos={["Clean hierarchy", "Readability", "Consistent spacing"]}
            donts={["Mix fonts", "Heavy styling", "Too many weights"]}
          />
        </Section>
      </div>

      <FacetedDivider />

      {/* DESIGN LANGUAGE */}
      <div id="design-language" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Section dark style={{ position: "relative", overflow: "hidden" }}>
          <GeometricAccent className="right-[-40px] bottom-[-20px]" opacity={0.05} />
          <SectionLabel>Design Language</SectionLabel>

          <div style={{ marginBottom: 36 }}>
            <div style={{ fontSize: 22, fontWeight: 600, color: "#f0f0f0", letterSpacing: "-0.02em", marginBottom: 10 }}>
              Geometry derived from the mark
            </div>
            <div style={{ fontSize: 14, color: "#666", lineHeight: 1.75, maxWidth: 520 }}>
              Every visual element in the Muskmelon system draws from the faceted geometry of the logo —
              angular cuts, layered surfaces, and directional diagonals that create depth without decoration.
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
            {[
              {
                title: "Faceted geometry",
                desc: "Multi-face polygonal forms. Angles that suggest layers and dimensionality.",
                shape: (
                  <svg width="36" height="36" viewBox="0 0 36 36">
                    <polygon points="18,2 34,14 28,34 8,34 2,14" fill="none" stroke="#E8842B" strokeWidth="1.5" />
                    <polygon points="18,2 34,14 18,20" fill="rgba(232,132,43,0.12)" />
                  </svg>
                ),
              },
              {
                title: "Angular cuts",
                desc: "Corner clips and diagonal edges replacing standard radii on surfaces.",
                shape: (
                  <svg width="36" height="36" viewBox="0 0 36 36">
                    <polygon points="10,2 34,2 34,26 26,34 2,34 2,10" fill="none" stroke="#E8842B" strokeWidth="1.5" />
                  </svg>
                ),
              },
              {
                title: "Layered surfaces",
                desc: "Overlapping planes suggest depth. Used in cards, backgrounds, section dividers.",
                shape: (
                  <svg width="36" height="36" viewBox="0 0 36 36">
                    <rect x="2" y="10" width="28" height="22" rx="2" fill="rgba(232,132,43,0.08)" stroke="#2a2a2a" strokeWidth="1" />
                    <rect x="6" y="6" width="28" height="22" rx="2" fill="rgba(232,132,43,0.06)" stroke="#2a2a2a" strokeWidth="1" />
                    <rect x="10" y="2" width="24" height="18" rx="2" fill="none" stroke="#E8842B" strokeWidth="1.5" />
                  </svg>
                ),
              },
              {
                title: "Directional cuts",
                desc: "Diagonal lines convey motion, iteration, and forward momentum.",
                shape: (
                  <svg width="36" height="36" viewBox="0 0 36 36">
                    <line x1="2" y1="34" x2="34" y2="2" stroke="#E8842B" strokeWidth="1.5" />
                    <line x1="10" y1="34" x2="34" y2="10" stroke="rgba(232,132,43,0.35)" strokeWidth="1" />
                    <line x1="18" y1="34" x2="34" y2="18" stroke="rgba(232,132,43,0.15)" strokeWidth="1" />
                  </svg>
                ),
              },
            ].map((item) => (
              <Card key={item.title}>
                <AngleCut />
                <div style={{ marginBottom: 14 }}>{item.shape}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#c0c0c0", marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
              </Card>
            ))}
          </div>

          <Card>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#444", marginBottom: 18 }}>
              Shape usage rules
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Use angular corner clips (not full radii) on structural surfaces like cards and containers.",
                "Reserve full circles only for avatars and status indicators.",
                "Diagonal dividers signal transitions between major sections.",
                "Never stack more than 3 geometric shapes in one composition — depth, not clutter.",
                "Geometric accents should always be subtle: opacity 4–8%, never dominant.",
              ].map((rule, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      background: "rgba(232,132,43,0.10)",
                      border: "1px solid rgba(232,132,43,0.2)",
                      borderRadius: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    <span style={{ fontSize: 9, fontWeight: 700, color: "#E8842B" }}>{i + 1}</span>
                  </div>
                  <div style={{ fontSize: 13, color: "#777", lineHeight: 1.65 }}>{rule}</div>
                </div>
              ))}
            </div>
          </Card>
        </Section>
      </div>

      <FacetedDivider />

      {/* PRODUCT PRINCIPLES */}
      <div id="principles" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Section>
          <SectionLabel>Product Principles</SectionLabel>
          <div style={{ fontSize: 22, fontWeight: 600, color: "#f0f0f0", letterSpacing: "-0.02em", marginBottom: 10 }}>
            How we build
          </div>
          <div style={{ fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: 36, maxWidth: 440 }}>
            Principles that shape every product decision — from a single component to the overall system.
          </div>

          {/* Build → Test → Refine → Repeat */}
          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              marginBottom: 32,
              background: "#111",
              border: "1px solid #1a1a1a",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            {["Build", "Test", "Refine", "Repeat"].map((step, i) => (
              <React.Fragment key={step}>
                <div
                  style={{
                    flex: 1,
                    padding: "22px 18px",
                    textAlign: "center",
                    borderRight: i < 3 ? "1px solid #1e1e1e" : "none",
                    background: i === 0 ? "rgba(232,132,43,0.06)" : "transparent",
                  }}
                >
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: i === 0 ? "#E8842B" : "#444", marginBottom: 6 }}>
                    0{i + 1}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: i === 0 ? "#e0e0e0" : "#555" }}>{step}</div>
                </div>
                {i < 3 && (
                  <svg width="8" height="100%" viewBox="0 0 8 64" style={{ flexShrink: 0, display: "block", alignSelf: "stretch", margin: "0 -1px" }}>
                    <path d="M0 0 L8 32 L0 64" fill="#111" stroke="#1e1e1e" strokeWidth="1" />
                  </svg>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Principle cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { title: "Minimal by default", desc: "Start with the least. Every element earns its presence. Remove before you add.", accent: true },
              { title: "System-driven thinking", desc: "Design and build in systems — consistent tokens, patterns, and behaviors across every surface.", accent: false },
              { title: "Human-centered precision", desc: "Thoughtful doesn't mean slow. Clarity and speed of comprehension are primary product values.", accent: false },
            ].map((p) => (
              <div
                key={p.title}
                style={{
                  display: "flex",
                  gap: 20,
                  padding: "20px 24px",
                  background: "#111",
                  border: "1px solid #1a1a1a",
                  borderRadius: 6,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 3,
                    background: p.accent ? "#E8842B" : "#1e1e1e",
                    borderRadius: "3px 0 0 3px",
                  }}
                />
                <div style={{ paddingLeft: 6 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#d0d0d0", marginBottom: 6, letterSpacing: "-0.01em" }}>{p.title}</div>
                  <div style={{ fontSize: 13, color: "#666", lineHeight: 1.65 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <FacetedDivider />

      {/* CLOSING QUOTE */}
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Section dark style={{ position: "relative", overflow: "hidden" }}>
          <GeometricAccent className="left-[-60px] top-[-20px]" opacity={0.04} />
          <blockquote style={{ margin: 0, padding: "0 0 0 24px", borderLeft: "2px solid #E8842B", maxWidth: 600 }}>
            <p style={{ fontSize: 18, fontWeight: 400, color: "#777", lineHeight: 1.75, fontStyle: "italic", margin: 0, marginBottom: 12 }}>
              "Muskmelon Labs is not about building many things.
              <br />
              It is about building the{" "}
              <em style={{ color: "#E8842B", fontStyle: "normal", fontWeight: 600 }}>right things</em>,
              thoughtfully."
            </p>
          </blockquote>
          <div style={{ marginTop: 32, display: "flex", gap: 8 }}>
            <Tag variant="muted">Evolving</Tag>
            <Tag variant="muted">Experimental</Tag>
            <Tag variant="muted">Iterative</Tag>
          </div>
          <div
            style={{
              marginTop: 56,
              paddingTop: 28,
              borderTop: "1px solid #1a1a1a",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {LOGO_SVG_SM}
              <span style={{ fontSize: 12, fontWeight: 600, color: "#444", letterSpacing: "-0.01em" }}>Muskmelon Labs</span>
            </div>
            <span style={{ fontSize: 11, color: "#2a2a2a", letterSpacing: "0.06em" }}>Brand Identity System — v1.0</span>
          </div>
        </Section>
      </div>
    </div>
  );
}
