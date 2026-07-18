import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProfessionalSection } from "@/components/professional-section";
import { SpaceSection } from "@/components/space-section";
import { ServicesSection } from "@/components/services-section";
import { TherapiesSection } from "@/components/therapies-section";
import { DifferentialsSection } from "@/components/differentials-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ResultsSection } from "@/components/results-section";
import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ProfessionalSection />
        <SpaceSection />
        <ServicesSection />
        <TherapiesSection />
        <DifferentialsSection />
        <TestimonialsSection />
        <ResultsSection />
        <CtaSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
