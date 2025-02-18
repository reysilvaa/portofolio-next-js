// components/Projects.tsx
import React, { JSX } from 'react';
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
  return (
    <section className="mb-24" id="projects">
      <h2 className="text-3xl font-bold mb-10 after:content-[''] after:block after:w-20 after:h-1 after:bg-yellow-400 after:mt-4"></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="group">
            <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl relative">
              <Link href={project.link}>
                <div className="relative h-64 w-full">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 text-white text-center p-4 transition-opacity duration-300">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm">{project.category}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
