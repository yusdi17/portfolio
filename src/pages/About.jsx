import React from 'react';
import { 
  Code, Server, Cpu, // Icon Expertise
  GraduationCap, Briefcase, Award, CheckCircle2, CircleDashed, ArrowRight 
} from 'lucide-react';

const About = () => {
  
  // --- DATA 1: EXPERTISE ---
  const expertiseData = [
    {
      icon: <Code size={32} />,
      title: "Full Stack Development",
      description: "Membangun aplikasi web end-to-end dengan performa tinggi menggunakan React dan Laravel.",
      stack: ["React", "Laravel", "Tailwind", "MySQL"]
    },
    {
      icon: <Server size={32} />,
      title: "DevOps & Cloud",
      description: "Deployment otomatis dan manajemen server untuk memastikan aplikasi berjalan stabil di production.",
      stack: ["Docker", "Linux", "Git", "CI/CD"]
    },
    {
      icon: <Cpu size={32} />,
      title: "AI & Machine Learning",
      description: "Eksplorasi integrasi kecerdasan buatan untuk membuat aplikasi yang lebih cerdas dan adaptif.",
      stack: ["Python", "NLP", "Pandas", "API"]
    }
  ];

  const roadmapData = [
    {
      id: 1,
      year: "2022 - Sekarang",
      title: "S1 Teknik Informatika",
      institution: "Universitas Amikom Purwokerto",
      description: "Mempelajari fundamental ilmu komputer, algoritma, dan rekayasa perangkat lunak. Aktif dalam organisasi kemahasiswaan.",
    },
    {
      id: 2,
      year: "2025 (Feb - Jun)",
      title: "Studi Independen Bersertifikat (SIB)",
      institution: "Fullstack Web Developer",
      description: "Menyelesaikan kurikulum intensif Cloud Computing/Frontend. Mengerjakan Capstone Project dengan tim sebagai syarat kelulusan.",
    },
    {
      id: 3,
      year: "2025 (Sep - Jan)",
      title: "Web Developer Intern",
      institution: "PT. Bolasoft Indonesia",
      description: "Terlibat langsung dalam pengembangan fitur backend, perbaikan bug, dan kolaborasi dengan tim senior dalam agile environment.",
    }
  ];

  return (
    <section id="about"  className="min-h-screen flex items-center pt-20 md:pt-0">
       {/* Background Glow */}
       <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-[120px] -z-10"></div>
       <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 md:px-12">
        
        {/* === BAGIAN 1: EXPERTISE === */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
            Keahlian & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Ekspertise</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertiseData.map((item, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/30 transition-all duration-300 group hover:-translate-y-1">
                <div className="text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6 text-sm">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-[12px] font-medium rounded-full bg-teal-900/20 text-teal-200 border border-teal-800/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*ROADMAP */}
        <div className="relative">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Perjalanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Karir</span>
            </h2>
          </div>

          <div className="relative mx-auto max-w-5xl">
            
            {/* GARIS TENGAH (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500/50 via-blue-500/50 to-transparent -translate-x-1/2"></div>
            
            {/* GARIS KIRI MOBILE */}
            <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gray-800"></div>

            <div className="space-y-12 md:space-y-0">
              {roadmapData.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={item.id} className={`relative flex items-center md:justify-between ${isEven ? 'flex-row-reverse' : ''}`}>
                    
                    {/* SPACER UNTUK SISI KOSONG (Desktop Only) */}
                    <div className="hidden md:block w-5/12"></div>

                    {/* CENTRAL NODE */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#0a0a0a] border-4 border-teal-500/30 z-10 shadow-[0_0_15px_rgba(20,184,166,0.5)]">
                      <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                    </div>

                    {/* KARTU KONTEN */}
                    <div className="w-full pl-20 md:pl-0 md:w-5/12">
                      <div className={`
                        relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-all duration-300 group
                        ${isEven ? 'md:text-right' : 'md:text-left'}
                      `}>
                        
                        {/* Tahun */}
                        <div className={`flex items-center gap-2 mb-2 text-sm font-mono text-teal-300 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          <span className="md:hidden"><ArrowRight size={14} /></span> {/* Icon mobile */}
                          {item.year}
                        </div>

                        {/* Judul & Institusi */}
                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                        <div className="text-lg text-blue-300 font-medium mb-4">{item.institution}</div>
                        
                        {/* Deskripsi */}
                        <p className="text-gray-400 text-sm leading-relaxed mb-5">
                          {item.description}
                        </p>

                        {/* Desktop Only Connector */}
                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-white/10 
                          ${isEven ? '-right-8' : '-left-8'}
                        `}></div>

                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;