import React from 'react';
import { FaRobot, FaUsers, FaGem, FaBolt, FaCoins, FaTrophy } from 'react-icons/fa';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: FaRobot,
    title: "AI Battle Mechanics",
    description: "Advanced AI-driven battle system for strategic gameplay"
  },
  {
    icon: FaUsers,
    title: "Real-time PvP",
    description: "Instant matchmaking for player-vs-player battles"
  },
  {
    icon: FaGem,
    title: "NFT Warriors",
    description: "Unique mushroom warriors with distinct traits as NFTs"
  },
  {
    icon: FaBolt,
    title: "Quick Battles",
    description: "Fast-paced 3-5 minute battles for instant action"
  },
  {
    icon: FaCoins,
    title: "Low Fees",
    description: "Minimal transaction fees powered by Solana"
  },
  {
    icon: FaTrophy,
    title: "Earn Rewards",
    description: "Join battles and earn valuable rewards"
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