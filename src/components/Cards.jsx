import React from 'react'
import "./Cards.css"
import cardimageone from "../resources/Screenshot from 2024-01-10 13-49-00.png"
import { useState } from 'react'


const Cards = () => {
  const [hoverd,setIsHoverd] = useState(false);
  const clickedHandler = () => {
    setIsHoverd(true);
  }
  const leaveHandler = () => {
    setIsHoverd(false);
  }
  return (
    <div className='card-main' onMouseEnter={clickedHandler} onMouseLeave={leaveHandler}>
        <div className='cards-image'>
        <img src={cardimageone} alt="image" className='internal-cards-image'></img>
        </div>
        <div className='cards-content'>
            <div className='cards-duration'>
                <h1 className='course-btn'>Course</h1>
                <h1 className='course-duration'>30H:52</h1>
                <h1 className='CEUS'>7 CEUS</h1>
            </div>
            <h1 className='card-heading'>Penetration Testing and Ethical Hacking</h1>
            <p className='card-para'>To assess the strength of your organizations cybersecurtiy posture,you need to gather...</p>
            {hoverd && <button className='take-me-there'>Take me there</button>}
        </div>
    </div>
  )
}

export default Cards;