"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("send failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-900/15 blur-3xl rounded-full" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center text-green-400 text-xs font-bold tracking-[0.2em] uppercase mb-5 border border-green-800 bg-green-950/60 px-5 py-2 rounded-full">
            Get In Touch
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-5">
            Let's Build Something<br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Together</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-zinc-400 text-lg">
            Tell us about your project. We respond within one business day.
          </motion.p>
        </div>
      </section>

      {/* Form + info */}
      <section className="pb-28 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10">

          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="md:col-span-2 space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-5">Contact Information</h3>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "support@aegisinterlink.com" },
                  { icon: MapPin, label: "Headquarters", value: "Denver, CO" },
                  { icon: Clock, label: "Response Time", value: "Within 1 business day" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-green-400" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">{item.label}</p>
                        <p className="text-zinc-300 text-sm mt-0.5">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-green-950/40 border border-green-800/50 rounded-2xl p-6">
              <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-2">Government Inquiries</p>
              <p className="text-zinc-400 text-sm leading-relaxed">For federal, state, or defense contracts, contact our government relations team directly at <span className="text-white">gov@aegisinterlink.com</span></p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="md:col-span-3">
            {submitted ? (
              <div className="bg-zinc-900 border border-green-700 rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-green-900/50 border border-green-700 flex items-center justify-center mb-5">
                  <span className="text-green-400 text-2xl">✓</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Message Sent</h3>
                <p className="text-zinc-400">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">Full Name *</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-600 transition-colors placeholder-zinc-600" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">Email Address *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-600 transition-colors placeholder-zinc-600" placeholder="john@company.com" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">Company / Organization</label>
                  <input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-600 transition-colors placeholder-zinc-600" placeholder="Your organization" />
                </div>
                <div>
                  <label className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">Service of Interest</label>
                  <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-600 transition-colors">
                    <option value="">Select a service...</option>
                    <option>IT Consulting</option>
                    <option>Cloud Solutions</option>
                    <option>Cybersecurity</option>
                    <option>Managed Services</option>
                    <option>Data Analytics</option>
                    <option>Software Development</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">Message *</label>
                  <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-600 transition-colors placeholder-zinc-600 resize-none" placeholder="Tell us about your project or challenge..." />
                </div>
                {error && (
                  <p className="text-red-400 text-xs text-center">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 hover:bg-green-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending…
                    </>
                  ) : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
