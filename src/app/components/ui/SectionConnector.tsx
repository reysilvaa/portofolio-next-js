import { motion } from 'framer-motion';

interface SectionConnectorProps {
  color?: string;
}

export default function SectionConnector({ color = 'rgba(59, 130, 246, 0.3)' }: SectionConnectorProps) {
  return (
    <div className="flex justify-center w-full pointer-events-none relative z-10 h-6">
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: '100%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-px"
        style={{ background: `linear-gradient(to bottom, transparent, ${color}, transparent)` }}
      />
    </div>
  );
} 