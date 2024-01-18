import React from "react";
import ReactDOM from "react-dom";
import "./styles.css"; // Import your styles
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { CourseContentProvider } from "./store/CourseContent/index.js";
import { courseContent } from "./courseContentObject";
import { BlogContentProvider } from "./store/CourseContent/blogindex.js";
import { blogsTitleAndDescriptions } from "./blogContent.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CourseContentProvider CourseContent={courseContent}>
        <BlogContentProvider BlogContent={blogsTitleAndDescriptions}>
          <App />
        </BlogContentProvider>
      </CourseContentProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
