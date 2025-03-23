import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface RetroLayoutProps {
  children: ReactNode;
}

export default function RetroLayout({ children }: RetroLayoutProps) {
  return (
    <div className="bg-old-paper min-h-screen text-text-color relative">
      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-10 bg-noise-pattern opacity-8"></div>
      
      {/* Vintage Border */}
      <div className="fixed inset-0 z-0 pointer-events-none border-8 border-old-paper">
        <div className="absolute inset-0 border-2 border-accent-color/10"></div>
      </div>
      
      {/* Vignette Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none 
                    bg-radial-gradient from-transparent to-accent-color/10 opacity-70"></div>
      
      {/* Vintage Decorations */}
      <motion.div 
        className="fixed top-10 right-10 w-40 h-40 opacity-10 pointer-events-none"
        initial={{ rotate: 0, opacity: 0 }}
        animate={{ rotate: 360, opacity: 0.1 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
          <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
          <path d="M50 0 L50 100" stroke="currentColor" strokeWidth="0.2" />
          <path d="M0 50 L100 50" stroke="currentColor" strokeWidth="0.2" />
          <path d="M14.6447 14.6447 L85.3553 85.3553" stroke="currentColor" strokeWidth="0.2" />
          <path d="M14.6447 85.3553 L85.3553 14.6447" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </motion.div>
      
      <motion.div 
        className="fixed bottom-10 left-10 w-40 h-40 opacity-10 pointer-events-none"
        initial={{ rotate: 0, opacity: 0 }}
        animate={{ rotate: -360, opacity: 0.1 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
          <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
          <rect x="30" y="30" width="40" height="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
          <rect x="40" y="40" width="20" height="20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
          <path d="M50 0 L50 100" stroke="currentColor" strokeWidth="0.2" />
          <path d="M0 50 L100 50" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </motion.div>
      
      {/* Page Corner Fold */}
      <div className="fixed top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent-color/20 to-transparent pointer-events-none">
        <div className="absolute bottom-0 left-0 w-8 h-8 bg-old-paper transform origin-bottom-left rotate-[135deg]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
} 