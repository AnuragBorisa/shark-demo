import React from 'react'
import "./Cards.css"
import cardimageone from "../resources/Screenshot from 2024-01-10 13-49-00.png"
import { useState } from 'react'



const Cards = (props) => {
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
        <img src={props.pic} alt="image" className='internal-cards-image'></img>
        </div>
        <div className='cards-content'>
            <div className='cards-duration'>
                <h1 className='course-btn'>Course</h1>
                <h1 className='course-duration'>30H:52</h1>
                <h1 className='CEUS'>7 CEUS</h1>
            </div>
            <h1 className='card-heading'>{props.title}</h1>
            <p className='card-para'>{props.description}</p>
            {hoverd && <button className='take-me-there'>Take me there</button>}
        </div>
    </div>
   
  )
}

export default Cards;