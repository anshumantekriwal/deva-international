
import { ArrowRight } from 'lucide-react';

const LegacyContent = () => {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-subtle-grain opacity-10" />
      
      <div className="section-container">
        <div className="mb-6">
          <span className="inline-block px-4 py-1 mb-3 bg-leather/10 rounded-full">
            <p className="text-xs font-medium tracking-widest text-leather-dark">
              OUR LEGACY
            </p>
          </span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1200&h=1200&q=80" 
                alt="Leather workshop with skilled artisans" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="absolute -bottom-8 -right-4 md:right-6 bg-white rounded-lg p-5 shadow-lg max-w-[160px]">
              <div className="text-center">
                <h3 className="text-5xl font-serif font-bold text-leather-dark">28</h3>
                <p className="text-leather-dark/70 mt-1">Years of<br />Excellence</p>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-leather-dark mb-6">
              Crafting Excellence Since 1995
            </h1>
            
            <div className="space-y-4 text-leather-dark/80">
              <p className="text-lg">
                At Deva International, we are more than just manufacturers of leather goods. We are 
                custodians of a rich tradition of craftsmanship, passed down through generations, 
                refined over decades of dedication to our craft.
              </p>
              
              <p className="text-lg">
                Our journey began with a simple vision: to create exquisite leather products that 
                stand the test of time. Today, we are proud to continue this legacy, combining 
                traditional techniques with innovative approaches.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-serif font-semibold text-leather">5000<sup>+</sup></h3>
                <p className="text-leather-dark/70 mt-1">Products Exported</p>
              </div>
              
              <div>
                <h3 className="text-3xl md:text-4xl font-serif font-semibold text-leather">15<sup>+</sup></h3>
                <p className="text-leather-dark/70 mt-1">Global Markets</p>
              </div>
              
              <div>
                <h3 className="text-3xl md:text-4xl font-serif font-semibold text-leather">120<sup>+</sup></h3>
                <p className="text-leather-dark/70 mt-1">Skilled Artisans</p>
              </div>
              
              <div>
                <h3 className="text-3xl md:text-4xl font-serif font-semibold text-leather">98<span className="text-2xl">%</span></h3>
                <p className="text-leather-dark/70 mt-1">Client Satisfaction</p>
              </div>
            </div>
            
            <div className="mt-8">
              <button 
                className="btn-primary inline-flex items-center group"
                onClick={() => window.location.href = '/legacy'}
              >
                Discover Our Story
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacyContent;
