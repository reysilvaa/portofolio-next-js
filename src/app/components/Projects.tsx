"use client"
import React, { JSX, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { WesternProjectCard } from '@/components/western-project-card';

type ProjectItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link: string;
  githubLink?: string;
};

interface ProjectsProps {
  projects: ProjectItem[];
}

export default function Projects({ projects }: ProjectsProps): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3); // Initial count of visible projects
  const sectionRef = useRef<HTMLDivElement>(null);

  // Check if there are more projects to show
  const hasMore = visibleCount < projects.length;

  // Intersection Observer setup
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

    return () => {
      observer.disconnect();
    };
  }, []);

  // Function to handle "View More" click
  const handleViewMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 3, projects.length));
  };

  return (
    <div className="relative" ref={sectionRef}>
      {/* Latar belakang bergaya papan pengumuman Wild West */}
      <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-repeat"
             style={{ 
               backgroundImage: "url('/textures/wood-grain.jpg')",
               backgroundSize: "400px"
             }}>
        </div>
      </div>
      
      {/* Container utama */}
      <div className="relative z-10">
        {/* Dekorasi papan arah */}
        <motion.div 
          initial={{ opacity: 0, y: -50, rotate: -5 }}
          animate={isVisible ? { opacity: 1, y: 0, rotate: -5 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mb-16 mx-auto w-fit transform -rotate-5"
        >
          <div className="bg-cowboy-wood dark:bg-cowboy-leather py-4 px-16 border-4 border-cowboy-leather dark:border-cowboy-gold shadow-xl text-center">
            <h2 className="text-3xl font-western text-cowboy-leather dark:text-cowboy-gold tracking-wide uppercase">
              Proyek
            </h2>
            <div className="western-divider w-40 h-2 mt-2 mx-auto"></div>
          </div>
          
          {/* Tiang papan */}
          <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 w-8 h-20 bg-cowboy-wood dark:bg-cowboy-leather border-x-4 border-cowboy-leather dark:border-cowboy-gold"></div>
        </motion.div>
        
        {/* Grid Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.slice(0, visibleCount).map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <WesternProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
        {/* Tombol lihat lebih banyak */}
        {hasMore && (
          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <button 
              onClick={handleViewMore}
              className="bg-cowboy-leather dark:bg-cowboy-gold text-white dark:text-cowboy-wood 
                        font-western tracking-wide py-3 px-8 text-xl
                        border-2 border-cowboy-leather dark:border-cowboy-gold
                        shadow-md hover:bg-cowboy-rust hover:border-cowboy-rust
                        transition-all duration-300 transform hover:scale-105 active:scale-95
                        uppercase flex items-center relative"
            >
              <span>Lihat Lainnya</span>
              
              {/* Dekorasi peluru */}
              <div className="absolute -right-2 -top-2 w-6 h-6 bg-cowboy-gold dark:bg-cowboy-rust rounded-full border-2 border-cowboy-leather flex items-center justify-center transform rotate-12">
                <div className="w-1 h-3 bg-cowboy-leather"></div>
              </div>
              <div className="absolute -left-2 -bottom-2 w-6 h-6 bg-cowboy-gold dark:bg-cowboy-rust rounded-full border-2 border-cowboy-leather flex items-center justify-center transform -rotate-12">
                <div className="w-1 h-3 bg-cowboy-leather"></div>
              </div>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}