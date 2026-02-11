import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Pencil, Trash2, Plus, LogOut, Upload, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  image_url: string | null;
  published_at: string;
}

const AdminDashboard = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [form, setForm] = useState({ title: "", slug: "", excerpt: "", content: "", image_url: "" });
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
    fetchPosts();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/admin");
      return;
    }
    const { data: roles } = await supabase.from("user_roles").select("role").single();
    if (roles?.role !== "admin") {
      await supabase.auth.signOut();
      navigate("/admin");
    }
  };

  const fetchPosts = async () => {
    const { data } = await supabase.from("blog_posts").select("*").order("published_at", { ascending: false });
    setPosts(data || []);
    setLoading(false);
  };

  const openNew = () => {
    setEditingPost(null);
    setForm({ title: "", slug: "", excerpt: "", content: "", image_url: "" });
    setImagePreview(null);
    setDialogOpen(true);
  };

  const openEdit = (post: BlogPost) => {
    setEditingPost(post);
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || "",
      content: post.content,
      image_url: post.image_url || "",
    });
    setImagePreview(post.image_url || null);
    setDialogOpen(true);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-zא-ת0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleSave = async () => {
    setSaving(true);
    const postData = {
      title: form.title,
      slug: form.slug || generateSlug(form.title),
      excerpt: form.excerpt || null,
      content: form.content,
      image_url: form.image_url || null,
    };

    let error;
    if (editingPost) {
      ({ error } = await supabase.from("blog_posts").update(postData).eq("id", editingPost.id));
    } else {
      ({ error } = await supabase.from("blog_posts").insert(postData));
    }

    if (error) {
      toast({ title: "שגיאה", description: error.message, variant: "destructive" });
    } else {
      toast({ title: editingPost ? "הפוסט עודכן" : "הפוסט נוצר" });
      setDialogOpen(false);
      fetchPosts();
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("למחוק את הפוסט?")) return;
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) {
      toast({ title: "שגיאה", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "הפוסט נמחק" });
      fetchPosts();
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-heading font-bold text-foreground">ניהול בלוג</h1>
          <div className="flex gap-2">
            <Button onClick={openNew} size="sm">
              <Plus className="w-4 h-4 ml-1" /> פוסט חדש
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 ml-1" /> יציאה
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {loading ? (
          <p className="text-center text-muted-foreground">טוען...</p>
        ) : posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">אין פוסטים עדיין</p>
            <Button onClick={openNew}>צור פוסט ראשון</Button>
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <div key={post.id} className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-foreground truncate">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {new Date(post.published_at).toLocaleDateString("he-IL")}
                  </p>
                </div>
                <div className="flex gap-2 mr-4">
                  <Button variant="ghost" size="icon" onClick={() => openEdit(post)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(post.id)}>
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" dir="rtl">
          <DialogHeader>
            <DialogTitle>{editingPost ? "עריכת פוסט" : "פוסט חדש"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label>כותרת</Label>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Slug (אוטומטי אם ריק)</Label>
              <Input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} dir="ltr" />
            </div>
            <div className="space-y-2">
              <Label>תקציר</Label>
              <Textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} rows={2} />
            </div>
            <div className="space-y-2">
              <Label>תמונה</Label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  setUploading(true);
                  const ext = file.name.split(".").pop() || "jpg";
                  const fileName = `${Date.now()}_${crypto.randomUUID()}.${ext}`;
                  const { error: uploadError } = await supabase.storage
                    .from("blog-images")
                    .upload(fileName, file, { contentType: file.type, upsert: true });
                  if (uploadError) {
                    toast({ title: "שגיאה בהעלאה", description: uploadError.message, variant: "destructive" });
                  } else {
                    const { data } = supabase.storage.from("blog-images").getPublicUrl(fileName);
                    setForm({ ...form, image_url: data.publicUrl });
                    setImagePreview(data.publicUrl);
                    toast({ title: "התמונה הועלתה בהצלחה" });
                  }
                  setUploading(false);
                }}
              />
              {imagePreview ? (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border">
                  <img src={imagePreview} alt="תצוגה מקדימה" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => {
                      setImagePreview(null);
                      setForm({ ...form, image_url: "" });
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                    className="absolute top-2 left-2 bg-background/80 rounded-full p-1 hover:bg-background"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  disabled={uploading}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="w-4 h-4 ml-2" />
                  {uploading ? "מעלה..." : "העלה תמונה"}
                </Button>
              )}
            </div>
            <div className="space-y-2">
              <Label>תוכן</Label>
              <Textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} rows={12} />
            </div>
            <Button onClick={handleSave} className="w-full" disabled={saving || !form.title || !form.content}>
              {saving ? "שומר..." : editingPost ? "עדכן" : "צור פוסט"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
