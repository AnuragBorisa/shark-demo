import React, { useState, useEffect } from "react";
import "./MiddlePageFour.css";
import Cards from "./Cards";
import bluedot from "../resources/Untitled-1.png";
import { Link } from "react-router-dom";
import { useCourseContext } from "../store/CourseContent";

const MiddlePageFour = () => {
 const [currentCard, setCurrentCard] = useState(0);
 const courseContent = useCourseContext();

 const isMobile = 
   window.innerWidth <= 758; // Adjust the breakpoint as needed

 useEffect(() => {
   const handleResize = () => {
     setCurrentCard(0); // Reset to the first card on resize
   };
   window.addEventListener("resize", handleResize);
   return () => window.removeEventListener("resize", handleResize);
 }, []);

 const handlePrevCard = () => {
   setCurrentCard((prevCard) => (prevCard > 0 ? prevCard - 1 : courseContent.length - 1));
 };

 const handleNextCard = () => {
   setCurrentCard((prevCard) => (prevCard < courseContent.length - 1 ? prevCard + 1 : 0));
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
         <Cards
           pic={courseContent[currentCard].pic}
           title={courseContent[currentCard].title}
           description={courseContent[currentCard].description}
           key={currentCard}
         />
       ) : (
         courseContent.map((topic, index) => (
           <Link to={`courses/${topic.endPoint}`} key={index}>
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
           <button className="prev-card" onClick={handlePrevCard}>Previous</button>
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
