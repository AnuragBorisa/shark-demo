import React from "react";
import "./MiddlePageOne.css";
import imageone from "../resources/Screenshot from 2024-01-09 14-50-30.png";
import imagetwo from "../resources/Screenshot from 2024-01-09 17-05-44.png";
import imaggethree from "../resources/Screenshot from 2024-01-09 17-05-49.png"
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
       {clickedOne && <img src={imageone} alt="image" className="changeable-images"></img>} 
       {clickedTwo && <img src={imagetwo} alt="image" className="changeable-images"></img>} 
       {clickedThree && <img src={imaggethree} alt="image" className="changeable-images"></img>} 

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
              Learn Key Concepts with expert-led video coures for all
              professsional levels.
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
              <button className="click-buttons">Learn</button>
            </div>
            <p>
              Learn Key Concepts with expert-led video coures for all
              professsional levels.
            </p>
            <button className="start-learning">Start learning</button>
          </>
        ) : (
          <>
            <div className="heading">
              <button className="click-buttons " onClick={uiChangeHandlerTwo}>
                Practice
              </button>
            </div>
          </>
        )}

        <span className="divider"></span>
        {clickedThree ? (
          <>
            <div className="heading">
              <img src={bluedot} alt="dot" className="bluedot"></img>
              <button className="click-buttons">Learn</button>
            </div>
            <p>
              Learn Key Concepts with expert-led video coures for all
              professsional levels.
            </p>
            <button className="start-learning">Start learning</button>
          </>
        ) : (
          <>
            <div className="heading">
              <button className="click-buttons " onClick={uiChangeHandlerThree}>
                Prove
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MiddlePageOne;
