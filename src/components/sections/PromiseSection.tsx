import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const promises = [
  {
    title: "Customer-Centric Solution",
    description: "MasrPay offers tailored financial solutions that address the needs of businesses of all sizes, even the underserved ones, with a strong focus on ease-of-use, security, and integration with existing business needs.",
    video: "https://res.cloudinary.com/dcjufshrh/video/upload/v1773655265/shutterstock_3784665339_ldk62c.mov"
  },
  {
    title: "Strong Local Expertise",
    description: "MasrPay deeply understands the Egyptian market's needs; therefore, our service is perfectly tailored to ensure market relevance and rapid adoption.",
    video: "https://res.cloudinary.com/dcjufshrh/video/upload/v1773656739/shutterstock_3551107621_bcjwyc.mov"
  },
  {
    title: "Agility & Flexibility",
    description: "MasrPay is designed to quickly adapt to the changing market needs, empowering businesses to stay ahead with flexible, future-ready payment solutions.",
    video: "https://res.cloudinary.com/dcjufshrh/video/upload/v1773655329/shutterstock_3821502997_npiwxc.mov"
  },
  {
    title: "Strategic Partnerships",
    description: "MasrPay builds its strength on trusted partnerships with Egypt's leading financial institutions, the Central Bank of Egypt (CBE) and the National Bank of Egypt (NBE), ensuring full regulatory compliance, credibility, and secure financial operations.",
    video: "https://res.cloudinary.com/dcjufshrh/video/upload/v1773655422/shutterstock_3608898733_giyvdf.mov"
  }
];

const PromiseSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const bgVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    bgVideoRefs.current.forEach((vid, idx) => {
      if (vid) {
        if (idx === activeIndex) {
          vid.play().catch(e => console.log("Autoplay prevented:", e));
        } else {
          vid.pause();
        }
      }
    });
  }, [activeIndex]);

  const scrollToCard = (idx: number) => {
    if (carouselRef.current) {
      const cardElement = carouselRef.current.children[idx] as HTMLElement;
      if (cardElement) {
        const scrollLeft = cardElement.offsetLeft - carouselRef.current.offsetLeft - 16;
        carouselRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % promises.length;
    setActiveIndex(nextIdx);
    scrollToCard(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + promises.length) % promises.length;
    setActiveIndex(prevIdx);
    scrollToCard(prevIdx);
  };

  const handleCardClick = (idx: number) => {
    setActiveIndex(idx);
    scrollToCard(idx);
  };

  return (
    <section className="relative w-full bg-gray-900 overflow-hidden py-16 md:py-24" id="about-us">
      {/* Background Videos Crossfade */}
      {promises.map((promise, idx) => (
        <div 
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${activeIndex === idx ? 'opacity-100' : 'opacity-0'}`}
        >
          <video 
            ref={el => { bgVideoRefs.current[idx] = el; }}
            src={promise.video} 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/20"></div>
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col gap-8 lg:gap-10">
        
        {/* Top Section - Headers */}
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">Our Promise</h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
            MasrPay is not promising in words,<br />
            but with actions that drive growth and build trust...
          </p>
        </div>

        {/* Middle Section - Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
          
          {/* Active Promise Text & Navigation */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center shrink-0">
            
            <div className="relative min-h-[220px] sm:min-h-[180px] md:min-h-[160px] w-full">
              {promises.map((promise, idx) => (
                <div 
                  key={idx}
                  className={`absolute w-full transition-all duration-700 ease-out ${
                    activeIndex === idx 
                      ? 'opacity-100 translate-y-0 pointer-events-auto' 
                      : 'opacity-0 translate-y-8 pointer-events-none'
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">{promise.title}</h3>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed font-light max-w-lg">
                    {promise.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-4 w-full mt-4">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95 shrink-0"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95 shrink-0"
              >
                <ChevronRight size={20} />
              </button>
              
              {/* Progress Line */}
              <div className="flex-1 h-[2px] bg-white/20 relative ml-4 rounded-full overflow-hidden max-w-[150px]">
                <div 
                  className="absolute top-0 left-0 h-full bg-white transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${((activeIndex + 1) / promises.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="w-full lg:w-[60vw] relative shrink-0">
            <div 
              ref={carouselRef}
              className="flex gap-4 md:gap-6 overflow-x-auto py-6 px-2 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pr-[20vw]"
            >
              {promises.map((promise, idx) => (
                <div 
                  key={idx}
                  onClick={() => handleCardClick(idx)}
                  className={`
                    relative flex-shrink-0 w-60 md:w-72 lg:w-[280px] h-[280px] md:h-[340px] rounded-3xl overflow-hidden cursor-pointer snap-start transition-all duration-500 transform border border-white/10
                    ${activeIndex === idx 
                      ? 'ring-2 ring-white scale-95 opacity-50 shadow-inner' 
                      : 'hover:-translate-y-2 hover:shadow-2xl opacity-100'
                    }
                  `}
                >
                  <video 
                    src={`${promise.video}#t=0.001`} 
                    preload="metadata"
                    muted 
                    playsInline
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="text-white font-bold text-base md:text-lg leading-tight block">{promise.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
