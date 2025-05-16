
import React from "react";

const TrustSection = () => {
  const trustElements = [
    {
      title: "Vertragssicherheit",
      icon: "📜",
    },
    {
      title: "DSGVO-konform",
      icon: "🔒",
    },
    {
      title: "100% Bonitätsprüfung",
      icon: "✅",
    },
    {
      title: "Autohaus-Partner",
      icon: "🤝",
    },
  ];

  return (
    <section className="py-20 bg-white" id="trust">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sicherheit & Vertrauen</h2>
          <div className="h-1 w-20 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {trustElements.map((element, index) => (
            <div 
              key={index}
              className="card text-center py-10 flex flex-col items-center"
            >
              <span className="text-4xl mb-4">{element.icon}</span>
              <h3 className="font-semibold">{element.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-6 text-center max-w-3xl mx-auto">
          <p className="text-gray-600 italic">
            „Live Fast Autovermietung GmbH übernimmt alle Risiken und Verwaltungsaufwand."
          </p>
        </div>
        
        {/* Optional Testimonial */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-20 h-20 rounded-full bg-gray-200 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80"
                alt="Testimonial" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="italic text-gray-600 mb-2">
                „Ich finanziere 3 Autos über Live Fast und verdiene nebenbei 1.500 € – ohne etwas zu tun."
              </p>
              <p className="font-semibold">- Marco, 34</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
