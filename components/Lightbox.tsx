import React, { useEffect, useState } from 'react';
import CloseIcon from './icons/CloseIcon';

interface LightboxProps {
  imageUrl: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ imageUrl, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const backdropAnimation = isClosing ? 'animate-fade-out' : 'animate-fade-in';
  const imageAnimation = isClosing ? 'animate-zoom-out' : 'animate-zoom-in';

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm ${backdropAnimation}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
        aria-label="Close image viewer"
      >
        <CloseIcon className="w-8 h-8" />
      </button>

      <div 
        className={`relative max-w-4xl max-h-[90vh] rounded-lg overflow-hidden shadow-2xl ${imageAnimation}`}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={imageUrl} alt="Enlarged room view" className="w-auto h-auto max-w-full max-h-[90vh] object-contain" />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes zoomOut {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.9); }
        }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        .animate-fade-out { animation: fadeOut 0.3s ease-in forwards; }
        .animate-zoom-in { animation: zoomIn 0.3s ease-out forwards; }
        .animate-zoom-out { animation: zoomOut 0.3s ease-in forwards; }
      `}</style>
    </div>
  );
};

export default Lightbox;