import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Which programming language is used for React?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question: "What is 5 + 3?",
    options: ["5", "8", "10", "15"],
    answer: "8",
  },
];

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="quiz-heading">Quiz</h1>
      {!quizFinished ? (
        <div className="quiz-container p-4 shadow rounded bg-light">
          <h4>{questions[currentQuestion].question}</h4>
          <div className="mt-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`btn btn-outline-primary m-2 ${
                  selectedOption === option ? "active" : ""
                }`}
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="btn btn-success mt-4"
            onClick={handleNextQuestion}
            disabled={!selectedOption}
          >
            {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next"}
          </button>
        </div>
      ) : (
        <div className="quiz-container p-4 shadow rounded bg-light">
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} / {questions.length}</p>
          <button className="btn btn-primary" onClick={() => window.location.reload()}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
