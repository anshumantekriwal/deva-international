
import { Diamond, Award, Shield, Leaf, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-subtle-grain opacity-10" />
      
      <div className="section-container">
        <div className="mb-8 text-center">
          <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
            <p className="text-xs font-medium tracking-widest text-leather-dark">
              WHY CHOOSE US
            </p>
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-leather-dark mb-4">
            The <span className="text-leather">DEVA</span> Difference
          </h2>
          
          <p className="text-lg text-leather-dark/70 max-w-3xl mx-auto text-pretty">
            Discover what sets our leather products apart and why discerning clients
            worldwide trust our craftsmanship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="card-hover-effect border border-leather/20 bg-white bg-opacity-80 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-leather/10 flex items-center justify-center mb-4">
                <Diamond className="h-7 w-7 text-leather" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-leather-dark mb-3">Premium Materials</h3>
              <p className="text-leather-dark/70">
                We source only the finest full-grain leather from ethical suppliers worldwide.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover-effect border border-leather/20 bg-white bg-opacity-80 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-leather/10 flex items-center justify-center mb-4">
                <Award className="h-7 w-7 text-leather" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-leather-dark mb-3">Award-Winning Design</h3>
              <p className="text-leather-dark/70">
                Our products have been recognized globally for exceptional design and quality.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover-effect border border-leather/20 bg-white bg-opacity-80 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-leather/10 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-leather" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-leather-dark mb-3">Quality Guaranteed</h3>
              <p className="text-leather-dark/70">
                Each product undergoes multiple quality checks before shipping to our clients.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover-effect border border-leather/20 bg-white bg-opacity-80 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-leather/10 flex items-center justify-center mb-4">
                <Leaf className="h-7 w-7 text-leather" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-leather-dark mb-3">Sustainability Focus</h3>
              <p className="text-leather-dark/70">
                We are committed to sustainable practices throughout our production process.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover-effect border border-leather/20 bg-white bg-opacity-80 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-leather/10 flex items-center justify-center mb-4">
                <Clock className="h-7 w-7 text-leather" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-leather-dark mb-3">Timeless Design</h3>
              <p className="text-leather-dark/70">
                Our products are designed to withstand changing trends and last for generations.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover-effect border border-leather/20 bg-white bg-opacity-80 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-leather/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-7 w-7 text-leather" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-leather-dark mb-3">Custom Solutions</h3>
              <p className="text-leather-dark/70">
                We offer bespoke customization to meet specific client requirements and preferences.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
