import React from 'react'

const Dialogue = ({head,text}) => {
  return (
    <div className='dialogue'>
            <div className='dialogue-left'>
                <div className='le-1'>{head}</div>
                <div className='le-2'>{text}</div>
            </div>
    </div>
  )
}

export default Dialogue
