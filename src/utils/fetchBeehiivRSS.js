// src/utils/fetchBeehiivRSS.js

const generateSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // remove punctuation
    .replace(/\s+/g, "-"); // replace spaces with hyphens

export const fetchBeehiivRSS = async () => {
  const proxyUrl = "https://api.allorigins.win/raw?url=";
  const rssUrl = "https://rss.beehiiv.com/feeds/ScKOEC3eoZ.xml";

  const res = await fetch(proxyUrl + encodeURIComponent(rssUrl));
  const text = await res.text();

  const parser = new DOMParser();
  const xml = parser.parseFromString(text, "application/xml");

  const items = Array.from(xml.querySelectorAll("item")).map((item) => {
    const title = item.querySelector("title")?.textContent;
    const link = item.querySelector("link")?.textContent;
    const pubDate = item.querySelector("pubDate")?.textContent;
    const description = item.querySelector("description")?.textContent;
    const content = item.getElementsByTagNameNS(
      "http://purl.org/rss/1.0/modules/content/",
      "encoded"
    )[0]?.textContent;

    const image =
      item.querySelector("media\\:content")?.getAttribute("url") ||
      item.querySelector("enclosure")?.getAttribute("url") ||
      "/default-blog.jpg";

    return {
      title,
      link,
      pubDate,
      description,
      content, // ✅ This is the full HTML content
      image,
      slug: generateSlug(title),
    };
  });

  return items;
};
