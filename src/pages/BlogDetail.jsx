// src/pages/BlogDetail.jsx
import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { state } = useLocation();
  const { slug } = useParams();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="blog-container">
        <p>
          Blog not found for <code>{slug}</code>.
        </p>
        <button onClick={() => navigate("/")}>← Voltar à Home</button>
      </div>
    );
  }

  const { title, image, pubDate, content, link } = state;

  return (
    <div className="blog-container">
      <img src={image} alt={title} className="blog-banner" />
      <h1>{title}</h1>
      <p className="blog-date">{new Date(pubDate).toLocaleDateString()}</p>
      <div
        className="blog-body"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="read-original">
        <a href={link} target="_blank" rel="noopener noreferrer">
          Ler na Beehiiv ↗
        </a>
      </div>
    </div>
  );
};

export default BlogDetail;
