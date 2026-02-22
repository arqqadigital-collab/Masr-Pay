import SectionHeading from '../ui/SectionHeading';

const PARTNER_LOGOS = [
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

const Partners = () => (
  <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 mb-16">
      <SectionHeading
        title="Our Partners"
        subtitle="MasrPay partners with leading financial and regulatory institutions to ensure every transaction is secure, compliant, and trusted by merchants and consumers alike."
        maxWidth="max-w-4xl"
      />
    </div>

    <div className="relative w-full overflow-hidden">
      {/* Gradient Masks */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

      {/* Moving Track */}
      <div className="flex animate-marquee gap-16 items-center">
        {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="Partner logo"
            className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
          />
        ))}
      </div>
    </div>
  </section>
);

export default Partners;
