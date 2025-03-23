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
    const section = sectionRef.current;
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
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
    }, { threshold: 0.1 });
  
    if (section) observer.observe(section);
  
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Nama kategori skill untuk icon khusus
  const categoryIcons: Record<string, JSX.Element> = {
    "Frontend": (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4.68L18 9v2.38c0 3.82-2.58 7.41-6 8.42-3.42-1.01-6-4.6-6-8.42V9l6-3.32z" />
      </svg>
    ),
    "Backend": (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 13H4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm0 7H4v-5h16v5zm0-16H4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 7H4V6h16v5z" />
      </svg>
    ),
    "Tools": (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
      </svg>
    )
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative"
      id="skills"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, catIndex) => (
          <div 
            key={category.id} 
            className={`
              relative overflow-hidden
              bg-cowboy-parchment dark:bg-cowboy-wood 
              border-4 border-cowboy-leather dark:border-cowboy-gold
              p-6 transform ${catIndex % 3 === 0 ? 'rotate-1' : catIndex % 3 === 1 ? '-rotate-1' : 'rotate-0'}
              shadow-lg
            `}
          >
            {/* Ornamen pojok */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cowboy-leather/30 dark:border-cowboy-gold/30"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cowboy-leather/30 dark:border-cowboy-gold/30"></div>
            
            {/* Category Icon */}
            <div className="sheriff-badge w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-cowboy-leather dark:bg-cowboy-gold text-cowboy-parchment dark:text-cowboy-wood relative">
              {categoryIcons[category.category] || (
                <i className={`${category.icon} text-2xl`}></i>
              )}
            </div>
            
            {/* Category Name */}
            <h3 className="text-xl font-western tracking-wider mb-6 text-center text-cowboy-leather dark:text-cowboy-gold relative">
              {category.category}
              <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-cowboy-leather/30 dark:bg-cowboy-gold/30"></div>
            </h3>
            
            {/* Skills List */}
            <div className="space-y-5 relative">
              {/* Efek lubang tembakan random */}
              {catIndex % 3 === 1 && (
                <div className="absolute top-3 right-3 bullet-holes bullet-hole-1"></div>
              )}
              {catIndex % 3 === 2 && (
                <div className="absolute bottom-10 left-5 bullet-holes bullet-hole-2"></div>
              )}
              
              {category.skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-scrapbook text-cowboy-leather dark:text-cowboy-sand">{skill.name}</span>
                    <span className="text-sm font-western text-cowboy-rust dark:text-cowboy-gold">{skill.level}%</span>
                  </div>
                  
                  {/* Skill Bar yang berbentuk tali/rope */}
                  <div className="relative">
                    {/* Background Bar */}
                    <div className="w-full h-2.5 bg-cowboy-leather/10 dark:bg-cowboy-gold/10 rounded-full overflow-hidden">
                      {/* Actual Progress Bar */}
                      <div 
                        className="h-full rounded-full skill-bar-fill transition-all duration-1000 ease-out opacity-0 rope-pattern"
                        data-level={`${skill.level}%`}
                        style={{ 
                          width: '0%',
                          background: `repeating-linear-gradient(
                            45deg,
                            rgb(var(--cowboy-leather)) 0,
                            rgb(var(--cowboy-leather)) 4px,
                            rgb(var(--cowboy-rust)) 4px,
                            rgb(var(--cowboy-rust)) 8px
                          )`
                        }}
                      ></div>
                    </div>
                    
                    {/* Decorative Bullet at the end of the bar */}
                    <div 
                      className="absolute top-1/2 h-4 w-4 -mt-2 rounded-full bg-cowboy-leather/80 dark:bg-cowboy-gold/80 border border-cowboy-parchment dark:border-cowboy-wood transition-all duration-1000"
                      style={{ 
                        left: `calc(${skill.level}% - 8px)`,
                        opacity: 0,
                      }}
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
        
        .rope-pattern {
          background-size: 10px 10px;
        }
        
        /* Dark mode overrides */
        :global(.dark) .rope-pattern {
          background: repeating-linear-gradient(
            45deg,
            rgb(var(--cowboy-gold)) 0,
            rgb(var(--cowboy-gold)) 4px,
            rgb(var(--cowboy-sand)) 4px,
            rgb(var(--cowboy-sand)) 8px
          ) !important;
        }
      `}</style>
    </section>
  );
}