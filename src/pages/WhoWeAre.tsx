import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Globe, Users, MapPin, ArrowRight } from "lucide-react";

const WhoWeArePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          Deva International EXIM | Leather Goods & Accessories Maker
        </title>
        <meta
          name="description"
          content="Deva International EXIM Pvt. Ltd., is a leading fashion accessories manufacturer in the leather goods industry, delivering quality as a trusted global supplier."
        />
        <meta
          name="keywords"
          content="fashion accessories manufacturer, leather goods manufacturer, leather goods industry, deva international, leather goods supplier"
        />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-leather-black/40 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1630576206225-7ab83e3c7d6f?q=80&w=1200&auto=format&fit=crop')",
            }}
          ></div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-4 animate-fade-in">
              Who We Are
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-in">
              Crafting premium leather goods with passion and precision for over
              three decades
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 md:-inset-6 bg-leather/10 rounded-xl -z-10 transform -rotate-2"></div>
                <img
                  src="images/A62_0646.JPG"
                  alt="32+ years of leather craftsmanship"
                  className="w-full h-auto rounded-lg shadow-lg"
                />

                <div className="absolute -bottom-8 -right-5 bg-white rounded-lg p-6 shadow-xl">
                  <div className="text-center">
                    <span className="block text-6xl font-serif font-bold text-leather">
                      32+
                    </span>
                    <span className="text-leather-dark/70">
                      Years of Excellence
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
                  <p className="text-xs font-medium tracking-widest text-leather-dark">
                    OUR JOURNEY
                  </p>
                </span>

                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-leather-dark mb-6">
                  Decades of Experience & Expertise
                </h2>

                <div className="space-y-4 text-leather-dark/80">
                  <p className="text-lg">
                    Since our establishment in 1991, Deva International has been
                    at the forefront of leather goods manufacturing, combining
                    traditional craftsmanship with innovative techniques to
                    create products of exceptional quality.
                  </p>

                  <p className="text-lg">
                    Our extensive experience has enabled us to perfect our
                    craft, ensuring that every item that leaves our workshop
                    meets the highest standards of durability, aesthetic appeal,
                    and functionality.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="border border-leather/20 rounded-lg p-5 transition-all duration-300 hover:border-leather hover:shadow-md">
                    <Users className="h-10 w-10 text-leather mb-3" />
                    <h3 className="text-xl font-serif font-medium mb-2">
                      Expert Artisans
                    </h3>
                    <p className="text-leather-dark/70">
                      Our team of 120+ skilled craftspeople bring decades of
                      combined expertise.
                    </p>
                  </div>

                  <div className="border border-leather/20 rounded-lg p-5 transition-all duration-300 hover:border-leather hover:shadow-md">
                    <Globe className="h-10 w-10 text-leather mb-3" />
                    <h3 className="text-xl font-serif font-medium mb-2">
                      Global Reach
                    </h3>
                    <p className="text-leather-dark/70">
                      Exporting premium leather goods to over 15 countries
                      across 4 continents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="py-16 md:py-24 bg-leather-cream">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
                <p className="text-xs font-medium tracking-widest text-leather-dark">
                  OUR EXPERTISE
                </p>
              </span>

              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-leather-dark mb-6">
                Industry-Leading Knowledge
              </h2>

              <p className="text-lg text-leather-dark/80">
                Our deep understanding of leather processing, treatment, and
                manufacturing allows us to create products that set the standard
                in the industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Premium Material Selection",
                  description:
                    "We source only the finest quality leather from sustainable and ethical suppliers.",
                  icon: <Award className="h-12 w-12 text-leather" />,
                },
                {
                  title: "Advanced Manufacturing",
                  description:
                    "Our state-of-the-art facility combines traditional techniques with modern technology.",
                  icon: <MapPin className="h-12 w-12 text-leather" />,
                },
                {
                  title: "Custom Design Capabilities",
                  description:
                    "From concept to creation, we work closely with clients to bring their vision to life.",
                  icon: <Users className="h-12 w-12 text-leather" />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
                >
                  <div className="absolute right-0 top-0 h-20 w-20 bg-leather/5 rounded-bl-full transition-all duration-300 group-hover:bg-leather/10"></div>
                  <div className="mb-5">{item.icon}</div>
                  <h3 className="text-xl font-serif font-medium mb-3">
                    {item.title}
                  </h3>
                  <p className="text-leather-dark/70">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="btn-secondary inline-flex items-center group">
                Learn More About Our Process
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhoWeArePage;
