import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import Logo from './Logo';
import MasrPayButton from '../ui/MasrPayButton';

const NAV_ITEMS = ['About Us', 'Solutions', 'Pricing', 'Careers', 'FAQs'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pt-4 px-4 md:px-6 transition-all duration-300 pointer-events-none">
      <div className={`
        pointer-events-auto max-w-7xl mx-auto flex justify-between items-center
        bg-white rounded-tl-2xl rounded-br-2xl
        transition-all duration-300 px-6 py-3 md:px-8
      `}>
        <Logo />
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-8 mr-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-sm font-medium text-gray-600 hover:text-[#D62828] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D62828] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          {/* Language Switcher */}
          <div className="flex items-center gap-3 mr-6 border-l-2 border-gray-300 pl-6">
            <button className="text-sm font-bold text-[#D62828] flex items-center gap-1.5 transition-colors">
              <Globe size={16} /> EN
            </button>
            <span className="text-gray-300 text-sm">/</span>
            <button className="text-sm font-medium text-gray-500 hover:text-[#D62828] transition-colors">
              عربي
            </button>
          </div>

          <MasrPayButton variant="primary" className="py-2.5 px-6 text-sm">Contact Us</MasrPayButton>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-gray-800 p-2 rounded-xl hover:bg-gray-100 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="pointer-events-auto absolute top-[calc(100%+10px)] left-4 right-4 max-w-7xl mx-auto bg-white p-6 flex flex-col gap-4 md:hidden border border-gray-100 rounded-tl-2xl rounded-br-2xl">
          {NAV_ITEMS.map((item) => (
            <a key={item} href="#" className="text-lg font-medium text-gray-800 py-3 border-b border-gray-100/50">
              {item}
            </a>
          ))}
          
          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-4 py-3 border-b border-gray-100/50">
            <Globe size={20} className="text-gray-500" />
            <button className="text-lg font-bold text-[#D62828]">English</button>
            <span className="text-gray-300">|</span>
            <button className="text-lg font-medium text-gray-500 hover:text-[#D62828]">العربية</button>
          </div>

          <MasrPayButton className="w-full mt-2 rounded-xl">Contact Us</MasrPayButton>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
