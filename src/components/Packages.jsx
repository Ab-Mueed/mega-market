import { PRICING_TIERS } from "../data/constants";
import PackageCard from "./PackageCard";
import "../styles/Packages.css";

function Packages() {
  const topCards = PRICING_TIERS.slice(0, 3);
  const bottomCards = PRICING_TIERS.slice(3);

  return (
    <section className="packages-section">
      <div className="packages-row packages-row-top">
        {topCards.map((tier) => (
          <PackageCard key={tier.id} tier={tier} />
        ))}
      </div>

      <div className="packages-row packages-row-bottom">
        {bottomCards.map((tier) => (
          <PackageCard key={tier.id} tier={tier} />
        ))}
      </div>
    </section>
  );
}

export default Packages;
