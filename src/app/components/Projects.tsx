"use client"
import React, { JSX, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
  const [visibleCount, setVisibleCount] = useState(6); // Initial count of visible projects
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
            <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl relative">
              <Link href={project.link}>
                <div className="relative h-64 w-full">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 text-white text-center p-4 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm">{project.category}</p>
                      <span className="mt-4 inline-block px-4 py-2 border border-white rounded-full text-xs hover:bg-white hover:text-black transition-colors duration-300">
                        Lihat Detail
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* View More button */}
      {hasMore && (
        <div className={`mt-12 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
             style={{ animationDelay: '0.8s' }}>
          <button 
            onClick={handleViewMore}
            className="px-6 py-3 bg-transparent border-2 border-yellow-400 text-gray-800 rounded-lg 
                     transition-all duration-300 hover:bg-yellow-400 hover:text-white
                     focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50
                     transform hover:-translate-y-1 active:translate-y-0"
          >
            Lihat Lebih Banyak
            <span className="ml-2 inline-block transform group-hover:rotate-90 transition-transform duration-300">→</span>
          </button>
        </div>
      )}
    </section>
  );
}