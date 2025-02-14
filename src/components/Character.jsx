import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Character() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full min-w-[300px] max-w-[340px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] mx-auto group"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-green-400/20 rounded-2xl blur-xl group-hover:bg-green-400/30 transition-all duration-300"></div>
      
      {/* Video Container */}
      <div className="relative w-full pt-[78.214%] rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
        {/* Pixel Border */}
        <div className="absolute inset-0 border-2 sm:border-4 border-white/10 rounded-2xl z-10 pointer-events-none"></div>
        
        {/* Video */}
        <video 
          ref={videoRef}
          src="https://litter.catbox.moe/uad2w5.mp4"
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none"></div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className={`absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer focus:outline-none transition-opacity duration-300
            ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          <div className="bg-white/90 p-3 sm:p-4 rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-110">
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        </button>
      </div>

      {/* Enhanced Shadow */}
      <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-[75%] sm:w-[80%] h-10 sm:h-12 bg-black/20 rounded-full blur-lg sm:blur-xl -z-10 transition-all duration-300 group-hover:w-[80%] sm:group-hover:w-[85%] group-hover:bg-black/30"></div>
    </motion.div>
  );
}