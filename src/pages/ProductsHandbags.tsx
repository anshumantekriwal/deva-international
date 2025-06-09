import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Sample handbag collections
const handbagCollections = [
  {
    id: 1,
    name: "Backpacks",
    description:
      "Functional yet stylish backpacks, perfect for professionals and travelers alike.",
    imageUrl: "/images/premium-leather-bags-collection-1.jpg",
  },
  {
    id: 2,
    name: "Hand Bags",
    description:
      "Handcrafted leather handbags with timeless elegance and refined style, ideal for both formal and casual settings.",
    imageUrl: "/images/premium-leather-bags-collection-2.jpg",
  },
  {
    id: 3,
    name: "Other Segments",
    description:
      "From leather waist bags to crossbody and sling styles, includes unique, fashion-forward designs to complement any look.",
    imageUrl: "/images/premium-leather-bags-collection-3.jpg",
  },
];

const ProductsHandbags = () => {
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
        <title>Leather Bags & Backpacks Design | Deva International EXIM</title>
        <meta
          name="description"
          content="Browse premium leather bags, travel bags, handbags, waist bags, and backpacks made with high-quality materials and expert craftsmanship. Deva International EXIM"
        />
        <meta
          name="keywords"
          content="leather bag, leather travel bag, leather handbag, leather waist bag, leather backpack, luxury leather bags, leather bags manufacturer"
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
                  Premium Leather Bags Collection
                </h1>
                <p className="text-lg text-leather-dark/80 mb-8 max-w-lg">
                  Discover our curated range of premium leather bags—including
                  leather handbags, travel bags, backpacks, and more. Each piece
                  is expertly handcrafted using the finest materials, engineered
                  to meet the functional and aesthetic expectations of modern
                  consumers and global fashion buyers.
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
                    src="/images/premium-leather-bags-hero.jpg"
                    alt="Premium leather bags collection"
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
                Our Leather Bag Collections{" "}
              </h2>
              <p className="text-lg text-leather-dark/70">
                Explore our range of premium leather bags, thoughtfully designed
                to suit every purpose—from everyday function to elevated
                statement pieces.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {handbagCollections.map((collection) => (
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
                  Each leather bag we craft is a reflection of our dedication to
                  quality, detail, and time-honored techniques—ensuring superior
                  performance and long-lasting elegance.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/images/leather-bag-craftsmanship-detail.jpg"
                    alt="Leather bag craftsmanship"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-medium text-leather-dark mb-4">
                    The Art of Premium Leather Bag Manufacturing
                  </h3>
                  <p className="text-leather-dark/80 mb-6">
                    With over 31 years of experience in the leather bags
                    industry, our skilled craftsmen combine precision and
                    innovation to produce luxury leather bags that meet
                    international standards.
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="text-leather mr-3 mt-1">
                        <ArrowRight size={16} />
                      </span>
                      <span className="text-leather-dark/80">
                        Hand-selected full-grain leather for premium quality{" "}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leather mr-3 mt-1">
                        <ArrowRight size={16} />
                      </span>
                      <span className="text-leather-dark/80">
                        Meticulous stitching and finishing for refined
                        aesthetics{" "}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leather mr-3 mt-1">
                        <ArrowRight size={16} />
                      </span>
                      <span className="text-leather-dark/80">
                        Reinforced seams for enhanced strength and durability{" "}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leather mr-3 mt-1">
                        <ArrowRight size={16} />
                      </span>
                      <span className="text-leather-dark/80">
                        Premium hardware built to endure everyday use{" "}
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
