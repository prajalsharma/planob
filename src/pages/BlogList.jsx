import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { fetchBeehiivRSS } from "../utils/fetchBeehiivRSS";
import "./BlogList.css";

// ✅ Manually define slugs for pinned posts
const PINNED_SLUGS = ["plano-b-e-liana-fecham-parceria-para-simplificar-planos-de-heranca-", "bitcoins-nao-nascem-em-arvores-entenda-a-mineracao-"]; // <-- Replace with actual slugs

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBeehiivRSS()
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) =>
        console.error("[BlogList] Failed to fetch blogs:", error)
      )
      .finally(() => setIsLoading(false));
  }, []);

  // ✅ Separate pinned and main blogs
  const pinnedBlogs = blogs.filter((b) => PINNED_SLUGS.includes(b.slug));
  const mainBlogs = blogs.filter((b) => !PINNED_SLUGS.includes(b.slug));

  return (
    <div className="blog-page-wrapper">
      <div className="blog-main">
        <h2 className="blog-section-title">Latest articles from plan B</h2>

        {isLoading ? (
          <div className="blog-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div className="blog-card skeleton" key={i}>
                <div className="skeleton-image" />
                <div className="skeleton-content">
                  <div className="skeleton-line short" />
                  <div className="skeleton-line" />
                  <div className="skeleton-line" />
                </div>
              </div>
            ))}
          </div>
        ) : mainBlogs.length > 0 ? (
          <div className="blog-grid">
            {mainBlogs.map((blog, idx) => (
              <BlogCard key={idx} {...blog} />
            ))}
          </div>
        ) : (
          <p style={{ marginTop: "2rem", color: "#90a0cd" }}>
            No blogs found. Please try again later.
          </p>
        )}
      </div>

      <aside className="blog-sidebar">
        <h3 className="sidebar-title">📌 Pinned Posts</h3>
        {pinnedBlogs.map((blog, idx) => (
          <BlogCard key={`pinned-${idx}`} {...blog} isPinned />
        ))}
      </aside>
    </div>
  );
}
