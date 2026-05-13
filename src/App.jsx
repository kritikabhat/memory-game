import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Components/Header.jsx'
import Score from './Components/Score.jsx'
import GameGrid from './Components/GameGrid.jsx'

// At the end, change font to Pokemon also

function App() {
  
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
