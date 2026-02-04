import React from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center pt-20 md:pt-0">
      
      {/* Background Glow (Sama seperti section lain agar konsisten) */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-[120px] -translate-y-1/2 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* KOLOM KIRI: Informasi Kontak */}
          <div>
            <h4 className="text-teal-400 font-semibold tracking-widest text-sm uppercase mb-4">
              Kontak
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Mari Bekerja <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Sama.
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
              Punya ide proyek menarik atau ingin berdiskusi tentang teknologi? Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk peluang baru.
            </p>

            {/* List Detail Kontak */}
            <div className="space-y-6 mb-12">
              
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-teal-400 group-hover:bg-teal-500 group-hover:text-black transition-all duration-300">
                  <Mail size={22} />
                </div>
                <div>
                  <h5 className="text-sm text-gray-400 mb-1">Email</h5>
                  <p className="font-medium text-white group-hover:text-teal-400 transition-colors">
                    email.anda@example.com
                  </p>
                </div>
              </div>

              {/* Lokasi */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-teal-400 group-hover:bg-teal-500 group-hover:text-black transition-all duration-300">
                  <MapPin size={22} />
                </div>
                <div>
                  <h5 className="text-sm text-gray-400 mb-1">Lokasi</h5>
                  <p className="font-medium text-white group-hover:text-teal-400 transition-colors">
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div>
              <h5 className="text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wider">Ikuti Saya</h5>
              <div className="flex gap-4">
                <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-teal-500 hover:text-teal-400 transition-all">
                  <Github size={20} />
                </a>
                <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500 hover:text-blue-400 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-pink-500 hover:text-pink-400 transition-all">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: Form Input */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative">
             {/* Hiasan kecil di pojok form */}
             <div className="absolute top-0 right-0 p-4 opacity-20">
                <Send size={100} className="text-teal-500 -rotate-12" />
             </div>

            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Input Nama */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Nama</label>
                  <input 
                    type="text" 
                    placeholder="Nama Lengkap" 
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                  />
                </div>
                
                {/* Input Email */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="email@anda.com" 
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                  />
                </div>
              </div>

              {/* Input Subject */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Subjek</label>
                <input 
                  type="text" 
                  placeholder="Tawaran Proyek / Pertanyaan" 
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                />
              </div>

              {/* Input Pesan */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Pesan</label>
                <textarea 
                  rows="4"
                  placeholder="Tuliskan pesan Anda di sini..." 
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all resize-none"
                ></textarea>
              </div>

              {/* Tombol Kirim */}
              <button 
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold text-lg shadow-lg shadow-teal-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Kirim Pesan <Send size={20} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;