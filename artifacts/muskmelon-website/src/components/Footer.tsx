import { Logo } from "./Logo";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export function Footer() {
  return (
    <footer
      style={{
        background: "#080C10",
        padding: "48px 80px",
        borderTop: "1px solid #1F2937",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 32,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Logo size={24} />
          <span style={{ fontSize: 13, fontWeight: 700, color: "#9CA3AF", letterSpacing: "-0.01em" }}>
            Muskmelon Labs
          </span>
        </div>

        <div style={{ display: "flex", gap: 32 }}>
          {[
            { label: "Products", href: "#products" },
            { label: "Vision",   href: "#vision" },
            { label: "Contact",  href: "#contact" },
            { label: "Brand Book", href: `${BASE}/brand-book/`, external: true },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: "#4B5563",
                textDecoration: "none",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#9CA3AF")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#4B5563")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 20,
          borderTop: "1px solid #1F2937",
        }}
      >
        <span style={{ fontSize: 11, color: "#1F2937" }}>
          © 2025 Muskmelon Labs. All rights reserved.
        </span>
        <span style={{ fontSize: 10, color: "#1F2937", letterSpacing: "0.1em" }}>
          EXPERIMENTAL / v0.1
        </span>
      </div>
    </footer>
  );
}
