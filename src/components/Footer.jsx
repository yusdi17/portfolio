import React from 'react';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" text-white border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* BAGIAN ATAS: Logo & Navigasi */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
          
          {/* Logo / Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold tracking-wide">
              Yusdi<span className="text-teal-500">Fathudin</span>.
            </a>
            <p className="text-gray-400 text-sm mt-2">
              Membangun pengalaman digital yang tak terlupakan.
            </p>
          </div>

          {/* Navigasi Cepat */}
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-400">
            <a href="#home" className="hover:text-teal-400 transition-colors">Beranda</a>
            <a href="#about" className="hover:text-teal-400 transition-colors">Tentang</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Proyek</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Kontak</a>
          </div>

        </div>

        {/* GARIS PEMBATAS */}
        <div className="w-full h-px bg-white/10 mb-8"></div>

        {/* BAGIAN BAWAH: Copyright & Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Yusdi Fathudin. All rights reserved.
          </p>

          {/* Social Icons (Kecil) */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/yusdi17" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/yusdi" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>

        </div>

        {/* Made With (Opsional - Pemanis) */}
        <div className="text-center mt-8">
            <p className="text-xs text-gray-600 flex items-center justify-center gap-1">
                Dibuat dengan <Heart size={12} className="text-red-500 fill-red-500" /> menggunakan React & Tailwind
            </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;