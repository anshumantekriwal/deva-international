
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Heart, Leaf, Award, Clock, DollarSign, BadgeCheck, School, Sparkles } from 'lucide-react';

const EthicalWorkplacePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Ethical Workplace & Compliance | Deva International EXIM</title>
        <meta 
          name="description" 
          content="Deva International EXIM Pvt. Ltd. ensures an ethical working environment with fair conditions, worker benefits, and strict work ethics and compliance standards."
        />
        <meta 
          name="keywords" 
          content="ethical working environment, ethical working conditions, ethical responsibilities, ethics and compliance, worker benefits"
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-leather-black/40 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&h=700&q=80')" }}
          ></div>
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-4 animate-fade-in">
              Ethical Workplace
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-in">
              Where sustainable practices meet employee wellbeing
            </p>
          </div>
        </section>
        
        {/* Our Philosophy */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
                  <p className="text-xs font-medium tracking-widest text-leather-dark">
                    OUR PHILOSOPHY
                  </p>
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-leather-dark mb-6">
                  People-First Approach
                </h2>
                <div className="space-y-4 text-leather-dark/80">
                  <p>
                    At Deva International, we believe that exceptional products begin with exceptional 
                    people. Our ethical workplace practices are built on the foundation of respect, 
                    fairness, and sustainability.
                  </p>
                  <p>
                    We're committed to creating an environment where our artisans and staff can thrive, 
                    develop their skills, and take pride in their contributions to our collective success.
                  </p>
                  <p>
                    This commitment extends beyond our own facilities to encompass our entire supply chain, 
                    as we work with partners who share our values and dedication to ethical practices.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center bg-leather/5 p-3 rounded-lg">
                    <Heart className="h-5 w-5 text-leather mr-3" />
                    <span className="text-leather-dark">Employee Wellbeing</span>
                  </div>
                  
                  <div className="flex items-center bg-leather/5 p-3 rounded-lg">
                    <Users className="h-5 w-5 text-leather mr-3" />
                    <span className="text-leather-dark">Fair Labor Practices</span>
                  </div>
                  
                  <div className="flex items-center bg-leather/5 p-3 rounded-lg">
                    <Leaf className="h-5 w-5 text-leather mr-3" />
                    <span className="text-leather-dark">Environmental Responsibility</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-leather/10 rounded-xl -z-10 transform rotate-2"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&h=800&q=80" 
                    alt="Employees working in a collaborative environment at Deva International" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Workplace Standards */}
        <section className="py-16 md:py-20 bg-leather-cream">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
                <p className="text-xs font-medium tracking-widest text-leather-dark">
                  OUR STANDARDS
                </p>
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-leather-dark mb-6">
                Ethical Workplace Standards
              </h2>
              <p className="text-lg text-leather-dark/80">
                Our commitment to ethical workplace practices is reflected in the standards we maintain 
                across all our operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Fair Wages */}
              <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg group">
                <div className="p-3 bg-leather/10 rounded-full inline-block mb-6 group-hover:bg-leather/20 transition-all">
                  <DollarSign className="h-6 w-6 text-leather" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-4">Fair Wages & Benefits</h3>
                <ul className="space-y-3 text-leather-dark/80">
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p>Wages that exceed local industry standards</p>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p>Comprehensive health and retirement benefits</p>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p>Performance bonuses and profit-sharing programs</p>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p>Paid family leave and educational support</p>
                  </li>
                </ul>
              </div>
              
              {/* Working Conditions */}
              <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg group">
                <div className="p-3 bg-leather/10 rounded-full inline-block mb-6 group-hover:bg-leather/20 transition-all">
                  <Clock className="h-6 w-6 text-leather" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-4">Safe & Healthy Environment</h3>
                <ul className="space-y-3 text-leather-dark/80">
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p>Regular health and safety training for all staff</p>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p>Ergonomic workstations and equipment</p>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p>Strict adherence to work hour limitations</p>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p>Air quality monitoring and control systems</p>
                  </li>
                </ul>
              </div>
              
              {/* Career Development */}
              <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg group">
                <div className="p-3 bg-leather/10 rounded-full inline-block mb-6 group-hover:bg-leather/20 transition-all">
                  <School className="h-6 w-6 text-leather" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-4">Growth & Development</h3>
                <ul className="space-y-3 text-leather-dark/80">
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p>Artisan apprenticeship and mentorship programs</p>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p>Regular skills training and certification opportunities</p>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p>Clear career advancement pathways</p>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p>Educational assistance for continued learning</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-16 bg-white p-8 rounded-lg shadow-lg border border-leather/10">
              <div className="flex items-start">
                <Award className="h-8 w-8 text-leather mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-serif font-medium mb-2">Certified Ethical Workplace</h3>
                  <p className="text-leather-dark/80">
                    Our workplace practices have been recognized with SA8000 certification, one of the world's 
                    leading social certification standards for factories and organizations across the globe. 
                    This certification verifies our compliance with rigorous standards for ethical workplace 
                    conditions, including fair labor practices, workplace safety, and management systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sustainability Initiatives */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
                <p className="text-xs font-medium tracking-widest text-leather-dark">
                  SUSTAINABILITY
                </p>
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-leather-dark mb-6">
                Our Commitment to Sustainability
              </h2>
              <p className="text-lg text-leather-dark/80">
                Ethical workplace practices go hand in hand with our dedication to environmental 
                sustainability and responsible resource management.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-serif font-medium text-leather-dark mb-4">Environmental Initiatives</h3>
                <div className="space-y-4 text-leather-dark/80">
                  <p>
                    Our environmental initiatives reflect our belief that sustainable practices are 
                    essential for both our planet and our business. We continuously seek ways to reduce 
                    our ecological footprint while maintaining the premium quality our customers expect.
                  </p>
                  <p>
                    From energy-efficient facilities to water conservation programs, our approach to 
                    sustainability encompasses every aspect of our operations, supported by regular 
                    environmental audits and continuous improvement efforts.
                  </p>
                </div>
                
                <div className="mt-8 space-y-4">
                  <div className="bg-leather/5 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Leaf className="h-5 w-5 text-leather mr-3" />
                      <h4 className="font-medium text-leather-dark">Carbon Footprint Reduction</h4>
                    </div>
                    <p className="text-sm text-leather-dark/70">
                      We've reduced our carbon emissions by 35% since 2018 through energy efficiency 
                      improvements, renewable energy adoption, and optimized logistics.
                    </p>
                  </div>
                  
                  <div className="bg-leather/5 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Leaf className="h-5 w-5 text-leather mr-3" />
                      <h4 className="font-medium text-leather-dark">Waste Management</h4>
                    </div>
                    <p className="text-sm text-leather-dark/70">
                      Our comprehensive recycling and upcycling programs ensure that over 90% of our 
                      manufacturing waste is diverted from landfills.
                    </p>
                  </div>
                  
                  <div className="bg-leather/5 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Leaf className="h-5 w-5 text-leather mr-3" />
                      <h4 className="font-medium text-leather-dark">Sustainable Sourcing</h4>
                    </div>
                    <p className="text-sm text-leather-dark/70">
                      We partner exclusively with tanneries that adhere to strict environmental standards 
                      and utilize eco-friendly processing methods.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-leather/10 rounded-xl -z-10 transform -rotate-2"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?auto=format&fit=crop&w=1200&h=800&q=80" 
                    alt="Sustainable manufacturing practices at Deva International" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-leather/5 p-8 md:p-12 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-leather/10 rounded-full -mt-20 -mr-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-leather/10 rounded-full -mb-20 -ml-20"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <Sparkles className="h-8 w-8 text-leather mr-4" />
                  <h3 className="text-2xl font-serif font-medium text-leather-dark">Sustainability Research & Innovation</h3>
                </div>
                
                <div className="text-leather-dark/80 mb-8">
                  <p>
                    Our dedicated sustainability research team works to develop innovative solutions 
                    that reduce environmental impact while enhancing product quality and performance. 
                    Recent innovations include:
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h4 className="font-medium text-leather-dark mb-2">Eco-Friendly Dyes</h4>
                    <p className="text-sm text-leather-dark/70">
                      Development of plant-based dyes that reduce water usage and eliminate 
                      harmful chemicals from the coloring process.
                    </p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h4 className="font-medium text-leather-dark mb-2">Water Recycling System</h4>
                    <p className="text-sm text-leather-dark/70">
                      Implementation of advanced water treatment and recycling systems that 
                      reduce freshwater consumption by up to 80%.
                    </p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h4 className="font-medium text-leather-dark mb-2">Leather Upcycling</h4>
                    <p className="text-sm text-leather-dark/70">
                      Creative reuse of leather scraps for small accessories, reducing waste 
                      and creating unique, zero-waste products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Community Engagement */}
        <section className="py-16 md:py-20 bg-leather-tan/10">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
                  <p className="text-xs font-medium tracking-widest text-leather-dark">
                    COMMUNITY IMPACT
                  </p>
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-leather-dark mb-6">
                  Supporting Our Communities
                </h2>
                <div className="space-y-4 text-leather-dark/80">
                  <p>
                    Our commitment to ethical practices extends beyond our workplace to the communities 
                    where we operate. We believe in being a positive force for change and development, 
                    supporting local initiatives that enhance quality of life and create opportunities.
                  </p>
                  <p>
                    Through partnerships with educational institutions, skills development programs, 
                    and community support initiatives, we're working to create sustainable impact that 
                    benefits present and future generations.
                  </p>
                </div>
                
                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-leather/10 rounded-md mr-4 mt-1">
                      <School className="h-5 w-5 text-leather" />
                    </div>
                    <div>
                      <h4 className="font-medium text-leather-dark">Craft Education Program</h4>
                      <p className="text-sm text-leather-dark/70">
                        Partnership with local schools to provide leather crafting education and 
                        apprenticeship opportunities for young people.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-leather/10 rounded-md mr-4 mt-1">
                      <Heart className="h-5 w-5 text-leather" />
                    </div>
                    <div>
                      <h4 className="font-medium text-leather-dark">Community Development Fund</h4>
                      <p className="text-sm text-leather-dark/70">
                        Annual commitment of 2% of profits to fund local infrastructure, education, 
                        and healthcare initiatives in our manufacturing communities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-leather/10 rounded-md mr-4 mt-1">
                      <Users className="h-5 w-5 text-leather" />
                    </div>
                    <div>
                      <h4 className="font-medium text-leather-dark">Employee Volunteer Program</h4>
                      <p className="text-sm text-leather-dark/70">
                        Paid time off for employees to participate in community service, contributing 
                        over 2,500 volunteer hours annually.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1607748851687-ba9a10438621?auto=format&fit=crop&w=600&h=600&q=80" 
                      alt="Community engagement at Deva International" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1522543558187-768b6df7c25c?auto=format&fit=crop&w=600&h=600&q=80" 
                      alt="Craft education program at Deva International" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=600&h=600&q=80" 
                      alt="Employee volunteer program at Deva International" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="aspect-square overflow-hidden rounded-lg bg-leather/10 flex items-center justify-center">
                    <p className="text-center text-leather font-medium px-4">
                      Join us in making a difference in our communities
                    </p>
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

export default EthicalWorkplacePage;
