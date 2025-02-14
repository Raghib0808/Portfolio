import React from 'react'

const FullWidth = ({text,etc}) => {
  return (
    <div className='add'>
                <img className='add-img' src='comma.svg'/>
                <div className='add-comt'>
                        <div>{text}</div>
                
                </div>
                <div className='add-comt2'>
                        {etc}
                </div>
        </div>
  )
}

export default FullWidth
