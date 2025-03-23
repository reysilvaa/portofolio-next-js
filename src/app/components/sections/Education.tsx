"use client"

import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

// Mendefinisikan tipe data education
type EducationItem = {
  id: number;
  period: string;
  degree: string;
  major: string;
  institution: string;
  description: string[] | string;
  skills: string[];
};

interface EducationProps {
  educationList: EducationItem[];
}

export default function Education({ educationList }: EducationProps) {
  return (
    <motion.section 
      id="education"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-10%" }}
      className="py-28 scroll-section"
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Pendidikan" path="/education" />
        
        <div className="relative border-l-2 border-accent-color/30 ml-3 md:ml-6 mt-12 pb-8">
          {educationList.map((edu, index) => (
            <motion.div 
              key={edu.id}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 last:mb-0 relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[10px] md:-left-[13px] top-0 w-4 h-4 md:w-5 md:h-5 bg-accent-color rounded-full"></div>
              
              {/* Time period tag */}
              <div className="absolute -left-[100px] top-0 hidden md:block">
                <div className="font-mono text-xs py-1 px-2 text-accent-color">
                  {edu.period}
                </div>
              </div>
              
              <div className="retro-bg shadow-md p-6 md:p-8 ml-4">
                <div className="font-mono text-xs py-1 px-2 inline-block mb-3 text-accent-color md:hidden">
                  {edu.period}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <h4 className="text-base font-semibold text-gray-600 mb-4">{edu.major} • {edu.institution}</h4>
                
                <div className="retro-divider text-xs my-2">PENGALAMAN</div>
                
                {Array.isArray(edu.description) ? (
                  <div className="mb-5 max-h-64 overflow-y-auto pr-2 retro-scrollbar">
                    <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                      {edu.description.map((item, idx) => (
                        <motion.li 
                          key={idx} 
                          className="leading-relaxed"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          viewport={{ once: true }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="text-gray-700 mb-5">{edu.description}</p>
                )}
                
                <div className="retro-divider text-xs my-2">SKILLSET</div>
                
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <motion.span 
                      key={i} 
                      className="text-xs font-mono px-2 py-1 border border-accent-color/20 text-accent-color hover:bg-accent-color/10 transition-colors"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.05 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="retro-divider mt-16">
          <span>PENDIDIKAN</span>
        </div>
      </div>
    </motion.section>
  );
} 