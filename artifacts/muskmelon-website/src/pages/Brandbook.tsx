import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { FadeIn } from "@/components/FadeIn";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/* ─── Data ─────────────────────────────────────────────── */

const toc = [
  { num: "01", label: "Vision & Mission" },
  { num: "02", label: "Voice & Tone" },
  { num: "03", label: "Logo System" },
  { num: "04", label: "Color System" },
  { num: "05", label: "Typography" },
  { num: "06", label: "Brand Elements" },
  { num: "07", label: "Patterns & Visual Language" },
  { num: "08", label: "Marketing Guidelines" },
  { num: "09", label: "Dos & Don'ts" },
];

const voiceDo = [
  { label: "Sharp", example: "\"We build systems that hold up.\"" },
  { label: "Confident", example: "\"No compromise. No vendor lock-in.\"" },
  { label: "Direct", example: "\"Open by default. Always.\"" },
  { label: "Minimal", example: "\"Less noise. More signal.\"" },
];

const voiceDont = [
  { label: "Corporate", example: "\"We are committed to leveraging synergies...\"" },
  { label: "Vague", example: "\"We help businesses succeed with technology.\"" },
  { label: "Hype-driven", example: "\"Revolutionary AI-powered next-gen platform!\"" },
  { label: "Over-explained", example: "\"What we mean by this is that essentially...\"" },
];

const logoMisuse = [
  "Do not distort, scale non-uniformly, or stretch the mark.",
  "Do not recolor individual facets of the logo.",
  "Do not add drop shadows, glows, or outer strokes.",
  "Do not place the logo inside a shape or container.",
  "Do not use the logo on low-contrast or patterned backgrounds.",
  "Do not rotate the logo mark.",
];

const colors = [
  { name: "Accent Orange", hex: "#FF6A00", role: "Primary accent — CTAs, highlights, labels", group: "Primary" },
  { name: "Deep BG", hex: "#161616", role: "Primary page background", group: "Primary" },
  { name: "Surface", hex: "#1e1e1e", role: "Card and section background", group: "Primary" },
  { name: "Elevated", hex: "#252525", role: "Elevated card surface", group: "Secondary" },
  { name: "Border", hex: "#2e2e2e", role: "All borders and dividers", group: "Secondary" },
  { name: "Muted", hex: "#9CA3AF", role: "Secondary and body text", group: "Secondary" },
  { name: "Primary Text", hex: "#F9FAFB", role: "Headlines and key copy", group: "Secondary" },
  { name: "Sage Green", hex: "#9EB493", role: "Brand mark leaf accent only", group: "Secondary" },
];

const typeScales = [
  { label: "Display", size: "72px", weight: "900", tracking: "-0.04em", sample: "Build What Matters" },
  { label: "H1", size: "52px", weight: "900", tracking: "-0.04em", sample: "About Muskmelon Labs" },
  { label: "H2", size: "40px", weight: "900", tracking: "-0.03em", sample: "What We Build" },
  { label: "H3", size: "24px", weight: "800", tracking: "-0.025em", sample: "Brand Identity System" },
  { label: "Body", size: "15px", weight: "400", tracking: "0", sample: "An experimental product lab building software on open systems and unconventional thinking." },
  { label: "Caption", size: "13px", weight: "500", tracking: "0", sample: "Supporting detail text and descriptions" },
  { label: "Label", size: "11px", weight: "700", tracking: "0.14em", sample: "SECTION LABEL · TAG · BADGE" },
];

const brandElements = [
  {
    title: "Angular Cuts",
    desc: "Diagonal clip-paths at 16–20px cut the corners of cards and containers. This creates the signature geometric tension in the UI.",
    preview: "clip",
  },
  {
    title: "Sharp Borders",
    desc: "All UI elements use 90° corners. Zero border-radius. Borders are thin (1px) and use the #2e2e2e border color.",
    preview: "border",
  },
  {
    title: "Orange Accent Lines",
    desc: "Left border lines in #FF6A00 are used for active states, section labels, and highlighted items. Never used as fills.",
    preview: "line",
  },
  {
    title: "Section Labels",
    desc: "Small all-caps pill labels (11px, weight 700, 0.14em letter-spacing) introduce each section. Always in orange.",
    preview: "label",
  },
];

