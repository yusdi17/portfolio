import React from 'react';
import { Github, Linkedin, ArrowRight, Download, Instagram, Facebook } from 'lucide-react';
import ProfileCard from './ProfileCard';
import Aurora from './Aurora';
import myPhoto from '../assets/images/photo.jpeg';
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 md:pt-0">

      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Aurora
          colorStops={["#00d2ff", "#3a7bd5", "#7b4397"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left mt-10 md:mt-0">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-400">
              Halo, Saya Yusdi Fathudin
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Full Stack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Web Developer
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
              Membangun aplikasi web modern yang cepat dan scalable menggunakan <span className="font-semibold text-gray-200">React</span> & <span className="font-semibold text-gray-200">Laravel</span>. Tertarik pada pengembangan AI & Machine Learning.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <a href="#projects" className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20">
              Lihat Proyek <ArrowRight size={20} />
            </a>
            <a href="/cv.pdf" className="px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all flex items-center gap-2">
              Unduh CV <Download size={20} />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center md:justify-start gap-6 pt-6 text-gray-500">
            <a href="#" className="hover:text-white transition-colors"><Github size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={24} /></a>
            <a href="https://tiktok.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Foto */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative perspective-1000 p-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>
          <div className="w-[200px] h-[480px]">
            <ProfileCard
              name="Yusdi Fathudin"
              title="Software Engineer"
              handle="yusdi17"
              status="Online"
              avatarUrl={myPhoto}
              miniAvatarUrl={myPhoto}

              grainUrl={null}
              iconUrl={null}

              contactText="Contact Me"
              onContactClick={() => window.location.href = '#contact'}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;