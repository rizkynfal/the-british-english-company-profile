"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { CAROUSEL_SLIDES, HERO_STATS } from "@/lib/data";

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(
          ((index % CAROUSEL_SLIDES.length) + CAROUSEL_SLIDES.length) %
            CAROUSEL_SLIDES.length
        );
        setAnimating(false);
      }, 300);
    },
    [animating]
  );

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 5500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const slide = CAROUSEL_SLIDES[current];

  const BG_GRADIENTS = [
    "from-[#0a1628] to-[#1a3a6b]",
    "from-[#0f2645] to-[#0a1628]",
    "from-[#1a2e55] to-[#0d1f3c]",
    "from-[#0c1e3c] to-[#142d56]",
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dynamic background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${BG_GRADIENTS[current]} transition-all duration-700`}
      />

      {/* Ambient overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(201,162,39,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(26,58,107,0.4) 0%, transparent 50%)",
        }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          <div
            className={`transition-all duration-300 ${
              animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            {/* Tag badge */}
            <span className="inline-block bg-[#c9a227]/20 border border-[#c9a227]/40 text-[#c9a227] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded mb-6">
              {slide.tag}
            </span>

            {/* Heading */}
            <h1
              className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {slide.heading.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < slide.heading.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* Sub-heading */}
            <p className="text-[#8fafd4] text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              {slide.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={slide.ctaHref}
                className="bg-[#c9a227] hover:bg-[#e0b82d] text-[#0a1628] font-bold px-7 py-3 rounded transition-colors duration-200 text-sm tracking-wide"
              >
                {slide.cta}
              </Link>
              <Link
                href="#contact"
                className="border border-white/30 hover:border-[#c9a227]/60 text-white hover:text-[#c9a227] font-semibold px-7 py-3 rounded transition-colors duration-200 text-sm tracking-wide"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="border border-white/10 bg-white/5 rounded-lg px-4 py-4 backdrop-blur-sm"
            >
              <div
                className="text-[#c9a227] text-2xl font-bold"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {stat.value}
              </div>
              <div className="text-[#8fafd4] text-xs mt-1 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {CAROUSEL_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-8 h-2 bg-[#c9a227]"
                : "w-2 h-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={() => goTo(current - 1)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white text-xl transition-colors"
      >
        ‹
      </button>
      <button
        onClick={() => goTo(current + 1)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white text-xl transition-colors"
      >
        ›
      </button>
    </section>
  );
}
