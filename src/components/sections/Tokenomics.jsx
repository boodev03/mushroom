import React from 'react';
import { motion } from 'framer-motion';
import { FaCoins, FaStore, FaChartLine, FaPercent, FaGem } from 'react-icons/fa';
import FeatureCard from '../ui/FeatureCard';

const tokenFeatures = [
  {
    icon: FaCoins,
    title: "$MRAR Token",
    description: "Main utility token for the ecosystem"
  },
  {
    icon: FaStore,
    title: "Marketplace",
    description: "Buy & sell items using $MRAR"
  },
  {
    icon: FaChartLine,
    title: "Staking",
    description: "5-15% boost when upgrading stats"
  },
  {
    icon: FaPercent,
    title: "Fee Discounts",
    description: "Hold tokens for marketplace benefits"
  },
  {
    icon: FaGem,
    title: "Passive Rewards",
    description: "Earn rewards by staking tokens"
  }
];

export default function Tokenomics() {
  return (
    <section className="py-20 bg-gray-800" id='tokenomics'>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-pixel text-green-400 mb-4">💎 Tokenomics</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Sustainable token economy with multiple utility features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tokenFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}