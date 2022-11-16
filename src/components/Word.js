import "./Word.css";

function Word(props) {
  return (
    <div className="word">
      {props.word.split("").map((char, i) => (
        <div key={i} className="word__char">
          {char}
        </div>
      ))}
    </div>
  );
}

export default Word;
