import React from "react";
import "./MainPage.css";
import { Fragment } from "react";
import logoone from "../resources/PngItem_1320262.png";
import logotwo from "../resources/American-Airlines-PNG-Photo.png";
import logothree from "../resources/kindpng_2735331.png";
import logofour from "../resources/9984.T_BIG.D-87411322.png";
import Form from "./Form";

const MainPage = () => {
  return (
    <Fragment>
      <section className="main-section">
        <div className="content">
          <h2 className="main-heading">Welcome to Shark Cybertech </h2>
          <h1 className="gradient"> Forging Your Cybersecurity Mastery!</h1>
          <p className="main-paragraph">
            Embark on a paradigm-shifting odyssey into the realm of
            cybersecurity prowess with Shark Cybertech, a trailblazer in
            delivering unparalleled cybersecurity certification courses. Our
            cutting-edge training platform is precision-engineered to transcend
            theoretical boundaries, offering a meticulously curated blend of
            theoretical acumen and immersive, hands-on experiences through live
            projects and personalized one-on-one classes. This ensures not only
            the acquisition of theoretical knowledge but the mastery of
            practical skills, indispensable for navigating the ever-evolving
            landscape of cybersecurity.
          </p>

          <div className="buttons">
            <button className="learn-button">Start Learning for Free</button>
            <button className="teams-button">Shark for Teams {">"}</button>
          </div>
          <span className="line"></span>

          <h2 className="trust-heading">Trusted by Leading Organizations</h2>
          <div className="brands">
            <img src={logoone}  alt="logo" className="main-pge-logos logoone"></img>
            <img src={logotwo} alt="logo" className="main-pge-logos logotwo"></img>
            <img src={logothree} alt="logo" className="main-pge-logos logothree"></img>
            <img src={logofour} alt="logo" className="main-pge-logos logofour"></img>
          </div>
        </div>
        <Form />
      </section>
    </Fragment>
  );
};

export default MainPage;
