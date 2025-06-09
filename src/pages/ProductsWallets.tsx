import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Sample wallet collections
const walletCollections = [
  {
    id: 1,
    name: "Men's Wallets",
    description:
      "Explore premium collection of men’s wallets, including bifolds, slim card holders, and leather travel wallets. Designed for professionals, built for longevity.",
    imageUrl: "/images/premium-leather-wallets-collection-1.jpg",
  },
  {
    id: 2,
    name: "Women's Wallets",
    description:
      "Explore elegant range of women's wallets blends fashion with function—featuring sleek silhouettes, smart compartments, and luxurious detailing.",
    imageUrl: "/images/premium-leather-wallets-collection-2.jpg",
  },
];

const ProductsWallets = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleViewCatalog = () => {
    window.open(
      "https://docsend.com/view/deva-international-catalog",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Luxury Leather Wallets Designs | Deva International EXIM</title>
        <meta
          name="description"
          content="Explore handmade and custom leather wallets. As a trusted leather wallet manufacturer & supplier, Deva International delivers premium quality and craftsmanship."
        />
        <meta
          name="keywords"
          content="leather wallets, leather wallet manufacturer, luxury leather wallets, handmade leather wallets, custom leather wallets, leather wallets supplier"
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
                  Premium Leather Wallets
                </h1>
                <p className="text-lg text-leather-dark/80 mb-8 max-w-lg">
                  Discover our collection of meticulously crafted leather
                  wallets, combining elegant design with practical functionality
                  for the discerning customer.
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
                    src="/images/premium-wallet-hero.jpg"
                    alt="Premium leather wallets collection"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wallet Collections Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-leather-dark mb-4">
                Our Wallet Collections
              </h2>
              <p className="text-lg text-leather-dark/70">
                From classic designs to modern minimalism, our leather wallets
                combine timeless style with everyday functionality—crafted to
                suit both men and women.{" "}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {walletCollections.map((collection) => (
                <Card
                  key={collection.id}
                  className="overflow-hidden shadow-lg group h-full"
                >
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
                    <p className="text-leather-dark/80 mb-6">
                      {collection.description}
                    </p>
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

        {/* Features Section */}
        <section className="py-16 md:py-20 bg-leather-cream/20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-leather-dark mb-4">
                  Quality & Craftsmanship
                </h2>
                <Separator className="mx-auto w-24 h-0.5 bg-leather mb-6" />
                <p className="text-lg text-leather-dark/70">
                  Our wallets are designed to age beautifully and last for years
                  to come.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-serif font-medium text-leather-dark mb-4">
                    Thoughtfully Designed For Daily Use
                  </h3>
                  <p className="text-leather-dark/80 mb-6">
                    Each wallet is designed with both aesthetics and
                    functionality in mind. Our 31+ years of experience has
                    taught us to balance form with function, creating wallets
                    that are a joy to use every day.
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="text-leather mr-3 mt-1">
                        <ArrowRight size={16} />
                      </span>
                      <span className="text-leather-dark/80">
                        Premium vegetable-tanned leathers that develop a
                        beautiful patina
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leather mr-3 mt-1">
                        <ArrowRight size={16} />
                      </span>
                      <span className="text-leather-dark/80">
                        RFID protection in select models for enhanced security
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leather mr-3 mt-1">
                        <ArrowRight size={16} />
                      </span>
                      <span className="text-leather-dark/80">
                        Thoughtfully designed card slots and compartments
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leather mr-3 mt-1">
                        <ArrowRight size={16} />
                      </span>
                      <span className="text-leather-dark/80">
                        Reinforced stitching for durability and longevity
                      </span>
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
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/images/wallet-craftsmanship-detail.jpg"
                    alt="Wallet craftsmanship"
                    className="w-full h-auto object-cover"
                  />
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

export default ProductsWallets;
