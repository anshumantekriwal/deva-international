
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, Award, Shield, FileCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CertificatesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certificates = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System certification ensuring consistent product quality and customer satisfaction.",
      icon: <CheckCircle className="h-10 w-10 text-leather" />,
      year: "2018"
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management System certification demonstrating our commitment to sustainability.",
      icon: <Shield className="h-10 w-10 text-leather" />,
      year: "2019"
    },
    {
      name: "SA 8000",
      description: "Social Accountability certification for ethical workplace practices and fair treatment of workers.",
      icon: <FileCheck className="h-10 w-10 text-leather" />,
      year: "2020"
    },
    {
      name: "REACH Compliance",
      description: "Compliance with EU regulations for Registration, Evaluation, Authorization of Chemicals.",
      icon: <Shield className="h-10 w-10 text-leather" />,
      year: "2017"
    },
    {
      name: "Leather Working Group",
      description: "Gold-rated member, recognizing environmental best practices in leather manufacturing.",
      icon: <Award className="h-10 w-10 text-leather" />,
      year: "2021"
    },
    {
      name: "Fair Trade Certified",
      description: "Certification for fair wages, safe working conditions, and sustainable livelihoods.",
      icon: <CheckCircle className="h-10 w-10 text-leather" />,
      year: "2022"
    }
  ];
  
  const awards = [
    {
      name: "Excellence in Export",
      organization: "Leather Export Council",
      year: "2021",
      description: "Recognized for outstanding contribution to leather goods exports."
    },
    {
      name: "Sustainable Manufacturing Award",
      organization: "Global Leather Alliance",
      year: "2020",
      description: "Awarded for innovative approaches to sustainable leather production."
    },
    {
      name: "Best Product Design",
      organization: "International Leather Design Association",
      year: "2019",
      description: "Honored for exceptional design quality and innovation in leather goods."
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Certificates & Compliance | Deva International</title>
        <meta 
          name="description" 
          content="Explore Deva International's certifications, compliance standards, and industry awards that demonstrate our commitment to quality and sustainability."
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-leather-black/40 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop')" }}
          ></div>
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-4 animate-fade-in">
              Certificates & Compliance
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-in">
              Our commitment to quality, sustainability, and ethical manufacturing
            </p>
          </div>
        </section>
        
        {/* Certificates Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
                <p className="text-xs font-medium tracking-widest text-leather-dark">
                  OUR CERTIFICATIONS
                </p>
              </span>
              
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-leather-dark mb-6">
                Industry Standards & Compliance
              </h2>
              
              <p className="text-lg text-leather-dark/80">
                At Deva International, we hold ourselves to the highest standards of quality, 
                sustainability, and ethical manufacturing. Our certifications reflect our 
                ongoing commitment to excellence in every aspect of our operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg border-leather/20 hover:border-leather">
                  <CardHeader className="bg-leather/5 pb-4">
                    <div className="flex justify-between items-center">
                      <div className="p-2 bg-white rounded-md shadow-sm">{cert.icon}</div>
                      <span className="text-sm text-leather-dark/70">Since {cert.year}</span>
                    </div>
                    <CardTitle className="mt-4 text-xl font-serif">{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-leather-dark/70">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Awards Section */}
        <section className="py-16 md:py-24 bg-leather-cream">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
                <p className="text-xs font-medium tracking-widest text-leather-dark">
                  RECOGNITION
                </p>
              </span>
              
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-leather-dark mb-6">
                Awards & Achievements
              </h2>
              
              <p className="text-lg text-leather-dark/80">
                Our dedication to excellence has been recognized with numerous industry awards 
                and accolades, reflecting our position as a leader in leather goods manufacturing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md relative overflow-hidden transition-all duration-300 hover:shadow-xl group">
                  <div className="absolute top-0 right-0 w-20 h-20">
                    <div className="absolute transform rotate-45 bg-leather text-white text-xs font-bold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                      {award.year}
                    </div>
                  </div>
                  
                  <div className="mb-6 text-leather">
                    <Award className="h-12 w-12" />
                  </div>
                  
                  <h3 className="text-xl font-serif font-medium mb-2">{award.name}</h3>
                  <p className="text-leather mb-4 text-sm">{award.organization}</p>
                  <p className="text-leather-dark/70">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Commitment Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-semibold text-leather-dark mb-6">
                Our Commitment to Excellence
              </h2>
              
              <p className="text-lg text-leather-dark/80 mb-8">
                These certifications and awards are not just accolades – they represent our 
                ongoing commitment to maintaining the highest standards in every aspect of our business.
              </p>
              
              <div className="p-8 bg-leather/5 rounded-lg border border-leather/20">
                <p className="text-xl font-serif text-leather-dark">
                  "At Deva International, we believe that true excellence comes from a relentless 
                  pursuit of quality, sustainability, and ethical business practices. Our 
                  certifications and awards reflect this ongoing commitment."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CertificatesPage;
