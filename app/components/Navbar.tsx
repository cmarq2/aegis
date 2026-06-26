"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [navScrolled, setNavScrolled] = useState(transparent ? 0 : 1);
  const pathname = usePathname();

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setNavScrolled(Math.min(window.scrollY / 120, 1));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const bgOpacity = transparent ? 0.45 + navScrolled * 0.52 : 0.97;

  const links = [
    { href: "/", label: "Home" },
    { href: "/solutions", label: "Solutions" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/careers", label: "Careers" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center justify-between px-8 py-4 fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
        borderBottom: `1px solid rgba(255,255,255,${navScrolled * 0.06})`,
        boxShadow: navScrolled > 0.3 ? `0 2px 32px rgba(0,0,0,${navScrolled * 0.6})` : "none",
      }}
    >
      <Link href="/" className="text-xl font-bold tracking-tight text-white">
        Aegis <span className="text-green-400">Interlink</span>
      </Link>

      <div className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-colors hover:text-white ${
              pathname === link.href ? "text-white" : ""
            }`}
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
    </motion.nav>
  );
}
