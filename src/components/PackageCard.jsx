import "./PackageCard.css";
import arrowSVG from "../assets/images/arrow.svg";
import tickSVG from "../assets/images/tick.svg";

function PackageCard({ tier }) {
  const {
    id,
    name,
    badge,
    entries,
    features,
    price,
    buttonText,
    popular,
    bestValue,
  } = tier;

  return (
    <div className={`package-card package-card--${id}`}>
      {(popular || bestValue) && (
        <div className={`package-badge-annotation package-badge-annotation--${popular ? "popular" : "bestvalue"}`}>
          <span className="package-badge-text">{badge}</span>
          <img src={arrowSVG} alt="" className="package-badge-arrow" />
        </div>
      )}

      {/* Card header tab */}
      <div className="package-card-header">
        <span className="package-card-name">{name}</span>
        <span className="package-card-label">PACKAGE</span>
      </div>

      {/* Card body */}
      <div className="package-card-body">
        <h3 className="package-card-entries">{entries}</h3>

        <ul className="package-card-features">
          {features.map((feature, i) => (
            <li key={i} className="package-card-feature">
              <span className="package-card-check" aria-hidden="true">
                <img src={tickSVG} alt="" />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <hr className="package-card-divider" />

        <div className="package-card-pricing">
          <span className="package-card-price">{price}</span>
          <span className="package-card-price-note">ONCE ONLY PAYMENT</span>
        </div>

        <button className={`package-card-button package-card-button--${id}`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default PackageCard;
