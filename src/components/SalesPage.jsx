import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SalesPage = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({});

  // Contagem regressiva até 11 de Julho de 2025 às 20h
  useEffect(() => {
    const targetDate = new Date('2025-07-11T20:00:00-03:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToCapture = () => {
    navigate('/captura');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background tecnológico */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-yellow-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Circuitos animados */}
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="cyan" strokeWidth="0.5" opacity="0.3"/>
                <circle cx="10" cy="10" r="2" fill="cyan" opacity="0.5"/>
                <circle cx="90" cy="90" r="2" fill="yellow" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
              MONSTROS DO REPARO
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-yellow-400 mx-auto"></div>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-cyan-400">🚀 "O Segredo Para Trocar Qualquer Conector de Celular</span>
            <br />
            <span className="text-white">Sem Medo, Sem Máquinas Caras e Sem Queimar a Placa —</span>
            <br />
            <span className="text-yellow-400">Mesmo Que Você Ache Solda Um Pesadelo!"</span>
          </h2>

          <div className="text-lg md:text-xl mb-8 space-y-4">
            <p className="text-cyan-300">
              💥 Domine a técnica mais temida da assistência, elimine retrabalho, aumente seus lucros e nunca mais perca dinheiro por não saber trocar conectores!
            </p>
            <p className="text-white">
              👉 Webinário prático com quem tem mais de 15 anos de experiência e já formou mais de 20 mil técnicos no Brasil.
            </p>
            <p className="text-yellow-300">
              🔥 + Bônus: Acesso aos meus fornecedores, mini curso de importação direta da China e grupo VIP de suporte.
            </p>
          </div>

          {/* Contagem Regressiva */}
          <div className="bg-gradient-to-r from-cyan-900/50 to-yellow-900/50 backdrop-blur-sm rounded-lg p-6 mb-8 border border-cyan-400/30">
            <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">
              ⏰ WORKSHOP AO VIVO EM:
            </h3>
            <div className="flex justify-center space-x-4 text-center">
              <div className="bg-black/50 rounded-lg p-3 border border-cyan-400/50">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">{timeLeft.days || 0}</div>
                <div className="text-sm text-gray-300">DIAS</div>
              </div>
              <div className="bg-black/50 rounded-lg p-3 border border-cyan-400/50">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">{timeLeft.hours || 0}</div>
                <div className="text-sm text-gray-300">HORAS</div>
              </div>
              <div className="bg-black/50 rounded-lg p-3 border border-cyan-400/50">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">{timeLeft.minutes || 0}</div>
                <div className="text-sm text-gray-300">MIN</div>
              </div>
              <div className="bg-black/50 rounded-lg p-3 border border-cyan-400/50">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">{timeLeft.seconds || 0}</div>
                <div className="text-sm text-gray-300">SEG</div>
              </div>
            </div>
            <p className="text-cyan-300 mt-4 text-lg">
              📅 11 de Julho de 2025 • 🕐 20:00h (Horário de Brasília)
            </p>
          </div>

          {/* CTA Principal */}
          <button 
            onClick={scrollToCapture}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25"
          >
            🎯 QUERO MINHA VAGA GRATUITA
          </button>
        </div>
      </section>

      {/* Seção de Storytelling */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-400">
            🎯 A História Por Trás do Método
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-900/30 to-yellow-900/30 rounded-lg p-6 border border-cyan-400/30">
                <div className="aspect-video bg-black rounded-lg flex items-center justify-center border border-cyan-400/50">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎥</div>
                    <p className="text-cyan-300">Vídeo de Storytelling</p>
                    <p className="text-sm text-gray-400 mt-2">Sua jornada de 15+ anos no reparo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bancada de Reparo */}
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-900/30 to-cyan-900/30 rounded-lg p-6 border border-yellow-400/30">
                <div className="aspect-video bg-black rounded-lg flex items-center justify-center border border-yellow-400/50">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🔧</div>
                    <p className="text-yellow-300">Bancada Profissional</p>
                    <p className="text-sm text-gray-400 mt-2">Mais de 15 anos de experiência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É Este Workshop */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-400">
            Para Quem É Este Workshop?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-900/20 to-transparent rounded-lg p-6 border border-cyan-400/30 text-center">
              <div className="text-4xl mb-4 text-yellow-400">🎯</div>
              <h3 className="text-xl font-bold mb-4 text-cyan-300">Técnicos Cansados de Retrabalho</h3>
              <p className="text-gray-300">Que querem fazer o serviço certo na primeira vez</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-900/20 to-transparent rounded-lg p-6 border border-yellow-400/30 text-center">
              <div className="text-4xl mb-4 text-cyan-400">🛡️</div>
              <h3 className="text-xl font-bold mb-4 text-yellow-300">Quem Quer Padrão e Blindagem</h3>
              <p className="text-gray-300">Serviços com qualidade profissional e segurança</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-900/20 to-transparent rounded-lg p-6 border border-cyan-400/30 text-center">
              <div className="text-4xl mb-4 text-yellow-400">⚡</div>
              <h3 className="text-xl font-bold mb-4 text-cyan-300">Quem Quer Aumentar o Faturamento</h3>
              <p className="text-gray-300">Melhorar técnica e ganhar mais com cada reparo</p>
            </div>
          </div>
        </div>
      </section>

      {/* O Que Você Vai Aprender */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🔧</div>
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              O Que Você Vai Aprender
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-cyan-400">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-cyan-300 mb-2">Técnica de Remoção Segura</h3>
                  <p className="text-gray-300">Como remover conectores sem arrancar trilhas ou danificar a placa</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-yellow-400">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-300 mb-2">Temperatura Ideal</h3>
                  <p className="text-gray-300">Configurações exatas de ferro e estação para cada tipo de conector</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-cyan-400">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-cyan-300 mb-2">Materiais Corretos</h3>
                  <p className="text-gray-300">Quando usar fio de estanho, pasta de solda e resina condutiva</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-yellow-400">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-300 mb-2">Alinhamento Perfeito</h3>
                  <p className="text-gray-300">Técnicas para fixar e alinhar conectores com precisão</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-cyan-400">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-cyan-300 mb-2">Proteção UV</h3>
                  <p className="text-gray-300">Quando e como usar máscara UV para proteção duradoura</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-yellow-400">✅</div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-300 mb-2">Testes e Validação</h3>
                  <p className="text-gray-300">Como testar e garantir que o reparo está perfeito</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">
            🎁 Bônus Exclusivos
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-yellow-900/30 to-cyan-900/30 rounded-lg p-6 border border-yellow-400/30 text-center">
              <div className="text-3xl mb-4">🏪</div>
              <h3 className="text-lg font-bold text-yellow-300 mb-2">Fornecedores VIP</h3>
              <p className="text-sm text-gray-300">Acesso aos meus fornecedores com preço de atacado</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-900/30 to-yellow-900/30 rounded-lg p-6 border border-cyan-400/30 text-center">
              <div className="text-3xl mb-4">🚢</div>
              <h3 className="text-lg font-bold text-cyan-300 mb-2">Importação Direta</h3>
              <p className="text-sm text-gray-300">Mini curso de importação da China</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-900/30 to-cyan-900/30 rounded-lg p-6 border border-yellow-400/30 text-center">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-lg font-bold text-yellow-300 mb-2">Scripts Prontos</h3>
              <p className="text-sm text-gray-300">Scripts de atendimento específicos para conectores</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-900/30 to-yellow-900/30 rounded-lg p-6 border border-cyan-400/30 text-center">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-lg font-bold text-cyan-300 mb-2">Grupo VIP</h3>
              <p className="text-sm text-gray-300">Acesso ao grupo fechado dos Monstros do Reparo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valor e Urgência */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400">
            💰 Quanto Vale Esse Conhecimento?
          </h2>
          
          <div className="bg-gradient-to-br from-yellow-900/30 to-cyan-900/30 rounded-lg p-8 border border-yellow-400/30 mb-8">
            <p className="text-xl md:text-2xl text-white mb-6">
              Um único serviço de troca de conector pode custar entre <span className="text-yellow-400 font-bold">R$ 80 a R$ 200</span>
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Imagine quantos clientes você perdeu por não saber fazer esse reparo...
            </p>
            <div className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
              GRATUITO
            </div>
            <p className="text-xl text-cyan-300">
              Por tempo limitado - Apenas para os primeiros inscritos
            </p>
          </div>
          
          <button 
            onClick={scrollToCapture}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25"
          >
            🚀 GARANTIR MINHA VAGA AGORA
          </button>
        </div>
      </section>

      {/* Quebra de Objeções */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-400">
            ❓ Dúvidas Frequentes
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-cyan-900/20 to-transparent rounded-lg p-6 border border-cyan-400/30">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                "E se eu não tiver as ferramentas certas?"
              </h3>
              <p className="text-gray-300">
                Vou te mostrar exatamente quais ferramentas usar e onde conseguir com o melhor preço. Muitas você já deve ter na sua bancada!
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-900/20 to-transparent rounded-lg p-6 border border-yellow-400/30">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">
                "E se eu não conseguir acompanhar ao vivo?"
              </h3>
              <p className="text-gray-300">
                Sem problemas! Você receberá acesso à gravação completa para assistir quantas vezes quiser, no seu ritmo.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-900/20 to-transparent rounded-lg p-6 border border-cyan-400/30">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                "Isso funciona para todos os tipos de conectores?"
              </h3>
              <p className="text-gray-300">
                Sim! O método funciona para USB-C, Lightning, Micro USB e outros conectores. É uma técnica universal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400">
            🛡️ Garantia Total
          </h2>
          
          <div className="bg-gradient-to-br from-cyan-900/30 to-yellow-900/30 rounded-lg p-8 border border-cyan-400/30">
            <div className="text-6xl mb-6">🏆</div>
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">
              Garantia de Satisfação
            </h3>
            <p className="text-lg text-white mb-6">
              Se após o workshop você não se sentir confiante para trocar conectores, 
              eu te dou suporte pessoal até você dominar a técnica.
            </p>
            <p className="text-xl font-bold text-yellow-400">
              Sua satisfação é garantida!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400">
            🚀 Última Chance!
          </h2>
          
          <p className="text-xl text-white mb-8">
            As vagas são limitadas e já temos uma fila de espera. 
            Não perca a oportunidade de dominar a técnica mais lucrativa da assistência técnica.
          </p>
          
          <button 
            onClick={scrollToCapture}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-6 px-12 rounded-lg text-2xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25 mb-8"
          >
            🎯 QUERO SER UM MONSTRO DO REPARO
          </button>
          
          <p className="text-sm text-gray-400">
            * Workshop 100% gratuito • Vagas limitadas • Certificado de participação
          </p>
        </div>
      </section>

      {/* Botão Fixo Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/90 backdrop-blur-sm border-t border-cyan-400/30 md:hidden z-50">
        <button 
          onClick={scrollToCapture}
          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300"
        >
          🎯 GARANTIR VAGA GRATUITA
        </button>
      </div>
    </div>
  );
};

export default SalesPage;

