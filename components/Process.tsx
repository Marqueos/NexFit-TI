import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Conversa Inicial",
      desc: "Entendemos sua dor pelo WhatsApp. Simples e direto."
    },
    {
      num: "02",
      title: "Protótipo Gratuito",
      desc: "Crio uma estrutura visual ou fluxo antes de você pagar qualquer coisa."
    },
    {
      num: "03",
      title: "Alinhamento",
      desc: "Ajustamos os detalhes para ficar perfeito para o seu negócio."
    },
    {
      num: "04",
      title: "Implementação",
      desc: "Desenvolvimento rápido e entrega da solução funcionando."
    },
    {
      num: "05",
      title: "Suporte & Ajustes",
      desc: "7 dias de ajustes finos ilimitados para garantir sua satisfação."
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">Como funciona o trabalho</h2>
        
        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 rounded-full bg-white border-4 border-brand-100 text-brand-600 font-bold text-xl flex items-center justify-center mb-6 shadow-sm group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                            {step.num}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-sm text-slate-500">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;