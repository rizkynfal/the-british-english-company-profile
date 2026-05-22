import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "@/components/ui/ContactForm";
import { CONTACT_ITEMS } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0a1628] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <SectionLabel light>Get in Touch</SectionLabel>
            <h2
              className="text-white text-3xl md:text-4xl font-bold mt-3 mb-6"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Ready to Master English?
            </h2>
            <p className="text-[#8fafd4] leading-relaxed mb-8">
              Do not let language barriers hold you back. Join hundreds of
              alumni who have successfully expanded their global reach with The
              British English Institute.
            </p>

            {/* Offers */}
            <div className="space-y-4 mb-10">
              {[
                {
                  title: "Free Consultation",
                  detail: "Contact us to determine your current English level.",
                },
                {
                  title: "Trial Class",
                  detail:
                    "Experience interactive learning before committing to enrolment.",
                },
                {
                  title: "Special Offers",
                  detail:
                    "Discounts available for group and corporate enrolments.",
                },
              ].map((offer) => (
                <div key={offer.title} className="flex gap-3">
                  <span className="text-[#c9a227] mt-0.5 flex-shrink-0">✦</span>
                  <div>
                    <span className="text-white font-semibold text-sm">
                      {offer.title}:{" "}
                    </span>
                    <span className="text-[#8fafd4] text-sm">{offer.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[#c9a227] text-xs font-semibold tracking-wide mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-[#d0dcea] text-sm leading-relaxed">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
