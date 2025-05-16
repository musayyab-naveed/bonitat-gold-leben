
import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center" id="hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80')", 
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 hero-pattern"></div>
      </div>

      {/* Content */}
      <div className="section-container relative z-10 text-white">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            💼 Verdiene monatlich bis zu 2.000 € – ganz ohne Risiko.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
            Nutze deine Bonität für etwas Großes. Wir finanzieren Luxusautos – du kassierst passives Einkommen. Seriös, sicher, vertraglich abgesichert.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
            <a 
              href="#bewerben" 
              className="cta-button inline-flex items-center justify-center group"
            >
              Jetzt unverbindlich bewerben
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm mt-2 md:mt-4 text-white/70">
              In 3 Minuten starten. Keine Verpflichtung.
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/50 animate-bounce">
        <span className="text-sm">Mehr erfahren</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
