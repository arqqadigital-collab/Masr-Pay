import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[#1a1a1a] text-white py-16 rounded-t-[40px] mt-12">
    <div className="max-w-7xl mx-auto px-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16 items-start">
        
        {/* Column 1: Sentence & Socials */}
        <div className="flex flex-col gap-8">
           <p className="text-gray-400 text-lg leading-relaxed pr-4">
             Designed for Egypt's needs. Built on global standards. Simple. Secure. Reliable.
           </p>
           <div className="flex items-center gap-5">
             <a href="#" className="text-white hover:text-[#D62828] transition-colors"><Facebook size={20} fill="currentColor" /></a>
             <a href="#" className="text-white hover:text-[#D62828] transition-colors"><Twitter size={20} fill="currentColor" /></a>
             <a href="#" className="text-white hover:text-[#D62828] transition-colors"><Linkedin size={20} fill="currentColor" /></a>
             <a href="#" className="text-white hover:text-[#D62828] transition-colors"><Instagram size={20} /></a>
           </div>
        </div>
        
        {/* Column 2: Company Links */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Partners</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        
        {/* Column 3: Support Links */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Support</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition">API Status</a></li>
          </ul>
        </div>

        {/* Column 4: PCI Certified */}
        <div className="flex flex-col items-start lg:items-end">
           <div className="flex flex-col items-center">
             <span className="text-gray-300 font-semibold tracking-wider uppercase text-sm mb-4">
               PCI Certified
             </span>
             <img 
               src="https://res.cloudinary.com/dcjufshrh/image/upload/v1773656092/pci_vat21c.png" 
               alt="PCI DSS Compliant" 
               className="h-24 md:h-28 lg:h-[120px] object-contain"
             />
           </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full justify-between">
          <p>&copy; {new Date().getFullYear()} MasrPay. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
