import type {
  NavLink,
  CarouselSlide,
  Programme,
  Facility,
  Advantage,
  Stat,
  ClientSegment,
  ContactItem,
  InstructorFeature,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Vision & Mission", href: "#vision-mission" },
  { label: "Programmes", href: "#programmes" },
  { label: "Facilities", href: "#facilities" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    tag: "Since 1999",
    heading: "Your Future in English\nStarts Here",
    sub: "Palembang's leading British English institution — bridging Indonesians to global success.",
    cta: "Explore Programmes",
    ctaHref: "#programmes",
  },
  {
    tag: "Expert Instructors",
    heading: "Taught by the\nBest in the Field",
    sub: "Rigorously recruited, professionally trained — our instructors are committed to your progress.",
    cta: "Meet the Team",
    ctaHref: "#instructors",
  },
  {
    tag: "World-Class Preparation",
    heading: "IELTS & TOEFL\nPreparation",
    sub: "Achieve Band 6.5–8.0 with our intensive, strategy-focused exam preparation courses.",
    cta: "View Programmes",
    ctaHref: "#programmes",
  },
  {
    tag: "For Everyone",
    heading: "English for Kids,\nTeens & Professionals",
    sub: "From young learners to corporate teams — tailored programmes for every stage of life.",
    cta: "Find Your Programme",
    ctaHref: "#programmes",
  },
];

export const HERO_STATS: Stat[] = [
  { value: "1999", label: "Established" },
  { value: "25+", label: "Years of Excellence" },
  { value: "5", label: "Programme Tracks" },
  { value: "7", label: "Key Advantages" },
];

export const PROGRAMMES: Programme[] = [
  {
    icon: "📚",
    title: "General English",
    subtitle: "For All Levels",
    desc: "Develop core skills in Speaking, Listening, Reading, and Writing — from beginner to advanced. Build confidence for everyday conversation from day one.",
    levels: ["Basic", "Pre-Intermediate", "Intermediate", "Higher Intermediate", "Advanced"],
  },
  {
    icon: "🎓",
    title: "Academic English & Exam Preparation",
    subtitle: "IELTS · TOEFL",
    desc: "Targeted preparation for international qualifications. Our IELTS programme aims for Band 6.5–8.0; TOEFL iBT/ITP covers all technical test-taking strategies.",
    levels: ["IELTS Preparation (Band 6.5–8.0)", "TOEFL iBT", "TOEFL ITP"],
  },
  {
    icon: "💼",
    title: "Business English for Professionals",
    subtitle: "Workplace Communication",
    desc: "Mastery of professional English for the modern workplace — from presentations and business writing to negotiation and chairing meetings.",
    levels: ["Presentations", "Business Writing", "Negotiation & Meetings"],
  },
  {
    icon: "🧒",
    title: "English for Kids & Teens",
    subtitle: "Ages 6–17",
    desc: "Interactive, play-based learning through games, stories, and creative activities. Builds a strong English foundation from an early age.",
    levels: ["Level 1", "Level 2", "Level 3", "Level 4"],
  },
  {
    icon: "🏢",
    title: "Corporate In-House Training",
    subtitle: "Tailored for Organisations",
    desc: "Exclusive training delivered at your premises, customised to your industry's specific communication needs and objectives.",
    levels: ["Bespoke curriculum", "Flexible scheduling", "Industry-specific content"],
  },
];

