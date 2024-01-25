import React from 'react'
import bluedot from "../resources/Untitled-1.png";
// import "./MiddlePageFour.css"
import Cards from './Cards'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useBlogContext } from "../store/CourseContent/blogindex";
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

const BlogPageMId = () => {
  const [currentCard,setCurrentCard] = useState(0);
  const blogContent = useBlogContext();
  const isMobile = window.innerWidth <=768;
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
      prevCard > 0 ? prevCard - 1 : blogContent.length - 1
    );
  };

  const handleNextCard = () => {
    setCurrentCard((prevCard) =>
      prevCard < blogContent.length - 1 ? prevCard + 1 : 0
    );
  };
  return (
    <section className='mid-pge-four'>
    <div className='mid-pg-four-tags'>
        <img src={bluedot} alt='Dot' className='bluedotmid'></img>
        <h1 className='pop-courses'>Popular Courses</h1>
        <button className='fullcatlog'>Full Catlog</button>
    </div>
    <div className='cards'>
    {isMobile ? (
            <Link
              to={`./blogs/${blogContent[currentCard].endpoint}`} // Assuming endpoint property for URL
            >
              <Cards
                pic={blogContent[currentCard].pic}
                title={blogContent[currentCard].title}
                description={blogContent[currentCard].description}
                key={currentCard}
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
    
  
</section>
  )
}

export default BlogPageMId