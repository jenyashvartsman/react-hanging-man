import "./Keyboard.css";

function Keyboard({ guessedChars, hangingManStep, enterChar }) {
  return (
    <div className="keyboard">
      {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((char) => (
        <button
          className="keyboard__button"
          key={char}
          disabled={hangingManStep === 10 || guessedChars.includes(char)}
          onClick={() => enterChar(char)}
        >
          {char}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
