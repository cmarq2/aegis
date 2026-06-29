"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ShieldCheck, Eye, EyeOff, Lock, Mail, ArrowRight, AlertCircle } from "lucide-react";
import Link from "next/link";

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Drifting aurora orbs */}
      <motion.div
        animate={{ x: [0, 70, -40, 0], y: [0, -50, 35, 0], scale: [1, 1.25, 0.9, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-48 left-[5%] w-[700px] h-[700px] rounded-full bg-green-700/12 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -60, 30, 0], y: [0, 50, -30, 0], scale: [1, 0.85, 1.15, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute -bottom-32 right-[0%] w-[600px] h-[600px] rounded-full bg-emerald-600/8 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 90, -25, 0], y: [0, -70, 20, 0], scale: [1, 1.3, 0.8, 1] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut", delay: 9 }}
        className="absolute top-[30%] left-[55%] w-[500px] h-[500px] rounded-full bg-teal-600/6 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -80, 50, 0], y: [0, 60, -45, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[10%] right-[15%] w-[350px] h-[350px] rounded-full bg-green-500/5 blur-3xl"
      />

      {/* Animated grid overlay */}
      <motion.div
        animate={{ opacity: [0.018, 0.032, 0.018] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74,222,128,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.35) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Dot accent layer on top of grid */}
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          backgroundPosition: "24px 24px",
        }}
      />

      {/* Horizontal sweep line */}
      <motion.div
        animate={{ y: ["-2%", "102%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
        className="absolute left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(74,222,128,0.18) 30%, rgba(74,222,128,0.35) 50%, rgba(74,222,128,0.18) 70%, transparent 100%)" }}
      />

      {/* Vertical sweep line */}
      <motion.div
        animate={{ x: ["-2%", "102%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear", repeatDelay: 8, delay: 3 }}
        className="absolute top-0 bottom-0 w-px"
        style={{ background: "linear-gradient(180deg, transparent 0%, rgba(74,222,128,0.12) 30%, rgba(74,222,128,0.25) 50%, rgba(74,222,128,0.12) 70%, transparent 100%)" }}
      />

      {/* Pulsing corner accent — top left */}
      <motion.div
        animate={{ opacity: [0.4, 0.9, 0.4], scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-64 h-64"
        style={{
          background: "radial-gradient(ellipse at top left, rgba(74,222,128,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Pulsing corner accent — bottom right */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.12, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-0 w-72 h-72"
        style={{
          background: "radial-gradient(ellipse at bottom right, rgba(16,185,129,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Floating nodes */}
      {[
        { x: "15%", y: "20%", d: 0 },
        { x: "80%", y: "15%", d: 1.5 },
        { x: "70%", y: "75%", d: 0.8 },
        { x: "25%", y: "80%", d: 2.2 },
        { x: "50%", y: "45%", d: 1.1 },
        { x: "90%", y: "50%", d: 3 },
        { x: "8%",  y: "55%", d: 0.4 },
      ].map((node, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.08, 0.3, 0.08], scale: [1, 1.6, 1] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: node.d }}
          className="absolute w-1 h-1 rounded-full bg-green-400"
          style={{ left: node.x, top: node.y }}
        />
      ))}
    </div>
  );
}

export default function PortalPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setError("Invalid credentials. Please check your username and password.");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col overflow-x-hidden">
      <AnimatedBackground />

      {/* Minimal header */}
      <header className="relative z-10 flex items-center justify-between px-6 md:px-10 py-5 border-b border-zinc-800/50 backdrop-blur-sm">
        <Link href="/" className="flex items-baseline gap-2.5">
          <span className="text-white font-black text-xl tracking-wide uppercase">Aegis</span>
          <span className="w-px h-4 bg-green-600 self-center opacity-60" />
          <span className="text-green-400 font-bold text-xl tracking-[0.18em] uppercase">Interlink</span>
        </Link>
        <Link
          href="/"
          className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors flex items-center gap-1.5"
        >
          ← Back to site
        </Link>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left — Branding */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hidden lg:flex flex-col"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
                  className="absolute inset-0 rounded-2xl bg-green-500/20"
                />
                <div className="relative w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                  <ShieldCheck size={26} className="text-green-400" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <p className="text-white font-black text-lg">Customer Portal</p>
                <p className="text-zinc-500 text-sm">Aegis Interlink</p>
              </div>
            </div>

            <h1 className="text-4xl font-black text-white leading-tight mb-4">
              Secure Access to<br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Your Dashboard
              </span>
            </h1>
            <p className="text-zinc-400 leading-relaxed mb-10">
              Monitor your services, review reports, manage tickets, and stay connected with your dedicated support team — all in one place.
            </p>

            <div className="space-y-4">
              {[
                { icon: "📊", title: "Real-Time Dashboards", desc: "Live visibility into your infrastructure health and performance metrics." },
                { icon: "🎫", title: "Support Ticketing", desc: "Submit, track, and resolve issues directly with your account team." },
                { icon: "📄", title: "Reports & Invoices", desc: "Access monthly reports, SLA summaries, and billing documents." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-lg mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                    <p className="text-zinc-500 text-xs leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-2 text-zinc-600 text-xs">
              <Lock size={11} />
              <span>256-bit TLS encrypted · SOC 2 Type II certified infrastructure</span>
            </div>
          </motion.div>

          {/* Right — Login form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          >
            {/* Glow ring behind the card */}
            <div className="relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-green-700/40 via-transparent to-emerald-700/20 blur-sm" />
              <div className="relative bg-zinc-900/90 border border-zinc-700/60 rounded-2xl p-8 md:p-10 backdrop-blur-md shadow-2xl shadow-black/60">

                {/* Card header — mobile only */}
                <div className="flex items-center gap-3 mb-8 lg:hidden">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                    <ShieldCheck size={18} className="text-green-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base">Customer Portal</p>
                    <p className="text-zinc-500 text-xs">Sign in to your account</p>
                  </div>
                </div>
                <div className="hidden lg:block mb-8">
                  <h2 className="text-2xl font-black text-white">Sign In</h2>
                  <p className="text-zinc-500 text-sm mt-1">Enter your credentials to access your portal.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email */}
                  <div>
                    <label className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={e => { setForm({ ...form, email: e.target.value }); setError(""); }}
                        placeholder="you@company.com"
                        className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl pl-11 pr-4 py-3 text-white text-sm focus:outline-none focus:border-green-600 focus:bg-zinc-800 transition-colors placeholder-zinc-600"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                        Password
                      </label>
                      <button
                        type="button"
                        className="text-xs text-green-500 hover:text-green-400 transition-colors font-medium"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <Lock size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                      <input
                        required
                        type={showPassword ? "text" : "password"}
                        value={form.password}
                        onChange={e => { setForm({ ...form, password: e.target.value }); setError(""); }}
                        placeholder="••••••••••••"
                        className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl pl-11 pr-11 py-3 text-white text-sm focus:outline-none focus:border-green-600 focus:bg-zinc-800 transition-colors placeholder-zinc-600"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(v => !v)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
                      >
                        {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                      </button>
                    </div>
                  </div>

                  {/* Error */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2.5 bg-red-950/40 border border-red-800/50 rounded-xl px-4 py-3"
                    >
                      <AlertCircle size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-red-300 text-xs leading-relaxed">{error}</p>
                    </motion.div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-600 hover:bg-green-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-all duration-200 text-sm flex items-center justify-center gap-2 group shadow-lg shadow-green-900/30"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Signing in…
                      </>
                    ) : (
                      <>
                        Sign In
                        <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-3 my-7">
                  <div className="flex-1 h-px bg-zinc-800" />
                  <span className="text-zinc-600 text-xs font-medium">Need access?</span>
                  <div className="flex-1 h-px bg-zinc-800" />
                </div>

                <p className="text-zinc-500 text-xs text-center leading-relaxed">
                  Don't have a portal account yet?{" "}
                  <Link href="/contact" className="text-green-500 hover:text-green-400 transition-colors font-semibold">
                    Contact your account manager
                  </Link>{" "}
                  to get set up.
                </p>

                {/* Security footer */}
                <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center justify-center gap-5">
                  {["SOC 2", "TLS 256", "Zero Trust"].map((badge) => (
                    <div key={badge} className="flex items-center gap-1.5 text-zinc-600 text-xs">
                      <Lock size={10} />
                      <span className="font-semibold">{badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-5 px-6 text-center border-t border-zinc-800/50 backdrop-blur-sm">
        <p className="text-zinc-600 text-xs">
          © {new Date().getFullYear()} Aegis Interlink. All rights reserved. &nbsp;·&nbsp;{" "}
          <Link href="/contact" className="hover:text-zinc-400 transition-colors">Support</Link>
        </p>
      </footer>
    </div>
  );
}
