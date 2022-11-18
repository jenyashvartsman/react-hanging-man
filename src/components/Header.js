import "./Header.css";

function Header({ guessedWord, hangingManStep, newGame }) {
  const isPlaying = hangingManStep < 10 && guessedWord.includes(undefined);
  const isWon = !guessedWord.includes(undefined);

  return (
    <header className="header">
      {isPlaying ? "Play" : isWon ? "Win" : "Game over"}
      {isPlaying ? null : <button onClick={newGame}>Play again</button>}
    </header>
  );
}

export default Header;
