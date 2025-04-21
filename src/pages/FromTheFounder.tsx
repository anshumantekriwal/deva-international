import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Quote } from "lucide-react";

const FromTheFounderPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          Founder's Message | Deva International's Leadership & Legacy
        </title>
        <meta
          name="description"
          content="Read insights from the Deva International EXIM's founder. Meet the key leaders driving excellence in the leather goods industry with innovation and expertise."
        />
        <meta
          name="keywords"
          content="founder message, deva international founder, Key Leaders of Deva International, leather goods industry"
        />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-leather-black/50 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop')",
            }}
          ></div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-4 animate-fade-in">
              From The Founder
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-in">
              A personal message about our journey, values, and vision
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2">
                <div className="relative">
                  <div className="absolute -inset-4 md:-inset-6 bg-leather/10 rounded-xl -z-10 transform rotate-2"></div>
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
                    alt="Rajiv Sharma, Founder of Deva International"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className="lg:order-1">
                <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
                  <p className="text-xs font-medium tracking-widest text-leather-dark">
                    MEET THE FOUNDER
                  </p>
                </span>

                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-leather-dark mb-6">
                  Aditya Vikram Tekriwal{" "}
                </h2>

                <p className="text-leather mb-6 text-lg">
                  Founder & Managing Director
                </p>

                <div className="space-y-5 text-leather-dark/80">
                  <p>
                    With a visionary mindset and a deep-rooted passion for
                    craftsmanship, Aditya Vikram Tekriwal founded Deva
                    International to redefine excellence in the leather goods
                    industry. His leadership has been instrumental in shaping
                    the company’s global presence as a trusted leather goods
                    manufacturer and fashion accessories supplier.
                  </p>

                  <p>
                    Aditya’s strategic approach bridges traditional artistry
                    with scalable innovation—empowering 300+ artisans and
                    supporting exports to 15+ countries. His focus on quality,
                    ethical practices, and design-forward thinking continues to
                    elevate Deva International’s global reputation.
                  </p>

                  <p>
                    As one of the key leaders of Deva International, Aditya
                    remains committed to driving sustainable growth and
                    delivering value to clients through timeless craftsmanship
                    and long-term partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Message */}
        <section className="py-16 md:py-24 bg-leather-cream">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Quote className="h-16 w-16 text-leather mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-leather-dark mb-8">
                  A Message From Our Founder
                </h2>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg relative">
                <div className="absolute top-6 left-6 text-9xl font-serif text-leather/10">
                  "
                </div>

                <div className="relative z-10 space-y-6 text-lg text-leather-dark/80 font-serif">
                  <p>
                    When I founded Deva International in 1991, I had a clear
                    vision: to create leather products of exceptional quality
                    that would stand the test of time, both in terms of
                    durability and design.
                  </p>

                  <p>
                    Over the years, this vision has expanded to embrace
                    sustainability, ethical manufacturing, and global
                    responsibility. We've grown from a small workshop to an
                    international enterprise, but our core values remain
                    unchanged.
                  </p>

                  <p>
                    What sets us apart is not just the quality of our products,
                    but the passion and dedication of our team. Every artisan,
                    designer, and staff member at Deva International shares a
                    commitment to excellence that is reflected in everything we
                    do.
                  </p>

                  <p>
                    As we continue to grow and evolve, I remain deeply grateful
                    to our clients, partners, and team members who have been
                    part of this incredible journey. Together, we are not just
                    creating leather goods; we are crafting a legacy of quality,
                    innovation, and sustainability for generations to come.
                  </p>
                </div>

                <div className="mt-10 text-right">
                  <p className="text-xl font-serif font-medium text-leather">
                    Aditya Vikram Tekriwal{" "}
                  </p>
                  <p className="text-leather-dark/70">
                    Founder & Managing Director
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

export default FromTheFounderPage;
