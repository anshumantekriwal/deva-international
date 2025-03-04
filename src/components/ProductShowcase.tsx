
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Updated product data with collections
const productCollections = [
  {
    id: 1,
    name: "Luxury Collection",
    description: "Premium full-grain leather crafted with meticulous attention to detail",
    theme: "bg-gradient-to-br from-leather-tan/30 to-leather-light/10",
    products: [
      {
        id: 101,
        name: "Classic Leather Tote",
        category: "Bags",
        description: "A timeless design crafted from premium full-grain leather",
        imageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&h=800&q=80",
        size: "col-span-2 row-span-2"
      },
      {
        id: 102,
        name: "Executive Briefcase",
        category: "Bags",
        description: "Sophisticated design for the modern professional",
        imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&h=800&q=80",
        size: "col-span-1 row-span-1"
      },
      {
        id: 103,
        name: "Designer Wallet",
        category: "Wallets",
        description: "Elegant style with functional compartments",
        imageUrl: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&h=800&q=80",
        size: "col-span-1 row-span-1"
      },
      {
        id: 104,
        name: "Premium Card Holder",
        category: "Wallets",
        description: "Sleek minimalist design with multiple card slots",
        imageUrl: "https://images.unsplash.com/photo-1607164917696-c67d6a2ec106?auto=format&fit=crop&w=800&h=800&q=80",
        size: "col-span-2 row-span-1"
      }
    ]
  },
  {
    id: 2,
    name: "Vintage Collection",
    description: "Artisanal leather goods with classic styling and distressed finishes",
    theme: "bg-gradient-to-br from-amber-100/50 to-amber-50/30",
    products: [
      {
        id: 201,
        name: "Distressed Leather Messenger",
        category: "Bags",
        description: "Weathered look with authentic vintage appeal",
        imageUrl: "https://images.unsplash.com/photo-1548863227-3af567fc3b27?auto=format&fit=crop&w=800&h=800&q=80",
        size: "col-span-1 row-span-2"
      },
      {
        id: 202,
        name: "Heritage Duffle Bag",
        category: "Bags",
        description: "Travel in style with this timeless piece",
        imageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&h=800&q=80",
        size: "col-span-2 row-span-1"
      },
      {
        id: 203,
        name: "Rustic Bifold Wallet",
        category: "Wallets",
        description: "Classic design with a naturally aged appearance",
        imageUrl: "https://images.unsplash.com/photo-1607164917696-c67d6a2ec106?auto=format&fit=crop&w=800&h=800&q=80",
        size: "col-span-1 row-span-1"
      },
      {
        id: 204,
        name: "Antique Card Case",
        category: "Wallets",
        description: "Compact design with old-world character",
        imageUrl: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&h=800&q=80",
        size: "col-span-2 row-span-1"
      }
    ]
  },
  {
    id: 3,
    name: "Modern Collection",
    description: "Contemporary designs featuring clean lines and innovative details",
    theme: "bg-gradient-to-br from-slate-100/50 to-blue-50/30",
    products: [
      {
        id: 301,
        name: "Minimalist Crossbody",
        category: "Bags",
        description: "Sleek contemporary design for everyday use",
        imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&h=800&q=80",
        size: "col-span-2 row-span-1"
      },
      {
        id: 302,
        name: "Tech Organizer",
        category: "Accessories",
        description: "Designed for the digital lifestyle with cable management",
        imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&h=800&q=80",
        size: "col-span-1 row-span-1"
      },
      {
        id: 303,
        name: "Slim Passport Holder",
        category: "Travel",
        description: "Streamlined design for the modern traveler",
        imageUrl: "https://images.unsplash.com/photo-1624687943971-e86af76d57de?auto=format&fit=crop&w=800&h=800&q=80",
        size: "col-span-1 row-span-1"
      },
      {
        id: 304,
        name: "Urban Backpack",
        category: "Bags",
        description: "Sophisticated urban style with practical features",
        imageUrl: "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?auto=format&fit=crop&w=800&h=800&q=80",
        size: "col-span-2 row-span-2"
      }
    ]
  }
];

const ProductCard = ({ product, index, delay = 0 }: { product: any, index: number, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay + index * 150);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index, delay]);

  return (
    <div 
      ref={cardRef}
      className={`product-card ${product.size} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 ease-out`}
      style={{ transitionDelay: `${delay + index * 100}ms` }}
    >
      <div className="overflow-hidden rounded-t-md h-full" onClick={() => navigate('/products')}>
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="product-image h-60 w-full object-cover"
        />
      </div>
      <div className="p-6">
        <span className="text-xs font-medium text-leather/80 uppercase tracking-wider">{product.category}</span>
        <h3 className="text-xl font-serif font-medium mt-2 mb-3">{product.name}</h3>
        <p className="text-sm text-leather-dark/70 mb-5">{product.description}</p>
        <button 
          onClick={() => navigate('/products')}
          className="inline-flex items-center text-leather hover:text-leather-dark font-medium text-sm transition-colors group"
        >
          View Details
          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const CollectionSlider = () => {
  const [activeCollection, setActiveCollection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveCollection((prev) => 
      prev === 0 ? productCollections.length - 1 : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 700);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveCollection((prev) => 
      (prev + 1) % productCollections.length
    );
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <div className="relative">
      {/* Collection slides */}
      <div 
        ref={sliderRef}
        className="overflow-hidden rounded-xl"
      >
        <div 
          className="transition-transform duration-700 ease-in-out flex"
          style={{ transform: `translateX(-${activeCollection * 100}%)` }}
        >
          {productCollections.map((collection, idx) => (
            <div 
              key={collection.id}
              className={`w-full flex-shrink-0 ${collection.theme} p-8 sm:p-12`}
            >
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-serif font-medium mb-3 text-leather-dark">{collection.name}</h3>
                <p className="text-leather-dark/70 mb-8 max-w-2xl">{collection.description}</p>
                
                <div className="grid grid-cols-4 grid-rows-3 gap-6 h-[550px]">
                  {collection.products.map((product, index) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      index={index} 
                      delay={idx === activeCollection ? 300 : 0}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Controls */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-leather-dark hover:bg-white transition-all z-10"
        aria-label="Previous collection"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-leather-dark hover:bg-white transition-all z-10"
        aria-label="Next collection"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {productCollections.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCollection(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === activeCollection 
                ? 'w-6 bg-leather' 
                : 'bg-leather-dark/30 hover:bg-leather-dark/50'
            }`}
            aria-label={`Go to collection ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const ProductShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-white py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-subtle-grain opacity-10" />
      
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
            <p className="text-xs font-medium tracking-widest text-leather-dark">
              EXQUISITE CRAFTSMANSHIP
            </p>
          </span>
          <h2 className="section-title text-leather-dark">Our Signature Collections</h2>
          <p className="text-leather-dark/70 text-lg max-w-2xl mx-auto">
            Explore our diverse range of premium handcrafted leather goods. 
            Each collection represents a unique aesthetic, crafted with meticulous attention to detail and exceptional materials.
          </p>
        </div>
        
        <div className={`transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <CollectionSlider />
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={() => navigate('/products')}
            className="btn-primary inline-flex items-center group"
          >
            Explore All Collections
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
