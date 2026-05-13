import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import GameGrid from './Components/GameGrid.jsx'

// At the end, change font to Pokemon also

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [urlAndNames, setUrlAndNames] = useState([])
  const [clickedCards, setClickedCards] = useState([])

  function handleUrlAndNames(myData) {
    setUrlAndNames(myData)
  }

  const handleScores = (id) => {
    if (clickedCards.includes(id)) {
      setScore(0);
      setClickedCards([]);
    } else {
      setScore(score + 1);
      if (score >= bestScore) {
        setBestScore(score + 1);
      }
      setClickedCards([...clickedCards, id]);
    }
    randomiseURLArray()
  }

  function randomiseURLArray() {
      const randomizedArr = [...urlAndNames]
      for (let i = randomizedArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = randomizedArr[j]
        randomizedArr[j] = randomizedArr[i]
        randomizedArr[i] = temp
      }
      handleUrlAndNames(randomizedArr)
  }

  return (
    <>
    <section className='headerSection' tabIndex={0} autoFocus>
      <Header score={score} bestScore={bestScore} />
    </section>
    <section className='gameSection' tabIndex={0}>
      Get points by clicking on an image but don't click on any more than once!
      <GameGrid handleUrlAndNames={handleUrlAndNames} urlAndNames={urlAndNames} handleScores={handleScores} />
    </section>
    </>
  )
}

export default App
