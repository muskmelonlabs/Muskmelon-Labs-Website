import React from "react";

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = {
  bg0:       "#090E1C",  // darkest — hero, alt sections
  bg1:       "#0F172A",  // primary page background
  bg2:       "#111D35",  // cards, elevated surfaces
  bg3:       "#162040",  // hover states
  border0:   "#1A2540",  // subtle borders
  border1:   "#1E2D4A",  // standard card borders
  text0:     "#E2E8F0",  // primary text
  text1:     "#94A3B8",  // secondary text
  text2:     "#4B5C7A",  // muted / captions
  orange:    "#E8842B",  // accent — use sparingly
  orangeDim: "rgba(232,132,43,0.12)",
  orangeRim: "rgba(232,132,43,0.22)",
  green:     "#4C9E6E",  // success only
};

// ─── Logo SVGs ────────────────────────────────────────────────────────────────
const LogoPaths = () => (
  <>
    <path d="M234.273 133.561L192.884 100.246L136.671 208.21L234.273 133.561Z" fill="#B94F22"/>
    <path d="M240.516 0L192.884 100.246L234.273 133.561L253 65.7299L240.516 0Z" fill="#D26123"/>
    <path d="M0 122.263L192.884 100.246L240.516 0L0 122.263Z" fill="#FAB680"/>
    <path d="M136.671 208.21L0 164.227L33.0625 191.052L134.56 213L136.671 208.21Z" fill="#9EB493"/>
    <path d="M234.273 133.561L136.671 208.21L134.56 213L195.416 191.052L234.273 133.561Z" fill="#758673"/>
    <path d="M192.884 100.246L0 122.263V164.227L136.671 208.21L192.884 100.246Z" fill="#E8842B"/>
  </>
);

const LogoSm = () => (
  <svg width="32" height="27" viewBox="0 0 253 213" fill="none"><LogoPaths /></svg>
);
const LogoLg = () => (
  <svg width="56" height="47" viewBox="0 0 253 213" fill="none"><LogoPaths /></svg>
);

// ─── Faceted background geometry ──────────────────────────────────────────────
// Large, calm triangular planes derived from the logo's facet structure.
// Very low opacity — atmosphere, not decoration.
function FacetMesh({
  style = {},
  flip = false,
}: {
  style?: React.CSSProperties;
  flip?: boolean;
}) {
  const t = flip ? "scale(-1,1)" : undefined;
  return (
    <svg
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        userSelect: "none",
        ...style,
      }}
      viewBox="0 0 800 400"
      preserveAspectRatio="xMaxYMid slice"
      fill="none"
    >
      <g transform={t} opacity={1}>
        {/* Large background plane — warm tint */}
        <polygon
          points="800,0 480,0 800,220"
          fill="rgba(232,132,43,0.028)"
        />
        {/* Mid plane */}
        <polygon
          points="800,0 560,160 800,320"
          fill="rgba(232,132,43,0.018)"
        />
        {/* Edge accent */}
        <polygon
          points="800,120 640,220 800,340"
          fill="rgba(158,180,147,0.018)"
        />
        {/* Thin line edges */}
        <line x1="480" y1="0" x2="800" y2="220" stroke="rgba(30,45,74,0.8)" strokeWidth="1"/>
        <line x1="560" y1="160" x2="800" y2="320" stroke="rgba(30,45,74,0.6)" strokeWidth="1"/>
        <line x1="640" y1="220" x2="800" y2="340" stroke="rgba(30,45,74,0.4)" strokeWidth="0.5"/>
      </g>
    </svg>
  );
}

// Diagonal section-cut SVG — replaces the plain border-top between sections
function SectionCut({ color = T.bg1 }: { color?: string }) {
  return (
    <svg
      aria-hidden
      style={{ display: "block", width: "100%", height: 24, marginBottom: -1 }}
      viewBox="0 0 1100 24"
      preserveAspectRatio="none"
    >
      <polygon points="0,0 1100,0 1100,24 0,8" fill={color} />
    </svg>
  );
}

// ─── Shared primitives ────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
      {/* Tiny faceted diamond — only mark in orange */}
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <polygon points="4,0 8,4 4,8 0,4" fill={T.orange} opacity="0.7" />
      </svg>
      <span style={{
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.16em",
        textTransform: "uppercase" as const,
        color: T.text2,
      }}>
        {children}
      </span>
    </div>
  );
}

