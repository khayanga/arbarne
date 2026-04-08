"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function GetStarted() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwuPXQsh0qFN9BwCdpNbraAhuPqUsdo_kU4eaHnLd8pCAwubaxJsIO5aEuReo3UKJI/exec",
        {
          method: "POST",
          body: JSON.stringify(form),
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        },
      );

      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section id="shambany" className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1800&auto=format&fit=crop&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-teal-950/85" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(2,44,36,0.7) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-green-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-400">
              Our Customer Promise
            </span>
            <div className="w-8 h-px bg-green-500" />
          </div>

          <p
            className="text-white font-bold leading-relaxed"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
            }}
          >
            At Shambani, we empower farm managers and farm owners with{" "}
            <span className="text-green-400 ">smart technology</span> and
            professional services to make every farm operation{" "}
            <span className="block pb-2 bg-linear-to-br from-teal-900 via-emerald-500 to-green-400 bg-clip-text text-transparent tracking-tight">
              efficient, predictable, and profitable.
            </span>
          </p>
        </div>
      </section>

      <section id="contact" className="bg-gray-50 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-green-500" />
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                  Get Started
                </span>
              </div>

              <h2
                className="font-bold text-teal-900 leading-tight mb-6"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Ready to transform
                <br />
                <span className="text-green-600 ">your farm?</span>
              </h2>

              <p className="text-teal-900/65 text-lg leading-relaxed mb-10">
                Submit an inquiry and our team will get back to you within 24
                hours to discuss how Shambani can work for your specific farm.
              </p>

              <div className="space-y-4">
                {[
                  "No commitment required",
                  "Free consultation with our farm tech team",
                  "Live demo tailored to your farm type",
                  "Setup takes less than 5 minutes",
                ].map((p) => (
                  <div
                    key={p}
                    className="flex items-center gap-3.5 py-3 border-b border-gray-100"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Check
                        size={12}
                        className="text-green-600"
                        strokeWidth={2.5}
                      />
                    </div>
                    <span className="text-teal-900/70 text-md">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="relative">
              {/* Decorative corner accent */}
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-3xl bg-green-100/50 pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-2xl bg-teal-100/40 pointer-events-none" />

              <div className="relative bg-white border border-gray-100 rounded-[1rem] p-10 shadow-2xl shadow-teal-900/8">
                {sent ? (
                  <div className="text-center py-14">
                    <div className="w-16 h-16 rounded-[1rem] bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <Check
                        size={28}
                        className="text-green-600"
                        strokeWidth={2}
                      />
                    </div>
                    <h3
                      className="text-2xl font-bold text-teal-900 mb-2"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      Inquiry received!
                    </h3>
                    <p className="text-teal-900/50 text-md">
                      We'll be in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3
                        className="text-xl font-bold text-teal-900 mb-1"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        Submit an Inquiry
                      </h3>
                      <p className="text-teal-900/45 text-md">
                        We respond within 24 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-teal-900/45 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Jane Wanjiru"
                          className="w-full px-4 py-3.5 text-sm border border-gray-200 rounded-[0.5rem] text-teal-900 placeholder-teal-900/25 bg-gray-50 focus:bg-white focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/12 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-teal-900/45 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="jane@yourfarm.co.ke"
                          className="w-full px-4 py-3.5 text-sm border border-gray-200 rounded-[0.5rem] text-teal-900 placeholder-teal-900/25 bg-gray-50 focus:bg-white focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/12 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-teal-900/45 mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          placeholder="Tell us about your farm and what you're looking to achieve..."
                          className="w-full px-4 py-3.5 text-sm border border-gray-200 rounded-[0.5rem] text-teal-900 placeholder-teal-900/25 bg-gray-50 focus:bg-white focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/12 transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="group w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-teal-900 hover:bg-teal-800 disabled:bg-teal-700/50 disabled:cursor-not-allowed text-white font-bold rounded-[0.5rem] transition-colors duration-200 mt-2"
                      >
                        {loading ? (
                          <>
                            <svg
                              className="w-5 h-5 animate-spin"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8H4z"
                              />
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Inquiry
                            <ArrowRight
                              size={17}
                              className="group-hover:translate-x-1 transition-transform duration-200"
                            />
                          </>
                        )}
                      </button>

                      <p className="text-center text-sm text-teal-900/25 pt-1">
                        No spam. Unsubscribe anytime.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
