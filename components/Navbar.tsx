"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 border-b border-charcoal/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#home"
          className="text-lg md:text-xl font-bold tracking-tight text-charcoal"
        >
          Satyam<span className="text-charcoal/40">.</span>
        </a>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full bg-charcoal text-white text-xs md:text-sm font-medium hover:bg-charcoal-900 transition-colors"
        >
          Let&apos;s Connect
        </a>
      </nav>
    </header>
  );
}
