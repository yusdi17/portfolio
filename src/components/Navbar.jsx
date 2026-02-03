import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import RotatingText from './RotatingText';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0f0f0f]/80 backdrop-blur-md shadow-lg border-b border-gray-800 py-4' // Gelap Transparan
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <a 
        href="#home" 
        className="flex items-center gap-1 text-2xl font-bold text-white tracking-wide"
      >
        Yusdi
        
        <RotatingText 
          texts={['Fathudin.', '.dev']} 
          mainClassName="inline-flex items-center text-blue-500 overflow-hidden"
          
          staggerFrom={"last"} 
          initial={{ y: "100%" }} 
          animate={{ y: 0 }} 
          exit={{ y: "-120%" }} 
          staggerDuration={0.025} 
          splitLevelClassName="overflow-hidden pb-0.5" 
          transition={{ type: "spring", damping: 30, stiffness: 400 }} 
          rotationInterval={10000}
        />
        {/* <span className="text-blue-500">.</span> */}
      </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center pl-6 border-l border-gray-700 space-x-2">
            <button className="flex items-center space-x-1 text-gray-300 hover:text-white font-semibold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-5 h-5 rounded-sm">
                <path fill="#e11d2d" d="M0 0h640v240H0z" />
                <path fill="#fff" d="M0 240h640v240H0z" />
              </svg>
              <span>ID</span>
            </button>
          </div>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-gray-800 absolute w-full shadow-lg">
          <div className="flex flex-col items-center py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 text-lg font-medium hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;