import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import AboutPreview from "@/components/AboutPreview";
import ValuesSection from "@/components/ValuesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LatestPosts from "@/components/LatestPosts";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const Index = () => {
  return (
    <div className="min-h-screen">
      <JsonLd />
      <Navbar />
      <HeroSection />
      <IntroSection />
      <AboutPreview />
      <ValuesSection />
      <TestimonialsSection />
      <LatestPosts />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
