import React from 'react';
import { Clock, TrendingUp, Smile, Lock } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-brand-600" />,
      text: "Mais tempo livre para o dono do negócio focar no crescimento."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-600" />,
      text: "Atendimento mais rápido, organizado e profissional."
    },
    {
      icon: <Lock className="w-6 h-6 text-brand-600" />,
      text: "Maior credibilidade e confiança perante seus clientes."
    },
    {
      icon: <Smile className="w-6 h-6 text-brand-600" />,
      text: "Funcionamento 24/7: Seu negócio não para quando você dorme."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Benefícios reais para o seu dia a dia</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  {item.icon}
                </div>
                <p className="text-slate-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;