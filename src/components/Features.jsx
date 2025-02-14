import React from 'react';
import { motion } from 'framer-motion';
import FeaturesList from './features/FeaturesList';

export default function Features() {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-pixel text-green-400 mb-4">
            Core Features
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
          Experience next-gen blockchain gaming with innovative features
          </p>
        </motion.div>

        <FeaturesList />
      </div>
    </div>
  );
}