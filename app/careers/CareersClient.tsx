"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Code2, Cloud, BarChart3, Users, Zap, Heart, Globe, MapPin, ArrowRight, Headphones } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const benefits = [
  { icon: ShieldCheck, title: "Comprehensive Benefits", description: "Medical, dental, and vision coverage for you and your family, plus 401(k) matching." },
  { icon: Zap, title: "Growth & Learning", description: "Annual certification budget, conference attendance, and an internal mentorship program." },
  { icon: Heart, title: "Work-Life Balance", description: "Flexible remote and hybrid arrangements, generous PTO, and mental wellness support." },
  { icon: Globe, title: "Mission-Driven Work", description: "Serve clients at the highest levels of government and industry — work that actually matters." },
];

const levelColors: Record<string, string> = {
  Senior: "text-emerald-400 bg-emerald-950/60 border-emerald-800/50",
  Mid: "text-sky-400 bg-sky-950/60 border-sky-800/50",
  Lead: "text-amber-400 bg-amber-950/60 border-amber-800/50",
  Junior: "text-violet-400 bg-violet-950/60 border-violet-800/50",
};

const openings = [
  {
    department: "Cybersecurity",
    icon: ShieldCheck,
    roles: [
      { slug: "soc-analyst-tier-2", title: "SOC Analyst", type: "Full-time", location: "Remote / USA", level: "Mid", salary: "$90K–$115K" },
      { slug: "cloud-security-engineer", title: "Cloud Security Engineer", type: "Full-time", location: "Remote / USA", level: "Senior", salary: "$125K–$155K" },
    ],
  },
  {
    department: "Software Development",
    icon: Code2,
    roles: [
      { slug: "full-stack-engineer", title: "Full-Stack Engineer (Next.js / Node)", type: "Full-time", location: "Remote / USA", level: "Mid", salary: "$110K–$140K" },
      { slug: "devsecops-engineer", title: "DevSecOps Engineer", type: "Full-time", location: "Remote / USA", level: "Senior", salary: "$120K–$150K" },
    ],
  },
  {
    department: "Cloud & Infrastructure",
    icon: Cloud,
    roles: [
      { slug: "cloud-architect", title: "Cloud Architect (AWS/Azure)", type: "Full-time", location: "Remote / USA", level: "Lead", salary: "$145K–$185K" },
    ],
  },
  {
    department: "Data & Analytics",
    icon: BarChart3,
    roles: [
      { slug: "ml-ai-solutions-architect", title: "ML/AI Solutions Architect", type: "Full-time", location: "Remote / USA", level: "Lead", salary: "$150K–$190K" },
    ],
  },
  {
    department: "Managed IT",
    icon: Headphones,
    roles: [
      { slug: "technical-support-representative", title: "Technical Support Representative", type: "Full-time", location: "Remote / USA", level: "Junior", salary: "$55K–$70K" },
      { slug: "tier-2-help-desk", title: "Tier 2 Help Desk Technician", type: "Full-time", location: "Remote / USA", level: "Mid", salary: "$65K–$85K" },
    ],
  },
];

export default function CareersClient() {
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
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-5">
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
      <section className="py-20 px-6 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-3">Open Positions</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Find Your Role</h2>
            <p className="text-zinc-500 text-sm mt-3">
              {openings.reduce((sum, d) => sum + d.roles.length, 0)} positions across {openings.length} departments
            </p>
          </motion.div>

          <div className="space-y-10">
            {openings.map((dept, deptIdx) => {
              const Icon = dept.icon;
              return (
                <motion.div
                  key={dept.department}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: deptIdx * 0.07 }}
                  viewport={{ once: true }}
                >
                  {/* Department header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                        <Icon size={18} className="text-green-400" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-white font-black text-base">{dept.department}</h3>
                        <p className="text-zinc-600 text-xs">{dept.roles.length} open position{dept.roles.length !== 1 ? "s" : ""}</p>
                      </div>
                    </div>
                    <span className="text-green-400 text-xs font-black bg-green-950/50 border border-green-800/50 w-7 h-7 rounded-full flex items-center justify-center">
                      {dept.roles.length}
                    </span>
                  </div>

                  {/* Gradient divider */}
                  <div className="h-px bg-gradient-to-r from-green-800/60 via-zinc-700 to-transparent mb-4" />

                  {/* Role cards */}
                  <div className="space-y-3">
                    {dept.roles.map((role, roleIdx) => (
                      <motion.div
                        key={role.slug}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: deptIdx * 0.07 + roleIdx * 0.06 }}
                        viewport={{ once: true }}
                        className="group relative bg-zinc-950 border border-zinc-800 hover:border-zinc-700 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/40"
                      >
                        {/* Left accent line */}
                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-4 gap-4 pl-6">
                          <div>
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${levelColors[role.level] ?? levelColors.Mid}`}>
                                {role.level}
                              </span>
                            </div>
                            <h4 className="text-white font-bold text-sm group-hover:text-green-400 transition-colors duration-200">
                              {role.title}
                            </h4>
                            <div className="flex flex-wrap items-center gap-3 mt-1.5">
                              <span className="text-zinc-500 text-xs flex items-center gap-1">
                                <MapPin size={11} /> {role.location}
                              </span>
                              <span className="text-zinc-600 text-xs font-medium">{role.salary}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 flex-shrink-0">
                            <span className="text-xs bg-zinc-800/80 border border-zinc-700 text-zinc-400 px-3 py-1.5 rounded-full whitespace-nowrap">
                              {role.type}
                            </span>
                            <a
                              href={`/careers/apply/${role.slug}`}
                              className="flex items-center gap-1.5 text-xs font-bold text-white bg-green-700 hover:bg-green-600 px-4 py-2 rounded-lg transition-all duration-200 group/btn whitespace-nowrap"
                            >
                              Apply
                              <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-0.5" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
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
