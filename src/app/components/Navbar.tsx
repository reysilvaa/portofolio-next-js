"use client";
import Link from 'next/link';
import { JSX, useState, useEffect } from 'react';

const downloadResume = async () => {
  const response = await fetch("/");
  const blob = await response.blob();
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "CV_Moch. Reynald Silva Baktiar.pdf"; // Nama file yang benar
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Navbar(): JSX.Element {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);

      // Detect active section
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full flex justify-between items-center z-50 px-8 py-10 bg-white transition-transform duration-300 ${
        isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <Link href="/" className="text-3xl font-bold text-yellow-400">Rey.</Link>
      <div className="hidden md:flex space-x-8">
        <Link href="/" className={`${activeSection === "hero" ? "text-yellow-400" : "hover:text-yellow-400"} font-medium`}>HOME</Link>
        <Link href="/#about" className={`${activeSection === "about" ? "text-yellow-400" : "hover:text-yellow-400"} font-medium`}>TENTANG</Link>
        <Link href="/#experience" className={`${activeSection === "experience" ? "text-yellow-400" : "hover:text-yellow-400"} font-medium`}>PENGALAMAN</Link>
        <Link href="/#education" className={`${activeSection === "education" ? "text-yellow-400" : "hover:text-yellow-400"} font-medium`}>PENDIDIKAN</Link>
        <Link href="#" onClick={downloadResume} className={`${activeSection === "#" ? "text-yellow-400" : "hover:text-yellow-400"} font-medium`}>
          CV SAYA
        </Link>
        <Link href="/#kontak" className={`${activeSection === "kontak" ? "text-yellow-400" : "hover:text-yellow-400"} font-medium`}>KONTAK</Link>
      </div>
    </nav>
  );
}