import { Lock, CreditCard, LayoutDashboard, Shield, Globe, Headphones, Smartphone, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

interface FeatureGridItemProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const FeatureGridItem = ({ icon: Icon, title, desc }: FeatureGridItemProps) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 hover:shadow-lg hover:border-red-100 transition-all duration-300">
    <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-[#D62828] mb-4">
      <Icon size={20} />
    </div>
    <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

const WhyTrustUs = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading
        title="Why Businesses Trust Us?"
        subtitle="Merchants first, but customers at the heart of every experience."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureGridItem icon={Lock} title="Secure Transaction" desc="SSL/TLS encryption and tokenization to protect sensitive data. PCI DSS compliant." />
        <FeatureGridItem icon={CreditCard} title="Multiple Methods" desc="Accept credit cards, debit cards, and digital wallets offering flexibility." />
        <FeatureGridItem icon={LayoutDashboard} title="Friendly Dashboard" desc="Comprehensive reporting, analytics, and role-based management system." />
        <FeatureGridItem icon={Shield} title="Fraud Protection" desc="Real-time monitoring to prevent fraudulent activities on every transaction." />
        <FeatureGridItem icon={Globe} title="Seamless Integration" desc="Easy integration with websites, mobile apps, and ecommerce platforms." />
        <FeatureGridItem icon={Headphones} title="Instant Support" desc="24/7 responsive, bilingual support to ensure peace of mind." />
        <FeatureGridItem icon={Smartphone} title="Mobile Optimization" desc="Responsive design providing a seamless user experience on all devices." />
        <FeatureGridItem icon={Zap} title="Payment Links" desc="Create payment links to send across various channels quickly." />
      </div>
    </div>
  </section>
);

export default WhyTrustUs;
