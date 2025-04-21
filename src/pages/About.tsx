import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Award, Cpu, Leaf, ArrowRight } from "lucide-react";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          About Deva International | Leather Good Manufacturing Leader
        </title>
        <meta
          name="description"
          content="Learn about Deva International EXIM Pvt. Ltd., a leading leather goods manufacturer with 25+ years of expertise, global exports, and innovative craftsmanship."
        />
        <meta
          name="keywords"
          content="about Deva International, leather goods company, leather goods manufacturer, best leather bag brand, leather goods brand"
        />
      </Helmet>
      <Navbar />

      <main className="pt-24 pb-20">
        {/* Header */}
        <div className="bg-leather-cream py-12 mb-10">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
                About Us
              </h1>
              <p className="text-xl text-leather-dark/80">
                Crafting premium leather accessories since 1993—trusted{" "}
                <br></br> by global fashion leaders for quality and consistency.
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
                <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                  A Legacy of Excellence
                </h2>
                <div className="space-y-4 text-leather-dark/80">
                  <p>
                    Established in 1993, Deva International started with a clear
                    mission: to create leather goods that merge artisanal
                    craftsmanship with refined global aesthetics. Over the
                    years, we’ve become a trusted name in the leather goods
                    industry, synonymous with quality and consistency.
                  </p>
                  <p>
                    Guided by values of excellence, innovation, and
                    sustainability, we’ve earned the trust of fashion retailers
                    across continents. Our legacy is not just about
                    longevity—it’s about delivering lasting value through every
                    product we make.
                  </p>
                  <p>
                    Today, as a premier leather goods manufacturer, we operate a
                    45,000 sq. ft. production hub, exporting to over 30
                    countries. Our commitment to thoughtful design and reliable
                    delivery makes us a leading fashion accessories manufacturer
                    in the international market.
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
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                A Legacy of Excellence{" "}
              </h2>
              <p className="text-leather-dark/80 text-lg">
                At Deva International, these four values have powered our
                journey since 1993, helping us become a preferred leather goods
                supplier to global fashion retailers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <div className="bg-leather/10 p-3 rounded-md inline-block mb-4">
                  <Award className="h-6 w-6 text-leather" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">Quality</h3>
                <p className="text-leather-dark/70">
                  From sourcing to finishing, we deliver excellence. Our
                  dedication to quality defines us as a premier fashion
                  accessories manufacturer.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <div className="bg-leather/10 p-3 rounded-md inline-block mb-4">
                  <Users className="h-6 w-6 text-leather" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">
                  Integrity
                </h3>
                <p className="text-leather-dark/70">
                  From sourcing to finishing, we deliver excellence. Our
                  dedication to quality defines us as a premier fashion
                  accessories manufacturer.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <div className="bg-leather/10 p-3 rounded-md inline-block mb-4">
                  <Cpu className="h-6 w-6 text-leather" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">
                  Innovation
                </h3>
                <p className="text-leather-dark/70">
                  We blend creative design with skilled craftsmanship to deliver
                  leather goods that align with global fashion expectations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <div className="bg-leather/10 p-3 rounded-md inline-block mb-4">
                  <Leaf className="h-6 w-6 text-leather" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">
                  Sustainability
                </h3>
                <p className="text-leather-dark/70">
                  We are deeply committed to ethical manufacturing, using
                  processes that reduce waste and respect the planet.
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
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                The People Behind Our Craft
              </h2>
              <p className="text-leather-dark/80 text-lg">
                Our leadership drives Deva International’s global growth through
                vision, experience, and a commitment to craftsmanship.
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
                  <h3 className="text-xl font-serif font-medium mb-1">
                    Aditya Vikram Tekriwal
                  </h3>
                  <p className="text-leather mb-3">
                    Founder & Managing Director
                  </p>
                  <p className="text-sm text-leather-dark/70">
                    Guided by a vision to make Indian craftsmanship globally
                    competitive, Aditya has transformed Deva International into
                    a leading leather goods supplier known for quality,
                    reliability, and design flexibility.
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
                  <h3 className="text-xl font-serif font-medium mb-1">
                    Debashmita Bhattacharya{" "}
                  </h3>
                  <p className="text-leather mb-3">Head of Merchandising</p>
                  <p className="text-sm text-leather-dark/70">
                    With a deep understanding of retail flow and trend
                    forecasting, Debashmita ensures our collections meet global
                    demand—aligning seamlessly with client brand identities and
                    timelines.
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
                  <h3 className="text-xl font-serif font-medium mb-1">
                    Santosh Kr. Singh
                  </h3>
                  <p className="text-leather mb-3">General Manager</p>
                  <p className="text-sm text-leather-dark/70">
                    Santosh ensures every product moving out of our facilities
                    is built to meet the standards of top-tier brands—on time,
                    every time.
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
