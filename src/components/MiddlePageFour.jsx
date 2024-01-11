import React from 'react'
import "./MiddlePageFour.css"
import Cards from './Cards'
import bluedot from "../resources/Untitled-1.png";

const MiddlePageFour = () => {
  return (
    <section className='mid-pge-four'>
        <div className='mid-pg-four-tags'>
            <img src={bluedot} alt='Dot' className='bluedotmid'></img>
            <h1 className='pop-courses'>Popular Courses</h1>
            <button className='fullcatlog'>Full Catlog</button>
        </div>
        <div className='cards'>
            <Cards ></Cards>
            <Cards ></Cards>
            <Cards ></Cards>
            <Cards ></Cards>
        </div>
        <div className='mid-pg-four-tags'>
            <img src={bluedot} alt='Dot' className='bluedotmid'></img>
            <h1 className='pop-courses'>New Courses</h1>
            <button className='fullcatlog'>Full Catlog</button>
        </div>
        <div className='cards'>
            <Cards ></Cards>
            <Cards ></Cards>
            <Cards ></Cards>
            <Cards ></Cards>
        </div>
    </section>
  )
}

export default MiddlePageFour;