import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const GithubStats = () => {
  return (
    <section className="w-full py-16 text-white border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-8">
           <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
            Aktivitas <span className="text-teal-400">Coding</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Jejak kontribusi di GitHub secara real-time.
          </p>
        </div>

        {/* Calendar Container */}
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-teal-500/30 transition-all duration-300 shadow-2xl shadow-teal-900/10">
          <GitHubCalendar 
            username="yusdi17" // Username GitHub Anda
            year={2026}
            blockSize={14}     // Ukuran kotak
            blockMargin={4}    // Jarak antar kotak
            fontSize={12}
            
            // TEMA WARNA (Kustomisasi Teal agar senada dengan web)
            theme={{
              light: ['#1f2937', '#0f766e', '#0d9488', '#14b8a6', '#2dd4bf'],
              dark: [
                '#1a1a1a', // Level 0 (Kosong) - Abu gelap
                '#134e4a', // Level 1 - Teal Sangat Gelap
                '#0f766e', // Level 2 - Teal Gelap
                '#2dd4bf', // Level 3 - Teal Terang
                '#5eead4', // Level 4 - Teal Sangat Terang (Neon)
              ],
            }}
            
            // Label tooltip
            labels={{
              totalCount: '{{count}} kontribusi di tahun terakhir',
            }}
          />
        </div>

        {/* Link ke Profil */}
        <a 
          href="https://github.com/yusdi17" 
          target="_blank" 
          rel="noreferrer"
          className="mt-6 text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-2"
        >
          Lihat profil lengkap di GitHub <span>→</span>
        </a>

      </div>
    </section>
  );
};

export default GithubStats;