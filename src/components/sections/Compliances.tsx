import SectionHeading from '../ui/SectionHeading';

const COMPLIANCE_LOGOS = [
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771501189/NBE_logo_tpxnkf.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771501185/Sisa_jqamuh.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771501184/Masary_company_low_pkjt1t.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771501184/Visa-Logo-PNG-Pic_kzklmg.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771501183/Banque_Misr.svg_shmwiy.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771501183/QNB-Logo-1964_cgungh.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771501183/huawei-2_mbfytf.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771501183/EBRD-Logo-1991_bde8is.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771501182/horizontal_logo_apjnfs.png"
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

      <div className="flex gap-16 whitespace-nowrap animate-marquee items-center">
        {[...COMPLIANCE_LOGOS, ...COMPLIANCE_LOGOS].map((logo, index) => (
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
    </div>
  </section>
);

export default Compliances;
