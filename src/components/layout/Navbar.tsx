import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo />

        {/* Desktop Nav - Floating Pill "Island" Style */}
        <div className={`
          hidden md:flex items-center gap-2 p-1.5 pl-8
          bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg shadow-gray-200/20 rounded-full
          transition-all duration-300 ${scrolled ? 'translate-y-0' : 'translate-y-0'}
        `}>
          <div className="flex items-center gap-8 mr-4">
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
          <MasrPayButton variant="primary" className="py-2.5 px-6 text-sm">Contact Us</MasrPayButton>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-sm border border-gray-100"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-xl p-6 flex flex-col gap-4 md:hidden border-t border-gray-100">
          {NAV_ITEMS.map((item) => (
            <a key={item} href="#" className="text-lg font-medium text-gray-800 py-3 border-b border-gray-100/50">
              {item}
            </a>
          ))}
          <MasrPayButton className="w-full mt-2">Contact Us</MasrPayButton>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
