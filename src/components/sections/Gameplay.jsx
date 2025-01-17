import React from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaUsers, FaShieldAlt, FaStore, FaCrosshairs, FaTrophy } from 'react-icons/fa';
import FeatureCard from '../ui/FeatureCard';

const gameplayFeatures = [
  {
    icon: FaGamepad,
    title: "Battle Rooms",
    description: "Create or join battle rooms for instant action"
  },
  {
    icon: FaShieldAlt,
    title: "Warrior Selection",
    description: "Choose and customize your mushroom warrior"
  },
  {
    icon: FaStore,
    title: "Equipment System",
    description: "Trade and upgrade gear in the marketplace"
  },
  {
    icon: FaCrosshairs,
    title: "Strategic Combat",
    description: "Use AI-enhanced abilities for victory"
  },
  {
    icon: FaTrophy,
    title: "NFT Rewards",
    description: "Win rare NFT items and battle points"
  },
  {
    icon: FaUsers,
    title: "Leaderboards",
    description: "Climb ranks for exclusive bonus rewards"
  }
];

export default function Gameplay() {
  return (
    <section className="py-20 bg-gray-800" id='gameplay'>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-pixel text-green-400 mb-4">🎮 Gameplay</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Immerse yourself in strategic battles and earn rewards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameplayFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}