import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Award, Shield, FileCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CertificatesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certificates = [
    {
      name: "ISO 9001:2015",
      description:
        "Quality Management System certification ensuring consistent product quality and customer satisfaction.",
      icon: <CheckCircle className="h-10 w-10 text-leather" />,
      year: "2010",
    },
    {
      name: "ISO 14001:2015",
      description:
        "Environmental Management System certification demonstrating our commitment to sustainability.",
      icon: <Shield className="h-10 w-10 text-leather" />,
      year: "2010",
    },

    {
      name: "REACH Compliance",
      description:
        "Compliance with EU regulations for Registration, Evaluation, Authorization of Chemicals.",
      icon: <Shield className="h-10 w-10 text-leather" />,
      year: "2010",
    },
    {
      name: "Govt. of India – One Star Export House",
      description:
        "Awarded One Star Export House status by the Government of India for consistent export performance and global reliability as a leather goods exporter.",
      icon: <CheckCircle className="h-10 w-10 text-leather" />,
      year: "2015",
    },
  ];

  const awards = [
    {
      name: "Excellence in Export",
      organization: "Leather Export Council",
      year: "2021",
      description:
        "Recognized for outstanding contribution to leather goods exports.",
    },
    {
      name: "Sustainable Manufacturing Award",
      organization: "Global Leather Alliance",
      year: "2020",
      description:
        "Awarded for innovative approaches to sustainable leather production.",
    },
    {
      name: "Best Product Design",
      organization: "International Leather Design Association",
      year: "2019",
      description:
        "Honored for exceptional design quality and innovation in leather goods.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          Awards & Achievement of Deva International | Global Exporter
        </title>
        <meta
          name="description"
          content="Explore the achievements of Deva International, a recognized leather goods exporter and One Star Export House, delivering excellence worldwide."
        />
        <meta
          name="keywords"
          content="awards of deva international, achievements of deva international, recognized leather goods exporters, one star export house"
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
                "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop')",
            }}
          ></div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-4 animate-fade-in">
              Certificates & Compliance
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-in">
              Our commitment to quality, sustainability, and ethical
              manufacturing
            </p>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
                <p className="text-xs font-medium tracking-widest text-leather-dark">
                  OUR CERTIFICATIONS
                </p>
              </span>

              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-leather-dark mb-6">
                Industry Standards & Compliance
              </h2>

              <p className="text-lg text-leather-dark/80">
                At Deva International, we hold ourselves to the highest
                standards of quality, sustainability, and ethical manufacturing.
                Our certifications reflect our ongoing commitment to excellence
                in every aspect of our operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transition-all duration-300 hover:shadow-lg border-leather/20 hover:border-leather"
                >
                  <CardHeader className="bg-leather/5 pb-4">
                    <div className="flex justify-between items-center">
                      <div className="p-2 bg-white rounded-md shadow-sm">
                        {cert.icon}
                      </div>
                      <span className="text-sm text-leather-dark/70">
                        Since {cert.year}
                      </span>
                    </div>
                    <CardTitle className="mt-4 text-xl font-serif">
                      {cert.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-leather-dark/70">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-semibold text-leather-dark mb-6">
                Our Commitment to Excellence
              </h2>

              <p className="text-lg text-leather-dark/80 mb-8">
                These compliances and certifications are not just accolades –
                they represent our ongoing commitment to maintaining the highest
                standards in every aspect of our business.
              </p>

              <div className="p-8 bg-leather/5 rounded-lg border border-leather/20">
                <p className="text-xl font-serif text-leather-dark">
                  "At Deva International, we believe that true excellence comes
                  from a relentless pursuit of quality, sustainability, and
                  ethical business practices. Our certifications and awards
                  reflect this ongoing commitment."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CertificatesPage;
