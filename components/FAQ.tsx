import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  id: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        id={`faq-btn-${id}`}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${id}`}
        className="flex justify-between items-center w-full py-6 text-left focus:outline-none group focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-slate-800 group-hover:text-brand-600 transition-colors">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-brand-600 shrink-0" aria-hidden="true" />
        ) : (
          <ChevronDown className="text-slate-400 shrink-0" aria-hidden="true" />
        )}
      </button>
      <div 
        id={`faq-content-${id}`}
        role="region"
        aria-labelledby={`faq-btn-${id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
      >
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Qual o prazo médio para entrega de um site?",
      answer: "Para sites de página única (One Page), o prazo médio é de 4 a 8 dias úteis após o recebimento de todo o material (textos e imagens)."
    },
    {
      question: "Quanto custa o serviço?",
      answer: "Os valores variam conforme a complexidade do projeto. Como trabalhamos com soluções personalizadas, preciso entender sua necessidade primeiro. Mas não se preocupe: ofereço um protótipo e orçamento 100% gratuitos para você avaliar sem compromisso."
    },
    {
      question: "Como funciona o atendimento remoto?",
      answer: "Toda a comunicação é feita via WhatsApp ou videochamada, o que nos permite atender clientes do mundo todo com agilidade. Você acompanha o progresso sem precisar de reuniões presenciais demoradas."
    },
    {
      question: "O que o agente de IA faz e o que não faz?",
      answer: "O agente atende clientes, tira dúvidas frequentes, agenda horários e faz triagem. Ele NÃO substitui o julgamento humano complexo em situações de crise ou consultorias profundas, mas elimina 80% do trabalho repetitivo."
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer: "Após a entrega final, você tem 7 dias corridos para solicitar ajustes ilimitados no escopo contratado (ex: mudar textos, cores, ajustar respostas da IA) sem custo adicional."
    },
    {
      question: "Como é feita a cobrança?",
      answer: "Trabalhamos com pagamentos via transferência, PIX ou cartões internacionais. O pagamento geralmente é dividido em etapas para segurança de ambas as partes."
    }
  ];

  return (
    <section className="py-20 bg-slate-50" aria-labelledby="faq-title">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 id="faq-title" className="text-3xl font-bold text-slate-900 text-center mb-12">Perguntas Frequentes</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 px-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} id={index.toString()} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;