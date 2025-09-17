
import React, { useState, useRef } from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';

const products = [
  {
    name: 'The Minimalist Chair',
    category: 'Living Room',
    price: '$249',
    imageUrl: './assets/chair.png',
  },
  {
    name: 'Nordic Sideboard',
    category: 'Dining',
    price: '$799',
    imageUrl: './assets/sideboard.png',
  },
  {
    name: 'Luxurious Armchair ',
    category: 'Living Room',
    price: '$499',
    imageUrl: './assets/armchair.png',
  },
  {
    name: 'Sculptural Reclaimed Wood Coffee Table',
    category: 'Living Room',
    price: '$599',
    imageUrl: './assets/coffee.png',
  },
  {
    name: 'Serene Nightstand',
    category: 'Bedroom',
    price: '$349',
    imageUrl: './assets/nightstand.png',
  },
  {
    name: 'Oak Dining Table',
    category: 'Dining',
    price: '$1299',
    imageUrl: './assets/dining.png',
  },
  {
    name: 'Woven Rattan Shelf',
    category: 'Storage',
    price: '$399',
    imageUrl: './assets/shelf.png',
  }
];

const ProductShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragInfo = useRef({ isDragging: false, startX: 0, hasTriggered: false });
  const DRAG_THRESHOLD = 50;

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const handleDragStart = (clientX: number, carousel: HTMLElement | null) => {
    dragInfo.current = { isDragging: true, startX: clientX, hasTriggered: false };
    if (carousel) carousel.style.cursor = 'grabbing';
  };

  const handleDragMove = (clientX: number) => {
    if (!dragInfo.current.isDragging || dragInfo.current.hasTriggered) return;
    const walk = clientX - dragInfo.current.startX;
    if (walk < -DRAG_THRESHOLD) {
      handleNext();
      dragInfo.current.hasTriggered = true;
    } else if (walk > DRAG_THRESHOLD) {
      handlePrev();
      dragInfo.current.hasTriggered = true;
    }
  };
  
  const handleDragEnd = (carousel: HTMLElement | null) => {
    if (!dragInfo.current.isDragging) return;
    dragInfo.current.isDragging = false;
    if (carousel) carousel.style.cursor = 'grab';
  };

  const getStyle = (index: number) => {
    const total = products.length;
    let offset = index - activeIndex;

    if (offset > total / 2) {
      offset -= total;
    } else if (offset < -total / 2) {
      offset += total;
    }
    
    const distance = Math.abs(offset);
    
    let transform = `translateX(${offset * 30}%) scale(0.5)`;
    let opacity = 0;
    let zIndex = 0;

    if (distance === 0) {
      transform = 'translateX(0) scale(1)';
      opacity = 1;
      zIndex = 20;
    } else if (distance === 1) {
      transform = `translateX(${offset * 35}%) scale(0.8)`;
      opacity = 0.6;
      zIndex = 10;
    } else if (distance === 2) {
      transform = `translateX(${offset * 40}%) scale(0.65)`;
      opacity = 0.3;
      zIndex = 5;
    }

    return {
      transform,
      opacity,
      zIndex,
      transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
    };
  };
  
  const activeProduct = products[activeIndex];

  return (
    <section aria-labelledby="featured-products-heading">
      <div className="relative w-full overflow-hidden bg-zinc-900 py-20 md:py-32">
        <div className="absolute inset-0 transition-opacity duration-700 ease-in-out" key={activeIndex}>
          <img 
            src={activeProduct.imageUrl} 
            alt={`${activeProduct.name} background`}
            className="w-full h-full object-cover filter blur-3xl scale-125 brightness-50"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[500px]">
            <div className="text-left relative flex flex-col self-stretch">
              <div>
                <h2 id="featured-products-heading" className="text-4xl md:text-5xl font-bold tracking-tight">Featured Products</h2>
                <p className="mt-4 text-lg text-white/70 max-w-2xl">Discover our hand-picked selection of statement pieces.</p>
              </div>
              
              <div key={activeIndex} className="animate-fade-in mt-12 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-sm text-white/60 mb-2">{activeProduct.category}</p>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">{activeProduct.name}</h3>
                  <p className="text-3xl font-light text-white/80 mb-8">{activeProduct.price}</p>
                </div>
                <div>
                  <button className="px-8 py-4 bg-white text-zinc-900 font-semibold rounded-full hover:bg-zinc-200 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                    View Details
                  </button>
                  <div className="flex items-center gap-4 mt-8">
                    <button 
                      onClick={handlePrev} 
                      aria-label="Previous product"
                      className="w-14 h-14 rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center"
                    >
                      <ArrowLeftIcon className="w-7 h-7" />
                    </button>
                    <button 
                      onClick={handleNext} 
                      aria-label="Next product"
                      className="w-14 h-14 rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center"
                    >
                      <ArrowRightIcon className="w-7 h-7" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center perspective-1000 touch-pan-y"
              style={{ cursor: 'grab' }}
              onMouseDown={(e) => handleDragStart(e.pageX, e.currentTarget)}
              onMouseMove={(e) => handleDragMove(e.pageX)}
              onMouseUp={(e) => handleDragEnd(e.currentTarget)}
              onMouseLeave={(e) => handleDragEnd(e.currentTarget)}
              onTouchStart={(e) => handleDragStart(e.touches[0].clientX, e.currentTarget)}
              onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
              onTouchEnd={(e) => handleDragEnd(e.currentTarget)}
            >
              {products.map((product, index) => (
                <div 
                  key={product.name} 
                  className="absolute w-4/5 md:w-3/4 lg:w-full aspect-[3/4] cursor-pointer"
                  style={getStyle(index)}
                  onClick={() => setActiveIndex(index)}
                  onDragStart={(e) => e.preventDefault()}
                >
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover rounded-2xl shadow-2xl pointer-events-none" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .animate-fade-in { 
          animation: fadeIn 0.7s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .touch-pan-y { touch-action: pan-y; }
      `}</style>
    </section>
  );
};

export default ProductShowcase;
