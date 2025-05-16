
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white font-montserrat">
                Live<span className="text-gold">Fast</span>
              </span>
            </div>
            <p className="text-white/60 max-w-md">
              Nutze deine Bonität für etwas Großes. Wir finanzieren Luxusautos – du kassierst passives Einkommen.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-gold font-semibold mb-4">Links</h3>
              <ul className="space-y-2 text-white/60">
                <li><a href="#hero" className="hover:text-gold transition-colors">Home</a></li>
                <li><a href="#process" className="hover:text-gold transition-colors">Wie es funktioniert</a></li>
                <li><a href="#benefits" className="hover:text-gold transition-colors">Vorteile</a></li>
                <li><a href="#calculation" className="hover:text-gold transition-colors">Rechenbeispiel</a></li>
                <li><a href="#bewerben" className="hover:text-gold transition-colors">Bewerben</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gold font-semibold mb-4">Rechtliches</h3>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-gold transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">AGB</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gold font-semibold mb-4">Kontakt</h3>
              <ul className="space-y-2 text-white/60">
                <li>info@livefast-auto.de</li>
                <li>+49 (0) 123 456789</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
          <p>© {year} Live Fast Autovermietung GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
