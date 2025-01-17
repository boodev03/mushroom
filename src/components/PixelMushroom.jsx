import React from 'react';

export default function PixelMushroom({ className }) {
  return (
    <div className={`w-16 h-16 relative ${className}`}>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-red-500 rounded-t-full"></div>
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"></div>
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-gray-200"></div>
    </div>
  );
}