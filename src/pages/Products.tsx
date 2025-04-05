
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// Sample product categories with more realistic imagery
const productCategories = [
  {
    id: 1,
    name: "Premium Handbags",
    description: "Exquisite handcrafted leather handbags for the modern professional",
    imageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&h=800&q=80",
    featured: true
  },
  {
    id: 2,
    name: "Leather Wallets",
    description: "Classic and contemporary wallet designs for all occasions",
    imageUrl: "https://images.unsplash.com/photo-1548863227-3af567fc3b27?auto=format&fit=crop&w=800&h=800&q=80",
    featured: true
  },
  {
    id: 3,
    name: "Accessories",
    description: "Complement your style with our premium leather accessories",
    imageUrl: "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?auto=format&fit=crop&w=800&h=800&q=80",
    featured: true
  }
];

// Sample featured products
const featuredProducts = [
  {
    id: 1,
    name: "Executive Leather Briefcase",
    category: "Handbags",
    description: "Sophisticated design with premium full-grain leather and secure compartments",
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&h=800&q=80"
  },
  {
    id: 2,
    name: "Classic Bifold Wallet",
    category: "Wallets",
    description: "Timeless bifold wallet crafted from vegetable-tanned leather",
    imageUrl: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&h=800&q=80"
  },
  {
    id: 3,
    name: "Leather Card Holder",
    category: "Accessories",
    description: "Slim, minimalist card holder with RFID protection",
    imageUrl: "https://images.unsplash.com/photo-1581431886211-6b932f8367f2?auto=format&fit=crop&w=800&h=800&q=80"
  },
  {
    id: 4,
    name: "Designer Tote Bag",
    category: "Handbags",
    description: "Spacious, elegant tote with premium hardware and lining",
    imageUrl: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&h=800&q=80"
  }
];

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleViewCatalog = () => {
    // This will be replaced with the actual DocSend link later
    window.open('https://www.docsend.com/catalog-link', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Premium Leather Products | Deva International</title>
        <meta 
          name="description" 
          content="Explore our premium leather products including handbags, wallets, and accessories. Quality craftsmanship with 32+ years of industry experience."
        />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative bg-leather-cream overflow-hidden">
          <div className="absolute inset-0 bg-subtle-grain opacity-10"></div>
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-leather-dark mb-6">
                  Premium Leather Craftsmanship
                </h1>
                <p className="text-lg text-leather-dark/80 mb-8 max-w-lg">
                  Discover our exquisite collection of handcrafted leather products, 
                  designed with precision and made from the finest materials for discerning customers worldwide.
                </p>
                <Button 
                  onClick={handleViewCatalog}
                  size="lg" 
                  className="bg-leather hover:bg-leather-dark group"
                >
                  View Full Catalog
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=1000&h=800&q=80" 
                    alt="Premium leather products collection" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Product Categories Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-leather-dark mb-4">
                Our Product Categories
              </h2>
              <p className="text-lg text-leather-dark/70">
                Explore our diverse range of premium leather goods, handcrafted with precision and care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {productCategories.map((category) => (
                <Card key={category.id} className="overflow-hidden shadow-lg group h-full">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={category.imageUrl} 
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-2xl font-serif font-medium text-white">
                      {category.name}
                    </h3>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-leather-dark/80 mb-6">{category.description}</p>
                    <Button 
                      onClick={handleViewCatalog}
                      variant="outline" 
                      className="text-leather hover:text-white hover:bg-leather border-leather"
                    >
                      Browse Collection
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Products Section */}
        <section className="py-16 md:py-20 bg-leather-cream/30">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-leather-dark mb-4">
                  Featured Products
                </h2>
                <p className="text-lg text-leather-dark/70 max-w-2xl">
                  A small selection from our extensive catalog of premium leather goods.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button 
                  onClick={handleViewCatalog}
                  variant="default" 
                  className="bg-leather hover:bg-leather-dark group"
                >
                  View Full Catalog
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="h-full overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="mb-2">
                      <span className="text-xs font-medium text-leather tracking-wide uppercase">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-serif font-medium text-leather-dark mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-leather-dark/70 line-clamp-2">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button 
                onClick={handleViewCatalog}
                size="lg" 
                className="bg-leather hover:bg-leather-dark group"
              >
                View All Products
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Custom Orders Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-leather-dark mb-4">
                  Custom Orders
                </h2>
                <Separator className="mx-auto w-24 h-0.5 bg-leather mb-6" />
                <p className="text-lg text-leather-dark/70">
                  Looking for something specific? We offer custom leather goods tailored to your exact specifications.
                </p>
              </div>
              
              <div className="bg-leather-cream/20 rounded-xl p-8 shadow-sm">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-serif font-medium text-leather-dark mb-4">
                      Let's Create Something Unique Together
                    </h3>
                    <p className="text-leather-dark/80 mb-6">
                      With over 32 years of experience in leather craftsmanship, we can bring your vision to life. 
                      Whether it's a corporate gift, a special edition product, or a unique design concept, 
                      our team is ready to collaborate with you on custom orders of any size.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-leather mr-2">✓</span>
                        <span>Custom designs to your specifications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-leather mr-2">✓</span>
                        <span>Corporate branding and personalization options</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-leather mr-2">✓</span>
                        <span>Bulk orders with competitive pricing</span>
                      </li>
                    </ul>
                    <Button className="bg-leather hover:bg-leather-dark">
                      Contact Us For Custom Orders
                    </Button>
                  </div>
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1620809425958-d3ef2d69ddb2?auto=format&fit=crop&w=800&h=600&q=80" 
                      alt="Custom leather crafting process" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
