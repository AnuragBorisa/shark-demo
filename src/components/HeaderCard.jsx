import React from "react";
import { Link } from "react-router-dom";
import "./headerCard.css";

const HeaderCard = () => {
  return (
   <div className="header-card">
   
      <Link className="links"> 
      <img src="" alt="logo"></img>
      <div className="docs"><h1>Career Paths</h1>
       <p>Launch or advance your career with curated collection of courses,tabs,and more.</p></div>
      </Link>
   
    
      <Link className="links"> 
      <img src="" alt="logo"></img>
      <div className="docs"><h1>Career Paths</h1>
       <p>Launch or advance your career with curated collection of courses,tabs,and more.</p></div>
      </Link>
  
    
      <Link className="links"> 
      <img src="" alt="logo"></img>
      <div className="docs"><h1>Career Paths</h1>
       <p>Launch or advance your career with curated collection of courses,tabs,and more.</p></div>
      </Link>
   
    
      <Link className="links"> 
      <img src="" alt="logo"></img>
      <div className="docs"><h1>Career Paths</h1>
       <p>Launch or advance your career with curated collection of courses,tabs,and more.</p></div>
      </Link>
    

   </div>
  );
};

export default HeaderCard;
