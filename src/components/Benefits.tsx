
import React from "react";
import { Check } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Kein Risiko bei Schaden, Ausfall oder Strafzetteln",
    "Vertraglich abgesichert",
    "Volle Transparenz",
    "Keine Arbeit, nur Einkommen",
    "Bis zu 4 Fahrzeuge pro Person möglich"
  ];

  return (
    <section className="py-20 bg-gray-50" id="benefits">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Warum du mitmachen solltest</h2>
          <div className="h-1 w-20 bg-gold mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center bg-white p-5 rounded-xl shadow-sm">
                <span className="bg-gold/10 p-3 rounded-full mr-4">
                  <Check className="h-6 w-6 text-gold" />
                </span>
                <span className="font-semibold text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
