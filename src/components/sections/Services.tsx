import { useState, useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import MasrPayButton from '../ui/MasrPayButton';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="services">
      {/* Subtle Pattern Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#e5e7eb" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">MasrPay Services</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">End-to-end simplified services designed for merchants and consumers, to drive financial inclusion.</p>
        </div>

        <div
          ref={sectionRef}
          className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
        >
          {/* Left: Image Visualization */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Mobile Payment Gateway"
                className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Graphics Overlay */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center gap-3 animate-pulse">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">Status</p>
                  <p className="text-sm font-bold text-gray-900">Transaction Successful</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 text-left">
            <h3 className="text-4xl md:text-5xl font-bold text-[#D62828] mb-8 leading-tight">Payment Gateway</h3>
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                Your security is non-negotiable with the enterprise-grade security powered by the <span className="font-semibold text-gray-900">CBE license</span>, <span className="font-semibold text-gray-900">NBE integration</span>, <span className="font-semibold text-gray-900">PCI DSS v4.0.1 Compliance</span>, and <span className="font-semibold text-gray-900">Secure Local Data Center</span>.
              </p>
            </div>

            <div className="mt-10 flex gap-4">
              <MasrPayButton className="px-8">Get Started</MasrPayButton>
              <button className="flex items-center gap-2 px-6 py-3 font-bold text-[#D62828] hover:bg-red-50 rounded-full transition-colors">
                Learn technical details <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
