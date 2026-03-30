import { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import MasrPayButton from '../ui/MasrPayButton';

interface NavItem {
  name: string;
  dropdown?: string[];
}

const navItems: NavItem[] = [
  {
    name: 'About Us',
    dropdown: ['About us', 'Strategic framework', 'The Founders', 'Media & Press']
  },
  { name: 'Solutions' },
  { name: 'Pricing' },
  { name: 'Developers' },
  { name: 'Careers' },
  { name: 'FAQs' }
];

interface NavbarProps {
  setCurrentPage: (page: string) => void;
}

const Navbar = ({ setCurrentPage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, item: string) => {
    e.preventDefault();
    
    if (item === 'About Us') {
      setMobileAboutOpen(!mobileAboutOpen);
      return;
    }

    if (item === 'Developers') {
      setCurrentPage('developers');
    } else {
      setCurrentPage('home');
      setTimeout(() => {
        const id = item.toLowerCase().replace(' ', '-');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsOpen(false);
  };

  const handleDropdownClick = (e: React.MouseEvent, dropItem: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (dropItem === 'About us') {
      setCurrentPage('about-us');
    } else if (dropItem === 'Strategic framework') {
      setCurrentPage('strategic-framework');
    } else if (dropItem === 'The Founders') {
      setCurrentPage('founders');
    } else if (dropItem === 'Media & Press') {
      setCurrentPage('media-press');
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pt-4 px-4 md:px-6 transition-all duration-300 pointer-events-none">
      <div className={`
        pointer-events-auto max-w-7xl mx-auto flex justify-between items-center
        bg-white rounded-tl-2xl rounded-br-2xl
        transition-all duration-300 px-6 py-3 md:px-8 shadow-sm border border-gray-100
      `}>
        <div className="cursor-pointer" onClick={() => setCurrentPage('home')}>
          <Logo />
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-8 mr-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a 
                  href={item.dropdown ? "#" : `#${item.name.toLowerCase().replace(' ', '-')}`} 
                  onClick={(e) => handleNavClick(e, item.name)}
                  className="text-sm font-medium text-gray-600 hover:text-[#D62828] transition-colors flex items-center gap-1 py-2"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />}
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#D62828] transition-all duration-300 group-hover:w-full"></span>
                </a>
                
                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden py-2">
                      {item.dropdown.map((dropItem) => (
                        <a
                          key={dropItem}
                          href={`#${dropItem.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                          onClick={(e) => handleDropdownClick(e, dropItem)}
                          className="block px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-[#D62828] hover:bg-red-50/50 transition-colors"
                        >
                          {dropItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
          className="md:hidden text-gray-800 p-2 rounded-xl hover:bg-gray-100 transition-colors pointer-events-auto"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="pointer-events-auto absolute top-[calc(100%+10px)] left-4 right-4 max-w-7xl mx-auto bg-white p-6 flex flex-col gap-2 md:hidden border border-gray-100 rounded-tl-2xl rounded-br-2xl shadow-xl">
          {navItems.map((item) => (
            <div key={item.name} className="flex flex-col border-b border-gray-100/50 last:border-0 pb-2">
              <a 
                href={item.dropdown ? "#" : `#${item.name.toLowerCase().replace(' ', '-')}`} 
                onClick={(e) => handleNavClick(e, item.name)}
                className="text-lg font-medium text-gray-800 py-2 flex justify-between items-center"
              >
                {item.name}
                {item.dropdown && <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180' : ''}`} />}
              </a>
              {item.dropdown && mobileAboutOpen && (
                <div className="flex flex-col pl-4 gap-2 mt-1 mb-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  {item.dropdown.map((dropItem) => (
                    <a
                      key={dropItem}
                      href={`#${dropItem.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                      onClick={(e) => handleDropdownClick(e, dropItem)}
                      className="text-base text-gray-500 hover:text-[#D62828] py-1"
                    >
                      {dropItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-4 py-3 border-t border-gray-100/50 mt-2">
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
