"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { fetchBeehiivRSS } from "@/utils/fetchBeehiivRSS";

const BlogContext = createContext(null);

export const BlogProvider = ({ children }) => {
  const [contexBlog, setContextBlog] = useState([]);
  const [contextLoading, setContextLoading] = useState(true);

  useEffect(() => {
    fetchBeehiivRSS().then((data) => {
      setContextBlog(data);
      console.log("context data", data);
      setContextLoading(false);
    });
  }, []);
  return (
    <BlogContext.Provider value={{ contexBlog, contextLoading }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => useContext(BlogContext);
