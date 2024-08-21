import { HeroDescription, HeroSection, HeroTitle } from "@/components/hero";
import { ClientSection } from "@/components/client-section";
import { OurWorkSection } from "@/components/projects";
import { AboutUsSection } from "@/components/about";
import { ContactUsSection } from "@/components/contact-us";

export default function LandingPage() {
  return (
    <main>
      <HeroSection>
        <HeroTitle>Innovative Software Solutions for Your Business</HeroTitle>
        <HeroDescription>
          We transform your ideas into powerful, scalable software. Let's build
          the future together.
        </HeroDescription>
      </HeroSection>
      <ClientSection />
      <OurWorkSection />
      <AboutUsSection />
      <ContactUsSection />
    </main>
  );
}
