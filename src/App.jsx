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
      question: "1. Quais ritmos musicais nasceram nas partes mais pobres (periferias) do Rio de Janeiro no começo do século XX?",
      options: [
        { text: "Ópera e música clássica.", isCorrect: false },
        { text: "Chorinho, samba e maxixe.", isCorrect: true },
        { text: "Rock e pop.", isCorrect: false },
        { text: "Bossa nova e jazz.", isCorrect: false }
      ],
      justification: "O texto diz claramente que nas periferias do Rio de Janeiro surgiram o chorinho, o samba e o maxixe."
    },
    {
      question: "2. Como o pintor Di Cavalcanti retratava as mulheres brasileiras (as mulatas) em suas obras?",
      options: [
        { text: "Como mulheres tristes, solitárias e feias.", isCorrect: false },
        { text: "Como cópias exatas das mulheres europeias.", isCorrect: false },
        { text: "Com muita beleza, maciez e a dignidade das pinturas clássicas antigas.", isCorrect: true },
        { text: "Apenas com formas geométricas misturadas.", isCorrect: false }
      ],
      justification: "O crítico Frederico Morais diz que Di Cavalcanti deu à mulata brasileira a dignidade de uma 'madona renascentista'. O texto também destaca que ele mostrava o lado macio, materno e sensual do corpo feminino, sem ser triste."
    },
    {
      question: "3. O que todos os movimentos de vanguarda na Europa tinham em comum?",
      options: [
        { text: "A vontade de lutar contra a arte tradicional, certinha e clássica.", isCorrect: true },
        { text: "O desejo de pintar apenas igrejas e temas religiosos.", isCorrect: false },
        { text: "A vontade de copiar as obras antigas de forma idêntica.", isCorrect: false },
        { text: "A ideia de que a arte só deveria existir dentro dos museus tradicionais.", isCorrect: false }
      ],
      justification: "Todas as vanguardas da Europa estavam unidas por um objetivo: combater os ideais clássicos e acadêmicos da arte (ou seja, a arte tradicional)."
    },
    {
      question: "4. Qual estilo de arte adorava usar formas geométricas (como cubos e triângulos) e mostrava o mesmo objeto de vários ângulos ao mesmo tempo?",
      options: [
        { text: "Surrealismo.", isCorrect: false },
        { text: "Futurismo.", isCorrect: false },
        { text: "Dadaísmo.", isCorrect: false },
        { text: "Cubismo.", isCorrect: true }
      ],
      justification: "O Cubismo é o movimento que fragmentava as formas geométricas e dizia que um objeto podia ser visto de vários ângulos."
    },
    {
      question: "5. O que o movimento chamado 'Futurismo' mais adorava e elogiava em suas obras?",
      options: [
        { text: "A lentidão, a paz e a natureza intocada.", isCorrect: false },
        { text: "As máquinas, a tecnologia, a velocidade e o progresso.", isCorrect: true },
        { text: "Os sonhos e as ilusões de ótica.", isCorrect: false },
        { text: "As tradições antigas e o passado.", isCorrect: false }
      ],
      justification: "O Futurismo italiano apresentava a exaltação da tecnologia, das máquinas, da velocidade e do progresso."
    },
    {
      question: "6. O Expressionismo era um estilo de arte focado em mostrar o quê?",
      options: [
        { text: "A beleza perfeita e feliz da natureza.", isCorrect: false },
        { text: "Os sentimentos difíceis das pessoas, suas dores e horrores.", isCorrect: true },
        { text: "O futuro brilhante e cheio de tecnologia.", isCorrect: false },
        { text: "Apenas linhas retas e círculos perfeitos.", isCorrect: false }
      ],
      justification: "O Expressionismo buscava valorizar a parte de dentro das pessoas (subjetividade) e transmitir ao mundo a situação do homem, focando em seus vícios e horrores."
    },
    {
      question: "7. Qual estilo de arte se parece muito com os nossos sonhos, misturando coisas absurdas e sem lógica?",
      options: [
        { text: "Surrealismo.", isCorrect: true },
        { text: "Abstracionismo.", isCorrect: false },
        { text: "Cubismo.", isCorrect: false },
        { text: "Futurismo.", isCorrect: false }
      ],
      justification: "O Surrealismo acreditava que a arte vem de pensamentos absurdos e ilógicos, funcionando exatamente como as imagens dos nossos sonhos."
    },
    {
      question: "8. O Dadaísmo foi um movimento muito rebelde e bagunçado. Em vez de criar a arte do zero com perfeição, o que eles gostavam de fazer?",
      options: [
        { text: "Eles gostavam de pintar paisagens bem reais.", isCorrect: false },
        { text: "Eles gostavam de 'montar' as coisas de forma aleatória, usando o acaso.", isCorrect: true },
        { text: "Eles gostavam de fazer grandes esculturas de mármore.", isCorrect: false },
        { text: "Eles gostavam de seguir todas as regras de pintura antigas.", isCorrect: false }
      ],
      justification: "No processo do dadaísmo, a ideia normal de 'criar' foi substituída pelo verbo 'montar', usando coisas ao acaso e de forma aleatória."
    },
    {
      question: "9. O que é a Arte Abstrata (ou Abstracionismo)?",
      options: [
        { text: "Uma arte que tira fotos idênticas da realidade.", isCorrect: false },
        { text: "Uma arte focada em desenhar o corpo humano de forma realista.", isCorrect: false },
        { text: "Uma arte que não tenta representar coisas reais da natureza, focando apenas em formas, linhas e cores.", isCorrect: true },
        { text: "Uma arte feita apenas em preto e branco.", isCorrect: false }
      ],
      justification: "A arte abstrata é o oposto da arte figurativa (que copia a natureza). Ela prioriza formas abstratas e não representa a realidade imediata do nosso mundo."
    },
    {
      question: "10. O que é a técnica de Fotomontagem ensinada no texto?",
      options: [
        { text: "Recortar várias fotografias e juntá-las para criar uma imagem totalmente nova.", isCorrect: true },
        { text: "Pintar um quadro usando tinta a óleo e depois tirar uma foto dele.", isCorrect: false },
        { text: "Quebrar estátuas para colar os pedaços de novo.", isCorrect: false },
        { text: "Revelar fotos antigas em um laboratório escuro.", isCorrect: false }
      ],
      justification: "O documento define Fotomontagem exatamente como a técnica feita a partir do recorte de diversas fotografias para compor (montar) uma nova imagem."
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
    if (selectedAnswer !== null) return; 
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
      
      {/* TELA INICIAL */}
      {gameState === 'start' && (
        <div className="bg-white rounded-[2rem] shadow-lg p-10 max-w-md w-full text-center">
          <Globe2 className="w-20 h-20 text-blue-500 mx-auto mb-6" />
          <h1 className="text-3xl font-extrabold mb-4 text-slate-800 tracking-tight">Quiz de Arte e História</h1>
          <p className="text-slate-500 mb-8 text-lg">
            Teste seus conhecimentos sobre Música Moderna no Brasil, Vanguardas Europeias e Abstracionismo!
          </p>
          <button 
            onClick={handleStart}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 text-lg"
          >
            <Play fill="currentColor" className="w-5 h-5" />
            Começar Quiz!
          </button>
        </div>
      )}

      {/* TELA JOGANDO */}
      {gameState === 'playing' && (
        <div className="bg-white rounded-3xl shadow-lg w-full max-w-2xl overflow-hidden flex flex-col h-[90vh] sm:h-auto">
          
          {/* Header Azul Arredondado */}
          <div className="bg-blue-600 text-white px-6 py-5 flex justify-between items-center rounded-t-3xl">
            <div className="flex items-center gap-2 font-semibold">
              <Map className="w-5 h-5" />
              Questão {currentQuestion + 1} de {questions.length}
            </div>
            <div className="bg-blue-500 px-4 py-1 rounded-full font-bold text-sm">
              Acertos: {score}
            </div>
          </div>

          {/* Barra de Progresso Verde */}
          <div className="w-full bg-slate-100 h-2">
            <div 
              className="bg-green-400 h-2 transition-all duration-500 ease-in-out"
              style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Corpo da Questão */}
          <div className="p-6 sm:p-8 flex-1 overflow-y-auto bg-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-8 text-slate-800 leading-snug">
              {questions[currentQuestion].question}
            </h2>

            {/* Opções */}
            <div className="space-y-4 mb-6">
              {questions[currentQuestion].options.map((option, index) => {
                let buttonStyle = "w-full text-left p-4 rounded-xl font-medium text-base sm:text-lg transition-all flex justify-between items-center border ";
                
                if (selectedAnswer === null) {
                  // Estado normal antes de clicar
                  buttonStyle += "border-transparent text-slate-500 hover:bg-slate-50";
                } else {
                  // Estado após clicar
                  if (index === selectedAnswer) {
                    if (option.isCorrect) {
                      buttonStyle += "bg-green-100 border-green-300 text-green-800"; 
                    } else {
                      buttonStyle += "bg-red-100 border-red-300 text-red-800"; 
                    }
                  } else if (option.isCorrect) {
                    buttonStyle += "bg-green-100 border-green-300 text-green-800"; 
                  } else {
                    buttonStyle += "border-transparent text-slate-400 opacity-50"; 
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index, option.isCorrect)}
                    disabled={selectedAnswer !== null}
                    className={buttonStyle}
                  >
                    <span>{option.text}</span>
                    {selectedAnswer !== null && option.isCorrect && <CheckCircle2 className="text-green-600 min-w-6" />}
                    {selectedAnswer === index && !option.isCorrect && <XCircle className="text-red-600 min-w-6" />}
                  </button>
                )
              })}
            </div>

            {/* Caixa de Justificativa */}
            {selectedAnswer !== null && (
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 animate-in fade-in">
                <p className="font-bold text-slate-800 mb-1">📝 Justificativa</p>
                <p>{questions[currentQuestion].justification}</p>
              </div>
            )}

            {/* Botão Próxima Questão */}
            {selectedAnswer !== null && (
              <button
                onClick={handleNext}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl mt-6 flex items-center justify-center gap-2 transition-transform active:scale-95 text-lg"
              >
                {currentQuestion < questions.length - 1 ? 'Próxima Questão' : 'Ver Resultado'}
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* TELA FINAL (RESULTADOS) */}
      {gameState === 'end' && (
        <div className="bg-white rounded-[2rem] shadow-lg p-10 max-w-md w-full text-center">
          <Award className="w-20 h-20 text-blue-500 mx-auto mb-4" />
          <h1 className="text-3xl font-extrabold mb-2 text-slate-800">Fim de Jogo!</h1>
          <p className="text-slate-500 mb-8">Aqui está o seu desempenho final.</p>
          
          <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
            <p className="text-slate-500 font-medium mb-2">Total de Acertos</p>
            <p className="text-6xl font-black text-blue-600">
              {score} <span className="text-2xl text-slate-400 font-medium">/ {questions.length}</span>
            </p>
            <p className="mt-6 text-slate-600 font-medium text-lg">
              {score >= 8 ? '🤩 Excelente, Rafa! Você domina a matéria!' : 
               score >= 5 ? '🙂 Muito bem! Belo desempenho.' : 
               '📚 Bom esforço! Vale a pena revisar o material e tentar de novo.'}
            </p>
          </div>

          <button 
            onClick={handleStart}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 text-lg"
          >
            <RotateCcw className="w-5 h-5" />
            Jogar Novamente
          </button>
        </div>
      )}

    </div>
  );
}