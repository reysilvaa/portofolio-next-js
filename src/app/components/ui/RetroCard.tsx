import { ReactNode } from 'react';

interface RetroCardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function RetroCard({ title, children, className = '' }: RetroCardProps) {
  return (
    <div className={`bg-old-paper p-8 rounded-lg shadow-vintage relative ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5"></div>
      
      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent-color/30"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent-color/30"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent-color/30"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent-color/30"></div>

      {title && <h3 className="font-display text-2xl mb-6">{title}</h3>}
      
      {children}
    </div>
  );
} 