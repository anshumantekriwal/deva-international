import { useState, useEffect, useRef } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const events = [
  {
    id: 1,
    title: "MIPEL 2025",
    location: "Milan, Italy",
    date: "February 13-15, 2025",
    description:
      "Showcased our premium leather collection at one of Europe's most prestigious leather exhibitions.",
    image: "images/MIPEL.jpeg",
  },
];

const RecentEventsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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
    // Auto-rotate events every 5 seconds
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % events.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-leather-cream/70 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-subtle-grain opacity-30" />

      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
            <p className="text-xs font-medium tracking-widest text-leather-dark">
              GLOBAL PRESENCE
            </p>
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-leather-black">
            Our Recent Events & Exhibitions
          </h2>
          <p className="text-leather-dark/70 text-lg">
            Showcasing our craftsmanship and connecting with partners worldwide
            through prestigious industry events.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto mb-12">
          {/* Large event display */}
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === activeIndex
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-105 z-0"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-full"
                />

                <div className="absolute bottom-0 inset-x-0 p-8 text-white z-20">
                  <div
                    className={`transition-all duration-700 delay-300 ${
                      index === activeIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    <h3 className="text-3xl font-serif font-medium mb-3">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap items-center mb-4 text-white/80">
                      <div className="flex items-center mr-6 mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    <p className="text-white/90 max-w-2xl">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline navigation */}
          <div
            ref={timelineRef}
            className={`mt-8 flex space-x-1 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-leather-light scrollbar-track-transparent ${
              isVisible ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000`}
          >
            {events.map((event, index) => (
              <button
                key={event.id}
                data-index={index}
                className={`flex-shrink-0 px-4 py-2 rounded-md transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-leather text-white"
                    : "bg-white/70 hover:bg-white"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="text-sm whitespace-nowrap">
                  {event.date.split(",")[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Timeline indicator */}
          <div className="mt-4 h-1.5 bg-leather-light/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-leather transition-all duration-500"
              style={{ width: `${((activeIndex + 1) / events.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="text-center">
          <button className="btn-secondary inline-flex items-center">
            View All Events
            <ExternalLink className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentEventsSection;
