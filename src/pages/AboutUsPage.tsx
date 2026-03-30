import { ArrowRight, CreditCard, Shield, CheckCircle, LayoutTemplate, Zap, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import DecorativePattern from '@/components/ui/DecorativePattern';
import Breadcrumb from '@/components/ui/MasrPayBreadcrumb';

interface FeatureGridItemProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const FeatureGridItem = ({ icon: Icon, title, desc }: FeatureGridItemProps) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 hover:shadow-lg hover:border-red-100 transition-all duration-300 h-full">
    <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-[#D62828] mb-4">
      <Icon size={20} />
    </div>
    <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

interface AboutUsPageProps {
  setCurrentPage: (page: string) => void;
}

const AboutUsPage = ({ setCurrentPage }: AboutUsPageProps) => {
  const breadcrumbPaths = [
    { name: 'Home page', onClick: () => setCurrentPage('home') },
    { name: 'About Us', onClick: null }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FB] relative overflow-hidden">
      <DecorativePattern className="top-0 right-0 w-[40rem] md:w-[60rem] translate-x-1/4 -translate-y-1/4 opacity-10" />
      <Breadcrumb paths={breadcrumbPaths} />
      
      {/* Hero Section */}
      <section className="pt-10 pb-20 px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#D62828] font-bold tracking-widest uppercase mb-4 text-sm">About Us</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-8">
            A Payment Gateway that empowers your business
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10 max-w-3xl mx-auto">
            MasrPay is a simple and secure payment gateway, striving to become a preferred partner in digital payments, with reliable financial services that drive growth through delivering cutting-edge solutions to empower businesses and redefine industry standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-8 py-4 bg-[#D62828] text-white rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-red-200 flex flex-col items-center sm:items-start min-w-[200px]">
              <span className="text-xs text-white/80 uppercase tracking-wider mb-1">Merchants</span>
              <span className="flex items-center gap-2">
                Request a Demo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <button className="group relative px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:border-[#D62828] hover:text-[#D62828] active:scale-95 flex flex-col items-center sm:items-start min-w-[200px]">
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1 group-hover:text-red-400">Partners</span>
              <span className="flex items-center gap-2">
                Contact Us <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="px-6 py-20 relative z-10 bg-white border-y border-gray-100 overflow-hidden">
        <style>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }
          .animate-float { animation: float 5s ease-in-out infinite; }
          .animate-float-delayed { animation: float 6s ease-in-out infinite 2s; }
          .animate-float-fast { animation: float 4s ease-in-out infinite 1s; }
        `}</style>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/2 text-left z-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
              This is what we do...
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              MasrPay designs customized payment solutions built around the unique needs of the Egyptian market, empowering businesses of all sizes with secure, seamless, and scalable tools.
            </p>
          </div>

          {/* Right Visual (Popups) */}
          <div className="w-full lg:w-1/2 relative h-[350px] md:h-[400px] flex items-center justify-center z-10 scale-[0.65] sm:scale-90 md:scale-100 mt-10 lg:mt-0">
            <div className="absolute w-[300px] h-[300px] bg-red-50 rounded-full blur-3xl opacity-80 z-0"></div>

            {/* Central Checkout Card */}
            <div className="absolute z-10 w-72 bg-white p-6 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 transform -translate-x-8 -translate-y-4">
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100">
                  <CreditCard size={24} className="text-gray-700"/>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 font-medium">Total Amount</p>
                  <span className="text-lg font-bold text-gray-900">EGP 2,450.00</span>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="h-2 w-full bg-gray-100 rounded-full"></div>
                <div className="h-2 w-4/5 bg-gray-100 rounded-full"></div>
                <div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
              </div>
              <button className="w-full py-3 bg-gray-900 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2">
                Process Payment <ArrowRight size={16} />
              </button>
            </div>

            {/* Popup 1: Success */}
            <div className="absolute z-30 w-64 bg-white p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-green-100 transform translate-x-16 translate-y-24 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Payment Successful</p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Transaction ID: #MR8923</p>
                </div>
              </div>
            </div>

            {/* Popup 2: Security */}
            <div className="absolute z-20 w-56 bg-gray-900 p-4 rounded-2xl shadow-2xl border border-gray-700 transform translate-x-28 -translate-y-24 animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 shrink-0">
                  <Shield size={16} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Bank Grade Security</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Encrypted Payload</p>
                </div>
              </div>
            </div>

            {/* Popup 3: API Active */}
            <div className="absolute z-20 bg-white px-4 py-3 rounded-2xl shadow-lg border border-gray-100 transform -translate-x-32 translate-y-16 animate-float-fast flex items-center gap-3">
              <div className="w-2 h-2 bg-[#D62828] rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-gray-800">API Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* Behind Every Transaction */}
      <section className="px-6 py-24 relative z-10 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Behind Every Transaction..." 
            centered={true}
          />
          <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            <div className="snap-start shrink-0 w-[85vw] sm:w-[320px] md:w-auto"><FeatureGridItem icon={Shield} title="Confidence in every payment" desc="Advanced protection that keeps every transaction secure." /></div>
            <div className="snap-start shrink-0 w-[85vw] sm:w-[320px] md:w-auto"><FeatureGridItem icon={CheckCircle} title="Payments made effortless" desc="Smooth checkout experiences for businesses and customers." /></div>
            <div className="snap-start shrink-0 w-[85vw] sm:w-[320px] md:w-auto"><FeatureGridItem icon={LayoutTemplate} title="Solutions that adapt to you" desc="Flexible integrations and payment methods that grow with you." /></div>
            <div className="snap-start shrink-0 w-[85vw] sm:w-[320px] md:w-auto"><FeatureGridItem icon={Zap} title="Faster operations" desc="Streamlined processes that save time and boost productivity." /></div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-24 relative z-10 bg-white">
        <DecorativePattern className="bottom-0 left-0 w-[40rem] -translate-x-1/4 translate-y-1/4" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
          
          {/* Sticky Left Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our Story</h2>
              <div className="w-16 h-1.5 bg-[#D62828] rounded-full mb-8"></div>
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
                <Heart className="w-10 h-10 text-[#D62828] mb-6" />
                <p className="text-2xl font-semibold text-gray-900 leading-snug">
                  "Merchant First...<br />
                  <span className="text-[#D62828]">Customer at Heart</span>"
                </p>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="w-full lg:w-2/3 prose prose-lg prose-gray text-gray-600 max-w-none space-y-8">
            <p className="text-xl leading-relaxed">
              MasrPay was founded with a singular vision: to redefine the financial landscape of Egypt through innovation and local empowerment.
            </p>
            <p className="leading-relaxed">
              From the very beginning, our goal has been to create financial technology solutions that respond to the evolving needs of the Egyptian market while supporting the country's digital transformation.
            </p>
            <div className="pl-6 border-l-4 border-[#D62828] py-2 my-10 bg-red-50/50 rounded-r-xl pr-6">
              <h3 className="text-gray-900 font-bold text-xl mb-2 mt-0">Our name reflects this commitment.</h3>
              <p className="text-gray-700 m-0">
                MasrPay proudly carries the name of Egypt, symbolizing our deep connection to the market we serve and our belief in its digital future. It represents a brand rooted in local understanding and dedicated to empowering businesses and consumers across the country.
              </p>
            </div>
            <p className="leading-relaxed">
              What began as a bold step to bridge the gap in non-bank payment solutions has quickly grown into a journey of strategic expansion and national recognition. Supported by international consultation on digital readiness and strengthened by a transition toward a shareholding structure, MasrPay has continuously expanded its ambitions to meet the demands of a modern and rapidly evolving economy.
            </p>
            <p className="leading-relaxed">
              Our evolution has been defined by key milestones, from achieving formal recognition by the Central Bank of Egypt to building strong partnerships with leading financial institutions and global technology partners. These achievements have helped position MasrPay as a trusted player in the country's fintech ecosystem.
            </p>
            <p className="leading-relaxed">
              But growth alone has never been our objective. We have focused on continuous innovation, investing in state-of-the-art infrastructure to ensure that every transaction is supported by world-class standards of security and reliability.
            </p>
            <p className="leading-relaxed font-medium text-gray-800">
              Today, MasrPay stands as a comprehensive fintech ecosystem, offering advanced payment gateways, developer-focused SDKs, and seamless merchant financial services designed to simplify and strengthen digital payments.
            </p>
            <p className="leading-relaxed">
              Our story is one of transformation, turning challenges into opportunities and building a lasting impact through financial inclusion and technological excellence for every business and consumer we serve.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
