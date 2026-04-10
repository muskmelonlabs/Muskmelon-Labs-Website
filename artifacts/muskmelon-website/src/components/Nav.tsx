import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Logo } from "./Logo";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  const isHome = location === "/" || location === "";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = isHome
    ? [
        { label: "Work",    href: "#work" },
        { label: "Process", href: "#process" },
        { label: "About",   href: `${BASE}/about` },
        { label: "Contact", href: "#contact" },
      ]
    : [
        { label: "Work",    href: `${BASE}/#work` },
        { label: "Process", href: `${BASE}/#process` },
        { label: "About",   href: `${BASE}/about` },
        { label: "Contact", href: `${BASE}/#contact` },
      ];

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 200,
      background: scrolled || menuOpen ? "rgba(30,30,30,0.96)" : "transparent",
      backdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
      WebkitBackdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
      borderBottom: scrolled || menuOpen ? "1px solid #2e2e2e" : "1px solid transparent",
      transition: "background 0.3s, border-color 0.3s",
    }}>
      {/* Top bar */}
      <div style={{
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
      }}>
        <a href={`${BASE}/`} style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Logo size={26} />
          <span style={{ fontSize: 14, fontWeight: 800, color: "#F9FAFB", letterSpacing: "-0.02em", fontFamily: "'Inter', sans-serif" }}>
            Muskmelon Labs
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex" style={{ alignItems: "center", gap: 32 }}>
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

        {/* Desktop CTA — Get in Touch */}
        <a
          href={isHome ? "#contact" : `${BASE}/#contact`}
          className="btn btn-stroke hidden lg:inline-flex"
          style={{ padding: "8px 20px", fontSize: 12 }}
        >
          Get in Touch
        </a>

        {/* Hamburger button (mobile only) */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(o => !o)}
          style={{
            background: "transparent",
            border: "1px solid #2e2e2e",
            color: "#9CA3AF",
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <line x1="2" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
              <line x1="16" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <line x1="2" y1="4" x2="16" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
              <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
              <line x1="2" y1="14" x2="16" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden" style={{
          borderTop: "1px solid #2e2e2e",
          padding: "16px 24px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#9CA3AF",
                padding: "14px 0",
                borderBottom: "1px solid #2e2e2e",
                display: "block",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={isHome ? "#contact" : `${BASE}/#contact`}
            className="btn btn-stroke"
            style={{ marginTop: 16, fontSize: 12, textAlign: "center" }}
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
