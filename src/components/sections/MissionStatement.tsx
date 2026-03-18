import { useState, useEffect, useRef } from 'react';
import DecorativePattern from '../ui/DecorativePattern';

const MissionStatement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-40 bg-white flex items-center overflow-hidden relative">
      <DecorativePattern className="top-0 left-0 w-[40rem] md:w-[50rem] -translate-x-1/3 -translate-y-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight text-left">
          <span className={`text-black block mb-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            MasrPay
          </span>
          
          <span className={`text-black block mb-6 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Designed for Egypt's needs
          </span>
          
          <span className={`text-black block transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Built on global standards
          </span>
        </h2>
      </div>
    </section>
  );
};

export default MissionStatement;
