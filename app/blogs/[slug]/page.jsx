"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";
import { useParams } from "next/navigation";
import "./_components/BlogDetail.css";
import { fetchBeehiivRSS } from "@/utils/fetchBeehiivRSS";
import BlogCard from "../_components/BlogCard";

const generateSocialLinks = (title, slug) => {
  const blogUrl = `https://planob.vercel.app/blogs/${slug}`;
  return [
    {
      name: "Twitter",
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        blogUrl
      )}&text=${encodeURIComponent(title)}`,
      icon: "/assets/x.svg",
    },
    {
      name: "Telegram",
      url: `https://t.me/share/url?url=${encodeURIComponent(blogUrl)}&text=${encodeURIComponent(
        title
      )}`,
      icon: "/assets/telegram.svg",
    },
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`,
      icon: "/assets/facebook.svg",
    },
    {
      name: "Farcaster",
      url: `https://warpcast.com/~/compose?text=${encodeURIComponent(title)}%20${encodeURIComponent(
        blogUrl
      )}`,
      icon: "/assets/farcaster.svg",
    },
  ];
};

const page = () => {
  const { scrollYProgress } = useScroll();
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBeehiivRSS()
      .then((blogs) => {
        const current = blogs.find((b) => b.slug === slug);
        const others = blogs
          .filter((b) => b.slug !== slug)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        setBlog(current);
        setRelatedBlogs(others);
      })
      .catch((error) => console.error("[BlogDetail] Failed to fetch blog:", error))
      .finally(() => setIsLoading(false));
  }, [slug]);

  if (!blog) {
    return (
      <div className="blog-container pt-40">
        <p>
          Blog not found for <code>{slug}</code>.
        </p>
      </div>
    );
  }

  const { title, image, pubDate, content } = blog;

  return (
    <div className="blog-container pt-40">
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

      <div className="flex flex-col gap-2 mt-5">
        <h2 className="text-2xl font-semibold">Leia Mais...</h2>
        {isLoading ? (
          <div className="flex flex-col gap-2">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedBlogs.map((blog, idx) => (
              <BlogCard key={idx} {...blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default page;
