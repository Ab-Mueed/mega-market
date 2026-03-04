import "./App.css";
import Header from "./components/Header";
import heroImage from "./assets/images/hero-img.png";
import Timer from "./components/Timer";
import Brands from "./components/Brands"

function App() {
  return (
    <div>
      <Header />
      <img src={heroImage} className="hero-img" />
      <div className="timer-wrapper">
        <Timer />
      </div>
      <Brands/>
    </div>
  );
}

export default App;
