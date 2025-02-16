import { useState } from 'react'
 import './App.css'
import Proj_H from './Components/Proj_H'
import Open from './Components/PhotoGraphy/Open'
import Head from './Components/Glassdoor/Head'
import JobSearchFeatures from './Components/Glassdoor/JobSearchFeatures'
import First_page from './Components/Nav_page/First_page'
import All_Nav_bar from './Components/Nav_page/All_Nav_bar'
import { Route, Routes } from 'react-router-dom'
import GridPhoto from './Components/PhotoGraphy/Grid_photo'
import WaveWorks from './Components/Glassdoor/WaveWorks'
import Insight from './Components/Insight/Insight'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <All_Nav_bar/>
    
    <Routes>
          <Route path='/' element={<First_page/>}/>
          <Route path='/Glassdoor' element={<Head/>}/>
          <Route path='/Fun_Stuf' element={<Open/>}/>
          <Route path='/WaveWorks' element={<WaveWorks/>}/>
          <Route path='/Insight' element={<Insight/>}/>
    </Routes>




    </>
  )
}

export default App