function Divider() {
  return (
    <div style={{
      height: 1,
      background: `linear-gradient(90deg, transparent 0%, ${T.border1} 15%, ${T.border1} 85%, transparent 100%)`,
      margin: 0,
    }} />
  );
}

function Tag({
  children,
  variant = "neutral",
}: {
  children: React.ReactNode;
  variant?: "neutral" | "accent" | "dim";
}) {
  const map: Record<string, React.CSSProperties> = {
    neutral: { background: T.bg2, border: `1px solid ${T.border0}`, color: T.text2 },
    accent:  { background: T.orangeDim, border: `1px solid ${T.orangeRim}`, color: T.orange },
    dim:     { background: "transparent", border: `1px solid ${T.border0}`, color: T.text2 },
  };
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 12px",
      borderRadius: 3,
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.04em",
      ...map[variant],
    }}>
      {children}
    </span>
  );
}

// Card with optional faceted corner cut
function Card({
  children,
  style = {},
  cut = true,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  cut?: boolean;
}) {
  return (
    <div style={{
      background: T.bg2,
      border: `1px solid ${T.border1}`,
      borderRadius: 6,
      padding: "28px",
      position: "relative",
      overflow: "hidden",
      ...style,
    }}>
      {cut && (
        <div style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "0 24px 24px 0",
          borderColor: `transparent ${T.bg1} transparent transparent`,
        }} />
      )}
      {children}
    </div>
  );
}

function Section({
  children,
  alt = false,
  style = {},
}: {
  children: React.ReactNode;
  alt?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div style={{
      background: alt ? T.bg0 : T.bg1,
      padding: "72px 64px",
      position: "relative",
      overflow: "hidden",
      ...style,
    }}>
      {children}
    </div>
  );
}

function Row({ label, desc, last = false }: { label: string; desc: string; last?: boolean }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "baseline",
      gap: 32,
      padding: "20px 0",
      borderBottom: last ? "none" : `1px solid ${T.border0}`,
    }}>
      <div style={{ width: 128, fontSize: 12, fontWeight: 600, color: T.text1, flexShrink: 0, letterSpacing: "0.01em" }}>
        {label}
      </div>
      <div style={{ fontSize: 14, color: T.text2, lineHeight: 1.6 }}>{desc}</div>
    </div>
  );
}

