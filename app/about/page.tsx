"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ShieldCheck, Users, Zap, Star, Award, Cloud, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ── CountUp ────────────────────────────────────────────────────
function CountUp({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 2200;
    const t0 = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(parseFloat((eased * to).toFixed(decimals)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to, decimals]);

  return <span ref={ref}>{val.toFixed(decimals)}{suffix}</span>;
}

// ── Team Visual Panel ──────────────────────────────────────────
function TeamVisual() {
  const badges = [
    { pos: "top-5 left-5", init: { x: -12, y: -12 }, delay: 0.35, green: false, label: "Personnel", value: "Security Cleared" },
    { pos: "top-5 right-5", init: { x: 12, y: -12 }, delay: 0.45, green: true, label: "SLA Uptime", value: "99.9% Guaranteed" },
    { pos: "bottom-5 left-5", init: { x: -12, y: 12 }, delay: 0.55, green: false, label: "In Business", value: "14+ Years" },
    { pos: "bottom-5 right-5", init: { x: 12, y: 12 }, delay: 0.65, green: false, label: "Professionals", value: "200+ Experts" },
  ];

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800"
      style={{ aspectRatio: "4/3" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)", backgroundSize: "22px 22px" }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-44 h-44 bg-green-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-zinc-600/10 rounded-full blur-2xl pointer-events-none" />

      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-green-500/6 to-transparent pointer-events-none z-10"
        animate={{ y: ["-20%", "130%"] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "linear", repeatDelay: 2.5 }}
      />

      {/* Center icon */}
      <div className="absolute inset-0 flex items-center justify-center flex-col gap-2 z-20">
        <div className="relative flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.7, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
            className="absolute w-16 h-16 rounded-2xl border border-green-500/25"
          />
          <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
            <ShieldCheck size={28} className="text-green-400" strokeWidth={1.5} />
          </div>
        </div>
        <p className="text-white font-bold text-sm mt-1">Aegis Interlink</p>
        <p className="text-zinc-500 text-xs">Full-Spectrum Enterprise IT</p>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-zinc-500 text-[10px] font-mono">All Systems Operational</span>
        </div>
      </div>

      {/* Floating badges */}
      {badges.map((b) => (
        <motion.div
          key={b.pos}
          initial={{ opacity: 0, ...b.init }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: b.delay, duration: 0.5, ease: "easeOut" }}
          className={`absolute ${b.pos} backdrop-blur rounded-xl px-3 py-2.5 z-30 shadow-xl ${
            b.green
              ? "bg-green-950/90 border border-green-800/60"
              : "bg-zinc-800/95 border border-zinc-700/80"
          }`}
        >
          <p className={`text-[10px] uppercase tracking-widest font-semibold ${b.green ? "text-green-600" : "text-zinc-500"}`}>
            {b.label}
          </p>
          <p className={`text-xs font-bold mt-0.5 ${b.green ? "text-green-400" : "text-white"}`}>
            {b.value}
          </p>
        </motion.div>
      ))}

      {/* Decorative corner lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07] z-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="42%" y2="50%" stroke="#22c55e" strokeWidth="0.6" strokeDasharray="5 5" />
        <line x1="100%" y1="0" x2="58%" y2="50%" stroke="#22c55e" strokeWidth="0.6" strokeDasharray="5 5" />
        <line x1="0" y1="100%" x2="42%" y2="50%" stroke="#22c55e" strokeWidth="0.6" strokeDasharray="5 5" />
        <line x1="100%" y1="100%" x2="58%" y2="50%" stroke="#22c55e" strokeWidth="0.6" strokeDasharray="5 5" />
      </svg>
    </div>
  );
}

// ── Data ───────────────────────────────────────────────────────
const CERTS = [
  { icon: ShieldCheck, label: "ISO 27001" },
  { icon: Award, label: "SOC 2 Type II" },
  { icon: Shield, label: "CMMC Level 2" },
  { icon: Cloud, label: "AWS Premier Partner" },
];

const STATS: { to: number; suffix: string; decimals: number; label: string }[] = [
  { to: 14, suffix: "+", decimals: 0, label: "Years in Business" },
  { to: 200, suffix: "+", decimals: 0, label: "Team Members" },
  { to: 500, suffix: "+", decimals: 0, label: "Clients Served" },
  { to: 99.9, suffix: "%", decimals: 1, label: "SLA Uptime Record" },
];

const VALUES = [
  {
    icon: Star,
    title: "Excellence Without Compromise",
    description:
      "We hold every engagement to the same standard regardless of client size. Flawless delivery, on schedule, exceeding every specification — that's not a goal for us, it's a baseline.",
  },
  {
    icon: ShieldCheck,
    title: "Security at the Core",
    description:
      "Security is not a checkbox or a feature we bolt on. Every solution we design is architected with protection as a foundational principle from the very first line of configuration.",
  },
  {
    icon: Users,
    title: "Mission-Aligned Partnership",
    description:
      "We don't work for clients — we work with them. Our teams embed deeply in your organization to understand your mission and deliver outcomes, not just deliverables.",
  },
  {
    icon: Zap,
    title: "Relentless Innovation",
    description:
      "Technology never stands still, and neither do we. Our team invests continuously in emerging capabilities — from AI and automation to quantum-safe cryptography — so our clients stay ahead.",
  },
];

const TIMELINE = [
  { year: "2012", event: "Founded in Washington D.C. with a focus on federal IT infrastructure." },
  { year: "2015", event: "Achieved FedRAMP authorization and expanded into state & local government." },
  { year: "2018", event: "Launched managed security services and 24/7 SOC operations." },
  { year: "2020", event: "Attained CMMC Level 2 certification and entered the Defense Industrial Base." },
  { year: "2023", event: "Surpassed 500 clients served across government, defense, and enterprise." },
  { year: "2025", event: "Expanded cloud and AI capabilities with new practices in data analytics and ML." },
];

const TESTIMONIALS = [
  {
    quote:
      "Aegis Interlink transformed our agency's entire IT infrastructure in under 90 days. Their team's knowledge of federal compliance requirements is unmatched — they made FISMA readiness straightforward for the first time.",
    name: "Director of Information Technology",
    org: "U.S. Federal Agency",
    initials: "DI",
  },
  {
    quote:
      "We needed a partner who understood both the technical complexity and the operational urgency of our environment. Aegis delivered a zero-trust architecture that met every CMMC requirement without disrupting our operations.",
    name: "Chief Information Officer",
    org: "Defense Industrial Base Contractor",
    initials: "CI",
  },
  {
    quote:
      "The managed services team at Aegis has been exceptional. Their NOC caught and resolved three potential incidents before our internal team even knew about them. The 99.9% uptime SLA is not marketing — it's real.",
    name: "VP of Technology Operations",
    org: "Regional Municipality",
    initials: "VT",
  },
  {
    quote:
      "Aegis built our entire data analytics platform from scratch — pipelines, dashboards, and predictive models. Six months in, decisions that used to take weeks of manual reporting now happen in real-time.",
    name: "Head of Data Strategy",
    org: "Healthcare Enterprise",
    initials: "HD",
  },
];

// ── Testimonials Carousel ──────────────────────────────────────
function TestimonialsCarousel() {
  const n = TESTIMONIALS.length;
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setIdx(i => (i + 1) % n);
    }, 5500);
    return () => clearInterval(t);
  }, [n]);

  const paginate = (d: 1 | -1) => {
    setDir(d);
    setIdx(i => (i + d + n) % n);
  };

  const goTo = (i: number) => {
    setDir(i > idx ? 1 : -1);
    setIdx(i);
  };

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 50 : -50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -50 : 50, opacity: 0 }),
  };

  const current = TESTIMONIALS[idx];

  return (
    <section className="py-20 px-6 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-black text-white">What Our Clients Say</h2>
        </motion.div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative quote mark */}
          <div className="absolute top-6 left-8 text-7xl font-black text-green-900/40 leading-none select-none pointer-events-none">
            "
          </div>

          {/* Slide area */}
          <div className="min-h-[180px] flex flex-col justify-center">
            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={idx}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease: "easeInOut" as const }}
              >
                <blockquote className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8 relative z-10">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-950 border border-green-800 flex items-center justify-center text-green-400 font-black text-sm flex-shrink-0">
                    {current.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{current.name}</p>
                    <p className="text-zinc-500 text-xs mt-0.5">{current.org}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-zinc-800">
            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === idx ? "w-6 h-2 bg-green-500" : "w-2 h-2 bg-zinc-700 hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => paginate(-1)}
                className="w-9 h-9 rounded-full border border-zinc-700 hover:border-green-700 hover:text-white text-zinc-400 flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => paginate(1)}
                className="w-9 h-9 rounded-full border border-zinc-700 hover:border-green-700 hover:text-white text-zinc-400 flex items-center justify-center transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Page ───────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-900/15 blur-3xl rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)", backgroundSize: "30px 30px" }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center text-green-400 text-xs font-bold tracking-[0.2em] uppercase mb-5 border border-green-800 bg-green-950/60 px-5 py-2 rounded-full"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-black text-white leading-tight mb-5"
          >
            The People Powering<br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              Your Technology
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            We are a team of 200+ highly specialized engineers, consultants, and strategists united by a
            single mission — delivering technology that works, scales, and protects the organizations that
            depend on it most.
          </motion.p>

          {/* Cert badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {CERTS.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.09 }}
                  className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-full px-4 py-2 hover:border-green-700/70 transition-colors"
                >
                  <Icon size={13} className="text-green-400" strokeWidth={1.5} />
                  <span className="text-zinc-300 text-xs font-semibold">{c.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-2">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              Built on Expertise.<br />Driven by Results.
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Founded to close the gap between enterprise-grade technology and the organizations that need
              it most, Aegis Interlink has grown from a boutique IT consultancy into a full-spectrum managed
              services provider trusted by federal agencies, municipalities, and leading enterprises across
              the country.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Our teams don't just deliver projects — we embed with your organization, learn your mission,
              and engineer technology solutions that scale with you for the long haul. When you work with
              Aegis Interlink, you're not getting a vendor. You're getting a partner who is as invested in
              your outcomes as you are.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
            >
              Work With Our Team
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" as const }}
          >
            <TeamVisual />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-green-400 mb-2">
                <CountUp to={s.to} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <div className="text-zinc-500 text-xs uppercase tracking-wider font-semibold">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Core Principles That Guide<br />Everything We Build
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-zinc-950 border border-zinc-800 rounded-2xl p-7 hover:border-green-800/70 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-green-800/60 flex items-center justify-center mb-5 transition-colors">
                    <Icon size={20} className="text-green-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-3">Our History</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">A Decade of Excellence</h2>
          </motion.div>
          <div className="relative border-l border-zinc-800 pl-8 space-y-10">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <div className="absolute -left-[2.55rem] w-4 h-4 rounded-full bg-green-600 border-2 border-zinc-950" />
                <span className="text-green-400 text-xs font-bold uppercase tracking-widest">{t.year}</span>
                <p className="text-zinc-300 text-sm mt-1 leading-relaxed">{t.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      <Footer />
    </div>
  );
}
