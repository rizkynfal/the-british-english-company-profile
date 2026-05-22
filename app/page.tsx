import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import VisionMission from "@/components/VisionMission";
import Programmes from "@/components/Programmes";
import Facilities from "@/components/Facilities";
import WhyUs from "@/components/WhyUs";
import Instructors from "@/components/Instructors";
import ClientProfile from "@/components/ClientProfile";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <VisionMission />
      <Programmes />
      <Facilities />
      <WhyUs />
      <Instructors />
      <ClientProfile />
      <Contact />
      <Footer />
    </main>
  );
}
