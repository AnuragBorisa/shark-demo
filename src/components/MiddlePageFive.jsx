// import React from "react";
// import "./MiddlePageFive.css";
// import { Fragment } from "react";
// import { useState } from "react";
// import Cards from "./Cards";
// import { Link } from "react-router-dom";
// import { useBlogContext } from "../store/CourseContent/blogindex";
// import rightbtn from "../resources/up-arrow.png"

// const MiddlePageFive = () => {
//   const [rightClick, setRightClick] = useState(true);
//   const [leftClick, setLeftClick] = useState(false);
//   const [count, setCount] = useState(0);
//   const blogContent = useBlogContext();

//   const comments = [
//     "I've been having concerns on how to start in terms of building my #cybercareer with a sustained path. So I got introduced to Cybrary and I was able to enroll and startup early last week and I have gone through two sessions, getting to know Cybrary and also a view of what cybersecurity is from their perspective. That gave me an overall view of what jobs are found in the space, their general responsibilities, required skills, necessary certifications and their average salary pay... Cybrary has given me a greater reason to pursue my hearts desire at all cost. JAMAL O. Student",
//     "I've been having concerns on how to start in terms of building my #cybercareer with a sustained path. So I got introduced to Cybrary and I was able to enroll and startup early last week and I have gone through two sessions, getting to know Cybrary and also a view of what cybersecurity is from their perspective. That gave me an overall view of what jobs are found in the space, their general responsibilities",
//     "I've been having concerns on how to start in terms of building my #cybercareer with a sustained path. So I got introduced to Cybrary and I was able to enroll and startup early last week and I have gone through two sessions, getting to know Cybrary and also a view of what cybersecurity is fr",
//   ];
//   let countout = count;

//   const clickedRight = () => {
//     setRightClick(true);
//     setLeftClick(false);
//     countout++;
//     setCount(countout);
//   };
//   const clickedLeft = () => {
//     setLeftClick(true);
//     setRightClick(false);
//     countout--;
//     if (countout < 0) {
//       countout = count;
//     }
//     setCount(countout);
//   };
//   const displayCommentsRight = (count) => {
//     return comments[count % comments.length];
//   };
//   const displayCommentsLeft = (count) => {
//     return comments[count % comments.length];
//   };
//   const cardswithProps = blogContent.map((topic, index) => {
//     return (
//       <>
//         <Link to={`./blogs/${topic.endpoint}`}>
//           {" "}
//           <Cards
//             pic = {topic.pic}
//             title={topic.title}
//             description={topic.description}
//             key={index}
//           ></Cards>{" "}
//         </Link>
//       </>
//     );
//   });

//   return (
//     <Fragment>
//       <section className="mid-pge-five">
//         <div className="comments-container">
//           <h1 className="comments-heading">Words From our Users</h1>
//           {rightClick && (
//             <p className="comments-para">{displayCommentsRight(count)}</p>
//           )}
//           {leftClick && (
//             <p className="comments-para">{displayCommentsLeft(count)}</p>
//           )}
//           <div className="comments-btns">
//             <button className="left" onClick={clickedLeft}>
//              <img src={rightbtn}alt="left"></img>
//             </button>
//             <button className="right" onClick={clickedRight}>
//             <img src={rightbtn}alt="right"></img>
//             </button>
//           </div>
//         </div>
//         <div className="blogs-Container">
//           <h1 className="recent-blogs">Recent Blogs</h1>
//           <div className="card-blog">{cardswithProps}</div>

//           <button className="show-all-content">Show All Posts</button>
//         </div>
//       </section>
//     </Fragment>
//   );
// };

// export default MiddlePageFive;
import React, { useState, useEffect } from "react";
import "./MiddlePageFive.css";
import Cards from "./Cards";
import rightbtn from "../resources/up-arrow.png";
import { Link } from "react-router-dom";
import { useBlogContext } from "../store/CourseContent/blogindex";
import bluedot from "../resources/Untitled-1.png";
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

