"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

type SkillCategory = {
  id: number;
  icon: string;
  category: string;
  skills: {
    name: string;
    level: number;
  }[];
};

interface SkillsProps {
  skillCategories: SkillCategory[];
}

export default function Skills({ skillCategories }: SkillsProps) {
  return (
    <motion.section 
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-10%" }}
      className="py-28 scroll-section"
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Keahlian" path="/skills" />
        
        <div className="relative">
          {/* Background decorations */}
          <div className="absolute top-10 -left-10 w-24 h-24 text-accent-color/10 hidden lg:block">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>
          
          <div className="absolute bottom-10 -right-10 w-40 h-40 text-accent-color/10 hidden lg:block">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
            </svg>
          </div>

          {/* Skills content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="retro-bg p-6 md:p-8 relative"
            >
              <div className="font-mono text-xs text-accent-color/80 absolute top-3 right-4">01/02</div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-display mb-2">Teknis</h3>
                <p className="text-sm text-gray-600 font-mono">
                  Keahlian teknis dalam pengembangan aplikasi
                </p>
              </div>
              
              <div className="space-y-6">
                {skillCategories.slice(0, Math.ceil(skillCategories.length / 2)).map((category) => (
                  <div key={category.id} className="mb-8">
                    <div className="flex items-center mb-4">
                      <span className="text-lg mr-3 text-accent-color">
                        <i className={category.icon}></i>
                      </span>
                      <h4 className="text-xl font-display">{category.category}</h4>
                    </div>
                    
                    <div className="retro-divider text-xs my-2">SKILLSET {category.category.toUpperCase()}</div>
                    
                    <div className="space-y-5">
                      {category.skills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-700 font-mono text-sm">{skill.name}</span>
                            <span className="text-accent-color font-mono text-xs">{skill.level}%</span>
                          </div>
                          <div className="w-full h-1 bg-gray-200 overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                              viewport={{ once: true }}
                              className="h-full bg-accent-color"
                            ></motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="retro-bg p-6 md:p-8 relative"
            >
              <div className="font-mono text-xs text-accent-color/80 absolute top-3 right-4">02/02</div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-display mb-2">Non-Teknis</h3>
                <p className="text-sm text-gray-600 font-mono">
                  Keahlian pendukung dan soft skills penting
                </p>
              </div>
              
              <div className="space-y-6">
                {skillCategories.slice(Math.ceil(skillCategories.length / 2)).map((category) => (
                  <div key={category.id} className="mb-8">
                    <div className="flex items-center mb-4">
                      <span className="text-lg mr-3 text-accent-color">
                        <i className={category.icon}></i>
                      </span>
                      <h4 className="text-xl font-display">{category.category}</h4>
                    </div>
                    
                    <div className="retro-divider text-xs my-2">SKILLSET {category.category.toUpperCase()}</div>
                    
                    <div className="space-y-5">
                      {category.skills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-700 font-mono text-sm">{skill.name}</span>
                            <span className="text-accent-color font-mono text-xs">{skill.level}%</span>
                          </div>
                          <div className="w-full h-1 bg-gray-200 overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                              viewport={{ once: true }}
                              className="h-full bg-accent-color"
                            ></motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="retro-divider mt-16">
            <span>SKILLSET</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
} 