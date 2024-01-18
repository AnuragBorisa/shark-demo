import React, { Fragment } from "react";
import BlogPage from "../components/BlogPage";
import BlogPageMId from "../components/BlogPageMId";
import { Footer } from "../components/Footer";
import Header from "../components/Header";


const Blog = () => {
  return (
    <Fragment>
      <Header/>
  <BlogPage />
  <BlogPageMId/>
  <Footer />
 
  </Fragment>

  );
};

export default Blog;
