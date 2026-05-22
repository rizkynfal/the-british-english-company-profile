"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import SectionLabel from "@/components/ui/SectionLabel";
import { INSTRUCTOR_FEATURES } from "@/lib/data";

const STAFF_IMAGES = [
  "/images/staff-1.png",
  "/images/staff-2.png",
  "/images/staff-3.png",
  "/images/staff-4.png",
  "/images/staff-5.png",
  "/images/staff-6.png",
  "/images/staff-7.png",
  "/images/staff-8.png",
];

export default function Instructors() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % STAFF_IMAGES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="instructors" className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <SectionLabel>Our People</SectionLabel>

            <h2
              className="text-[#0a1628] text-3xl md:text-4xl font-bold mt-3 mb-6"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Instructors &amp; Support Staff
            </h2>

            <p className="text-[#4a5568] leading-relaxed mb-4">
              {/* The British English Institute is supported by trained,
              experienced instructors capable of delivering the full range
              of training packages — whether at our British Centre for
              regular programmes or at client premises for in-house
              training. */}
              Pada saat ini <strong>The British English Instititute</strong>{" "}
              didukung oleh instruktur-instruktur yang terlatih dan
              berpengalaman dalam menangani berbagai paket pelatihan yang
              diselenggarakan baik di British Centre untuk regular program
              maupun in house training di tempat yang disepakati bersama client.
              Program pembekalan untuk menangani berbagai macam pelatihan wajib
              diikuti oleh setiap instruktur The British English Institute
              sebelum mereka diterjunkan ke lapangan.
            </p>

            <p className="text-[#4a5568] leading-relaxed mb-4">
              Instruktur-instruktur kami adalah alumni dari berbagai perguruan
              tinggi baik negeri maupun swasta yang telah melewati proses
              rekrutmen yang ketat dan telah melewati tes kompetensi Bahasa
              Inggris dan kompetensi pengajaran.
            </p>

            <p className="text-[#4a5568] leading-relaxed mb-8">
              Selain well trained instructors The British English Institute juga
              didukung oleh beberapa staf administrasi yang mandiri yang dapat
              membantu kelancaran setiap program pelatihan yang dilaksanakan
              oleh The British Institute.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-4">
              {INSTRUCTOR_FEATURES.map((feature) => (
                <div
                  key={feature.label}
                  className="bg-[#f4f7fc] border border-[#dde6f2] rounded-2xl p-5 text-center hover:shadow-md transition"
                >
                  <div className="text-3xl mb-2">{feature.icon}</div>

                  <div className="text-[#0a1628] font-semibold text-sm">
                    {feature.label}
                  </div>

                  <div className="text-[#4a5568] text-xs mt-1">
                    {feature.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - CAROUSEL */}
          <div className="relative">
            <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden rounded-3xl shadow-xl">
              {STAFF_IMAGES.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    current === index ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Staff ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="fill"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-5">
              {STAFF_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    current === index ? "w-8 bg-[#0a1628]" : "w-2.5 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
