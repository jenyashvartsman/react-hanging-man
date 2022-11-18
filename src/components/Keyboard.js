import "./Keyboard.css";

function Keyboard({ guessedChars, hangingManStep, enterChar }) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div className="card keyboard">
      {letters.split("").map((char) => (
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
