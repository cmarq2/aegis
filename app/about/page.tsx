"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Clock, Globe } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const values = [
  { icon: ShieldCheck, title: "Integrity First", description: "We operate with complete transparency. No hidden fees, no overpromising — just honest guidance and accountable delivery." },
  { icon: Users, title: "Client-Centered", description: "Senior engineers work directly on your account. You get the same people who scoped the work actually building it." },
  { icon: Clock, title: "Built for Speed", description: "Most solutions go live in days, not months. We move fast without cutting corners on quality or security." },
  { icon: Globe, title: "Mission-Ready", description: "Our team holds the clearances and certifications required to serve government and defense clients at the highest level." },
];

const timeline = [
  { year: "2012", event: "Founded in Washington D.C. with a focus on federal IT infrastructure." },
  { year: "2015", event: "Achieved FedRAMP authorization and expanded into state & local government." },
  { year: "2018", event: "Launched managed security services and 24/7 SOC operations." },
  { year: "2020", event: "Attained CMMC Level 2 certification and entered the Defense Industrial Base." },
  { year: "2023", event: "Surpassed 500 clients served across government, defense, and enterprise." },
  { year: "2025", event: "Expanded cloud and AI capabilities with new practices in data analytics and ML." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 bg-zinc-950 relative overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-green-900/15 blur-3xl rounded-full" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center text-green-400 text-xs font-bold tracking-[0.2em] uppercase mb-5 border border-green-800 bg-green-950/60 px-5 py-2 rounded-full">
            About Us
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl md:text-6xl font-black text-white leading-tight mb-5">
            Built on Trust.<br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Driven by Results.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-zinc-400 text-lg leading-relaxed">
            Aegis Interlink is a full-spectrum IT company dedicated to empowering organizations with technology that performs when it matters most.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-zinc-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-3">Our Mission</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Empowering organizations through technology</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              We founded Aegis Interlink on the belief that every organization — from a county government to a Fortune 500 company — deserves access to enterprise-grade technology and the people who know how to deploy it.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Our mission is to be the most trusted technology partner in the markets we serve: delivering solutions that are secure, scalable, and built to last.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            {[{ value: "500+", label: "Clients Served" }, { value: "12+", label: "Years of Excellence" }, { value: "99.9%", label: "Uptime SLA" }, { value: "24/7", label: "Expert Support" }].map((s) => (
              <div key={s.label} className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 text-center">
                <div className="text-3xl font-black text-green-400 mb-1">{s.value}</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-3">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">What We Stand For</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 hover:border-green-800 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-green-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-zinc-900">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-3">Our History</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">A Decade of Excellence</h2>
          </motion.div>
          <div className="relative border-l border-zinc-700 pl-8 space-y-10">
            {timeline.map((t, i) => (
              <motion.div key={t.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="relative">
                <div className="absolute -left-[2.55rem] w-4 h-4 rounded-full bg-green-600 border-2 border-zinc-900" />
                <span className="text-green-400 text-xs font-bold uppercase tracking-widest">{t.year}</span>
                <p className="text-zinc-300 text-sm mt-1 leading-relaxed">{t.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
