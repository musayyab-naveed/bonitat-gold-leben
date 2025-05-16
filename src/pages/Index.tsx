
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import CalculationExample from "../components/CalculationExample";
import TrustSection from "../components/TrustSection";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Bewerbung eingereicht!",
      description: "Wir werden uns in Kürze mit Ihnen in Verbindung setzen.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <HeroSection />
      
      <HowItWorks />
      
      <Benefits />
      
      <CalculationExample />
      
      <TrustSection />
      
      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50" id="bewerben">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Jetzt Bonität prüfen lassen und Provision sichern</h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Fülle das Formular aus und wir melden uns innerhalb von 24 Stunden bei dir.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Dein vollständiger Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="deine@email.de"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="+49 123 456789"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Nachricht (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Deine Nachricht an uns..."
                ></textarea>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full cta-button inline-flex items-center justify-center group"
                >
                  Unverbindlich bewerben
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-center mt-4 text-gray-500">
                  Durch das Absenden erklärst du dich mit unserer Datenschutzerklärung einverstanden.
                </p>
              </div>
            </form>
            
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                Oder kontaktiere uns direkt per WhatsApp:
              </p>
              <a 
                href="https://wa.me/491234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-block px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors"
              >
                Via WhatsApp bewerben
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
