import type { CSSProperties } from "react";
import { FadeIn } from "./FadeIn";

function IllustGit() {
  return (
    <svg viewBox="0 0 120 80" fill="none" style={{ width: 120, height: 80 }}>
      <rect x="10" y="10" width="40" height="28" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="70" y="10" width="40" height="28" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="40" y="46" width="40" height="24" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="30" y1="38" x2="30" y2="52" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"/>
      <line x1="30" y1="52" x2="60" y2="52" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="90" y1="38" x2="90" y2="52" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"/>
      <line x1="90" y1="52" x2="60" y2="52" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="30" cy="24" r="4" fill="currentColor"/>
      <circle cx="90" cy="24" r="4" fill="currentColor"/>
      <text x="60" y="62" textAnchor="middle" fontSize="7" fill="currentColor" fontWeight="700" fontFamily="Inter">v∞</text>
    </svg>
  );
}
function IllustAI() {
  return (
    <svg viewBox="0 0 120 80" fill="none" style={{ width: 120, height: 80 }}>
      <circle cx="60" cy="40" r="22" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="60" cy="40" r="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3"/>
      <circle cx="60" cy="40" r="4" fill="currentColor"/>
      {[0,45,90,135,180,225,270,315].map(a => (
        <line key={a}
          x1={60 + 26 * Math.cos((a * Math.PI)/180)}
          y1={40 + 26 * Math.sin((a * Math.PI)/180)}
          x2={60 + 34 * Math.cos((a * Math.PI)/180)}
          y2={40 + 34 * Math.sin((a * Math.PI)/180)}
          stroke="currentColor" strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}
function IllustInterface() {
  return (
    <svg viewBox="0 0 120 80" fill="none" style={{ width: 120, height: 80 }}>
      <rect x="8" y="12" width="104" height="56" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="8" y1="26" x2="112" y2="26" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="16" y="32" width="30" height="18" stroke="currentColor" strokeWidth="1"/>
      <rect x="54" y="32" width="50" height="8" stroke="currentColor" strokeWidth="1"/>
      <rect x="54" y="44" width="30" height="6" stroke="currentColor" strokeWidth="1"/>
      <circle cx="16" cy="19" r="3" fill="currentColor"/>
      <circle cx="26" cy="19" r="3" stroke="currentColor" strokeWidth="1"/>
      <circle cx="36" cy="19" r="3" stroke="currentColor" strokeWidth="1"/>
    </svg>
  );
}
function IllustAutomation() {
  return (
    <svg viewBox="0 0 120 80" fill="none" style={{ width: 120, height: 80 }}>
      <rect x="10" y="28" width="22" height="24" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="49" y="20" width="22" height="40" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="88" y="32" width="22" height="20" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="32" y1="40" x2="49" y2="40" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="71" y1="40" x2="88" y2="40" stroke="currentColor" strokeWidth="1.5"/>
      <polygon points="86,36 94,40 86,44" fill="currentColor"/>
      <polygon points="47,36 39,40 47,44" fill="currentColor"/>
    </svg>
  );
}
function IllustInfra() {
  return (
    <svg viewBox="0 0 120 80" fill="none" style={{ width: 120, height: 80 }}>
      <rect x="10" y="10" width="100" height="18" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="10" y="34" width="100" height="18" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="10" y="58" width="100" height="14" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="100" cy="19" r="3" fill="currentColor"/>
      <circle cx="100" cy="43" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="100" cy="65" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="18" y1="19" x2="85" y2="19" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      <line x1="18" y1="43" x2="85" y2="43" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    </svg>
  );
}
function IllustData() {
  return (
    <svg viewBox="0 0 120 80" fill="none" style={{ width: 120, height: 80 }}>
      <ellipse cx="60" cy="20" rx="44" ry="12" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="16" y1="20" x2="16" y2="44" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="104" y1="20" x2="104" y2="44" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="60" cy="44" rx="44" ry="12" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="16" y1="44" x2="16" y2="64" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="104" y1="44" x2="104" y2="64" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="60" cy="64" rx="44" ry="10" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

const illustrations = [IllustGit, IllustAI, IllustInterface, IllustAutomation, IllustInfra, IllustData];

const products = [
  { num: "01", title: "GitArchive",             desc: "Unlimited storage powered by Git infrastructure. Version everything. Lose nothing." },
  { num: "02", title: "AI Assist Systems",       desc: "Intelligent tools designed to think with you — not for you." },
  { num: "03", title: "Experimental Interfaces", desc: "New ways to interact with software. Beyond the grid." },
  { num: "04", title: "Automation Tools",        desc: "Reduce friction. Increase output. Let systems handle the repetitive." },
  { num: "05", title: "Open Infrastructure",     desc: "Built on systems that scale freely. No lock-in. No compromise." },
  { num: "06", title: "Data Systems",            desc: "Structured, searchable, extensible. Data as a first-class citizen." },
];

const cardBase: CSSProperties = {
  background: "#252525",
  border: "1px solid #2e2e2e",
  clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
  position: "relative",
  overflow: "hidden",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const cardAlt: CSSProperties = {
  ...cardBase,
  background: "#1e1e1e",
};

export function Products() {
  return (
    <section id="products" style={{
      background: "#1e1e1e",
      padding: "96px 0",
      borderBottom: "1px solid #2e2e2e",
    }}>
      <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between" style={{ marginBottom: 48, gap: 16 }}>
            <div>
              <div className="section-label">Services</div>
              <h2 style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 900,
                color: "#F9FAFB",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                margin: 0,
                fontFamily: "'Inter', sans-serif",
              }}>
                What We're Building
              </h2>
            </div>
            <p style={{
              fontSize: 14,
              color: "#9CA3AF",
              lineHeight: 1.7,
              maxWidth: 300,
            }}>
              Focused product lines built on open systems and intelligent tooling.
            </p>
          </div>
        </FadeIn>

        {/* All 6 cards: responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 12 }}>
          {products.map((p, i) => {
            const Illust = illustrations[i];
            const style = i % 2 === 1 ? cardAlt : cardBase;
            return (
              <FadeIn key={p.num} delay={i * 60}>
                <div
                  style={{ ...style, padding: "28px 24px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 210, gap: 20 }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,106,0,0.4)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 28px rgba(255,106,0,0.06)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#2e2e2e"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: "#444444", letterSpacing: "0.14em", marginBottom: 12 }}>
                        {p.num}
                      </div>
                      <h3 style={{ fontSize: 16, fontWeight: 800, color: "#F9FAFB", letterSpacing: "-0.02em", marginBottom: 8 }}>
                        {p.title}
                      </h3>
                      <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.65 }}>{p.desc}</p>
                    </div>
                    <div style={{ color: "#444444", flexShrink: 0, opacity: 0.5 }}>
                      <Illust />
                    </div>
                  </div>
                  <a href="#contact" style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontSize: 11, fontWeight: 700, color: "#FF6A00",
                    letterSpacing: "0.06em", textTransform: "uppercase",
                  }}>
                    Learn more <span>→</span>
                  </a>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
