"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

type ExperienceItem = {
  id: number;
  position: string;
  company: string;
  duration: string;
  description: string[];
};

interface WorkExperienceProps {
  experiences: ExperienceItem[];
}

export default function WorkExperience({ experiences }: WorkExperienceProps) {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <motion.section 
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-10%" }}
      className="py-28 scroll-section"
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Pengalaman" path="/experience" />

        <div className="relative mt-12">
          {/* Vintage Timeline line */}
          <div className="absolute left-0 md:left-1/4 w-[2px] h-full bg-accent-color/20 transform -translate-x-1/2 
                        after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full 
                        after:bg-gradient-to-b after:from-transparent after:via-accent-color/10 after:to-transparent"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id} 
                className="relative flex flex-col md:flex-row group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveId(exp.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                {/* Timeline node with retro style */}
                <motion.div 
                  className="absolute left-0 md:left-1/4 w-6 h-6 transform -translate-x-1/2 z-10"
                  animate={{ 
                    scale: activeId === exp.id ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full rounded-full border-2 border-accent-color bg-old-paper"></div>
                  <div className="absolute inset-0 rounded-full shadow-inner"></div>
                </motion.div>

                {/* Content */}
                <div className="md:w-1/4 pl-8 md:pl-0 md:pr-16 mb-4 md:mb-0 md:text-right relative">
                  <div className="font-mono text-xs text-accent-color/80 mb-2">
                    {String(index + 1).padStart(2, '0')}/{String(experiences.length).padStart(2, '0')}
                  </div>
                  <motion.h3 
                    className="text-xl font-display mb-2"
                    animate={{ color: activeId === exp.id ? 'var(--accent-color)' : 'var(--text-color)' }}
                    transition={{ duration: 0.3 }}
                  >
                    {exp.position}
                  </motion.h3>
                  <p className="text-accent-color/90 font-medium font-mono">{exp.company}</p>
                  <p className="text-text-color/60 font-mono text-sm">{exp.duration}</p>
                </div>
                
                <motion.div 
                  className="md:w-3/4 pl-8 md:pl-16 pt-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="retro-bg p-6 rounded-lg relative overflow-hidden"
                    animate={{ 
                      boxShadow: activeId === exp.id ? 'var(--shadow-vintage-active)' : 'var(--shadow-vintage)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-accent-color/5 transform rotate-45 translate-x-8 -translate-y-8"></div>
                    </div>

                    <div className="retro-divider text-xs my-2">DESKRIPSI PEKERJAAN</div>

                    <ul className="list-none space-y-3 relative z-10">
                      {exp.description.map((point, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start space-x-3 text-text-color/80"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                        >
                          <span className="text-accent-color">•</span>
                          <span className="font-serif">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="retro-divider mt-16">
          <span>PENGALAMAN</span>
        </div>
      </div>
    </motion.section>
  );
} 