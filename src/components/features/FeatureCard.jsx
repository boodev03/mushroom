import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:shadow-xl transition-all"
    >
      <Icon className="text-4xl mb-4 text-green-400" />
      <h3 className="text-xl font-pixel mb-2 text-white">{title}</h3>
      <p className="text-gray-200">{description}</p>
    </motion.div>
  );
}