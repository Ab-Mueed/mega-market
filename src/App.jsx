import "./App.css";
import Header from "./components/Header";
import heroImage from "./assets/images/hero-img.png";
import Timer from "./components/Timer";
import Brands from "./components/Brands";
import Packages from "./components/Packages";
import Sale from "./components/Sale";
import PaymentFooter from "./components/PaymentFooter";

function App() {
  return (
    <div>
      <Header />
      <img src={heroImage} className="hero-img" />
      <div className="timer-wrapper">
        <Timer />
      </div>
      <Brands />
      <Sale/>
      <Packages />
      <PaymentFooter/>
    </div>
  );
}

export default App;
