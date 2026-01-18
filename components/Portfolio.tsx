import React, { useRef, useState } from 'react';
import { ExternalLink, Layout, Star, ChevronLeft, ChevronRight, Workflow, Zap } from 'lucide-react';

const Portfolio: React.FC = () => {
  const automationScrollRef = useRef<HTMLDivElement>(null);
  const webScrollRef = useRef<HTMLDivElement>(null);
  
  const [automationIndex, setAutomationIndex] = useState(0);
  const [webIndex, setWebIndex] = useState(0);

  const automationProjects = [
    {
      type: "Automação com IA",
      category: "Vendas & CRM",
      title: "Agente de Vendas WhatsApp",
      image: "/n8n-automation.png", 
      desc: "Fluxo inteligente que atende clientes, recupera carrinhos de e-commerce e agenda consultas automaticamente via WhatsApp.",
      tags: ["n8n", "OpenAI", "WhatsApp"]
    },
    {
      type: "Automação de Processos",
      category: "Gestão & Infra",
      title: "Orquestrador de Operações",
      image: "/ops-orchestrator.png",
      desc: "Sistema robusto que gerencia fluxos de trabalho complexos, eliminando tarefas manuais repetitivas e críticas.",
      tags: ["Workflow", "Integração", "Segurança"]
    },
    {
      type: "Gestão Comercial",
      category: "Dashboard de Vendas",
      title: "Sistema de Controle de Vendas",
      image: "/sales-dashboard.png",
      desc: "Painel centralizado para gestão de leads, métricas de conversão e acompanhamento financeiro em tempo real.",
      tags: ["Dashboard", "Analytics", "Vendas"]
    }
  ];

  const webProjects = [
    {
      category: "Barbearia",
      title: "Barber King Studio",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
      url: "https://barberkingstudio.netlify.app/",
      desc: "Estilo moderno com foco em agendamento visual."
    },
    {
      category: "Odontologia",
      title: "Sorriso Pleno",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
      url: "https://sorrisopleno.netlify.app/",
      desc: "Design limpo transmitindo confiança e higiene."
    },
    {
      category: "Logística",
      title: "Despacho Logi",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      url: "https://despachologidesp.netlify.app/",
      desc: "Foco em serviços e facilidade de cotação."
    },
    {
      category: "Estética",
      title: "Lumina Estética",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
      url: "https://luminaesteticavan.netlify.app/",
      desc: "Visual elegante para destacar procedimentos de beleza."
    },
    {
      category: "Saúde & Nutrição",
      title: "NutriVida Clínica",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
      url: "https://nutrividaclinica.netlify.app/",
      desc: "Acolhedor e informativo para novos pacientes."
    }
  ];

  const handleScroll = (ref: React.RefObject<HTMLDivElement>, setIndex: (i: number) => void) => {
    if (ref.current) {
      const scrollPosition = ref.current.scrollLeft;
      const cardWidth = ref.current.offsetWidth * 0.8;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setIndex(newIndex);
    }
  };

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth * 0.8;
      ref.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden relative" aria-labelledby="portfolio-title">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .snap-always { scroll-snap-stop: always; }
        .portfolio-image { aspect-ratio: 16 / 9; object-fit: cover; }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 id="portfolio-title" className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">O que eu construo</h2>
          <p className="text-slate-600 text-lg">
            Soluções reais para problemas reais. Navegue abaixo pelos meus projetos de automação e web design.
          </p>
        </div>

        {/* Section: Automation */}
        <div className="mb-24" role="region" aria-label="Projetos de Automação">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-amber-500" aria-hidden="true" />
                <span className="text-amber-600 font-bold tracking-widest uppercase text-xs">Sistemas & Automação</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-slate-900">Workflows Inteligentes</h3>
            </div>
            <div className="hidden md:flex gap-3">
              <button onClick={() => scroll(automationScrollRef, 'left')} aria-label="Projeto anterior" className="p-3 rounded-full bg-white border border-slate-200 hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500"><ChevronLeft className="w-5 h-5 text-slate-700" /></button>
              <button onClick={() => scroll(automationScrollRef, 'right')} aria-label="Próximo projeto" className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500"><ChevronRight className="w-5 h-5 text-white" /></button>
            </div>
          </div>

          <div 
            ref={automationScrollRef}
            onScroll={() => handleScroll(automationScrollRef, setAutomationIndex)}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 -mx-4 px-4 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {automationProjects.map((project, index) => (
              <article key={index} className="flex-shrink-0 w-[80vw] sm:w-[350px] md:w-[420px] snap-center snap-always">
                <div className="block relative h-full bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl">
                  <div className="bg-[#1e293b] border-b border-slate-700 px-4 py-3 flex items-center gap-3">
                    <div className="flex gap-1.5" aria-hidden="true">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-grow px-3 py-1 rounded text-[10px] font-mono border bg-slate-800 text-green-400 border-slate-700 truncate">
                      system_active.json
                    </div>
                  </div>
                  <div className="relative h-56 overflow-hidden bg-slate-900">
                    <img src={project.image} alt={`Visualização do projeto: ${project.title}`} loading="lazy" className="w-full h-full object-cover opacity-90 portfolio-image" />
                    <div className="absolute top-4 right-4 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold bg-slate-900/80 text-green-400 border border-green-500/30">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h4>
                    <p className="text-sm text-slate-600 mb-6 flex-grow">{project.desc}</p>
                    <div className="flex gap-2 flex-wrap mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase rounded border border-slate-200">{tag}</span>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                      <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></span>
                      PROCESSAMENTO ATIVO
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-4 md:hidden" aria-hidden="true">
            {automationProjects.map((_, i) => (
              <div key={i} className={`h-1.5 transition-all duration-300 rounded-full ${automationIndex === i ? 'w-6 bg-amber-500' : 'w-1.5 bg-slate-300'}`}></div>
            ))}
          </div>
        </div>

        {/* Section: Web Design */}
        <div role="region" aria-label="Projetos Web Design">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Layout className="w-5 h-5 text-brand-500" aria-hidden="true" />
                <span className="text-brand-600 font-bold tracking-widest uppercase text-xs">Web Design</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-slate-900">Sites & Landing Pages</h3>
            </div>
            <div className="hidden md:flex gap-3">
              <button onClick={() => scroll(webScrollRef, 'left')} aria-label="Site anterior" className="p-3 rounded-full bg-white border border-slate-200 hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500"><ChevronLeft className="w-5 h-5 text-slate-700" /></button>
              <button onClick={() => scroll(webScrollRef, 'right')} aria-label="Próximo site" className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500"><ChevronRight className="w-5 h-5 text-white" /></button>
            </div>
          </div>

          <div 
            ref={webScrollRef}
            onScroll={() => handleScroll(webScrollRef, setWebIndex)}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 -mx-4 px-4 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {webProjects.map((project, index) => (
              <article key={index} className="flex-shrink-0 w-[80vw] sm:w-[350px] md:w-[420px] snap-center snap-always">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block relative h-full bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-brand-500">
                  <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5" aria-hidden="true">
                      <div className="w-2 h-2 rounded-full bg-red-300"></div>
                      <div className="w-2 h-2 rounded-full bg-amber-300"></div>
                      <div className="w-2 h-2 rounded-full bg-green-300"></div>
                    </div>
                    <div className="flex-grow px-3 py-1 rounded text-[10px] font-mono border bg-white text-slate-400 border-slate-200 truncate">
                      {project.url.replace('https://', '')}
                    </div>
                  </div>
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img src={project.image} alt={`Captura de tela do site: ${project.title}`} loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 portfolio-image" />
                    <div className="absolute top-4 right-4 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold bg-white/90 text-brand-600 border border-white/50">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">{project.title}</h4>
                    <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">{project.desc}</p>
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-green-600 font-bold text-[10px] flex items-center gap-1"><Star className="w-3 h-3 fill-green-600" aria-hidden="true" /> PROJETO ENTREGUE</span>
                      <span className="text-brand-600 font-bold text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">Ver Site <ExternalLink className="w-3 h-3" aria-hidden="true" /></span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-4 md:hidden" aria-hidden="true">
            {webProjects.map((_, i) => (
              <div key={i} className={`h-1.5 transition-all duration-300 rounded-full ${webIndex === i ? 'w-6 bg-brand-500' : 'w-1.5 bg-slate-300'}`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;