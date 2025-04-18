
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Award, CheckCircle, Shield } from 'lucide-react';

const images = [
  '/lovable-uploads/4da47064-5fc2-4653-be84-e6536dc3e366.png',
  '/lovable-uploads/80887948-e9cd-4507-85f5-0f79f6632f5e.png'
];

const certifications = [{
  title: "One Star Export House",
  description: "Recognized by Govt. of India",
  icon: <Award className="h-6 w-6 text-amber-500" />
}, {
  title: "ISO 9001:2015",
  description: "Quality Management System",
  icon: <CheckCircle className="h-6 w-6 text-green-600" />
}, {
  title: "SMETA Certified",
  description: "Ethical Trade Audit",
  icon: <Shield className="h-6 w-6 text-blue-600" />
}, {
  title: "Sedex Member",
  description: "Global Social Compliance",
  icon: <Award className="h-6 w-6 text-purple-600" />
}];

const HeroSection = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

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
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: '50% 30%',
              backgroundSize: 'cover',
              position: 'absolute',
              inset: 0,
              opacity: currentImageIndex === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out'
            }}
            className="absolute inset-0"
          />
        ))}
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better text readability */}
      </div>

      <div className="container mx-auto px-4 sm:px-6 z-10 mt-16 sm:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className={`lg:col-span-8 lg:col-start-3 text-center transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-1 mb-6 bg-leather-tan/20 backdrop-blur-sm rounded-full animate-pulse">
              <p className="text-xs font-medium tracking-widest text-leather-dark">INTERNATIONALLY TRUSTED LEATHER GOODS SUPPLIER</p>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif leading-tight text-balance mb-6 text-gradient text-leather-dark font-semibold md:text-5xl">Global Excellence in Leather Craftsmanship</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-sans text-pretty font-normal text-leather-dark">Since 1993, Deva International EXIM Pvt.Ltd. has been the preferred partner for leading fashion brands and importers worldwide. Combining sustainability, craftsmanship, and innovative designs, that elevate your leather accessories collection.</p>
            
            <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {certifications.map((cert, index) => <div key={index} className={`flex items-center p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-leather-light/20 transition-all duration-500 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{
              transitionDelay: `${300 + index * 100}ms`
            }}>
                  <div className="mr-3 flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-leather-dark">{cert.title}</p>
                    <p className="text-xs text-leather-dark/70">{cert.description}</p>
                  </div>
                </div>)}
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => navigate('/products')} className="btn-primary flex items-center group">
                Explore Collection
                <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => navigate('/about')} className="btn-secondary flex items-center text-white">
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
