"use client";
import React, { JSX, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
  const [activeId, setActiveId] = useState<number | null>(null);
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
            className="list-disc list-inside ml-5 text-gray-600 space-y-2 overflow-y-hidden"
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
              >
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
        
        {hiddenCount > 0 && (
          <motion.button
            onClick={() => toggleExpand(id)}
            className="mt-3 flex items-center text-yellow-500 hover:text-yellow-700 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4 mr-1" />
                Sembunyikan {hiddenCount} item lainnya
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-1" />
                Tampilkan {hiddenCount} item lainnya
              </>
            )}
          </motion.button>
        )}
      </>
    );
  };

  return (
    <section className="mb-24" id="education">
      <h2 className="text-3xl font-bold mb-10 after:content-[''] after:block after:w-20 after:h-1 after:bg-yellow-400 after:mt-4">Education</h2>
      <div className="relative">
        <div className="absolute left-0 md:left-1/4 w-1 h-full bg-gray-200 transform -translate-x-1/2"></div>
        
        <div className="space-y-16">
          {educationList.map((edu, index) => (
            <motion.div 
              key={edu.id} 
              className="relative flex flex-col md:flex-row"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveId(edu.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              {/* Timeline node */}
              <motion.div 
                className="absolute left-0 md:left-1/4 w-5 h-5 rounded-full bg-yellow-400 border-4 border-white shadow-lg transform -translate-x-1/2"
                animate={{ 
                  scale: activeId === edu.id ? 1.5 : 1,
                  backgroundColor: activeId === edu.id ? '#FBBF24' : '#FBBF24'
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="md:w-1/4 pl-8 md:pl-0 md:pr-16 mb-4 md:mb-0 md:text-right">
                <motion.h3 
                  className="text-xl font-semibold text-gray-800"
                  animate={{ color: activeId === edu.id ? '#FBBF24' : '#1F2937' }}
                  transition={{ duration: 0.3 }}
                >
                  {edu.degree}
                </motion.h3>
                <p className="text-yellow-400 font-medium">{edu.institution}</p>
                <p className="text-gray-500">{edu.duration}</p>
              </div>
              
              <motion.div 
                className="md:w-3/4 pl-8 md:pl-16 pt-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="p-6 bg-white rounded-lg shadow-md"
                  animate={{ 
                    boxShadow: activeId === edu.id ? '0 10px 25px -5px rgba(251, 191, 36, 0.3)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {renderDescription(edu.description, edu.id)}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
