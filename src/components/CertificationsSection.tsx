import { useState, useEffect, useRef } from "react";
import { Award, Check, Shield, Globe, TrendingUp } from "lucide-react";

const certifications = [
  {
    title: "One Star Export House",
    description:
      "Recognized by Government of India for excellence in export performance and contribution to economic growth.",
    icon: <Award className="h-12 w-12 text-amber-500" />,
    color: "from-amber-100 to-amber-50",
  },
  {
    title: "ISO 9001:2015",
    description:
      "Certified for our quality management system that ensures consistent delivery of products meeting customer expectations.",
    icon: <Check className="h-12 w-12 text-green-600" />,
    color: "from-green-100 to-green-50",
  },
  {
    title: "SMETA Certified",
    description:
      "Adhering to the Sedex Members Ethical Trade Audit methodology for responsible business practices across our operations.",
    icon: <Shield className="h-12 w-12 text-blue-600" />,
    color: "from-blue-100 to-blue-50",
  },
  {
    title: "Sedex Member",
    description:
      "Participating in the world's largest collaborative platform for sharing responsible sourcing data on supply chains.",
    icon: <Globe className="h-12 w-12 text-purple-600" />,
    color: "from-purple-100 to-purple-50",
  },
];

const CertificationsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % certifications.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-leather-light/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-leather-light/30 to-transparent" />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Main Certificate Display */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="certification-badge aspect-square max-w-md mx-auto p-12 rounded-xl bg-gradient-to-br from-white to-leather-cream border border-leather-tan/20 shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-xl" />

                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-500 ${
                      index === activeIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90"
                    }`}
                  >
                    <div className="mb-8 transform transition-transform duration-700 ease-in-out">
                      {cert.icon}
                    </div>
                    <h3 className="text-2xl font-serif font-medium text-center mb-4">
                      {cert.title}
                    </h3>
                    <p className="text-center text-sm text-leather-dark/80">
                      {cert.description}
                    </p>

                    <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
                      {certifications.map((_, i) => (
                        <button
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i === activeIndex
                              ? "bg-leather w-6"
                              : "bg-leather/30"
                          }`}
                          onClick={() => setActiveIndex(i)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-leather-tan/10 rounded-full blur-xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-leather-light/10 rounded-full blur-xl" />
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="inline-block px-4 py-1 mb-6 bg-leather/10 rounded-full">
              <p className="text-xs font-medium tracking-widest text-leather-dark">
                GLOBALLY CERTIFIED
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-leather-black">
              Committed to Excellence & Sustainability{" "}
            </h2>
            <p className="text-leather-dark/80 mb-8 text-pretty">
              At Deva International, we uphold the highest standards of quality,
              ethics, and sustainable practices. Our certifications reflect our
              commitment to excellence across every aspect of our business.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg bg-gradient-to-br ${
                    cert.color
                  } hover:shadow-md transition-all cursor-pointer ${
                    activeIndex === index ? "ring-1 ring-leather-light" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex items-center">
                    <div className="mr-3 flex-shrink-0 opacity-80">
                      {cert.icon}
                    </div>
                    <h3 className="font-medium text-sm md:text-base">
                      {cert.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-leather-dark/70 italic">
              "These certifications symbolize more than recognition; they embody
              our daily dedication to quality, transparency, and responsible
              business practices."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
