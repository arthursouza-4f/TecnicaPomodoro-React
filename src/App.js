import logo from "./logo.svg";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./App.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="text">Acabou.</div>;
  }

  if (remainingTime >= 60) {
    remainingTime = (remainingTime / 60) | 0;
    return (
      <div className="timer">
        <div className="text">Faltam</div>
        <div className="value">{remainingTime}</div>
        <div className="text">Minutos</div>
      </div>
    );
  }

  if (remainingTime < 60) {
    return (
      <div className="timer">
        <div className="text">Faltam</div>
        <div className="value">{remainingTime}</div>
        <div className="text">Segundos</div>
      </div>
    );
  }
};

function App() {
  return (
    <>
      <div className="container">
        <div className="timer-wrapper">
          <CountdownCircleTimer
            isPlaying
            duration={500}
            colors={[["#FFa500", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
            onComplete={() => [true, 1000]}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
      </div>
    </>
  );
}

export default App;
