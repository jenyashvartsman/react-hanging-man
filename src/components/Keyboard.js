import "./Keyboard.css";

function Keyboard() {
  return (
    <div className="keyboard">
      {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((char) => (
        <button className="keyboard__button" key={char}>
          {char}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
