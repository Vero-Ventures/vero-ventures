import { HeroSection } from "@/components/hero";
import { ClientSection } from "@/components/client-section";
import { OurWorkSection } from "@/components/projects";
import { AboutUsSection } from "@/components/about";
import { ContactUsSection } from "@/components/contact-us";
import { OurServicesSection } from "@/components/services";
import { TechnologiesSection } from "@/components/technologies";

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <ClientSection />
      <OurWorkSection />
      <OurServicesSection />
      <TechnologiesSection />
      <AboutUsSection />
      <ContactUsSection />
    </main>
  );
}
