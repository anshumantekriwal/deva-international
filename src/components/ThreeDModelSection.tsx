
import { useState, useEffect, useRef } from 'react';

const ThreeDModelSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const model = modelRef.current;
    
    if (!container || !model) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      
      // Calculate mouse position percentage
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      // Apply rotation based on mouse position
      model.style.transform = `
        rotateY(${x * 20}deg) 
        rotateX(${-y * 20}deg)
        translateZ(50px)
      `;
    };
    
    const handleMouseLeave = () => {
      model.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(0)';
      model.style.transition = 'transform 0.5s ease-out';
    };
    
    const handleMouseEnter = () => {
      model.style.transition = 'transform 0.1s';
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);
  
  return (
    <section className="py-24 bg-gradient-to-br from-leather-cream to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-subtle-grain opacity-20" />
      
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
            <p className="text-xs font-medium tracking-widest text-leather-dark">
              CRAFTSMANSHIP REDEFINED
            </p>
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6 text-leather-dark">
            Exquisite Design in 3D
          </h2>
          <p className="text-leather-dark/70 text-lg max-w-2xl mx-auto">
            Experience our premium leather products in immersive 3D. Hover and interact to explore every detail of our masterful craftsmanship.
          </p>
        </div>
        
        <div 
          ref={containerRef}
          className={`model-viewer-container max-w-2xl mx-auto h-[500px] rounded-xl transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ perspective: '1200px' }}
        >
          <div 
            ref={modelRef}
            className="relative w-full h-full transition-transform duration-300"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* 3D Model showcase with light effect */}
            <div className="absolute inset-0 bg-leather-light/5 rounded-3xl" style={{ transform: 'translateZ(-50px)' }} />
            
            <div className="relative h-full flex items-center justify-center">
              <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-leather-light/30 to-leather-dark/30 blur-3xl animate-pulse" />
              
              <div className="relative max-w-xs p-4">
                <img 
                  src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&h=800&q=80" 
                  alt="3D Model of Premium Leather Handbag" 
                  className="object-contain w-full h-auto drop-shadow-2xl"
                />
                
                {/* Interactive elements on the model */}
                <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer animate-pulse">
                  <span className="w-3 h-3 rounded-full bg-leather" />
                </div>
                
                <div className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer animate-pulse" style={{ animationDelay: '1s' }}>
                  <span className="w-3 h-3 rounded-full bg-leather" />
                </div>
              </div>
            </div>
            
            {/* Reflective surface under the model */}
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white/50 to-transparent backdrop-blur-sm rounded-b-xl" style={{ transform: 'rotateX(90deg) translateZ(-150px) translateY(-150px)' }} />
          </div>
        </div>
        
        <div className="text-center mt-10">
          <div className="text-sm inline-flex items-center justify-center px-4 py-2 bg-leather-cream rounded-full text-leather-dark">
            <span className="mr-2">•</span>
            <span>Hover over the product to explore in 3D</span>
            <span className="ml-2">•</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDModelSection;
