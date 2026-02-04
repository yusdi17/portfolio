import React from 'react';
import { Mail, MessageSquare, Send, Wifi, Terminal, ArrowUpRight } from 'lucide-react';
import Lanyard from '@/components/Lanyard';

const Contact = () => {
  return (
    <section id="contact" className="w-full py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
      
      {/* Background Glow (Konsisten dengan section lain) */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-[120px] -translate-y-1/2 -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Mari <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Terhubung</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Saya selalu terbuka untuk proyek baru atau sekadar obrolan teknologi. Kirimkan sinyal Anda.
          </p>
        </div>

        {/* MAIN TERMINAL CARD */}
        <div className="max-w-5xl mx-auto bg-[#0f0f0f] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/20 flex flex-col md:flex-row">
          
          {/* === KOLOM KIRI: SYSTEM STATUS & INFO === */}
          <div className="w-full md:w-5/12 p-8 md:p-10 bg-[#111] border-r border-white/5 flex flex-col justify-between relative">
            
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />

            {/* 1. System Status */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                </span>
                <span className="text-xs font-mono font-bold tracking-widest text-teal-400">
                  SYSTEM STATUS: ONLINE
                </span>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                
                {/* Email Card */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/50 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-teal-500/10 text-teal-400 group-hover:bg-teal-500 group-hover:text-black transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h5 className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1">Email Me</h5>
                      <a href="mailto:email@anda.com" className="text-sm font-mono text-gray-200 hover:text-white block">
                        yusdi@example.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-black transition-colors">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <h5 className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1">Chat WhatsApp</h5>
                      <a href="https://wa.me/62812345678" target="_blank" rel="noreferrer" className="text-sm font-mono text-gray-200 hover:text-white block">
                        +62 812 3456 7890
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* 2. Bottom Uplink Animation */}
            <div className="mt-12 md:mt-0 pt-8 border-t border-dashed border-white/10">
              <div className="flex items-center gap-3 text-gray-600">
                <Wifi size={16} className="animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest uppercase animate-pulse">
                  ESTABLISHING SECURE UPLINK...
                </span>
              </div>
            </div>

          </div>

          {/* === KOLOM KANAN: FORM TRANSMISI === */}
          <div className="w-full md:w-7/12 p-8 md:p-10 bg-gradient-to-br from-[#151515] to-[#0a0a0a]">
            
            <div className="flex items-center gap-2 mb-8 text-white/80">
              <Terminal size={18} className="text-teal-500" />
              <h3 className="text-sm font-bold font-mono tracking-wider uppercase">
                INITIATE DATA TRANSMISSION
              </h3>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              {/* Input ID / Nama */}
              <div className="space-y-2 group">
                <label className="text-xs font-mono text-gray-500 group-focus-within:text-teal-400 transition-colors">
                  ID PENGIRIM / NAMA
                </label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white font-mono placeholder-gray-700 focus:outline-none focus:border-teal-500 transition-all"
                  placeholder="Masukkan identitas Anda..."
                />
              </div>

              {/* Input Email / Frekuensi */}
              <div className="space-y-2 group">
                <label className="text-xs font-mono text-gray-500 group-focus-within:text-teal-400 transition-colors">
                  FREKUENSI KOMUNIKASI (EMAIL)
                </label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white font-mono placeholder-gray-700 focus:outline-none focus:border-teal-500 transition-all"
                  placeholder="alamat@email.com"
                />
              </div>

              {/* Input Pesan / Data Transmisi */}
              <div className="space-y-2 group">
                <label className="text-xs font-mono text-gray-500 group-focus-within:text-teal-400 transition-colors">
                  DATA TRANSMISI PESAN
                </label>
                <textarea 
                  rows="4"
                  className="w-full bg-white/5 rounded-lg border border-white/10 p-4 text-white font-mono placeholder-gray-700 focus:outline-none focus:border-teal-500 focus:bg-white/[0.07] transition-all resize-none"
                  placeholder="Ketik pesan terenkripsi Anda di sini..."
                ></textarea>
              </div>

              {/* Tombol Aksi */}
              <button 
                type="submit"
                className="w-full group relative overflow-hidden py-4 bg-teal-600 hover:bg-teal-500 text-black font-bold font-mono uppercase tracking-wider transition-all"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Inisiasi Transmisi <ArrowUpRight size={18} />
                </span>
                
                {/* Hover Effect Glare */}
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;