const MiddlePageFive = () => {
  const [rightClick, setRightClick] = useState(true);
  const [leftClick, setLeftClick] = useState(false);
  const [count, setCount] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const blogContent = useBlogContext();

  const comments = [
    // ... your comments

    "I've been having concerns on how to start in terms of building my #cybercareer with a sustained path. So I got introduced to Cybrary and I was able to enroll and startup early last week and I have gone through two sessions, getting to know Cybrary and also a view of what cybersecurity is from their perspective. That gave me an overall view of what jobs are found in the space, their general responsibilities, required skills, necessary certifications and their average salary pay... Cybrary has given me a greater reason to pursue my hearts desire at all cost. JAMAL O. Student",
    "I've been having concerns on how to start in terms of building my #cybercareer with a sustained path. So I got introduced to Cybrary and I was able to enroll and startup early last week and I have gone through two sessions, getting to know Cybrary and also a view of what cybersecurity is from their perspective. That gave me an overall view of what jobs are found in the space, their general responsibilities",
    "I've been having concerns on how to start in terms of building my #cybercareer with a sustained path. So I got introduced to Cybrary and I was able to enroll and startup early last week and I have gone through two sessions, getting to know Cybrary and also a view of what cybersecurity is fr",
  ];
  let countout = count;

  // ... your functions for comments
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
    if (countout < 0) {
      countout = count;
    }
    setCount(countout);
  };
  const displayCommentsRight = (count) => {
    return comments[count % comments.length];
  };
  const displayCommentsLeft = (count) => {
    return comments[count % comments.length];
  };

  const isMobile = window.innerWidth <= 768;
  // const debouncedSetCurrentCardIndex = debounce(setCurrentCardIndex, 100);
  useEffect(() => {
    const handleResize = debounce(() => {
      setCurrentCardIndex(0); // Reset to first card on resize
    }, 10000); // Adjust delay as needed

    window.addEventListener("resize", handleResize);

    const handleScroll = debounce(() => {
    }, 10000); // Adjust delay as needed

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ... rest of the component code

  const handlePrevCard = () => {
    setCurrentCardIndex((prevCard) =>
      prevCard > 0 ? prevCard - 1 : blogContent.length - 1
    );
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevCard) =>
      prevCard < blogContent.length - 1 ? prevCard + 1 : 0
    );
  };

  return (
    <section className="mid-pge-five">
      {/* Comments section */}

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
            <img src={rightbtn} alt="left"></img>
          </button>
          <button className="right" onClick={clickedRight}>
            <img src={rightbtn} alt="right"></img>
          </button>
        </div>
      </div>
      <div className="mid-pg-five-tags">
        <img src={bluedot} alt="Dot" className="bluedotmid-five" />
        <h1 className="pop-courses-five">Popular Courses</h1>
        <button className="fullcatlog-five">Full Catlog</button>
      </div>
      <div className="blogs-Container">
        <div className="card-blog">
          {isMobile ? (
            <Link
              to={`./blogs/${blogContent[currentCardIndex].endpoint}`} // Assuming endpoint property for URL
            >
              <Cards
                pic={blogContent[currentCardIndex].pic}
                title={blogContent[currentCardIndex].title}
                description={blogContent[currentCardIndex].description}
                key={currentCardIndex}
              />
            </Link>
          ) : (
            blogContent.map((topic, index) => (
              <Link to={`./blogs/${topic.endpoint}`} key={index}>
                <Cards
                  pic={topic.pic}
                  title={topic.title}
                  description={topic.description}
                />
              </Link>
            ))
          )}
          {isMobile && (
            <div className="blog-navigation">
              <button className="prev-blog" onClick={handlePrevCard}>
                Previous
              </button>
              <button onClick={handleNextCard}>Next</button>
            </div>
          )}
        </div>
        {/* <button className="show-all-content">Show All Posts</button> */}
      </div>
    </section>
  );
};

export default MiddlePageFive;
