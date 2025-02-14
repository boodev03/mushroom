import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaBolt, FaMagic, FaUnlock, FaLeaf } from 'react-icons/fa';
import FeatureCard from '../ui/FeatureCard';

const progressionFeatures = [
  {
    icon: FaStar,
    title: "Battle Points",
    description: "Earn BP from fights to upgrade warriors"
  },
  {
    icon: FaBolt,
    title: "Stat Upgrades", 
    description: "Enhance your warrior's capabilities"
  },
  {
    icon: FaMagic,
    title: "Special Abilities",
    description: "Unlock and upgrade unique moves"
  },
  {
    icon: FaLeaf,
    title: "Evolution System",
    description: "Progress through evolution stages"
  }
];

export default function Progression() {
  return (
    <section className="py-20 bg-gray-900" id='progression'>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-pixel text-green-400 mb-4">⚡ Progression</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Level up your warriors and unlock new abilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {progressionFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}