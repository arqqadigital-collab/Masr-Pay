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
  <section className="py-24 bg-gray-900 overflow-hidden relative">
    {/* Background Image with Dark Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="https://res.cloudinary.com/djxcjlhtn/image/upload/v1776771315/__21_ezromv.jpg"
        alt="Network Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-900/85"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
      <SectionHeading
        title="Our Compliances"
        subtitle="MasrPay strictly adheres to the highest local and global security regulations to ensure your data and transactions are fully protected."
        maxWidth="max-w-4xl"
        theme="dark"
      />
    </div>

    <div className="relative w-full overflow-hidden z-10">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>

      <div className="flex gap-16 whitespace-nowrap animate-compliance-marquee items-center">
        {[...COMPLIANCE_LOGOS, ...COMPLIANCE_LOGOS].map((logo, index) => (
          <div
            key={index}
            className="w-40 md:w-48 h-20 flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer shrink-0"
          >
            <img
              src={logo}
              alt="Compliance Logo"
              className="max-h-12 md:max-h-16 w-auto max-w-full object-contain filter brightness-0 invert opacity-70 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-500"
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
