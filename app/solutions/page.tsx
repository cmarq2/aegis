"use client";

import { motion } from "framer-motion";
import { Compass, Cloud, ShieldCheck, Settings, BarChart3, Code2, type LucideIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const services: { icon: LucideIcon; title: string; tagline: string; description: string; features: string[] }[] = [
  {
    icon: Compass,
    title: "IT Consulting",
    tagline: "Strategy that drives transformation",
    description: "We work alongside your leadership team to align technology with your business objectives. From infrastructure assessments to full digital transformation roadmaps, our consultants bring decades of real-world experience.",
    features: ["Technology roadmap development", "Infrastructure assessments", "Digital transformation planning", "Vendor selection & procurement", "IT governance frameworks"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    tagline: "Scale without limits",
    description: "Migrate, manage, and optimize your cloud infrastructure across AWS, Azure, and GCP. We design architectures built for performance, security, and cost-efficiency — from day one.",
    features: ["Cloud migration & lift-and-shift", "Multi-cloud architecture design", "Cost optimization & FinOps", "Kubernetes & container orchestration", "Disaster recovery & business continuity"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    tagline: "Zero compromise on security",
    description: "Protect your business with enterprise-grade security services. We assess vulnerabilities, monitor threats 24/7, and build a security posture that keeps you ahead of evolving risks.",
    features: ["Penetration testing & red team exercises", "24/7 SOC monitoring & incident response", "Zero-trust architecture implementation", "Compliance readiness (FISMA, CMMC, SOC 2)", "Endpoint detection & response (EDR)"],
  },
  {
    icon: Settings,
    title: "Managed Services",
    tagline: "Always on. Always monitored.",
    description: "Our managed services team becomes an extension of your IT department. We proactively monitor, maintain, and support your entire environment so you can focus on running your business.",
    features: ["24/7 NOC monitoring & alerting", "Patch management & updates", "Help desk & end-user support", "Asset lifecycle management", "SLA-backed response times"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    tagline: "Insights that move the needle",
    description: "Turn raw data into a competitive advantage. Our analytics team builds the pipelines, dashboards, and AI-powered models that give decision-makers the clarity they need — in real time.",
    features: ["Data warehouse architecture", "Business intelligence dashboards", "Machine learning & AI integration", "Real-time data pipelines", "Predictive analytics & forecasting"],
  },
  {
    icon: Code2,
    title: "Software Development",
    tagline: "Built precisely to your requirements",
    description: "From internal tools to customer-facing platforms, we design and build software that fits your exact needs. Our engineering teams are fluent in modern stacks and agile delivery.",
    features: ["Custom web & mobile applications", "API design & microservices", "Legacy system modernization", "DevOps & CI/CD pipelines", "Quality assurance & automated testing"],
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <Navbar />

      {/* Page hero */}
      <section className="pt-40 pb-24 px-6 bg-zinc-950 relative overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-green-900/15 blur-3xl rounded-full" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center text-green-400 text-xs font-bold tracking-[0.2em] uppercase mb-5 border border-green-800 bg-green-950/60 px-5 py-2 rounded-full">
            Our Solutions
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl md:text-6xl font-black text-white leading-tight mb-5">
            Expert Technology<br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Solutions</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-zinc-400 text-lg leading-relaxed">
            We partner with businesses of all sizes to deliver technology that makes a measurable, lasting difference.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="pb-28 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" as const }}
                viewport={{ once: true }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-10 group hover:border-green-800 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-zinc-800 border border-zinc-700 group-hover:border-green-700 group-hover:bg-zinc-800 flex items-center justify-center transition-all duration-300">
                      <Icon size={24} className="text-green-400" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-1">{s.tagline}</p>
                    <h2 className="text-2xl font-black text-white mb-3">{s.title}</h2>
                    <p className="text-zinc-400 text-base leading-relaxed mb-6">{s.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-zinc-400 text-sm">
                          <span className="text-green-500 font-bold text-xs">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-zinc-900 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-4">Ready to get started?</h2>
          <p className="text-zinc-400 mb-8">Tell us about your project and we'll match you with the right solution.</p>
          <a href="/contact" className="inline-block bg-green-600 hover:bg-green-500 text-white font-semibold px-10 py-3 rounded-lg transition-colors">
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
