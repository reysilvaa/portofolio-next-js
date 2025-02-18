"use client";
import Link from 'next/link';
import { JSX, useState, useEffect } from 'react';

export default function Navbar(): JSX.Element {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full flex justify-between items-center z-50 px-8 py-10 transition-transform duration-300 ${
        isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <Link href="/" className="text-3xl font-bold text-yellow-400">Rey.</Link>
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-yellow-400 font-medium">HOME</Link>
        <Link href="/#about" className="hover:text-yellow-400 font-medium">ABOUT</Link>
        <Link href="/#services" className="hover:text-yellow-400 font-medium">SERVICE</Link>
        <Link href="/#experience" className="hover:text-yellow-400 font-medium">PENGALAMAN</Link>
        <Link href="/resume" className="hover:text-yellow-400 font-medium">RESUME</Link>
        <Link href="/blog" className="hover:text-yellow-400 font-medium">BLOG</Link>
        <Link href="/#contact" className="hover:text-yellow-400 font-medium">CONTACT</Link>
      </div>
    </nav>
  );
}
