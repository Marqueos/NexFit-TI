import React from 'react';
import { Terminal, ArrowRight } from 'lucide-react';

const SloganBar: React.FC = () => {
  return (
    <section className="relative py-16 bg-slate-900 border-y border-slate-800 overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_10s_infinite_linear]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 border border-slate-700 text-brand-400 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                <Terminal className="w-6 h-6" />
            </div>

            <h2 className="text-2xl md:text-4xl font-light text-slate-300 tracking-tight leading-snug">
                O que acontece quando <strong className="text-white font-semibold">tecnologia</strong> e <strong className="text-white font-semibold">estratégia</strong> <br className="hidden md:block" />falam a mesma língua? 
                {/* Removed bg-clip-text to ensure visibility. Used solid color with heavy glow instead. Removed animate-pulse. */}
                <span className="block md:inline mt-4 md:mt-0 md:ml-4 text-4xl md:text-5xl font-bold text-brand-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]">
                Resultados!
                </span>
            </h2>
          </div>

          <p className="mt-8 text-slate-400 flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
            Não acredita? <span className="text-green-400 font-bold border-b border-green-400/30 group-hover:border-green-400">Teste sem custo.</span> Desenvolvemos o protótipo da sua ideia de graça.
            <ArrowRight className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" />
          </p>

        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"></div>
    </section>
  );
};

export default SloganBar;