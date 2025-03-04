
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

// Sample product categories
const categories = [
  { id: 1, name: "Leather Bags", count: 12 },
  { id: 2, name: "Wallets", count: 8 },
  { id: 3, name: "Purses", count: 6 },
  { id: 4, name: "Laptop Bags", count: 4 },
  { id: 5, name: "Travel Accessories", count: 5 }
];

// Sample product data
const products = [
  {
    id: 1,
    name: "Classic Leather Tote",
    category: "Bags",
    price: "$180",
    description: "A timeless design crafted from premium full-grain leather",
    imageUrl: "/lovable-uploads/d62b6da9-2c5d-4284-9cf7-2bede616c2ea.png",
    featured: true
  },
  {
    id: 2,
    name: "Executive Wallet",
    category: "Wallets",
    price: "$85",
    description: "Sleek and functional with multiple card slots and compartments",
    imageUrl: "/lovable-uploads/d62b6da9-2c5d-4284-9cf7-2bede616c2ea.png",
    featured: false
  },
  {
    id: 3,
    name: "Travel Duffel",
    category: "Bags",
    price: "$240",
    description: "Spacious and durable for all your travel essentials",
    imageUrl: "/lovable-uploads/d62b6da9-2c5d-4284-9cf7-2bede616c2ea.png",
    featured: true
  },
  {
    id: 4,
    name: "Slim Card Holder",
    category: "Wallets",
    price: "$45",
    description: "Minimalist design for the modern professional",
    imageUrl: "/lovable-uploads/d62b6da9-2c5d-4284-9cf7-2bede616c2ea.png",
    featured: false
  },
  {
    id: 5,
    name: "Ladies Clutch",
    category: "Purses",
    price: "$120",
    description: "Elegant and compact for evening events",
    imageUrl: "/lovable-uploads/d62b6da9-2c5d-4284-9cf7-2bede616c2ea.png",
    featured: false
  },
  {
    id: 6,
    name: "Laptop Sleeve",
    category: "Laptop Bags",
    price: "$95",
    description: "Protective and stylish for your valuable devices",
    imageUrl: "/lovable-uploads/d62b6da9-2c5d-4284-9cf7-2bede616c2ea.png",
    featured: false
  }
];

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Header */}
        <div className="bg-leather-cream py-12 mb-10">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">Our Products</h1>
              <p className="text-xl text-leather-dark/80">
                Discover our exquisite range of handcrafted leather goods, each piece a testament to our passion for quality craftsmanship.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-medium mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <button className="w-full text-left py-2 px-3 rounded-md bg-leather text-white font-medium">
                      All Products
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button className="w-full text-left py-2 px-3 rounded-md hover:bg-leather-tan/10 transition-colors flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="bg-leather-tan/20 text-leather-dark text-xs rounded-full px-2 py-1">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <h3 className="text-xl font-serif font-medium mb-4">Featured</h3>
                  <div className="space-y-4">
                    {products.filter(p => p.featured).map((product) => (
                      <div key={`featured-${product.id}`} className="flex gap-3">
                        <img 
                          src={product.imageUrl} 
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-md flex-shrink-0" 
                        />
                        <div>
                          <h4 className="font-medium text-leather-dark">{product.name}</h4>
                          <p className="text-leather mt-1">{product.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product Grid */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="product-card group">
                    <div className="overflow-hidden">
                      <img 
                        src={product.imageUrl} 
                        alt={product.name} 
                        className="product-image"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-serif font-medium">{product.name}</h3>
                        <span className="font-medium text-leather">{product.price}</span>
                      </div>
                      <span className="text-xs font-medium text-leather/80 uppercase tracking-wider block mb-2">{product.category}</span>
                      <p className="text-sm text-leather-dark/70 mb-5">{product.description}</p>
                      <button className="inline-flex items-center text-leather hover:text-leather-dark font-medium text-sm transition-colors">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
