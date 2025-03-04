
import { useState, useEffect } from 'react';
import { Check, Factory, Users, Globe, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Factory className="h-5 w-5" />,
    title: "State-of-the-Art Manufacturing",
    description: "Our modern facility equipped with cutting-edge technology ensures precision and quality at every step of production."
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Skilled Craftspeople",
    description: "Our team of artisans bring decades of expertise in traditional leather craftsmanship combined with innovative techniques."
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Global Network",
    description: "With distribution channels across continents, we deliver our premium leather goods to discerning customers worldwide."
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Sustainable Practices",
    description: "We're committed to responsible manufacturing with eco-friendly processes and ethical sourcing of materials."
  }
];

const InfrastructureSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('infrastructure-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="infrastructure-section"
      className="py-20 bg-leather-cream relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-subtle-grain opacity-30" />
      
      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-block px-4 py-1 mb-6 bg-leather/10 rounded-full">
              <p className="text-xs font-medium tracking-widest text-leather-dark">
                OUR INFRASTRUCTURE
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold leading-tight mb-6 text-leather-black">
              Excellence at Every Level of Production
            </h2>
            <p className="text-leather-dark/80 mb-8 text-pretty">
              At Deva International, we've invested in creating a manufacturing ecosystem that combines traditional craftsmanship with modern technology. Our infrastructure ensures consistency, quality, and efficiency in every product we create.
            </p>
            
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li 
                  key={index}
                  className={`flex items-start p-4 rounded-lg transition-all duration-300 ${activeFeature === index ? 'bg-leather bg-opacity-10' : ''}`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className={`flex-shrink-0 p-2 rounded-md ${activeFeature === index ? 'bg-leather text-white' : 'bg-leather/10 text-leather'} mr-4`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-leather-dark mb-1">{feature.title}</h3>
                    <p className="text-sm text-leather-dark/70">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Image Section */}
          <div className={`transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -inset-1 bg-leather-light/10 rounded-lg blur-2xl" />
              <div className="relative bg-white shadow-xl rounded-lg p-5 md:p-8">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-md mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1631467895429-15d0f4644a3d?auto=format&fit=crop&w=1200&h=800&q=80" 
                    alt="Deva International manufacturing facility" 
                    className="object-cover h-full w-full animate-image-rotate"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-leather mr-3" />
                    <p className="text-sm text-leather-dark/90">30,000 sq. ft. manufacturing facility</p>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-leather mr-3" />
                    <p className="text-sm text-leather-dark/90">Skilled team of 200+ artisans and staff</p>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-leather mr-3" />
                    <p className="text-sm text-leather-dark/90">Exports to 30+ countries worldwide</p>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-leather mr-3" />
                    <p className="text-sm text-leather-dark/90">ISO 9001 certified quality management</p>
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

export default InfrastructureSection;
