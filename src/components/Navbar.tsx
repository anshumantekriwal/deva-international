import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border/40 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="images/logo.png"
                alt="Deva International Exim Pvt Ltd"
                className="h-11 w-auto"
              />
              <span className="ml-2 font-serif text-xl font-medium text-leather-dark">
                Deva International Exim Pvt Ltd
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>

            {/* About Us Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-transparent hover:text-leather">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/about"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              Who We Are
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Learn about our company's history and values
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/who-we-are"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              Our Experience
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Our 32+ years of excellence in the industry
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/from-the-founder"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              From The Founder
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              A message from our visionary leadership
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/certificates"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              Certificates & Compliance
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Our certifications and industry standards
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Designs Dropdown - Updated with the three product categories */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-transparent hover:text-leather">
                    Designs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/products"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              All Collections
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Explore our complete range of leather products
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/products/premium-handbags"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              Premium Handbags
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Exquisite handcrafted leather handbags for all
                              occasions
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/products/leather-wallets"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              Leather Wallets
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Classic and contemporary wallet designs
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/products/accessories"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              Accessories
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Complement your style with premium leather
                              accessories
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Infrastructure Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-transparent hover:text-leather">
                    Infrastructure
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/quality-control"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              Quality Control
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Our rigorous quality assurance processes
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/manufacturing"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              Manufacturing
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              State-of-the-art facilities and R&D
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/ethical-workplace"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              Ethical Workplace
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Our sustainable and ethical working environment
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-leather-dark p-2"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-leather-dark hover:bg-leather-light/10"
            onClick={closeMobileMenu}
          >
            Home
          </Link>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between px-3 py-2 rounded-md text-base font-medium text-leather-dark hover:bg-leather-light/10">
              <span>About Us</span>
              <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
            </summary>
            <div className="pl-4 mt-1 space-y-1">
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-sm text-leather-dark/70 hover:bg-leather-light/5"
                onClick={closeMobileMenu}
              >
                Who We Are
              </Link>
              <Link
                to="/who-we-are"
                className="block px-3 py-2 rounded-md text-sm text-leather-dark/70 hover:bg-leather-light/5"
                onClick={closeMobileMenu}
              >
                Our Experience
              </Link>
              <Link
                to="/from-the-founder"
                className="block px-3 py-2 rounded-md text-sm text-leather-dark/70 hover:bg-leather-light/5"
                onClick={closeMobileMenu}
              >
                From The Founder
              </Link>
              <Link
                to="/certificates"
                className="block px-3 py-2 rounded-md text-sm text-leather-dark/70 hover:bg-leather-light/5"
                onClick={closeMobileMenu}
              >
                Certificates & Compliance
              </Link>
            </div>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between px-3 py-2 rounded-md text-base font-medium text-leather-dark hover:bg-leather-light/10">
              <span>Designs</span>
              <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
            </summary>
            <div className="pl-4 mt-1 space-y-1">
              <Link
                to="/products"
                className="block px-3 py-2 rounded-md text-sm text-leather-dark/70 hover:bg-leather-light/5"
                onClick={closeMobileMenu}
              >
                All Collections
              </Link>
              <Link
                to="/products/premium-handbags"
                className="block px-3 py-2 rounded-md text-sm text-leather-dark/70 hover:bg-leather-light/5"
                onClick={closeMobileMenu}
              >
                Premium Handbags
              </Link>
              <Link
                to="/products/leather-wallets"
                className="block px-3 py-2 rounded-md text-sm text-leather-dark/70 hover:bg-leather-light/5"
                onClick={closeMobileMenu}
              >
                Leather Wallets
              </Link>
              <Link
                to="/products/accessories"
                className="block px-3 py-2 rounded-md text-sm text-leather-dark/70 hover:bg-leather-light/5"
                onClick={closeMobileMenu}
              >
                Accessories
              </Link>
            </div>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between px-3 py-2 rounded-md text-base font-medium text-leather-dark hover:bg-leather-light/10">
              <span>Infrastructure</span>
              <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
            </summary>
            <div className="pl-4 mt-1 space-y-1">
              <Link
                to="/quality-control"
                className="block px-3 py-2 rounded-md text-sm text-leather-dark/70 hover:bg-leather-light/5"
                onClick={closeMobileMenu}
              >
                Quality Control
              </Link>
              <Link
                to="/manufacturing"
                className="block px-3 py-2 rounded-md text-sm text-leather-dark/70 hover:bg-leather-light/5"
                onClick={closeMobileMenu}
              >
                Manufacturing
              </Link>
              <Link
                to="/ethical-workplace"
                className="block px-3 py-2 rounded-md text-sm text-leather-dark/70 hover:bg-leather-light/5"
                onClick={closeMobileMenu}
              >
                Ethical Workplace
              </Link>
            </div>
          </details>

          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-leather-dark hover:bg-leather-light/10"
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
