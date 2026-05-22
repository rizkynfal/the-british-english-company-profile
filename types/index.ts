// ─── Navigation ─────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

// ─── Carousel ────────────────────────────────────────────────────────────────
export interface CarouselSlide {
  tag: string;
  heading: string;
  sub: string;
  cta: string;
  ctaHref: string;
}

// ─── Programmes ──────────────────────────────────────────────────────────────
export interface Programme {
  icon: string;
  title: string;
  subtitle: string;
  desc: string;
  levels: string[];
}

// ─── Facilities ──────────────────────────────────────────────────────────────
export interface Facility {
  icon: string;
  title: string;
  desc: string;
}

// ─── Why Us ──────────────────────────────────────────────────────────────────
export interface Advantage {
  label: string;
  detail: string;
}

// ─── Stats ───────────────────────────────────────────────────────────────────
export interface Stat {
  value: string;
  label: string;
}

// ─── Client Profile ──────────────────────────────────────────────────────────
export interface ClientSegment {
  icon: string;
  label: string;
  desc: string;
}

// ─── Contact ─────────────────────────────────────────────────────────────────
export interface ContactItem {
  icon: string;
  label: string;
  value: string;
}

// ─── Instructor Feature ──────────────────────────────────────────────────────
export interface InstructorFeature {
  icon: string;
  label: string;
  sub: string;
}
