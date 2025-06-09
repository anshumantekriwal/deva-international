import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Factory,
  Ruler,
  Scissors,
  Lightbulb,
  Leaf,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const ManufacturingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Premium Leather Goods Manufacturing | Deva International</title>
        <meta
          name="description"
          content="Deva International specializes in lean manufacturing management for leather goods, including bags, wallets, and purses, ensuring quality and innovative designs."
        />
        <meta
          name="keywords"
          content="lean manufacturing management, leather goods manufacturing, leather bag manufacturing, leather wallet manufacturing, leather purse manufacturing, deva international's manufacturing capabilities"
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
                "url('/images/manufacturing-facility-production.jpg')",
            }}
          ></div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-4 animate-fade-in">
              Manufacturing Excellence
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-in">
              Where traditional craftsmanship meets cutting-edge technology
            </p>
          </div>
        </section>

        {/* Manufacturing Facilities */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-16">
              <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
                <p className="text-xs font-medium tracking-widest text-leather-dark">
                  OUR FACILITIES
                </p>
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-leather-dark mb-6">
                State-of-the-Art Manufacturing
              </h2>
              <p className="text-lg text-leather-dark/80">
                Our manufacturing facilities blend traditional craftsmanship
                with modern technology, enabling us to maintain exceptional
                quality while meeting global demand for our products.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-leather/10 rounded-lg -z-10 transform -rotate-2"></div>
                  <img
                    src="/images/company-heritage-manufacturing.jpg"
                    alt="Deva International's main manufacturing facility"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-4 right-4 bg-white rounded-lg p-4 shadow-lg">
                    <p className="font-medium text-leather-dark">
                      Main Facility
                    </p>
                    <p className="text-sm text-leather-dark/70">
                      Established 1998 | 30,000 sq. ft.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-medium text-leather-dark mb-4">
                  Main Manufacturing Facility
                </h3>
                <div className="space-y-4 text-leather-dark/80">
                  <p>
                    Our flagship manufacturing facility spans 30,000 square feet
                    and houses our primary production operations. Built in 1998
                    and comprehensively modernized in 2018, this facility
                    represents the perfect balance of craftsmanship and
                    technology.
                  </p>
                  <p>
                    With dedicated areas for cutting, stitching, assembly, and
                    finishing, the facility follows an optimized workflow that
                    ensures efficiency without compromising quality.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="p-1 rounded-md bg-leather text-white mt-1 mr-3">
                      <Factory className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-leather-dark">
                        Production Capacity
                      </p>
                      <p className="text-sm text-leather-dark/70">
                        50,000 units annually
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-1 rounded-md bg-leather text-white mt-1 mr-3">
                      <Ruler className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-leather-dark">
                        Production Lines
                      </p>
                      <p className="text-sm text-leather-dark/70">
                        8 dedicated lines
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-serif font-medium text-leather-dark mb-4">
                  Specialty Manufacturing Center
                </h3>
                <div className="space-y-4 text-leather-dark/80">
                  <p>
                    Our specialty manufacturing center focuses on
                    limited-edition, custom, and premium leather goods that
                    require exceptional attention to detail and specialized
                    techniques.
                  </p>
                  <p>
                    This facility employs our most experienced artisans, many
                    with over 20 years of experience in traditional leather
                    crafting methods that have been passed down through
                    generations.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="p-1 rounded-md bg-leather text-white mt-1 mr-3">
                      <Scissors className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-leather-dark">
                        Artisan Team
                      </p>
                      <p className="text-sm text-leather-dark/70">
                        25 master craftspeople
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-1 rounded-md bg-leather text-white mt-1 mr-3">
                      <Factory className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-leather-dark">
                        Facility Size
                      </p>
                      <p className="text-sm text-leather-dark/70">
                        12,000 sq. ft.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-leather/10 rounded-lg -z-10 transform rotate-2"></div>
                  <img
                    src="/images/artisan-craftsmanship-workshop.jpg"
                    alt="Deva International's specialty manufacturing center"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg">
                    <p className="font-medium text-leather-dark">
                      Specialty Center
                    </p>
                    <p className="text-sm text-leather-dark/70">
                      Established 2012 | 12,000 sq. ft.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Equipment */}
        <section className="py-16 md:py-20 bg-leather-light/30">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
                <p className="text-xs font-medium tracking-widest text-leather-dark">
                  TECHNOLOGY & EQUIPMENT
                </p>
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-leather-dark mb-6">
                Advanced Manufacturing Technology
              </h2>
              <p className="text-lg text-leather-dark/80">
                Our investment in cutting-edge technology ensures precision,
                efficiency, and consistency in every product we manufacture.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative">
                  <img
                    src="/images/manufacturing-technology-equipment.jpg"
                    alt="Advanced manufacturing technology and equipment at Deva International"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg">
                    <p className="font-medium text-leather-dark">
                      Latest Technology
                    </p>
                    <p className="text-sm text-leather-dark/70">
                      Precision & Efficiency
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-medium text-leather-dark mb-4">
                  State-of-the-Art Equipment
                </h3>
                <div className="space-y-4 text-leather-dark/80">
                  <p>
                    Our manufacturing facilities are equipped with the latest
                    technology in leather goods production, including
                    computer-controlled cutting systems, automated stitching
                    machines, and precision finishing equipment.
                  </p>
                  <p>
                    This advanced machinery allows us to maintain consistent
                    quality while increasing production efficiency and reducing
                    material waste.
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 mt-0.5" />
                    <p className="text-leather-dark/80">
                      Computer-controlled cutting systems for precision and
                      minimal waste
                    </p>
                  </div>

                  <div className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 mt-0.5" />
                    <p className="text-leather-dark/80">
                      Automated stitching machines for consistent quality
                    </p>
                  </div>

                  <div className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 mt-0.5" />
                    <p className="text-leather-dark/80">
                      Advanced finishing equipment for premium surface
                      treatments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Process */}
        <section className="py-16 md:py-20 bg-leather-cream">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
                <p className="text-xs font-medium tracking-widest text-leather-dark">
                  OUR PROCESS
                </p>
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-leather-dark mb-6">
                From Raw Material to Finished Product
              </h2>
              <p className="text-lg text-leather-dark/80">
                Our meticulous manufacturing process ensures that every product
                reflects our commitment to quality and craftsmanship.
              </p>
            </div>

            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-leather/20"></div>

              {/* Process Step 1 */}
              <div className="relative mb-12 md:mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <span className="inline-block px-4 py-1 mb-2 bg-leather/10 rounded-full">
                      <p className="text-xs font-medium tracking-widest text-leather-dark">
                        STEP 1
                      </p>
                    </span>
                    <h3 className="text-2xl font-serif font-medium text-leather-dark mb-3">
                      Material Selection & Preparation
                    </h3>
                    <p className="text-leather-dark/80">
                      Our process begins with the careful selection of premium
                      leather hides and supplementary materials. Each hide is
                      inspected for quality, texture, and color consistency
                      before being prepared for cutting.
                    </p>
                  </div>

                  <div className="md:pl-16">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <img
                        src="/images/leather-manufacturing-process-1.jpg"
                        alt="Material selection process"
                        className="w-full h-auto rounded-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-leather w-8 h-8 rounded-full border-4 border-white"></div>
              </div>

              {/* Process Step 2 */}
              <div className="relative mb-12 md:mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2">
                    <span className="inline-block px-4 py-1 mb-2 bg-leather/10 rounded-full">
                      <p className="text-xs font-medium tracking-widest text-leather-dark">
                        STEP 2
                      </p>
                    </span>
                    <h3 className="text-2xl font-serif font-medium text-leather-dark mb-3">
                      Cutting & Pattern Making
                    </h3>
                    <p className="text-leather-dark/80">
                      Using a combination of traditional techniques and
                      computer-aided design, our skilled pattern makers create
                      precise templates for each product component. The cutting
                      process is executed with precision to minimize waste while
                      maximizing the natural beauty of the leather.
                    </p>
                  </div>

                  <div className="md:order-1 md:pr-16">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <img
                        src="/images/leather-manufacturing-process-2.jpg"
                        alt="Leather cutting process"
                        className="w-full h-auto rounded-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-leather w-8 h-8 rounded-full border-4 border-white"></div>
              </div>

              {/* Process Step 3 */}
              <div className="relative mb-12 md:mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <span className="inline-block px-4 py-1 mb-2 bg-leather/10 rounded-full">
                      <p className="text-xs font-medium tracking-widest text-leather-dark">
                        STEP 3
                      </p>
                    </span>
                    <h3 className="text-2xl font-serif font-medium text-leather-dark mb-3">
                      Stitching & Assembly
                    </h3>
                    <p className="text-leather-dark/80">
                      Our skilled artisans stitch and assemble each product with
                      meticulous attention to detail. Using both traditional
                      hand-stitching and advanced sewing techniques, we ensure
                      durability and aesthetic perfection at every seam.
                    </p>
                  </div>

                  <div className="md:pl-16">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <img
                        src="/images/leather-manufacturing-process-3.jpg"
                        alt="Leather stitching process"
                        className="w-full h-auto rounded-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-leather w-8 h-8 rounded-full border-4 border-white"></div>
              </div>

              {/* Process Step 4 */}
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2">
                    <span className="inline-block px-4 py-1 mb-2 bg-leather/10 rounded-full">
                      <p className="text-xs font-medium tracking-widest text-leather-dark">
                        STEP 4
                      </p>
                    </span>
                    <h3 className="text-2xl font-serif font-medium text-leather-dark mb-3">
                      Finishing & Quality Control
                    </h3>
                    <p className="text-leather-dark/80">
                      The final stage involves edge finishing, hardware
                      application, and detailed quality inspection. Each product
                      is carefully reviewed to ensure it meets our exacting
                      standards before being packaged for shipping to our
                      clients worldwide.
                    </p>
                  </div>

                  <div className="md:order-1 md:pr-16">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <img
                        src="/images/leather-manufacturing-process-4.jpg"
                        alt="Leather product finishing"
                        className="w-full h-auto rounded-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-leather w-8 h-8 rounded-full border-4 border-white"></div>
              </div>
            </div>
          </div>
        </section>

        {/* R&D & Sustainability */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
                <p className="text-xs font-medium tracking-widest text-leather-dark">
                  INNOVATION & SUSTAINABILITY
                </p>
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-leather-dark mb-6">
                Research, Development & Sustainability
              </h2>
              <p className="text-lg text-leather-dark/80">
                Our commitment to innovation drives us to continuously explore
                new techniques, materials, and processes that enhance quality
                while reducing environmental impact.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="relative">
                  <img
                    src="/images/quality-control-testing.jpg"
                    alt="R&D laboratory at Deva International"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-leather p-4 rounded-lg shadow-lg">
                    <Lightbulb className="h-10 w-10 text-white" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-medium text-leather-dark mb-4">
                  Research & Development
                </h3>
                <div className="space-y-4 text-leather-dark/80">
                  <p>
                    Our dedicated R&D team works at the intersection of
                    traditional craftsmanship and modern technology, developing
                    innovative solutions that enhance our products and
                    manufacturing processes.
                  </p>
                  <p>
                    Recent innovations include water-resistant leather
                    treatments, lightweight reinforcement materials, and
                    eco-friendly dyeing processes that reduce water usage while
                    maintaining color vibrancy.
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 mt-0.5" />
                    <p className="text-leather-dark/80">
                      Dedicated 2,500 sq. ft. R&D facility with advanced testing
                      equipment
                    </p>
                  </div>

                  <div className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 mt-0.5" />
                    <p className="text-leather-dark/80">
                      Team of 8 researchers and designers with diverse expertise
                    </p>
                  </div>

                  <div className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-leather mr-3 mt-0.5" />
                    <p className="text-leather-dark/80">
                      5 patents obtained for innovative leather treatment
                      techniques
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-serif font-medium text-leather-dark mb-4">
                  Sustainability Initiatives
                </h3>
                <div className="space-y-4 text-leather-dark/80">
                  <p>
                    We're committed to minimizing the environmental impact of
                    our operations while maintaining the premium quality our
                    customers expect. Our sustainability initiatives touch every
                    aspect of our business, from sourcing to manufacturing.
                  </p>
                  <p>
                    Through partnerships with sustainable tanneries,
                    optimization of production processes, and investment in
                    renewable energy, we've achieved significant reductions in
                    our carbon footprint and resource consumption.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="bg-leather/5 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Leaf className="h-5 w-5 text-leather mr-2" />
                      <h4 className="font-medium text-leather-dark">
                        Waste Reduction
                      </h4>
                    </div>
                    <p className="text-sm text-leather-dark/70">
                      85% reduction in manufacturing waste through optimized
                      cutting patterns and recycling programs.
                    </p>
                  </div>

                  <div className="bg-leather/5 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Leaf className="h-5 w-5 text-leather mr-2" />
                      <h4 className="font-medium text-leather-dark">
                        Water Conservation
                      </h4>
                    </div>
                    <p className="text-sm text-leather-dark/70">
                      Closed-loop water system reduces water usage by 60%
                      compared to industry standards.
                    </p>
                  </div>

                  <div className="bg-leather/5 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Leaf className="h-5 w-5 text-leather mr-2" />
                      <h4 className="font-medium text-leather-dark">
                        Renewable Energy
                      </h4>
                    </div>
                    <p className="text-sm text-leather-dark/70">
                      Solar panels provide 40% of our manufacturing facilities'
                      energy needs.
                    </p>
                  </div>

                  <div className="bg-leather/5 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Leaf className="h-5 w-5 text-leather mr-2" />
                      <h4 className="font-medium text-leather-dark">
                        Sustainable Sourcing
                      </h4>
                    </div>
                    <p className="text-sm text-leather-dark/70">
                      100% of our leather comes from tanneries certified for
                      environmental responsibility.
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img
                    src="/images/sustainability-environmental-practices.jpg"
                    alt="Sustainable manufacturing at Deva International"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-leather p-4 rounded-lg shadow-lg">
                    <Leaf className="h-10 w-10 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <button className="btn-primary inline-flex items-center group">
                Learn More About Our Sustainable Practices
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

export default ManufacturingPage;
