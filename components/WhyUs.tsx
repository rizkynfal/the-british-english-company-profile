import SectionLabel from "@/components/ui/SectionLabel";
import { ADVANTAGES } from "@/lib/data";

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#0a1628] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel light>Our Advantages</SectionLabel>
          <h2
            className="text-white text-3xl md:text-4xl font-bold mt-3"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            7 Reasons to Choose Us
          </h2>
          <p className="text-[#8fafd4] mt-3 max-w-xl mx-auto">
            We do not merely teach English — we build communicators.
          </p>
        </div>

        {/* Advantage cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {ADVANTAGES.map((advantage, i) => (
            <div
              key={advantage.label}
              className="border border-white/10 bg-white/5 rounded-xl p-6 hover:bg-white/10 hover:border-[#c9a227]/30 transition-all duration-200"
            >
              <div
                className="text-[#c9a227] text-xl font-bold mb-3"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                0{i + 1}
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">
                {advantage.label}
              </h3>
              <p className="text-[#8fafd4] text-xs leading-relaxed">
                {advantage.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
