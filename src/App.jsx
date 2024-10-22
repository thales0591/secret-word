import '../src/App.css'

import { useCallback, useState, useEffect } from "react";
import { wordsList } from "./data/words";

import StartScreen from './components/StartScreen'
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start"},
  { id: 2, name: "game"},
  { id: 3, name: "end"},
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  return (
    <>
      <div className='App'>
        {gameStage === "start" && <StartScreen/>}
        {gameStage === "start" && <Game/>}
        {gameStage === "start" && <GameOver/>}
      </div>
    </>
  )
}

export default App
