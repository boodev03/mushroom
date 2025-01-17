import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:shadow-xl transition-all group"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-lg bg-green-400/10 group-hover:bg-green-400/20 transition-colors">
          <Icon className="text-2xl text-green-400" />
        </div>
        <h3 className="text-xl font-pixel text-white">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}