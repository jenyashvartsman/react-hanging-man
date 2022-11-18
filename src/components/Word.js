import "./Word.css";

function Word({ guessedWord }) {
  return (
    <div className="card word">
      {guessedWord.map((char, i) => (
        <div key={i} className="word__char">
          <span>{char}</span>
        </div>
      ))}
    </div>
  );
}

export default Word;
