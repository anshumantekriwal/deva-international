
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Award, CheckCircle, Shield } from 'lucide-react';

const certifications = [
  {
    title: "One Star Export House",
    description: "Recognized by Govt. of India",
    icon: <Award className="h-6 w-6 text-amber-500" />
  },
  {
    title: "ISO 9001:2015",
    description: "Quality Management System",
    icon: <CheckCircle className="h-6 w-6 text-green-600" />
  },
  {
    title: "SMETA Certified",
    description: "Ethical Trade Audit",
    icon: <Shield className="h-6 w-6 text-blue-600" />
  },
  {
    title: "Sedex Member",
    description: "Global Social Compliance",
    icon: <Award className="h-6 w-6 text-purple-600" />
  }
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      // Add subtle parallax effect to elements
      const elements = heroRef.current.querySelectorAll('.parallax-element');
      elements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-speed') || '5');
        const xShift = x * speed;
        const yShift = y * speed;
        (el as HTMLElement).style.transform = `translate3d(${xShift}px, ${yShift}px, 0)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-leather-cream overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-leather-texture bg-cover bg-center opacity-30 parallax-element"
          data-speed="-2"
          style={{ backgroundPosition: '50% 30%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/80" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 z-10 mt-16 sm:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className={`max-w-xl transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-1 mb-6 bg-leather-tan/20 backdrop-blur-sm rounded-full animate-pulse">
              <p className="text-xs font-medium tracking-widest text-leather-dark">
                PREMIUM LEATHER CRAFTSMANSHIP
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold leading-tight text-balance mb-6 text-gradient">
              Timeless Elegance in Every Stitch
            </h1>
            <p className="text-lg md:text-xl text-leather-dark/80 mb-8 max-w-lg text-pretty">
              Crafting exceptional leather products for those who appreciate refined quality and enduring design. Discover our exclusive collection.
            </p>
            
            {/* Certifications */}
            <div className="mb-8 grid grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className={`flex items-center p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-leather-light/20 transition-all duration-500 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="mr-3 flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-leather-dark">{cert.title}</p>
                    <p className="text-xs text-leather-dark/70">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/products')}
                className="btn-primary flex items-center group shine-effect overflow-hidden"
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
          <div className={`flex justify-center parallax-element ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-1000 ease-out delay-300`} data-speed="3">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-1 bg-leather-light/10 rounded-lg blur-2xl animate-pulse" />
              <div className="relative bg-white/90 backdrop-blur-sm shadow-xl rounded-lg p-5 md:p-8 transform hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
                <img 
                  src="/images/hero-leather-bag.jpg" 
                  alt="Luxury leather bags by Deva International" 
                  className="w-full h-auto rounded animate-float-slow"
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
