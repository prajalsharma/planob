// src/components/BlogCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = ({ title, description, image, link, pubDate, slug }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${slug}`, {
      state: { title, description, image, link, pubDate, slug },
    });
  };

  return (
    <div className="blog-card" onClick={handleClick}>
      <img src={image} alt={title} className="blog-image" />
      <div className="blog-content">
        <h3>{title}</h3>
        <p>{description?.slice(0, 140)}...</p>
      </div>
    </div>
  );
};

export default BlogCard;
