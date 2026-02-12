import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Share2 } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorBanner from "@/components/AuthorBanner";
import BlogPostJsonLd from "@/components/BlogPostJsonLd";
import { supabase } from "@/integrations/supabase/client";

interface Post {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  published_at: string;
  slug: string;
}

interface NavPost {
  title: string;
  slug: string;
  image_url: string | null;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [prevPost, setPrevPost] = useState<NavPost | null>(null);
  const [nextPost, setNextPost] = useState<NavPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, content, image_url, published_at, slug")
        .eq("slug", slug)
        .maybeSingle();

      if (!error && data) {
        setPost(data);

        // Fetch prev (older) and next (newer) posts
        const [prevRes, nextRes] = await Promise.all([
          supabase
            .from("blog_posts")
            .select("title, slug, image_url")
            .lt("published_at", data.published_at)
            .order("published_at", { ascending: false })
            .limit(1)
            .maybeSingle(),
          supabase
            .from("blog_posts")
            .select("title, slug, image_url")
            .gt("published_at", data.published_at)
            .order("published_at", { ascending: true })
            .limit(1)
            .maybeSingle(),
        ]);

        setPrevPost(prevRes.data || null);
        setNextPost(nextRes.data || null);
      }
      setLoading(false);
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-16 container mx-auto px-4 max-w-3xl">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-2/3" />
            <div className="h-4 bg-muted rounded w-1/4" />
            <div className="aspect-video bg-muted rounded-2xl" />
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-3/4" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-16 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-4">הפוסט לא נמצא</h1>
          <Link to="/blog" className="text-primary hover:underline font-body">חזרה לבלוג</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <BlogPostJsonLd {...post} />
      <Navbar />
      <article className="pt-24 pb-16 md:pt-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline font-body mb-8">
            <ArrowRight className="w-4 h-4" />
            חזרה לבלוג
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm text-muted-foreground/60 font-body mb-3">
              {new Date(post.published_at).toLocaleDateString("he-IL", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-8">
              {post.title}
            </h1>

            {post.image_url && (
              <div className="aspect-video rounded-2xl overflow-hidden mb-10 relative shadow-xl shadow-black/15">
                <img src={post.image_url} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            )}

            <div className="prose prose-xl max-w-none font-body text-muted-foreground leading-relaxed whitespace-pre-line text-lg md:text-xl">
              {post.content}
            </div>

            {/* Share buttons */}
            <div className="mt-12 pt-8 border-t border-border/50 flex items-center gap-4">
              <span className="text-sm text-muted-foreground/60 font-body flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                שיתוף
              </span>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
                aria-label="שיתוף בוואטסאפ"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2]/20 transition-colors"
                aria-label="שיתוף בפייסבוק"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href={`https://www.instagram.com/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#E4405F]/10 text-[#E4405F] hover:bg-[#E4405F]/20 transition-colors"
                aria-label="שיתוף באינסטגרם"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2]/20 transition-colors"
                aria-label="שיתוף בלינקדאין"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>

            <AuthorBanner />
          </motion.div>
        </div>
      </article>

      {/* Post Navigation */}
      {(prevPost || nextPost) && (
        <nav className="border-t border-border/50 bg-section-alt">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0">
              {/* Previous (older) post - right side in RTL */}
              {prevPost ? (
                <Link
                  to={`/blog/${prevPost.slug}`}
                  className="group flex items-center gap-3 p-4 md:p-5 md:border-l border-b md:border-b-0 border-border/50 hover:bg-card/60 transition-colors"
                >
                  {prevPost.image_url && (
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0 relative shadow-lg shadow-black/10">
                      <img src={prevPost.image_url} alt={prevPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground/60 font-body mb-1">
                      <ArrowRight className="w-4 h-4" />
                      הפוסט הקודם
                    </span>
                    <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {prevPost.title}
                    </h3>
                  </div>
                </Link>
              ) : (
                <div className="hidden md:block" />
              )}

              {/* Next (newer) post - left side in RTL */}
              {nextPost ? (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="group flex items-center gap-3 p-4 md:p-5 hover:bg-card/60 transition-colors flex-row-reverse text-left"
                >
                  {nextPost.image_url && (
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0 relative shadow-lg shadow-black/10">
                      <img src={nextPost.image_url} alt={nextPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <span className="flex items-center justify-end gap-1 text-sm text-muted-foreground/60 font-body mb-1">
                      הפוסט הבא
                      <ArrowLeft className="w-4 h-4" />
                    </span>
                    <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {nextPost.title}
                    </h3>
                  </div>
                </Link>
              ) : (
                <div className="hidden md:block" />
              )}
            </div>
          </div>
        </nav>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
