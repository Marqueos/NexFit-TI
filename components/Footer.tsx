import React from 'react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10" role="contentinfo">
      <div className="container mx-auto px-4">
        
        {/* Final CTA Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Chega de perder tempo com tarefas manuais
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Tenha um site profissional e atendimento automatizado trabalhando pelo seu negócio hoje mesmo.
          </p>
          <Button text="Começar agora pelo WhatsApp" variant="primary" icon={true} className="!text-lg !px-8 !py-4" />
        </div>

        <div className="border-t border-slate-800 pt-12 flex flex-col items-center text-center">
          <div>
            <p className="text-2xl font-bold text-white mb-2">NexFit TI</p>
            <p className="text-sm text-slate-500 max-w-xs">
              Seu mecanismo para a solução naquilo que é demorado ou repetitivo.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 text-xs text-slate-600">
          &copy; {new Date().getFullYear()} NexFit TI. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;