import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import MissionStatement from '@/components/sections/MissionStatement';
import ParallaxFeatures from '@/components/sections/ParallaxFeatures';
import CTASection from '@/components/sections/CTASection';
import Partners from '@/components/sections/Partners';
import Services from '@/components/sections/Services';
import PromiseSection from '@/components/sections/PromiseSection';
import WhyTrustUs from '@/components/sections/WhyTrustUs';
import Footer from '@/components/layout/Footer';

const Index = () => (
  <div className="font-sans antialiased text-gray-900 bg-white selection:bg-red-100 selection:text-red-900">
    <Navbar />
    <Hero />
    <MissionStatement />
    <ParallaxFeatures />
    <CTASection />
    <Partners />
    <Services />
    <PromiseSection />
    <WhyTrustUs />
    <Footer />
  </div>
);

export default Index;
