import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import Score from './Components/Score.jsx'
import GameGrid from './Components/GameGrid.jsx'

// At the end, change font to Pokemon also

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);


  return (
    <>
    <section className='headerSection'>
      <Header />
      <Score />
    </section>
    <section className='gameSection'>
      Get points by clicking on an image but don't click on any more than once!
      <GameGrid />
    </section>
    </>
  )
}

export default App
