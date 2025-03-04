
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Sample product data
const productData = [
  {
    id: 1,
    name: "Classic Leather Tote",
    category: "Bags",
    description: "A timeless design crafted from premium full-grain leather",
    imageUrl: "/lovable-uploads/d62b6da9-2c5d-4284-9cf7-2bede616c2ea.png"
  },
  {
    id: 2,
    name: "Executive Wallet",
    category: "Wallets",
    description: "Sleek and functional with multiple card slots and compartments",
    imageUrl: "/lovable-uploads/d62b6da9-2c5d-4284-9cf7-2bede616c2ea.png"
  },
  {
    id: 3,
    name: "Travel Duffel",
    category: "Bags",
    description: "Spacious and durable for all your travel essentials",
    imageUrl: "/lovable-uploads/d62b6da9-2c5d-4284-9cf7-2bede616c2ea.png"
  },
  {
    id: 4,
    name: "Slim Card Holder",
    category: "Wallets",
    description: "Minimalist design for the modern professional",
    imageUrl: "/lovable-uploads/d62b6da9-2c5d-4284-9cf7-2bede616c2ea.png"
  }
];

const ProductCard = ({ product, index }: { product: typeof productData[0], index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 + index * 150);
    
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`product-card ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 ease-out`}
    >
      <div className="overflow-hidden" onClick={() => navigate('/products')}>
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="product-image"
        />
      </div>
      <div className="p-6">
        <span className="text-xs font-medium text-leather/80 uppercase tracking-wider">{product.category}</span>
        <h3 className="text-xl font-serif font-medium mt-2 mb-3">{product.name}</h3>
        <p className="text-sm text-leather-dark/70 mb-5">{product.description}</p>
        <button 
          onClick={() => navigate('/products')}
          className="inline-flex items-center text-leather hover:text-leather-dark font-medium text-sm transition-colors"
        >
          View Details
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const ProductShowcase = () => {
  return (
    <section className="bg-white py-20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="section-title">Our Signature Products</h2>
          <p className="text-leather-dark/70 text-lg max-w-2xl mx-auto">
            Explore our collection of premium handcrafted leather goods. 
            Each piece is meticulously designed and crafted to offer both functionality and timeless style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productData.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={() => window.location.href = '/products'}
            className="btn-primary inline-flex items-center"
          >
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
