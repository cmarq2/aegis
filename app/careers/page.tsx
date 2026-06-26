"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Code2, Cloud, BarChart3, Users, Zap, Heart, Globe } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const benefits = [
  { icon: ShieldCheck, title: "Comprehensive Benefits", description: "Medical, dental, and vision coverage for you and your family, plus 401(k) matching." },
  { icon: Zap, title: "Growth & Learning", description: "Annual certification budget, conference attendance, and an internal mentorship program." },
  { icon: Heart, title: "Work-Life Balance", description: "Flexible remote and hybrid arrangements, generous PTO, and mental wellness support." },
  { icon: Globe, title: "Mission-Driven Work", description: "Serve clients at the highest levels of government and industry — work that actually matters." },
];

const openings: { department: string; icon: typeof ShieldCheck; roles: { title: string; type: string; location: string }[] }[] = [
  {
    department: "Cybersecurity",
    icon: ShieldCheck,
    roles: [
      { title: "Senior Penetration Tester", type: "Full-time", location: "Washington, D.C. / Remote" },
      { title: "SOC Analyst (Tier 2)", type: "Full-time", location: "Washington, D.C." },
      { title: "Cloud Security Engineer", type: "Full-time", location: "Remote" },
    ],
  },
  {
    department: "Software Development",
    icon: Code2,
    roles: [
      { title: "Full-Stack Engineer (Next.js / Node)", type: "Full-time", location: "Remote" },
      { title: "DevSecOps Engineer", type: "Full-time", location: "Hybrid — D.C. area" },
      { title: "Mobile Developer (React Native)", type: "Contract", location: "Remote" },
    ],
  },
  {
    department: "Cloud & Infrastructure",
    icon: Cloud,
    roles: [
      { title: "Cloud Architect (AWS/Azure)", type: "Full-time", location: "Remote" },
      { title: "Infrastructure Engineer", type: "Full-time", location: "Washington, D.C." },
    ],
  },
  {
    department: "Data & Analytics",
    icon: BarChart3,
    roles: [
      { title: "Data Engineer", type: "Full-time", location: "Remote" },
      { title: "ML/AI Solutions Architect", type: "Full-time", location: "Hybrid — D.C. area" },
    ],
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-green-900/15 blur-3xl rounded-full" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center text-green-400 text-xs font-bold tracking-[0.2em] uppercase mb-5 border border-green-800 bg-green-950/60 px-5 py-2 rounded-full">
            We're Hiring
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl md:text-6xl font-black text-white leading-tight mb-5">
            Build the Future of<br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Enterprise Technology</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-zinc-400 text-lg leading-relaxed">
            Join a team of experts solving the hardest technology problems for some of the most demanding clients in the world.
          </motion.p>
        </div>
      </section>

      {/* Culture banner */}
      <section className="py-16 px-6 bg-zinc-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-3">Our Culture</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5">A Team That Has Your Back</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">We don't just hire talent — we invest in people. At Aegis Interlink, you'll work alongside some of the sharpest engineers, analysts, and strategists in the industry, tackling problems that genuinely move the needle.</p>
            <p className="text-zinc-400 leading-relaxed">We move fast, embrace autonomy, and believe the best ideas come from giving talented people the freedom to execute.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            {[{ value: "120+", label: "Team Members" }, { value: "35+", label: "States Represented" }, { value: "94%", label: "Retention Rate" }, { value: "4.8★", label: "Glassdoor Rating" }].map((s) => (
              <div key={s.label} className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 text-center">
                <div className="text-2xl font-black text-green-400 mb-1">{s.value}</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-3">Why Aegis</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Benefits That Actually Matter</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 hover:border-green-800 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-green-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{b.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-20 px-6 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-3">Open Positions</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Find Your Role</h2>
          </motion.div>
          <div className="space-y-6">
            {openings.map((dept, i) => {
              const Icon = dept.icon;
              return (
                <motion.div key={dept.department} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden">
                  <div className="flex items-center gap-3 px-7 py-5 border-b border-zinc-800">
                    <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center">
                      <Icon size={16} className="text-green-400" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-white">{dept.department}</h3>
                  </div>
                  <div className="divide-y divide-zinc-800/60">
                    {dept.roles.map((role) => (
                      <div key={role.title} className="flex flex-col sm:flex-row sm:items-center justify-between px-7 py-4 hover:bg-zinc-800/40 transition-colors group gap-3">
                        <div>
                          <p className="text-white font-semibold text-sm">{role.title}</p>
                          <p className="text-zinc-500 text-xs mt-0.5">{role.location}</p>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="text-xs bg-zinc-800 border border-zinc-700 text-zinc-400 px-3 py-1 rounded-full">{role.type}</span>
                          <a href="/contact" className="text-xs font-semibold text-green-400 hover:text-green-300 transition-colors border border-green-800 bg-green-950/40 px-4 py-1.5 rounded-full group-hover:border-green-600">
                            Apply
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-zinc-950 text-center">
        <div className="max-w-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-black text-white mb-4">Don't see the right fit?</h2>
            <p className="text-zinc-400 mb-8">Send us your resume and we'll keep you in mind for future openings that match your skills.</p>
            <a href="/contact" className="inline-block bg-green-600 hover:bg-green-500 text-white font-semibold px-10 py-3 rounded-lg transition-colors">
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
