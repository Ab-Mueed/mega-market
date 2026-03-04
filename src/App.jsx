import Header from './components/Header';
import heroImage from './assets/images/hero-img.png';
import  "./App.css";

function App() {
  return (
    <div>
      <Header />
      <img src={heroImage} className='hero-img'/>
    </div>
  );
}

export default App;
