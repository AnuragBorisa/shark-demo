import React, { useState, useEffect } from "react";
import "./MiddlePageFour.css";
import Cards from "./Cards";
import bluedot from "../resources/Untitled-1.png";
import { Link } from "react-router-dom";
import { useCourseContext } from "../store/CourseContent";
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};
const MiddlePageFour = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const courseContent = useCourseContext();
  //  const debouncedSetCurrentCard = debounce(setCurrentCard, 200);
  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

  useEffect(() => {
    const handleResize = debounce(() => {
      setCurrentCard(0); // Reset to first card on resize
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

  const handlePrevCard = () => {
    setCurrentCard((prevCard) =>
      prevCard > 0 ? prevCard - 1 : courseContent.length - 1
    );
  };

  const handleNextCard = () => {
    setCurrentCard((prevCard) =>
      prevCard < courseContent.length - 1 ? prevCard + 1 : 0
    );
  };

  return (
    <section className="mid-pge-four">
      {/* Popular Courses section */}
      <div className="mid-pg-four-tags">
        <img src={bluedot} alt="Dot" className="bluedotmid" />
        <h1 className="pop-courses">Popular Courses</h1>
        <button className="fullcatlog">Full Catlog</button>
      </div>
      <div className="cards">
        {isMobile ? (
          <Link className="card-link"
            to={`courses/${courseContent[currentCard].endPoint}`} // Assuming endpoint property for URL
          >
            <Cards
              pic={courseContent[currentCard].pic}
              title={courseContent[currentCard].title}
              description={courseContent[currentCard].description}
              key={currentCard}
            />
          </Link>
        ) : (
          courseContent.map((topic, index) => (
            <Link className="card-link" to={`courses/${topic.endPoint}`} key={index}>
              <Cards
                pic={topic.pic}
                title={topic.title}
                description={topic.description}
              />
            </Link>
          ))
        )}
        {isMobile && (
          <div className="card-navigation">
            <button className="prev-card" onClick={handlePrevCard}>
              Previous
            </button>
            <button onClick={handleNextCard}>Next</button>
          </div>
        )}
      </div>

      {/* New Courses section (similar logic) */}
      {/* ... */}
    </section>
  );
};

export default MiddlePageFour;