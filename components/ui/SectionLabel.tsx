interface SectionLabelProps {
  children: React.ReactNode;
  /** Use on dark backgrounds */
  light?: boolean;
}

/**
 * Small all-caps label shown above section headings.
 * Renders gold on both light and dark backgrounds.
 */
export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  void light; // colour is always gold; prop reserved for future variants
  return (
    <span className="text-[#c9a227] text-xs font-bold tracking-widest uppercase">
      {children}
    </span>
  );
}
