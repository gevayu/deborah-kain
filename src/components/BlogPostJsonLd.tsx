import { useEffect } from "react";

interface BlogPostJsonLdProps {
  title: string;
  content: string;
  image_url: string | null;
  published_at: string;
  slug: string;
}

const BlogPostJsonLd = ({ title, content, image_url, published_at, slug }: BlogPostJsonLdProps) => {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      description: content.substring(0, 160),
      image: image_url || undefined,
      datePublished: published_at,
      url: `https://dvora.yuvalgeva.com/blog/${slug}`,
      author: {
        "@type": "Person",
        name: "דבורה קיין-רייניש",
        url: "https://dvora.yuvalgeva.com/about",
      },
      publisher: {
        "@type": "Organization",
        name: "SoulRoad",
        logo: {
          "@type": "ImageObject",
          url: "https://dvora.yuvalgeva.com/favicon.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://dvora.yuvalgeva.com/blog/${slug}`,
      },
      inLanguage: "he",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "blog-post-json-ld";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("blog-post-json-ld");
      if (el) el.remove();
    };
  }, [title, content, image_url, published_at, slug]);

  return null;
};

export default BlogPostJsonLd;
