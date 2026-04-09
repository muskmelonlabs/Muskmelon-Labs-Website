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
    <section
      id="contact"
      style={{
        background: "#080C10",
        padding: "100px 80px",
        borderBottom: "1px solid #1F2937",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "flex-start" }}>
        <FadeIn>
          <div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#FF6A00",
                borderLeft: "2px solid #FF6A00",
                paddingLeft: 12,
                marginBottom: 12,
              }}
            >
              Contact
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 900,
                color: "#E5E7EB",
                letterSpacing: "-0.03em",
                margin: 0,
                marginBottom: 24,
                lineHeight: 1.1,
              }}
            >
              Let's Build Something
              <br />
              <span style={{ color: "#FF6A00" }}>Interesting.</span>
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#9CA3AF",
                lineHeight: 1.8,
                margin: 0,
                maxWidth: 360,
              }}
            >
              We're selective about what we take on.
              If you've got an unconventional problem,
              we want to hear about it.
            </p>

            {/* Contact info rows */}
            <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 1, background: "#1F2937" }}>
              {[
                { label: "Email",    val: "hello@muskmelonlabs.com" },
                { label: "Focus",    val: "Open systems, AI, infrastructure" },
                { label: "Response", val: "< 48 hours" },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{
                    background: "#0B0F14",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 20px",
                  }}
                >
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#374151", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    {row.label}
                  </span>
                  <span style={{ fontSize: 12, color: "#9CA3AF" }}>{row.val}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          {sent ? (
            <div
              style={{
                background: "#111827",
                border: "1px solid rgba(255,106,0,0.3)",
                padding: "60px 40px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>✓</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#E5E7EB", marginBottom: 8 }}>
                Message received.
              </div>
              <div style={{ fontSize: 13, color: "#9CA3AF" }}>
                We'll be in touch within 48 hours.
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 1, background: "#1F2937" }}
            >
              {[
                { key: "name",  label: "Name",    type: "text",  ph: "Your name" },
                { key: "email", label: "Email",   type: "email", ph: "your@email.com" },
              ].map((field) => (
                <div key={field.key} style={{ background: "#111827", padding: "20px 24px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#4B5563",
                      marginBottom: 10,
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    placeholder={field.ph}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      fontSize: 14,
                      color: "#E5E7EB",
                      fontFamily: "inherit",
                      padding: 0,
                    }}
                  />
                </div>
              ))}

              <div style={{ background: "#111827", padding: "20px 24px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#4B5563",
                    marginBottom: 10,
                  }}
                >
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your problem..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    resize: "none",
                    fontSize: 14,
                    color: "#E5E7EB",
                    fontFamily: "inherit",
                    padding: 0,
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  padding: "18px 24px",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  border: "none",
                  fontFamily: "inherit",
                  textAlign: "left" as const,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Start a Conversation</span>
                <span style={{ opacity: 0.7 }}>→</span>
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
