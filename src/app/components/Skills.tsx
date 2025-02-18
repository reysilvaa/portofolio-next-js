"use client";
import React, { JSX, useEffect, useRef } from 'react';

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

export default function Skills({ skillCategories }: SkillsProps): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const skillBars = document.querySelectorAll('.skill-bar-fill');
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = (bar as HTMLElement).dataset.level || '0%';
                (bar as HTMLElement).style.opacity = '1';
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="mb-24"
      id="skills"
    >
      <h2 className="text-3xl font-bold mb-10 after:content-[''] after:block after:w-20 after:h-1 after:bg-yellow-400 after:mt-4">Kemampuan</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div 
            key={category.id} 
            className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 bg-yellow-400 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-bold"><i className={`${category.icon} text-2xl`}></i>
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">{category.category}</h3>
            <div className="space-y-5">
              {category.skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-yellow-400 h-2.5 rounded-full skill-bar-fill transition-all duration-1000 ease-out opacity-0"
                      data-level={`${skill.level}%`}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes growFromLeft {
          from {
            transform: scaleX(0);
            transform-origin: left;
          }
          to {
            transform: scaleX(1);
            transform-origin: left;
          }
        }
        
        .skill-bar-fill {
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>
    </section>
  );
}