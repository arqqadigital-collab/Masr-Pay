import { User } from 'lucide-react';
import DecorativePattern from '@/components/ui/DecorativePattern';
import Breadcrumb from '@/components/ui/MasrPayBreadcrumb';

interface FoundersPageProps {
  setCurrentPage: (page: string) => void;
}

const FoundersPage = ({ setCurrentPage }: FoundersPageProps) => {
  const breadcrumbPaths = [
    { name: 'Home page', onClick: () => setCurrentPage('home') },
    { name: 'About Us', onClick: null },
    { name: 'The Founders', onClick: null }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FB] relative overflow-hidden">
      <DecorativePattern className="top-0 right-0 w-[40rem] md:w-[60rem] translate-x-1/4 -translate-y-1/4 opacity-10" />
      <Breadcrumb paths={breadcrumbPaths} />

      {/* Hero Section */}
      <section className="pt-10 pb-16 px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#D62828] font-bold tracking-widest uppercase mb-4 text-sm">Leadership</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Meet Our Founders
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            The visionaries behind MasrPay, bringing decades of expertise in technology, management, and financial innovation.
          </p>
        </div>
      </section>

      {/* Founders Profiles */}
      <section className="px-6 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto space-y-24">
          
          {/* Profile 1: Eng. Tamer Shawer */}
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3 aspect-[4/5] bg-white rounded-[32px] overflow-hidden relative flex items-center justify-center border border-gray-200 shadow-xl group">
              <div className="absolute inset-0 bg-gray-50 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <User size={80} className="text-gray-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-white/80 text-xs font-bold uppercase tracking-wider mb-1">Image Placeholder</p>
                <p className="text-white font-medium">Eng. Tamer Shawer</p>
              </div>
            </div>

            <div className="w-full md:w-2/3 prose prose-lg prose-gray text-gray-600 max-w-none">
              <div className="mb-8 border-b border-gray-200 pb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 mt-0">Eng. Tamer Shawer</h2>
                <p className="text-[#D62828] font-bold text-lg m-0">Chairman of GlobalPay & Management Consultant</p>
              </div>
              
              <p className="leading-relaxed">
                Eng. Tamer Shawer is a highly experienced management consultant with +30 years of expertise in areas such as management, feasibility studies, business development, and staff enhancement.
              </p>
              <p className="leading-relaxed">
                Tamer holds a Bachelor's degree in Civil Engineering from Ain Shams University and an MBA in International Business from the Arab Academy for Science, Technology & Maritime Transport (AASTMT).
              </p>
              <p className="leading-relaxed">
                Tamer is also a certified internal auditor in ISO 9001 and an EFQM internal assessor. Throughout his successful career, he has provided strategic leadership and consultancy services across various industries in Egypt, Saudi Arabia, and the UAE.
              </p>
              <p className="leading-relaxed font-medium text-gray-800">
                Currently, Tamer serves as the Chairman of GlobalPay, where he plays a crucial role in leading the company's strategic expansion, particularly in the Gulf region. He is also the Chairman at 7keema, the first on-demand nursing app in Egypt and Nigeria, overseeing its strategic direction and performance enhancement.
              </p>
              <p className="leading-relaxed">
                Furthermore, Tamer is the Founder and Chairman of Asdekaa Alkher NGO (AAK), where he has been leading impactful social initiatives.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

          {/* Profile 2: Mr. Aly Taha */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
            <div className="w-full md:w-1/3 aspect-[4/5] bg-white rounded-[32px] overflow-hidden relative flex items-center justify-center border border-gray-200 shadow-xl group">
              <div className="absolute inset-0 bg-gray-50 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <User size={80} className="text-gray-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-white/80 text-xs font-bold uppercase tracking-wider mb-1">Image Placeholder</p>
                <p className="text-white font-medium">Mr. Aly Taha</p>
              </div>
            </div>

            <div className="w-full md:w-2/3 prose prose-lg prose-gray text-gray-600 max-w-none">
              <div className="mb-8 border-b border-gray-200 pb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 mt-0">Mr. Aly Taha</h2>
                <p className="text-[#D62828] font-bold text-lg m-0">Chief Business Officer of GlobalPay</p>
              </div>
              
              <p className="leading-relaxed">
                Aly Taha is the Chief Business Officer of GlobalPay, bringing +20 years of experience in IT sales, marketing, and management in the Middle East region.
              </p>
              <p className="leading-relaxed">
                Aly holds an MBA from Paris ESLSCA Business School and has obtained a post-graduate diploma in Management Information Systems and Computer Technology from SADAT ACADEMY for MANAGEMENT SCIENCES.
              </p>
              <div className="pl-6 border-l-4 border-[#D62828] py-2 my-8 bg-white shadow-sm rounded-r-xl pr-6">
                <p className="text-gray-800 m-0 font-medium">
                  One of Aly's key strengths lies in customer relationship management (CRM), as well as maintaining strong channel partner relations and developing effective sales strategies.
                </p>
              </div>
              <p className="leading-relaxed">
                As the leader of the sales and business development department at MasrPay, Aly has played a pivotal role in driving the growth of our fast-growing fintech company. Aly's exceptional ability to build long-term partnerships with clients, partners, resellers, and vendors has been instrumental in our success.
              </p>
              <p className="leading-relaxed">
                In addition to achieving revenue growth and exceeding sales targets, Aly boasts a proven track record of securing large contracts with both public and private organizations. Aly is adept at managing multiple projects, teams, and budgets while consistently ensuring high-quality standards and customer satisfaction.
              </p>
              <p className="leading-relaxed font-medium text-gray-800">
                Above all, Aly is driven by a passion for exploring new opportunities, creating value, and fostering innovation within the fintech industry.
              </p>
              <p className="leading-relaxed">
                Before joining GlobalPay, Aly held notable positions at eFinance as a Sales Manager, ORACLE ME as a Territory Manager, and IBM as a Public Sector Sales Leader.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoundersPage;
