import { Diamond, Award, Shield, Leaf, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
            The Difference -
            <span className="text-leather"> Deva International</span>
          </h2>

          <p className="text-lg text-leather-dark/70 max-w-3xl mx-auto text-pretty">
            Discover the key attributes that make our leather goods preferred by
            esteemed fashion retailers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="card-hover-effect border border-leather/20 bg-white bg-opacity-80 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-leather/10 flex items-center justify-center mb-4">
                <Diamond className="h-7 w-7 text-leather" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-leather-dark mb-3">
                Finest Leather Sourcing{" "}
              </h3>
              <p className="text-leather-dark/70">
                We exclusively select genuine full-grain leather from an
                LWG-certified supplier, ensuring unmatched quality and
                durability.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover-effect border border-leather/20 bg-white bg-opacity-80 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-leather/10 flex items-center justify-center mb-4">
                <Award className="h-7 w-7 text-leather" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-leather-dark mb-3">
                Globally Recognized Designs
              </h3>
              <p className="text-leather-dark/70">
                Our globally acknowledged designs and craftsmanship are trusted
                and admired by leading global retailers.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover-effect border border-leather/20 bg-white bg-opacity-80 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-leather/10 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-leather" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-leather-dark mb-3">
                Quality Assurance
              </h3>
              <p className="text-leather-dark/70">
                Multiple quality checks at every step, guaranteeing consistent
                premium standards.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover-effect border border-leather/20 bg-white bg-opacity-80 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-leather/10 flex items-center justify-center mb-4">
                <Leaf className="h-7 w-7 text-leather" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-leather-dark mb-3">
                Sustainability-focused Craftsmanship{" "}
              </h3>
              <p className="text-leather-dark/70">
                We are committed to sustainability throughout our procurement
                and delivery processes.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover-effect border border-leather/20 bg-white bg-opacity-80 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-leather/10 flex items-center justify-center mb-4">
                <Clock className="h-7 w-7 text-leather" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-leather-dark mb-3">
                Timeless, Fashion-Forward Craftsmanship{" "}
              </h3>
              <p className="text-leather-dark/70">
                Our designs perfectly blend timeless sophistication with
                contemporary trends, appealing to diverse markets.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover-effect border border-leather/20 bg-white bg-opacity-80 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-leather/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-7 w-7 text-leather" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-leather-dark mb-3">
                Tailored Customizations{" "}
              </h3>
              <p className="text-leather-dark/70">
                Offering personalized leather products tailored specifically to
                client visions and preferences
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
