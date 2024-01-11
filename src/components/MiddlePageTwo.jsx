import React from 'react'
import "./MiddlePageTwo.css";
import boxtwoimage from "../resources/Screenshot from 2024-01-10 10-02-08.png"

const MiddlePageTwo = () => {
  return (
    <section className='container-box'>
        <div className='box-one'>
            <h1 className='heading-middle-two'>Cybrary for Teams</h1>
            <p className='para-mid-two'>Upskill your team with Cybrary's suite of learning activities and management tools, including hands-on practice labs, assessments, and custom guided pathways. Request a demo and learn how Cybrary tailors our deep library of trainings to your team's unique needs.</p>
            <button className='btn-mid-two'>Schedule A Demo</button>
        </div>
        <div className='box-two'>
            <img src={boxtwoimage} alt='image' className='box-two-img'></img>
        </div>
    </section>
  )
}

export default MiddlePageTwo