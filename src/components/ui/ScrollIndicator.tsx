import React from 'react';
import { motion } from 'framer-motion';

interface ScrollIndicatorProps {
  visible: boolean;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ visible }) => {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -20
      }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <span className="text-xs md:text-sm font-serif text-neutral-500 mb-2">Scroll to explore</span>
      <motion.div
        className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: 'easeInOut'
        }}
      >
        <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2" />
      </motion.div>
    </motion.div>
  );
};