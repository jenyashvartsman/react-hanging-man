import { useState } from "react";
import "./App.css";
import HangingMan from "./components/HangingMan";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Word from "./components/Word";
import words from "./words/words.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(getRandomWord());
  const [guessedWord, setGuessedWord] = useState(getRandomWordInitGuess());
  const [guessedChars, setGuessedChars] = useState([]);
  const [hangingManStep, setHangingManStep] = useState(0);

  // generate random word
  function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)]
      .toUpperCase()
      .split("");
  }

  // init user guess
  function getRandomWordInitGuess() {
    return Array.from({ length: wordToGuess.length }, () => undefined);
  }

  // user entered char
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

    // update steps
    if (!wordToGuess.includes(charEntered)) {
      setHangingManStep((prev) => prev + 1);
    }

    // used chars
    setGuessedChars((prev) => [...prev, charEntered]);
  }

  // create new game
  function newGame() {
    setWordToGuess(getRandomWord());
    setGuessedWord(getRandomWordInitGuess());
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
      <main className="container">
        <HangingMan hangingManStep={hangingManStep} />
        <Word guessedWord={guessedWord} />
        <Keyboard
          guessedChars={guessedChars}
          hangingManStep={hangingManStep}
          enterChar={enterChar}
        />
      </main>
    </>
  );
}

export default App;
