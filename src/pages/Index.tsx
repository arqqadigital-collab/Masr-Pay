import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import MissionStatement from '@/components/sections/MissionStatement';
import ParallaxFeatures from '@/components/sections/ParallaxFeatures';
import CTASection from '@/components/sections/CTASection';
import Partners from '@/components/sections/Partners';

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <MissionStatement />
    <ParallaxFeatures />
    <CTASection />
    <Partners />
  </div>
);

export default Index;
