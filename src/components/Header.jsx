
import React from "react";
import "./headerStyles.css"; 
import HeaderCard from "./HeaderCard";
import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import sharklogo from "../resources/Group 2468.svg"

const Header = () => {
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {}, []);
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
          <a href="/about" className="headerLink">
            Solutions
          </a>
        </li>
        <li onMouseEnter={hoverHandler} onMouseLeave={leaveHoverHandler}>
          <a href="/contact" className="headerLink">
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
      <div className="boxhumein">
        <button>Login</button>
        <button className="signupBtn">SignUp</button>
      </div>
    </header>
    
    {isFocused && <HeaderCard />}
  </Fragment>
  );
};

export default Header;
