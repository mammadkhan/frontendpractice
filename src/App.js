import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Bottom from './components/Bottom';
import bg from './images/background.jpg'
import PhoneHeader from './components/PhoneHeader';


function App() {
  return (
    <div className="App">
      <div className="background">
        <img src={bg} alt="background" />
      </div>
      <PhoneHeader />
      <Header />
      <Hero />
      <Footer />
      <Bottom />
    </div>
  );
}

export default App;
