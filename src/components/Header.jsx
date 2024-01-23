
import React from "react";
import "./headerStyles.css"; 
import HeaderCard from "./HeaderCard";
import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import sharklogo from "../resources/Shar_Logo-01 (1).png"
import  Login  from "./Login";
const Header = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [clicked,setIsClicked] = useState(false);
  const togglePop=()=>{
    
    setIsClicked(!clicked);
  }
  const hoverHandler = () => {
    setIsFocused(true);
  };
  const leaveHoverHandler = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, [3000]);
  };
  
  
  return (
    <Fragment>
    <header className="navBar">
      <img src={sharklogo} alt="logo" className="title"></img>
      <ul className="headerList">
        <li onMouseEnter={hoverHandler} onMouseLeave={leaveHoverHandler}>
          <a href="/" className="headerLink explore">
            Explore
          </a>
        </li>
        <li onMouseEnter={hoverHandler} onMouseLeave={leaveHoverHandler}>
          <a href="/" className="headerLink">
            Courses
          </a>
        </li>
        <li onMouseEnter={hoverHandler} onMouseLeave={leaveHoverHandler}>
          <a href="three" className="headerLink">
            Resources
          </a>
        </li>
        <li onMouseEnter={hoverHandler} onMouseLeave={leaveHoverHandler}>
          <a href="/contact" className="headerLink">
            Company
          </a>
        </li>
        <li onMouseEnter={hoverHandler} onMouseLeave={leaveHoverHandler}>
          <a href="/contact" className="headerLink">
            Price
          </a>
        </li>
      </ul>
      <div className="headerbtns">
      <button className="tteBtn" onClick={togglePop}>Talk to Expert</button>
        <button className="signupBtn">Get Enrolled</button>
        {clicked ? <Login toggle={togglePop}/>:null}
      </div>
    </header>
    
    {/* {isFocused && <HeaderCard />} */}
  </Fragment>
  );
};

export default Header;
