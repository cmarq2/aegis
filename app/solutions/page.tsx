"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, type ReactElement } from "react";
import { Compass, Cloud, ShieldCheck, Settings, BarChart3, Code2, type LucideIcon } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ── 01 IT Consulting ───────────────────────────────────────────
function ConsultingWidget() {
  const steps = ["Strategy", "Assess", "Design", "Execute", "Team"];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % steps.length), 1400);
    return () => clearInterval(t);
  }, [steps.length]);
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-2 w-full">
      {steps.map((s, i) => (
        <motion.div
          key={s}
          animate={{
            backgroundColor: i === active ? "#16a34a" : "#27272a",
            color: i === active ? "#ffffff" : i < active ? "#71717a" : "#a1a1aa",
          }}
          transition={{ duration: 0.35 }}
          className="px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-3"
        >
          <span className="w-5 h-5 rounded-full border border-current/40 flex items-center justify-center text-xs flex-shrink-0">
            {i < active ? "✓" : i + 1}
          </span>
          <span className={i < active ? "line-through opacity-40" : ""}>{s}</span>
          {i === active && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.9 }}
              className="ml-auto w-1.5 h-1.5 rounded-full bg-white"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

// ── 02 Cloud Solutions ─────────────────────────────────────────
function CloudWidget() {
  const providers = [
    { name: "AWS", cls: "text-orange-400 border-orange-800/60 bg-orange-950/30" },
    { name: "Azure", cls: "text-blue-400 border-blue-800/60 bg-blue-950/30" },
    { name: "GCP", cls: "text-yellow-400 border-yellow-800/60 bg-yellow-950/30" },
  ];
  const metrics = [
    { value: "99.9%", label: "Uptime" },
    { value: "40%", label: "Cost Saved" },
    { value: "3×", label: "Faster Deploy" },
  ];
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 w-full space-y-4">
      <div className="flex gap-2 flex-wrap">
        {providers.map((p, i) => (
          <motion.span
            key={p.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${p.cls}`}
          >
            {p.name}
          </motion.span>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.12 }}
            className="bg-zinc-800 rounded-xl p-3 text-center"
          >
            <div className="text-green-400 font-black text-lg leading-none">{m.value}</div>
            <div className="text-zinc-500 text-xs mt-1">{m.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── 03 Cybersecurity ───────────────────────────────────────────
const THREATS = [
  { label: "Threat Blocked", cls: "text-green-400 border-green-800/60 bg-green-950/30" },
  { label: "Attack Neutralized", cls: "text-blue-400 border-blue-800/60 bg-blue-950/30" },
  { label: "Anomaly Resolved", cls: "text-yellow-400 border-yellow-800/60 bg-yellow-950/30" },
];

function SecurityWidget() {
  const [feed, setFeed] = useState<{ id: number; t: number }[]>([]);
  const n = useRef(0);
  useEffect(() => {
    const iv = setInterval(() => {
      const id = n.current++;
      setFeed(f => [{ id, t: id % THREATS.length }, ...f].slice(0, 4));
    }, 1800);
    return () => clearInterval(iv);
  }, []);
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 w-full min-h-[170px]">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs text-zinc-400 font-mono">SOC Live Feed</span>
      </div>
      <div className="space-y-2">
        <AnimatePresence initial={false}>
          {feed.map(({ id, t: ti }, i) => {
            const threat = THREATS[ti];
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: -8, height: 0 }}
                animate={{ opacity: Math.max(0.2, 1 - i * 0.22), y: 0, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35 }}
                className={`px-3 py-2 rounded-lg text-xs font-semibold border flex items-center gap-2 overflow-hidden ${threat.cls}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                {threat.label}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ── 04 Managed Services ────────────────────────────────────────
const SYS_METRICS = [
  { label: "CPU", value: 34 },
  { label: "Memory", value: 61 },
  { label: "Network", value: 22 },
  { label: "Disk I/O", value: 48 },
];

function ManagedWidget() {
  const [time, setTime] = useState("--:--:--");
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 w-full space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs text-zinc-400 font-mono">System Health — Live</span>
        <span className="text-xs text-green-400 font-mono tabular-nums">{time}</span>
      </div>
      {SYS_METRICS.map((m, i) => (
        <div key={m.label}>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-zinc-400">{m.label}</span>
            <span className="text-white font-semibold">{m.value}%</span>
          </div>
          <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-green-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${m.value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: "easeOut" as const }}
            />
          </div>
        </div>
      ))}
      <div className="flex justify-between items-center pt-1">
        <span className="text-xs text-green-400 font-semibold">99.9% Uptime</span>
        <span className="text-xs text-zinc-500">0 Open Incidents</span>
      </div>
      <div className="bg-green-950/30 border border-green-900/60 rounded-lg py-1.5 text-center text-xs font-bold text-green-400">
        All Systems Go
      </div>
    </div>
  );
}

// ── 05 Data Analytics ──────────────────────────────────────────
const BARS = [
  { label: "Q1", h: 32 },
  { label: "Q2", h: 46 },
  { label: "Q3", h: 40 },
  { label: "Q4", h: 58 },
  { label: "Q5", h: 72 },
];

function AnalyticsWidget() {
  const metrics = [
    { value: "+127%", label: "Insight Speed" },
    { value: "3.4×", label: "ROI Gain" },
    { value: "98%", label: "Accuracy" },
  ];
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 w-full">
      <div className="flex items-end gap-1.5 h-[76px] mb-2">
        {BARS.map((b, i) => (
          <div key={b.label} className="flex-1 flex flex-col items-center justify-end h-full">
            <motion.div
              className="w-full rounded-sm"
              style={{ background: `rgba(34,197,94,${0.4 + (b.h / 72) * 0.6})` }}
              initial={{ height: 0 }}
              whileInView={{ height: b.h }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" as const }}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-1.5 mb-4">
        {BARS.map(b => (
          <div key={b.label} className="flex-1 text-center">
            <span className="text-zinc-500 text-xs">{b.label}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {metrics.map(m => (
          <div key={m.label} className="bg-zinc-800 rounded-xl p-2.5 text-center">
            <div className="text-green-400 font-black text-sm">{m.value}</div>
            <div className="text-zinc-500 text-[10px] mt-0.5 leading-tight">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 06 Software Development ────────────────────────────────────
const CODE_LINES = [
  "import { Aegis } from '@aegis/core'",
  "",
  "const app = new Aegis({",
  "  security: 'enterprise',",
  "  uptime: 99.9,",
  "  scale: 'unlimited',",
  "})",
  "",
  "app.deploy('production')",
];

function DevWidget() {
  const [phase, setPhase] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(0);
    const iv = setInterval(() => {
      setCount(c => {
        if (c >= CODE_LINES.length + 2) {
          clearInterval(iv);
          setTimeout(() => setPhase(p => p + 1), 1200);
          return c;
        }
        return c + 1;
      });
    }, 270);
    return () => clearInterval(iv);
  }, [phase]);
  return (
    <div className="bg-zinc-950 border border-zinc-700 rounded-2xl overflow-hidden w-full">
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-zinc-900 border-b border-zinc-800">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="text-zinc-500 text-xs ml-2 font-mono">aegis.deploy.ts</span>
      </div>
      <div className="p-4 font-mono text-xs min-h-[200px]">
        {CODE_LINES.map((line, i) => (
          <motion.div
            key={`${phase}-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: i < count ? 1 : 0 }}
            transition={{ duration: 0.1 }}
            className="text-zinc-300 leading-5"
          >
            {line || " "}
          </motion.div>
        ))}
        {count > CODE_LINES.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 pt-2 border-t border-zinc-800 space-y-0.5"
          >
            <div className="text-green-400">✓ Build successful — 847ms</div>
            <div className="text-green-400">✓ Deployed to 3 regions</div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// ── Services data ──────────────────────────────────────────────
type Service = {
  num: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  cta: string;
  Widget: () => ReactElement;
};

const SERVICES: Service[] = [
  {
    num: "01",
    icon: Compass,
    title: "IT Consulting",
    tagline: "Strategic Technology\nThat Drives Results",
    description:
      "We align your technology investments with business outcomes. From enterprise architecture to digital transformation roadmaps, our consultants embed with your team to deliver lasting strategic value.",
    features: [
      "Technology Assessment & Gap Analysis",
      "IT Strategy & Roadmap Development",
      "Digital Transformation Planning",
      "Enterprise Architecture Design",
      "Vendor Selection & Procurement",
    ],
    cta: "Start a Consultation",
    Widget: ConsultingWidget,
  },
  {
    num: "02",
    icon: Cloud,
    title: "Cloud Solutions",
    tagline: "Scale Without Limits\nIn the Cloud",
    description:
      "From lift-and-shift migrations to cloud-native architecture, we design, deploy, and manage multi-cloud environments on AWS, Azure, and GCP — built for performance, security, and cost control.",
    features: [
      "Cloud Migration & Modernization",
      "Multi-Cloud Architecture Design",
      "Cost Optimization & FinOps",
      "Kubernetes & Container Orchestration",
      "Disaster Recovery & Business Continuity",
    ],
    cta: "Explore Cloud Services",
    Widget: CloudWidget,
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Cyber Security",
    tagline: "Defend Every\nAttack Surface",
    description:
      "Our 24/7 SOC detects, responds to, and neutralizes threats before they become breaches. From zero-trust architecture to compliance automation — we protect everything you've built.",
    features: [
      "24/7 Security Operations Center (SOC)",
      "Zero-Trust Architecture Implementation",
      "Penetration Testing & Red Team Ops",
      "Incident Response & Digital Forensics",
      "SIEM / SOAR Integration & Tuning",
    ],
    cta: "Secure Your Organization",
    Widget: SecurityWidget,
  },
  {
    num: "04",
    icon: Settings,
    title: "Managed Services",
    tagline: "Always On.\nAlways Watching.",
    description:
      "Our NOC operates 24/7/365, proactively monitoring and managing your entire IT environment so issues are resolved before your users feel them. Full ownership. Full accountability.",
    features: [
      "24/7 NOC Monitoring & Management",
      "Patch Management & Lifecycle",
      "Helpdesk & End-User Support",
      "Network & Infrastructure Management",
      "SLA-Backed Uptime Guarantees",
    ],
    cta: "Get Managed Services",
    Widget: ManagedWidget,
  },
  {
    num: "05",
    icon: BarChart3,
    title: "Data Analytics",
    tagline: "From Raw Data\nTo Real Decisions",
    description:
      "We build the pipelines, models, and dashboards that transform your data into a strategic asset. Our analytics practice spans BI, AI/ML, real-time streaming, and predictive intelligence.",
    features: [
      "Business Intelligence & Dashboarding",
      "AI / Machine Learning Engineering",
      "Real-Time Data Pipelines",
      "Data Warehouse & Lake Architecture",
      "Predictive Analytics & Forecasting",
    ],
    cta: "Unlock Your Data",
    Widget: AnalyticsWidget,
  },
  {
    num: "06",
    icon: Code2,
    title: "Software Development",
    tagline: "Built Precisely\nFor Your Mission",
    description:
      "We engineer custom software that solves real operational problems. From internal tools to large-scale enterprise platforms, our teams ship production-ready code fast — without cutting corners.",
    features: [
      "Custom Web & Mobile Applications",
      "API Design & Integration Engineering",
      "Enterprise Platform Development",
      "DevSecOps & CI/CD Pipeline Setup",
      "Legacy System Modernization",
    ],
    cta: "Start Building",
    Widget: DevWidget,
  },
];

// ── Page ───────────────────────────────────────────────────────
export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-green-900/15 blur-3xl rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center text-green-400 text-xs font-bold tracking-[0.2em] uppercase mb-5 border border-green-800 bg-green-950/60 px-5 py-2 rounded-full"
          >
            Our Solutions
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-black text-white leading-tight mb-5"
          >
            Expert Technology<br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-zinc-400 text-lg"
          >
            We partner with businesses and government to deliver technology that makes a measurable, lasting difference.
          </motion.p>
        </div>
      </section>

      {/* Service sections */}
      {SERVICES.map((s, i) => {
        const Icon = s.icon;
        const flip = i % 2 !== 0;
        const WidgetComp = s.Widget;
        return (
          <section
            key={s.num}
            className={`py-20 px-6 border-t border-zinc-800/60 ${i % 2 === 0 ? "bg-zinc-950" : "bg-zinc-900"}`}
          >
            <div className="max-w-6xl mx-auto">
              <div className={`flex flex-col ${flip ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center`}>

                {/* Text side */}
                <motion.div
                  initial={{ opacity: 0, x: flip ? 24 : -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" as const }}
                  className="flex-1 min-w-0"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-5xl font-black text-zinc-800 tabular-nums select-none">{s.num}</span>
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                      <Icon size={18} className="text-green-400" strokeWidth={1.5} />
                    </div>
                    <span className="text-zinc-500 text-sm font-semibold">{s.title}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4 whitespace-pre-line">
                    {s.tagline}
                  </h2>
                  <p className="text-zinc-400 leading-relaxed mb-6">{s.description}</p>
                  <ul className="space-y-2.5 mb-8">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-zinc-300 text-sm">
                        <span className="w-4 h-4 rounded-full bg-green-950 border border-green-700/70 flex items-center justify-center flex-shrink-0">
                          <span className="text-green-400 text-[9px] font-black">✓</span>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
                  >
                    {s.cta}
                  </Link>
                </motion.div>

                {/* Widget side */}
                <motion.div
                  initial={{ opacity: 0, x: flip ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" as const }}
                  className="w-full lg:w-[340px] flex-shrink-0"
                >
                  <WidgetComp />
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-20 px-6 bg-zinc-900 text-center border-t border-zinc-800">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-black text-white mb-4">Ready to get started?</h2>
            <p className="text-zinc-400 mb-8">Tell us about your project and we'll match you with the right solution.</p>
            <Link href="/contact" className="inline-block bg-green-600 hover:bg-green-500 text-white font-semibold px-10 py-3 rounded-lg transition-colors">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
