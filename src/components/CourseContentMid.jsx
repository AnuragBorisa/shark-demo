import React from "react";
import "./CourseContentMid.css";
import { useState } from "react";
let coursetopics = [
  {
    heading:"Introduction to Ethical Hacking",
    subheadings:["Introduction to Ethical Hacking","Information Security Controls, Laws, and Standards","Hacking and Ethical Hacking Concepts","Cyber Kill Chain Concepts","Information Security Overview"]
  },
  {
    heading:"Introduction to Ethical Hacking",
    subheadings:["Introduction to Ethical Hacking","Information Security Controls, Laws, and Standards","Hacking and Ethical Hacking Concepts","Cyber Kill Chain Concepts","Information Security Overview"]
  },
  {
    heading:"Introduction to Ethical Hacking",
    subheadings:["Introduction to Ethical Hacking","Information Security Controls, Laws, and Standards","Hacking and Ethical Hacking Concepts","Cyber Kill Chain Concepts","Information Security Overview"]
  },
  {
    heading:"Introduction to Ethical Hacking",
    subheadings:["Introduction to Ethical Hacking","Information Security Controls, Laws, and Standards","Hacking and Ethical Hacking Concepts","Cyber Kill Chain Concepts","Information Security Overview"]
  }

];
let courseHeadingWithDescription = [
  {
    headings: "Heading",
    description:
      "Our Penetration Testing and Ethical Hacking course will introduce you to a variety of attack types, including password cracking, DDoS, SQL injection, session hijacking, social engineering, and other hacking techniques. The course also covers an introduction to ethical hacking concepts, as well as web server and web application hacking. There are optional labs for this ethical hacking course that help students gain the hands-on hacking skills necessary to be successful on the job.",
  },
  {
    headings: "Heading",
    description:
      "Our Penetration Testing and Ethical Hacking course will introduce you to a variety of attack types, including password cracking, DDoS, SQL injection, session hijacking, social engineering, and other hacking techniques. The course also covers an introduction to ethical hacking concepts, as well as web server and web application hacking. There are optional labs for this ethical hacking course that help students gain the hands-on hacking skills necessary to be successful on the job.",
  },
  {
    headings: "Heading",
    description:
      "Our Penetration Testing and Ethical Hacking course will introduce you to a variety of attack types, including password cracking, DDoS, SQL injection, session hijacking, social engineering, and other hacking techniques. The course also covers an introduction to ethical hacking concepts, as well as web server and web application hacking. There are optional labs for this ethical hacking course that help students gain the hands-on hacking skills necessary to be successful on the job.",
  },
  {
    headings: "Heading",
    description:
      "Our Penetration Testing and Ethical Hacking course will introduce you to a variety of attack types, including password cracking, DDoS, SQL injection, session hijacking, social engineering, and other hacking techniques. The course also covers an introduction to ethical hacking concepts, as well as web server and web application hacking. There are optional labs for this ethical hacking course that help students gain the hands-on hacking skills necessary to be successful on the job.",
  },
];

const CourseContentMid = () => {
  
  const [clicked, setIsClicked] = useState(
    Array(coursetopics.length).fill(false)
  );

 
  const clickedHandler = (index) => {
    
    const newClicked = [...clicked];
    
    newClicked[index] = !newClicked[index];
    
    setIsClicked(newClicked);
  };

  const h1elements = coursetopics.map((topic, index) => {
    return (
      <>
        <h1
          className="course-topics-h1"
          key={index}
          onClick={() => clickedHandler(index)}
        >
          <span
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "blue",
             
              verticalAlign: "middle",
            }}
          ></span>
          {topic.heading}
          <span className="arrow-span" style={{
            }}>{">"}</span>
        </h1>
       
        {clicked[index] && (
          <div className="course-subtopics">
            {topic.subheadings.map((subtopic, subindex) => {
              return (
                <h2 className="course-subtopics-h1" key={subindex}>
                  {subtopic}
                </h2>
              );
            })}
          </div>
        )}
      </>
    );
  });
  const headinganddescriptions = courseHeadingWithDescription.map(
    (content, index) => {
      return (
        <>
          <h1 className="description-h1">{content.headings}</h1>{" "}
          <p className="description-para">{content.description}</p>
        </>
      );
    }
  );

  return (
    <section className="course-container-mid">
      <div className="course-content">
        <h1 className="course-ctn-heading">
          Course Content
          <span className="course-ctn-arrow">{">"}</span>
        </h1>
        <div className="course-topics">{h1elements}</div>
      </div>
      <div className="description">{headinganddescriptions}</div>
    </section>
  );
};

export default CourseContentMid;
