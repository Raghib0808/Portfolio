import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Proj_H from './Components/Proj_H'
import Open from './Components/PhotoGraphy/Open'
import Head from './Components/Glassdoor/Head'
import JobSearchFeatures from './Components/Glassdoor/JobSearchFeatures'
import First_page from './Components/Nav_page/First_page'
import All_Nav_bar from './Components/Nav_page/All_Nav_bar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <All_Nav_bar/> */}

    <Routes>
          <Route path='/' element={<First_page/>}/>
          <Route path='/Glassdoor' element={<Head/>}/>
    </Routes>



    </>
  )
}

export default App
