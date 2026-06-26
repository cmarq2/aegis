import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-10 px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-lg font-bold text-white">
            Aegis <span className="text-green-400">Interlink</span>
          </span>
          <p className="text-zinc-500 text-sm mt-1">Enterprise IT. Trusted at Scale.</p>
        </div>
        <div className="flex items-center gap-6 text-sm text-zinc-500">
          <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
        </div>
        <p className="text-zinc-600 text-sm">
          © {new Date().getFullYear()} Aegis Interlink. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
