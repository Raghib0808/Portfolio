import React from 'react'
import './Gla.css'
const Head = () => {
  return (
    <>
    <div className='gla-head'>
            <div className='h12'>revamping the job search hub, ‘Glassdoor’</div>
            <div className='gla-but'>
                <div className='gla1'>product designer</div>
                <div className='gla1'>self initiiative</div>
                <div className='gla1'>2 days</div>
            </div>
    </div>

        {/* anoterh div */}
        <div className='hedb'>
            <div className='headleft'>
                <div>the motivation</div>
                <div>The purpose of this case study is to showcase my expertise in conducting a UX analysis of Glassdoor's mobile application. Through this, I aimed to gain a comprehensive understanding of the application's user experience and identify opportunities for improvement.</div>
                <div>My findings from this UX case study informed the redesign of Glassdoor's mobile application, with the goal of enhancing the user experience for job seekers. By applying best practices in UX design, I was able to create a more intuitive and enjoyable application that met the needs of its users.</div>
            </div>
            <div className='hhh'>
                <img src='Job.svg'/>
            </div>
        </div>

        <div className='headan'>
                <div>as of today</div>
                <div>users can create a free account and access the below features, as well as search for job opportunities based on their location, industry, and job type.overall, Glassdoor aims to provide transparency in the job market by giving job seekers access to information about companies and job opportunities that can help them make informed decisions about their careers.</div>
        </div>

        <div className='ran'>glassdoor’s core features</div>


        <div className='wholes'>
            <div className='whole1'>
                <img src="doodle1.svg" alt="" />
                <div className='whole2'>company reviews and ratings</div>
                <div className='whole3'>written by current and former employees, and provide information about company culture, work-life balance, management, and other aspects of working for a specific company.</div>
            </div>
            <div className='whole1'>
                <img src="doodle1.svg" alt="" />
                <div className='whole2'>company reviews and ratings</div>
                <div className='whole3'>written by current and former employees, and provide information about company culture, work-life balance, management, and other aspects of working for a specific company.</div>
            </div>
            <div className='whole1'>
                <img src="doodle1.svg" alt="" />
                <div className='whole2'>company reviews and ratings</div>
                <div className='whole3'>written by current and former employees, and provide information about company culture, work-life balance, management, and other aspects of working for a specific company.</div>
            </div>
            <div className='whole1'>
                <img src="doodle1.svg" alt="" />
                <div className='whole2'>company reviews and ratings</div>
                <div className='whole3'>written by current and former employees, and provide information about company culture, work-life balance, management, and other aspects of working for a specific company.</div>
            </div>
        </div>


        <div className='fpage'>
            <div className='ff'>

            <img src={import.meta.env.VITE_TIMELINE} alt="My Image"/>
            </div>
        </div>


        <div className='dif'>
            <img src="dif.svg" alt="" />
        </div>

        {/* div of full width */}
        <div className='oiu'>
            <div className='oiu1'>glassdoor</div>
            <div className='oiu2'>reimagined visual design </div>
        </div>

        {/* image */}
        <div className='holder'>
            <img src="Group195.svg" alt="" />
        </div>



{/* grid layout */}
        <div class="img-grid">
        <div class="img-wrapper">
            <img src="MOB1.svg" alt="Mobile 1"/>
        </div>
        <div class="img-wrapper">
            <img src="MOB2.svg" alt="Mobile 2"/>
        </div>
        <div class="img-wrapper">
            <img src="MOB3.svg" alt="Mobile 3"/>
        </div>
        <div class="img-wrapper">
            <img src="MOB4.svg" alt="Mobile 4"/>
        </div>
        <div class="img-wrapper">
            <img src="MOB5.svg" alt="Mobile 5"/>
        </div>
        <div class="img-wrapper">
            <img src="MOB6.svg" alt="Mobile 6"/>
        </div>
        <div class="img-wrapper">
            <img src="MOB7.svg" alt="Mobile 7"/>
        </div>
        <div class="img-wrapper">
            <img src="MOB8.svg" alt="Mobile 8"/>
        </div>
    </div>



    </>
  )
}

export default Head
