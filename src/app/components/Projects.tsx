"use client"
import React, { JSX, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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

export default function Projects({ projects }: ProjectsProps): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3); // Initial count of visible projects
  const sectionRef = useRef<HTMLElement>(null);

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
    <section className="mb-24 relative" id="projects" ref={sectionRef}>
      {/* Decorative background elements */}
      <div className={`absolute -z-10 top-20 right-20 w-32 h-32 bg-yellow-50 rounded-full opacity-0 ${
        isVisible ? 'animate-scale-fade' : ''
      }`} style={{ animationDelay: '0.2s' }}></div>
      <div className={`absolute -z-10 bottom-40 left-10 w-24 h-24 bg-blue-50 rounded-full opacity-0 ${
        isVisible ? 'animate-scale-fade' : ''
      }`} style={{ animationDelay: '0.4s' }}></div>
      
      <h2 className={`text-3xl font-bold mb-10 relative ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}>
        Projek
        <span className={`block w-0 h-1 bg-yellow-400 mt-4 ${
          isVisible ? 'animate-expand-line' : ''
        }`}></span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(0, visibleCount).map((project, index) => (
          <div 
            key={project.id} 
            className={`group transform opacity-0 ${
              isVisible ? 'animate-card-appear' : ''
            }`} 
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <div className="overflow-hidden rounded-lg shadow-md transition-all duration-500 group-hover:shadow-2xl relative bg-white group-hover:-translate-y-2">
              <Link href={project.link} className="block relative">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-yellow-400 mix-blend-overlay opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 text-white text-center p-6 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0 w-full h-full flex flex-col items-center justify-center backdrop-blur-sm group-hover:backdrop-blur-none bg-black bg-opacity-0 group-hover:bg-opacity-50">
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-300 transition-colors duration-300">{project.title}</h3>
                      <p className="text-md mb-5 text-white/90">{project.category}</p>
                      <span className="inline-block px-6 py-3 border-2 border-yellow-400 rounded-full text-sm font-medium text-white hover:bg-yellow-400 hover:text-black transition-all duration-300 transform group-hover:scale-105 active:scale-95">
                        Lihat Detail
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Simplified View More button with Lucide React arrow */}
      {hasMore && (
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
             style={{ animationDelay: '0.8s' }}>
          <button 
            onClick={handleViewMore}
            className="group inline-flex items-center text-gray-800 font-medium
                   transition-all duration-300 relative
                   focus:outline-none"
            aria-label="Lihat lebih banyak projek"
          >
            <span className="relative z-10 group-hover:text-yellow-600 transition-colors duration-300">Lihat Lebih Banyak</span>
            <span className="relative overflow-hidden ml-2 transform transition-all duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-5 h-5 inline-block text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300" />
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
        </div>
      )}

    
    </section>
  );
}