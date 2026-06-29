"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [navScrolled, setNavScrolled] = useState(transparent ? 0 : 1);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setNavScrolled(Math.min(window.scrollY / 120, 1));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const bgOpacity = transparent ? 0.45 + navScrolled * 0.52 : 0.97;

  const links = [
    { href: "/", label: "Home" },
    { href: "/solutions", label: "Solutions" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/careers", label: "Careers" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center justify-between px-6 md:px-8 py-4 fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
          borderBottom: `1px solid rgba(255,255,255,${navScrolled * 0.06})`,
          boxShadow: navScrolled > 0.3 ? `0 2px 32px rgba(0,0,0,${navScrolled * 0.6})` : "none",
        }}
      >
        <Link href="/" className="flex items-baseline gap-2.5" onClick={() => setMenuOpen(false)}>
          <span className="text-white font-black text-xl tracking-wide uppercase">Aegis</span>
          <span className="w-px h-4 bg-green-600 self-center opacity-60" />
          <span className="text-green-400 font-bold text-xl tracking-[0.18em] uppercase">Interlink</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7 text-base font-semibold text-zinc-200">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-white ${pathname === link.href ? "text-white" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/portal"
            className="bg-green-600 hover:bg-green-500 text-white font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Customer Portal
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="md:hidden text-zinc-300 hover:text-white transition-colors p-1"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 bg-zinc-950/98 backdrop-blur-lg flex flex-col items-center justify-center gap-6 md:hidden"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.07 }}
              >
                <Link
                  href={link.href}
                  className={`text-2xl font-bold transition-colors hover:text-green-400 ${
                    pathname === link.href ? "text-green-400" : "text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + links.length * 0.07 }}
              className="mt-2"
            >
              <Link
                href="/portal"
                className="bg-green-600 hover:bg-green-500 text-white font-bold px-10 py-3.5 rounded-xl transition-colors text-base"
                onClick={() => setMenuOpen(false)}
              >
                Customer Portal
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
