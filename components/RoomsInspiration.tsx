import React from 'react';

const rooms = [
  { name: 'Modern Living Room', imageUrl: './assets/livingroom.png' },
  { name: 'Serene Bedroom', imageUrl: './assets/bedroom.png' },
  { name: 'Elegant Dining Area', imageUrl: './assets/diningarea.png' },
  { name: 'Cozy Reading Nook', imageUrl: './assets/booknook.png' },
];

interface RoomsInspirationProps {
  onImageSelect: (imageUrl: string) => void;
}

const RoomCard: React.FC<{ room: typeof rooms[0], onImageSelect: (url: string) => void, className?: string }> = ({ room, onImageSelect, className = '' }) => (
  <div 
    className={`rounded-2xl overflow-hidden group relative cursor-pointer ${className}`}
    onClick={() => onImageSelect(room.imageUrl)}
  >
    <img src={room.imageUrl} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
    <div className="absolute inset-0 bg-black/40 flex items-end p-6">
      <h3 className="text-xl md:text-2xl font-semibold text-white">{room.name}</h3>
    </div>
  </div>
);

const RoomsInspiration: React.FC<RoomsInspirationProps> = ({ onImageSelect }) => {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Design Your Dream Space</h2>
        <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">Get inspired by our curated room designs and bring your vision to life.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
        <RoomCard room={rooms[0]} onImageSelect={onImageSelect} className="col-span-2 row-span-2" />
        <RoomCard room={rooms[1]} onImageSelect={onImageSelect} />
        <RoomCard room={rooms[2]} onImageSelect={onImageSelect} />
        <RoomCard room={rooms[3]} onImageSelect={onImageSelect} className="col-span-2" />
      </div>
    </section>
  );
};

export default RoomsInspiration;