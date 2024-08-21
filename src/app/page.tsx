"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/header";
import Features from "@/components/features";
import About from "@/components/about";
import Services from "@/components/services";
import Gallery from "@/components/gallery";
import Testimonials from "@/components/testimonials";
import Team from "@/components/team";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { websiteData, type WebsiteData } from "@/data";

export default function VeroVentures() {
  const [landingPageData, setLandingPageData] = useState<WebsiteData | null>(
    null
  );
  useEffect(() => {
    setLandingPageData(websiteData);
  }, []);

  return (
    <>
      <Navigation />
      <main>
        {landingPageData ? (
          <>
            <Hero data={landingPageData.hero} />
            <Features data={landingPageData.features} />
            <About data={landingPageData.about} />
            <Services data={landingPageData.services} />
            <Gallery data={landingPageData.gallery} />
            <Testimonials data={landingPageData.testimonials} />
            <Team data={landingPageData.team} />
            <Contact data={landingPageData.contact} />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </main>
      <Footer />
    </>
  );
}
