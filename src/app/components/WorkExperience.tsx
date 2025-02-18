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
    <section className="mb-24" id="experience">
      <h2 className="text-3xl font-bold mb-10 after:content-[''] after:block after:w-20 after:h-1 after:bg-yellow-400 after:mt-4">Pengalaman</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/4 w-1 h-full bg-gray-200 transform -translate-x-1/2"></div>
        
        <div className="space-y-16">
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
              {/* Timeline node */}
              <motion.div 
                className="absolute left-0 md:left-1/4 w-5 h-5 rounded-full bg-yellow-400 border-4 border-white shadow-lg transform -translate-x-1/2"
                animate={{ 
                  scale: activeId === exp.id ? 1.5 : 1,
                  backgroundColor: activeId === exp.id ? '#FBBF24' : '#FBBF24'
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="md:w-1/4 pl-8 md:pl-0 md:pr-16 mb-4 md:mb-0 md:text-right">
                <motion.h3 
                  className="text-xl font-semibold text-gray-800"
                  animate={{ color: activeId === exp.id ? '#FBBF24' : '#1F2937' }}
                  transition={{ duration: 0.3 }}
                >
                  {exp.position}
                </motion.h3>
                <p className="text-yellow-400 font-medium">{exp.company}</p>
                <p className="text-gray-500">{exp.duration}</p>
              </div>
              
              <motion.div 
                className="md:w-3/4 pl-8 md:pl-16 pt-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="p-6 bg-white rounded-lg shadow-md"
                  animate={{ 
                    boxShadow: activeId === exp.id ? '0 10px 25px -5px rgba(251, 191, 36, 0.3)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="list-disc ml-5 text-gray-600 space-y-2">
                    {exp.description.map((point, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}