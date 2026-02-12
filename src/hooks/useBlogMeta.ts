import { useEffect } from "react";

const DOMAIN = "https://dvora.yuvalgeva.com";

interface UseBlogMetaProps {
  title: string;
  content: string;
  image_url: string | null;
  slug: string;
}

const setMeta = (property: string, content: string) => {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const useBlogMeta = ({ title, content, image_url, slug }: UseBlogMetaProps) => {
  useEffect(() => {
    const fullTitle = `${title} | SoulRoad`;
    const description = content.substring(0, 155).replace(/\n/g, " ") + "…";
    const url = `${DOMAIN}/blog/${slug}`;

    // Save originals
    const origTitle = document.title;
    const origDesc = document.querySelector('meta[name="description"]')?.getAttribute("content") || "";

    document.title = fullTitle;

    let descMeta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!descMeta) {
      descMeta = document.createElement("meta");
      descMeta.setAttribute("name", "description");
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute("content", description);

    setMeta("og:title", fullTitle);
    setMeta("og:description", description);
    setMeta("og:type", "article");
    setMeta("og:url", url);
    if (image_url) {
      setMeta("og:image", image_url);
    }

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    if (image_url) {
      setMeta("twitter:image", image_url);
    }

    return () => {
      document.title = origTitle;
      if (descMeta) descMeta.setAttribute("content", origDesc);
      ["og:title", "og:description", "og:type", "og:url", "og:image", "twitter:title", "twitter:description", "twitter:image"].forEach((prop) => {
        const el = document.querySelector(`meta[property="${prop}"]`);
        if (el) el.remove();
      });
    };
  }, [title, content, image_url, slug]);
};

export default useBlogMeta;
