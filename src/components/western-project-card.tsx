"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectProps {
  project: {
    title: string
    description: string
    image: string
    tags: string[]
    link?: string
    githubLink?: string
  }
}

export const WesternProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="relative group">
      {/* Kartu Utama */}
      <div className="bg-cowboy-parchment dark:bg-cowboy-wood border-4 border-cowboy-leather dark:border-cowboy-gold 
                      shadow-lg transform transition duration-300 group-hover:rotate-0 rotate-1
                      overflow-hidden flex flex-col h-full">
        
        {/* Pin Dekoratif */}
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-cowboy-gold rounded-full border-2 border-cowboy-leather z-10 
                        shadow-md flex items-center justify-center">
          <div className="w-2 h-2 bg-cowboy-rust rounded-full"></div>
        </div>
        
        {/* Gambar Proyek */}
        <div className="relative h-48 w-full overflow-hidden border-b-2 border-cowboy-leather dark:border-cowboy-gold">
          {project.image ? (
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-cowboy-leather/20 dark:bg-cowboy-gold/20">
              <span className="text-cowboy-leather dark:text-cowboy-gold font-western text-xl">
                No Image
              </span>
            </div>
          )}
          
          {/* Overlay bayangan */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* Tags di atas gambar */}
          <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1 z-10">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="text-xs font-scrapbook py-1 px-2 bg-cowboy-rust dark:bg-cowboy-gold text-white dark:text-cowboy-wood rounded-sm inline-block"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs font-scrapbook py-1 px-2 bg-cowboy-leather/70 dark:bg-cowboy-gold/70 text-white rounded-sm inline-block">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
        
        {/* Konten Proyek */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-western text-cowboy-leather dark:text-cowboy-gold mb-2 tracking-wide uppercase">
            {project.title}
          </h3>
          
          <p className="text-sm font-scrapbook text-gray-700 dark:text-cowboy-sand mb-4 flex-grow">
            {project.description}
          </p>
          
          {/* Tombol Proyek */}
          <div className="flex gap-3 mt-auto pt-2">
            {project.link && (
              <Link 
                href={project.link}
                className="flex-1 py-2 text-center bg-cowboy-leather dark:bg-cowboy-gold text-white dark:text-cowboy-wood 
                           font-western tracking-wide text-sm transition-all hover:bg-cowboy-rust
                           border-2 border-cowboy-leather dark:border-cowboy-gold"
                target="_blank"
                rel="noreferrer"
              >
                LIHAT PROYEK
              </Link>
            )}
            
            {project.githubLink && (
              <Link 
                href={project.githubLink}
                className="flex items-center justify-center w-10 h-10 bg-cowboy-leather dark:bg-cowboy-gold 
                           text-white dark:text-cowboy-wood transition-all hover:bg-cowboy-rust
                           border-2 border-cowboy-leather dark:border-cowboy-gold"
                target="_blank"
                rel="noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </Link>
            )}
          </div>
        </div>
        
        {/* Efek Sobekan Kertas */}
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-cowboy-parchment dark:bg-cowboy-wood
                        clip-path-torn-paper-bottom"></div>
      </div>
      
      {/* Bayangan Kartu */}
      <div className="absolute inset-0 bg-cowboy-leather/20 dark:bg-cowboy-gold/20 transform translate-x-2 translate-y-2 -z-10
                      transition duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
    </div>
  )
} 