
import { ArrowRight } from 'lucide-react';

const LegacyContent = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-subtle-grain opacity-10" />
      
      <div className="section-container">
        <div className="mb-8">
          <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
            <p className="text-xs font-medium tracking-widest text-leather-dark">
              OUR LEGACY
            </p>
          </span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1200&h=1200&q=80" 
                alt="Leather workshop with skilled artisans" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="absolute -bottom-10 -right-5 md:right-8 bg-white rounded-lg p-6 shadow-lg max-w-[180px]">
              <div className="text-center">
                <h3 className="text-6xl font-serif font-bold text-leather-dark">28</h3>
                <p className="text-leather-dark/70 mt-2">Years of<br />Excellence</p>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-leather-dark mb-8">
              Crafting Excellence Since 1995
            </h1>
            
            <div className="space-y-6 text-leather-dark/80">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-4xl md:text-5xl font-serif font-semibold text-leather">5000<sup>+</sup></h3>
                <p className="text-leather-dark/70 mt-2">Products Exported</p>
              </div>
              
              <div>
                <h3 className="text-4xl md:text-5xl font-serif font-semibold text-leather">15<sup>+</sup></h3>
                <p className="text-leather-dark/70 mt-2">Global Markets</p>
              </div>
              
              <div>
                <h3 className="text-4xl md:text-5xl font-serif font-semibold text-leather">120<sup>+</sup></h3>
                <p className="text-leather-dark/70 mt-2">Skilled Artisans</p>
              </div>
              
              <div>
                <h3 className="text-4xl md:text-5xl font-serif font-semibold text-leather">98<span className="text-2xl">%</span></h3>
                <p className="text-leather-dark/70 mt-2">Client Satisfaction</p>
              </div>
            </div>
            
            <div className="mt-12">
              <button 
                className="btn-primary inline-flex items-center group"
                onClick={() => window.location.href = '/about'}
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
