import { useState, useEffect, useRef } from 'react';
import { Shield, Lock, CheckCircle, Server, Activity } from 'lucide-react';

const ParallaxFeatures = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      title: "Simple Experiences",
      description: "User-friendly payment gateway for businesses of all sizes",
      visual: (
        <div className="relative flex justify-center items-center w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[340px] md:h-[340px] bg-[#D62828] rounded-full z-0 shadow-inner"></div>
          <div className="relative z-10 w-full max-w-[320px] bg-white/20 backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] rounded-2xl border border-white/40 p-6 text-white transform transition-transform hover:scale-105">
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="text-[11px] mb-1.5 block font-medium opacity-90">Name</label>
                <div className="h-9 border border-white/40 rounded-md px-3 flex items-center text-xs bg-white/10">Ahmed Mohamed</div>
              </div>
              <div className="w-16">
                <label className="text-[11px] mb-1.5 block font-medium opacity-90">CVV</label>
                <div className="h-9 border border-white/40 rounded-md px-3 flex items-center text-xs bg-white/10">***</div>
              </div>
            </div>
            <div className="mb-4">
              <label className="text-[11px] mb-1.5 block font-medium opacity-90">Card Number</label>
              <div className="h-9 border border-white/40 rounded-md px-3 flex items-center text-xs bg-white/10 tracking-widest">*****************</div>
            </div>
            <div className="mb-6">
              <label className="text-[11px] mb-1.5 block font-medium opacity-90">Expiration Date</label>
              <div className="h-9 border border-white/40 rounded-md px-3 flex items-center text-xs bg-white/10">03/28</div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#b01e1e] rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Secure Payments",
      description: "Compliant with Central Bank of Egypt regulations",
      visual: (
        <div className="relative flex justify-center items-center w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[340px] md:h-[340px] bg-[#D62828] rounded-full z-0 shadow-inner"></div>
          <div className="relative z-10 w-full max-w-[320px] bg-white/20 backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] rounded-2xl border border-white/40 p-8 text-center text-white transform transition-transform hover:scale-105">
            <div className="w-24 h-24 mx-auto bg-white/20 border border-white/30 backdrop-blur-md rounded-full flex items-center justify-center mb-6 relative shadow-inner">
               <Shield size={44} className="text-white" />
               <div className="absolute top-0 right-0 p-2 bg-white shadow-lg rounded-full animate-bounce">
                  <Lock size={16} className="text-[#D62828]" />
               </div>
            </div>
            <h4 className="text-2xl font-extrabold text-white mb-2">CBE Compliant</h4>
            <p className="text-white/80 text-sm mb-6">Built to match local regulations and global security standards.</p>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 border border-white/30 text-white rounded-full text-sm font-bold backdrop-blur-md">
                <CheckCircle size={18} /> 100% Secure
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Reliable Performance",
      description: "Powering seamless transactions every time",
      visual: (
        <div className="relative flex justify-center items-center w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[340px] md:h-[340px] bg-[#D62828] rounded-full z-0 shadow-inner"></div>
          <div className="relative z-10 w-full max-w-[320px] bg-white/20 backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] rounded-2xl border border-white/40 p-8 text-white transform transition-transform hover:scale-105">
            <div className="flex items-center justify-between mb-8">
               <div className="flex items-center gap-3">
                   <div className="p-3 bg-white/20 border border-white/30 rounded-xl text-white backdrop-blur-md shadow-inner"><Server size={22} /></div>
                   <span className="font-extrabold text-lg text-white">System Status</span>
               </div>
               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)] border border-green-200"></div>
            </div>
            <div className="space-y-6">
               <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/80 font-medium">Uptime</span>
                    <span className="font-extrabold text-white">99.99%</span>
                  </div>
                  <div className="h-2.5 bg-black/20 rounded-full overflow-hidden border border-white/10 shadow-inner">
                    <div className="h-full bg-green-400 w-[99.9%] rounded-full shadow-[0_0_10px_rgba(74,222,128,0.6)]"></div>
                  </div>
               </div>
               <div className="pt-6 border-t border-white/20 flex justify-between items-end">
                  <div>
                    <p className="text-white/60 text-[11px] mb-1 font-bold uppercase tracking-wider">Transactions / sec</p>
                    <p className="text-4xl font-extrabold text-white tracking-tight">4,520</p>
                  </div>
                  <Activity size={32} className="text-white mb-1 opacity-90" />
               </div>
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
      const windowHeight = window.innerHeight;
      const scrollableHeight = height - windowHeight;
      
      if (scrollableHeight <= 0) return;

      let progress = -top / scrollableHeight;
      progress = Math.max(0, Math.min(1, progress));

      const index = Math.round(progress * (features.length - 1));
      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [features.length]);

  const handleDotClick = (idx: number) => {
    if (!containerRef.current) return;
    const { top, height } = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollableHeight = height - windowHeight;
    
    const targetProgress = idx / (features.length - 1);
    const targetY = window.scrollY + top + (targetProgress * scrollableHeight);
    
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 relative z-10">
          
          {/* Left Text Content */}
          <div className="flex-1 w-full relative h-[150px] md:h-[200px] flex items-center">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className={`
                  absolute w-full flex flex-col transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                  ${activeIndex === idx 
                    ? 'opacity-100 translate-y-0 blur-0 pointer-events-auto' 
                    : activeIndex > idx 
                      ? 'opacity-0 -translate-y-12 blur-sm pointer-events-none'
                      : 'opacity-0 translate-y-12 blur-sm pointer-events-none'
                  }
                `}
              >
                <h3 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 mb-4 leading-tight tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed max-w-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Visual Area */}
          <div className="flex-1 w-full flex justify-center lg:justify-end items-center h-[400px] lg:h-[500px]">
            <div className="relative w-[340px] h-[340px] md:w-[450px] md:h-[450px] flex justify-center items-center">
              
              {/* Outer Gray Stroke Circle with Rotating Effect */}
              <div 
                className="absolute inset-0 border-[1.5px] border-gray-300 rounded-full z-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ transform: `rotate(${-activeIndex * 120}deg)` }}
              >
                {[0, 1, 2].map((idx) => (
                  <div 
                    key={idx} 
                    className="absolute inset-0 pointer-events-none" 
                    style={{ transform: `rotate(${idx * 120}deg)` }}
                  >
                    <button 
                      onClick={() => handleDotClick(idx)}
                      className={`
                        absolute -top-[8px] left-1/2 -translate-x-1/2 w-[16px] h-[16px] rounded-full transition-all duration-500 pointer-events-auto
                        ${activeIndex === idx 
                          ? 'bg-[#D62828] scale-150 border-4 border-white shadow-[0_0_10px_rgba(214,40,40,0.3)]' 
                          : 'bg-gray-300 hover:bg-gray-400 hover:scale-125 cursor-pointer'
                        }
                      `} 
                      aria-label={`Go to ${features[idx].title}`}
                    />
                  </div>
                ))}
              </div>

              {/* Feature Visual Overlays */}
              <div className="absolute inset-0 z-10 flex justify-center items-center pointer-events-none">
                {features.map((feature, idx) => (
                  <div 
                    key={idx}
                    className={`
                      absolute flex justify-center items-center w-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                      ${activeIndex === idx 
                        ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
                        : activeIndex > idx 
                          ? 'opacity-0 scale-95 -translate-y-12 pointer-events-none'
                          : 'opacity-0 scale-95 translate-y-12 pointer-events-none'
                      }
                    `}
                  >
                    {feature.visual}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxFeatures;
