export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-slate-800">
        <span className="text-xl font-bold tracking-tight text-white">
          Aegis <span className="text-cyan-400">Interlink</span>
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a
            href="#contact"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Request a Quote
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center text-center px-6 py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
          Trusted IT Solutions
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-3xl">
          Secure. Connected.{" "}
          <span className="text-cyan-400">Always On.</span>
        </h1>
        <p className="mt-6 text-lg text-slate-400 max-w-xl leading-relaxed">
          Aegis Interlink delivers end-to-end cybersecurity, networking infrastructure,
          managed IT services, and custom application development — so your business
          runs protected and at full speed.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#contact"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-3 rounded-lg text-base transition-colors"
          >
            Request a Quote
          </a>
          <a
            href="#services"
            className="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-3 rounded-lg text-base transition-colors"
          >
            Our Services
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
            <p className="mt-3 text-slate-400 text-base max-w-lg mx-auto">
              Comprehensive technology services built for businesses that can't afford downtime.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-colors"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-slate-950 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-slate-400 mb-8">
            Tell us about your project and we'll get back to you within one business day.
          </p>
          <a
            href="mailto:contact@aegisinterlink.com"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-10 py-3 rounded-lg text-base transition-colors"
          >
            Request a Quote
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 px-8 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Aegis Interlink. All rights reserved.
      </footer>
    </div>
  );
}

const services = [
  {
    icon: "🛡️",
    title: "Cybersecurity",
    description:
      "Protect your business from threats with vulnerability assessments, network security, endpoint protection, and incident response.",
  },
  {
    icon: "🌐",
    title: "Networking & IT Infrastructure",
    description:
      "Design, deploy, and maintain robust network infrastructure — from LAN/WAN setups to cloud connectivity and hardware provisioning.",
  },
  {
    icon: "⚙️",
    title: "Managed IT Services",
    description:
      "Ongoing monitoring, maintenance, and support for your entire IT environment so your team can focus on the business.",
  },
  {
    icon: "💻",
    title: "Application Development",
    description:
      "Custom web and software applications built to your specifications — from internal tools to customer-facing platforms.",
  },
];
