import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { CompanySection } from '@/components/sections/CompanySection';
import { ContactSection } from '@/components/sections/ContactSection';
import { BriefingSection } from '@/components/sections/BriefingForm';
import { Hero } from '@/components/sections/Hero';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { SpecialtiesSection } from '@/components/sections/SpecialtiesSection';
import { PortfolioSection } from '@/components/portfolio/PortfolioSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CompanySection />
        <PortfolioSection />
        <SpecialtiesSection />
        <ProcessSection />
        <BriefingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
