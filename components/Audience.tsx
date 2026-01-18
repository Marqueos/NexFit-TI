import React from 'react';
import { Store, Rocket, Briefcase } from 'lucide-react';

const Audience: React.FC = () => {
  const items = [
    {
      icon: <Store className="w-8 h-8 text-brand-500" />,
      title: "Pequenas Empresas",
      description: "Que precisam organizar o atendimento e não podem perder vendas por demora na resposta.",
      borderColor: "group-hover:border-brand-400"
    },
    {
      icon: <Rocket className="w-8 h-8 text-accent-500" />,
      title: "Startups",
      description: "Que buscam validação rápida e processos enxutos sem gastar uma fortuna em equipe.",
      borderColor: "group-hover:border-accent-400"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-indigo-500" />,
      title: "Profissionais Liberais",
      description: "Consultores e prestadores de serviço que perdem muito tempo agendando horários manualmente.",
      borderColor: "group-hover:border-indigo-400"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Tech Grid Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Label removed as requested */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Para quem é a NexFit TI?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Se você sente que passa mais tempo resolvendo burocracias do que crescendo seu negócio, essa solução foi desenhada para o seu momento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`group relative p-8 bg-white rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50 ${item.borderColor}`}
            >
              {/* Top accent line that appears on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner mb-6 group-hover:bg-slate-900 group-hover:scale-110 transition-all duration-300">
                <div className="transform group-hover:rotate-6 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;