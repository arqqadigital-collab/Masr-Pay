import { ArrowRight } from 'lucide-react';

const CTASection = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="bg-[#D62828] rounded-[40px] p-12 md:p-24 flex flex-col items-center justify-center text-center gap-10 overflow-hidden relative shadow-2xl shadow-red-900/20">

        {/* Faded Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dcjufshrh/image/upload/v1771497447/shutterstock_2258417237_1_w3x1f6.jpg"
            alt="Background Pattern"
            className="w-full h-full object-cover opacity-10 mix-blend-overlay pointer-events-none"
          />
        </div>

        {/* Background decorative blob */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-red-800/40 rounded-full filter blur-[128px] pointer-events-none"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-800/40 rounded-full filter blur-[128px] pointer-events-none"></div>

        {/* Text Content */}
        <div className="z-10 relative max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">MasrPay</h2>
          <p className="text-lg md:text-xl text-red-100 mb-12 font-light tracking-wide leading-relaxed">Simple. Secure. Reliable.</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative px-8 py-5 bg-white text-[#D62828] rounded-2xl text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl flex flex-col items-center sm:items-start min-w-[240px]">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Merchants</span>
              <span className="font-bold flex items-center gap-2">
                Request a Demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <button className="group relative px-8 py-5 border-2 border-white text-white bg-transparent rounded-2xl text-lg hover:bg-white hover:text-[#D62828] transition-all duration-300 hover:scale-105 active:scale-95 flex flex-col items-center sm:items-start min-w-[240px]">
              <span className="text-xs text-red-100 font-bold uppercase tracking-wider mb-1 group-hover:text-red-400 transition-colors">Partners</span>
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
