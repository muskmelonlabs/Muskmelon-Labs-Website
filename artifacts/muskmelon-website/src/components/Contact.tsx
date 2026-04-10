import { useState } from "react";
import { FadeIn } from "./FadeIn";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" style={{
      background: "#161616",
      padding: "96px 0",
      borderTop: "1px solid #2e2e2e",
    }}>
      <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeIn>
          <div className="section-label">Contact</div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "48px 80px", alignItems: "flex-start" }}>
          <FadeIn delay={40}>
            <div>
              <h2 style={{
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 900,
                color: "#F9FAFB",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: 20,
                fontFamily: "'Inter', sans-serif",
              }}>
                Let's Build Something
                <br />
                <span style={{ color: "#FF6A00" }}>Interesting.</span>
              </h2>
              <p style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.8, maxWidth: 360, marginBottom: 48 }}>
                We're selective about what we take on.
                If you have an unconventional problem,
                we want to hear about it.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#2e2e2e" }}>
                {[
                  { label: "Email",    val: "hello@muskmelonlabs.com" },
                  { label: "Response", val: "< 48 hours" },
                  { label: "Focus",    val: "Open systems · AI · Infrastructure" },
                ].map(row => (
                  <div key={row.label} style={{
                    background: "#1e1e1e",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 20px",
                    gap: 12,
                  }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: "#555555", letterSpacing: "0.12em", textTransform: "uppercase", flexShrink: 0 }}>
                      {row.label}
                    </span>
                    <span style={{ fontSize: 12, color: "#9CA3AF", textAlign: "right" }}>{row.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            {sent ? (
              <div style={{
                background: "#252525",
                border: "1px solid rgba(255,106,0,0.3)",
                clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                padding: "64px 40px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 14,
              }}>
                <div style={{
                  width: 48,
                  height: 48,
                  border: "2px solid #FF6A00",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  color: "#FF6A00",
                }}>✓</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#F9FAFB" }}>Message received.</div>
                <div style={{ fontSize: 13, color: "#9CA3AF" }}>We'll be in touch within 48 hours.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 1, background: "#2e2e2e" }}>
                {[
                  { key: "name",  label: "Name",  type: "text",  ph: "Your name" },
                  { key: "email", label: "Email", type: "email", ph: "your@email.com" },
                ].map(field => (
                  <div key={field.key} style={{ background: "#252525", padding: "18px 20px" }}>
                    <label style={{
                      display: "block",
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#555555",
                      marginBottom: 8,
                    }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      placeholder={field.ph}
                      value={form[field.key as keyof typeof form]}
                      onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        fontSize: 14,
                        color: "#E5E7EB",
                      }}
                    />
                  </div>
                ))}

                <div style={{ background: "#252525", padding: "18px 20px" }}>
                  <label style={{
                    display: "block",
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#555555",
                    marginBottom: 8,
                  }}>
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your problem..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      resize: "none",
                      fontSize: 14,
                      color: "#E5E7EB",
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-fill" style={{
                  padding: "18px 24px",
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textAlign: "left",
                  display: "flex",
                  justifyContent: "space-between",
                  border: "none",
                }}>
                  <span>Start a Conversation</span>
                  <span>→</span>
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
