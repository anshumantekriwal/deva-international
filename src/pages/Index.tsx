
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import InfrastructureSection from '@/components/InfrastructureSection';
import BlogPreview from '@/components/BlogPreview';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CertificationsSection from '@/components/CertificationsSection';
import RecentEventsSection from '@/components/RecentEventsSection';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Manufacturer, Supplier of Leather Goods | Deva International</title>
        <meta 
          name="description" 
          content="Discover high-quality leather goods from Deva International Exim Pvt Ltd. With 25+ years of experience, global exports, and certified compliance, we deliver excellence."
        />
        <meta 
          name="keywords" 
          content="supplier of leather goods, leather goods manufacturer, sustainable leather, premium leather bags, high-quality leather wallets, premium leather accessories"
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <ProductShowcase />
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
