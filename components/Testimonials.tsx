import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
        name: "Carlos M.",
        role: "Consultor Financeiro",
        text: "Eu perdia horas no WhatsApp respondendo as mesmas coisas. O agente de IA agora faz a triagem e só recebo o cliente pronto para fechar. Mudou minha rotina."
    },
    {
        name: "Ana P.",
        role: "Proprietária de Clínica de Estética",
        text: "O site ficou incrível e super profissional. Meus pacientes agora conseguem ver todos os serviços e agendar sem eu precisar parar o atendimento presencial."
    },
    {
        name: "Ricardo S.",
        role: "Fundador de Startup",
        text: "A automação de relatórios que a NexFit criou nos poupou pelo menos 10 horas semanais. O serviço é rápido e o suporte pós-entrega é excelente."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Quem já trabalhou comigo</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
              <div className="text-brand-500 mb-4">
                ★★★★★
              </div>
              <p className="text-slate-600 italic mb-6 flex-grow">"{t.text}"</p>
              <div>
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;