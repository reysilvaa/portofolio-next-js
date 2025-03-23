import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-10 text-center text-gray-600 text-sm font-mono relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-4"
      >
        <div className="mx-auto w-20 h-0.5 bg-gradient-to-r from-transparent via-accent-color/30 to-transparent mb-5" />
        <p>© {new Date().getFullYear()} Moch Reynald Silva Baktiar. All rights reserved.</p>
      </motion.div>
    </footer>
  );
} 