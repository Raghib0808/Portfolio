import React from 'react'
import './All_Nav.css'
import { Link } from 'react-router-dom'
import Insight from '../Insight/Insight'

const All_Nav_bar = () => {
  return (
    <div className='upperNav'>
    <div className='Nav'>
            <div className='Nav1'>designed with intent.</div>
            <div className='Nav2'>

                 <span className='navv'> <Link to='/'>About me </Link></span> 
                 <span className='navv'> <Link to='/Glassdoor'>About me </Link> </span> 
                 <span className='navv'> <Link to='/Fun_Stuf'>Fun Stuff </Link> </span> 
                 <span className='navv'> <Link to='/WaveWorks'>WaveWork </Link> </span> 
                 <span className='navv'> <Link to='/Insight'>Insight </Link> </span> 
              
            </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 1628 2" fill="none">
<path d="M0 1H1628" stroke="black"/>
</svg>



    </div>
  )
}

export default All_Nav_bar
