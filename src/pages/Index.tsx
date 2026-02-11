import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ValuesSection from "@/components/ValuesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LatestPosts from "@/components/LatestPosts";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <IntroSection />
      <SectionDivider />
      <ValuesSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <LatestPosts />
      <SectionDivider />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
