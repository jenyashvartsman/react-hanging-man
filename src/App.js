import "./App.css";
import HangingMan from "./components/hanging-man/HangingMan";
import Keyboard from "./components/keyboard/Keyboard";
import Word from "./components/word/Word";

function App() {
  return (
    <>
      <HangingMan />
      <Word />
      <Keyboard />
    </>
  );
}

export default App;
