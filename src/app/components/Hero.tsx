"use client"
import Image from 'next/image';
import SocialLinks from './SocialLinks';
import { JSX, useEffect, useState, useRef } from 'react';

export default function Hero(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [typedName, setTypedName] = useState('');
  const fullName = "I'am Moch Reynald Silva Baktiar";
  const typingSpeed = 100; // milliseconds per character - slower for name effect
  const typingRef = useRef<NodeJS.Timeout | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Handle typing animation for the name
  useEffect(() => {
    let currentIndex = 0;
    
    typingRef.current = setInterval(() => {
      if (currentIndex < fullName.length) {
        setTypedName(fullName.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingRef.current as NodeJS.Timeout);
      }
    }, typingSpeed);

    return () => {
      if (typingRef.current) clearInterval(typingRef.current);
    };
  }, []);

  // Handle image appearance with intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-50 mt-16">
      <div className="md:w-1/2 mb-12 md:mb-0 opacity-0 animate-fade-in" 
           style={{ animation: 'fadeIn 1s forwards' }}>
        <p className="text-yellow-400 font-semibold mb-4 opacity-0" 
           style={{ animation: 'slideInFromLeft 0.8s forwards 0.3s' }}>
          Selamat Datang !
        </p>
        <h1 className="text-5xl font-bold mb-6">
          <span className="typing-text">{typedName}</span>
          <span className="inline-block h-6 w-1 bg-gray-600 ml-1 animate-blink"></span>
        </h1>
        <p className="text-gray-600 mb-8 opacity-0"
           style={{ animation: 'fadeIn 0.8s forwards 1.5s' }}>
          Aku ganteng dan aku programmer. Aku percaya bahwa ketampanan dan logika bisa berjalan seiringan. 
          Dengan ketampanan ini, semoga bug segan mendekat dan kode tetap elegan. 
          Namun sayangnya, ketampanan tak bisa di-commit ke Git, sehingga pull request tetap butuh review. 
          Andai pesona bisa jadi dependency, pasti build selalu sukses tanpa error. 
          Meski begitu, aku tetap bersandar pada logika, karena seindah apapun wajah, 
          hanya kode yang rapi yang bisa membuat hati tenang saat deploy.
        </p>

        <div className="opacity-0" style={{ animation: 'fadeIn 0.8s forwards 2s' }}>
          <SocialLinks />
        </div>
      </div>
      <div className="md:w-1/2 relative" ref={imageRef}>
        <div className="relative z-10"></div>
        <Image
          src="/image/me.png"
          alt="Moch. Reynald Silva Baktiar"
          width={500}
          height={500}
          className={`relative z-10 mt-10 md:mt-14 lg:mt-20 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}
        />
      </div>
    </div>
  );
}