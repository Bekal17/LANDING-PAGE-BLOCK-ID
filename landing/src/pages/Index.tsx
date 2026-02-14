import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import DocsSection from "@/components/DocsSection";
import ApiSection from "@/components/ApiSection";
import RoadmapSection from "@/components/RoadmapSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ProductSection />
      <DocsSection />
      <ApiSection />
      <RoadmapSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
