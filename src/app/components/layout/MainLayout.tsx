import { ReactNode, useEffect } from 'react';
import RetroLayout from './RetroLayout';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface MainLayoutProps {
  children: ReactNode;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function MainLayout({ 
  children, 
  activeSection, 
  setActiveSection 
}: MainLayoutProps) {
  // Menambahkan efek smooth scroll
  useEffect(() => {
    // Aktifkan smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <RetroLayout>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative overflow-hidden pt-4">
        {/* Connector line - elemen visual yang menghubungkan sepanjang halaman */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-0 pointer-events-none">
          <motion.div 
            initial={{ height: '0%', opacity: 0 }}
            animate={{ height: '100%', opacity: 0.08 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="w-full h-full bg-gradient-to-b from-transparent via-accent-color to-transparent"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-0 -space-y-2 relative z-10">
          {children}
        </div>
        
        <Footer />
      </main>
    </RetroLayout>
  );
} 