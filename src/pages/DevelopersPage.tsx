import { CreditCard, Smartphone, Mail, Phone, MessageCircle, Clock, Gauge, LayoutTemplate, BookOpen } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import MasrPayButton from '@/components/ui/MasrPayButton';
import DecorativePattern from '@/components/ui/DecorativePattern';
import Breadcrumb from '@/components/ui/Breadcrumb';

interface PaymentOptionCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
}

const PaymentOptionCard = ({ icon: Icon, title, desc }: PaymentOptionCardProps) => (
  <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300 group cursor-pointer h-full">
    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-[#D62828] mb-6 group-hover:scale-110 group-hover:bg-[#D62828] group-hover:text-white transition-all duration-300">
      <Icon size={26} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500 font-medium text-sm">{desc}</p>
  </div>
);

interface SupportCardProps {
  icon: React.ElementType;
  title: string;
  detail: string;
}

const SupportCard = ({ icon: Icon, title, detail }: SupportCardProps) => (
  <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
    <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center text-gray-700 mb-4">
      <Icon size={24} />
    </div>
    <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
    <p className="text-[#D62828] font-medium">{detail}</p>
  </div>
);

interface DevelopersPageProps {
  setCurrentPage: (page: string) => void;
}

const DevelopersPage = ({ setCurrentPage }: DevelopersPageProps) => {
  const breadcrumbPaths = [
    { name: 'Home page', onClick: () => setCurrentPage('home') },
    { name: 'Developers', onClick: null }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FB] pb-24 relative overflow-hidden">
      <DecorativePattern className="top-0 right-0 w-[40rem] md:w-[60rem] translate-x-1/4 -translate-y-1/4 opacity-10" />
      <Breadcrumb paths={breadcrumbPaths} />
      
      {/* Dev Hub Hero */}
      <section className="pt-10 pb-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#D62828] font-bold tracking-widest uppercase mb-4 text-sm">Developer Portal</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            BUILD. INTEGRATE. SCALE.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            Integrate MasrPay easily into your platforms and enable secure payments across online and in-person experiences.
          </p>
          <div className="flex justify-center">
            <MasrPayButton className="px-8 py-4 text-lg" onClick={() => setCurrentPage('documentations')}>
              View documentations <BookOpen size={20} />
            </MasrPayButton>
          </div>
        </div>
      </section>

      {/* Flexible Payment Options */}
      <section className="px-6 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Flexible Payment Options" 
            subtitle="Provide a smooth checkout experience by supporting the payment options your customers trust and prefer."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            <PaymentOptionCard icon={CreditCard} title="Cards" desc="Visa & Mastercard" />
            <PaymentOptionCard icon={Smartphone} title="Mobile wallets" desc="Vodafone Cash" />
          </div>
        </div>
      </section>

      {/* Developer-Friendly Integration */}
      <section className="px-6 py-16 relative z-10 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Developer-Friendly Integration" 
            subtitle="Integrate MasrPay smoothly into your platform with tools designed for reliability, security, and scale."
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row bg-[#F8F9FB] rounded-[32px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="p-10 md:p-12 flex-1 flex flex-col justify-center">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#D62828] mb-6">
                  <LayoutTemplate size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hosted Checkout</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Redirect your customers to a secure MasrPay-hosted payment page to complete their transactions. Fully PCI-compliant and ready to use.
                </p>
                
                <div className="flex flex-wrap gap-4 mt-auto">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700">
                    <Clock size={16} className="text-gray-400" />
                    Integration Time: ~1 day
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700">
                    <Gauge size={16} className="text-[#D62828]" />
                    Complexity: Medium
                  </div>
                </div>
              </div>
              <div className="hidden md:block w-[40%] bg-gray-900 relative p-8">
                <DecorativePattern className="top-0 right-0 w-full h-full opacity-20 object-cover" />
                <div className="relative z-10 w-full h-full border border-white/10 bg-black/40 rounded-2xl p-6 flex flex-col gap-4 font-mono text-xs text-green-400 shadow-inner">
                  <div className="flex gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <p><span className="text-pink-500">const</span> masrpay = <span className="text-blue-400">new</span> MasrPay('sk_test_...');</p>
                  <p><span className="text-pink-500">const</span> session = <span className="text-pink-500">await</span> masrpay.checkout.create(&#123;</p>
                  <p className="pl-4">amount: <span className="text-orange-400">150.00</span>,</p>
                  <p className="pl-4">currency: <span className="text-yellow-300">'EGP'</span>,</p>
                  <p className="pl-4">success_url: <span className="text-yellow-300">'https://...'</span></p>
                  <p>&#125;);</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Support Section */}
      <section className="px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading 
            title="Need Help?" 
            subtitle="Our team is here to support you 24/7."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SupportCard icon={Mail} title="Email Support" detail="info@masrpay.com.eg" />
            <SupportCard icon={Phone} title="Phone Support" detail="01210908888" />
            <SupportCard icon={MessageCircle} title="Chat support" detail="Chat with us directly" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevelopersPage;