const globalDos = [
  "Maintain consistent spacing using the 8px base grid.",
  "Use #FF6A00 orange sparingly — for CTAs, highlights, and active states only.",
  "Apply sharp, angular geometry everywhere. No rounded corners.",
  "Keep layout minimal — let whitespace carry the structure.",
  "Use section labels to organize long pages.",
  "Prefer thin borders over heavy backgrounds to separate content.",
];

const globalDonts = [
  "Don't use rounded corners on any element.",
  "Don't apply orange as a large background fill.",
  "Don't use gradients as fills — only as subtle radial background glows.",
  "Don't mix typefaces. Inter is the only typeface used.",
  "Don't break the grid. All layouts are column-based with consistent gutters.",
  "Don't overdesign. When in doubt, remove.",
];

const marketingRules = [
  {
    title: "Always Dark Theme",
    desc: "All marketing surfaces — social posts, banners, decks — use the dark palette. #161616 or #1e1e1e background only.",
  },
  {
    title: "Content Before Decoration",
    desc: "The message leads. Visual elements support copy — they never compete. One hero line per visual.",
  },
  {
    title: "Grid-Based Layouts",
    desc: "All card and post layouts follow a strict column grid. No freestyle or freeform placements.",
  },
  {
    title: "Orange is Precise",
    desc: "Use orange only on one element per composition — the CTA, the label, or the highlight. Not all three.",
  },
];

/* ─── Section Header ─────────────────────────────────────── */

function SectionHeader({ num, label, title, subtitle }: { num: string; label: string; title: string; subtitle?: string }) {
  return (
    <FadeIn>
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#444444", letterSpacing: "0.14em" }}>{num}</span>
          <div className="section-label">{label}</div>
        </div>
        <h2 style={{
          fontSize: "clamp(28px, 3.5vw, 48px)",
          fontWeight: 900,
          color: "#F9FAFB",
          letterSpacing: "-0.03em",
          lineHeight: 1.0,
          margin: 0,
          fontFamily: "'Inter', sans-serif",
        }}>
          {title}
        </h2>
        {subtitle && (
          <p style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.75, marginTop: 16, marginBottom: 0, maxWidth: 560 }}>
            {subtitle}
          </p>
        )}
      </div>
    </FadeIn>
  );
}

/* ─── Divider ─────────────────────────────────────────────── */

function SectionDivider() {
  return <div style={{ borderTop: "1px solid #2e2e2e", margin: "0 0" }} />;
}

/* ─── Component ──────────────────────────────────────────── */

