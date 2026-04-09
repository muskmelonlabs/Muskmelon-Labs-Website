import { useState, useEffect } from "react";
import { Logo } from "./Logo";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const links = [
  { label: "Products",   href: "#products" },
  { label: "Work",       href: "#work" },
  { label: "Process",    href: "#process" },
  { label: "Team",       href: "#team" },
  { label: "Contact",    href: "#contact" },
  { label: "Brand Book", href: `${BASE}/brand-book/` as string, external: true },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(11,15,20,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1F2937" : "1px solid transparent",
        transition: "background 0.25s, border-color 0.25s",
        padding: "0 40px",
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <a
        href={`${BASE}/`}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          textDecoration: "none",
        }}
      >
        <Logo size={28} />
        <span style={{ fontSize: 14, fontWeight: 700, color: "#E5E7EB", letterSpacing: "-0.02em" }}>
          Muskmelon Labs
        </span>
      </a>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {links.map((link) =>
          link.external ? (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "#FF6A00",
                textDecoration: "none",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                borderBottom: "1px solid rgba(255,106,0,0.3)",
                paddingBottom: 1,
                transition: "color 0.15s, border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#FF8C42";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,140,66,0.6)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#FF6A00";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,106,0,0.3)";
              }}
            >
              {link.label}
            </a>
          ) : (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "#9CA3AF",
                textDecoration: "none",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#E5E7EB")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9CA3AF")}
            >
              {link.label}
            </a>
          )
        )}
      </div>
    </nav>
  );
}
