// src/pages/BlogDetail.jsx
import { motion, useScroll } from "framer-motion";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "./BlogDetail.css";
import X from "../assets/x.svg";
import Telegram from "../assets/telegram.svg";
import Facebook from "../assets/facebook.svg";
import Farcaster from "../assets/farcaster.svg";
import { useEffect, useState } from "react";
import { fetchBeehiivRSS } from "@/utils/fetchBeehiivRSS";
import BlogCard from "@/components/BlogCard";

const generateSocialLinks = (title, slug) => {
  const blogUrl = `https://planob.vercel.app/blog/${slug}`;
  return [
    {
      name: "Twitter",
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        blogUrl
      )}&text=${encodeURIComponent(title)}`,
      icon: X,
    },
    {
      name: "Telegram",
      url: `https://t.me/share/url?url=${encodeURIComponent(blogUrl)}&text=${encodeURIComponent(
        title
      )}`,
      icon: Telegram,
    },
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`,
      icon: Facebook,
    },
    {
      name: "Farcaster",
      url: `https://warpcast.com/~/compose?text=${encodeURIComponent(title)}%20${encodeURIComponent(
        blogUrl
      )}`,
      icon: Farcaster,
    },
  ];
};

const BlogDetail = () => {
  const { scrollYProgress } = useScroll();

  const { state } = useLocation();
  const { slug } = useParams();
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBeehiivRSS()
      .then((blogs) => {
        const filteredBlogs = blogs.filter((blog) => blog.slug !== slug);
        const randomBlogs = filteredBlogs.sort(() => 0.5 - Math.random()).slice(0, 3);
        setBlogs(randomBlogs);
      })
      .catch((error) => console.error("[BlogList] Failed to fetch blogs:", error))
      .finally(() => setIsLoading(false));
  }, [slug]);

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

  const { title, image, pubDate, content } = state;

  return (
    <div className="blog-container">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed bg-primary-blue h-3 inset-0 z-100 origin-left"
      />
      <img src={image} alt={title} className="blog-banner" />
      <h1 className="font-bold">{title}</h1>
      <div className="flex justify-between items-start">
        <p className="blog-date">
          {new Date(pubDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <div className="flex gap-2 items-start">
          {generateSocialLinks(title, slug).map((social) => (
            <div
              key={social.name}
              className="bg-[#f0f0f0] rounded-full p-2 flex gap-2 items-center hover:bg-primary-blue transition-colors">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title={`Share on ${social.name}`}>
                <img src={social.icon} alt={social.name} className="size-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="blog-body" dangerouslySetInnerHTML={{ __html: content }} />
      {isLoading ? (
        <div className="flex flex-col gap-2 mt-5">
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
        </div>
      ) : (
        <div className="flex flex-col gap-2 mt-5">
          <h2 className="text-2xl font-semibold">Read More...</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs.map((blog, idx) => (
              <BlogCard key={idx} {...blog} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
