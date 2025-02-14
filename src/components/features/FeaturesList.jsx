import React from 'react';
import { FaRobot, FaUsers, FaGem, FaBolt, FaCoins, FaTrophy } from 'react-icons/fa';
import FeatureCard from './FeatureCard';

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
    description: "Unique squirrel warriors with distinct traits"
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

export default function FeaturesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} index={index} />
      ))}
    </div>
  );
}