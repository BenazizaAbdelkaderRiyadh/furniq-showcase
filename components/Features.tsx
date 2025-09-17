import React from 'react';
import LeafIcon from './icons/LeafIcon';
import SparkleIcon from './icons/SparkleIcon';
import ClockIcon from './icons/ClockIcon';

const features = [
  {
    icon: <LeafIcon className="w-8 h-8 text-white" />,
    title: 'Sustainable Materials',
    description: 'We source our wood from responsibly managed forests, ensuring a minimal environmental footprint.',
  },
  {
    icon: <SparkleIcon className="w-8 h-8 text-white" />,
    title: 'Handcrafted Quality',
    description: 'Each piece is meticulously crafted by skilled artisans, guaranteeing exceptional quality and durability.',
  },
  {
    icon: <ClockIcon className="w-8 h-8 text-white" />,
    title: 'Timeless Design',
    description: 'Our designs blend modern aesthetics with classic principles, creating furniture that transcends trends.',
  },
]

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-800/50 rounded-3xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">A New Standard in Furniture</h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">Experience the perfect blend of form, function, and finesse.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center">
              <div className="p-4 bg-white/10 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/60 max-w-xs">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
