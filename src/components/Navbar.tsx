
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu and dropdowns when route changes
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  // Dropdown content definitions
  const dropdownContents = {
    aboutUs: [
      { name: 'Who We Are', path: '/about/who-we-are' },
      { name: 'From The Founder', path: '/about/founder' },
      { name: 'Awards & Achievements', path: '/about/awards' },
      { name: 'Mission & Vision', path: '/about/mission' },
    ],
    designs: [
      { name: 'Handbags', path: '/designs/handbags' },
      { name: 'Wallets', path: '/designs/wallets' },
      { name: 'Belts', path: '/designs/belts' },
      { name: 'Custom Products', path: '/designs/custom' },
    ],
    infrastructure: [
      { name: 'Quality Control', path: '/infrastructure/quality' },
      { name: 'Manufacturing', path: '/infrastructure/manufacturing' },
      { name: 'Workplace', path: '/infrastructure/workplace' },
    ],
  };

  // Main navigation items
  const navItems = [
    { name: 'Home', path: '/', hasDropdown: false },
    { name: 'About Us', path: '/about', hasDropdown: true, dropdown: 'aboutUs' },
    { name: 'Designs', path: '/designs', hasDropdown: true, dropdown: 'designs' },
    { name: 'Infrastructure', path: '/infrastructure', hasDropdown: true, dropdown: 'infrastructure' },
    { name: 'Contact Us', path: '/contact', hasDropdown: false },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white bg-opacity-90 backdrop-blur-sm shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-serif font-bold tracking-tight text-leather-dark">
            DEVA
          </span>
          <span className="text-xs tracking-widest font-medium ml-1 text-leather-dark mt-3">
            INTERNATIONAL
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav 
          className="hidden md:flex space-x-8"
          onMouseLeave={closeDropdowns}
        >
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.hasDropdown ? (
                <button
                  className={cn(
                    "nav-link text-sm tracking-wide font-medium flex items-center",
                    (location.pathname === item.path || location.pathname.startsWith(item.path + '/') || activeDropdown === item.dropdown) && 
                    "text-leather after:scale-x-100"
                  )}
                  onMouseEnter={() => toggleDropdown(item.dropdown)}
                  onClick={() => toggleDropdown(item.dropdown)}
                >
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              ) : (
                <Link
                  to={item.path}
                  className={cn(
                    "nav-link text-sm tracking-wide font-medium",
                    location.pathname === item.path && "text-leather after:scale-x-100"
                  )}
                >
                  {item.name}
                </Link>
              )}

              {/* Dropdown Menu */}
              {item.hasDropdown && activeDropdown === item.dropdown && (
                <div className="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <div className="py-1">
                    {dropdownContents[item.dropdown].map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="block px-4 py-2 text-sm text-leather-dark hover:bg-leather-tan/10"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-leather-dark" />
          ) : (
            <Menu className="h-6 w-6 text-leather-dark" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-leather-tan/20 animate-fade-in">
          <div className="container max-w-7xl mx-auto px-4 py-4 flex flex-col space-y-1">
            {navItems.map((item) => (
              <div key={item.name} className="py-1">
                {item.hasDropdown ? (
                  <>
                    <button
                      className={cn(
                        "w-full text-left py-2 px-4 text-sm font-medium rounded-md transition-colors flex items-center justify-between",
                        (location.pathname === item.path || location.pathname.startsWith(item.path + '/') || activeDropdown === item.dropdown) 
                          ? "bg-leather-tan/20 text-leather-dark" 
                          : "text-leather-dark/80 hover:bg-leather-tan/10"
                      )}
                      onClick={() => toggleDropdown(item.dropdown)}
                    >
                      {item.name}
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform",
                        activeDropdown === item.dropdown ? "rotate-180" : ""
                      )} />
                    </button>
                    
                    {/* Mobile Dropdown */}
                    {activeDropdown === item.dropdown && (
                      <div className="pl-4 mt-1 space-y-1 border-l-2 border-leather-tan/20 ml-4">
                        {dropdownContents[item.dropdown].map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block py-2 px-4 text-sm text-leather-dark/80 hover:bg-leather-tan/10 rounded-md"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={cn(
                      "block py-2 px-4 text-sm font-medium rounded-md transition-colors",
                      location.pathname === item.path 
                        ? "bg-leather-tan/20 text-leather-dark" 
                        : "text-leather-dark/80 hover:bg-leather-tan/10"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
