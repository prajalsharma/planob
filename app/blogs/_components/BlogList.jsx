"use client";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { fetchBeehiivRSS } from "@/utils/fetchBeehiivRSS";
import "./BlogList.css";
import { RefreshCcw } from "lucide-react";
import { useBlogContext } from "@/context/BlogContext";

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
  const { contexBlog, contextLoading } = useBlogContext();

  useEffect(() => {
    if (contexBlog && contexBlog.length > 0) {
      setBlogs(contexBlog);
      setIsLoading(false);
      console.log("context blog in blog", contexBlog);
    }
  }, [contexBlog]);

  // ✅ Show all blogs in main list
  const mainBlogs = showAll ? blogs : blogs.slice(0, 6);

  // ✅ Pick only the pinned ones by slug for sidebar
  const pinnedBlogs = blogs.filter((b) => PINNED_SLUGS.includes(b.slug));

  return (
    <div className="blog-page-wrapper">
      <div className="blog-main">
        <div className="flex items-center gap-4">
          <h2 className="blog-section-title shrink-0">
            Últimos artigos do plano B
          </h2>
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
            Nenhum blog encontrado. Por favor, tente novamente mais tarde.
          </p>
        )}

        {!showAll && blogs.length > 6 && (
          <div className="flex justify-center mt-8 mb-6">
            <button
              className="flex items-center gap-1.5 bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-primary-blue/80 transition group"
              onClick={() => setShowAll(true)}
            >
              Carregar Mais
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
          <h3 className="sidebar-title shrink-0"> Posts Fixados</h3>
          <span className="w-[95%] h-[0.1px] bg-[#e2e2e2] mb-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2 w-full">
          {pinnedBlogs.map((blog, idx) => (
            <BlogCard key={`pinned-${idx}`} {...blog} isPinned />
          ))}
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex items-center gap-4 col-span-2">
            <h3 className="sidebar-title shrink-0">Inscreva-se</h3>
            <span className="w-[95%] h-[0.1px] bg-[#e2e2e2] mb-2" />
          </div>
          <div className="bg-[#f6f6f6] p-4 rounded-lg">
            <h4 className="font-bold text-lg">
              Assine e aprenda a usar Bitcoin com confiança.
            </h4>
            <p className="text-sm text-muted-foreground my-2">
              Inscreva-se na newsletter para receber todas as atualizações.
            </p>
            <iframe
              src="https://embeds.beehiiv.com/09dd87db-dd35-4482-897d-1a30c52ec426?slim=true"
              data-test-id="beehiiv-embed"
              frameBorder="0"
              scrolling="no"
              style={{
                margin: 0,
                borderRadius: "0px !important",
                backgroundColor: "transparent",
              }}
              className="w-full h-14"
            ></iframe>
          </div>
        </div>
      </aside>
    </div>
  );
}
