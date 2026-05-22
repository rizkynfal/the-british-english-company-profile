import SectionLabel from "@/components/ui/SectionLabel";
import { MISSION_ITEMS } from "@/lib/data";

export default function VisionMission() {
  return (
    <section id="vision-mission" className="bg-[#f4f7fc] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel>Our Purpose</SectionLabel>
          <h2
            className="text-[#0a1628] text-3xl md:text-4xl font-bold mt-3"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Vision &amp; Mission
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-[#0a1628] rounded-2xl p-8 text-white">
            <div className="w-10 h-10 rounded-lg bg-[#c9a227]/20 border border-[#c9a227]/30 flex items-center justify-center mb-5">
              <span className="text-[#c9a227] text-lg">◈</span>
            </div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Vision
            </h3>
            <p className="text-[#8fafd4] leading-relaxed">
              To become the leading English language training institution that
              bridges Indonesian society towards global success through academic
              excellence and internationally standardised communication fluency.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white border border-[#dde6f2] rounded-2xl p-8">
            <div className="w-10 h-10 rounded-lg bg-[#1a3a6b]/10 flex items-center justify-center mb-5">
              <span className="text-[#1a3a6b] text-lg">◉</span>
            </div>
            <h3
              className="text-[#0a1628] text-xl font-bold mb-5"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Mission
            </h3>
            <ul className="space-y-3">
              {MISSION_ITEMS.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="text-[#c9a227] mt-1 flex-shrink-0">✦</span>
                  <div>
                    <span className="text-[#0a1628] font-semibold text-sm">
                      {item.title}:{" "}
                    </span>
                    <span className="text-[#4a5568] text-sm">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
