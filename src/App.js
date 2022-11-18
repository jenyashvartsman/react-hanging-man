import { useState } from "react";
import "./App.css";
import HangingMan from "./components/HangingMan";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Word from "./components/Word";
import words from "./words/words.json";

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
    .toUpperCase()
    .split("");
}

function getGuessdWord(length) {
  return Array.from({ length });
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord());
  const [guessedWord, setGuessedWord] = useState(
    getGuessdWord(wordToGuess.length)
  );
  const [guessedChars, setGuessedChars] = useState([]);
  const [hangingManStep, setHangingManStep] = useState(0);

  function enterChar(charEntered) {
    // update word to guess
    wordToGuess.forEach((char, index) => {
      if (charEntered === char) {
        setGuessedWord((prev) => {
          prev[index] = char;
          return [...prev];
        });
      }
    });

    if (!wordToGuess.includes(charEntered)) {
      setHangingManStep((prev) => prev + 1);
    }

    setGuessedChars((prev) => [...prev, charEntered]);
  }

  function newGame() {
    setWordToGuess(getWord());
    setGuessedWord(getGuessdWord(wordToGuess.length));
    setGuessedChars([]);
    setHangingManStep(0);
  }

  return (
    <>
      <Header
        guessedWord={guessedWord}
        hangingManStep={hangingManStep}
        newGame={newGame}
      />
      <div className="container">
        <HangingMan hangingManStep={hangingManStep} />
        <Word guessedWord={guessedWord} />
        <Keyboard
          guessedChars={guessedChars}
          hangingManStep={hangingManStep}
          enterChar={enterChar}
        />
      </div>
    </>
  );
}

export default App;
