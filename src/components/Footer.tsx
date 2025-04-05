
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-leather-dark text-white pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col">
              <Link to="/" className="inline-flex items-baseline mb-4">
                <span className="text-2xl font-serif font-bold tracking-tight text-white">
                  DEVA
                </span>
                <span className="text-xs tracking-widest font-medium ml-1 text-leather-light mt-3">
                  INTERNATIONAL
                </span>
              </Link>
              <p className="text-sm text-gray-300 mb-6">
                Crafting premium leather goods with passion and precision since 1995.
                Over 32 years of excellence in leather craftsmanship.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-leather-light transition-colors">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-gray-300 hover:text-leather-light transition-colors">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-300 hover:text-leather-light transition-colors">
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-6 font-serif">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-leather-light transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-300 hover:text-leather-light transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-sm text-gray-300 hover:text-leather-light transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/quality-control"
                  className="text-sm text-gray-300 hover:text-leather-light transition-colors"
                >
                  Quality Control
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-300 hover:text-leather-light transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-6 font-serif">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/products/premium-handbags"
                  className="text-sm text-gray-300 hover:text-leather-light transition-colors"
                >
                  Premium Handbags
                </Link>
              </li>
              <li>
                <Link
                  to="/products/leather-wallets"
                  className="text-sm text-gray-300 hover:text-leather-light transition-colors"
                >
                  Leather Wallets
                </Link>
              </li>
              <li>
                <Link
                  to="/products/accessories"
                  className="text-sm text-gray-300 hover:text-leather-light transition-colors"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-leather-light transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://www.docsend.com/catalog-link', '_blank');
                  }}
                >
                  View Full Catalog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-6 font-serif">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-leather-light mr-3 mt-0.5" />
                <span className="text-sm text-gray-300">
                  123 Leather Lane, Craftsville<br />Industrial Zone, 560001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-leather-light mr-3" />
                <a href="tel:+911234567890" className="text-sm text-gray-300 hover:text-leather-light transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-leather-light mr-3" />
                <a href="mailto:info@devainternational.com" className="text-sm text-gray-300 hover:text-leather-light transition-colors">
                  info@devainternational.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Deva International. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-leather-light transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-leather-light transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
