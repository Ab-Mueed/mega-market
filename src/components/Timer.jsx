import { TIMER_CONFIG } from '../data/constants';
import '../styles/Timer.css';

function Timer({ label, variant = "default" }) {
  const timerLabel = label || TIMER_CONFIG.label;

  return (
    <div className={`timer timer--${variant}`}>
      <p className="timer-label">{timerLabel}</p>
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
