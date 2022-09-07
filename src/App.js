import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Bottom from './components/Bottom';
import bg from './images/background.jpg'
import PhoneHeader from './components/PhoneHeader';
import {useState,useEffect} from 'react'

function App() {
  const [menu,toggleMenu] = useState(false)
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = menu ? 'hidden' : 'auto';
  }, [menu])
  return (
    <div className="App">
      <div className="background">
        <img src={bg} alt="background" />
      </div>
      <PhoneHeader menu={menu} toggleMenu={toggleMenu}/>
      <Header />
      <Hero menu={menu}/>
      <Footer />
      <Bottom />
    </div>
  );
}

export default App;
