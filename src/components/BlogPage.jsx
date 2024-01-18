import React from "react";
import "./BlogPage.css";
import blogimage from "../resources/_c856ee52-05d9-418f-b73f-bb11fb209cce.jpeg";
import { useBlogContext } from "../store/CourseContent/blogindex";
import { useParams } from "react-router-dom";
const BlogPage = () => {
   const blogcontent = useBlogContext();
   const params = useParams();
   const blogs = blogcontent.find(topic=>topic.endpoint === params.id)
   if(blogs){
      return (
         <section className="blog-pge-main">
           <div className="blog-right">
             <h1 className="blog-heading">
              {blogs.title}
             </h1>
             <h2 className="blog-author">blog author and date</h2>
             <div className="blog-content-with-links">
               <div className="blog-share">
                 <button className="blg-share-btn">facebook</button>
                 <button className="blg-share-btn">Instagram</button>
                 <button className="blg-share-btn">Linkdin</button>
               </div>
     
               <p className="blog-content">
                 <h1 className="blog-interal-heading">{blogs.description}</h1>
                 {blogs.blogcontent}
               </p>
             </div>
           </div>
         </section>
       );
   } 
  
};

export default BlogPage;
