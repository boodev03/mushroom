import React from 'react';
import { motion } from 'framer-motion';

export default function RoadmapPhase({ title, timeline, items, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      className="relative pl-8 border-l-4 border-green-400"
    >
      <div className="absolute -left-3 w-6 h-6 bg-green-400 rounded-full">
        <div className="w-4 h-4 absolute inset-1 bg-gray-900 rounded-full" />
      </div>
      
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl ml-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-pixel text-green-400">{title}</h3>
          <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm">
            {timeline}
          </span>
        </div>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-center text-gray-300">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}