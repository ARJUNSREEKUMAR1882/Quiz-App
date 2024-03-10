import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },

    {
      text: "World War l (WW1) was ended in which year?",
      options: [
        { id: 0, text: " 1917", isCorrect: false },
        { id: 1, text: "1920", isCorrect: false },
        { id: 2, text: "1919", isCorrect: false },
        { id: 3, text: "1918", isCorrect: true },
      ],
    },

    {
      text: "Which is the largest flower in the world?",
      options: [
        { id: 0, text: "Balloon Flower ", isCorrect: false },
        { id: 1, text: "Jasmine ", isCorrect: false },
        { id: 2, text: "Rafflesia ", isCorrect: true },
        { id: 3, text: "Camellia ", isCorrect: false },
      ],
    },

    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },

    {
      text: "India is a federal union comprising twenty-eight states and how many union territories?",
      options: [
        { id: 0, text: "6", isCorrect: false },
        { id: 1, text: "7", isCorrect: false },
        { id: 2, text: "8", isCorrect: true },
        { id: 3, text: "9", isCorrect: false },
      ],
    },

    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },

    {
      text: "Which is the biggest continent in the world?",
      options: [
        { id: 0, text: "North America", isCorrect: false },
        { id: 1, text: "Asia", isCorrect: true },
        { id: 2, text: "Africa", isCorrect: false },
        { id: 3, text: "Australia", isCorrect: false },
      ],
    },
    
    {
      text: "Which is the longest river in the world?",
      options: [
        { id: 0, text: "Great Ganga ", isCorrect: false },
        { id: 1, text: "Nile", isCorrect: true },
        { id: 2, text: "Amazon", isCorrect: false },
        { id: 3, text: "Niger", isCorrect: false },
      ],
    },

    {
      text: "Which is the largest ocean in the world?",
      options: [
        { id: 0, text: "Indian Ocean ", isCorrect: false },
        { id: 1, text: "Pacific Ocean", isCorrect: true },
        { id: 2, text: " Arctic Ocean", isCorrect: false },
        { id: 3, text: "Atlantic Ocean", isCorrect: false },
      ],
    },
    
    {
      text: "Which is India’s first super computer?",
      options: [
        { id: 0, text: "Param8000  ", isCorrect: true },
        { id: 1, text: "param80000 ", isCorrect:false  },
        { id: 2, text: " param800 ", isCorrect: false },
        { id: 3, text: "param8 ", isCorrect: false },
      ],
    },

  ];



  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Quiz-Challenge</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;