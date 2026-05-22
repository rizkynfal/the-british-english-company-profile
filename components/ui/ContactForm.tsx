"use client";

import { useState, type FormEvent } from "react";

const PROGRAMMES_OPTIONS = [
  "General English",
  "IELTS Preparation",
  "TOEFL Preparation",
  "Business English",
  "English for Kids & Teens",
  "Corporate In-House Training",
] as const;

type Programme = (typeof PROGRAMMES_OPTIONS)[number];

interface FormState {
  name: string;
  phone: string;
  programme: Programme;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    programme: "General English",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello, I would like to enquire about the ${form.programme} programme.\n\nName: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.open(`https://wa.me/6282280931409?text=${text}`, "_blank");
  };

  const inputClass =
    "w-full border border-[#dde6f2] rounded-lg px-4 py-2.5 text-sm text-[#0a1628] focus:outline-none focus:border-[#1a3a6b] transition-colors";

  return (
    <div className="bg-white rounded-2xl p-8">
      <h3
        className="text-[#0a1628] font-bold text-lg mb-6"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        Book a Free Consultation
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full name */}
        <div>
          <label className="text-[#4a5568] text-xs font-semibold block mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="e.g. Budi Santoso"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className={inputClass}
          />
        </div>

        {/* WhatsApp number */}
        <div>
          <label className="text-[#4a5568] text-xs font-semibold block mb-1">
            WhatsApp Number
          </label>
          <input
            type="tel"
            placeholder="e.g. 08123456789"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
            className={inputClass}
          />
        </div>

        {/* Programme of interest */}
        <div>
          <label className="text-[#4a5568] text-xs font-semibold block mb-1">
            Programme of Interest
          </label>
          <select
            value={form.programme}
            onChange={(e) =>
              setForm({ ...form, programme: e.target.value as Programme })
            }
            className={`${inputClass} bg-white`}
          >
            {PROGRAMMES_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="text-[#4a5568] text-xs font-semibold block mb-1">
            Message (Optional)
          </label>
          <textarea
            rows={3}
            placeholder="Tell us about your goals..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#c9a227] hover:bg-[#e0b82d] text-[#0a1628] font-bold py-3 rounded-lg transition-colors text-sm tracking-wide"
        >
          Send Enquiry via WhatsApp
        </button>
      </form>
    </div>
  );
}
