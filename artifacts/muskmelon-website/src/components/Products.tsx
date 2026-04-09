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

export function Products() {
  return (
    <section id="products" style={{
      background: "#1e1e1e",
      padding: "96px 64px",
      borderBottom: "1px solid #2e2e2e",
    }}>
      <FadeIn>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48 }}>
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
            textAlign: "right",
          }}>
            Focused product lines built on open systems and intelligent tooling.
          </p>
        </div>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {products.slice(0, 2).map((p, i) => {
          const Illust = illustrations[i];
          const isDark = i === 1;
          return (
            <FadeIn key={p.num} delay={i * 60}>
              <div className={isDark ? "card-dark" : "card"} style={{
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 220,
                gap: 24,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#444444", letterSpacing: "0.14em", marginBottom: 14 }}>
                      {p.num}
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: "#F9FAFB", letterSpacing: "-0.02em", marginBottom: 10 }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.65 }}>{p.desc}</p>
                  </div>
                  <div style={{ color: isDark ? "#FF6A00" : "#444444", flexShrink: 0, marginLeft: 24, opacity: isDark ? 0.8 : 0.5 }}>
                    <Illust />
                  </div>
                </div>
                <a href="#contact" style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#FF6A00",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}>
                  Learn more <span>→</span>
                </a>
              </div>
            </FadeIn>
          );
        })}

        <div style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          {products.slice(2, 5).map((p, i) => {
            const Illust = illustrations[i + 2];
            const highlight = i === 1;
            return (
              <FadeIn key={p.num} delay={(i + 2) * 60}>
                <div className={highlight ? "card-orange clip-br" : "card"} style={{
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 210,
                  gap: 20,
                }}>
                  <div>
                    <div style={{ color: highlight ? "rgba(0,0,0,0.3)" : "#444444", marginBottom: 16, fontSize: 10, fontWeight: 700, letterSpacing: "0.14em" }}>
                      {p.num}
                    </div>
                    <div style={{ color: highlight ? "rgba(0,0,0,0.6)" : "#555555", marginBottom: 16 }}>
                      <Illust />
                    </div>
                    <h3 style={{
                      fontSize: 15,
                      fontWeight: 800,
                      color: highlight ? "#000" : "#F9FAFB",
                      letterSpacing: "-0.02em",
                      marginBottom: 8,
                    }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: 12, color: highlight ? "rgba(0,0,0,0.6)" : "#9CA3AF", lineHeight: 1.6 }}>
                      {p.desc}
                    </p>
                  </div>
                  <a href="#contact" style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 10,
                    fontWeight: 700,
                    color: highlight ? "rgba(0,0,0,0.7)" : "#FF6A00",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}>
                    Learn more <span>→</span>
                  </a>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={5 * 60} style={{ gridColumn: "1 / -1" }}>
          {(() => {
            const p = products[5];
            const Illust = illustrations[5];
            return (
              <div className="card" style={{
                padding: "28px 32px",
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr",
                alignItems: "center",
                gap: 48,
              }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#444444", letterSpacing: "0.14em", marginBottom: 12 }}>
                    {p.num}
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: "#F9FAFB", letterSpacing: "-0.02em", marginBottom: 8 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.65 }}>{p.desc}</p>
                </div>
                <div style={{ color: "#444444", opacity: 0.5 }}>
                  <Illust />
                </div>
                <div style={{ textAlign: "right" }}>
                  <a href="#contact" className="btn btn-stroke-orange" style={{ padding: "10px 24px", fontSize: 11 }}>
                    Learn more
                  </a>
                </div>
              </div>
            );
          })()}
        </FadeIn>
      </div>
    </section>
  );
}
