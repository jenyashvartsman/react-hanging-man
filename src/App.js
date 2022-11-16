import { useState } from "react";
import "./App.css";
import HangingMan from "./components/HangingMan";
import Keyboard from "./components/Keyboard";
import Word from "./components/Word";
import words from "./words/words.json";

function App() {
  const [word, setWord] = useState(getWord());

  function getWord() {
    const i = Math.floor(Math.random() * words.length);
    return words[i];
  }

  return (
    <div className="container">
      <HangingMan />
      <Word word={word} />
      <Keyboard />
    </div>
  );
}

export default App;
