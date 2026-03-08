import { DISCOUNT_SECTION, BRANDS } from "../data/constants";
import "../styles/Brands.css";
import Chevron from "./Chevron";

function Brands() {
  return (
    <>
      <section className="brands-section">
        <h2 className="brands-title">{DISCOUNT_SECTION.title}</h2>
        <p className="brands-subtitle">{DISCOUNT_SECTION.subtitle}</p>

        <div className="brands-container">
          {BRANDS.map((brand, index) => (
            <img
              key={index}
              src={brand.image}
              alt={brand.alt}
              className="brand-item"
            />
          ))}
        </div>

        <button className="brands-button">See All Partnered Brands</button>
        <Chevron className="chevron" />
      </section>
    </>
  );
}

export default Brands;
