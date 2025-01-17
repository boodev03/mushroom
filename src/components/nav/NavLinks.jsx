import React from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Gameplay', href: '#gameplay' },
  { label: 'Progression', href: '#progression' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'Roadmap', href: '#roadmap' }
];

export default function NavLinks({ className = '', onItemClick }) {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    if (onItemClick) onItemClick();
  };

  return (
    <ul className={`flex gap-8 ${className}`}>
      {navItems.map((item) => (
        <li key={item.href}>
          <motion.button
            onClick={() => scrollToSection(item.href)}
            className="font-pixel text-sm text-gray-300 hover:text-green-400 transition-colors relative group"
            whileHover={{ scale: 1.05 }}
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
          </motion.button>
        </li>
      ))}
    </ul>
  );
}