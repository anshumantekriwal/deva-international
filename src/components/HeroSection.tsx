
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-leather-cream">
      {/* Background with image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-leather-texture bg-cover bg-center opacity-30"
          style={{ backgroundPosition: '50% 30%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/80" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 z-10 mt-16 sm:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className={`max-w-xl transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-1 mb-6 bg-leather-tan/20 backdrop-blur-sm rounded-full">
              <p className="text-xs font-medium tracking-widest text-leather-dark">
                PREMIUM LEATHER CRAFTSMANSHIP
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold leading-tight text-balance mb-6 text-leather-black">
              Timeless Elegance in Every Stitch
            </h1>
            <p className="text-lg md:text-xl text-leather-dark/80 mb-8 max-w-lg text-pretty">
              Crafting exceptional leather products for those who appreciate refined quality and enduring design. Discover our exclusive collection.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/products')}
                className="btn-primary flex items-center group"
              >
                Explore Collection
                <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="btn-secondary flex items-center"
              >
                About Us
              </button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className={`flex justify-center ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-1000 ease-out delay-300`}>
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-1 bg-leather-light/10 rounded-lg blur-2xl" />
              <div className="relative bg-white/90 backdrop-blur-sm shadow-xl rounded-lg p-5 md:p-8 transform hover:scale-[1.01] transition-transform duration-500">
                <img 
                  src="/lovable-uploads/d62b6da9-2c5d-4284-9cf7-2bede616c2ea.png" 
                  alt="Luxury leather bags by Deva International" 
                  className="w-full h-auto rounded"
                />
                <div className="mt-6 flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-serif font-medium text-leather-dark">The Signature Collection</h3>
                    <p className="text-sm text-leather-dark/70">Handcrafted Excellence</p>
                  </div>
                  <div className="flex h-2.5 items-center">
                    <span className="block h-1.5 w-8 rounded-full bg-leather-light mr-1"></span>
                    <span className="block h-2.5 w-2.5 rounded-full bg-leather"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
