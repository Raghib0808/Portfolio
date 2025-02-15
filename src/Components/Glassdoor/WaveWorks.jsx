import React from 'react'
import './WaveWorks.css'

const WaveWorks = () => {
  return (
    <>
            <div className='gla-head'>
            <div className='h12 haf'>clocking time and leaves, simplified with Workwave</div>
            <div className='gla-but'>
                <div className='gla1'>product designer</div>
                <div className='gla1'>self initiiative</div>
                <div className='gla1'>2 days</div>
            </div>
    </div>

        <div className='dark'>
                    <div className='dark1'>the problem statement</div>
                    <div className='dark2'>a mobile application is needed to simplify timesheet and leave application processes for employees. The app should offer easy login, schedule viewing, time entry submission, and leave request features, all accessible via mobile devices. Prioritizing user experience and ease of use, the app aims to improve employee productivity and satisfaction by streamlining manual data entry and increasing accessibility.</div>
                    <img className='dimg' src="Office_work.svg" alt="" />
        </div>

        {/* white space */}
        <div className='wspc'>
                <img src="Group115.svg" alt="" />
        </div>


        {/* <div className="message-box">
      Can you tell me about your experience with the current time tracking and 
      leave management app(s)? What did you like and dislike about them?
    </div> */}




    {/* svg photos */}
    <div className='ssvvgg'>
        <img src="ssvvgg.svg" alt="" />
    </div>

            {/* div quotation */}
            <div className='Quotee'>
                    <ul className='qc1'>
                        <li className='qc14'>How might we make an easy and efficient way to log daily hours worked on different projects and also view time sheets and leave balances?</li>
                        <li className='qc14'>How might we request time off on mobile phones, from anywhere, anytime, without having to login to laptops?</li>
                        <li className='qc14'>How might we remind them about upcoming deadlines or timesheet filling?</li>
                        <li className='qc14'>How might we make a reduce complex workflows and make an intuitive and user-friendly interface?</li>
                        <img className='whitec' src="whitecomma.svg" alt="" />
                    </ul>

            </div>




    </>
  )
}

export default WaveWorks
