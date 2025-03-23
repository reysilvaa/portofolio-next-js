import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  path?: string;
  className?: string;
}

export default function SectionTitle({ title, path, className = '' }: SectionTitleProps) {
  return (
    <motion.h2 
      className={`text-4xl font-display mb-10 relative inline-block ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {title}
      <div className="absolute -bottom-4 left-0 w-full h-1 bg-accent-color/50"></div>
      {path && (
        <div className="absolute -right-4 top-0 font-mono text-xs text-accent-color/60">
          {path}
        </div>
      )}
    </motion.h2>
  );
} 