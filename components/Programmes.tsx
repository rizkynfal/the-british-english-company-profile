"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { PROGRAMMES } from "@/lib/data";

export default function Programmes() {
  const [active, setActive] = useState(0);
  const selected = PROGRAMMES[active];

  return (
    <section id="programmes" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel>What We Offer</SectionLabel>
          <h2
            className="text-[#0a1628] text-3xl md:text-4xl font-bold mt-3"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Our Programmes
          </h2>
          <p className="text-[#4a5568] mt-3 max-w-xl mx-auto">
            Five distinct tracks designed to serve learners at every stage —
            from young children to senior professionals.
          </p>
        </div>

        {/* Programme selector grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
          {PROGRAMMES.map((programme, i) => (
            <button
              key={programme.title}
              onClick={() => setActive(i)}
              className={`text-left rounded-xl p-5 border-2 transition-all duration-200 ${
                active === i
                  ? "border-[#1a3a6b] bg-[#0a1628] text-white shadow-lg"
                  : "border-[#dde6f2] bg-[#f4f7fc] hover:border-[#1a3a6b]/40 text-[#0a1628]"
              }`}
            >
              <div className="text-2xl mb-3">{programme.icon}</div>
              <div
                className={`font-bold text-sm mb-1 ${
                  active === i ? "text-white" : "text-[#0a1628]"
                }`}
              >
                {programme.title}
              </div>
              <div
                className={`text-xs ${
                  active === i ? "text-[#8fafd4]" : "text-[#4a5568]"
                }`}
              >
                {programme.subtitle}
              </div>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className="bg-gradient-to-br from-[#0a1628] to-[#1a3a6b] rounded-2xl p-8 md:p-10 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Description */}
            <div>
              <span className="text-4xl">{selected.icon}</span>
              <h3
                className="text-2xl font-bold mt-3 mb-2"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {selected.title}
              </h3>
              <p className="text-[#c9a227] text-sm font-semibold mb-4">
                {selected.subtitle}
              </p>
              <p className="text-[#8fafd4] leading-relaxed">{selected.desc}</p>
            </div>

            {/* Levels / options */}
            <div>
              <p className="text-[#c9a227] text-xs font-bold tracking-widest uppercase mb-4">
                Programme Levels / Options
              </p>
              <ul className="space-y-2">
                {selected.levels.map((level) => (
                  <li key={level} className="flex items-center gap-3 text-[#d0dcea]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] flex-shrink-0" />
                    {level}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
