
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, FileCheck, ShieldCheck, BadgeCheck, Award } from 'lucide-react';

const QualityControlPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Quality Control | Deva International</title>
        <meta 
          name="description" 
          content="Learn about Deva International's rigorous quality control processes that ensure premium leather products of exceptional quality and durability."
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-leather-black/40 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&h=700&q=80')" }}
          ></div>
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-4 animate-fade-in">
              Quality Control
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-in">
              Our meticulous approach to ensuring exceptional product quality
            </p>
          </div>
        </section>
        
        {/* Quality Management System */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
                  <p className="text-xs font-medium tracking-widest text-leather-dark">
                    QUALITY MANAGEMENT
                  </p>
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-leather-dark mb-6">
                  ISO 9001 Certified Quality Management System
                </h2>
                <div className="space-y-4 text-leather-dark/80">
                  <p>
                    At Deva International, quality isn't just a goal—it's a systematic process. 
                    Our ISO 9001 certified quality management system ensures consistency across 
                    all aspects of our operations, from material sourcing to final product inspection.
                  </p>
                  <p>
                    This systematic approach allows us to identify and address potential issues 
                    before they affect our products, maintaining the high standards our customers 
                    expect from our premium leather goods.
                  </p>
                </div>
                
                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-1 rounded-md bg-leather text-white mt-1 mr-4">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-leather-dark">Documented Procedures</h3>
                      <p className="text-sm text-leather-dark/70">
                        Detailed procedures for every aspect of production ensure consistency and quality.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-1 rounded-md bg-leather text-white mt-1 mr-4">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-leather-dark">Continuous Improvement</h3>
                      <p className="text-sm text-leather-dark/70">
                        Regular audits and reviews help us refine our processes and enhance quality.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-1 rounded-md bg-leather text-white mt-1 mr-4">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-leather-dark">Employee Training</h3>
                      <p className="text-sm text-leather-dark/70">
                        Ongoing training ensures our team maintains the highest standards of craftsmanship.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center items-center">
                <div className="bg-leather/5 p-10 rounded-full">
                  <div className="bg-leather/10 p-8 rounded-full">
                    <div className="bg-leather/20 p-6 rounded-full">
                      <ShieldCheck className="h-32 w-32 text-leather" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quality Control Process */}
        <section className="py-16 md:py-20 bg-leather-cream">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
                <p className="text-xs font-medium tracking-widest text-leather-dark">
                  OUR PROCESS
                </p>
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-leather-dark mb-6">
                Four-Stage Quality Control Process
              </h2>
              <p className="text-lg text-leather-dark/80">
                Every Deva International product passes through our rigorous 
                four-stage quality control process before reaching our customers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Stage 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden group hover:shadow-lg transition-all">
                <div className="absolute top-0 left-0 h-1 w-full bg-leather"></div>
                <div className="p-3 bg-leather/10 rounded-full inline-block mb-5">
                  <FileCheck className="h-6 w-6 text-leather" />
                </div>
                <div className="absolute top-4 right-4 bg-leather text-white text-xs font-bold h-8 w-8 flex items-center justify-center rounded-full">
                  1
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">Material Inspection</h3>
                <p className="text-leather-dark/70">
                  Each shipment of leather and components undergoes thorough inspection 
                  against our quality standards before entering production.
                </p>
              </div>
              
              {/* Stage 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden group hover:shadow-lg transition-all">
                <div className="absolute top-0 left-0 h-1 w-full bg-leather"></div>
                <div className="p-3 bg-leather/10 rounded-full inline-block mb-5">
                  <FileCheck className="h-6 w-6 text-leather" />
                </div>
                <div className="absolute top-4 right-4 bg-leather text-white text-xs font-bold h-8 w-8 flex items-center justify-center rounded-full">
                  2
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">In-Process Checks</h3>
                <p className="text-leather-dark/70">
                  Quality checks are performed at various production stages, 
                  ensuring each step meets our exacting standards.
                </p>
              </div>
              
              {/* Stage 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden group hover:shadow-lg transition-all">
                <div className="absolute top-0 left-0 h-1 w-full bg-leather"></div>
                <div className="p-3 bg-leather/10 rounded-full inline-block mb-5">
                  <FileCheck className="h-6 w-6 text-leather" />
                </div>
                <div className="absolute top-4 right-4 bg-leather text-white text-xs font-bold h-8 w-8 flex items-center justify-center rounded-full">
                  3
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">Final Inspection</h3>
                <p className="text-leather-dark/70">
                  Each finished product undergoes detailed inspection for 
                  appearance, functionality, and conformity to specifications.
                </p>
              </div>
              
              {/* Stage 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden group hover:shadow-lg transition-all">
                <div className="absolute top-0 left-0 h-1 w-full bg-leather"></div>
                <div className="p-3 bg-leather/10 rounded-full inline-block mb-5">
                  <FileCheck className="h-6 w-6 text-leather" />
                </div>
                <div className="absolute top-4 right-4 bg-leather text-white text-xs font-bold h-8 w-8 flex items-center justify-center rounded-full">
                  4
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">Random Sampling</h3>
                <p className="text-leather-dark/70">
                  Statistical quality control techniques are applied to randomly 
                  sample products for additional durability and performance testing.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quality Standards */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
                <p className="text-xs font-medium tracking-widest text-leather-dark">
                  OUR STANDARDS
                </p>
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-leather-dark mb-6">
                Uncompromising Quality Standards
              </h2>
              <p className="text-lg text-leather-dark/80">
                Our commitment to quality is supported by rigorous standards and testing procedures.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Standard 1 */}
              <div className="bg-leather/5 p-8 rounded-lg border border-leather/10 hover:border-leather/20 transition-all">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-leather/10 rounded-md mr-4">
                    <Award className="h-6 w-6 text-leather" />
                  </div>
                  <h3 className="text-xl font-serif font-medium">Material Standards</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-leather-dark/70">Premium full-grain and top-grain leather only</p>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-leather-dark/70">Minimum 1.2mm thickness for durability</p>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-leather-dark/70">Water and stain resistance testing</p>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-leather-dark/70">Color fastness and UV resistance verification</p>
                  </li>
                </ul>
              </div>
              
              {/* Standard 2 */}
              <div className="bg-leather/5 p-8 rounded-lg border border-leather/10 hover:border-leather/20 transition-all">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-leather/10 rounded-md mr-4">
                    <Award className="h-6 w-6 text-leather" />
                  </div>
                  <h3 className="text-xl font-serif font-medium">Construction Standards</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-leather-dark/70">Reinforced stress points for longevity</p>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-leather-dark/70">YKK zippers and premium hardware throughout</p>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-leather-dark/70">10,000+ cycle durability testing for moving parts</p>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-leather-dark/70">Edge finishing and stitching quality inspection</p>
                  </li>
                </ul>
              </div>
              
              {/* Standard 3 */}
              <div className="bg-leather/5 p-8 rounded-lg border border-leather/10 hover:border-leather/20 transition-all">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-leather/10 rounded-md mr-4">
                    <Award className="h-6 w-6 text-leather" />
                  </div>
                  <h3 className="text-xl font-serif font-medium">Performance Standards</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-leather-dark/70">Load testing for bags and luggage</p>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-leather-dark/70">Abrasion resistance testing</p>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-leather-dark/70">Climate chamber testing for temperature extremes</p>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-leather-dark/70">Chemical resistance and safety testing</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quality Team */}
        <section className="py-16 md:py-20 bg-leather-tan/10">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="mb-6">
                    <h3 className="text-2xl font-serif font-medium text-leather-dark mb-2">Quality Control By The Numbers</h3>
                    <p className="text-leather-dark/70">Our dedicated quality control team ensures every product meets our exacting standards.</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="relative pt-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-leather-dark">Inspection Rate</span>
                        <span className="text-sm font-medium text-leather">100%</span>
                      </div>
                      <div className="w-full bg-leather/10 rounded-full h-2">
                        <div className="bg-leather h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    
                    <div className="relative pt-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-leather-dark">Quality Acceptance Rate</span>
                        <span className="text-sm font-medium text-leather">98.7%</span>
                      </div>
                      <div className="w-full bg-leather/10 rounded-full h-2">
                        <div className="bg-leather h-2 rounded-full" style={{ width: '98.7%' }}></div>
                      </div>
                    </div>
                    
                    <div className="relative pt-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-leather-dark">Customer Satisfaction</span>
                        <span className="text-sm font-medium text-leather">99.3%</span>
                      </div>
                      <div className="w-full bg-leather/10 rounded-full h-2">
                        <div className="bg-leather h-2 rounded-full" style={{ width: '99.3%' }}></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="text-center p-4 bg-leather/5 rounded-lg">
                        <div className="text-3xl font-serif font-semibold text-leather">24</div>
                        <p className="text-sm text-leather-dark/70">Quality Control Staff</p>
                      </div>
                      
                      <div className="text-center p-4 bg-leather/5 rounded-lg">
                        <div className="text-3xl font-serif font-semibold text-leather">35+</div>
                        <p className="text-sm text-leather-dark/70">Quality Check Points</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
                  <p className="text-xs font-medium tracking-widest text-leather-dark">
                    OUR COMMITMENT
                  </p>
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-leather-dark mb-6">
                  Quality Is In Our DNA
                </h2>
                <div className="space-y-4 text-leather-dark/80">
                  <p>
                    Our quality control team includes leather experts with decades of industry 
                    experience, each trained to identify even the most subtle imperfections 
                    that others might miss.
                  </p>
                  <p>
                    Every team member undergoes regular training to stay current with the latest 
                    quality control methods and technologies, ensuring we maintain our leadership 
                    position in premium leather goods manufacturing.
                  </p>
                  <p>
                    We believe that quality control isn't just a department—it's a responsibility 
                    shared by every member of our team. From material selection to final packaging, 
                    quality considerations guide every decision we make.
                  </p>
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

export default QualityControlPage;
