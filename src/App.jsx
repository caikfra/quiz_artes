import React, { useState } from 'react';
import { CheckCircle2, XCircle, Map, Globe2, Award, ArrowRight, Play, RotateCcw } from 'lucide-react';

export default function App() {
  const [gameState, setGameState] = useState('start'); // start, playing, end
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const questions = [
    {
      question: "No início do século XX, o Rio de Janeiro passava por um processo de modernização. Nesse contexto, em qual ambiente surgiram estilos musicais como o chorinho, o samba e o maxixe?",
      options: [
        { text: "Nos grandes salões da elite carioca.", isCorrect: false },
        { text: "Nas escolas de música clássica europeias.", isCorrect: false },
        { text: "Nas periferias da cidade.", isCorrect: true },
        { text: "Nos teatros do centro da cidade.", isCorrect: false }
      ],
      justification: "Foi nesse ambiente, nas periferias, que surgiram o chorinho, o samba e o maxixe."
    },
    {
      question: "Os moradores das periferias do Rio de Janeiro aprenderam a tocar instrumentos que deram origem a novos ritmos. Quais foram alguns desses instrumentos?",
      options: [
        { text: "Cavaquinho, violão, flauta e clarinete.", isCorrect: true },
        { text: "Piano, violino, harpa e violoncelo.", isCorrect: false },
        { text: "Guitarra elétrica, baixo e bateria.", isCorrect: false },
        { text: "Saxofone, trompete, trombone e tuba.", isCorrect: false }
      ],
      justification: "Podemos citar o cavaquinho, o violão, a flauta e o clarinete."
    },
    {
      question: "Qual dos artistas abaixo NÃO é citado como um músico que surgiu no cenário do início do século XX ou da era do rádio no Brasil?",
      options: [
        { text: "Ernesto Nazareth", isCorrect: false },
        { text: "Chiquinha Gonzaga", isCorrect: false },
        { text: "Carmem Miranda", isCorrect: false },
        { text: "Pablo Picasso", isCorrect: true }
      ],
      justification: "Pablo Picasso é um artista da Escola de Paris. Ernesto Nazareth e Chiquinha Gonzaga surgiram no cenário musical brasileiro, e Carmem Miranda é da Era de Ouro do Rádio."
    },
    {
      question: "Emiliano Di Cavalcanti foi um artista brasileiro de grande importância. Qual foi o seu papel de destaque no cenário artístico nacional?",
      options: [
        { text: "Foi o inventor da técnica de fotomontagem.", isCorrect: false },
        { text: "Foi um dos idealizadores e participantes da Semana de Arte Moderna de 1922.", isCorrect: true },
        { text: "Trouxe o Futurismo da Itália para o Brasil.", isCorrect: false },
        { text: "Foi o principal compositor das marchinhas de carnaval.", isCorrect: false }
      ],
      justification: "Emiliano Di Cavalcanti foi um dos idealizadores e participantes da Semana de Arte Moderna de 1922."
    },
    {
      question: "Durante o período em que morou em Paris, Di Cavalcanti teve contato com qual famoso artista internacional que influenciou sua obra?",
      options: [
        { text: "Salvador Dalí", isCorrect: false },
        { text: "René Magritte", isCorrect: false },
        { text: "Pablo Picasso", isCorrect: true },
        { text: "Wassily Kandinsky", isCorrect: false }
      ],
      justification: "Morou na capital francesa e teve contato com alguns artistas da Escola de Paris, entre eles, Pablo Picasso."
    },
    {
      question: "Como Di Cavalcanti costumava representar as mulheres (em especial as mulatas) em suas obras?",
      options: [
        { text: "Como figuras geométricas rígidas e sem cor.", isCorrect: false },
        { text: "Como mulheres sofridas, solitárias e tristes.", isCorrect: false },
        { text: "Como figuras de linhas severas baseadas no cubismo puro.", isCorrect: false },
        { text: "Expressando o que há de ondulante, macio, materno e sensual no corpo feminino.", isCorrect: true }
      ],
      justification: "Elas não são sofridas e solitárias, expressam, plasticamente, o que há de ondulante, de macio, de materno e de sensual no corpo feminino."
    },
    {
      question: "As vanguardas artísticas europeias aconteceram na primeira metade do século XX. Qual era o principal objetivo em comum entre elas?",
      options: [
        { text: "Retomar os valores da arte clássica grega.", isCorrect: false },
        { text: "Combater os ideais clássicos e acadêmicos da arte.", isCorrect: true },
        { text: "Representar a natureza da forma mais realista possível.", isCorrect: false },
        { text: "Criar obras exclusivamente para enfeitar igrejas.", isCorrect: false }
      ],
      justification: "As vanguardas artísticas europeias estavam unidas por um objetivo em comum: combater os ideais clássicos e acadêmicos da arte."
    },
    {
      question: "A palavra 'vanguarda' tem origem francesa (avant-garde) e, no contexto militar, significa 'a guarda que vem à frente de um exército'. Na arte, o que essa palavra simboliza?",
      options: [
        { text: "O caráter conservador da arte.", isCorrect: false },
        { text: "O respeito total às tradições do passado.", isCorrect: false },
        { text: "O caráter inovador desses movimentos artísticos.", isCorrect: true },
        { text: "A ligação da arte com as guerras.", isCorrect: false }
      ],
      justification: "A palavra 'vanguarda' simboliza o caráter inovador desses movimentos."
    },
    {
      question: "Qual vanguarda artística questionava o uso da perspectiva e evidenciava a decomposição e a fragmentação das formas geométricas?",
      options: [
        { text: "Expressionismo", isCorrect: false },
        { text: "Cubismo", isCorrect: true },
        { text: "Dadaísmo", isCorrect: false },
        { text: "Surrealismo", isCorrect: false }
      ],
      justification: "CUBISMO: Questionava o uso da perspectiva e evidenciava a decomposição e a fragmentação das formas geométricas."
    },
    {
      question: "No Cubismo, como os objetos costumavam ser representados na pintura?",
      options: [
        { text: "Vistos de um único ângulo, seguindo a perspectiva renascentista.", isCorrect: false },
        { text: "Como imagens de sonhos, sem nenhuma lógica.", isCorrect: false },
        { text: "Abertos e de frente para o espectador, com todas as partes em um mesmo plano.", isCorrect: true },
        { text: "Em movimento rápido, deixando um rastro de cor.", isCorrect: false }
      ],
      justification: "Todas as partes de um mesmo objeto eram vistas em um mesmo plano, como se estivessem abertos e de frente para o espectador."
    },
    {
      question: "O Futurismo foi impulsionado na Itália. Quais eram os temas mais exaltados por esse movimento?",
      options: [
        { text: "A natureza, o campo e a vida tranquila.", isCorrect: false },
        { text: "O sofrimento humano e a tristeza.", isCorrect: false },
        { text: "A tecnologia, as máquinas, a velocidade e o progresso.", isCorrect: true },
        { text: "A religião, os anjos e os santos.", isCorrect: false }
      ],
      justification: "Apresentava a exaltação da tecnologia, das máquinas, da velocidade e do progresso."
    },
    {
      question: "Como o Futurismo tratava as tradições, valores e instituições do passado?",
      options: [
        { text: "Com muito respeito, tentando copiá-los.", isCorrect: false },
        { text: "Como um movimento radical, rechaçou todas as tradições.", isCorrect: true },
        { text: "Usava o passado apenas para as formas geométricas.", isCorrect: false },
        { text: "Adaptava as tradições para o mundo dos sonhos.", isCorrect: false }
      ],
      justification: "Foi um movimento radical que rechaçou todas as tradições, valores e instituições sempre respeitados."
    },
    {
      question: "Para produzir o efeito de movimento em suas obras, o que a fragmentação futurista tentava criar?",
      options: [
        { text: "Elementos lineares chamados de 'linhas de força'.", isCorrect: true },
        { text: "Figuras perfeitamente redondas.", isCorrect: false },
        { text: "Imagens que lembravam fotografias reais.", isCorrect: false },
        { text: "Espaços totalmente em branco na tela.", isCorrect: false }
      ],
      justification: "A fragmentação futurista tem a meta de criar elementos lineares ('linhas de força') que podem ser seriados para produzir um efeito de movimento."
    },
    {
      question: "Qual vanguarda artística buscava transmitir ao mundo a situação do homem, com seus vícios e horrores, valorizando a subjetividade?",
      options: [
        { text: "Cubismo", isCorrect: false },
        { text: "Futurismo", isCorrect: false },
        { text: "Expressionismo", isCorrect: true },
        { text: "Dadaísmo", isCorrect: false }
      ],
      justification: "Expressionismo: Valorizava a subjetividade e buscava transmitir ao mundo a situação do homem, com seus vícios e horrores."
    },
    {
      question: "Para os surrealistas, a obra de arte NÃO resulta de quê?",
      options: [
        { text: "Das imagens dos sonhos.", isCorrect: false },
        { text: "De pensamentos absurdos e ilógicos.", isCorrect: false },
        { text: "Da supressão da lógica racional.", isCorrect: false },
        { text: "De pensamentos racionais e lógicos do artista.", isCorrect: true }
      ],
      justification: "Para os surrealistas, a obra de arte não resulta de pensamentos racionais e lógicos do artista."
    },
    {
      question: "Como se caracteriza uma pintura surrealista em relação à sua composição?",
      options: [
        { text: "Exclusivamente por formas geométricas puras.", isCorrect: false },
        { text: "Pela combinação de elementos reais e imaginados em cenas fantasiosas.", isCorrect: true },
        { text: "Pela representação exata de uma paisagem vista de uma janela.", isCorrect: false },
        { text: "Pelos borrões de tinta jogados aleatoriamente sem formar figuras.", isCorrect: false }
      ],
      justification: "No Surrealismo há a combinação de elementos reais e imaginados na composição de cenas fantasiosas."
    },
    {
      question: "Quais desses artistas são nomes importantes do Surrealismo?",
      options: [
        { text: "René Magritte e Salvador Dalí.", isCorrect: true },
        { text: "Pablo Picasso e Giacomo Balla.", isCorrect: false },
        { text: "Marcel Duchamp e Wassily Kandinsky.", isCorrect: false },
        { text: "Umberto Boccioni e Paul Klee.", isCorrect: false }
      ],
      justification: "Importantes nomes do Surrealismo: Renne Magrite e Salvador Dali."
    },
    {
      question: "Em qual contexto histórico mundial surgiu o movimento Dadaísta?",
      options: [
        { text: "Durante a Revolução Francesa.", isCorrect: false },
        { text: "No contexto da Primeira Guerra Mundial.", isCorrect: true },
        { text: "Na Guerra Fria.", isCorrect: false },
        { text: "No Descobrimento do Brasil.", isCorrect: false }
      ],
      justification: "No contexto da Primeira Guerra Mundial, surgiu o dadaísmo."
    },
    {
      question: "O Dadaísmo era conhecido por ser um movimento antiartístico e antipoético. Qual era a sua postura em relação à lógica e à ordem?",
      options: [
        { text: "Era a favor das leis da lógica e da perfeição.", isCorrect: false },
        { text: "Buscava a imobilidade do pensamento.", isCorrect: false },
        { text: "Era a favor da liberdade desenfreada do indivíduo, do aleatório e da anarquia contra a ordem.", isCorrect: true },
        { text: "Queria criar regras mais rígidas para os artistas.", isCorrect: false }
      ],
      justification: "O dadaísmo ia contra as leis da lógica, a imobilidade do pensamento e a favor da liberdade desenfreada do indivíduo, da espontaneidade, do aleatório, da anarquia contra a ordem."
    },
    {
      question: "No processo de criação do Dadaísmo, o verbo 'criar' foi substituído por qual outro verbo, especialmente ao fazer colagens?",
      options: [
        { text: "Desenhar", isCorrect: false },
        { text: "Pintar", isCorrect: false },
        { text: "Esculpir", isCorrect: false },
        { text: "Montar", isCorrect: true }
      ],
      justification: "No processo de criação dadaísta o verbo 'criar' foi substituído pelo verbo 'montar'."
    },
    {
      question: "Quem foi um nome muito importante e representativo do Dadaísmo?",
      options: [
        { text: "Ernesto Nazareth", isCorrect: false },
        { text: "Alexander Rodchenko", isCorrect: false },
        { text: "Marcel Duchamp", isCorrect: true },
        { text: "Piet Mondrian", isCorrect: false }
      ],
      justification: "Um importante nome do dadaísmo foi Marcel Duchamp."
    },
    {
      question: "Embora o Dadaísmo e o Surrealismo tenham relação, eles possuem diferenças. Enquanto o Surrealismo usava o inconsciente como ferramenta, o que o Dadaísmo usava para questionar a sociedade?",
      options: [
        { text: "A geometria exata.", isCorrect: false },
        { text: "O absurdo e a incoerência.", isCorrect: true },
        { text: "As cores primárias.", isCorrect: false },
        { text: "A exaltação das máquinas.", isCorrect: false }
      ],
      justification: "Já o movimento dadá usava o absurdo e a incoerência para questionar a sociedade de forma mais ampla."
    },
    {
      question: "O que o Abstracionismo prioriza em suas obras de arte?",
      options: [
        { text: "Formas abstratas em detrimento das figuras que representam a realidade.", isCorrect: true },
        { text: "A representação perfeita do corpo humano.", isCorrect: false },
        { text: "Figuras que retratam fielmente a natureza.", isCorrect: false },
        { text: "Cenas do cotidiano das cidades grandes.", isCorrect: false }
      ],
      justification: "O Abstracionismo é um estilo artístico que prioriza as formas abstratas em detrimento das figuras que representam algo da nossa própria realidade."
    },
    {
      question: "Por não representar a realidade de forma direta, como o Abstracionismo também pode ser chamado?",
      options: [
        { text: "Arte Figurativa", isCorrect: false },
        { text: "Arte Acadêmica", isCorrect: false },
        { text: "Obra 'não representacional'", isCorrect: true },
        { text: "Arte Clássica Renascentista", isCorrect: false }
      ],
      justification: "Dessa forma, podemos dizer que esse tipo de arte é uma obra 'não representacional', ao contrário da arte figurativa."
    },
    {
      question: "Wassily Kandinsky e Paul Klee são artistas que se destacaram em qual vertente da arte?",
      options: [
        { text: "Abstracionismo Geométrico", isCorrect: false },
        { text: "Dadaísmo", isCorrect: false },
        { text: "Futurismo", isCorrect: false },
        { text: "Abstracionismo Expressivo", isCorrect: true }
      ],
      justification: "Abstracionismo expressivo - Principais nomes: Wassily Kandisky e Paul Klee."
    },
    {
      question: "O Abstracionismo Geométrico foi influenciado por quais vanguardas anteriores?",
      options: [
        { text: "Impressionismo e Romantismo.", isCorrect: false },
        { text: "Cubismo e Futurismo.", isCorrect: true },
        { text: "Surrealismo e Dadaísmo.", isCorrect: false },
        { text: "Expressionismo e Arte Acadêmica.", isCorrect: false }
      ],
      justification: "Abstracionismo Geométrico: Influenciada pelo cubismo e futurismo."
    },
    {
      question: "Qual destas é uma característica marcante do Abstracionismo Geométrico?",
      options: [
        { text: "O uso intenso de imagens de sonhos.", isCorrect: false },
        { text: "A valorização da loucura e da fantasia.", isCorrect: false },
        { text: "A racionalidade, organização e uso de formas geométricas.", isCorrect: true },
        { text: "A representação de máquinas em alta velocidade.", isCorrect: false }
      ],
      justification: "Os elementos que caracterizam esse estilo artístico são: Racionalidade, organização e uso de formas geométricas."
    },
    {
      question: "Quais artistas são considerados nomes principais do Abstracionismo Geométrico?",
      options: [
        { text: "Alexander Rodchenko e Piet Mondrian.", isCorrect: true },
        { text: "Salvador Dalí e René Magritte.", isCorrect: false },
        { text: "Pablo Picasso e Di Cavalcanti.", isCorrect: false },
        { text: "Marcel Duchamp e Umberto Boccioni.", isCorrect: false }
      ],
      justification: "Principais nomes: Alexander Rodchenko e Piet Mondrian."
    },
    {
      question: "O que é a técnica de fotomontagem?",
      options: [
        { text: "Pintar paisagens em cima de fotografias antigas.", isCorrect: false },
        { text: "Técnica feita a partir do recorte de diversas fotografias para compor uma nova imagem.", isCorrect: true },
        { text: "Uma forma de desenhar usando apenas a luz do sol.", isCorrect: false },
        { text: "A revelação de fotos usando produtos químicos diferentes.", isCorrect: false }
      ],
      justification: "Fotomontagem: Técnica feita a partir do recorte de diversas fotografias para compor uma nova imagem."
    },
    {
      question: "Qual artista citada no material é um nome importante para a técnica de fotomontagem?",
      options: [
        { text: "Chiquinha Gonzaga", isCorrect: false },
        { text: "Carmem Miranda", isCorrect: false },
        { text: "Natalia Goncharova", isCorrect: false },
        { text: "Grete Stern", isCorrect: true }
      ],
      justification: "Um nome importante dessa técnica: Grete Stern."
    }
  ];

  const handleStart = () => {
    setGameState('playing');
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const handleAnswer = (index, correct) => {
    if (selectedAnswer !== null) return; // Prevent multiple clicks
    setSelectedAnswer(index);
    setIsCorrect(correct);
    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setGameState('end');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      
      {/* START SCREEN */}
      {gameState === 'start' && (
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-lg w-full text-center border-t-8 border-purple-500">
          <Globe2 className="w-20 h-20 text-purple-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4 text-slate-800">Quiz de Arte e História</h1>
          <p className="text-slate-600 mb-8 text-lg">
            Teste seus conhecimentos sobre Música Moderna no Brasil, Vanguardas Europeias e Abstracionismo!
          </p>
          <button 
            onClick={handleStart}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 text-lg"
          >
            <Play fill="currentColor" />
            Começar Quiz!
          </button>
        </div>
      )}

      {/* PLAYING SCREEN */}
      {gameState === 'playing' && (
        <div className="bg-white rounded-3xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col h-[90vh] sm:h-auto">
          {/* Header */}
          <div className="bg-purple-600 text-white p-4 sm:p-6 flex justify-between items-center">
            <div className="flex items-center gap-2 font-semibold">
              <Map className="w-5 h-5" />
              Questão {currentQuestion + 1} de {questions.length}
            </div>
            <div className="font-bold bg-white/20 px-4 py-1 rounded-full">
              Acertos: {score}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-200 h-2">
            <div 
              className="bg-green-400 h-2 transition-all duration-500 ease-in-out"
              style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question */}
          <div className="p-6 sm:p-8 flex-1 overflow-y-auto">
            <h2 className="text-xl sm:text-2xl font-bold mb-8 text-slate-800 leading-snug">
              {questions[currentQuestion].question}
            </h2>

            {/* Options */}
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => {
                let buttonStyle = "border-2 border-slate-200 hover:border-purple-400 hover:bg-purple-50 text-slate-700";
                
                if (selectedAnswer !== null) {
                  if (index === selectedAnswer) {
                    buttonStyle = option.isCorrect 
                      ? "border-green-500 bg-green-100 text-green-800" 
                      : "border-red-500 bg-red-100 text-red-800";
                  } else if (option.isCorrect) {
                    buttonStyle = "border-green-500 bg-green-100 text-green-800"; 
                  } else {
                    buttonStyle = "border-slate-200 opacity-50";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index, option.isCorrect)}
                    disabled={selectedAnswer !== null}
                    className={`w-full text-left p-4 rounded-xl font-medium text-base sm:text-lg transition-all flex justify-between items-center ${buttonStyle}`}
                  >
                    <span>{option.text}</span>
                    {selectedAnswer !== null && option.isCorrect && <CheckCircle2 className="text-green-600 min-w-6" />}
                    {selectedAnswer === index && !option.isCorrect && <XCircle className="text-red-600 min-w-6" />}
                  </button>
                )
              })}
            </div>

            {/* Justification Box (Aparece após responder) */}
            {selectedAnswer !== null && (
              <div className="mt-6 p-5 bg-purple-50 border border-purple-200 rounded-xl text-slate-700 animate-in fade-in">
                <p className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                  Justificativa
                </p>
                <p className="leading-relaxed">
                  {questions[currentQuestion].justification}
                </p>
              </div>
            )}
          </div>

          {/* Footer (Next Button) */}
          {selectedAnswer !== null && (
            <div className="p-6 border-t border-slate-100 bg-slate-50 animate-in slide-in-from-bottom-4">
              <button
                onClick={handleNext}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 text-lg shadow-md hover:shadow-lg"
              >
                {currentQuestion < questions.length - 1 ? 'Próxima Questão' : 'Ver Resultado'}
                <ArrowRight />
              </button>
            </div>
          )}
        </div>
      )}

      {/* END SCREEN */}
      {gameState === 'end' && (
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-lg w-full text-center border-t-8 border-green-500">
          <Award className="w-24 h-24 text-green-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-2 text-slate-800">Fim de Jogo!</h1>
          <p className="text-slate-600 text-lg mb-8">Você completou o quiz de Arte e História.</p>
          
          <div className="bg-slate-100 rounded-2xl p-6 mb-8 shadow-inner">
            <p className="text-slate-500 font-medium mb-1">Sua Pontuação</p>
            <p className="text-5xl font-black text-purple-600">
              {score} <span className="text-2xl text-slate-400">/ {questions.length}</span>
            </p>
            <p className="mt-4 text-slate-600 font-medium">
              {score >= 25 ? '🤩 Excelente! Você domina a matéria!' : 
               score >= 15 ? '🙂 Muito bem! Belo desempenho.' : 
               '📚 Bom esforço! Vale a pena revisar o livro e tentar de novo.'}
            </p>
          </div>

          <button 
            onClick={handleStart}
            className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 text-lg"
          >
            <RotateCcw className="w-5 h-5" />
            Jogar Novamente
          </button>
        </div>
      )}

    </div>
  );
}