export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200 bg-white sticky top-0 z-50">
        <span className="text-xl font-bold tracking-tight text-gray-900">
          Aegis <span className="text-green-700">Interlink</span>
        </span>
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-gray-900 transition-colors">Home</a>
          <a href="#services" className="hover:text-gray-900 transition-colors">Solutions</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          <a href="#careers" className="hover:text-gray-900 transition-colors">Careers</a>
          <a
            href="/portal"
            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Customer Portal
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center text-center px-6 py-36 bg-white">
        <p className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-4">
          Trusted IT Solutions
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-3xl text-gray-900">
          Secure. Connected.{" "}
          <span className="text-green-700">Always On.</span>
        </h1>
        <p className="mt-6 text-lg text-gray-500 max-w-xl leading-relaxed">
          Aegis Interlink delivers end-to-end cybersecurity, networking infrastructure,
          managed IT services, and custom application development — so your business
          runs protected and at full speed.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#contact"
            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg text-base transition-colors"
          >
            Request a Quote
          </a>
          <a
            href="#services"
            className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-lg text-base transition-colors"
          >
            Our Solutions
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Solutions</h2>
            <p className="mt-3 text-gray-500 text-base max-w-lg mx-auto">
              Comprehensive technology services built for businesses that can't afford downtime.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-600 hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Aegis Interlink</h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Aegis Interlink is a full-spectrum IT company dedicated to empowering businesses
            with the technology they need to compete and grow. From securing your network to
            building your next application, our team brings expertise, reliability, and a
            commitment to your success.
          </p>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-gray-500 text-base mb-8">
            We're always looking for talented engineers, consultants, and professionals
            who are passionate about technology. Come build the future with us.
          </p>
          <a
            href="mailto:careers@aegisinterlink.com"
            className="inline-block border border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-semibold px-8 py-3 rounded-lg text-base transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-black text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-400 mb-8">
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
      <footer className="border-t border-gray-200 bg-white py-6 px-8 text-center text-gray-400 text-sm">
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
