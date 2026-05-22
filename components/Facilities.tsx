import SectionLabel from "@/components/ui/SectionLabel";
import FacilityCard from "@/components/ui/FacilityCard";
import { FACILITIES } from "@/lib/data";

export default function Facilities() {
  return (
    <section id="facilities" className="bg-[#f4f7fc] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel>The Learning Environment</SectionLabel>
          <h2
            className="text-[#0a1628] text-3xl md:text-4xl font-bold mt-3"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Building Facilities
          </h2>
          <p className="text-[#4a5568] mt-3 max-w-xl mx-auto">
            Modern, purpose-built spaces designed to immerse you in English from
            the moment you arrive.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((facility) => (
            <FacilityCard key={facility.title} facility={facility} />
          ))}
        </div>
      </div>
    </section>
  );
}
