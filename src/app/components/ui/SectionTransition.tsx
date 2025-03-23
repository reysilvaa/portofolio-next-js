import { motion } from 'framer-motion';

interface SectionTransitionProps {
  nextSectionId: string;
}

export default function SectionTransition({
  nextSectionId
}: SectionTransitionProps) {
  const handleClick = () => {
    const nextSection = document.getElementById(nextSectionId);
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex justify-center w-full h-10 relative -my-2 z-20">
      <motion.button
        onClick={handleClick}
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.3, 
          ease: [0.22, 1, 0.36, 1] 
        }}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-old-paper shadow-md border border-accent-color/20 overflow-hidden relative"
        aria-label={`Scroll to ${nextSectionId} section`}
      >
        <motion.div
          animate={{ 
            y: [0, 5, 0],
            opacity: [0.8, 1, 0.8] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut"
          }}
          className="text-accent-color"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-accent-color/5"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.button>
    </div>
  );
} 