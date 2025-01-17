import React from 'react';
import { motion } from 'framer-motion';
import RoadmapPhase from '../ui/RoadmapPhase';

const phases = [
  {
    title: "Phase 1: Foundation",
    timeline: "Q1 2025",
    items: [
      "Launch playable demo version",
      "Wallet connection",
      "Basic battle rooms",
      "Simple AI battle mechanics",
      "Points earning system",
      "Basic mushroom warriors",
      "Launch $MRAR token on Pump.fun",
      "Community building & social media presence"
    ]
  },
  {
    title: "Phase 2: Core Gameplay",
    timeline: "Q2 2025",
    items: [
      "Enhanced battle mechanics",
      "Inventory system implementation",
      "Basic marketplace (NFT items)",
      "Initial BP upgrade system",
      "More warrior types",
      "Basic leaderboard system",
      "First tournament event"
    ]
  },
  {
    title: "Phase 3: Economy & Features",
    timeline: "Q3 2025",
    items: [
      "Advanced AI battle system",
      "Full marketplace integration",
      "Staking system launch",
      "Equipment crafting system",
      "Daily quest system",
      "Seasonal rewards structure",
      "Extended warrior evolution system"
    ]
  },
  {
    title: "Phase 4: Expansion",
    timeline: "Q4 2025",
    items: [
      "Advanced tournament system",
      "Guild/clan features",
      "Cross-platform optimization",
      "Advanced leaderboard rewards",
      "Special events system",
      "Governance system"
    ]
  },
  {
    title: "Phase 5: Future Development",
    timeline: "2026",
    items: [
      "Multi-chain expansion",
      "Advanced guild features",
      "Land system",
      "Breeding mechanism"
    ]
  }
];

export default function Roadmap() {
  return (
    <section className="py-20 bg-gray-900" id='roadmap'>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-pixel text-green-400 mb-4">🗺️ Roadmap</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our journey to revolutionize blockchain gaming
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {phases.map((phase, index) => (
            <RoadmapPhase key={index} {...phase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}