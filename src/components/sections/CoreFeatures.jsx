import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaUsers, FaGem, FaBolt, FaCoins, FaTrophy } from 'react-icons/fa';
import FeatureCard from '../ui/FeatureCard';

const features = [
  {
    icon: FaRobot,
    title: "AI Battle Mechanics",
    description: "Strategic gameplay powered by advanced AI systems"
  },
  {
    icon: FaUsers,
    title: "Real-time PvP",
    description: "Instant matchmaking for exciting player battles"
  },
  {
    icon: FaGem,
    title: "NFT Warriors",
    description: "Unique mushroom warriors with distinct traits"
  },
  {
    icon: FaBolt,
    title: "Quick Battles",
    description: "Fast-paced 3-5 minute action-packed matches"
  },
  {
    icon: FaCoins,
    title: "Low Fees",
    description: "Minimal transaction costs on Solana"
  },
  {
    icon: FaTrophy,
    title: "Earn Rewards",
    description: "Win battles to earn valuable rewards"
  }
];

export default function CoreFeatures() {
  return (
    <section className="py-20 bg-gray-900" id='features'>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-pixel text-green-400 mb-4">⚔️ Core Features</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience next-gen blockchain gaming with innovative features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}