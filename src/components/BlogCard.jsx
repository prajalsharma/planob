import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogCard.css";

export default function BlogCard({ title, image, description, pubDate, slug, ...rest }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${slug}`, {
      state: { title, image, description, pubDate, ...rest },
    });
  };

  const shortDescription = description?.replace(/<[^>]+>/g, "").slice(0, 100) + "...";

  return (
    <div className={`blog-card ${rest.isPinned ? "pinned" : ""}`} onClick={handleClick}>
      <img src={image} alt={title} className="blog-image" />
      <h4 className="blog-title">{title}</h4>
      <p className="blog-date">{new Date(pubDate).toLocaleDateString()}</p>
      {!rest.isPinned && <p className="blog-description">{shortDescription}</p>}
    </div>
  );
}
