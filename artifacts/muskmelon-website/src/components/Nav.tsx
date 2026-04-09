import { useState, useEffect } from "react";
import { Logo } from "./Logo";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Services",  href: "#products" },
    { label: "Work",      href: "#work" },
    { label: "Process",   href: "#process" },
    { label: "Team",      href: "#team" },
    { label: "Contact",   href: "#contact" },
  ];

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 200,
      height: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 48px",
      background: scrolled ? "rgba(11,15,20,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid #1F2937" : "1px solid transparent",
      transition: "background 0.3s, border-color 0.3s",
    }}>
      <a href={`${BASE}/`} style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Logo size={26} />
        <span style={{ fontSize: 14, fontWeight: 800, color: "#F9FAFB", letterSpacing: "-0.02em" }}>
          Muskmelon Labs
        </span>
      </a>

      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        {links.map(l => (
          <a key={l.label} href={l.href} style={{
            fontSize: 13, fontWeight: 500, color: "#9CA3AF",
            transition: "color 0.15s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#F9FAFB")}
          onMouseLeave={e => (e.currentTarget.style.color = "#9CA3AF")}
          >
            {l.label}
          </a>
        ))}
      </div>

      <a
        href={`${BASE}/brand-book/`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-stroke"
        style={{ padding: "8px 20px", fontSize: 12 }}
      >
        Brand Book
      </a>
    </nav>
  );
}
