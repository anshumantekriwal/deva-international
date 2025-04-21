import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Product categories with their images
const productCategories = [
  {
    id: 1,
    name: "Premium Leather Bags",
    description:
      "Elegant and luxury leather bags designed for the modern professional.",
    imageUrl:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&h=800&q=80",
    path: "/products/premium-handbags",
  },
  {
    id: 2,
    name: "Leather Wallets",
    description:
      "Classic and modern leather wallets that offer both durability and refined aesthetics",
    imageUrl:
      "https://images.unsplash.com/photo-1548863227-3af567fc3b27?auto=format&fit=crop&w=800&h=800&q=80",
    path: "/products/leather-wallets",
  },
  {
    id: 3,
    name: "Accessories",
    description:
      "Discover custom leather accessories that complete the everyday look",
    imageUrl:
      "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?auto=format&fit=crop&w=800&h=800&q=80",
    path: "/products/accessories",
  },
];

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleViewCatalog = () => {
    // This will be replaced with the actual DocSend link later
    window.open("https://www.docsend.com/catalog-link", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>
          Luxury Leather Bags, Wallets & Accessories | Deva International EXIM
        </title>
        <meta
          name="description"
          content="Explore luxury leather bags, custom leather accessories, and premium wallets for men & women. Deva International delivers quality & craftsmanship."
        />
        <meta
          name="keywords"
          content="leather bags, luxury leather bags, luxury leather wallets, leather accessories for women, custom leather accessories"
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
                  Explore the elegance of luxury leather wallets, bags, and
                  accessories for women, made with the finest craftsmanship at
                  Deva International. Our globally recognized expertise in
                  custom leather accessories makes us a reliable partner for
                  brands seeking high-quality, design-rich products.
                  <br />
                  <br />
                  Each item is made to reflect both identity and integrity.
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
                Explore our diverse range of premium leather goods, handcrafted
                with precision, care, and timeless design sensibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {productCategories.map((category) => (
                <Card
                  key={category.id}
                  className="overflow-hidden shadow-lg group h-full"
                >
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
                    <p className="text-leather-dark/80 mb-6">
                      {category.description}
                    </p>
                    <Button
                      onClick={() => (window.location.href = category.path)}
                      variant="outline"
                      className="text-leather hover:text-white hover:bg-leather border-leather"
                    >
                      Browse Collection
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
                  Looking for something specific? We specialize in custom
                  leather goods tailored to your exact needs—designed to support
                  your brand, your customers, and your business goals.
                </p>
              </div>

              <div className="bg-leather-cream/20 rounded-xl p-8 shadow-sm">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-serif font-medium text-leather-dark mb-4">
                      Make It Yours{" "}
                    </h3>
                    <p className="text-leather-dark/80 mb-6">
                      Looking for luxury leather bags or leather accessories for
                      women that reflect your brand identity? We help you create
                      custom collections that resonate with your
                      audience—crafted with care, precision, and purpose.
                      <br />
                      <br />
                      Our team works closely with you at every step—from design
                      consultation to final delivery—to ensure your product
                      reflects quality, function, and craftsmanship.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-leather mr-2">✓</span>
                        <span>Handcrafted to match your brand style</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-leather mr-2">✓</span>
                        <span>Corporate and private label personalization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-leather mr-2">✓</span>
                        <span>Scalable production with on-time delivery</span>
                      </li>
                    </ul>
                    <Button className="bg-leather hover:bg-leather-dark">
                      Contact Us For Custom Orders
                    </Button>
                  </div>
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="src/images/A62_0403.JPG"
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
