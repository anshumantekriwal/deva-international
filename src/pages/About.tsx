
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Award, Cpu, Leaf, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Header */}
        <div className="bg-leather-cream py-12 mb-10">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">About Us</h1>
              <p className="text-xl text-leather-dark/80">
                Crafting exceptional leather products since 1995. 
                Learn about our journey, values, and commitment to quality.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
                  <p className="text-xs font-medium tracking-widest text-leather-dark">
                    OUR STORY
                  </p>
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">A Legacy of Excellence</h2>
                <div className="space-y-4 text-leather-dark/80">
                  <p>
                    Founded in 1995, Deva International began as a small workshop with a big dream: 
                    to create leather goods that combine traditional craftsmanship with modern design.
                  </p>
                  <p>
                    Over the decades, we've grown from a humble enterprise to a globally recognized 
                    manufacturer, without ever compromising on our core values of quality, craftsmanship, 
                    and ethical business practices.
                  </p>
                  <p>
                    Today, we export our premium leather products to over 30 countries, serving discerning 
                    clients who value exceptional quality and timeless design. Our 30,000 sq. ft. 
                    manufacturing facility houses both traditional artisans and cutting-edge technology.
                  </p>
                </div>
              </div>
              <div>
                <div className="relative">
                  <div className="absolute -inset-1 bg-leather-light/10 rounded-lg blur-xl"></div>
                  <img 
                    src="/lovable-uploads/d62b6da9-2c5d-4284-9cf7-2bede616c2ea.png" 
                    alt="Deva International manufacturing" 
                    className="relative rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-leather-tan/10">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
                <p className="text-xs font-medium tracking-widest text-leather-dark">
                  OUR VALUES
                </p>
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">What Drives Us</h2>
              <p className="text-leather-dark/80 text-lg">
                Our core values shape everything we do, from sourcing materials to crafting 
                the final product and building relationships with our customers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <div className="bg-leather/10 p-3 rounded-md inline-block mb-4">
                  <Award className="h-6 w-6 text-leather" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">Quality</h3>
                <p className="text-leather-dark/70">
                  We never compromise on materials or craftsmanship, ensuring every product meets our exacting standards.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <div className="bg-leather/10 p-3 rounded-md inline-block mb-4">
                  <Users className="h-6 w-6 text-leather" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">Integrity</h3>
                <p className="text-leather-dark/70">
                  We conduct our business with honesty and transparency, building trust with customers and partners alike.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <div className="bg-leather/10 p-3 rounded-md inline-block mb-4">
                  <Cpu className="h-6 w-6 text-leather" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">Innovation</h3>
                <p className="text-leather-dark/70">
                  We continuously explore new techniques and designs while honoring traditional craftsmanship.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <div className="bg-leather/10 p-3 rounded-md inline-block mb-4">
                  <Leaf className="h-6 w-6 text-leather" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">Sustainability</h3>
                <p className="text-leather-dark/70">
                  We're committed to environmentally responsible practices throughout our production process.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
                <p className="text-xs font-medium tracking-widest text-leather-dark">
                  OUR TEAM
                </p>
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">The People Behind Our Craft</h2>
              <p className="text-leather-dark/80 text-lg">
                Our talented team combines years of expertise with passion for leather craftsmanship.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team members would go here - using placeholders */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-w-1 aspect-h-1 bg-leather-tan/20">
                  {/* Placeholder for team member photo */}
                  <div className="flex items-center justify-center h-full">
                    <Users className="h-16 w-16 text-leather-light" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium mb-1">Rajiv Sharma</h3>
                  <p className="text-leather mb-3">Founder & CEO</p>
                  <p className="text-sm text-leather-dark/70">
                    With over 25 years in the leather industry, Rajiv brings unparalleled expertise and vision to Deva International.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-w-1 aspect-h-1 bg-leather-tan/20">
                  {/* Placeholder for team member photo */}
                  <div className="flex items-center justify-center h-full">
                    <Users className="h-16 w-16 text-leather-light" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium mb-1">Priya Mehta</h3>
                  <p className="text-leather mb-3">Head of Design</p>
                  <p className="text-sm text-leather-dark/70">
                    A creative force with an eye for detail, Priya leads our design team in creating timeless yet innovative products.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-w-1 aspect-h-1 bg-leather-tan/20">
                  {/* Placeholder for team member photo */}
                  <div className="flex items-center justify-center h-full">
                    <Users className="h-16 w-16 text-leather-light" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium mb-1">Vikram Patel</h3>
                  <p className="text-leather mb-3">Master Craftsman</p>
                  <p className="text-sm text-leather-dark/70">
                    With 30 years of hands-on experience, Vikram oversees production quality and trains our next generation of artisans.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <button className="btn-secondary inline-flex items-center">
                Join Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
