import React from "react";
import "./CourseContentPage.css";
import Form from "./Form";
import { useParams } from "react-router-dom";
import { useCourseContext } from "../store/CourseContent";

const CourseContentPage = () => {
  const params = useParams();
  const contentobject = useCourseContext();
  
  const course = contentobject.find((topic) => topic.endPoint === params.id);
  
  if (course) {
    return (
      <section className="Crse-ctn-pge-ctner">
        <div className="course-description">
          <h1 className="course-tilte">{course.title}</h1>
          <p className="course-para">{course.description}</p>
          <button className="course-ctner-btn">Create a free account</button>
        </div>
        <div  className="course-form">  <Form ></Form></div>
      
      </section>
    );
  }

  else {
    return (
      <section className="Crse-ctn-pge-ctner">
        <p>Course not found</p>
      </section>
    );
  }
};

export default CourseContentPage