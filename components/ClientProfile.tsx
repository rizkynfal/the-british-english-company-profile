import SectionLabel from "@/components/ui/SectionLabel";
import { CLIENT_SEGMENTS } from "@/lib/data";

export default function ClientProfile() {
  return (
    <section className="bg-[#f4f7fc] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel>Who We Serve</SectionLabel>
          <h2
            className="text-[#0a1628] text-3xl md:text-4xl font-bold mt-3"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Client Profile
          </h2>
          <p className="text-[#4a5568] mt-3 max-w-xl mx-auto">
            {/* Our programmes are designed for well-educated urban learners,
            from individual students to large organisations. */}
            The British English Institute merancang program-programnya untuk
            kalangan well educated urbaners khususnya kalangan eksekutif,
            karyawan negeri dan swasta, kaum profesional, pelajar dan mahasiswa.
          </p>
        </div>
        {/* Segment cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENT_SEGMENTS.map((segment) => (
            <div
              key={segment.label}
              className="bg-white border border-[#dde6f2] rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-4xl mb-4">{segment.icon}</div>
              <h3 className="text-[#0a1628] font-bold text-sm mb-2">
                {segment.label}
              </h3>
              <p className="text-[#4a5568] text-xs leading-relaxed">
                {segment.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
