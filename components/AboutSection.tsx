import SectionLabel from "@/components/ui/SectionLabel";

export default function AboutSection() {
  const badges = [
    { text: "NIB: 1803220049546", className: "bg-[#e8f0fa] text-[#1a3a6b]" },
    { text: "NPSN: K9998554", className: "bg-[#e8f0fa] text-[#1a3a6b]" },
    { text: "Licensed 2022", className: "bg-[#fdf6e3] text-[#7a5c00]" },
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <SectionLabel>About Us</SectionLabel>
          <h2
            className="text-[#0a1628] text-3xl md:text-4xl font-bold mt-3 mb-6 leading-snug"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Palembang&apos;s Premier British English Training Centre
          </h2>
          <p className="text-[#4a5568] leading-relaxed mb-4">
            {/* Founded with a passion for elevating the nation&apos;s intellectual
            potential, <strong>The British English Institute</strong> is a
            professional English language training institution offering
            comprehensive English Training Services to the general public. */}
            Selamat datang di <strong>THE BRITISH ENGLISH INSTITUTE!</strong><br></br>
            Kami percaya bahwa setiap individu memiliki potensi besar untuk
            bersaing secara global. Tantangan terbesar sering kali hanyalah
            hambatan komunikasi. Itulah mengapa kami hadir: untuk memastikan
            bahasa Inggris tidak lagi menjadi penghalang bagi kesuksesan Anda.
          </p>
          <p className="text-[#4a5568] leading-relaxed mb-4">
            {/* Originally established in 1999 as the School of General and Business
            English, the institute underwent a strategic rebrand in 2015 to
            become The British English Institute — reflecting its growing
            ambition and the evolving needs of Palembang&apos;s learners. */}
            Di <strong>THE BRITISH ENGLISH INSTITUTE</strong>, kami berfokus pada hasil yang
            nyata. Dengan dukungan tenaga pengajar yang kompeten dan suasana
            belajar yang interaktif, kami membantu para siswa tidak hanya "tahu"
            bahasa Inggris, tetapi "percaya diri" dalam menggunakannya di dunia
            nyata.
          </p>
          <p className="text-[#4a5568] leading-relaxed mb-6">
            {/* Today, we serve students, undergraduates, professionals, and
            corporations alike, helping each achieve international-standard
            English fluency. */}
            Kami berharap profil ini memberikan informasi yang jelas mengenai
            bagaimana kami dapat mendukung pencapaian target Anda. Mari
            melangkah maju dan fasih berbahasa Inggris bersama kami.
          </p>

          {/* Legal badges */}
          <div className="flex flex-wrap gap-3">
            {badges.map((b) => (
              <span
                key={b.text}
                className={`text-xs font-semibold px-3 py-1.5 rounded ${b.className}`}
              >
                {b.text}
              </span>
            ))}
          </div>
        </div>

        {/* Right: principal quote */}
        <div className="relative">
          <div className="bg-gradient-to-br from-[#0a1628] to-[#1a3a6b] rounded-2xl p-8 ">
            <img
              src={"/images/owner-photo.jpg"}
              alt="owner-photo"
              className="min-h-fit lg:h-96 md:h-32 mx-auto rounded-lg shadow-2xl shadow-navy-500"
            />
            <div
              className="text-[#c9a227] text-4xl font-bold mb-2"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              &ldquo;
            </div>
            <p className="text-white text-lg leading-relaxed italic mb-6">
              We believe every individual holds tremendous potential to compete
              globally. The greatest barrier is often simply communication. That
              is why we exist — to ensure English is no longer an obstacle to
              your success.
            </p>

            <div className="border-t border-white/20 pt-4">
              <p className="text-white font-semibold">Rahmad, Hs.</p>
              <p className="text-[#8fafd4] text-sm">
                Principal, The British English Institute
              </p>
            </div>
          </div>
          {/* Decorative offset block */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c9a227] rounded-2xl -z-10" />
        </div>
      </div>
    </section>
  );
}
