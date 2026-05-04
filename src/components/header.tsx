"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-sm border-b border-neutral-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1080px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-tight text-black">
          Uplyft Studios
        </Link>
        <a
          href="#contact"
          className="font-body text-sm font-medium text-neutral-500 hover:text-black transition-colors"
        >
          Book a Call
        </a>
      </div>
    </header>
  );
}
