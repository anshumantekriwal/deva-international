
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// Sample accessories collections
const accessoryCollections = [
  {
    id: 1,
    name: "Belts & Straps",
    description: "Premium leather belts and straps for any occasion",
    imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 2,
    name: "Travel Accessories",
    description: "Elegant and functional travel companions",
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 3,
    name: "Office Essentials",
    description: "Sophisticated accessories for your workspace",
    imageUrl: "https://images.unsplash.com/photo-1533654824058-7010cca5bfc8?auto=format&fit=crop&w=800&h=600&q=80"
  }
];

const ProductsAccessories = () => {
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
        <title>Leather Accessories | Deva International</title>
        <meta 
          name="description" 
          content="Browse our collection of premium leather accessories - handcrafted with precision and designed to complement your style."
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
                  Premium Leather Accessories
                </h1>
                <p className="text-lg text-leather-dark/80 mb-8 max-w-lg">
                  Complete your style with our collection of meticulously crafted leather accessories, 
                  designed to add a touch of elegance to your everyday life.
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
                    src="https://images.unsplash.com/photo-1577733966973-d680bffd2e80?auto=format&fit=crop&w=1000&h=800&q=80" 
                    alt="Premium leather accessories" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Accessories Collections Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-leather-dark mb-4">
                Our Accessories Collections
              </h2>
              <p className="text-lg text-leather-dark/70">
                From essential everyday items to luxury pieces, our accessories are designed to enhance your lifestyle.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {accessoryCollections.map((collection) => (
                <Card key={collection.id} className="overflow-hidden shadow-lg group h-full">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={collection.imageUrl} 
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-2xl font-serif font-medium text-white">
                      {collection.name}
                    </h3>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-leather-dark/80 mb-6">{collection.description}</p>
                    <Button 
                      onClick={handleViewCatalog}
                      variant="outline" 
                      className="text-leather hover:text-white hover:bg-leather border-leather"
                    >
                      View Collection
                    </Button>
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
                View Full Catalog
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Gift Ideas Section */}
        <section className="py-16 md:py-20 bg-leather-cream/20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-leather-dark mb-4">
                  Perfect Gift Ideas
                </h2>
                <Separator className="mx-auto w-24 h-0.5 bg-leather mb-6" />
                <p className="text-lg text-leather-dark/70">
                  Our accessories make thoughtful and lasting gifts for any occasion.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1607438608672-946e50eff68f?auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="Leather accessories as gifts" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-serif font-medium text-leather-dark mb-4">
                    Timeless Gifts That Leave an Impression
                  </h3>
                  <p className="text-leather-dark/80 mb-6">
                    Whether for a birthday, anniversary, or corporate gifting, our leather accessories offer a perfect blend of practicality and luxury. Each piece can be personalized with monograms or custom designs.
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="text-leather mr-3 mt-1"><ArrowRight size={16} /></span>
                      <span className="text-leather-dark/80">Custom monogramming and personalization options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leather mr-3 mt-1"><ArrowRight size={16} /></span>
                      <span className="text-leather-dark/80">Elegant gift packaging available</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leather mr-3 mt-1"><ArrowRight size={16} /></span>
                      <span className="text-leather-dark/80">Corporate bulk orders with custom branding</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leather mr-3 mt-1"><ArrowRight size={16} /></span>
                      <span className="text-leather-dark/80">Gift cards and curated gift sets</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={handleViewCatalog}
                    className="bg-leather hover:bg-leather-dark group"
                  >
                    Explore Gift Options
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
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

export default ProductsAccessories;