function DoDont({ dos, donts }: { dos: string[]; donts: string[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
      <Card style={{ padding: "20px 24px" }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: T.green, letterSpacing: "0.12em", marginBottom: 14 }}>DO</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {dos.map((r) => (
            <div key={r} style={{ fontSize: 12, color: T.text2, display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ color: T.green, flexShrink: 0, marginTop: 1 }}>✓</span>
              <span>{r}</span>
            </div>
          ))}
        </div>
      </Card>
      <Card style={{ padding: "20px 24px" }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: T.text2, letterSpacing: "0.12em", marginBottom: 14 }}>DON'T</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {donts.map((r) => (
            <div key={r} style={{ fontSize: 12, color: T.text2, display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ color: T.text2, flexShrink: 0, marginTop: 1 }}>✕</span>
              <span>{r}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function BrandBook() {
  const NAV_LINKS = [
    ["Identity",        "#identity"],
    ["Values",          "#values"],
    ["Logo",            "#logo"],
    ["Color",           "#color"],
    ["Typography",      "#typography"],
    ["Design Language", "#design-language"],
    ["Principles",      "#principles"],
  ];

  return (
    <div style={{ fontFamily: "Inter, -apple-system, sans-serif", background: T.bg1, color: T.text0, minHeight: "100vh" }}>

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: `rgba(9,14,28,0.92)`,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: `1px solid ${T.border0}`,
        padding: "0 48px",
        height: 52,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <LogoSm />
          <span style={{ fontSize: 13, fontWeight: 600, color: T.text0, letterSpacing: "-0.015em" }}>
            Muskmelon Labs
          </span>
        </div>
        <div style={{ display: "flex", gap: 28 }}>
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: 12,
                color: T.text2,
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = T.text1)}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = T.text2)}
            >
              {label}
            </a>
          ))}
        </div>
        <Tag variant="dim">v1.0</Tag>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <div style={{
        background: T.bg0,
        padding: "100px 64px 88px",
        position: "relative",
        overflow: "hidden",
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        <FacetMesh />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 36 }}>
            <LogoLg />
            <div style={{ paddingTop: 2 }}>
              <h1 style={{
                fontSize: 30,
                fontWeight: 700,
                color: T.text0,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                margin: 0,
                marginBottom: 6,
              }}>
                Muskmelon Labs
              </h1>
              <div style={{
                fontSize: 10,
                color: T.text2,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}>
                Brand Identity System
              </div>
            </div>
          </div>

          <p style={{
            fontSize: 15,
            color: T.text2,
            lineHeight: 1.85,
            maxWidth: 520,
            margin: 0,
            marginBottom: 40,
          }}>
            An experimental product lab building thoughtful, system-driven tools
            at the intersection of design, technology, and iteration.
            Simple. Useful. Human-centered.
          </p>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {/* Only "Build" gets the accent — it's the one that matters */}
            <Tag variant="accent">Build</Tag>
            <Tag>Test</Tag>
            <Tag>Iterate</Tag>
            <Tag>Refine</Tag>
            <Tag>Repeat</Tag>
          </div>
        </div>
      </div>

      <SectionCut color={T.bg1} />

      {/* ── IDENTITY ────────────────────────────────────────────────────── */}
      <div id="identity" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Section>
          <SectionLabel>Identity</SectionLabel>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
            <Card>
              <div style={{
                fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
                textTransform: "uppercase", color: T.text2, marginBottom: 20,
              }}>
                We are
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["A product lab", "A design-first system thinker", "An experimental builder"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <svg width="5" height="5" viewBox="0 0 5 5"><polygon points="2.5,0 5,2.5 2.5,5 0,2.5" fill={T.text2} /></svg>
                    <span style={{ fontSize: 13, color: T.text1, lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card style={{ borderColor: T.border0 }}>
              <div style={{
                fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
                textTransform: "uppercase", color: T.text2, marginBottom: 20,
              }}>
                We are not
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["A corporate agency", "A hype-driven AI brand", "A generic tech startup"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 4, height: 4, background: T.border1, borderRadius: 1, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: T.text2, lineHeight: 1.5 }}>{item}</span>
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

      <Divider />

      {/* ── VALUES ──────────────────────────────────────────────────────── */}
      <div id="values" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Section alt style={{ position: "relative", overflow: "hidden" }}>
          <FacetMesh flip style={{ opacity: 0.6 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <SectionLabel>Values</SectionLabel>
            <div style={{ maxWidth: 640 }}>
              <Row label="Systematic"   desc="Structured thinking, not chaos" />
              <Row label="Experimental" desc="Always iterating" />
              <Row label="Minimal"      desc="Only what matters" />
              <Row label="Intelligent"  desc="Not flashy, but smart" />
              <Row label="Grounded"     desc="Practical, not theoretical" last />
            </div>
          </div>
        </Section>
      </div>

      <SectionCut color={T.bg1} />

      {/* ── LOGO ────────────────────────────────────────────────────────── */}
      <div id="logo" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Section>
          <SectionLabel>Logo</SectionLabel>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 32 }}>
            {[
              {
                title: "Icon only",
                sub: "Favicon · App icon",
                content: <svg width="36" height="30" viewBox="0 0 253 213" fill="none"><LogoPaths /></svg>,
              },
              {
                title: "Horizontal lockup",
                sub: "Headers · Nav",
                content: (
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <svg width="28" height="23" viewBox="0 0 253 213" fill="none"><LogoPaths /></svg>
                    <span style={{ fontSize: 13, fontWeight: 600, color: T.text0, letterSpacing: "-0.01em" }}>Muskmelon Labs</span>
                  </div>
                ),
              },
              {
                title: "Stacked lockup",
                sub: "Social · Presentations",
                content: (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 6 }}>
                    <svg width="24" height="20" viewBox="0 0 253 213" fill="none"><LogoPaths /></svg>
                    <span style={{ fontSize: 11, fontWeight: 600, color: T.text0, lineHeight: 1.25 }}>Muskmelon<br />Labs</span>
                  </div>
                ),
              },
            ].map((item) => (
              <Card key={item.title} style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start" }}>
                <div style={{ minHeight: 56, display: "flex", alignItems: "center" }}>{item.content}</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: T.text1, marginBottom: 3 }}>{item.title}</div>
                  <div style={{ fontSize: 11, color: T.text2 }}>{item.sub}</div>
                </div>
              </Card>
            ))}
          </div>

          <DoDont
            dos={["Maintain proportions", "Correct colors", "Sufficient clear space"]}
            donts={["Stretch or distort", "Add shadows or effects", "Change colors or rotate"]}
          />
        </Section>
      </div>

      <Divider />

      {/* ── COLOR ───────────────────────────────────────────────────────── */}
      <div id="color" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Section alt style={{ position: "relative", overflow: "hidden" }}>
          <FacetMesh />
          <div style={{ position: "relative", zIndex: 1 }}>
            <SectionLabel>Color</SectionLabel>

            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 32 }}>
              {[
                {
                  name: "Ember",
                  hex: "#E8842B",
                  usage: "Primary accent only",
                  role: "CTAs, key highlights, brand moments. Use intentionally — not for decoration.",
                  swatch: "#E8842B",
                  isPrimary: true,
                },
                {
                  name: "Rust",
                  hex: "#B94F22",
                  usage: "Active / pressed states",
                  role: "Depth accent below Ember. Never use independently.",
                  swatch: "#B94F22",
                  isPrimary: false,
                },
                {
                  name: "Sandstone",
                  hex: "#FAB680",
                  usage: "Subtle warm tint",
                  role: "Low-opacity fills on dark surfaces only. Never use at full opacity.",
                  swatch: "#FAB680",
                  isPrimary: false,
                },
                {
                  name: "Sage",
                  hex: "#9EB493",
                  usage: "Support — sparingly",
                  role: "Success states and subtle semantic color only. Not decorative.",
                  swatch: "#9EB493",
                  isPrimary: false,
                },
                {
                  name: "Slate",
                  hex: "#758673",
                  usage: "Muted secondary",
                  role: "De-emphasized text, metadata, secondary UI elements.",
                  swatch: "#758673",
                  isPrimary: false,
                },
              ].map((color) => (
                <div
                  key={color.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    padding: "16px 20px",
                    background: T.bg2,
                    border: `1px solid ${color.isPrimary ? T.orangeRim : T.border0}`,
                    borderRadius: 6,
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      background: color.swatch,
                      flexShrink: 0,
                      clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: T.text0 }}>{color.name}</span>
                      <code style={{ fontSize: 10, color: T.text2, fontFamily: "monospace", letterSpacing: "0.06em" }}>
                        {color.hex}
                      </code>
                      <span style={{
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: color.isPrimary ? T.orange : T.text2,
                        borderLeft: `1px solid ${T.border0}`,
                        paddingLeft: 12,
                      }}>
                        {color.usage}
                      </span>
                    </div>
                    <div style={{ fontSize: 12, color: T.text2, lineHeight: 1.5 }}>{color.role}</div>
                  </div>
                </div>
              ))}
            </div>

            <DoDont
              dos={["Use orange for a single key action per view", "Use contrast ratios above 4.5:1", "Keep the palette restrained"]}
              donts={["Use orange for decoration or labels", "Over-saturate surfaces", "Mix more than 3 hues"]}
            />
          </div>
        </Section>
      </div>

      <SectionCut color={T.bg1} />

      {/* ── TYPOGRAPHY ──────────────────────────────────────────────────── */}
      <div id="typography" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Section>
          <SectionLabel>Typography</SectionLabel>

          <Card style={{ marginBottom: 16, padding: "44px 40px" }}>
            {/* Scale examples */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { label: "Display · 700 · −0.03em",   size: 36, weight: 700, color: T.text0, tracking: "-0.03em",  text: "Build systems, not features." },
                { label: "Heading · 600 · −0.02em",   size: 24, weight: 600, color: T.text0, tracking: "-0.02em",  text: "Section Heading — SemiBold" },
                { label: "Subheading · 500 · −0.01em", size: 16, weight: 500, color: T.text1, tracking: "-0.01em", text: "Subheading — Medium" },
                { label: "Body · 400 · 0em",            size: 14, weight: 400, color: T.text1, tracking: "0em",    text: "Body copy — Regular 400. Clean, readable, generous line height." },
                { label: "Caption · 400 · +0.02em",    size: 11, weight: 500, color: T.text2, tracking: "0.02em",  text: "Caption / metadata — tight tracking, low emphasis" },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 32,
                    padding: "18px 0",
                    borderBottom: i < 4 ? `1px solid ${T.border0}` : "none",
                  }}
                >
                  <div style={{ width: 200, fontSize: 10, color: T.text2, fontWeight: 500, letterSpacing: "0.04em", flexShrink: 0 }}>
                    {s.label}
                  </div>
                  <div style={{ fontSize: s.size, fontWeight: s.weight, color: s.color, letterSpacing: s.tracking, lineHeight: 1.3 }}>
                    {s.text}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <DoDont
            dos={["Use Inter throughout", "Maintain a clear 3-step scale", "Let whitespace carry the hierarchy"]}
            donts={["Mix typefaces", "Use more than 3 weights", "Compensate for bad hierarchy with color"]}
          />
        </Section>
      </div>

      <Divider />

      {/* ── DESIGN LANGUAGE ─────────────────────────────────────────────── */}
      <div id="design-language" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Section alt style={{ position: "relative", overflow: "hidden" }}>
          <FacetMesh flip style={{ opacity: 0.8 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <SectionLabel>Design Language</SectionLabel>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, marginBottom: 48 }}>
              <div>
                <h2 style={{
                  fontSize: 22,
                  fontWeight: 600,
                  color: T.text0,
                  letterSpacing: "-0.025em",
                  margin: 0,
                  marginBottom: 16,
                  lineHeight: 1.3,
                }}>
                  Geometry from the mark
                </h2>
                <p style={{ fontSize: 14, color: T.text2, lineHeight: 1.8, margin: 0 }}>
                  The visual language is not invented — it is extracted. Every shape, cut, and surface
                  relationship comes directly from the faceted planes of the logo.
                </p>
              </div>

              {/* Anatomy diagram */}
              <div style={{ position: "relative" }}>
                <svg
                  viewBox="0 0 460 200"
                  style={{ width: "100%", height: "auto", display: "block" }}
                  fill="none"
                >
                  {/* Background grid */}
                  {[0,1,2,3,4].map(i => (
                    <line key={`h${i}`} x1="0" y1={i*50} x2="460" y2={i*50} stroke={T.border0} strokeWidth="0.5"/>
                  ))}
                  {[0,1,2,3,4,5,6,7,8].map(i => (
                    <line key={`v${i}`} x1={i*60} y1="0" x2={i*60} y2="200" stroke={T.border0} strokeWidth="0.5"/>
                  ))}

                  {/* Logo facets — large render */}
                  <g transform="translate(30,20) scale(0.62)">
                    <path d="M234.273 133.561L192.884 100.246L136.671 208.21L234.273 133.561Z" fill="#B94F22" opacity="0.7"/>
                    <path d="M240.516 0L192.884 100.246L234.273 133.561L253 65.7299L240.516 0Z" fill="#D26123" opacity="0.7"/>
                    <path d="M0 122.263L192.884 100.246L240.516 0L0 122.263Z" fill="#FAB680" opacity="0.4"/>
                    <path d="M136.671 208.21L0 164.227L33.0625 191.052L134.56 213L136.671 208.21Z" fill="#9EB493" opacity="0.5"/>
                    <path d="M234.273 133.561L136.671 208.21L134.56 213L195.416 191.052L234.273 133.561Z" fill="#758673" opacity="0.6"/>
                    <path d="M192.884 100.246L0 122.263V164.227L136.671 208.21L192.884 100.246Z" fill="#E8842B" opacity="0.6"/>
                    {/* Facet edge lines */}
                    <path d="M234.273 133.561L192.884 100.246L136.671 208.21L234.273 133.561Z" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" fill="none"/>
                    <path d="M240.516 0L192.884 100.246L234.273 133.561L253 65.7299L240.516 0Z" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" fill="none"/>
                    <path d="M0 122.263L192.884 100.246L240.516 0L0 122.263Z" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" fill="none"/>
                  </g>

                  {/* Annotation arrows + labels */}
                  <g>
                    <line x1="190" y1="40" x2="240" y2="30" stroke={T.border1} strokeWidth="0.8"/>
                    <circle cx="190" cy="40" r="2" fill={T.text2}/>
                    <text x="244" y="34" fontSize="9" fill={T.text2} fontFamily="Inter">Directional planes</text>
                  </g>
                  <g>
                    <line x1="110" y1="100" x2="68" y2="85" stroke={T.border1} strokeWidth="0.8"/>
                    <circle cx="110" cy="100" r="2" fill={T.text2}/>
                    <text x="0" y="82" fontSize="9" fill={T.text2} fontFamily="Inter">Angular facets</text>
                  </g>
                  <g>
                    <line x1="155" y1="155" x2="200" y2="170" stroke={T.border1} strokeWidth="0.8"/>
                    <circle cx="155" cy="155" r="2" fill={T.text2}/>
                    <text x="204" y="174" fontSize="9" fill={T.text2} fontFamily="Inter">Layered surfaces</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Four principles grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 32 }}>
              {[
                {
                  title: "Faceted geometry",
                  desc: "Multi-face polygonal forms. Use at section boundaries, card corners, and as ambient background texture.",
                  shape: (
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <polygon points="20,3 37,13 37,27 20,37 3,27 3,13" stroke={T.border1} strokeWidth="1"/>
                      <polygon points="20,3 37,13 20,18" fill={T.orangeDim} stroke={T.orangeRim} strokeWidth="0.5"/>
                      <polygon points="20,18 37,13 37,27" fill="rgba(158,180,147,0.08)" stroke={T.border0} strokeWidth="0.5"/>
                    </svg>
                  ),
                },
                {
                  title: "Angular cuts",
                  desc: "Corner bevels replace standard radii on cards and containers. The cut angle mirrors the logo's diagonal.",
                  shape: (
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <polygon points="12,3 37,3 37,28 28,37 3,37 3,12" stroke={T.border1} strokeWidth="1"/>
                      <polygon points="37,3 37,28 28,37" fill={T.orangeDim}/>
                      <line x1="12" y1="3" x2="3" y2="12" stroke={T.orangeRim} strokeWidth="1"/>
                    </svg>
                  ),
                },
                {
                  title: "Layered surfaces",
                  desc: "Overlapping planes create depth without shadows. Each layer is a distinct background stop.",
                  shape: (
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <rect x="2" y="12" width="28" height="24" rx="2" fill={T.bg3} stroke={T.border0} strokeWidth="1"/>
                      <rect x="6" y="8"  width="28" height="24" rx="2" fill={T.bg2} stroke={T.border0} strokeWidth="1"/>
                      <rect x="10" y="4" width="28" height="20" rx="2" fill="none" stroke={T.border1} strokeWidth="1"/>
                    </svg>
                  ),
                },
                {
                  title: "Directional cuts",
                  desc: "Angled section transitions signal momentum. Slopes always move left-to-right, 2–4° from horizontal.",
                  shape: (
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <line x1="3" y1="37" x2="37" y2="3" stroke={T.border1} strokeWidth="1"/>
                      <line x1="11" y1="37" x2="37" y2="11" stroke={T.border0} strokeWidth="0.7"/>
                      <line x1="19" y1="37" x2="37" y2="19" stroke={T.border0} strokeWidth="0.5"/>
                      <circle cx="37" cy="3" r="2" fill={T.orange} opacity="0.6"/>
                    </svg>
                  ),
                },
              ].map((item) => (
                <Card key={item.title}>
                  <div style={{ marginBottom: 16 }}>{item.shape}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: T.text0, marginBottom: 8, letterSpacing: "-0.01em" }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: 12, color: T.text2, lineHeight: 1.65 }}>{item.desc}</div>
                </Card>
              ))}
            </div>

            {/* Shape rules */}
            <Card cut={false} style={{ padding: "28px 32px" }}>
              <div style={{
                fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
                textTransform: "uppercase", color: T.text2, marginBottom: 20,
              }}>
                Visual consistency principles
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Corner cuts match the logo's steepest diagonal — approximately 45°.",
                  "Background geometry lives at 2–5% opacity. Never above 8%.",
                  "Never use more than 3 geometric layers in a single composition.",
                  "Full circles are reserved for avatars and status indicators only.",
                  "Angled section transitions always slope in the same direction — left rises, right falls.",
                ].map((rule, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{
                      width: 20,
                      height: 20,
                      background: T.bg3,
                      border: `1px solid ${T.border1}`,
                      borderRadius: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 1,
                    }}>
                      <span style={{ fontSize: 9, fontWeight: 700, color: T.text2 }}>{i + 1}</span>
                    </div>
                    <div style={{ fontSize: 13, color: T.text2, lineHeight: 1.65 }}>{rule}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Section>
      </div>

      <SectionCut color={T.bg1} />

      {/* ── PRODUCT PRINCIPLES ──────────────────────────────────────────── */}
      <div id="principles" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Section>
          <SectionLabel>Product Principles</SectionLabel>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, marginBottom: 48 }}>
            <div>
              <h2 style={{
                fontSize: 22,
                fontWeight: 600,
                color: T.text0,
                letterSpacing: "-0.025em",
                margin: 0,
                marginBottom: 16,
                lineHeight: 1.3,
              }}>
                How we build
              </h2>
              <p style={{ fontSize: 14, color: T.text2, lineHeight: 1.8, margin: 0 }}>
                Every product decision — from a single component to the full system — is shaped by the same
                core operating principles.
              </p>
            </div>

            {/* Build → Test → Refine → Repeat loop */}
            <div style={{
              display: "flex",
              background: T.bg2,
              border: `1px solid ${T.border1}`,
              borderRadius: 6,
              overflow: "hidden",
            }}>
              {["Build", "Test", "Refine", "Repeat"].map((step, i) => (
                <React.Fragment key={step}>
                  <div style={{
                    flex: 1,
                    padding: "24px 20px",
                    textAlign: "center",
                    background: i === 0 ? `rgba(232,132,43,0.05)` : "transparent",
                    borderRight: i < 3 ? `1px solid ${T.border0}` : "none",
                  }}>
                    <div style={{
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: i === 0 ? T.orange : T.text2,
                      marginBottom: 8,
                    }}>
                      0{i + 1}
                    </div>
                    <div style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: i === 0 ? T.text0 : T.text2,
                      letterSpacing: "-0.01em",
                    }}>
                      {step}
                    </div>
                  </div>
                  {i < 3 && (
                    <div style={{
                      width: 1,
                      background: T.border0,
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              {
                index: "01",
                title: "Minimal by default",
                desc: "Start with the fewest elements. Every component earns its presence. Remove before you add.",
                primary: true,
              },
              {
                index: "02",
                title: "System-driven thinking",
                desc: "Design and build in patterns — consistent tokens, components, and behaviors across every surface.",
                primary: false,
              },
              {
                index: "03",
                title: "Human-centered precision",
                desc: "Thoughtful doesn't mean slow. Clarity and comprehension speed are primary product metrics.",
                primary: false,
              },
              {
                index: "04",
                title: "Iteration over perfection",
                desc: "Ship the clear version, observe, and refine. The system improves through use, not planning.",
                primary: false,
              },
            ].map((p) => (
              <Card
                key={p.title}
                style={{
                  display: "flex",
                  gap: 28,
                  alignItems: "flex-start",
                  padding: "24px 28px",
                  borderColor: p.primary ? T.orangeRim : T.border1,
                }}
              >
                <div style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: p.primary ? T.orange : T.text2,
                  letterSpacing: "0.1em",
                  flexShrink: 0,
                  paddingTop: 3,
                  width: 24,
                }}>
                  {p.index}
                </div>
                <div>
                  <div style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: T.text0,
                    marginBottom: 6,
                    letterSpacing: "-0.01em",
                  }}>
                    {p.title}
                  </div>
                  <div style={{ fontSize: 13, color: T.text2, lineHeight: 1.65 }}>{p.desc}</div>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      <Divider />

      {/* ── CLOSING ─────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Section alt style={{ position: "relative", overflow: "hidden" }}>
          <FacetMesh style={{ opacity: 0.5 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <blockquote style={{ margin: 0, padding: "0 0 0 28px", borderLeft: `2px solid ${T.border1}`, maxWidth: 580 }}>
              <p style={{
                fontSize: 18,
                fontWeight: 400,
                color: T.text2,
                lineHeight: 1.8,
                fontStyle: "italic",
                margin: 0,
                marginBottom: 16,
              }}>
                "Muskmelon Labs is not about building many things.
                <br />
                It is about building the{" "}
                <em style={{ color: T.text0, fontStyle: "normal", fontWeight: 600 }}>right things</em>,
                thoughtfully."
              </p>
            </blockquote>

            <div style={{ marginTop: 36, display: "flex", gap: 8 }}>
              <Tag>Evolving</Tag>
              <Tag>Experimental</Tag>
              <Tag>Iterative</Tag>
            </div>

            <div style={{
              marginTop: 64,
              paddingTop: 32,
              borderTop: `1px solid ${T.border0}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <LogoSm />
                <span style={{ fontSize: 12, fontWeight: 600, color: T.text2, letterSpacing: "-0.01em" }}>
                  Muskmelon Labs
                </span>
              </div>
              <span style={{ fontSize: 11, color: T.text2, opacity: 0.4, letterSpacing: "0.06em" }}>
                Brand Identity System — v1.0
              </span>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
