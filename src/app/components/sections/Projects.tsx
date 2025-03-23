"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

type ProjectItem = {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  link: string;
};

interface ProjectsProps {
  projects: ProjectItem[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const sectionRef = useRef<HTMLElement>(null);

  const hasMore = visibleCount < projects.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleViewMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, projects.length));
  };

  return (
    <motion.section 
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-10%" }}
      className="py-28 scroll-section"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Projek" path="/projects" />
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, staggerChildren: 0.1, delayChildren: 0.1 }}
        >
          {projects.slice(0, visibleCount).map((project, index) => (
            <motion.div 
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="retro-bg p-4 rounded-lg shadow-vintage transform transition-transform duration-500 hover:scale-[1.02] relative">
                {/* Decorative tape */}
                <div className="scrapbook-tape absolute -top-2 left-1/2 transform -translate-x-1/2 rotate-2"></div>
                
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                  <div className="absolute inset-0 bg-noise-pattern opacity-5"></div>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover filter sepia hover:sepia-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 border-4 border-white opacity-40"></div>
                </div>

                <div className="p-2">
                  <div className="font-mono text-xs text-accent-color/80 mb-2">
                    {String(index + 1).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
                  </div>
                  
                  <h3 className="font-display text-xl mb-2 text-text-color group-hover:text-accent-color transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="retro-divider text-xs my-2">PROJECT DETAIL</div>
                  
                  <p className="font-mono text-sm text-text-color/60 mb-4">
                    {project.category}
                  </p>

                  <Link 
                    href={project.link}
                    className="inline-flex items-center space-x-2 font-mono text-sm text-accent-color/80 hover:text-accent-color group/link"
                  >
                    <span>Lihat Detail</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent-color/30"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent-color/30"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent-color/30"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent-color/30"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {hasMore && (
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button 
              onClick={handleViewMore}
              className="inline-flex items-center space-x-3 font-mono text-accent-color/80 hover:text-accent-color group"
            >
              <span className="relative">
                Lihat Lebih Banyak
                <span className="absolute -bottom-1 left-0 w-full h-px bg-accent-color/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        )}
        
        <div className="retro-divider mt-16">
          <span>PROJEK</span>
        </div>
      </div>
    </motion.section>
  );
} 