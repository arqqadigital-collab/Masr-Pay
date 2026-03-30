import { useState, useEffect } from 'react';
import { Search, ArrowRight, AlertCircle } from 'lucide-react';
import Breadcrumb from '@/components/ui/MasrPayBreadcrumb';

interface DocumentationPageProps {
  setCurrentPage: (page: string) => void;
}

const DocumentationPage = ({ setCurrentPage }: DocumentationPageProps) => {
  const breadcrumbPaths = [
    { name: 'Home page', onClick: () => setCurrentPage('home') },
    { name: 'Developers', onClick: () => setCurrentPage('developers') },
    { name: 'Getting Started', onClick: null },
    { name: 'Dashboard', onClick: null }
  ];

  const [activeSection, setActiveSection] = useState('creating-account');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -70% 0px' }
    );

    const sections = ['creating-account', 'retrieving-api-keys', 'next-steps'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex flex-col">
      <div className="flex-none">
        <Breadcrumb paths={breadcrumbPaths} />
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full flex flex-col md:flex-row pb-24 px-6 gap-10">
        
        {/* Left Sidebar Navigation */}
        <aside className="w-full md:w-72 flex-shrink-0">
          <div className="sticky top-32 overflow-y-auto max-h-[calc(100vh-140px)] pr-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            
            <div className="relative mb-8 group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400 group-hover:text-[#D62828] transition-colors" />
              </div>
              <input 
                type="text" 
                className="block w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-0 focus:border-[#D62828] transition-colors bg-gray-50 placeholder-gray-500" 
                placeholder="Search docs..." 
              />
            </div>

            <nav className="space-y-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-3 text-sm tracking-wider uppercase">Getting Started</h4>
                <ul className="space-y-1.5 border-l border-gray-200 ml-2 pl-4">
                  <li><a href="#" className="block py-1.5 text-sm text-gray-600 hover:text-[#D62828] transition-colors">Overview</a></li>
                  <li><a href="#" className="block py-1.5 text-sm font-bold text-[#D62828] relative before:absolute before:-left-[17px] before:top-1/2 before:-translate-y-1/2 before:w-[2px] before:h-full before:bg-[#D62828]">Dashboard</a></li>
                  <li><a href="#" className="block py-1.5 text-sm text-gray-600 hover:text-[#D62828] transition-colors">Authentication</a></li>
                  <li><a href="#" className="block py-1.5 text-sm text-gray-600 hover:text-[#D62828] transition-colors">Environments</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3 text-sm tracking-wider uppercase">Accepting Payments</h4>
                <ul className="space-y-1.5 border-l border-gray-200 ml-2 pl-4">
                  <li><a href="#" className="block py-1.5 text-sm text-gray-600 hover:text-[#D62828] transition-colors">Hosted Checkout</a></li>
                  <li><a href="#" className="block py-1.5 text-sm text-gray-600 hover:text-[#D62828] transition-colors">Payment Links</a></li>
                  <li><a href="#" className="block py-1.5 text-sm text-gray-600 hover:text-[#D62828] transition-colors">Mobile Wallets</a></li>
                  <li><a href="#" className="block py-1.5 text-sm text-gray-600 hover:text-[#D62828] transition-colors">Tokenization</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3 text-sm tracking-wider uppercase">API Reference</h4>
                <ul className="space-y-1.5 border-l border-gray-200 ml-2 pl-4">
                  <li><a href="#" className="block py-1.5 text-sm text-gray-600 hover:text-[#D62828] transition-colors">API Endpoints</a></li>
                  <li><a href="#" className="block py-1.5 text-sm text-gray-600 hover:text-[#D62828] transition-colors">Webhooks</a></li>
                  <li><a href="#" className="block py-1.5 text-sm text-gray-600 hover:text-[#D62828] transition-colors">Error Codes</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 w-full max-w-3xl">
          <div className="prose prose-gray max-w-none">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">Dashboard</h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              The MasrPay Dashboard is your central hub for managing your integrations, viewing transactions, and configuring your account settings. 
            </p>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10 flex gap-4">
              <div className="mt-1 flex-shrink-0 text-blue-600">
                <AlertCircle size={24} />
              </div>
              <div>
                <h4 className="text-blue-900 font-bold mb-2 text-lg">Test vs. Live Environments</h4>
                <p className="text-blue-800/80 leading-relaxed text-sm">
                  Your MasrPay account features two distinct environments: <strong className="text-blue-900">Test</strong> and <strong className="text-blue-900">Live</strong>. Make sure you are in the Test environment while building and testing your integration. No real charges are made in the Test environment.
                </p>
              </div>
            </div>

            <h2 id="creating-account" className="text-2xl font-bold text-gray-900 mb-4 mt-12 border-b border-gray-100 pb-2 scroll-mt-28">1. Creating an Account</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To get started with MasrPay, you first need to create an account on our Dashboard. This gives you immediate access to your API keys and the sandbox environment.
            </p>
            <ul className="list-decimal list-inside text-gray-600 mb-10 space-y-3 ml-2">
              <li>Navigate to the <a href="#" className="text-[#D62828] font-medium hover:underline">MasrPay Sign Up</a> page.</li>
              <li>Fill in your business details and verify your email address.</li>
              <li>Log in to access your Developer Dashboard.</li>
            </ul>

            <h2 id="retrieving-api-keys" className="text-2xl font-bold text-gray-900 mb-4 mt-12 border-b border-gray-100 pb-2 scroll-mt-28">2. Retrieving Your API Keys</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              API keys are used to authenticate your requests to MasrPay's API. You will need these keys to initialize SDKs or make direct HTTP calls.
            </p>
            <div className="bg-gray-900 rounded-2xl p-6 mb-10 shadow-lg overflow-x-auto">
              <div className="flex gap-2 mb-4 border-b border-gray-700 pb-4">
                <span className="text-gray-400 text-xs font-mono uppercase tracking-wider">Authentication Header Example</span>
              </div>
              <pre className="text-green-400 font-mono text-sm">
                <code>
<span className="text-pink-500">Authorization:</span> Bearer sk_test_51Nx...<br/>
<span className="text-pink-500">Content-Type:</span> application/json
                </code>
              </pre>
            </div>
            <p className="text-gray-600 mb-10 leading-relaxed">
              You can find your API keys by navigating to <strong>Settings &gt; Developer &gt; API Keys</strong> in the Dashboard sidebar. Remember to keep your Secret Key safe and never expose it in client-side code (like frontend JavaScript or mobile apps).
            </p>

            <h2 id="next-steps" className="text-2xl font-bold text-gray-900 mb-4 mt-12 border-b border-gray-100 pb-2 scroll-mt-28">3. Next Steps</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Now that you have your account and API keys, you are ready to start building. Choose your preferred integration method below:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-2xl p-6 hover:border-[#D62828] hover:shadow-lg transition-all cursor-pointer group">
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#D62828] transition-colors">Hosted Checkout</h4>
                <p className="text-gray-500 text-sm mb-4">The easiest way to accept payments. We handle the UI and security.</p>
                <span className="text-[#D62828] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Start Integrating <ArrowRight size={16}/></span>
              </div>
              <div className="border border-gray-200 rounded-2xl p-6 hover:border-[#D62828] hover:shadow-lg transition-all cursor-pointer group">
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#D62828] transition-colors">Payment Links</h4>
                <p className="text-gray-500 text-sm mb-4">Generate secure URLs to share with customers via SMS or email.</p>
                <span className="text-[#D62828] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Learn More <ArrowRight size={16}/></span>
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar - On this page */}
        <aside className="hidden xl:block w-56 flex-shrink-0">
          <div className="sticky top-32">
            <h4 className="font-bold text-gray-900 mb-4 text-sm tracking-wider uppercase">On this page</h4>
            <ul className="space-y-3 border-l-2 border-gray-100">
              {[
                { id: 'creating-account', label: '1. Creating an Account' },
                { id: 'retrieving-api-keys', label: '2. Retrieving Your API Keys' },
                { id: 'next-steps', label: '3. Next Steps' },
              ].map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={`block pl-4 text-sm transition-colors border-l-2 -ml-[2px] ${
                      activeSection === item.id 
                        ? 'border-[#D62828] text-[#D62828] font-bold' 
                        : 'border-transparent text-gray-600 hover:text-[#D62828] hover:border-gray-300'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DocumentationPage;
