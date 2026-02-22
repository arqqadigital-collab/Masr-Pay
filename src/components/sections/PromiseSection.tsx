import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';

const promises = [
  {
    title: "Customer-Centric Solution",
    description: "MasrPay offers tailored financial solutions that address the needs of businesses of all sizes, even the underserved ones, with a strong focus on ease-of-use, security, and integration with existing business needs.",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1771502888/imggg_jnu0dz.png"
  },
  {
    title: "Strong Local Expertise",
    description: "MasrPay deeply understands the Egyptian market's needs; therefore, our service is perfectly tailored to ensure market relevance and rapid adoption.",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1771501586/freepik__egypts-map-in-digital-form-showing-technology-and-__6010_lv4tzv.png"
  },
  {
    title: "Agility & Flexibility",
    description: "MasrPay is designed to quickly adapt to the changing market needs, empowering businesses to stay ahead with flexible, future-ready payment solutions.",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1771502996/sxcds_hmwb8h.png"
  },
  {
    title: "Strategic Partnerships",
    description: "MasrPay builds its strength on trusted partnerships with Egypt's leading financial institutions, the Central Bank of Egypt (CBE) and the National Bank of Egypt (NBE), ensuring full regulatory compliance, credibility, and secure financial operations.",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1771501614/shutterstock_2599889075_lejcve.jpg"
  }
];

const PromiseSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <SectionHeading
            title="Our Promise"
            subtitle="MasrPay is not promising in words, but with actions that drive growth and build trust..."
            className="mb-8"
          />
        </div>

        {/* Horizontal Menu (Tabs) */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {promises.map((promise, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`
                px-6 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300
                ${activeTab === index
                  ? 'bg-[#D62828] text-white shadow-lg shadow-red-200'
                  : 'bg-white text-gray-500 hover:text-[#D62828] border border-gray-200 hover:border-red-100'
                }
              `}
            >
              {promise.title}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[400px]">
          <div key={`text-${activeTab}`} className="order-2 lg:order-1 animate-fade-in-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">{promises[activeTab].title}</h3>
            <p className="text-xl text-gray-500 leading-relaxed">{promises[activeTab].description}</p>
          </div>

          <div className="order-1 lg:order-2 h-full">
            <div key={`img-${activeTab}`} className="relative h-[300px] lg:h-[400px] rounded-[32px] overflow-hidden shadow-2xl animate-fade-in">
              <img
                src={promises[activeTab].image}
                alt={promises[activeTab].title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
