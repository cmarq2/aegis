"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" as const }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col overflow-x-hidden">

      {/* Navbar */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center justify-between px-8 py-4 border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50"
      >
        <span className="text-xl font-bold tracking-tight text-white">
          Aegis <span className="text-green-400">Interlink</span>
        </span>
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#services" className="hover:text-white transition-colors">Solutions</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#careers" className="hover:text-white transition-colors">Careers</a>
          <a
            href="/portal"
            className="bg-green-600 hover:bg-green-500 text-white font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Customer Portal
          </a>
        </div>
      </motion.nav>

      {/* Hero — dark with parallax */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center text-center px-6 py-44 bg-zinc-950 overflow-hidden min-h-screen"
      >
        {/* Parallax background layer */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Glow orbs */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-green-600/10 blur-3xl" />
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-emerald-500/8 blur-2xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-green-700/10 blur-2xl" />
        </motion.div>

        {/* Hero content */}
        <motion.div style={{ y: textY, opacity }} className="relative z-10 flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-5 border border-green-800 bg-green-950/50 px-4 py-1 rounded-full"
          >
            Trusted IT Solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight max-w-4xl text-white"
          >
            Secure. Connected.{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              Always On.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 text-lg text-zinc-400 max-w-xl leading-relaxed"
          >
            Aegis Interlink delivers end-to-end cybersecurity, networking infrastructure,
            managed IT services, and custom application development — so your business
            runs protected and at full speed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3 rounded-lg text-base transition-colors shadow-lg shadow-green-900/30"
            >
              Request a Quote
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="border border-zinc-600 hover:border-zinc-400 text-zinc-300 hover:text-white px-8 py-3 rounded-lg text-base transition-colors"
            >
              Our Solutions
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-600 text-xs"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-zinc-700 rounded-full flex items-start justify-center pt-1"
          >
            <div className="w-1 h-2 bg-green-500 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Bar — WHITE */}
      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">
              Trusted by 500+ organizations across government, defense, and enterprise
            </p>
          </FadeIn>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {trustedOrgs.map((org) => (
              <motion.div
                key={org.name}
                variants={fadeUp}
                whileHover={{ scale: 1.04, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm cursor-default"
              >
                <span className="text-xs font-semibold text-green-700 bg-green-50 border border-green-200 rounded px-2 py-0.5">
                  {org.type}
                </span>
                <span className="text-sm font-medium text-gray-700">{org.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services — dark with white cards */}
      <section id="services" className="py-28 px-6 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Expert Technology Solutions</h2>
            <p className="mt-3 text-zinc-400 text-base max-w-lg mx-auto">
              We partner with businesses of all sizes to deliver technology that makes a measurable, lasting difference.
            </p>
          </FadeIn>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                className="bg-white rounded-xl p-6 flex flex-col cursor-default"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{s.description}</p>
                <a href="#contact" className="mt-4 text-sm font-semibold text-green-700 hover:text-green-600 transition-colors">
                  Learn more →
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Aegis — WHITE */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-3">Why Aegis Interlink</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Built for Enterprise.<br />Trusted at Scale.
            </h2>
            <p className="mt-3 text-gray-500 text-base max-w-lg mx-auto">
              From startups to Fortune 500 companies, we deliver technology that performs when it matters most.
            </p>
          </FadeIn>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16"
          >
            {whyUs.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="border border-gray-200 rounded-xl p-6 hover:border-green-500 hover:shadow-md transition-all cursor-default"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats strip — dark contrast inside white section */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                whileHover={{ scale: 1.04 }}
                className="bg-zinc-900 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-extrabold text-green-400">{s.value}</div>
                <div className="mt-1 text-sm text-zinc-400 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Government & Public Sector — very dark */}
      <section className="py-28 px-6 bg-zinc-950 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-green-900/20 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">
          <FadeIn>
            <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-4">Government &amp; Public Sector</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cleared for<br />Mission-Critical Operations
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-6">
              We hold the clearances, certifications, and operational discipline required to serve
              federal, state, and local government agencies at the highest level of security and compliance.
            </p>
            <ul className="space-y-3 text-sm text-zinc-300 mb-8">
              {govFeatures.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2"
                >
                  <span className="text-green-400 font-bold">✓</span> {f}
                </motion.li>
              ))}
            </ul>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block bg-green-600 hover:bg-green-500 text-white font-semibold px-7 py-3 rounded-lg text-sm transition-colors"
            >
              Request a Government Brief
            </motion.a>
          </FadeIn>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {certBadges.map((b) => (
              <motion.div
                key={b.title}
                variants={fadeUp}
                whileHover={{ scale: 1.05, borderColor: "#4ade80" }}
                className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 text-center cursor-default"
              >
                <div className="text-green-400 font-bold text-sm">{b.title}</div>
                <div className="text-zinc-400 text-xs mt-1">{b.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries — WHITE */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-3">Industries</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Sectors We Serve</h2>
            <p className="mt-3 text-gray-500 text-base max-w-lg mx-auto">
              From classified federal environments to commercial enterprise, our solutions are purpose-built for every sector.
            </p>
          </FadeIn>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industries.map((ind) => (
              <motion.div
                key={ind.title}
                variants={fadeUp}
                whileHover={{ y: -5, borderColor: "#16a34a", boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
                className="border border-gray-200 rounded-xl p-6 cursor-default transition-colors"
              >
                <div className="text-2xl mb-3">{ind.icon}</div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{ind.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{ind.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials — dark */}
      <section className="py-28 px-6 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-3">Client Stories</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Clients Say</h2>
            <p className="mt-3 text-zinc-400 text-base max-w-lg mx-auto">
              From federal agencies to Fortune 500 companies — here's what organizations trust us to deliver.
            </p>
          </FadeIn>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 flex flex-col cursor-default"
              >
                <p className="text-zinc-300 text-sm leading-relaxed flex-1 mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-zinc-500">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About — WHITE */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Aegis Interlink</h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Aegis Interlink is a full-spectrum IT company dedicated to empowering businesses
              with the technology they need to compete and grow. From securing your network to
              building your next application, our team brings expertise, reliability, and a
              commitment to your success.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Careers — light */}
      <section id="careers" className="py-24 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-gray-500 text-base mb-8">
              We're always looking for talented engineers, consultants, and professionals
              who are passionate about technology. Come build the future with us.
            </p>
            <motion.a
              href="mailto:careers@aegisinterlink.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-semibold px-8 py-3 rounded-lg text-base transition-colors"
            >
              View Open Positions
            </motion.a>
          </FadeIn>
        </div>
      </section>

      {/* Contact — dark */}
      <section id="contact" className="py-28 px-6 bg-zinc-950 relative overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-900/20 blur-3xl rounded-full" />
        </div>
        <div className="max-w-xl mx-auto relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-zinc-400 mb-8">
              Tell us about your project and we'll get back to you within one business day.
            </p>
            <motion.a
              href="mailto:contact@aegisinterlink.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block bg-green-600 hover:bg-green-500 text-white font-semibold px-10 py-3 rounded-lg text-base transition-colors shadow-lg shadow-green-900/40"
            >
              Request a Quote
            </motion.a>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-950 py-6 px-8 text-center text-zinc-500 text-sm">
        © {new Date().getFullYear()} Aegis Interlink. All rights reserved.
      </footer>
    </div>
  );
}

const trustedOrgs = [
  { type: "Federal", name: "U.S. Department of Defense" },
  { type: "Federal", name: "Dept. of Homeland Security" },
  { type: "Federal", name: "General Services Administration" },
  { type: "State", name: "State of Virginia" },
  { type: "State", name: "Texas Dept. of Transportation" },
  { type: "Local", name: "County of San Diego" },
  { type: "Defense", name: "Northrop Grumman" },
  { type: "Defense", name: "Leidos Holdings" },
];

const services = [
  {
    icon: "🧭",
    title: "IT Consulting",
    description:
      "Strategic technology guidance to align your IT infrastructure with business objectives and accelerate your digital transformation roadmap.",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    description:
      "Scalable, secure cloud infrastructure built for performance and cost-efficiency. Migration, management, and optimization across AWS, Azure, and GCP.",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    description:
      "Comprehensive security assessments, monitoring, and threat protection to safeguard your data, systems, and business continuity against evolving threats.",
  },
  {
    icon: "⚙️",
    title: "Managed Services",
    description:
      "24/7 proactive monitoring, maintenance, and support so you can focus on your business while we keep your IT environment running flawlessly.",
  },
  {
    icon: "📊",
    title: "Data Analytics",
    description:
      "Turn raw data into actionable insights with our advanced analytics, business intelligence, and AI-powered reporting solutions built for scale.",
  },
  {
    icon: "💻",
    title: "Software Development",
    description:
      "Custom software built precisely to your requirements — from web applications and APIs to enterprise platforms that scale with your business.",
  },
];

const whyUs = [
  {
    icon: "🔒",
    title: "Enterprise-Grade Security",
    description:
      "SOC 2 Type II compliant infrastructure with end-to-end encryption, zero-trust architecture, and continuous threat monitoring — so your data stays protected, always.",
  },
  {
    icon: "⚡",
    title: "Proven Performance",
    description:
      "99.9% guaranteed uptime backed by SLAs. Our infrastructure is engineered for resilience — with automatic failover, global CDN, and elastic scaling built in.",
  },
  {
    icon: "👥",
    title: "Dedicated Expertise",
    description:
      "Senior engineers assigned to your account — no handoffs to junior staff. Your team knows your infrastructure inside out and is reachable around the clock.",
  },
  {
    icon: "🚀",
    title: "Rapid Deployment",
    description:
      "Most solutions go live in days, not months. Our streamlined delivery process gets you from discovery to production faster than any other partner in the industry.",
  },
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "12+", label: "Years of Excellence" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Expert Support" },
];

const govFeatures = [
  "FedRAMP Authorized cloud infrastructure",
  "FISMA Moderate & High compliance",
  "CMMC Level 2 certified (Defense Industrial Base)",
  "NIST SP 800-171 & 800-53 aligned",
  "GSA Schedule IT 70 contract vehicle",
  "24/7 NOC with cleared personnel on staff",
];

const certBadges = [
  { title: "FedRAMP", sub: "Authorized" },
  { title: "FISMA", sub: "High Compliant" },
  { title: "CMMC", sub: "Level 2 Certified" },
  { title: "NIST 800-171", sub: "Aligned" },
  { title: "GSA Schedule", sub: "IT 70 Contract" },
  { title: "SOC 2 Type II", sub: "Certified" },
];

const industries = [
  {
    icon: "🏛️",
    title: "Federal Government",
    description:
      "Supporting civilian agencies, defense departments, and intelligence community partners with classified and unclassified IT solutions.",
  },
  {
    icon: "🏙️",
    title: "State & Local Gov",
    description:
      "Modernizing infrastructure for state agencies, county governments, municipalities, and public works departments across the country.",
  },
  {
    icon: "🎖️",
    title: "Defense & Intel",
    description:
      "Delivering mission-critical IT for the Defense Industrial Base, cleared contractors, and intelligence community stakeholders.",
  },
  {
    icon: "🏥",
    title: "Healthcare",
    description:
      "HIPAA-compliant managed services for hospital networks, VA facilities, HHS contractors, and healthcare technology providers.",
  },
  {
    icon: "🏦",
    title: "Financial Services",
    description:
      "SOX, PCI-DSS, and GLBA-compliant IT operations for banks, credit unions, investment firms, and fintech companies.",
  },
  {
    icon: "🎓",
    title: "Education",
    description:
      "Secure, scalable IT for K-12 districts, universities, research institutions, and Department of Education contractors.",
  },
];

const testimonials = [
  {
    quote:
      "Aegis Interlink migrated our entire agency to a FedRAMP-authorized cloud environment in under 90 days — with zero downtime and full FISMA compliance from day one. Their cleared team made the process seamless.",
    name: "James M.",
    role: "Chief Information Officer, Federal Civilian Agency",
    initials: "JM",
  },
  {
    quote:
      "We needed a cybersecurity partner who understood the unique threat landscape facing state government. Aegis Interlink deployed a 24/7 SOC within weeks and has since blocked over 40,000 threat events without a single breach.",
    name: "Sandra R.",
    role: "Director of IT Security, State Department of Revenue",
    initials: "SR",
  },
  {
    quote:
      "As a defense contractor, our CMMC certification was at risk. Aegis Interlink's team came in, assessed our gaps, and had us fully certified in 60 days. Their depth of knowledge in the defense space is unmatched.",
    name: "David K.",
    role: "VP of Technology, Defense Systems Contractor",
    initials: "DK",
  },
];
