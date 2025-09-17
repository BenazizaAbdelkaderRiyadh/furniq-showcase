
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import RoomsInspiration from './components/RoomsInspiration';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const heroRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const roomsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsHeaderSticky(currentScrollY > 100);

      const sections = [
        { id: 'home', ref: heroRef },
        { id: 'products', ref: productsRef },
        { id: 'about', ref: aboutRef },
        { id: 'rooms', ref: roomsRef },
        { id: 'contact', ref: contactRef },
      ];
      
      const scrollThreshold = window.innerHeight * 0.4;
      let newActiveSection = 'home';

      for (const section of sections) {
        if (section.ref.current && section.ref.current.offsetTop <= currentScrollY + scrollThreshold) {
          newActiveSection = section.id;
        }
      }

      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleImageSelect = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white font-sans">
      <Header isSticky={isHeaderSticky} activeSection={activeSection} />
      <div ref={heroRef} className="p-4 md:p-6 lg:p-8">
        <div 
          className="relative h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] w-full rounded-3xl overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('./assets/bg.png')",
              transform: `translateY(${scrollY * 0.4}px)`
            }}
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <Hero />
        </div>
      </div>
      
      <main className="space-y-24 md:space-y-32 mb-24 md:mb-32">
        <section id="products" ref={productsRef}>
          <ProductShowcase />
        </section>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 space-y-24 md:space-y-32">
          <section id="about" ref={aboutRef}>
            <Features />
          </section>
          <section id="rooms" ref={roomsRef}>
            <RoomsInspiration onImageSelect={handleImageSelect} />
          </section>
          <Testimonials />
        </div>
      </main>

      <section id="contact" ref={contactRef}>
        <Footer />
      </section>

      {selectedImage && (
        <Lightbox imageUrl={selectedImage} onClose={handleCloseLightbox} />
      )}
    </div>
  );
};

export default App;
