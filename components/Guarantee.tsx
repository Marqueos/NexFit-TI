import React from 'react';
import { ShieldCheck, Gift } from 'lucide-react';
import Button from './Button';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Gift className="w-8 h-8 text-accent-400" />
                <h3 className="text-2xl font-bold text-accent-400">Bônus Exclusivo</h3>
              </div>
              <h4 className="text-xl font-semibold">Estrutura de Desenvolvimento Gratuita</h4>
              <p className="text-slate-300 leading-relaxed">
                Antes de fecharmos o contrato, eu desenvolvo um <strong>protótipo gratuito</strong>. Você visualiza a solução (seja o site ou o fluxo do agente de IA) antes de investir. Sem risco.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-8 h-8 text-brand-400" />
                <h3 className="text-2xl font-bold text-brand-400">Garantia Total</h3>
              </div>
              <h4 className="text-xl font-semibold">Ajustes Ilimitados por 7 Dias</h4>
              <p className="text-slate-300 leading-relaxed">
                Depois da entrega, você não fica sozinho. Durante 7 dias, fazemos <strong>ajustes finos ilimitados</strong> para garantir que tudo funcione perfeitamente na sua rotina real.
              </p>
            </div>

          </div>

          <div className="mt-12 text-center">
             <Button text="Quero ver como isso funciona na minha empresa" variant="primary" className="!text-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;