
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import InfrastructureSection from '@/components/InfrastructureSection';
import BlogPreview from '@/components/BlogPreview';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThreeDModelSection from '@/components/ThreeDModelSection';
import CertificationsSection from '@/components/CertificationsSection';
import RecentEventsSection from '@/components/RecentEventsSection';

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
        <ThreeDModelSection />
        <InfrastructureSection />
        <CertificationsSection />
        <RecentEventsSection />
        <BlogPreview />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
