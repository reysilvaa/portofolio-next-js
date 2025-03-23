"use client"

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  
  // Parallax scrolling for image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const imgY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const textX = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.section 
      id="about"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-10%" }}
      className="py-28 scroll-section"
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Tentang Saya" path="/about" />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-3 order-2 md:order-1"
            style={{ x: textX }}
          >
            <div className="retro-bg p-6 md:p-10">
              <div className="font-mono text-sm text-accent-color/70 mb-4">/ tentang aku</div>
              
              <div className="space-y-6">
                <div className="retro-divider text-xs mb-4">TENTANG SAYA</div>
                
                <p className="text-gray-700 leading-relaxed">
                  Sebagai <span className="font-semibold">developer</span> dengan keahlian di bidang web dan mobile development, saya menggabungkan ketepatan teknis dengan estetika yang bersih. Pendekatan saya fokus pada pembuatan solusi teknis yang elegan namun fungsional.
                </p>
                
                <div className="relative py-4 pl-5 border-l-2 border-accent-color/30">
                  <div className="absolute -left-1 top-0 w-2 h-2 bg-accent-color rounded-full"></div>
                  <div className="absolute -left-1 bottom-0 w-2 h-2 bg-accent-color rounded-full"></div>
                  <p className="text-sm italic">
                  &quot;Saya percaya bahwa kode yang baik harus seperti prosa yang jelas—mudah dibaca, dipahami, dan dipelihara. Kerangka berpikir ini saya terapkan di setiap proyek yang saya kerjakan&quot;
                  </p>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  Dengan latar belakang pendidikan di bidang teknologi informasi dan pengalaman profesional dalam pengembangan aplikasi, saya berusaha menciptakan produk digital yang tidak hanya memenuhi kebutuhan fungsional tetapi juga memberikan pengalaman pengguna yang intuitif.
                </p>
                
                <div className="retro-divider text-xs my-3">KEAHLIAN UTAMA</div>
                
                <div className="flex flex-wrap gap-3 pt-4 font-mono text-xs">
                  <span className="px-3 py-1 border border-accent-color/20 text-accent-color">Web Development</span>
                  <span className="px-3 py-1 border border-accent-color/20 text-accent-color">Mobile Apps</span>
                  <span className="px-3 py-1 border border-accent-color/20 text-accent-color">UX Design</span>
                  <span className="px-3 py-1 border border-accent-color/20 text-accent-color">Problem Solving</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            ref={imgRef}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ y: imgY }}
            className="md:col-span-2 order-1 md:order-2 relative"
          >
            <div className="scrapbook-item -rotate-3 max-w-[300px] mx-auto md:mx-0 md:ml-auto">
              <div className="scrapbook-tape absolute -top-2 left-1/3 rotate-12"></div>
              <div className="old-paper p-3 bg-white">
                <Image
                  src="/image/me.png"
                  alt="Moch Reynald Silva Baktiar"
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>
              
              <div className="absolute bottom-4 right-4 transform rotate-12">
                <div className="font-mono text-xs bg-white py-1 px-3 shadow-sm">
                  Developer
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/4 -left-10 w-20 h-20 text-accent-color/20 hidden md:block">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 20L80 80" stroke="currentColor" strokeWidth="1" />
                <path d="M20 80L80 20" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
          </motion.div>
        </div>
        
        <div className="retro-divider mt-16">
          <span>TENTANG SAYA</span>
        </div>
      </div>
    </motion.section>
  );
} 