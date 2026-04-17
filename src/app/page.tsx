import { HeroSection } from "@/components/hero";
import { MarqueeRibbon } from "@/components/marquee";
import { OurServicesSection } from "@/components/services";
import { ProcessSection } from "@/components/process";
import { OurWorkSection } from "@/components/projects";
import { TechnologiesSection } from "@/components/technologies";
import { AboutUsSection } from "@/components/about";
import { FAQSection } from "@/components/faq";
import { ContactUsSection } from "@/components/contact-us";

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <MarqueeRibbon />
      <OurServicesSection />
      <ProcessSection />
      <OurWorkSection />
      <TechnologiesSection />
      <AboutUsSection />
      <FAQSection />
      <ContactUsSection />
    </main>
  );
}
