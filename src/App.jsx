import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Proj_H from './Components/Proj_H'
import Open from './Components/PhotoGraphy/Open'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Proj_H/>
      <Open/>
    </>
  )
}

export default App
