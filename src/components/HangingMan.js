import "./HangingMan.css";

function HangingMan() {
  return (
    <div className="hanging-man">
      <div className="pole">
        <div className="line pole__base"></div>
        <div className="line pole__pole"></div>
        <div className="line pole__arch"></div>
        <div className="line pole__rope"></div>
      </div>

      <div className="person">
        <div className="line person__head"></div>
        <div className="line person__body"></div>
        <div className="line person__hand-left"></div>
        <div className="line person__hand-right"></div>
        <div className="line person__leg-left"></div>
        <div className="line person__leg-right"></div>
      </div>
    </div>
  );
}

export default HangingMan;
