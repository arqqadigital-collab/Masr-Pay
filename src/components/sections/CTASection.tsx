import { ArrowRight } from 'lucide-react';

const CTASection = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="rounded-[40px] py-16 md:py-24 px-6 flex flex-col items-center justify-center text-center overflow-hidden relative shadow-2xl">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img 
              src="https://res.cloudinary.com/dcjufshrh/image/upload/v1773653493/Generative_Expandimg_grjjys.png" 
              alt="Background Pattern" 
              className="w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
        </div>

        {/* Text Content */}
        <div className="z-10 relative w-full max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">MasrPay</h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">Simple. Secure. Reliable.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative px-8 py-5 border-2 border-white text-white bg-transparent rounded-2xl text-lg hover:bg-white hover:text-[#D62828] transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl flex flex-col items-center sm:items-start min-w-[240px]">
              <span className="text-xs text-white/80 font-bold uppercase tracking-wider mb-1 group-hover:text-red-500 transition-colors">Merchants</span>
              <span className="font-bold flex items-center gap-2">
                Request a Demo 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            
            <button className="group relative px-8 py-5 border-2 border-white text-white bg-transparent rounded-2xl text-lg hover:bg-white hover:text-[#D62828] transition-all duration-300 hover:scale-105 active:scale-95 flex flex-col items-center sm:items-start min-w-[240px]">
              <span className="text-xs text-white/80 font-bold uppercase tracking-wider mb-1 group-hover:text-red-500 transition-colors">Partners</span>
              <span className="font-bold flex items-center gap-2">
                Contact Us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
