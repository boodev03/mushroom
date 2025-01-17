import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CoreFeatures from './components/sections/CoreFeatures';
import Gameplay from './components/sections/Gameplay';
import Progression from './components/sections/Progression';
import Tokenomics from './components/sections/Tokenomics';
import Roadmap from './components/sections/Roadmap';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CoreFeatures />
        <Gameplay />
        <Progression />
        <Tokenomics />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}