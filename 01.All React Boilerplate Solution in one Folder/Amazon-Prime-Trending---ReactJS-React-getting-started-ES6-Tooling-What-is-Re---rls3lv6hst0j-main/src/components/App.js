import React, {useState, useEffect} from "react";
import '../styles/App.css';

const App = ({slides}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [prevFlag, setPrevFlag] = useState(true);
  const [nextFlag, setNextFlag] = useState(false);
  const [restartFlag, setRestartFlag] = useState(true);

  useEffect(() => {
    // if current slide is the first one
    if(slideIndex === 0) {
      setPrevFlag(true);
      setRestartFlag(true);
    } else {
      setPrevFlag(false);
      setRestartFlag(false);
    }

    // if current slide is the last one
    if(slideIndex === slides.length - 1) {
      setNextFlag(true);
    } else {
      setNextFlag(false);
    }

  }, [slideIndex])

  const handlePrevClick = () => {
      
      setSlideIndex((prevState) => prevState - 1);
  }

  const handleNextClick = () => {
      setSlideIndex((prevState) => prevState + 1);
  }

  const handleRestartClick = () => {
    setSlideIndex(0);
  }



  return (
    <>
      <h1 id="heading">Amazon Prime: Trending</h1>
      <div>
        <div>
          <h1 data-testid="title">{slides[slideIndex].title}</h1>
          <p data-testid="text">{slides[slideIndex].text}</p>
        </div>
        
        <button data-testid="button-prev" onClick={handlePrevClick} disabled={prevFlag}>Prev</button>
        <button data-testid="button-next" onClick={handleNextClick} disabled={nextFlag}>Next</button>
        <button data-testid="button-restart" onClick={handleRestartClick} disabled={restartFlag}>Restart</button>
    
      </div>
    </>
  )
}


export default App;
