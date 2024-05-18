import React, { useState, useEffect, ChangeEvent } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const quizQuestions: Question[] = [
  {
    question: "Qual é o maior planeta do nosso sistema solar?",
    options: ["Terra", "Marte", "Júpiter", "Saturno"],
    answer: "Júpiter",
  },
  {
    question: "Quantos planetas existem no nosso sistema solar?",
    options: ["7", "8", "9", "10"],
    answer: "8",
  },
  {
    question: "Qual é a estrela mais próxima da Terra?",
    options: ["Sirius", "Alpha Centauri", "Sol", "Betelgeuse"],
    answer: "Sol",
  },
  {
    question: "Quem foi o primeiro homem a pisar na Lua?",
    options: [
      "Yuri Gagarin",
      "Buzz Aldrin",
      "Neil Armstrong",
      "Michael Collins",
    ],
    answer: "Neil Armstrong",
  },
  {
    question: "Qual planeta é conhecido como o Planeta Vermelho?",
    options: ["Vênus", "Saturno", "Marte", "Júpiter"],
    answer: "Marte",
  },
  {
    question: "Qual é o nome do maior satélite natural da Terra?",
    options: ["Luna", "Fobos", "Deimos", "Europa"],
    answer: "Luna",
  },
  {
    question: "Qual planeta tem um sistema de anéis proeminente?",
    options: ["Mercúrio", "Saturno", "Netuno", "Urano"],
    answer: "Saturno",
  },
  {
    question: "Qual é o nome da galáxia em que vivemos?",
    options: ["Andrômeda", "Via Láctea", "Sombrero", "Triangulum"],
    answer: "Via Láctea",
  },
];

const getRandomQuestions = (
  questions: Question[],
  numQuestions: number,
): Question[] => {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numQuestions);
};

const Quiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [numQuestions, setNumQuestions] = useState<number>(5);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);

  useEffect(() => {
    if (quizStarted) {
      setQuestions(getRandomQuestions(quizQuestions, numQuestions));
    }
  }, [quizStarted, numQuestions]);

  const handleOptionClick = (option: string): void => {
    const nextStep = currentStep + 1;
    setSelectedOptions([...selectedOptions, option]);

    if (nextStep < questions.length) {
      setCurrentStep(nextStep);
    } else {
      setShowResults(true);
    }
  };

  const handleRestartQuiz = (): void => {
    setCurrentStep(0);
    setSelectedOptions([]);
    setShowResults(false);
    setQuizStarted(false);
  };

  const startQuiz = (): void => {
    setQuizStarted(true);
  };

  const handleNumQuestionsChange = (
    e: ChangeEvent<HTMLSelectElement>,
  ): void => {
    setNumQuestions(Number(e.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center py-28 relative max-w-screen ">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      {!quizStarted ? (
        <div className="w-full max-w-md p-8  shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Selecione a quantidade de perguntas
          </h2>
          <select
            value={numQuestions}
            onChange={handleNumQuestionsChange}
            className="w-full p-2 mb-4 border rounded"
          >
            {[...Array(quizQuestions.length)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          <button
            onClick={startQuiz}
            className="w-full p-2 bg-blue-500  rounded hover:bg-blue-700 transition"
          >
            Iniciar Quiz
          </button>
        </div>
      ) : !showResults ? (
        questions.length > 0 && (
          <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-black mb-4">
              {questions[currentStep].question}
            </h2>
            <div className="space-y-2">
              {questions[currentStep].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )
      ) : (
        <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg text-black">
          <h2 className="text-2xl font-semibold mb-4">Resultados</h2>
          <ul className="space-y-4">
            {questions.map((question, index) => (
              <li key={index}>
                <h3 className="text-lg font-medium">{question.question}</h3>
                <p
                  className={`p-2 rounded ${selectedOptions[index] === question.answer ? "bg-green-200" : "bg-red-200"}`}
                >
                  Sua resposta: {selectedOptions[index]}
                </p>
                {selectedOptions[index] !== question.answer && (
                  <p className="p-2 bg-green-200 rounded">
                    Resposta correta: {question.answer}
                  </p>
                )}
              </li>
            ))}
          </ul>
          <button
            onClick={handleRestartQuiz}
            className="mt-4 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
          >
            Reiniciar Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
