
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// Sample handbag collections
const handbagCollections = [
  {
    id: 1,
    name: "Executive Collection",
    description: "Sophisticated designs for the modern professional",
    imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 2,
    name: "Everyday Elegance",
    description: "Practical yet stylish bags for daily use",
    imageUrl: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 3,
    name: "Luxury Statement",
    description: "Premium designs that make a bold statement",
    imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&h=600&q=80"
  }
];

const ProductsHandbags = () => {
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
        <title>Premium Handbags | Deva International</title>
        <meta 
          name="description" 
          content="Explore our premium leather handbags - handcrafted with precision and the finest materials for discerning customers worldwide."
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
                  Premium Handbags Collection
                </h1>
                <p className="text-lg text-leather-dark/80 mb-8 max-w-lg">
                  Discover our exquisite range of handcrafted leather handbags, 
                  designed with precision and made from the finest materials for the discerning customer.
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
                    src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&h=800&q=80" 
                    alt="Premium leather handbags collection" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Handbag Collections Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-leather-dark mb-4">
                Our Handbag Collections
              </h2>
              <p className="text-lg text-leather-dark/70">
                We offer a diverse range of handbag styles to suit every need and occasion.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {handbagCollections.map((collection) => (
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
        
        {/* Craftsmanship Section */}
        <section className="py-16 md:py-20 bg-leather-cream/20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-leather-dark mb-4">
                  Exquisite Craftsmanship
                </h2>
                <Separator className="mx-auto w-24 h-0.5 bg-leather mb-6" />
                <p className="text-lg text-leather-dark/70">
                  Each handbag is a testament to our dedication to quality and attention to detail.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1563016115-85c57cf65bce?auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="Leather crafting process" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-medium text-leather-dark mb-4">
                    The Art of Premium Leather Crafting
                  </h3>
                  <p className="text-leather-dark/80 mb-6">
                    With over 32 years of experience, our master craftsmen combine traditional techniques with modern innovations to create handbags of exceptional quality and durability.
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="text-leather mr-3 mt-1"><ArrowRight size={16} /></span>
                      <span className="text-leather-dark/80">Hand-selected premium full-grain leather</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leather mr-3 mt-1"><ArrowRight size={16} /></span>
                      <span className="text-leather-dark/80">Meticulous attention to detail in every stitch</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leather mr-3 mt-1"><ArrowRight size={16} /></span>
                      <span className="text-leather-dark/80">Reinforced seams for exceptional durability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leather mr-3 mt-1"><ArrowRight size={16} /></span>
                      <span className="text-leather-dark/80">Premium hardware that stands the test of time</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={handleViewCatalog}
                    className="bg-leather hover:bg-leather-dark group"
                  >
                    Explore Our Craftsmanship
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

export default ProductsHandbags;
