
import React from "react";
import { Euro } from "lucide-react";

const CalculationExample = () => {
  const examples = [
    {
      cars: 1,
      amount: "500 €",
      icon: "🚗"
    },
    {
      cars: 2,
      amount: "1.000 €",
      icon: "🚗🚗"
    },
    {
      cars: 4,
      amount: "2.000 €",
      icon: "🚗🚗🚗🚗"
    }
  ];

  return (
    <section className="py-20 bg-black text-white" id="calculation">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Rechenbeispiel</h2>
          <div className="h-1 w-20 bg-gold mx-auto"></div>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Je mehr Fahrzeuge du finanzierst, desto höher ist dein monatliches passives Einkommen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <div 
              key={index}
              className="rounded-2xl border border-gold/30 p-8 text-center hover:border-gold transition-all duration-300 bg-black shadow-lg"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-gold/10 p-4 rounded-full">
                  <Euro className="h-8 w-8 text-gold" />
                </div>
              </div>
              
              <div className="mb-3 text-2xl">
                {example.icon}
              </div>
              
              <h3 className="text-xl mb-2">
                <span className="font-bold">{example.cars}</span> {example.cars === 1 ? 'Auto' : 'Autos'}
              </h3>
              
              <div className="text-gold text-3xl font-bold">
                {example.amount} <span className="text-sm text-white/70">mtl.</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#bewerben" 
            className="cta-button"
          >
            Jetzt unverbindlich bewerben
          </a>
        </div>
      </div>
    </section>
  );
};

export default CalculationExample;
