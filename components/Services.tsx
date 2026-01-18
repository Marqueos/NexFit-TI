import React from 'react';
import { Globe, MessageSquare, Cog, Check, Star } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe className="w-10 h-10 text-white" />,
      title: "Criação de Sites",
      subtitle: "Página Única / Landing Page",
      desc: "Sua vitrine profissional pronta para converter visitantes em clientes.",
      gradient: "from-brand-500 to-brand-700",
      borderColor: "border-brand-500",
      benefits: [
        "Presença no mundo digital 24/7.",
        "Mais credibilidade e confiança.",
        "Facilidade para encontrar informações.",
        "Economia de tempo no atendimento."
      ]
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-white" />,
      title: "Agentes de IA",
      subtitle: "Para WhatsApp",
      desc: "Sua recepção virtual inteligente que atende e agenda automaticamente.",
      gradient: "from-accent-500 to-accent-700",
      borderColor: "border-accent-500",
      popular: true, // Tag added
      benefits: [
        "Atendimento imediato (sem filas).",
        "Linguagem natural e acolhedora.",
        "Agendamento automático.",
        "Triagem inteligente de suporte."
      ]
    },
    {
      icon: <Cog className="w-10 h-10 text-white" />,
      title: "Automação",
      subtitle: "De Processos",
      desc: "Mecanismos sob medida para integrar suas ferramentas e eliminar o manual.",
      gradient: "from-slate-700 to-slate-900",
      borderColor: "border-slate-700",
      benefits: [
        "Envio automático de lembretes.",
        "Geração de relatórios recorrentes.",
        "Redução drástica de erros manuais.",
        "Rotina mais leve para você."
      ]
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">O que eu faço por você</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Soluções práticas e diretas para modernizar seu negócio.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-brand-900/10 overflow-hidden hover:-translate-y-2 transition-all duration-300 border-t-4 ${service.borderColor} border-x border-b border-slate-100 ${service.popular ? 'ring-2 ring-accent-400 ring-offset-4' : ''}`}>
              
              {/* Popular Badge */}
              {service.popular && (
                  <div className="absolute top-0 right-0 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-20 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-white" /> MAIS POPULAR
                  </div>
              )}

              {/* Header Gradient */}
              <div className={`bg-gradient-to-br ${service.gradient} p-8 flex justify-between items-start relative overflow-hidden`}>
                <div className="relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg">
                        {service.icon}
                    </div>
                </div>
                
                {/* Decorative background circle in card header */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>

              <div className="p-8">
                <div className="mb-6">
                    <span className="text-xs font-bold tracking-wider uppercase text-slate-400">{service.subtitle}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1 group-hover:text-brand-600 transition-colors">{service.title}</h3>
                </div>
                
                <p className="text-slate-600 mb-8 text-sm leading-relaxed border-l-2 border-slate-200 pl-4">
                    {service.desc}
                </p>

                <ul className="space-y-4 mb-8">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 text-sm font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;