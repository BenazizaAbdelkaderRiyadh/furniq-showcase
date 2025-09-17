import React from 'react';
import ArrowDownIcon from './icons/ArrowDownIcon';

const Hero: React.FC = () => {
  return (
    <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight" style={{ fontFamily: "'General Sans', sans-serif" }}>
          Crafted for Comfort, <br /> Designed for Life
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Explore our collection of artisanal wooden furniture, where every piece combines timeless aesthetics with practical design to enrich your daily living.
        </p>
        <button className="mt-10 px-8 py-4 bg-white text-zinc-900 font-semibold rounded-full hover:bg-zinc-200 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          Discover the Collection
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-80">
        <span className="text-sm text-white font-medium">Explore Below</span>
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center items-start pt-2">
            <ArrowDownIcon className="w-4 h-4 text-white animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
