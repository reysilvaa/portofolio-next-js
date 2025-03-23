import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div 
      className="flex items-center space-x-2"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="w-10 h-10 border-2 border-accent-color/80 flex items-center justify-center
                      bg-old-paper shadow-vintage">
          <span className="text-accent-color font-mono text-sm font-bold">RS</span>
          
          {/* Decorative dots */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-accent-color/60 rounded-full"></div>
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-accent-color/60 rounded-full"></div>
        </div>
      </div>
      
      <div className="text-2xl font-display">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="mr-1 text-accent-color"
        >
          Reynald
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="text-text-color/90"
        >
          Silva
        </motion.span>
      </div>
    </motion.div>
  );
} 