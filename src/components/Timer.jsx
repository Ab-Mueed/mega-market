import { TIMER_CONFIG } from '../data/constants';
import './Timer.css';

function Timer() {
  return (
    <div className="timer">
      <p className="timer-label">{TIMER_CONFIG.label}</p>
      <div className="timer-circles">
        {TIMER_CONFIG.units.map((unit, index) => (
          <div key={index} className="timer-unit-wrapper">
            {index > 0 && <span className="timer-colon">:</span>}
            <div className="timer-unit">
              <div className="timer-circle">
                <span className="timer-value">00</span>
              </div>
              <span className="timer-unit-label">{unit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timer;
