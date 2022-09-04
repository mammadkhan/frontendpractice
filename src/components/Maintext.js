import '../styles/maintext.css';
import AnimatedText from 'react-animated-text-content';
import { CSSTransition } from 'react-transition-group';
import {useState,useEffect} from 'react'

function Maintext() {
  
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
  },[])

  return (
    <div className="main_text">
        <h1 className="main_heading">
          <AnimatedText
            type="words" // animate words or chars
            animation={{
              x: '200px',
              y: '-20px',
              scale: 1.1,
              ease: 'ease-in-out',
            }}
            animationType="blocks"
            interval={0.05}
            duration={0.4}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
          >
            Every hero needs a sidekick. We have two.
          </AnimatedText>
        </h1>
        <CSSTransition in={load} timeout={1000} classNames="paragraph">
          <p className="main_paragraph">
            Create with our award-winning macOS app, share your projects in the browser (on any platform), and take Sketch with you.
          </p>
        </CSSTransition>
    </div>
  )
}

export default Maintext