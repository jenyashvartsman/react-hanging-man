import "./Word.css";

function Word({ guessedWord }) {
  return (
    <div className="word">
      {guessedWord.map((char, i) => (
        <div key={i} className="word__char">
          {char}
        </div>
      ))}
    </div>
  );
}

export default Word;
