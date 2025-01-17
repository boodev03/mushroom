import React from 'react';

export default function Stats() {
  const stats = [
    { value: "100K", label: "Total Supply" },
    { value: "1000+", label: "Holders" },
    { value: "$1M", label: "Market Cap" }
  ];

  return (
    <div className="mt-12 grid grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <h3 className="text-xl font-pixel mb-1 text-white">{stat.value}</h3>
          <p className="text-sm text-white/90">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}