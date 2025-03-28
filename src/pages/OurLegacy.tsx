
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegacyContent from '@/components/LegacyContent';

const OurLegacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Our Legacy | Deva International</title>
        <meta 
          name="description" 
          content="Discover the legacy of excellence in leather craftsmanship at Deva International. With over 25 years of experience, we are committed to quality and innovation."
        />
        <meta 
          name="keywords" 
          content="leather craftsmanship, leather heritage, premium leather, artisan leather goods, leather legacy"
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        <LegacyContent />
      </main>
      
      <Footer />
    </div>
  );
};

export default OurLegacy;
