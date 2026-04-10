import { Logo } from "./Logo";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export function Footer() {
  return (
    <footer style={{ background: "#1e1e1e", borderTop: "1px solid #2e2e2e" }}>
      <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between" style={{
          padding: "36px 0",
          borderBottom: "1px solid #2e2e2e",
          gap: 24,
        }}>
          <a href={`${BASE}/`} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Logo size={24} />
            <span style={{ fontSize: 13, fontWeight: 800, color: "#9CA3AF", letterSpacing: "-0.015em", fontFamily: "'Inter', sans-serif" }}>
              Muskmelon Labs
            </span>
          </a>

          <nav className="flex flex-wrap" style={{ gap: "12px 24px" }}>
            {[
              { label: "Products", href: "#products" },
              { label: "Work",     href: "#work" },
              { label: "Process",  href: "#process" },
              { label: "Team",     href: "#team" },
              { label: "Vision",   href: "#vision" },
              { label: "Contact",  href: "#contact" },
            ].map(l => (
              <a key={l.label} href={l.href} style={{
                fontSize: 12,
                color: "#444444",
                transition: "color 0.15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#9CA3AF")}
              onMouseLeave={e => (e.currentTarget.style.color = "#444444")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={`${BASE}/brand-book/`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#FF6A00",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              borderBottom: "1px solid rgba(255,106,0,0.4)",
              paddingBottom: 2,
              transition: "color 0.15s",
              whiteSpace: "nowrap",
            }}
          >
            Brand Book ↗
          </a>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between" style={{
          padding: "20px 0",
          gap: 12,
        }}>
          <span style={{ fontSize: 11, color: "#2e2e2e" }}>
            © 2025 Muskmelon Labs. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service"].map(l => (
              <a key={l} href="#" style={{
                fontSize: 11,
                color: "#2e2e2e",
                transition: "color 0.15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#444444")}
              onMouseLeave={e => (e.currentTarget.style.color = "#2e2e2e")}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
