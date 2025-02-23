"use client"

import Image from 'next/image';
import { JSX, useEffect, useState, useRef } from 'react';

export default function About(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

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

  return (
    <section 
      className="mb-24 mt-16 relative overflow-hidden" 
      id="about" 
      ref={sectionRef}
    >
      {/* Background shapes for dynamic look */}
      <div className={`absolute -top-20 -left-20 w-40 h-40 bg-yellow-100 rounded-full opacity-0 ${
        isVisible ? 'animate-float' : ''
      }`} style={{ animationDelay: '0.3s' }}></div>
      <div className={`absolute top-40 -right-10 w-24 h-24 bg-blue-100 rounded-full opacity-0 ${
        isVisible ? 'animate-float-reverse' : ''
      }`} style={{ animationDelay: '0.5s' }}></div>
      
      <div className="flex flex-col md:flex-row relative z-10">
        <div 
          ref={imageRef}
          className={`md:w-1/3 mb-12 md:mb-0 mt-7 transform ${
            isVisible ? 'animate-slide-in-left' : 'translate-x-[-100px] opacity-0'
          }`}
        >
          <div className="border-4 border-yellow-400 p-2 relative overflow-hidden group">
            {/* Image hover effect */}
            <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            
            <Image
              src="/image/me.png"
              alt="About Reynald Silva"
              width={300}
              height={400}
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Border animation on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400 transition-all duration-300"></div>
          </div>
        </div>
        
        <div 
          ref={textRef}
          className={`md:w-2/3 md:pl-32 transform ${
            isVisible ? 'animate-slide-in-right' : 'translate-x-[100px] opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold mb-8 relative">
            Tentang Saya
            <span className={`absolute -bottom-2 left-0 w-0 h-1 bg-yellow-400 ${
              isVisible ? 'animate-expand-line' : ''
            }`}></span>
          </h2>
          
          <p className="text-gray-600 mb-4 leading-relaxed opacity-0 animate-fade-in-up" 
             style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Saya adalah seorang full-stack developer yang memulai perjalanan di dunia pemrograman sejak 2018. 
            Saat ini, saya sedang menempuh pendidikan di Politeknik Negeri Malang.
          </p>
          
          <p className="text-gray-600 mb-4 leading-relaxed opacity-0 animate-fade-in-up" 
             style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            Saya memiliki keahlian dalam membangun aplikasi web modern dengan React, Bootstrap, NextJS, dan JavaScript di sisi frontend, 
            serta Node.js, PHP Native, dan Laravel di sisi backend. 
            Saya juga berpengalaman dalam pengembangan mobile dengan Flutter dan pengelolaan database menggunakan MySQL.
          </p>
          
          <p className="text-gray-600 mb-4 leading-relaxed opacity-0 animate-fade-in-up" 
             style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            Selain itu, saya terbiasa melakukan deployment ke cloud (VPS) dengan Nginx dan Linux, 
            serta membangun REST API menggunakan Node.js dan Laravel. 
            Saya juga memiliki pengalaman dalam machine learning dengan Python dan mengerjakan proyek deep learning.
          </p>
          
          <p className="text-gray-600 mb-4 leading-relaxed opacity-0 animate-fade-in-up" 
             style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            Tidak hanya itu, saya pernah mempelajari Odoo ERP dan aktif menggunakan Git serta GitHub dalam pengembangan proyek. 
            Saya selalu antusias untuk mempelajari teknologi baru dan berkomitmen untuk menciptakan solusi yang efisien dan elegan.
          </p>
        </div>
      </div>
    </section>
  );
}