import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import MissionStatement from '@/components/sections/MissionStatement';
import ParallaxFeatures from '@/components/sections/ParallaxFeatures';
import CTASection from '@/components/sections/CTASection';
import Partners from '@/components/sections/Partners';
import Compliances from '@/components/sections/Compliances';
import Services from '@/components/sections/Services';
import PromiseSection from '@/components/sections/PromiseSection';
import WhyTrustUs from '@/components/sections/WhyTrustUs';
import Footer from '@/components/layout/Footer';
import DevelopersPage from './DevelopersPage';
import DocumentationPage from './DocumentationPage';
import AboutUsPage from './AboutUsPage';
import StrategicFrameworkPage from './StrategicFrameworkPage';
import FoundersPage from './FoundersPage';
import MediaPressPage from './MediaPressPage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-red-100 selection:text-red-900">
      <Navbar setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' && (
        <main>
          <Hero />
          <MissionStatement />
          <ParallaxFeatures />
          <CTASection />
          <Partners />
          <Compliances />
          <Services />
          <PromiseSection />
          <WhyTrustUs />
        </main>
      )}

      {currentPage === 'developers' && (
        <DevelopersPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'documentations' && (
        <DocumentationPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'about-us' && (
        <AboutUsPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'strategic-framework' && (
        <StrategicFrameworkPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'founders' && (
        <FoundersPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'media-press' && (
        <MediaPressPage setCurrentPage={setCurrentPage} />
      )}

      <Footer />
    </div>
  );
};

export default Index;
