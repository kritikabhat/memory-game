import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import GameGrid from './Components/GameGrid.jsx'

import winningSound from './assets/eaglaxle-gaming-victory-464016.mp3'
const winningSoundAudio = new Audio(winningSound)

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [urlAndNames, setUrlAndNames] = useState([])
  const [clickedCards, setClickedCards] = useState([])

  function handleUrlAndNames(myData) {
    setUrlAndNames(myData)
  }
  const playSound = () => {
    winningSoundAudio.currentTime = 0;
    winningSoundAudio.play();
  };

  const handleScores = (id) => {
    if (clickedCards.includes(id)) {
      playSound()
      alert("Game ended!")
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
    <footer>
      Sound Effect by <a href="https://pixabay.com/users/eaglaxle-53749042/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=464016">EAGLAXLE</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=464016">Pixabay</a>
    </footer>
    </>
  )
}

export default App
