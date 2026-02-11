import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Get all blog posts with external image URLs
    const { data: posts, error } = await supabase
      .from("blog_posts")
      .select("id, slug, image_url")
      .not("image_url", "is", null);

    if (error) throw error;

    const results = [];

    for (const post of posts || []) {
      if (!post.image_url || post.image_url.includes("supabase")) {
        results.push({ slug: post.slug, status: "skipped" });
        continue;
      }

      try {
        // Download image
        const response = await fetch(post.image_url);
        if (!response.ok) {
          results.push({ slug: post.slug, status: "fetch_failed" });
          continue;
        }

        const buffer = await response.arrayBuffer();
        const contentType = response.headers.get("content-type") || "image/jpeg";
        const ext = contentType.includes("png") ? "png" : contentType.includes("webp") ? "webp" : "jpg";
        const fileName = `${post.slug}.${ext}`;

        // Upload to storage
        const { error: uploadError } = await supabase.storage
          .from("blog-images")
          .upload(fileName, buffer, { contentType, upsert: true });

        if (uploadError) {
          results.push({ slug: post.slug, status: "upload_failed", error: uploadError.message });
          continue;
        }

        // Get public URL
        const { data: urlData } = supabase.storage.from("blog-images").getPublicUrl(fileName);

        // Update blog post
        await supabase
          .from("blog_posts")
          .update({ image_url: urlData.publicUrl })
          .eq("id", post.id);

        results.push({ slug: post.slug, status: "migrated", url: urlData.publicUrl });
      } catch (e) {
        results.push({ slug: post.slug, status: "error", error: e.message });
      }
    }

    return new Response(JSON.stringify({ results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
