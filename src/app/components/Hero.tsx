"use client";

import Image from "next/image";
import SocialLinks from "./SocialLinks";
import { JSX, useEffect, useState, useRef } from "react";

export default function Hero(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [typedName, setTypedName] = useState("");
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fullName = "I'am Moch Reynald Silva Baktiar";
  const typingSpeed = 100;
  const typingRef = useRef<NodeJS.Timeout | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

    return () => observer.disconnect();
  }, []);

  const getParallaxStyle = () => {
    if (!containerRef.current) return {};
    const moveX =
      ((mousePosition.x / containerRef.current.offsetWidth) - 0.5) * 20;
    const moveY =
      ((mousePosition.y / containerRef.current.offsetHeight) - 0.5) * 20;
    return {
      transform: `perspective(1000px) rotateX(${moveY}deg) rotateY(${moveX}deg)`,
      transition: isImageHovered ? "all 0.1s ease" : "all 0.5s ease",
    };
  };

  return (
    <section id="hero"
      ref={containerRef}
      className="flex flex-col-reverse md:flex-row justify-center items-center mt-16 gap-12 px-4"
    >
      {/* Bagian Teks */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-yellow-400 font-semibold mb-2 md:mb-4 animate-fade-in">
          Selamat Datang!
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 relative group">
          <span className="typing-text">{typedName}</span>
          <span className="inline-block h-6 w-1 bg-gray-600 ml-1 animate-blink"></span>
        </h1>

        <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8">
          Aku ganteng dan aku programmer. Aku percaya bahwa ketampanan dan logika bisa berjalan seiringan.
          Dengan ketampanan ini, semoga bug segan mendekat dan kode tetap elegan.
        </p>

        <div className="flex justify-center md:justify-start">
          <SocialLinks />
        </div>
      </div>

      {/* Bagian Gambar */}
      <div
        className="w-48 md:w-1/2 relative"
        ref={imageRef}
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
        style={getParallaxStyle()}
      >
        <div className="relative group cursor-pointer overflow-hidden rounded-lg">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-20"></div>
          <Image
            src="/image/me.png"
            alt="Moch Reynald Silva Baktiar"
            width={400}
            height={400}
            className={`relative z-10 transition-all duration-700 group-hover:scale-105 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          />
          <div className="absolute inset-0  transition-all duration-300 z-30"></div>
        </div>
      </div>
    </section>
  );
}
