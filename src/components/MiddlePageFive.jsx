import React from "react";
import "./MiddlePageFive.css";
import { Fragment } from "react";
import { useState } from "react";

const MiddlePageFive = () => {
  const [rightClick, setRightClick] = useState(true);
  const [leftClick, setLeftClick] = useState(false);
  const [count, setCount] = useState(0);

  const comments = [
    "I've been having concerns on how to start in terms of building my #cybercareer with a sustained path. So I got introduced to Cybrary and I was able to enroll and startup early last week and I have gone through two sessions, getting to know Cybrary and also a view of what cybersecurity is from their perspective. That gave me an overall view of what jobs are found in the space, their general responsibilities, required skills, necessary certifications and their average salary pay... Cybrary has given me a greater reason to pursue my hearts desire at all cost. JAMAL O. Student",
    "I've been having concerns on how to start in terms of building my #cybercareer with a sustained path. So I got introduced to Cybrary and I was able to enroll and startup early last week and I have gone through two sessions, getting to know Cybrary and also a view of what cybersecurity is from their perspective. That gave me an overall view of what jobs are found in the space, their general responsibilities",
    "I've been having concerns on how to start in terms of building my #cybercareer with a sustained path. So I got introduced to Cybrary and I was able to enroll and startup early last week and I have gone through two sessions, getting to know Cybrary and also a view of what cybersecurity is fr",
  ];
  let countout = count;

  const clickedRight = () => {
    setRightClick(true);
    setLeftClick(false);
    countout++;
    setCount(countout);
  };
  const clickedLeft = () => {
    setLeftClick(true);
    setRightClick(false);
    countout--;
    setCount(countout);
  };
  const displayCommentsRight = (count) => {
    return comments[count % comments.length];
  };
  const displayCommentsLeft = (count) => {
    return comments[count % comments.length];
  };

  return (
    <Fragment>
      <section className="mid-pge-five">
        <div className="comments-container">
          <h1 className="comments-heading">Words From our Users</h1>
          {rightClick && (
            <p className="comments-para">{displayCommentsRight(count)}</p>
          )}
          {leftClick && (
            <p className="comments-para">{displayCommentsLeft(count)}</p>
          )}
          <div className="comments-btns">
            <button className="left" onClick={clickedLeft}>
              left
            </button>
            <button className="right" onClick={clickedRight}>
              right
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default MiddlePageFive;