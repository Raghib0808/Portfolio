import React from 'react'
import ThreeRounded from './ThreeRounded'

const Chat_whole = ({head,text,ThreeRound}) => {
  return (
    <div className='thh'>
                <div className='lefts  '>
                        <div className='lefts1'>{head}</div>
                        <div className='lefts2'>{text}</div>
                </div>

                <div className='the'>
                      <ThreeRounded text={ThreeRound} />
                      <ThreeRounded text={ThreeRound} />
                      <ThreeRounded text={ThreeRound} />
                </div>
                
    </div>
  )
}

export default Chat_whole
