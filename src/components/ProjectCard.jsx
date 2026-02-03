import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

const Projects = () => {
  // --- DATA PROYEK ---
  const projects = [
    {
      id: 1,
      title: "Web Self-Service Cafe",
      category: "Full Stack App",
      description: "Aplikasi berbasis web dengan fitur pesan mandiri untuk pelanggan kafe.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop", // Ganti dengan foto proyek Anda
      tech: ["HTML", "CSS", "JS"],
      // Ukuran Grid: Besar (Featured)
      className: "md:col-span-2 md:row-span-2"
    },
    {
      id: 2,
      title: "Finance Dashboard",
      category: "UI/UX Design",
      description: "Desain dashboard keuangan modern untuk manajemen aset pribadi.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      tech: ["Figma", "React"],
      // Ukuran Grid: Kecil Panjang
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 3,
      title: "E-Commerce Mobile",
      category: "Mobile App",
      description: "Aplikasi belanja online dengan fitur pembayaran digital.",
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ce7d87?q=80&w=1000&auto=format&fit=crop",
      tech: ["Flutter", "Firebase"],
      // Ukuran Grid: Kecil
      className: "md:col-span-1 md:row-span-1"
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center pt-20 md:pt-0">
      <div className="container mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="text-center mb-16 mt-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Proyek <span className="text-teal-400">Terpilih</span>
          </h2>
          <p className="text-gray-400">Beberapa karya yang menyoroti keahlian saya.</p>
        </div>

        {/* BENTO GRID LAYOUT */}
        {/* Grid 3 Kolom, tinggi baris otomatis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

          {projects.map((project) => (
            <div
              key={project.id}
              className={`
                group relative overflow-hidden rounded-3xl border border-white/10 bg-gray-900 
                ${project.className}
              `}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">

                {/* Kategori Kecil */}
                <span className="text-teal-400 text-xs font-bold uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>

                {/* Judul Besar */}
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                  {project.title}
                </h3>

                {/* Deskripsi */}
                <p className="text-gray-300 text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Pills & Link */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 text-[10px] font-medium bg-white/10 border border-white/20 rounded-md text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Tombol Lihat */}
                  <a href="#" className="p-2 bg-teal-500 rounded-full text-black hover:bg-teal-400 transition-colors">
                    <ArrowUpRight size={18} />
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;