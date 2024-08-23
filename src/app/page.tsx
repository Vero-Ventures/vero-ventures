import { HeroSection } from "@/components/hero";
import { OurWorkSection } from "@/components/projects";
import { AboutUsSection } from "@/components/about";
import { ContactUsSection } from "@/components/contact-us";
import { OurServicesSection } from "@/components/services";
import { TechnologiesSection } from "@/components/technologies";

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <OurWorkSection />
      <TechnologiesSection />
      <OurServicesSection />
      <AboutUsSection />
      <ContactUsSection />
    </main>
  );
}
