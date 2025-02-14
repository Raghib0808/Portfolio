import React from 'react'
import './open.css'
import Grid_photo from './Grid_photo'

const Open = () => {
const imageList = ["ph1.svg", "ph2.svg", "ph3.svg", "ph4.svg", "ph5.svg", "ph6.svg"];
const imageList2 = ["ph11.png", "ph12.png", "ph13.png", "ph14.png", "ph15.png", "ph16.png","ph17.png","ph18.png","ph19.png","ph20.png","ph21.png","ph22.png"];

  return (
    <>
    <div className='photo-h'>
            <div className='photo1'>creative storytelling</div>
            <div className='photo2'>
                     <div>as I continued to explore different forms of art, I found myself drawn to photography. To me, photography is another way to convey stories, emotions, and thoughts. I am fascinated by the way a single image can document a moment in time and evoke powerful emotions. Whether it's a portrait that captures a person's soul or a landscape that transports you to another world, photography has the power to connect with people in a very profound way.</div>
                    <div>through photography, I have been able to convey my own stories and emotions. It's a deeply personal form of expression, and I find that it allows me to communicate in ways that words alone cannot. </div>
                    
            </div>

    </div>
        <Grid_photo images={imageList}/>
        <div className='tgrid'>
            <div className='tg1'> <img src="ph7.png" alt="" /> </div>
            <div className='tg1'> <img src="ph8.png" alt="" /> </div>
            <div className='tg1'><img src="ph9.png" alt="" /></div>
        </div>
        <Grid_photo images={imageList2}/>
    </>
  )
}

export default Open
