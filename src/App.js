import "./components/Header";
import './App.css';
import { Home } from "./pages/Home";
import Blog from "./pages/Blog";
import { Route,Routes } from "react-router-dom";
import { Fragment } from "react";
import CourseContent from "./pages/CourseContent";


function App() {
  return (

    <div className="bg-black min-h-screen text-white">
      <Fragment>
      <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/blogs/:id" element={<Blog/>}/>
    <Route path="/courses/:id" element={<CourseContent />}/>
    </Routes>
    </Fragment>
    </div>
  );
}

export default App;
