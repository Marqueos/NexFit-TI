import React from 'react';
import Button from './Button';
import { Bot, Zap, Globe, Cpu, Gift, ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollToProcess = () => {
    const element = document.getElementById('process');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = "5511999999999"; 
    const message = encodeURIComponent("Olá! Vim pelo site e quero meu orçamento grátis.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden w-full max-w-[100vw] bg-[#020617] pt-28 pb-20 lg:pt-40 lg:pb-32 min-h-screen flex flex-col justify-center" aria-labelledby="hero-title">
      <style>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        @keyframes beam {
          0% { transform: translateY(-100%) translateX(-100%) rotate(45deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(200%) translateX(200%) rotate(45deg); opacity: 0; }
        }
        .gpu-accelerated {
          will-change: transform;
          transform: translateZ(0);
        }
      `}</style>

      {/* LIVING BACKGROUND SYSTEM */}
      <div className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1e293b] via-[#020617] to-black opacity-90 z-0"></div>
        <div 
            className="absolute inset-0 opacity-20 z-0 gpu-accelerated"
            style={{
                backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                animation: 'gridMove 4s linear infinite',
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
            }}
        ></div>
        <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute top-[10%] left-[20%] w-[200px] h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 gpu-accelerated" style={{ animation: 'beam 3s infinite ease-in-out', animationDelay: '0s' }}></div>
            <div className="absolute top-[40%] left-[60%] w-[150px] h-[2px] bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-0 gpu-accelerated" style={{ animation: 'beam 5s infinite ease-in-out', animationDelay: '2s' }}></div>
            <div className="absolute bottom-[20%] left-[10%] w-[180px] h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 gpu-accelerated" style={{ animation: 'beam 4s infinite ease-in-out', animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <Cpu className="w-4 h-4 text-cyan-400" aria-hidden="true" />
            <span className="tracking-wide">TECNOLOGIA PARA PEQUENOS NEGÓCIOS</span>
          </div>

          <h1 id="hero-title" className="text-[clamp(1.8rem,5vw,4.5rem)] leading-[1.1] font-bold text-white tracking-tight mb-6 drop-shadow-2xl">
            O <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-300">mecanismo de solução</span> <br className="hidden md:block"/> para o que é manual e repetitivo.
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light px-4">
            A NexFit TI cria sites profissionais, agentes de IA para WhatsApp e automações inteligentes para tirar o peso operacional das suas costas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 px-4">
            <Button 
                text="Falar comigo no WhatsApp" 
                variant="primary" 
                icon={true} 
                onClick={openWhatsApp}
                className="w-full sm:w-auto" 
            />
            <Button 
                text="Quero entender como funciona" 
                variant="outline"
                onClick={handleScrollToProcess}
                className="w-full sm:w-auto !text-slate-200 !border-slate-600 bg-slate-900/40 backdrop-blur-sm hover:!bg-slate-800 hover:!border-cyan-400 hover:!text-cyan-300 transition-all" 
            />
          </div>

          <div className="flex flex-col items-center justify-center mb-16 gap-1">
            <div className="flex gap-1 mb-1" aria-label="Avaliação 5 estrelas">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />)}
            </div>
            <p className="text-slate-400 text-sm font-medium">
                <strong className="text-white">+50 projetos entregues</strong> com satisfação total
            </p>
          </div>

          <div className="max-w-xl mx-auto mb-20 relative group cursor-pointer px-4" onClick={openWhatsApp}>
             <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 via-green-500 to-brand-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
             <div className="relative px-6 py-4 bg-slate-900/90 backdrop-blur-xl ring-1 ring-slate-600/50 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/30 shrink-0">
                        <Gift className="w-6 h-6 text-green-400" aria-hidden="true" />
                    </div>
                    <div className="text-left">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="bg-green-500 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wide">Risco Zero</span>
                        </div>
                        <h2 className="text-white font-bold text-base sm:text-lg leading-tight">
                            Protótipo Visual + Orçamento <span className="text-green-400">100% GRÁTIS</span>
                        </h2>
                    </div>
                </div>
                <div className="hidden sm:flex items-center text-green-400 font-semibold text-sm">
                    Solicitar agora <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
             </div>
          </div>

          <div className="hidden md:grid grid-cols-3 gap-8 max-w-5xl mx-auto">
             <div className="group relative flex flex-col items-center p-6 rounded-3xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl hover:border-cyan-500/80 transition-all duration-300">
                <Globe className="w-8 h-8 text-cyan-400 mb-3" aria-hidden="true" />
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300">Presença Digital</h3>
             </div>
             <div className="group relative flex flex-col items-center p-6 rounded-3xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl hover:border-teal-500/80 transition-all duration-300">
                <Bot className="w-8 h-8 text-teal-400 mb-3" aria-hidden="true" />
                <h3 className="text-lg font-bold text-white group-hover:text-teal-300">Atendimento IA</h3>
             </div>
             <div className="group relative flex flex-col items-center p-6 rounded-3xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl hover:border-amber-500/80 transition-all duration-300">
                <Zap className="w-8 h-8 text-amber-400 mb-3" aria-hidden="true" />
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300">Automação</h3>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;