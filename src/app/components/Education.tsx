"use client";
import React, { JSX, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type EducationItem = {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string | string[];
};

interface EducationProps {
  educationList: EducationItem[];
}

export default function Education({ educationList }: EducationProps): JSX.Element {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const renderDescription = (description: string | string[], id: number) => {
    const isExpanded = expandedIds.includes(id);
    const displayItems = 
      typeof description === 'string' 
      ? [description] 
      : isExpanded 
        ? description 
        : description.slice(0, 3);

    const hiddenCount = Array.isArray(description) ? description.length - 3 : 0;

    return (
      <>
        <AnimatePresence mode="wait">
          <motion.ul 
            className="list-none space-y-3 font-scrapbook text-cowboy-leather dark:text-cowboy-sand"
            initial={{ opacity: 0, minHeight: 0 }}
            animate={{ opacity: 1, minHeight: 'auto' }}
            exit={{ opacity: 0, minHeight: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            key={isExpanded ? 'expanded' : 'collapsed'}
          >
            {displayItems.map((point, i) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3, delay: 0.05 * i }}
                className="flex items-start"
              >
                <span className="inline-block mt-1.5 mr-2 w-3 h-3 bg-cowboy-leather/20 dark:bg-cowboy-gold/20 clip-path-star"></span>
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
        
        {hiddenCount > 0 && (
          <motion.button
            onClick={() => toggleExpand(id)}
            className="mt-4 flex items-center text-cowboy-rust dark:text-cowboy-gold font-western text-sm tracking-wide"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? (
              <>
                <span className="inline-block w-4 h-4 mr-2 transform rotate-180">▼</span>
                SEMBUNYIKAN {hiddenCount} ITEM
              </>
            ) : (
              <>
                <span className="inline-block w-4 h-4 mr-2">▼</span>
                TAMPILKAN {hiddenCount} ITEM
              </>
            )}
          </motion.button>
        )}
      </>
    );
  };

  return (
    <div className="relative">
      {/* Background peta kuno */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-repeat"
             style={{ 
               backgroundImage: "url('/textures/old-map.jpg')",
               backgroundSize: "600px"
             }}>
        </div>
      </div>
      
      {/* Container utama */}
      <div className="relative z-10">
        <div className="grid grid-cols-1 gap-8">
          {educationList.map((edu, index) => (
            <motion.div 
              key={edu.id} 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Education card with scroll styling */}
              <div className={`bg-cowboy-parchment dark:bg-cowboy-wood border-4 border-cowboy-leather dark:border-cowboy-gold
                            p-5 relative overflow-hidden transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                
                {/* Decorative scrolls at top and bottom of the card */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-cowboy-leather dark:bg-cowboy-gold rounded-b-md transform translate-y-1">
                  <div className="absolute left-1/4 bottom-0 w-1/2 h-2 bg-cowboy-parchment dark:bg-cowboy-wood"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-cowboy-leather dark:bg-cowboy-gold rounded-t-md transform -translate-y-1">
                  <div className="absolute left-1/4 top-0 w-1/2 h-2 bg-cowboy-parchment dark:bg-cowboy-wood"></div>
                </div>
                
                {/* Education Content */}
                <div className="py-6 px-2">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    {/* Institution badge/seal */}
                    <div className="md:w-1/4 flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full bg-cowboy-leather dark:bg-cowboy-gold flex items-center justify-center relative mb-3">
                        <div className="sheriff-badge absolute inset-0 opacity-50"></div>
                        <span className="font-western text-cowboy-parchment dark:text-cowboy-wood text-2xl">
                          {edu.institution.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                      
                      <div className="text-center">
                        <h3 className="font-western text-xl text-cowboy-leather dark:text-cowboy-gold tracking-wide">
                          {edu.degree}
                        </h3>
                        <p className="font-scrapbook text-cowboy-rust dark:text-cowboy-sand italic mt-1">
                          {edu.institution}
                        </p>
                        <p className="font-scrapbook text-sm text-cowboy-leather/70 dark:text-cowboy-gold/70 mt-1">
                          {edu.duration}
                        </p>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="md:w-3/4 mt-4 md:mt-0">
                      <div className="flex items-center mb-4">
                        <span className="font-western text-lg text-cowboy-leather dark:text-cowboy-gold mr-3">PENCAPAIAN</span>
                        <div className="flex-grow h-px bg-cowboy-leather/30 dark:bg-cowboy-gold/30"></div>
                      </div>
                      {renderDescription(edu.description, edu.id)}
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                {index % 3 === 0 && (
                  <div className="absolute top-3 right-3 bullet-holes bullet-hole-1"></div>
                )}
                {index % 3 === 1 && (
                  <div className="absolute bottom-10 left-5 bullet-holes bullet-hole-2"></div>
                )}
              </div>
              
              {/* Connector between cards */}
              {index < educationList.length - 1 && (
                <div className="flex justify-center my-4">
                  <div className="w-px h-16 bg-cowboy-leather/30 dark:bg-cowboy-gold/30">
                    <div className="w-6 h-6 rounded-full bg-cowboy-leather dark:bg-cowboy-gold transform -translate-x-1/2 translate-y-6"></div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
