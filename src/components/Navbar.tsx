
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-4",
        scrolled ? "bg-black/95 shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white font-montserrat">
              Live<span className="text-gold">Fast</span>
            </span>
            <span className="hidden md:inline-block text-sm text-white/70">Autovermietung GmbH</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#bewerben" className="hidden md:inline-flex cta-button text-sm">
              Jetzt bewerben
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
