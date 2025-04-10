"use client";
import { useRouter } from "next/navigation";
import "./BlogCard.css";

export default function BlogCard({ title, image, description, pubDate, slug, ...rest }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blogs/${slug}`);
    window.scrollTo(0, 0);
  };

  const shortDescription = description?.replace(/<[^>]+>/g, "").slice(0, 50) + "...";

  return (
    <article
      className={`blog-card gap-2 flex overflow-hidden cursor-pointer ${
        rest.isPinned
          ? "pinned rounded pb-2"
          : "flex-col border-1 border-[#e0e0e0] shadow-[0_2px_6px_rgba(0, 0, 0, 0.05)] rounded-xl"
      }`}
      onClick={handleClick}>
      <div className={`flex gap-1 ${rest.isPinned ? "flex-row" : "flex-col"}`}>
        <div className={`${rest.isPinned ? "shrink-0 flex items-center mt-1" : "w-full"}`}>
          <img
            src={image}
            alt={title}
            className={` ${
              rest.isPinned
                ? "size-25 rounded-2xl  object-cover"
                : "w-full h-[11.25rem] object-cover border-b-1 border-b-[#eee]"
            }`}
          />
        </div>
        <div className={`${rest.isPinned ? "flex flex-col gap-1" : ""}`}>
          <h4 className="blog-title">{title}</h4>
          <p className="date">{new Date(pubDate).toLocaleDateString()}</p>
        </div>
      </div>
      {!rest.isPinned && <p className="blog-description">{shortDescription}</p>}
    </article>
  );
}
