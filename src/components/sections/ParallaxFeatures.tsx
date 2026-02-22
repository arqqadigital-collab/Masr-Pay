import { useState, useEffect, useRef } from 'react';
import { CreditCard, Shield, Lock, Server, Activity } from 'lucide-react';

const ParallaxFeatures = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      title: "Simple experiences",
      description: "User-friendly payment gateway for businesses of all sizes.",
      visual: (
        <div className="bg-white p-8 rounded-[32px] shadow-2xl w-full max-w-lg border border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <div className="h-3 w-12 bg-gray-200 rounded-full"></div>
            <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center text-[#D62828]"><CreditCard size={16} /></div>
          </div>
          <div className="space-y-4">
            <div className="h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center px-4 text-gray-400 text-sm">Enter card number</div>
            <div className="flex gap-4">
              <div className="h-12 w-1/2 bg-gray-50 rounded-xl border border-gray-100 flex items-center px-4 text-gray-400 text-sm">MM/YY</div>
              <div className="h-12 w-1/2 bg-gray-50 rounded-xl border border-gray-100 flex items-center px-4 text-gray-400 text-sm">CVC</div>
            </div>
            <button className="w-full h-12 bg-[#D62828] text-white rounded-xl font-medium mt-4 shadow-lg shadow-red-200">Pay Now</button>
          </div>
        </div>
      )
    },
    {
      title: "Secure payments",
      description: "Compliant with Central Bank of Egypt regulations.",
      visual: (
        <div className="relative scale-110">
          <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-full"></div>
          <div className="bg-white p-12 rounded-full shadow-2xl border-4 border-green-50 relative z-10 w-80 h-80 flex flex-col items-center justify-center text-center">
            <Shield size={80} className="text-green-600 mb-6" />
            <p className="font-bold text-gray-900 text-2xl">CBE Compliant</p>
            <p className="text-sm text-green-600 font-medium mt-2 bg-green-50 px-3 py-1 rounded-full">100% Secure</p>
          </div>
          <div className="absolute top-0 right-0 p-4 bg-white shadow-lg rounded-2xl animate-bounce">
            <Lock size={24} className="text-[#D62828]" />
          </div>
        </div>
      )
    },
    {
      title: "Reliable performance",
      description: "Powering seamless transactions every time.",
      visual: (
        <div className="bg-white p-10 rounded-[40px] shadow-2xl w-full max-w-xl text-gray-900 border border-gray-100 overflow-hidden relative">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-red-50 rounded-xl text-[#D62828]"><Server size={24} /></div>
            <div>
              <span className="font-bold text-xl block">System Status</span>
              <span className="text-sm text-gray-400">Real-time monitoring</span>
            </div>
            <span className="ml-auto text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-full flex items-center gap-2 font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Operational
            </span>
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 text-sm text-gray-500">
                <Activity size={20} className="text-gray-400" />
                <div className="h-3 flex-1 bg-gray-50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#D62828] to-orange-500 w-[99.9%] rounded-full shadow-[0_0_10px_rgba(214,40,40,0.3)]"></div>
                </div>
                <span className="font-bold text-gray-900 text-base">99.99%</span>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-gray-50 flex justify-between items-end">
            <div>
              <p className="text-gray-400 text-sm mb-2 font-medium uppercase tracking-wider">Transactions/sec</p>
              <p className="text-5xl font-bold text-gray-900 tracking-tight">4,520</p>
            </div>
            <div className="h-16 w-40 flex items-end gap-1.5">
              {[40, 60, 45, 70, 50, 80, 65, 85, 75, 90, 60, 80].map((h, i) => (
                <div key={i} className="w-full bg-gradient-to-t from-[#D62828] to-red-400 rounded-t-md opacity-90" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollPosition = -top;
      const viewportHeight = window.innerHeight;
      const sectionHeight = height - viewportHeight;

      if (sectionHeight <= 0) return;

      let progress = scrollPosition / sectionHeight;
      progress = Math.max(0, Math.min(1, progress));

      const index = Math.floor(progress * features.length);
      setActiveIndex(Math.min(index, features.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [features.length]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-gray-50">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Navigation Dots (Left) */}
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
          {features.map((_, idx) => (
            <div
              key={idx}
              className={`
                w-3 h-3 rounded-full transition-all duration-500 border-2
                ${activeIndex === idx
                  ? 'bg-[#D62828] border-[#D62828] scale-125'
                  : 'bg-transparent border-gray-300'
                }
              `}
            />
          ))}
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-16 w-full relative h-full flex items-center justify-center">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`
                absolute w-full flex flex-col lg:flex-row items-center justify-between gap-16 transition-all duration-700 ease-in-out
                ${activeIndex === idx
                  ? 'opacity-100 translate-y-0 scale-100 blur-0 pointer-events-auto'
                  : activeIndex > idx
                    ? 'opacity-0 -translate-y-20 scale-95 blur-sm pointer-events-none'
                    : 'opacity-0 translate-y-20 scale-95 blur-sm pointer-events-none'
                }
              `}
            >
              {/* Text */}
              <div className="flex-1 lg:max-w-xl">
                <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Visual */}
              <div className="flex-1 flex justify-center w-full">
                {feature.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParallaxFeatures;
