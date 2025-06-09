import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Updated product collections with our three main categories
const productCollections = [
  {
    id: 1,
    name: "Premium Leather Bags",
    description:
      "Exquisite handcrafted leather handbags for the modern professional",
    theme: "bg-gradient-to-br from-leather-tan/30 to-leather-light/10",
    featuredImage: "images/premium-leather-bags-collection-1.jpg",
    path: "/products/premium-handbags",
  },
  {
    id: 2,
    name: "Premium Leather Wallets",
    description: "Classic and contemporary wallet designs for all occasions",
    theme: "bg-gradient-to-br from-amber-100/50 to-amber-50/30",
    featuredImage: "images/premium-leather-wallets-collection-1.jpg",
    path: "/products/leather-wallets",
  },
  {
    id: 3,
    name: "Leather Accessories",
    description: "Complement your style with our premium leather accessories",
    theme: "bg-gradient-to-br from-slate-100/50 to-blue-50/30",
    featuredImage: "images/leather-accessories-collection-1.jpg",
    path: "/products/accessories",
  },
];

const CollectionCard = ({
  collection,
}: {
  collection: (typeof productCollections)[0];
}) => {
  const navigate = useNavigate();

  return (
    <Card className={`overflow-hidden h-full ${collection.theme}`}>
      <div className="relative overflow-hidden h-72">
        <img
          src={collection.featuredImage}
          alt={collection.name}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-serif font-medium mb-2 text-leather-dark">
          {collection.name}
        </h3>
        <p className="text-leather-dark/70 mb-6">{collection.description}</p>
        <button
          onClick={() => navigate(collection.path)}
          className="btn-primary inline-flex items-center group"
        >
          Explore Collection
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </CardContent>
    </Card>
  );
};

const ProductShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
          <h2 className="section-title text-leather-dark">
            Featured Collection
          </h2>
          <p className="text-leather-dark/70 text-lg max-w-2xl mx-auto">
            Explore our curated range of premium leather bags, wallets, and
            accessories, crafted for fashion enthusiasts seeking excellence and
            style.
          </p>
        </div>

        <div
          className={`transition-all duration-700 ease-out delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCollections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
