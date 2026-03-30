import SectionHeading from '../ui/SectionHeading';

const COMPLIANCE_LOGOS = [
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1774791018/logo1_e1kxmx.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1774791019/logo3_zij1f0.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1774791018/logo2_j7xwpm.png"
];

const Compliances = () => (
  <section className="py-24 bg-white border-t border-gray-100 overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
      <SectionHeading 
        title="Our Compliances"
        subtitle="MasrPay strictly adheres to the highest local and global security regulations to ensure your data and transactions are fully protected."
        maxWidth="max-w-4xl" 
      />
    </div>

    <div className="relative w-full overflow-hidden z-10">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

      <div className="flex gap-16 whitespace-nowrap animate-compliance-marquee items-center">
        {[...COMPLIANCE_LOGOS, ...COMPLIANCE_LOGOS, ...COMPLIANCE_LOGOS, ...COMPLIANCE_LOGOS].map((logo, index) => (
          <div 
            key={index} 
            className="w-48 h-24 flex items-center justify-center bg-white rounded-xl transition-all duration-300 hover:scale-110 cursor-pointer shrink-0 grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
          >
            <img 
              src={logo} 
              alt="Compliance Logo" 
              className="max-h-16 w-auto max-w-full object-contain"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes compliance-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-compliance-marquee {
          animation: compliance-marquee 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  </section>
);

export default Compliances;
