import React, { Fragment } from 'react'
import CourseContentPage from '../components/CourseContentPage'
import CourseContentMid from '../components/CourseContentMid'
import { Footer } from "../components/Footer";
import Header from "../components/Header"

const CourseContent = () => {
  return (
    <Fragment>
      <Header />
   <CourseContentPage />
   <CourseContentMid />
   <Footer />
   </Fragment>
  )
}

export default CourseContent