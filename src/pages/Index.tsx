
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import InfrastructureSection from '@/components/InfrastructureSection';
import BlogPreview from '@/components/BlogPreview';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <ProductShowcase />
        <InfrastructureSection />
        <BlogPreview />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
