"use client"

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative">
      {/* Dekorasi tali */}
      <div className="absolute -top-4 left-1/4 right-1/4 h-1 bg-cowboy-leather/30 dark:bg-cowboy-gold/30"></div>
      <div className="absolute -bottom-4 left-1/4 right-1/4 h-1 bg-cowboy-leather/30 dark:bg-cowboy-gold/30"></div>
      
      {/* Container utama */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
        {/* Foto profil dan dekorasinya */}
        <div className="lg:col-span-2 flex justify-center">
          <div className="relative">
            {/* Bingkai foto gaya wanted poster */}
            <div className="relative w-64 h-80 mx-auto border-4 border-cowboy-leather dark:border-cowboy-gold overflow-hidden shadow-wanted transform -rotate-1">
              <Image
                src="/image/profile.jpg"
                alt="Moch. Reynald Silva Baktiar"
                fill
                priority
                sizes="256px"
                style={{ objectFit: 'cover' }}
                className="grayscale hover:grayscale-0 transition-all duration-1000"
              />
              
              {/* Efek texture kertas di atas foto */}
              <div className="absolute inset-0 bg-cowboy-parchment/10 dark:bg-cowboy-wood/20 mix-blend-overlay"></div>
              
              {/* Efek lubang tembakan */}
              <div className="absolute top-3 right-3 bullet-holes"></div>
              <div className="absolute bottom-4 left-5 bullet-holes"></div>
            </div>
            
            {/* Dekorasi pojok */}
            <div className="absolute -top-4 -left-4 w-10 h-10 sheriff-badge bg-cowboy-gold"></div>
            <div className="absolute -bottom-4 -right-4 w-10 h-10 sheriff-badge bg-cowboy-gold"></div>
            
            {/* Stempel/cap bertuliskan "WANTED" */}
            <div className="absolute -bottom-6 -right-10 w-28 h-28 flex items-center justify-center rotate-12">
              <div className="w-full h-full rounded-full border-4 border-double border-cowboy-rust dark:border-cowboy-gold opacity-60"></div>
              <span className="absolute font-western text-cowboy-rust dark:text-cowboy-gold text-sm opacity-70 tracking-wider">
                AUTHENTIC
              </span>
            </div>
          </div>
        </div>
        
        {/* Konten teks */}
        <div className="lg:col-span-3">
          {/* Judul dengan gaya telegram */}
          <div className="font-western text-2xl text-cowboy-leather dark:text-cowboy-gold mb-4 tracking-wider border-b-2 border-cowboy-leather/30 dark:border-cowboy-gold/30 pb-2">
            TELEGRAPHIC BIO
          </div>
          
          {/* Paragraf dengan animasi */}
          <div className="space-y-4 font-scrapbook text-cowboy-leather dark:text-cowboy-sand leading-relaxed">
            <motion.p 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative pl-6"
            >
              <span className="absolute left-0 top-1 revolver-icon"></span>
              Seorang Full Stack Developer dengan pengalaman dalam mengembangkan aplikasi web yang responsif dan user-friendly menggunakan teknologi modern.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative pl-6"
            >
              <span className="absolute left-0 top-1 revolver-icon"></span>
              Saya memiliki keahlian dalam Frontend dan Backend development, dengan fokus pada JavaScript, TypeScript, React, Next.js, Node.js, dan Database SQL/NoSQL.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative pl-6"
            >
              <span className="absolute left-0 top-1 revolver-icon"></span>
              Ketertarikan saya dalam UI/UX design dan pengoptimalan performa aplikasi membantu saya menciptakan solusi yang efektif dan menarik secara visual.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative pl-6"
            >
              <span className="absolute left-0 top-1 revolver-icon"></span>
              Dengan semangat belajar yang tinggi, saya selalu berusaha mengikuti tren teknologi terbaru dan menerapkannya dalam pekerjaan saya.
            </motion.p>
          </div>
          
          {/* Fakta cepat dengan gaya "BOUNTY" */}
          <div className="mt-8 border-2 border-dashed border-cowboy-leather/50 dark:border-cowboy-gold/50 p-4 bg-cowboy-leather/5 dark:bg-cowboy-gold/5 transform rotate-1">
            <h3 className="font-western text-cowboy-leather dark:text-cowboy-gold mb-3 text-center tracking-wider">BOUNTY FACTS</h3>
            <div className="grid grid-cols-2 gap-4 font-scrapbook text-sm">
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 clip-path-star bg-cowboy-leather/30 dark:bg-cowboy-gold/30"></span>
                <span className="text-cowboy-leather dark:text-cowboy-sand">Lokasi: Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 clip-path-star bg-cowboy-leather/30 dark:bg-cowboy-gold/30"></span>
                <span className="text-cowboy-leather dark:text-cowboy-sand">Bahasa: Inggris, Indonesia</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 clip-path-star bg-cowboy-leather/30 dark:bg-cowboy-gold/30"></span>
                <span className="text-cowboy-leather dark:text-cowboy-sand">Hobi: Fotografi, Gaming</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 clip-path-star bg-cowboy-leather/30 dark:bg-cowboy-gold/30"></span>
                <span className="text-cowboy-leather dark:text-cowboy-sand">Karir: {new Date().getFullYear() - 2020}+ Tahun</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}