import { ArrowRight, Download, Calendar, FileText } from 'lucide-react';
import { Image as ImageIcon } from 'lucide-react';
import DecorativePattern from '@/components/ui/DecorativePattern';
import Breadcrumb from '@/components/ui/MasrPayBreadcrumb';

interface MediaPressPageProps {
  setCurrentPage: (page: string) => void;
}

const MediaPressPage = ({ setCurrentPage }: MediaPressPageProps) => {
  const breadcrumbPaths = [
    { name: 'Home page', onClick: () => setCurrentPage('home') },
    { name: 'About Us', onClick: null },
    { name: 'Media & Press', onClick: null }
  ];

  const dummyNews = [
    {
      date: "November 12, 2025",
      category: "Press Release",
      title: "MasrPay Announces Strategic Expansion Across the MENA Region",
      desc: "MasrPay continues its rapid growth by expanding its cashless payment solutions to key new markets, securing partnerships with leading regional financial institutions.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
    },
    {
      date: "October 05, 2025",
      category: "Company News",
      title: "MasrPay Achieves Highest Security Standards with PCI DSS v4.0.1",
      desc: "Reaffirming our commitment to merchant and consumer safety, MasrPay has successfully completed the latest and most stringent compliance certifications.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
    },
    {
      date: "September 22, 2025",
      category: "Product Update",
      title: "New Developer Hub Launched to Accelerate Integrations",
      desc: "Our completely revamped Developer Portal is now live, offering merchants self-serve tools, comprehensive SDKs, and faster integration times.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FB] relative overflow-hidden">
      <DecorativePattern className="top-0 right-0 w-[40rem] md:w-[60rem] translate-x-1/4 -translate-y-1/4 opacity-10" />
      <Breadcrumb paths={breadcrumbPaths} />

      {/* Hero Section */}
      <section className="pt-10 pb-16 px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#D62828] font-bold tracking-widest uppercase mb-4 text-sm">Media & Press</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Latest News & Updates
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Stay up to date with the latest announcements, press releases, and media coverage from the MasrPay team.
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="px-6 pb-24 relative z-10">
        <div className="max-w-5xl mx-auto space-y-10">
          {dummyNews.map((news, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-red-100 transition-all duration-500 group cursor-pointer flex flex-col md:flex-row items-stretch overflow-hidden">
              {/* Thumbnail Image */}
              <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto border-r border-gray-100 shrink-0">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent md:hidden"></div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="text-[#D62828] font-bold uppercase tracking-wider text-xs px-3 py-1 bg-red-50 rounded-full">{news.category}</span>
                  <span className="text-gray-500 flex items-center gap-1.5 font-medium"><Calendar size={14} /> {news.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#D62828] transition-colors leading-tight">{news.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">{news.desc}</p>
                
                <span className="inline-flex items-center gap-2 text-[#D62828] font-bold text-sm group-hover:gap-3 transition-all mt-auto w-max">
                  Read Full Story <ArrowRight size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Media Kit Download */}
      <section className="px-6 pb-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-900 rounded-[32px] p-10 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
            <DecorativePattern className="bottom-0 left-0 w-full h-full opacity-20 object-cover" />
            
            {/* Text Content */}
            <div className="relative z-10 max-w-xl text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Media Kit</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Download our official press kit, including high-resolution brand logos, executive headshots, and company fact sheets for your publications.
              </p>
              <button className="flex items-center gap-3 bg-[#D62828] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-500/20 mx-auto lg:mx-0">
                <Download size={20} /> Download Kit (.ZIP)
              </button>
            </div>

            {/* Visual Graphic */}
            <div className="relative z-10 w-full lg:w-auto flex justify-center perspective-[1000px] shrink-0 lg:pr-10 pt-10 lg:pt-0">
              <div className="relative w-64 h-64 transform-gpu transition-transform duration-700 hover:-translate-y-4">
                
                {/* Base Folder/Box */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl border border-gray-600 shadow-2xl flex items-center justify-center transform -rotate-6">
                  <ImageIcon size={64} className="text-gray-500 opacity-30" />
                </div>
                
                {/* Floating Logo Asset */}
                <div className="absolute top-4 -right-4 md:-right-8 w-32 h-32 bg-white rounded-2xl border border-gray-200 shadow-2xl flex items-center justify-center transform rotate-12 transition-transform duration-500 hover:scale-110 hover:rotate-6">
                  <img 
                    src="https://res.cloudinary.com/dcjufshrh/image/upload/v1771494085/masrpay_logo_rnlhpf.png" 
                    alt="MasrPay Logo Asset" 
                    className="w-20 object-contain" 
                  />
                </div>
                
                {/* Floating Document Asset */}
                <div className="absolute -bottom-8 -left-4 md:-left-8 w-48 h-28 bg-red-50 rounded-2xl border border-red-100 shadow-2xl flex flex-col justify-center px-6 transform -rotate-12 transition-transform duration-500 hover:scale-110 hover:-rotate-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText size={18} className="text-[#D62828]" />
                    <span className="text-[#D62828] text-xs font-bold uppercase">Fact Sheet</span>
                  </div>
                  <div className="w-1/2 h-2 bg-red-200 rounded-full mb-2"></div>
                  <div className="w-full h-2 bg-red-200 rounded-full mb-2"></div>
                  <div className="w-3/4 h-2 bg-red-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaPressPage;
