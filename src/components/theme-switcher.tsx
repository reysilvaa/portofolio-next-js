"use client"

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  // Memastikan komponen di-mount sebelum merender untuk menghindari hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setIsAnimating(true);
    
    // Tunggu animasi selesai sebelum mengganti tema
    setTimeout(() => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
      
      // Reset animasi setelah tema berubah
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 300);
  };

  // Tema saat ini
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-20 h-20 rounded-full overflow-hidden p-2
                border-4 ${isDark ? 'border-cowboy-gold' : 'border-cowboy-leather'}
                bg-cowboy-parchment dark:bg-cowboy-wood
                shadow-lg transform transition-all duration-300
                ${isAnimating ? 'animate-shake' : 'hover:scale-110'}`}
      aria-label={isDark ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
    >
      {/* Desain sheriff badge untuk tema dark */}
      <div 
        className={`absolute inset-0 sheriff-badge transition-opacity duration-300 ease-in-out
                  ${isDark ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundColor: 'rgb(191, 133, 46)',
          transform: 'scale(0.8)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-cowboy-wood text-xs font-western transform -rotate-12">SHERIFF</span>
            </div>
            {/* Star in the center */}
            <div className="absolute inset-0 sheriff-badge" 
                 style={{ 
                   backgroundColor: 'rgb(58, 29, 18)', 
                   transform: 'scale(0.4)' 
                 }}>
            </div>
          </div>
        </div>
      </div>
      
      {/* Desain matahari untuk tema light */}
      <div 
        className={`absolute inset-0 rounded-full transition-opacity duration-300 ease-in-out
                  ${!isDark ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgb(255, 210, 0) 0%, rgb(165, 74, 42) 70%)',
          transform: 'scale(0.8)',
        }}
      >
        {/* Sinar matahari */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="absolute inset-0 w-full h-full"
            style={{
              transform: `rotate(${i * 45}deg)`,
            }}
          >
            <div className="absolute left-1/2 top-1/2 w-2 h-8 -ml-1 -mt-4 bg-yellow-400 rounded-full"
                 style={{
                   transformOrigin: 'center center',
                   transform: 'translateY(-100%)',
                 }}
            ></div>
          </div>
        ))}
        
        {/* Wajah matahari */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-cowboy-leather flex items-center justify-center">
            <div className="flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-yellow-400 absolute top-1.5 left-1.5"></div>
              <div className="w-1 h-1 rounded-full bg-yellow-400 absolute top-1.5 right-1.5"></div>
              <div className="w-3 h-1 rounded-full bg-yellow-400 absolute bottom-1.5"></div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}; 