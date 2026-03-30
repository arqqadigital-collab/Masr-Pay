import SectionHeading from '../ui/SectionHeading';
import DecorativePattern from '../ui/DecorativePattern';

const PARTNER_LOGOS = [
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771501189/NBE_logo_tpxnkf.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771501185/Sisa_jqamuh.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771501184/Masary_company_low_pkjt1t.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771501184/Visa-Logo-PNG-Pic_kzklmg.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771501183/Banque_Misr.svg_shmwiy.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771501183/QNB-Logo-1964_cgungh.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771501183/huawei-2_mbfytf.png"
];

const Partners = () => (
  <section className="py-24 bg-white border-t border-gray-100 overflow-hidden relative" id="partners">
    <DecorativePattern className="top-1/2 right-0 w-[40rem] md:w-[50rem] translate-x-1/3 -translate-y-1/2" />
    
    <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
      <SectionHeading
        title="Our Partners"
        subtitle="MasrPay partners with leading financial and regulatory institutions to ensure every transaction is secure, compliant, and trusted by merchants and consumers alike."
        maxWidth="max-w-4xl"
      />
    </div>

    <div className="relative w-full overflow-hidden z-10">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

      <div className="flex gap-16 whitespace-nowrap animate-partners-marquee items-center">
        {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, index) => (
          <div 
            key={index} 
            className="w-48 h-24 flex items-center justify-center bg-white rounded-xl transition-all duration-300 hover:scale-110 cursor-pointer shrink-0 grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
          >
            <img 
              src={logo} 
              alt="Partner Logo" 
              className="max-h-16 w-auto max-w-full object-contain"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes partners-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-partners-marquee {
          animation: partners-marquee 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  </section>
);

export default Partners;
