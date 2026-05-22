import Link from "next/link";
import { NAV_LINKS } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060f1f]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full bg-[#c9a227] flex items-center justify-center flex-shrink-0">
              <span className="text-[#0a1628] font-bold text-xs">BEI</span>
            </div>
            <span className="text-white font-semibold text-sm">
              The British English Institute
            </span>
          </div>
          <p className="text-[#4a5568] text-sm leading-relaxed">
            Palembang&apos;s premier British English training institution,
            empowering learners since 1999.
          </p>
          <p className="text-[#c9a227] text-sm italic mt-4">
            &ldquo;Your Future in English Starts Here!&rdquo;
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-[#c9a227] text-xs font-bold tracking-widest uppercase mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[#4a5568] hover:text-[#8fafd4] text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact summary */}
        <div>
          <h4 className="text-[#c9a227] text-xs font-bold tracking-widest uppercase mb-4">
            Find Us
          </h4>
          <p className="text-[#4a5568] text-sm leading-relaxed mb-3">
            Jl. Padat Karya RT.10 RW.02 No. 2605A, Kel. Sukajaya, Kec.
            Sukarami, Palembang 30151, Sumatera Selatan
          </p>
          <p className="text-[#4a5568] text-sm">📞 082280931409</p>
          <p className="text-[#4a5568] text-sm mt-1">
            📧 thebritishenglishinstitute@gmail.com
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[#4a5568] text-xs">
            © {currentYear} The British English Institute · All rights reserved.
          </p>
          <p className="text-[#4a5568] text-xs">
            NIB: 1803220049546 · NPSN: K9998554
          </p>
        </div>
      </div>
    </footer>
  );
}
