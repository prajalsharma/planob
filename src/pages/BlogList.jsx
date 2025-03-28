// src/pages/BlogList.jsx
import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { fetchBeehiivRSS } from "../utils/fetchBeehiivRSS";
import "./BlogList.css"; // You'll create this file next

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBeehiivRSS()
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.error("[BlogList] Failed to fetch blogs:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="blog-list-container">
      <h2 className="blog-section-title">Últimos artigos da plano B</h2>

      {isLoading ? (
        <>
          {[1, 2, 3].map((i) => (
            <div className="blog-card skeleton" key={i}>
              <div className="skeleton-image" />
              <div className="skeleton-content">
                <div className="skeleton-line short" />
                <div className="skeleton-line" />
                <div className="skeleton-line" />
              </div>
            </div>
          ))}
        </>
      ) : blogs.length > 0 ? (
        blogs.map((blog, idx) => <BlogCard key={idx} {...blog} />)
      ) : (
        <p style={{ marginTop: "2rem", color: "#90a0cd" }}>
          Nenhum blog encontrado. Tente novamente mais tarde.
        </p>
      )}
    </div>
  );
}
