import React from 'react'
import Card from '../Card'
import Tough from '../Tough'
import InterviewInsight from '../InterviewInsight'
import Round_chat from './Round_chat'
import Not_chat from './Not_chat'
import Dialogue from '../Dialogue'

const Proj_H = () => {
  return (
    <>
    <div className='projH'>
                             <div className="Header_1">AI through clients’ eyes</div>
                          <span className='Header_2'>uncovering user perceptions and expectations through discovery interviews and usability testing</span>

                          <div className='i1'>
                                    <span className='i11'>senior product desginer</span>
                                    <span className='i12'> long-term UX study</span>
                                    <span className='i13'>Q3-4 2024</span>
                          </div>
    </div>


{/* another section */}
    <div className='sec2'>
                <div className='ob'>objectives</div>
        <div className='sece'>

                <div className='sec2left'>
                            <span className='sec21'>conduct user testing on our AI designs to measure user engagement and identify improvements. </span>
                           <span className='sec22'>explore client expectations and perceptions of AI, identify concerns, and evaluate trust.</span>
                </div>

                <div className='sec2r'>
                    <div className='sec2r1'>How do users currently perceive and interact with AI? </div>
                    <div className='sec2r1'>What future AI features offer the most value?</div>
                    <div className='sec2r1'>How might we alleviate their hesitations or perceived risks?</div>
                </div>
        </div>


{/* <div className='card'>

        <Card im={`chat-bubble-left-right`} text={`asked open-ended questions about AI usage, perceptions, and expectations. We also discussed current client
workflows and challenges.`} heading={`prototype testing`}/>
        <Card im={`beaker`} text={`conducted concrete prototype testing of specific AI features with dynamic, feedback-based iterations.
2 features tested to date: NLP data selection and AI insights `} heading={`prototype testing`}/>
        <Card im={`beaker`} text={`asked open-ended questions about AI usage, perceptions, and expectations. We also discussed current client
workflows and challenges.`} heading={`prototype testing`}/>
</div> */}


{/* tough component */}
<Tough/>

<InterviewInsight title={`what did we learn?`} text={`Nichole S.`} quote={`I wish that we did have an easier way to ask it in almost a layman's term so that it could tell us really what I need`}/>

{/* easy comp */}
            <div className='es1'>
                        <div className='es11'>the headline</div>
                        <div className='es12'>we must build Arthur to adapt to user contexts, and to evolve based on how it is used. Users expect it, and the current functionality gap will likely inhibit adoption.achieving premium value hinges on resolving this issue.</div>
            </div>

    </div>



    {/* easy comp2 */}
    <div className='es1'>
                        <div className='es11'>executive summary</div>
                        <div className='es12'>client users are overwhelmed both by the amount of data they pull and by NIQ data itself; and they are eager to use AI to solve both problems. </div>
            
            </div>

        {/* another easy section */}
{/* <div className='carHolder'>

        <div className='car1'>
                    <div className='car11'>01</div>
                    <div className='car12'>Users want AI to guide them in best practice analysis. </div>
        </div>
        <div className='car1'>
                    <div className='car11'>01</div>
                    <div className='car12'>Users want AI to guide them in best practice analysis. </div>
        </div>
        <div className='car1'>
                    <div className='car11'>01</div>
                    <div className='car12'>Users want AI to guide them in best practice analysis. </div>
        </div>
        <div className='car1'>
                    <div className='car11'>01</div>
                    <div className='car12'>Users want AI to guide them in best practice analysis. </div>
        </div>
        <div className='car1'>
                    <div className='car11'>01</div>
                    <div className='car12'>Users want AI to guide them in best practice analysis. </div>
        </div>
</div> */}


        {/* anopter easy section */}
        <InterviewInsight title={`deep dive into the findings`} text={`Jeff Bezos`} quote={`One thing I love about customers is that they are divinely discontent.`}/>


        {/* anotehr div */}
        <div className='bigR'>
            
        <div className='hec'>

        <div className='he'>
        users want AI to guide them through the “best” way to analyze business questions
        </div>
        <div className='he2'>users prefer to input specific queries like 'Why did my market share decrease in New Jersey?' and proceed accordingly, even if AI cannot provide a direct answer They asked that it at least point them in the right direction with fact and template recommendations.participants highlighted that this would be especially beneficial for lowering the barrier to entry into Discover for casual or new users.</div>
        </div>


        <div className='heec'>
            <Round_chat text={`I want to ask it complex questions like,Can you tell me which segment or is over indexed in each region?`}/>
            <Not_chat text={`So you'd like to be able to just ask it, “What's our current market share in New Jersey in Walmart?” and just get a number back?`}/>
            <Round_chat text={`Oh my God, that would solve so many problems— just like, time.`}/>
        </div>
        {/* another div */}
                






        </div>

        <div className='bigR'>
            
            <div className='hec'>
    
            <div className='he'>
            users want AI to guide them through the “best” way to analyze business questions
            </div>
            <div className='he2'>users prefer to input specific queries like 'Why did my market share decrease in New Jersey?' and proceed accordingly, even if AI cannot provide a direct answer They asked that it at least point them in the right direction with fact and template recommendations.participants highlighted that this would be especially beneficial for lowering the barrier to entry into Discover for casual or new users.</div>
            </div>
    
    
            <div className='heec'>
                <Round_chat text={`I want to ask it complex questions like,Can you tell me which segment or is over indexed in each region?`}/>
                <Not_chat text={`So you'd like to be able to just ask it, “What's our current market share in New Jersey in Walmart?” and just get a number back?`}/>
                <Round_chat text={`Oh my God, that would solve so many problems— just like, time.`}/>
            </div>
            </div>



{/* full page ads */}
        <div className='add'>
                <img className='add-img' src='comma.svg'/>
                <div className='add-comt'>
                        <div>Currently there's just a latency between the business question and the output. [NLP] empowers other people to ask and answer their own questions.</div>
                        <br/>
                        <div>One risk... would be inconsistently applying business logic throughout the organization.</div>
                
                </div>
                <div className='add-comt2'>
                        User, Bush Bros.
                </div>
        </div>

        <Dialogue/>










    </>
  )
}

export default Proj_H
