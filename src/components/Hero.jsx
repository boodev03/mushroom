import React from 'react';
import { motion } from 'framer-motion';
import Character from './Character';

export default function Hero() {
  return (
    <section className="relative py-[80px] lg:py-[120px] bg-gradient-to-b from-green-200 to-green-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 text-center lg:text-left space-y-4 lg:space-y-6 max-w-2xl lg:max-w-none"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white drop-shadow-lg font-pixel leading-tight">
            Mushroom Arena
            </h1>
            
            <p className="text-base sm:text-lg text-white font-pixel max-w-xl mx-auto lg:mx-0">
            AI battle arena with mushroom warriors. Join rooms, fight opponents, earn rewards on Solana.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="https://app.mushroomarena.fun/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-pixel transition-all text-sm sm:text-base inline-flex items-center justify-center"
              >
                Play Now
              </a>
              <a href='https://pump.fun/board' className="block px-4 sm:px-6 py-2 sm:py-3 bg-white/90 hover:bg-white text-red-500 rounded-xl font-pixel transition-all text-sm sm:text-base">
                Buy $MRAR
              </a>
            </div>
          </motion.div>

          {/* Right Character */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 flex justify-center mt-8 lg:mt-0"
          >
            <Character />
          </motion.div>
        </div>
      </div>
    </section>
  );
}