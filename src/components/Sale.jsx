import Timer from './Timer';
import '../styles/Sale.css';

function Sale() {
  return (
    <section className="sale-section">
      <div className="sale-header">
        <div className="getting-started-badge">Getting started is easy</div>
        <h2 className="pick-package-title">PICK YOUR PACKAGE</h2>
      </div>

      <Timer label="SALE TIMER" variant="sale" />

      <div className="entries-banner">
        <div className="entries-text">
          <h3 className="entries-title">2X ENTRIES NOW LIVE</h3>
          <p className="entries-subtitle">On Premium & Elite packages</p>
        </div>
        <div className="packages-left">
          <span className="packages-number">40</span>
          <span className="packages-text">sale packages left</span>
        </div>
      </div>

      <div className="limited-banner">
        <div className="limited-header">
          <span className="limited-title">LIMITED TO 1500 PEOPLE</span>
          <span className="spots-left">200 spots left</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '100%' }}></div>
        </div>
      </div>
    </section>
  );
}

export default Sale;
