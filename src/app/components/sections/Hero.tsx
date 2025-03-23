"use client";

import React, { useEffect, useState, useRef } from "react";
import Logo from "../ui/Logo";
import SocialLinks from "../ui/SocialLinks";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const birthYear = 2004; // Tahun lahir atau tahun penting
  const currentYear = new Date().getFullYear();
  const containerRef = useRef<HTMLDivElement>(null);
  const [showBio, setShowBio] = useState(false);
  
  // Typewriter effect for bio text
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBio(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Parallax scrolling effect
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  
  return (
    <motion.section 
      id="hero"
      className="pt-24 pb-10 px-4 max-w-6xl mx-auto min-h-screen flex flex-col justify-center relative scroll-section"
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Logo />
      
      <motion.div 
        className="absolute top-20 right-10 w-20 h-20 opacity-20 hidden md:block"
        style={{ y: y1 }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-40 left-10 w-16 h-16 opacity-20 hidden md:block"
        style={{ y: y2 }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </motion.div>
      
      <div className="mt-10 mb-16 md:mt-16 md:mb-20">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="big-year text-center"
        >
          {birthYear}
        </motion.h1>
      </div>
      
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-10 h-20">
          {showBio && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <p className="mb-6 font-mono text-sm leading-relaxed">
                <span className="font-display text-lg">Moch Reynald Silva Baktiar</span> lahir di Indonesia pada tahun {birthYear}. 
                Seorang <span className="retro-underline">developer</span> yang berfokus pada pengembangan aplikasi web dan mobile dengan pendekatan 
                <span className="italic"> minimalis</span> dan <span className="italic">efektif</span>.
              </p>
            </motion.div>
          )}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="flex justify-center mb-16"
        >
          <SocialLinks />
        </motion.div>
        
        <div className="relative">
          <motion.div 
            className="old-paper max-w-[300px] mx-auto md:max-w-[400px] scrapbook-item rotate-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="scrapbook-tape absolute -top-2 left-10 rotate-12 z-10"></div>
            <div className="scrapbook-tape absolute -top-2 right-10 -rotate-12 z-10"></div>
            
            <div className="p-3 bg-white">
              <Image
                src="/image/me.png"
                alt="Moch Reynald Silva Baktiar"
                width={400}
                height={400}
                className="w-full filter sepia-[0.2] contrast-[105%]"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.7 }}
          className="mt-12 flex justify-center"
        >
          <div className="timeline">
            <span className="font-mono text-sm">{birthYear}</span>
            <div className="timeline-line"></div>
            <span className="font-mono text-sm">{currentYear}</span>
          </div>
        </motion.div>
        
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          className="font-mono text-xs flex flex-col items-center mt-24"
        >
          <span className="mb-2">scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 4L8 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            <path d="M3 15L8 20L13 15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>
      </div>
      
    </motion.section>
  );
} 