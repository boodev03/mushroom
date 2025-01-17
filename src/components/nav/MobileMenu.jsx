import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavLinks from './NavLinks';

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden"
        >
          <div className="py-4">
            <NavLinks 
              className="flex-col items-center space-y-4" 
              onItemClick={onClose}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}