export function Brandbook() {
  return (
    <div style={{ background: "#1e1e1e", minHeight: "100vh" }}>
      <Nav />

      {/* ── Hero ── */}
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
          background: "radial-gradient(ellipse 60% 80% at 90% 50%, rgba(255,106,0,0.06) 0%, transparent 70%)",
        }} />
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
          <FadeIn>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.16em",
              textTransform: "uppercase", color: "#FF6A00",
              borderLeft: "2px solid #FF6A00", paddingLeft: 12,
              marginBottom: 40, display: "inline-block",
            }}>
              Brand Identity System
            </div>
          </FadeIn>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between" style={{ gap: 48 }}>
            <FadeIn delay={60}>
              <h1 style={{
                fontSize: "clamp(40px, 6vw, 80px)",
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
              <div style={{ maxWidth: 400 }}>
                <p style={{ fontSize: 15, color: "#9CA3AF", lineHeight: 1.8, marginBottom: 32 }}>
                  The visual and conceptual foundation of Muskmelon Labs. A complete reference for logo, color, typography, and brand usage.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Logo size={36} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#F9FAFB", letterSpacing: "-0.01em" }}>Muskmelon Labs</div>
                    <div style={{ fontSize: 10, color: "#555555", letterSpacing: "0.1em", textTransform: "uppercase" }}>Brand Book · 2024</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Table of contents */}
          <FadeIn delay={200}>
            <div style={{
              marginTop: 64,
              border: "1px solid #2e2e2e",
              background: "#252525",
            }}>
              <div style={{
                padding: "16px 24px",
                borderBottom: "1px solid #2e2e2e",
                fontSize: 10, fontWeight: 700, color: "#555555", letterSpacing: "0.14em", textTransform: "uppercase",
              }}>
                Index
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3" style={{}}>
                {toc.map((t, i) => (
                  <div key={t.num} style={{
                    padding: "14px 24px",
                    borderBottom: "1px solid #2e2e2e",
                    borderRight: "1px solid #2e2e2e",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                  }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#FF6A00", letterSpacing: "0.08em" }}>{t.num}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#9CA3AF" }}>{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 01 Vision & Mission ── */}
      <section style={{ padding: "96px 0", borderBottom: "1px solid #2e2e2e" }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionHeader num="01" label="Vision & Mission" title="What and Why" />

          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 1, background: "#2e2e2e" }}>
            <FadeIn>
              <div style={{ background: "#1e1e1e", padding: "48px 40px", borderRight: "1px solid #2e2e2e" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#FF6A00", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>
                  Vision
                </div>
                <p style={{ fontSize: 20, fontWeight: 800, color: "#F9FAFB", letterSpacing: "-0.02em", lineHeight: 1.4, marginBottom: 20 }}>
                  Build systems that compound in value over time.
                </p>
                <p style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.8, margin: 0 }}>
                  A future where software is open, composable, and free from vendor lock-in. Infrastructure that scales without compromise — built on open standards and unconventional thinking.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={80}>
              <div style={{ background: "#1e1e1e", padding: "48px 40px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#FF6A00", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>
                  Mission
                </div>
                <p style={{ fontSize: 20, fontWeight: 800, color: "#F9FAFB", letterSpacing: "-0.02em", lineHeight: 1.4, marginBottom: 20 }}>
                  Solve hard problems with a small, high-leverage team.
                </p>
                <p style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.8, margin: 0 }}>
                  We build experimental products at the intersection of storage, cognition, and automation. No hype. No bloat. Tools that outlast the sprint and improve with use.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 02 Voice & Tone ── */}
      <section style={{ padding: "96px 0", borderBottom: "1px solid #2e2e2e", background: "#161616" }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionHeader
            num="02"
            label="Voice & Tone"
            title="How We Speak"
            subtitle="Muskmelon Labs communicates with precision. Every word is deliberate. Non-corporate, sharp, and never loud."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 12 }}>
            {/* Do */}
            <FadeIn>
              <div style={{
                background: "#252525",
                border: "1px solid #2e2e2e",
                borderTop: "2px solid #FF6A00",
              }}>
                <div style={{ padding: "20px 28px", borderBottom: "1px solid #2e2e2e" }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#FF6A00", letterSpacing: "0.14em", textTransform: "uppercase" }}>Do</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {voiceDo.map((v, i) => (
                    <div key={v.label} style={{
                      padding: "24px 28px",
                      borderBottom: i < voiceDo.length - 1 ? "1px solid #2e2e2e" : "none",
                    }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#F9FAFB", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 8 }}>
                        {v.label}
                      </div>
                      <div style={{ fontSize: 14, color: "#9CA3AF", fontStyle: "italic" }}>
                        {v.example}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Don't */}
            <FadeIn delay={80}>
              <div style={{
                background: "#252525",
                border: "1px solid #2e2e2e",
                borderTop: "2px solid #444444",
              }}>
                <div style={{ padding: "20px 28px", borderBottom: "1px solid #2e2e2e" }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.14em", textTransform: "uppercase" }}>Don't</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {voiceDont.map((v, i) => (
                    <div key={v.label} style={{
                      padding: "24px 28px",
                      borderBottom: i < voiceDont.length - 1 ? "1px solid #2e2e2e" : "none",
                    }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#555555", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 8 }}>
                        {v.label}
                      </div>
                      <div style={{ fontSize: 14, color: "#555555", fontStyle: "italic", textDecoration: "line-through" }}>
                        {v.example}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 03 Logo System ── */}
      <section style={{ padding: "96px 0", borderBottom: "1px solid #2e2e2e" }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionHeader
            num="03"
            label="Logo System"
            title="The Mark"
            subtitle="The Muskmelon logo is an angular, geometric mark derived from a cross-section of a muskmelon. It represents experimentation, evolution, and unconventional thinking — raw and intentional."
          />

          {/* Logo Overview */}
          <FadeIn>
            <div style={{
              background: "#161616",
              border: "1px solid #2e2e2e",
              padding: "40px",
              marginBottom: 12,
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#555555", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 24 }}>
                Logo Overview
              </div>
              <div className="flex flex-col lg:flex-row" style={{ gap: 48, alignItems: "flex-start" }}>
                <div style={{
                  background: "#252525",
                  border: "1px solid #2e2e2e",
                  padding: "48px 56px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Logo size={72} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
                  {[
                    { label: "Concept", text: "Six triangular facets derived from the geometry of a muskmelon cross-section. Each face is a distinct plane of the whole." },
                    { label: "Form", text: "Angular, asymmetric, and intentionally imperfect. Not a polished geometric shape — a mark that suggests motion and growth." },
                    { label: "Meaning", text: "The brand is not static. The mark reflects a constantly evolving system — layered, futuristic, and built to adapt." },
                  ].map(item => (
                    <div key={item.label}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#FF6A00", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>
                        {item.label}
                      </div>
                      <p style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.75, margin: 0 }}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Logo Variations */}
          <FadeIn delay={80}>
            <div style={{ marginBottom: 12 }}>
              <div style={{ padding: "14px 0", marginBottom: 12 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#555555", letterSpacing: "0.14em", textTransform: "uppercase" }}>Logo Variations</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3" style={{ border: "1px solid #2e2e2e" }}>
                {[
                  { label: "Symbol", bg: "#161616", content: <Logo size={56} /> },
                  {
                    label: "Wordmark", bg: "#1e1e1e", content: (
                      <span style={{ fontSize: 22, fontWeight: 800, color: "#F9FAFB", letterSpacing: "-0.03em", fontFamily: "'Inter', sans-serif" }}>
                        Muskmelon Labs
                      </span>
                    )
                  },
                  {
                    label: "Combined", bg: "#252525", content: (
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <Logo size={40} />
                        <span style={{ fontSize: 16, fontWeight: 800, color: "#F9FAFB", letterSpacing: "-0.02em", fontFamily: "'Inter', sans-serif" }}>
                          Muskmelon Labs
                        </span>
                      </div>
                    )
                  },
                ].map((v, i) => (
                  <div key={v.label} style={{
                    background: v.bg,
                    borderRight: "1px solid #2e2e2e",
                    padding: "56px 32px 32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 32,
                    alignItems: "center",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 64 }}>
                      {v.content}
                    </div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#555555", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                      {v.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Construction + Clear Space */}
          <FadeIn delay={120}>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 12, marginBottom: 12 }}>
              <div style={{ background: "#252525", border: "1px solid #2e2e2e", padding: "32px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#555555", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>Construction</div>
                <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.75, margin: 0 }}>
                  The mark is drawn on a 1177×991 unit grid. Six triangular paths form the full mark — no curves, no radii. Each facet shares an edge with its neighbor at precise coordinates. The overall silhouette reads as asymmetric but controlled.
                </p>
              </div>
              <div style={{ background: "#252525", border: "1px solid #2e2e2e", padding: "32px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#555555", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>Clear Space</div>
                <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.75, marginBottom: 16 }}>
                  Maintain a minimum clear space equal to the height of the mark on all four sides. No text, graphic elements, or other logos may enter this zone.
                </p>
                <div style={{
                  border: "1px dashed #444444",
                  padding: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}>
                  <div style={{
                    position: "absolute",
                    inset: 4,
                    border: "1px dashed rgba(255,106,0,0.3)",
                    pointerEvents: "none",
                  }} />
                  <Logo size={40} />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Minimum Size */}
          <FadeIn delay={140}>
            <div style={{ background: "#252525", border: "1px solid #2e2e2e", padding: "24px 32px", marginBottom: 12, display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#555555", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8 }}>Minimum Size</div>
                <p style={{ fontSize: 13, color: "#9CA3AF", margin: 0 }}>Never reproduce the symbol below 16px height for digital or 5mm for print.</p>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 24 }}>
                {[48, 32, 20, 14].map(sz => (
                  <div key={sz} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <Logo size={sz} />
                    <span style={{ fontSize: 10, color: sz < 16 ? "#FF6A00" : "#555555", fontWeight: 700, letterSpacing: "0.08em" }}>{sz}px {sz < 16 ? "✗" : ""}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Misuse */}
          <FadeIn delay={160}>
            <div style={{ border: "1px solid #2e2e2e", borderTop: "2px solid #444444" }}>
              <div style={{ padding: "16px 28px", borderBottom: "1px solid #2e2e2e", background: "#252525" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.14em", textTransform: "uppercase" }}>Logo Misuse — Never Do This</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ background: "#1e1e1e" }}>
                {logoMisuse.map((rule, i) => (
                  <div key={i} style={{
                    padding: "20px 24px",
                    borderBottom: "1px solid #2e2e2e",
                    borderRight: "1px solid #2e2e2e",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                  }}>
                    <span style={{ fontSize: 13, fontWeight: 800, color: "#FF6A00", flexShrink: 0 }}>✗</span>
                    <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.65, margin: 0 }}>{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 04 Color System ── */}
      <section style={{ padding: "96px 0", borderBottom: "1px solid #2e2e2e", background: "#161616" }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionHeader
            num="04"
            label="Color System"
            title="Color Palette"
            subtitle="The palette is built around restraint. One accent. Multiple dark surfaces. Every color has a specific role."
          />

          {/* Primary */}
          <FadeIn>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#555555", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>Primary</div>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ border: "1px solid #2e2e2e" }}>
                {colors.filter(c => c.group === "Primary").map((c, i) => (
                  <FadeIn key={c.hex} delay={i * 60}>
                    <div style={{ borderRight: "1px solid #2e2e2e", borderBottom: "1px solid #2e2e2e" }}>
                      <div style={{ height: 100, background: c.hex }} />
                      <div style={{ padding: "18px 20px", background: "#252525" }}>
                        <div style={{ fontSize: 14, fontWeight: 800, color: "#F9FAFB", marginBottom: 4, letterSpacing: "-0.01em" }}>{c.name}</div>
                        <div style={{ fontSize: 12, fontWeight: 600, color: "#FF6A00", fontFamily: "monospace", marginBottom: 6 }}>{c.hex}</div>
                        <div style={{ fontSize: 11, color: "#555555" }}>{c.role}</div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Secondary */}
          <FadeIn delay={80}>
            <div style={{ marginBottom: 40 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#555555", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>Secondary</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" style={{ border: "1px solid #2e2e2e" }}>
                {colors.filter(c => c.group === "Secondary").map((c, i) => (
                  <div key={c.hex} style={{ borderRight: "1px solid #2e2e2e", borderBottom: "1px solid #2e2e2e" }}>
                    <div style={{ height: 60, background: c.hex }} />
                    <div style={{ padding: "12px 14px", background: "#252525" }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#F9FAFB", marginBottom: 2 }}>{c.name}</div>
                      <div style={{ fontSize: 10, fontWeight: 600, color: "#FF6A00", fontFamily: "monospace" }}>{c.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Usage rules */}
          <FadeIn delay={120}>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 12 }}>
              <div style={{ background: "#252525", border: "1px solid #2e2e2e", borderTop: "2px solid #FF6A00", padding: "28px 32px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#FF6A00", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>Use Orange For</div>
                {["CTAs and primary action buttons", "Section labels and category tags", "Active states and hover highlights", "Left border accents on focused rows"].map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, marginBottom: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "#FF6A00", fontWeight: 800, flexShrink: 0, fontSize: 12 }}>→</span>
                    <span style={{ fontSize: 13, color: "#9CA3AF" }}>{r}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: "#252525", border: "1px solid #2e2e2e", borderTop: "2px solid #444444", padding: "28px 32px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>Avoid Orange On</div>
                {["Large background fills or full-section colors", "Body copy or long-form text", "Decorative elements that don't carry meaning", "More than one role per composition"].map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, marginBottom: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "#555555", fontWeight: 800, flexShrink: 0, fontSize: 12 }}>✗</span>
                    <span style={{ fontSize: 13, color: "#555555" }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 05 Typography ── */}
      <section style={{ padding: "96px 0", borderBottom: "1px solid #2e2e2e" }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionHeader
            num="05"
            label="Typography"
            title="Type System"
            subtitle="Inter is the sole typeface. Variable weight from 400 to 900. Tight tracking on headings, comfortable leading on body."
          />

          {/* Typeface */}
          <FadeIn>
            <div style={{
              background: "#161616",
              border: "1px solid #2e2e2e",
              padding: "32px 40px",
              marginBottom: 12,
              display: "flex",
              flexWrap: "wrap",
              gap: 40,
              alignItems: "baseline",
            }}>
              <div>
                <div style={{ fontSize: 10, color: "#555555", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>Typeface</div>
                <div style={{ fontSize: 32, fontWeight: 800, color: "#F9FAFB", letterSpacing: "-0.04em", fontFamily: "'Inter', sans-serif" }}>Inter</div>
              </div>
              <div>
                <div style={{ fontSize: 10, color: "#555555", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>Weights Used</div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {[400, 500, 600, 700, 800, 900].map(w => (
                    <span key={w} style={{ fontSize: 14, fontWeight: w, color: "#9CA3AF", fontFamily: "'Inter', sans-serif" }}>{w}</span>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 10, color: "#555555", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>Characters</div>
                <div style={{ fontSize: 20, fontWeight: 500, color: "#9CA3AF", fontFamily: "'Inter', sans-serif", letterSpacing: "0.04em" }}>
                  Aa Bb Cc 01 23
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Scale table */}
          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {typeScales.map((t, i) => (
              <FadeIn key={t.label} delay={i * 50}>
                <div className="flex flex-col sm:flex-row sm:items-center" style={{
                  background: "#1e1e1e",
                  border: "1px solid #2e2e2e",
                  padding: "24px 32px",
                  gap: 24,
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = "#252525"}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = "#1e1e1e"}
                >
                  <div style={{ minWidth: 72, fontSize: 11, fontWeight: 700, color: "#FF6A00", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    {t.label}
                  </div>
                  <div style={{ flex: 1, overflow: "hidden" }}>
                    <div style={{
                      fontSize: t.size,
                      fontWeight: t.weight,
                      color: "#F9FAFB",
                      letterSpacing: t.tracking,
                      lineHeight: 1.1,
                      fontFamily: "'Inter', sans-serif",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}>
                      {t.sample}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 24, flexShrink: 0 }}>
                    <div>
                      <div style={{ fontSize: 9, color: "#444444", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Size</div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#9CA3AF", fontFamily: "monospace" }}>{t.size}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 9, color: "#444444", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Weight</div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#9CA3AF", fontFamily: "monospace" }}>{t.weight}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 9, color: "#444444", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Tracking</div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#9CA3AF", fontFamily: "monospace" }}>{t.tracking}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 Brand Elements ── */}
      <section style={{ padding: "96px 0", borderBottom: "1px solid #2e2e2e", background: "#161616" }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionHeader
            num="06"
            label="Brand Elements"
            title="Visual Language"
            subtitle="These recurring elements define Muskmelon's look. Use them consistently across all surfaces."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 12 }}>
            {brandElements.map((el, i) => (
              <FadeIn key={el.title} delay={i * 70}>
                <div style={{
                  background: "#252525",
                  border: "1px solid #2e2e2e",
                  padding: "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}>
                  {/* Preview */}
                  <div style={{
                    height: 80,
                    background: "#1e1e1e",
                    border: "1px solid #2e2e2e",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    position: "relative",
                  }}>
                    {el.preview === "clip" && (
                      <div style={{
                        width: 120, height: 48,
                        background: "#252525",
                        border: "1px solid #2e2e2e",
                        clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                      }} />
                    )}
                    {el.preview === "border" && (
                      <div style={{
                        width: 120, height: 48,
                        border: "1px solid #2e2e2e",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                        <div style={{ width: 80, height: 2, background: "#2e2e2e" }} />
                      </div>
                    )}
                    {el.preview === "line" && (
                      <div style={{
                        width: 120, height: 48,
                        background: "#1e1e1e",
                        borderLeft: "2px solid #FF6A00",
                        paddingLeft: 12,
                        display: "flex",
                        alignItems: "center",
                      }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#F9FAFB" }}>Active State</div>
                      </div>
                    )}
                    {el.preview === "label" && (
                      <div style={{
                        padding: "4px 12px",
                        background: "rgba(255,106,0,0.1)",
                        border: "1px solid rgba(255,106,0,0.3)",
                        fontSize: 10, fontWeight: 700, color: "#FF6A00",
                        letterSpacing: "0.14em", textTransform: "uppercase",
                      }}>
                        Section Label
                      </div>
                    )}
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "#F9FAFB", letterSpacing: "-0.02em", marginBottom: 10 }}>{el.title}</div>
                    <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.7, margin: 0 }}>{el.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 Patterns & Visual Language ── */}
      <section style={{ padding: "96px 0", borderBottom: "1px solid #2e2e2e" }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionHeader
            num="07"
            label="Patterns & Visual Language"
            title="Geometric System"
            subtitle="Abstract geometry reinforces the brand's angular aesthetic. Grid overlays and diagonal lines create depth without decoration."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: 12, marginBottom: 40 }}>
            {[
              { title: "Grid Overlay", desc: "Thin 1px grid lines in #2e2e2e define structure on hero sections and image backgrounds.", preview: "grid" },
              { title: "Abstract Geometry", desc: "Multi-faceted polygon shapes echo the logo mark. Used sparingly as background elements.", preview: "polygon" },
              { title: "Diagonal Direction", desc: "Motion and layout bias flows bottom-left to top-right — echoing the logo's compositional direction.", preview: "diagonal" },
            ].map((p, i) => (
              <FadeIn key={p.title} delay={i * 80}>
                <div style={{ background: "#252525", border: "1px solid #2e2e2e", padding: "32px", display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{
                    height: 100,
                    background: "#161616",
                    border: "1px solid #2e2e2e",
                    overflow: "hidden",
                    position: "relative",
                  }}>
                    {p.preview === "grid" && (
                      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
                        {Array.from({ length: 8 }).map((_, i) => (
                          <line key={`v${i}`} x1={i * 30} y1="0" x2={i * 30} y2="100%" stroke="#2e2e2e" strokeWidth="1" />
                        ))}
                        {Array.from({ length: 6 }).map((_, i) => (
                          <line key={`h${i}`} x1="0" y1={i * 20} x2="100%" y2={i * 20} stroke="#2e2e2e" strokeWidth="1" />
                        ))}
                      </svg>
                    )}
                    {p.preview === "polygon" && (
                      <svg width="100%" height="100%" viewBox="0 0 200 100" style={{ position: "absolute", inset: 0 }} preserveAspectRatio="xMidYMid slice">
                        <polygon points="20,80 80,20 160,50 140,90" fill="none" stroke="rgba(255,106,0,0.2)" strokeWidth="1" />
                        <polygon points="60,10 120,40 100,90 40,70" fill="none" stroke="#2e2e2e" strokeWidth="1" />
                      </svg>
                    )}
                    {p.preview === "diagonal" && (
                      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
                        {Array.from({ length: 6 }).map((_, i) => (
                          <line key={i} x1={i * 40 - 40} y1="100%" x2={i * 40 + 60} y2="0" stroke={i === 2 ? "rgba(255,106,0,0.3)" : "#2e2e2e"} strokeWidth="1" />
                        ))}
                      </svg>
                    )}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#F9FAFB", letterSpacing: "-0.02em", marginBottom: 8 }}>{p.title}</div>
                    <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 Marketing Guidelines ── */}
      <section style={{ padding: "96px 0", borderBottom: "1px solid #2e2e2e", background: "#161616" }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionHeader
            num="08"
            label="Marketing Guidelines"
            title="Social & Content"
            subtitle="Every external surface — social posts, banners, decks — follows the same system. No exceptions."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 12, marginBottom: 40 }}>
            {marketingRules.map((r, i) => (
              <FadeIn key={r.title} delay={i * 70}>
                <div style={{
                  background: "#252525",
                  border: "1px solid #2e2e2e",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 3, height: 28, background: "#FF6A00", flexShrink: 0 }} />
                    <div style={{ fontSize: 15, fontWeight: 800, color: "#F9FAFB", letterSpacing: "-0.02em" }}>{r.title}</div>
                  </div>
                  <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.7, margin: 0 }}>{r.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Example card layout */}
          <FadeIn delay={200}>
            <div style={{ border: "1px solid #2e2e2e", background: "#252525", padding: "32px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#555555", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>
                Example — Post Layout Structure
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 12 }}>
                {["Announcement", "Product Update", "Insight"].map((type, i) => (
                  <div key={type} style={{
                    background: "#1e1e1e",
                    border: "1px solid #2e2e2e",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    aspectRatio: "1",
                    position: "relative",
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute", top: 0, right: 0, width: 60, height: 60,
                      background: "radial-gradient(circle, rgba(255,106,0,0.08) 0%, transparent 70%)",
                    }} />
                    <div style={{ fontSize: 9, fontWeight: 700, color: "#FF6A00", letterSpacing: "0.16em", textTransform: "uppercase" }}>{type}</div>
                    <div style={{ width: "70%", height: 12, background: "#2e2e2e" }} />
                    <div style={{ width: "50%", height: 8, background: "#252525" }} />
                    <div style={{ flex: 1 }} />
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Logo size={14} />
                      <div style={{ fontSize: 9, fontWeight: 700, color: "#555555", letterSpacing: "0.08em" }}>MUSKMELON LABS</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 09 Dos & Don'ts ── */}
      <section style={{ padding: "96px 0", borderBottom: "1px solid #2e2e2e" }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionHeader num="09" label="Dos & Don'ts" title="Global Rules" />

          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 12 }}>
            <FadeIn>
              <div style={{ background: "#252525", border: "1px solid #2e2e2e", borderTop: "2px solid #FF6A00" }}>
                <div style={{ padding: "20px 28px", borderBottom: "1px solid #2e2e2e" }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#FF6A00", letterSpacing: "0.14em", textTransform: "uppercase" }}>Do</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {globalDos.map((rule, i) => (
                    <div key={i} style={{
                      padding: "16px 24px",
                      borderBottom: "1px solid #2e2e2e",
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                    }}>
                      <span style={{ fontSize: 12, fontWeight: 800, color: "#FF6A00", flexShrink: 0 }}>✓</span>
                      <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.65, margin: 0 }}>{rule}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={80}>
              <div style={{ background: "#252525", border: "1px solid #2e2e2e", borderTop: "2px solid #444444" }}>
                <div style={{ padding: "20px 28px", borderBottom: "1px solid #2e2e2e" }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.14em", textTransform: "uppercase" }}>Don't</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {globalDonts.map((rule, i) => (
                    <div key={i} style={{
                      padding: "16px 24px",
                      borderBottom: "1px solid #2e2e2e",
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                    }}>
                      <span style={{ fontSize: 12, fontWeight: 800, color: "#555555", flexShrink: 0 }}>✗</span>
                      <p style={{ fontSize: 13, color: "#555555", lineHeight: 1.65, margin: 0 }}>{rule}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <section style={{ padding: "64px 0" }}>
        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between" style={{ gap: 24 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#555555", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
                  Muskmelon Labs · Brand Identity System · 2024
                </div>
                <div style={{ fontSize: 14, color: "#9CA3AF" }}>
                  Questions about brand usage? Get in touch.
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href={`${BASE}/#work`} className="btn btn-stroke" style={{ fontSize: 12 }}>← Back to Work</a>
                <a href={`${BASE}/#contact`} className="btn btn-fill" style={{ fontSize: 12 }}>Get in Touch</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