export const FACILITIES: Facility[] = [
  {
    icon: "🖥️",
    title: "Modern Interactive Classrooms",
    desc: "Air-conditioned rooms equipped with Smart TV and projector technology for rich audio-visual learning.",
  },
  {
    icon: "📖",
    title: "Self-Access Centre / Library",
    desc: "A dedicated collection of books, magazines, and international exam preparation materials (IELTS/TOEFL).",
  },
  {
    icon: "💻",
    title: "Computer Laboratory",
    desc: "A fully equipped lab for computer-delivered test simulation and digital learning activities.",
  },
  {
    icon: "🗣️",
    title: "English-Only Zone",
    desc: "A designated area where students practise speaking exclusively in English — immersion in action.",
  },
  {
    icon: "☕",
    title: "Student Lounge",
    desc: "A relaxed space for peer discussion and informal exchanges with instructors outside the classroom.",
  },
  {
    icon: "📡",
    title: "High-Speed Wi-Fi",
    desc: "Fast, reliable internet access throughout the building for research and online learning resources.",
  },
];

export const ADVANTAGES: Advantage[] = [
  {
    label: "Well Trained Instructors",
    detail: "All instructors undergo a rigorous Teachers Development Programme before joining the team.",
  },
  {
    label: "Medium-Size Classes",
    detail: "Limited class sizes ensure personalised attention and a more effective learning environment.",
  },
  {
    label: "Interactive Eclectic Method",
    detail: "A practice-based curriculum that encourages active speaking from day one.",
  },
  {
    label: "Modern Facilities",
    detail: "Comfortable, technology-enabled classrooms designed for 21st-century learning.",
  },
  {
    label: "Confidence Building",
    detail: "Personal guidance and ample opportunity to express yourself build genuine speaking confidence.",
  },
  {
    label: "Varied Learning Experiences",
    detail: "Dynamic, engaging sessions led by trained instructors — never dull, always purposeful.",
  },
  {
    label: "Robust Support System",
    detail: "Multimedia resources, well-planned materials, and expert instructors working together.",
  },
];

export const INSTRUCTOR_FEATURES: InstructorFeature[] = [
  { icon: "🎓", label: "University Graduates", sub: "From reputable institutions" },
  { icon: "✅", label: "Competency Tested", sub: "English & teaching skills" },
  { icon: "📋", label: "Certified Training", sub: "Mandatory dev programme" },
  { icon: "🤝", label: "Admin Support", sub: "Smooth operations" },
];

export const CLIENT_SEGMENTS: ClientSegment[] = [
  {
    icon: "🧑‍🎓",
    label: "Students & Undergraduates",
    desc: "Academic English and exam preparation for those pursuing higher education or scholarships abroad.",
  },
  {
    icon: "👔",
    label: "Professionals & Executives",
    desc: "Business English and presentation skills for corporate environments and career advancement.",
  },
  {
    icon: "🏛️",
    label: "Government & Public Sector",
    desc: "In-house training tailored to the specific needs of government agencies and institutions.",
  },
  {
    icon: "🏢",
    label: "Private Corporations",
    desc: "Bespoke corporate training delivered at your offices, aligned with your industry's demands.",
  },
];

export const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: "📍",
    label: "Address",
    value:
      "Jl. Padat Karya RT.10 RW.02 No. 2605A, Kel. Sukajaya, Kec. Sukarami, Palembang 30151, Sumatera Selatan",
  },
  { icon: "📞", label: "WhatsApp", value: "082280931409" },
  { icon: "📧", label: "Email", value: "thebritishenglishinstitute@gmail.com" },
  { icon: "📱", label: "Instagram", value: "@THEBRITISHENGLISHINSTITUTE" },
];

export const MISSION_ITEMS = [
  {
    title: "Quality Education",
    detail:
      "Comprehensive programmes from foundational skills to IELTS/TOEFL preparation.",
  },
  {
    title: "Innovative Teaching",
    detail:
      "Interactive, communicative, and enjoyable methods for natural language acquisition.",
  },
  {
    title: "Professional Instructors",
    detail:
      "Competent, experienced educators ensuring the best guidance for every student.",
  },
  {
    title: "Conducive Environment",
    detail:
      "Modern facilities that foster an active, English-speaking ecosystem.",
  },
  {
    title: "Human Capital Development",
    detail:
      "Equipping learners with global communication skills for education and career success.",
  },
];
