"use client";
import React, { JSX, useState } from 'react';
import { motion } from 'framer-motion';

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

export default function WorkExperience({ experiences }: WorkExperienceProps): JSX.Element {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Timeline line berbentuk tali */}
      <div className="absolute left-8 md:left-1/4 w-2 h-full bg-gradient-to-b from-cowboy-leather via-cowboy-rust to-cowboy-leather dark:from-cowboy-gold dark:via-cowboy-sand dark:to-cowboy-gold transform -translate-x-1/2"></div>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id} 
            className="relative flex flex-col md:flex-row"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setActiveId(exp.id)}
            onMouseLeave={() => setActiveId(null)}
          >
            {/* Timeline node - revolver/sheriff badge */}
            <motion.div 
              className={`absolute left-8 md:left-1/4 w-10 h-10 bg-cowboy-parchment dark:bg-cowboy-wood
                        border-2 border-cowboy-leather dark:border-cowboy-gold rounded-full
                        shadow-lg transform -translate-x-1/2 flex items-center justify-center
                        ${index % 2 === 0 ? 'sheriff-badge' : 'rounded-full'}`}
              animate={{ 
                scale: activeId === exp.id ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {index % 2 === 0 ? (
                <span className="text-xs font-western text-cowboy-leather dark:text-cowboy-gold">{index + 1}</span>
              ) : (
                <span className="revolver-icon"></span>
              )}
            </motion.div>

            {/* Content - left side - job title */}
            <div className="md:w-1/4 pl-16 md:pl-0 md:pr-16 mb-4 md:mb-0 md:text-right">
              <motion.h3 
                className="text-xl font-western text-cowboy-leather dark:text-cowboy-gold tracking-wide"
                animate={{ 
                  scale: activeId === exp.id ? 1.05 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                {exp.position}
              </motion.h3>
              <p className="text-cowboy-rust dark:text-cowboy-sand font-scrapbook italic">{exp.company}</p>
              <p className="text-cowboy-leather/70 dark:text-cowboy-gold/70 font-scrapbook text-sm">{exp.duration}</p>
            </div>
            
            {/* Content - right side - description */}
            <motion.div 
              className="md:w-3/4 pl-16 md:pl-16 pt-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className={`p-5 bg-cowboy-parchment/80 dark:bg-cowboy-wood/80 
                          border-2 border-cowboy-leather dark:border-cowboy-gold 
                          transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}
                          relative overflow-hidden`}
                animate={{ 
                  boxShadow: activeId === exp.id ? 
                    '0 10px 25px -5px rgba(var(--cowboy-leather), 0.3)' : 
                    '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cowboy-leather/30 dark:border-cowboy-gold/30"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cowboy-leather/30 dark:border-cowboy-gold/30"></div>
                
                {/* Bullet holes pada card */}
                {index % 3 === 0 && (
                  <div className="absolute top-3 right-3 bullet-holes bullet-hole-1"></div>
                )}
                {index % 3 === 1 && (
                  <div className="absolute bottom-3 left-5 bullet-holes bullet-hole-2"></div>
                )}
                
                <ul className="list-none space-y-3 font-scrapbook text-cowboy-leather dark:text-cowboy-sand relative z-10">
                  {exp.description.map((point, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                      className="flex items-start"
                    >
                      <span className="inline-block mt-1.5 mr-2 w-3 h-3 bg-cowboy-leather/20 dark:bg-cowboy-gold/20 clip-path-star"></span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      {/* Decorative rope end */}
      <div className="absolute bottom-0 left-8 md:left-1/4 transform -translate-x-1/2 translate-y-6">
        <div className="w-6 h-6 bg-cowboy-leather dark:bg-cowboy-gold clip-path-star"></div>
      </div>
    </div>
  );
}