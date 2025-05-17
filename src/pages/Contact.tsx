
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Deva International</title>
        <meta name="description" content="Get in touch with Deva International for premium leather goods and manufacturing queries." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-leather-dark/5 py-20">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4 text-leather-dark">Contact Us</h1>
              <p className="text-lg text-leather-dark/70">
                We'd love to hear from you. Reach out to us for inquiries about our products, 
                manufacturing services, or any other questions.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Contact Section */}
        <section className="py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-serif font-medium mb-6 text-leather-dark">Get In Touch</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-leather mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-leather-dark">Address</h3>
                      <p className="text-leather-dark/70 mt-1">
                        37/2, Topsia Rd, Uttar Panchanna Gram<br />
                        Kolkata, West Bengal 700100<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-leather mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-leather-dark">Phone</h3>
                      <p className="text-leather-dark/70 mt-1">
                        <a href="tel:+919830262910" className="hover:text-leather transition-colors">
                          +91-983-026-2910
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-leather mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-leather-dark">Email</h3>
                      <p className="text-leather-dark/70 mt-1">
                        <a href="mailto:deva@devainternational.com" className="hover:text-leather transition-colors">
                          deva@devainternational.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h2 className="text-2xl font-serif font-medium mb-6 text-leather-dark">Business Hours</h2>
                  <div className="space-y-2 text-leather-dark/70">
                    <p>Monday - Saturday: 10:00 AM - 07:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-serif font-medium mb-6 text-leather-dark">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
            
            {/* Map Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-serif font-medium mb-6 text-leather-dark">Our Location</h2>
              <div className="h-96 w-full rounded-lg overflow-hidden border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.1118869054713!2d88.38895987583826!3d22.51972457897073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02774618bd6c31%3A0xf07858bf6731018a!2sDeva%20International%20Exim%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1716868795506!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Deva International Location"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ContactPage;
