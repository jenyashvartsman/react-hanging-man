import "./HangingMan.css";

function HangingMan({ hangingManStep }) {
  function isLineVisible(index) {
    return hangingManStep > index ? "active" : "";
  }

  return (
    <div className="hanging-man">
      <div className="pole">
        <div className={"line pole__base " + isLineVisible(0)}></div>
        <div className={"line pole__pole " + isLineVisible(1)}></div>
        <div className={"line pole__arch " + isLineVisible(2)}></div>
        <div className={"line pole__rope " + isLineVisible(3)}></div>
      </div>

      <div className="person">
        <div className={"line person__head " + isLineVisible(4)}></div>
        <div className={"line person__body " + isLineVisible(5)}></div>
        <div className={"line person__hand-left " + isLineVisible(6)}></div>
        <div className={"line person__hand-right " + isLineVisible(7)}></div>
        <div className={"line person__leg-left " + isLineVisible(8)}></div>
        <div className={"line person__leg-right " + isLineVisible(9)}></div>
      </div>
    </div>
  );
}

export default HangingMan;
