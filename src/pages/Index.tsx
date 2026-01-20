import { useCountry } from "@/contexts/CountryContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogosMarquee from "@/components/LogosMarquee";
import VideoSection from "@/components/VideoSection";
import ContentGallery from "@/components/ContentGallery";
import ReasonsSection from "@/components/ReasonsSection";
import BenefitsFAQ from "@/components/BenefitsFAQ";
import PricingComparison from "@/components/PricingComparison";
import PricingPlans from "@/components/PricingPlans";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  const { country } = useCountry();
  
  return (
    <main className={`min-h-screen bg-background ${country === 'mozambique' ? 'theme-mozambique' : 'theme-angola'}`}>
      <Header />
      <HeroSection />
      <LogosMarquee />
      <VideoSection />
      <ContentGallery />
      <ReasonsSection />
      <BenefitsFAQ />
      <PricingComparison />
      <PricingPlans />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
