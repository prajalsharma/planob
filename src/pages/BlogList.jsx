import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { fetchBeehiivRSS } from "../utils/fetchBeehiivRSS";
import "./BlogList.css";
import { RefreshCcw } from "lucide-react";

// ✅ Manually define slugs for pinned posts
const PINNED_SLUGS = [
  "bitcoin-ja-esta-caro-",
  "plano-b-e-liana-fecham-parceria-para-simplificar-planos-de-heranca-",
  "bitcoins-nao-nascem-em-arvores-entenda-a-mineracao-",
]; // <-- Replace with actual slugs// Replace with actual slugs

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchBeehiivRSS()
      .then((data) => setBlogs(data))
      .catch((error) => console.error("[BlogList] Failed to fetch blogs:", error))
      .finally(() => setIsLoading(false));
  }, []);

  // ✅ Show all blogs in main list
  const mainBlogs = showAll ? blogs : blogs.slice(0, 6);

  // ✅ Pick only the pinned ones by slug for sidebar
  const pinnedBlogs = blogs.filter((b) => PINNED_SLUGS.includes(b.slug));

  return (
    <div className="blog-page-wrapper">
      <div className="blog-main">
        <div className="flex items-center gap-4">
          <h2 className="blog-section-title shrink-0">Latest articles from plan B</h2>
          <span className="w-[95%] h-[0.1px] bg-[#e2e2e2] mb-6" />
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 2xl:grid-cols-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div className="blog-card skeleton flex-col" key={i}>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 2xl:grid-cols-4">
            {mainBlogs.map((blog, idx) => (
              <BlogCard key={idx} {...blog} />
            ))}
          </div>
        ) : (
          <p style={{ marginTop: "2rem", color: "#90a0cd" }}>
            No blogs found. Please try again later.
          </p>
        )}

        {!showAll && blogs.length > 6 && (
          <div className="flex justify-center mt-8 mb-6">
            <button
              className="flex items-center gap-1.5 bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-primary-blue/80 transition group"
              onClick={() => setShowAll(true)}>
              Load More
              <RefreshCcw
                size={20}
                className="group-hover:animate-[spin_1s_linear_infinite_reverse]"
              />
            </button>
          </div>
        )}
      </div>

      <aside className="blog-sidebar lg:w-[300px]">
        <div className="flex items-center gap-4 col-span-2">
          <h3 className="sidebar-title shrink-0"> Pinned Posts</h3>
          <span className="w-[95%] h-[0.1px] bg-[#e2e2e2] mb-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2 w-full">
          {pinnedBlogs.map((blog, idx) => (
            <BlogCard key={`pinned-${idx}`} {...blog} isPinned />
          ))}
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex items-center gap-4 col-span-2">
            <h3 className="sidebar-title shrink-0">Subscribe</h3>
            <span className="w-[95%] h-[0.1px] bg-[#e2e2e2] mb-2" />
          </div>
          <div className="bg-[#f6f6f6] p-4 rounded-lg">
            <h4 className="font-bold text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
            <p className="text-sm text-muted-foreground my-2">
              Subscribe to the newsletter for all the latest updates.
            </p>
            <iframe
              src="https://embeds.beehiiv.com/e36d6976-5e62-426d-a96e-7ae21bf1e1b1?slim=true"
              data-test-id="beehiiv-embed"
              frameBorder="0"
              scrolling="no"
              style={{ margin: 0, borderRadius: "0px", backgroundColor: "transparent" }}
              className="w-full h-14"></iframe>
          </div>
        </div>
      </aside>
    </div>
  );
}
