import React from 'react'
import "./MiddlePageTwo.css";
import boxtwoimage from "../resources/Screenshot from 2024-01-10 10-02-08.png"

const contents = [{
  heading : "Expert-Led Learning:",
  description: "Gain insights from industry pros, ensuring you're learning from the best."
},
{
  heading : "Personalized Attention:",
  description: "One-on-one classes catered to your pace, maximizing your success."
},
{
  heading : "Hands-On Mastery:",
  description: "Dive into real-world projects, mastering cybersecurity skills that matter."
},
{
  heading : "Cutting-Edge Curriculum:",
  description: "Stay ahead with a curriculum built for the future of cybersecurity.And"
},
{
  heading : "Proven Success:",
  description: "Join a community of successful professionals who chose Shark Cybertech"
}
]

const MiddlePageTwo = () => {
  const elements = contents.map((topic,index)=>{
    return <>
    <div className="headline">
     <h1 key={index}>{topic.heading}</h1>
     <p key={index}>{topic.description}</p>
    </div>
    </>

  })

  return (
    <section className='container-box'>
        <div className='box-one'>
            <h1 className='heading-middle-two'>Why Shark Cybertech?
</h1>         
            
           {elements}
            <button className='btn-mid-two'>Schedule A Demo</button>
        </div>
        <div className='box-two'>
            <img src={boxtwoimage} alt='image' className='box-two-img'></img>
        </div>
    </section>
  )
}

export default MiddlePageTwo