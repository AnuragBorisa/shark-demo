import React from "react";
import "./MiddlePageOne.css";
import imageone from "../resources/Screenshot from 2024-01-09 14-50-30.png";
import imagetwo from "../resources/Screenshot from 2024-01-09 17-05-44.png";
import imaggethree from "../resources/Screenshot from 2024-01-09 17-05-49.png";
import bluedot from "../resources/Untitled-1.png";
import { useState } from "react";
const MiddlePageOne = () => {
  const [clickedOne, setIsClickedOne] = useState(true);
  const [clickedTwo, setIsClickedTwo] = useState(false);
  const [clickedThree, setIsClickedThree] = useState(false);

  const uiChangeHandlerOne = () => {
    setIsClickedOne(true);
    setIsClickedTwo(false);
    setIsClickedThree(false);
  };
  const uiChangeHandlerTwo = () => {
    setIsClickedOne(false);
    setIsClickedTwo(true);
    setIsClickedThree(false);
  };
  const uiChangeHandlerThree = () => {
    setIsClickedOne(false);
    setIsClickedTwo(false);
    setIsClickedThree(true);
  };
  return (
    <section className="middlePageOne">
      <div className="images">
        {clickedOne && (
          <img src={imageone} alt="image" className="changeable-images"></img>
        )}
        {clickedTwo && (
          <img src={imagetwo} alt="image" className="changeable-images"></img>
        )}
        {clickedThree && (
          <img
            src={imaggethree}
            alt="image"
            className="changeable-images"
          ></img>
        )}
      </div>
      <div className="buttonmiddlepage">
        {clickedOne ? (
          <>
            {" "}
            <div className="heading">
              <img src={bluedot} alt="dot" className="bluedot"></img>
              <button className="click-buttons">Learn</button>
            </div>
            <p>
            Elevate your knowledge with our expert-led one-on-one classes, designed to match your unique pace and requirements. Dive into tailored content covering key cybersecurity concepts, delivered by seasoned professionals.

            </p>
            <button className="start-learning">Start learning</button>
          </>
        ) : (
          <>
            <div className="heading">
              <button className="click-buttons " onClick={uiChangeHandlerOne}>
                Learn
              </button>
            </div>
          </>
        )}

        <span className="divider"></span>
        {clickedTwo ? (
          <>
            <div className="heading">
              <img src={bluedot} alt="dot" className="bluedot"></img>
              <button className="click-buttons">Experience</button>
            </div>
            <p>
            Immerse yourself in the world of cybersecurity with Shark Cybertech's transformative learning experience.
            </p>
            <button className="start-learning">Start learning</button>
          </>
        ) : (
          <>
            <div className="heading">
              <button className="click-buttons " onClick={uiChangeHandlerTwo}>
               Experience
              </button>
            </div>
          </>
        )}

        <span className="divider"></span>
        {clickedThree ? (
          <>
            <div className="heading">
              <img src={bluedot} alt="dot" className="bluedot"></img>
              <button className="click-buttons">Practice</button>
            </div>
            <p>
            Apply your learning in a practical, hands-on environment. Engage in real-world scenarios and live projects under the guidance of your dedicated instructor. Practice is not just a step; it's the foundation for mastery.
            </p>
            <button className="start-learning">Start learning</button>
          </>
        ) : (
          <>
            <div className="heading">
              <button className="click-buttons " onClick={uiChangeHandlerThree}>
               Practice
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MiddlePageOne;
