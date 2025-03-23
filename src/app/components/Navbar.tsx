"use client";
import Link from 'next/link';
import { JSX, useState, useEffect } from 'react';
import { ThemeSwitcher } from '@/components/theme-switcher';

const downloadResume = async () => {
  const response = await fetch("/CV_Moch. Reynald Silva Baktiar.pdf");
  const blob = await response.blob();
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "CV_Moch. Reynald Silva Baktiar.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Navbar(): JSX.Element {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Disable scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "SALOON", section: "hero" },
    { href: "/#about", label: "TENTANG", section: "about" },
    { href: "/#experience", label: "PENGALAMAN", section: "experience" },
    { href: "/#education", label: "PENDIDIKAN", section: "education" },
    { href: "#", label: "CV SAYA", section: "", onClick: downloadResume },
    { href: "/#kontak", label: "KONTAK", section: "kontak" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}
    >
      {/* Western Style Navbar - Desktop */}
      <div className="hidden md:block relative">
        {/* Wooden Sign Background */}
        <div className="absolute inset-0 bg-cowboy-wood dark:bg-cowboy-leather transform -skew-y-1
             border-b-4 border-cowboy-leather dark:border-cowboy-gold"></div>
        
        {/* Main Nav Content */}
        <div className="container mx-auto px-6 py-3 relative z-10">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative">
                <div className="sheriff-badge w-12 h-12 bg-cowboy-gold flex items-center justify-center">
                  <span className="font-western text-xl text-cowboy-leather">R</span>
                </div>
                <div className="absolute -bottom-2 -right-6 transform rotate-6">
                  <span className="font-western text-xl text-cowboy-parchment dark:text-cowboy-gold">Rey.</span>
                </div>
              </div>
            </Link>
            
            {/* Menu Links */}
            <div className="flex items-center gap-1">
              {navLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  onClick={link.onClick}
                  className={`
                    relative px-4 py-2 font-western tracking-wider text-sm
                    ${activeSection === link.section ? 
                      "text-cowboy-gold" : 
                      "text-cowboy-parchment dark:text-cowboy-sand hover:text-cowboy-gold"}
                    transition-colors group
                  `}
                >
                  {/* Decorative Bullet Holes */}
                  {index % 2 === 0 && (
                    <span className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-black opacity-70"></span>
                  )}
                  
                  {link.label}
                  
                  {/* Underline Effect */}
                  <span className={`
                    absolute bottom-0 left-1/2 w-0 h-0.5 bg-cowboy-gold
                    transform -translate-x-1/2 transition-all duration-300
                    ${activeSection === link.section ? "w-full" : "group-hover:w-full"}
                  `}></span>
                </Link>
              ))}
            </div>
            
            {/* Theme Switcher */}
            <div className="ml-3">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
        
        {/* Decorative Rope Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
                      from-cowboy-parchment via-cowboy-gold to-cowboy-parchment dark:from-cowboy-leather 
                      dark:via-cowboy-gold dark:to-cowboy-leather"></div>
      </div>
      
      {/* Mobile Navigation - Western Saloon Door Style */}
      <div className="md:hidden">
        {/* Navbar Header */}
        <div className="relative bg-cowboy-wood dark:bg-cowboy-leather py-3 px-4
                       border-b-4 border-cowboy-leather dark:border-cowboy-gold shadow-lg">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="font-western text-2xl text-cowboy-parchment dark:text-cowboy-gold">
              Rey.
            </Link>
            
            {/* Hamburger Menu (styled as western star) */}
            <button 
              className="menu-button relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`w-8 h-0.5 bg-cowboy-parchment dark:bg-cowboy-gold transition-transform duration-300 
                             ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></div>
              <div className={`w-8 h-0.5 bg-cowboy-parchment dark:bg-cowboy-gold absolute transition-opacity duration-300 
                             ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`w-8 h-0.5 bg-cowboy-parchment dark:bg-cowboy-gold absolute transition-transform duration-300 
                             ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu - Saloon Doors */}
        <div className={`mobile-menu fixed inset-0 z-50 transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}>
          {/* Left Door */}
          <div 
            className={`absolute top-0 left-0 w-1/2 h-full bg-cowboy-wood dark:bg-cowboy-leather 
                       border-r-4 border-cowboy-leather dark:border-cowboy-gold
                       transform origin-left transition-transform duration-500 ease-in-out
                       ${isMenuOpen ? 'rotate-0' : '-rotate-90'}`}
            style={{ 
              backgroundImage: `repeating-linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 20px, transparent 20px, transparent 40px)`,
            }}
          >
            <div className="h-full flex flex-col justify-center items-center p-6">
              {/* Door handle */}
              <div className="absolute right-4 top-1/2 w-4 h-12 bg-cowboy-gold rounded-full"></div>
              
              {/* Door hinges */}
              <div className="absolute left-4 top-1/4 w-3 h-8 bg-cowboy-rust rounded-sm"></div>
              <div className="absolute left-4 bottom-1/4 w-3 h-8 bg-cowboy-rust rounded-sm"></div>
            </div>
          </div>
          
          {/* Right Door */}
          <div 
            className={`absolute top-0 right-0 w-1/2 h-full bg-cowboy-wood dark:bg-cowboy-leather 
                       border-l-4 border-cowboy-leather dark:border-cowboy-gold
                       transform origin-right transition-transform duration-500 ease-in-out
                       ${isMenuOpen ? 'rotate-0' : 'rotate-90'}`}
            style={{ 
              backgroundImage: `repeating-linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 20px, transparent 20px, transparent 40px)`,
            }}
          >
            <div className="h-full flex flex-col justify-center items-center p-6">
              {/* Door handle */}
              <div className="absolute left-4 top-1/2 w-4 h-12 bg-cowboy-gold rounded-full"></div>
              
              {/* Door hinges */}
              <div className="absolute right-4 top-1/4 w-3 h-8 bg-cowboy-rust rounded-sm"></div>
              <div className="absolute right-4 bottom-1/4 w-3 h-8 bg-cowboy-rust rounded-sm"></div>
            </div>
          </div>
          
          {/* Centered Menu Content */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="bg-cowboy-parchment dark:bg-cowboy-wood p-8 border-4 border-double border-cowboy-leather dark:border-cowboy-gold max-w-xs w-full rounded-sm transform rotate-2 shadow-xl">
              {/* Menu Header */}
              <div className="text-center mb-6">
                <h2 className="font-western text-3xl text-cowboy-leather dark:text-cowboy-gold">SALOON MENU</h2>
                <div className="w-full h-1 bg-cowboy-leather/30 dark:bg-cowboy-gold/30 my-2"></div>
              </div>
              
              {/* Menu Items */}
              <div className="flex flex-col gap-5">
                {navLinks.map((link, index) => (
                  <Link 
                    key={index}
                    href={link.href}
                    onClick={(e) => {
                      if (link.onClick) {
                        e.preventDefault();
                        link.onClick();
                      }
                      setIsMenuOpen(false);
                    }}
                    className={`
                      font-western text-lg text-center transition-all duration-200
                      ${activeSection === link.section ? 
                        "text-cowboy-rust dark:text-cowboy-gold transform scale-110" : 
                        "text-cowboy-leather dark:text-cowboy-sand"}
                      hover:text-cowboy-rust dark:hover:text-cowboy-gold 
                      relative py-1
                    `}
                  >
                    {/* Decorative bullet */}
                    <span className="inline-block w-3 h-3 mr-2 rounded-full bg-cowboy-leather/20 dark:bg-cowboy-gold/20"></span>
                    
                    {link.label}
                  </Link>
                ))}
              </div>
              
              {/* ThemeSwitcher in mobile menu */}
              <div className="mt-8 flex justify-center">
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
