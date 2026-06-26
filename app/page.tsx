export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-zinc-700 bg-zinc-900 sticky top-0 z-50">
        <span className="text-xl font-bold tracking-tight text-white">
          Aegis <span className="text-green-500">Interlink</span>
        </span>
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#services" className="hover:text-white transition-colors">Solutions</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#careers" className="hover:text-white transition-colors">Careers</a>
          <a
            href="/portal"
            className="bg-green-700 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Customer Portal
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-36 bg-zinc-900">
        <p className="text-green-500 text-sm font-semibold tracking-widest uppercase mb-4">
          Trusted IT Solutions
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-3xl text-white">
          Secure. Connected.{" "}
          <span className="text-green-500">Always On.</span>
        </h1>
        <p className="mt-6 text-lg text-zinc-400 max-w-xl leading-relaxed">
          Aegis Interlink delivers end-to-end cybersecurity, networking infrastructure,
          managed IT services, and custom application development — so your business
          runs protected and at full speed.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#contact"
            className="bg-green-700 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg text-base transition-colors"
          >
            Request a Quote
          </a>
          <a
            href="#services"
            className="border border-zinc-600 hover:border-zinc-400 text-zinc-300 hover:text-white px-8 py-3 rounded-lg text-base transition-colors"
          >
            Our Solutions
          </a>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-14 px-6 bg-zinc-800 border-y border-zinc-700">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-8">
            Trusted by 500+ organizations across government, defense, and enterprise
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {trustedOrgs.map((org) => (
              <div
                key={org.name}
                className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 shadow-sm"
              >
                <span className="text-xs font-semibold text-green-500 bg-green-950 border border-green-800 rounded px-2 py-0.5">
                  {org.type}
                </span>
                <span className="text-sm font-medium text-zinc-300">{org.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="services" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-green-500 text-sm font-semibold tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Expert Technology Solutions</h2>
            <p className="mt-3 text-zinc-400 text-base max-w-lg mx-auto">
              We partner with businesses of all sizes to deliver technology that makes a measurable, lasting difference.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 hover:border-green-600 hover:shadow-lg transition-all flex flex-col"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed flex-1">{s.description}</p>
                <a href="#contact" className="mt-4 text-sm font-semibold text-green-500 hover:text-green-400 transition-colors">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Aegis Interlink */}
      <section className="py-24 px-6 bg-zinc-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-green-500 text-sm font-semibold tracking-widest uppercase mb-3">Why Aegis Interlink</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Built for Enterprise.<br />Trusted at Scale.
            </h2>
            <p className="mt-3 text-zinc-400 text-base max-w-lg mx-auto">
              From startups to Fortune 500 companies, we deliver technology that performs when it matters most.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 hover:shadow-md transition-all">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label} className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
                <div className="text-3xl font-extrabold text-green-500">{s.value}</div>
                <div className="mt-1 text-sm text-zinc-400 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government & Public Sector */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-500 text-sm font-semibold tracking-widest uppercase mb-4">Government &amp; Public Sector</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cleared for<br />Mission-Critical Operations
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-6">
              We hold the clearances, certifications, and operational discipline required to serve
              federal, state, and local government agencies at the highest level of security and compliance.
            </p>
            <ul className="space-y-2 text-sm text-zinc-300 mb-8">
              {govFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block bg-green-700 hover:bg-green-600 text-white font-semibold px-7 py-3 rounded-lg text-sm transition-colors"
            >
              Request a Government Brief
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {certBadges.map((b) => (
              <div key={b.title} className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 text-center hover:border-green-600 transition-colors">
                <div className="text-green-500 font-bold text-sm">{b.title}</div>
                <div className="text-zinc-400 text-xs mt-1">{b.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-green-500 text-sm font-semibold tracking-widest uppercase mb-3">Industries</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Sectors We Serve</h2>
            <p className="mt-3 text-zinc-400 text-base max-w-lg mx-auto">
              From classified federal environments to commercial enterprise, our solutions are purpose-built for every sector we operate in.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div key={ind.title} className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 hover:border-green-600 hover:shadow-md transition-all">
                <div className="text-2xl mb-3">{ind.icon}</div>
                <h3 className="text-base font-semibold text-white mb-2">{ind.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-zinc-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-green-500 text-sm font-semibold tracking-widest uppercase mb-3">Client Stories</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Clients Say</h2>
            <p className="mt-3 text-zinc-400 text-base max-w-lg mx-auto">
              From federal agencies to Fortune 500 companies — here's what organizations trust us to deliver.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 flex flex-col">
                <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-zinc-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Aegis Interlink</h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Aegis Interlink is a full-spectrum IT company dedicated to empowering businesses
            with the technology they need to compete and grow. From securing your network to
            building your next application, our team brings expertise, reliability, and a
            commitment to your success.
          </p>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-24 px-6 bg-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-zinc-400 text-base mb-8">
            We're always looking for talented engineers, consultants, and professionals
            who are passionate about technology. Come build the future with us.
          </p>
          <a
            href="mailto:careers@aegisinterlink.com"
            className="inline-block border border-green-700 text-green-500 hover:bg-green-700 hover:text-white font-semibold px-8 py-3 rounded-lg text-base transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-zinc-950 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-zinc-400 mb-8">
            Tell us about your project and we'll get back to you within one business day.
          </p>
          <a
            href="mailto:contact@aegisinterlink.com"
            className="inline-block bg-green-700 hover:bg-green-600 text-white font-semibold px-10 py-3 rounded-lg text-base transition-colors"
          >
            Request a Quote
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-700 bg-zinc-900 py-6 px-8 text-center text-zinc-500 text-sm">
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
