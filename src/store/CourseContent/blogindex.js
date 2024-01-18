import React from "react";
import { createContext, useContext } from "react";
const BlogContentContext = createContext([]);
const BlogContentProvider = (props) => {
  return (
    <BlogContentContext.Provider value={props.BlogContent}>
      {" "}
      {props.children}
    </BlogContentContext.Provider>
  );
};
const useBlogContext = () => {
  return useContext(BlogContentContext);
};
export { useBlogContext, BlogContentProvider };
