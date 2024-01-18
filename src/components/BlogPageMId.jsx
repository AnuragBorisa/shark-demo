import React from 'react'
import bluedot from "../resources/Untitled-1.png";
import "./MiddlePageFour.css"
import Cards from './Cards'

import { Link } from 'react-router-dom';

const BlogPageMId = () => {
  return (
    <section className='mid-pge-four'>
    <div className='mid-pg-four-tags'>
        <img src={bluedot} alt='Dot' className='bluedotmid'></img>
        <h1 className='pop-courses'>Popular Courses</h1>
        <button className='fullcatlog'>Full Catlog</button>
    </div>
    <div className='cards'>
       <Link to="/courses"> <Cards ></Cards> </Link>
        <Cards ></Cards>
        <Cards ></Cards>
        <Cards ></Cards>
    </div>
  
</section>
  )
}

export default BlogPageMId