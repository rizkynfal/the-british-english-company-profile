import type { Facility } from "@/types";

interface FacilityCardProps {
  facility: Facility;
}

export default function FacilityCard({ facility }: FacilityCardProps) {
  return (
    <div className="bg-white border border-[#dde6f2] rounded-xl p-6 hover:shadow-md hover:border-[#1a3a6b]/30 transition-all duration-200">
      <div className="text-3xl mb-4">{facility.icon}</div>
      <h3 className="text-[#0a1628] font-bold text-sm mb-2">{facility.title}</h3>
      <p className="text-[#4a5568] text-sm leading-relaxed">{facility.desc}</p>
    </div>
  );
}
