"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1628]/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#c9a227] flex items-center justify-center flex-shrink-0">
            <span className="text-[#0a1628] font-bold text-xs leading-none">
              BEI
            </span>
          </div>
          <span className="text-white font-semibold text-sm tracking-wide hidden sm:block">
            The British English Institute
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#b8c8e0] hover:text-[#c9a227] text-sm tracking-wide transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/6282280931409"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c9a227] hover:bg-[#e0b82d] text-[#0a1628] font-bold text-sm px-4 py-2 rounded transition-colors duration-200"
          >
            Enrol Now
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a1628]/98 border-t border-white/10 px-6 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[#b8c8e0] hover:text-[#c9a227] text-sm py-1 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-[#c9a227] text-[#0a1628] font-bold text-sm px-4 py-2 rounded text-center mt-2"
          >
            Enrol Now
          </Link>
        </div>
      )}
    </nav>
  );
}
