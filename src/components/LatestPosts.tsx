import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  image_url: string | null;
  published_at: string;
}

const LatestPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, image_url, published_at")
        .order("published_at", { ascending: false })
        .limit(2);

      if (!error && data) {
        setPosts(data);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-section-alt">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="h-8 bg-muted rounded w-48 mx-auto mb-12 animate-pulse" />
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-card/60 rounded-2xl border border-border/50 overflow-hidden animate-pulse">
                <div className="aspect-video bg-muted" />
                <div className="p-6 space-y-3">
                  <div className="h-6 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-section-alt">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
            מהבלוג
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            מחשבות, סיפורים ותובנות מהדרך
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="block bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg transition-shadow group"
              >
                {post.image_url && (
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                )}
                <div className="p-6">
                  <p className="text-sm text-muted-foreground/60 font-body mb-2">
                    {new Date(post.published_at).toLocaleDateString("he-IL", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-muted-foreground font-body leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:underline font-body text-lg"
          >
            לכל הפוסטים
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestPosts;
