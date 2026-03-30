import { ArrowRight, Play, Target, Eye, Users, Zap, Star, Settings, Shield, TrendingUp, Landmark, Banknote, Apple, Store } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import DecorativePattern from '@/components/ui/DecorativePattern';
import Breadcrumb from '@/components/ui/MasrPayBreadcrumb';

interface StrategicFrameworkPageProps {
  setCurrentPage: (page: string) => void;
}

const StrategicFrameworkPage = ({ setCurrentPage }: StrategicFrameworkPageProps) => {
  const breadcrumbPaths = [
    { name: 'Home page', onClick: () => setCurrentPage('home') },
    { name: 'About Us', onClick: null },
    { name: 'Strategic Framework', onClick: null }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FB] relative overflow-hidden">
      <DecorativePattern className="top-0 right-0 w-[40rem] md:w-[60rem] translate-x-1/4 -translate-y-1/4 opacity-10" />
      <Breadcrumb paths={breadcrumbPaths} />

      {/* Hero Section */}
      <section className="pt-10 pb-20 px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#D62828] font-bold tracking-widest uppercase mb-4 text-sm">Strategic Framework</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            MasrPay... <br />
            <span className="text-[#D62828]">The future is cashless</span>
          </h1>
          
          <div className="mt-12 mb-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-8 py-4 bg-[#D62828] text-white rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-red-200 flex flex-col items-center sm:items-start min-w-[220px]">
              <span className="text-xs text-white/80 uppercase tracking-wider mb-1">Merchants</span>
              <span className="flex items-center gap-2">
                Request a Demo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <button className="group relative px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:border-[#D62828] hover:text-[#D62828] active:scale-95 flex flex-col items-center sm:items-start min-w-[220px]">
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1 group-hover:text-red-400">Partners</span>
              <span className="flex items-center gap-2">
                Contact Us <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Download App Buttons */}
          <div className="pt-8 border-t border-gray-200/60 max-w-2xl mx-auto">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Download App</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center gap-3 bg-gray-900 text-white px-5 py-2.5 rounded-xl hover:bg-black transition-colors transform hover:scale-105">
                <Play size={20} className="text-green-400" />
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-gray-300">GET IT ON</div>
                  <div className="text-sm font-semibold leading-tight">Google Play</div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-gray-900 text-white px-5 py-2.5 rounded-xl hover:bg-black transition-colors transform hover:scale-105">
                <Apple size={22} className="text-white" />
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-gray-300">Download on the</div>
                  <div className="text-sm font-semibold leading-tight">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-gray-900 text-white px-5 py-2.5 rounded-xl hover:bg-black transition-colors transform hover:scale-105">
                <Store size={20} className="text-red-500" />
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-gray-300">EXPLORE IT ON</div>
                  <div className="text-sm font-semibold leading-tight">AppGallery</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white relative z-10 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission */}
          <div className="bg-[#F8F9FB] rounded-[32px] p-10 lg:p-12 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-[#D62828] mb-8 group-hover:scale-110 transition-transform duration-300">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              MasrPay aims to drive economic growth and promote financial inclusion by enabling seamless and adaptable financial experiences for our customers to reshape Egypt's financial landscape by providing innovative and secure financial technology solutions.
            </p>
          </div>

          {/* Vision */}
          <div className="relative group">
            <DecorativePattern className="-top-12 -right-12 w-full lg:w-[120%] h-auto opacity-[0.25] z-0 transition-transform duration-500 group-hover:scale-105" />
            <div className="bg-[#1a1a1a] rounded-[32px] p-10 lg:p-12 border border-gray-800 hover:shadow-2xl transition-all duration-300 shadow-xl relative z-10 h-full">
              <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300 border border-gray-700">
                <Eye size={32} />
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                To build a cashless ecosystem that connects the whole payments through building secure, sustainable, and customer-centric financial innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeading 
            title="Core Values" 
            subtitle="The fundamental principles that guide our everyday operations and strategic direction."
          />
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              { name: "Customer-Centricity", icon: Users },
              { name: "Agility", icon: Zap },
              { name: "Innovation", icon: Star },
              { name: "Automation at the Core", icon: Settings },
              { name: "Compliance", icon: Shield },
              { name: "Business empowerment", icon: TrendingUp }
            ].map((value, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-full px-6 py-4 flex items-center gap-3 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300 hover:-translate-y-1 group">
                <div className="text-[#D62828] group-hover:scale-110 transition-transform">
                  <value.icon size={20} />
                </div>
                <span className="font-bold text-gray-800 text-lg">{value.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-24 bg-white relative z-10 border-t border-gray-100">
        <DecorativePattern className="bottom-0 left-0 w-[40rem] -translate-x-1/4 translate-y-1/4" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeading 
            title="Strategic Goals" 
            subtitle="Our roadmap to driving impact and scaling financial technology across Egypt."
          />

          <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            
            <div className="snap-start shrink-0 w-[85vw] sm:w-[350px] md:w-auto bg-[#F8F9FB] p-8 rounded-3xl border border-gray-100 hover:border-red-100 hover:shadow-xl transition-all duration-300 lg:col-span-2 h-full">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#D62828] mb-6">
                <Star size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Establish Brand Credibility and Accelerate Market Penetration</h3>
              <p className="text-gray-600 leading-relaxed">
                Build a reputation as a reliable, secure, and customer-centric fintech provider in Egypt through targeted marketing campaigns, transparent communication, exceptional customer service, and innovative product offerings tailored to the needs of the unbanked, underbanked, and specific business segments.
              </p>
            </div>

            <div className="snap-start shrink-0 w-[85vw] sm:w-[350px] md:w-auto bg-[#F8F9FB] p-8 rounded-3xl border border-gray-100 hover:border-red-100 hover:shadow-xl transition-all duration-300 h-full">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#D62828] mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Drive Continuous Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuously invest in research and development to create new and improved payment solutions that meet the evolving needs of customers and businesses in Egypt, maintaining a competitive edge and ensuring long-term growth.
              </p>
            </div>

            <div className="snap-start shrink-0 w-[85vw] sm:w-[350px] md:w-auto bg-[#F8F9FB] p-8 rounded-3xl border border-gray-100 hover:border-red-100 hover:shadow-xl transition-all duration-300 h-full">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#D62828] mb-6">
                <Landmark size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ensure Regulatory Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                Maintain strict adherence to regulatory requirements in Egypt, ensuring a secure and trustworthy platform for customers.
              </p>
            </div>

            <div className="snap-start shrink-0 w-[85vw] sm:w-[350px] md:w-auto bg-[#F8F9FB] p-8 rounded-3xl border border-gray-100 hover:border-red-100 hover:shadow-xl transition-all duration-300 h-full">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#D62828] mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Build and Retain a High-Performing Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Attract, develop, and retain top talent in technology, marketing, sales, and customer support to drive innovation, ensure operational excellence, and support the company's growth and expansion plans.
              </p>
            </div>

            <div className="snap-start shrink-0 w-[85vw] sm:w-[350px] md:w-auto bg-[#F8F9FB] p-8 rounded-3xl border border-gray-100 hover:border-red-100 hover:shadow-xl transition-all duration-300 h-full">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#D62828] mb-6">
                <Banknote size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure Funding for Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Raise capital from investors to support marketing efforts, product development, talent acquisition, and market expansion in Egypt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StrategicFrameworkPage;
