import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Proj_H from './Components/Proj_H'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Proj_H/>
    </>
  )
}

export default App
