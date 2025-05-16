
import React from "react";
import { FileText, FileLock, CalendarCheck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Sende uns deine Lohnnachweise & Daten",
      description: "Reiche einfach deine Gehaltsnachweise und notwendige Dokumente für die Bonitätsprüfung ein.",
      icon: <FileText className="h-16 w-16 text-gold" />,
    },
    {
      id: 2,
      title: "Wir kümmern uns um Finanzierung & Verträge",
      description: "Unser Team wickelt die gesamte Finanzierung ab und erstellt wasserdichte Verträge zu deinem Schutz.",
      icon: <FileLock className="h-16 w-16 text-gold" />,
    },
    {
      id: 3,
      title: "Du erhältst deine monatliche Auszahlung – garantiert",
      description: "Lehne dich zurück und erhalte deine monatlichen Zahlungen pünktlich und zuverlässig.",
      icon: <CalendarCheck className="h-16 w-16 text-gold" />,
    },
  ];

  return (
    <section className="bg-white py-20" id="process">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Wie es funktioniert</h2>
          <div className="h-1 w-20 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id}
              className="card flex flex-col items-center text-center p-8 hover:translate-y-[-5px]"
            >
              <div className="mb-6">
                {step.icon}
              </div>
              <div className="bg-gold text-black w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">
                {step.id}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
