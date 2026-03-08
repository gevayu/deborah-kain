import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Pencil, Trash2, Plus, CalendarIcon, Upload, X } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Workshop {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  target_audience: string;
  cost: string;
  types: string[];
}

const WORKSHOP_TYPES = [
  { value: "phototherapy", label: "פוטותרפיה" },
  { value: "soul-collage", label: "סול קולאז'" },
  { value: "soul-road", label: "סול רואד" },
  { value: "general", label: "כללי" },
];

const WorkshopManager = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingWorkshop, setEditingWorkshop] = useState<Workshop | null>(null);
  const [form, setForm] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
    target_audience: "",
    cost: "",
    types: [] as string[],
  });
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchWorkshops();
  }, []);

  const fetchWorkshops = async () => {
    const { data } = await supabase
      .from("workshops")
      .select("*")
      .order("date", { ascending: true });
    setWorkshops((data as Workshop[]) || []);
    setLoading(false);
  };

  const openNew = () => {
    setEditingWorkshop(null);
    setForm({
      name: "",
      date: new Date().toISOString().split("T")[0],
      location: "",
      description: "",
      target_audience: "",
      cost: "",
      types: [],
    });
    setDialogOpen(true);
  };

  const openEdit = (w: Workshop) => {
    setEditingWorkshop(w);
    setForm({
      name: w.name,
      date: w.date,
      location: w.location,
      description: w.description,
      target_audience: w.target_audience,
      cost: w.cost,
      types: w.types || [],
    });
    setDialogOpen(true);
  };

  const toggleType = (type: string) => {
    setForm((f) => ({
      ...f,
      types: f.types.includes(type)
        ? f.types.filter((t) => t !== type)
        : [...f.types, type],
    }));
  };

  const handleSave = async () => {
    if (!form.name || !form.date || !form.location || !form.description) return;
    setSaving(true);

    const workshopData = {
      name: form.name,
      date: form.date,
      location: form.location,
      description: form.description,
      target_audience: form.target_audience,
      cost: form.cost,
    types: form.types as ("phototherapy" | "soul-collage" | "general")[],
    };

    let error;
    if (editingWorkshop) {
      ({ error } = await supabase
        .from("workshops")
        .update(workshopData)
        .eq("id", editingWorkshop.id));
    } else {
      ({ error } = await supabase.from("workshops").insert([workshopData]));
    }

    if (error) {
      toast({ title: "שגיאה", description: error.message, variant: "destructive" });
    } else {
      toast({ title: editingWorkshop ? "הסדנה עודכנה" : "הסדנה נוצרה" });
      setDialogOpen(false);
      fetchWorkshops();
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("למחוק את הסדנה?")) return;
    const { error } = await supabase.from("workshops").delete().eq("id", id);
    if (error) {
      toast({ title: "שגיאה", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "הסדנה נמחקה" });
      fetchWorkshops();
    }
  };

  const typeLabels = (types: string[]) =>
    types
      .map((t) => WORKSHOP_TYPES.find((wt) => wt.value === t)?.label || t)
      .join(", ");

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-heading font-bold text-foreground">ניהול סדנאות</h2>
        <Button onClick={openNew} size="sm">
          <Plus className="w-4 h-4 ml-1" /> סדנה חדשה
        </Button>
      </div>

      {loading ? (
        <p className="text-center text-muted-foreground">טוען...</p>
      ) : workshops.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground mb-4">אין סדנאות עדיין</p>
          <Button onClick={openNew}>צור סדנה ראשונה</Button>
        </div>
      ) : (
        <div className="space-y-3">
          {workshops.map((w) => (
            <div
              key={w.id}
              className="flex items-center justify-between p-4 bg-card rounded-lg border border-border"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold text-foreground truncate">
                  {w.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {new Date(w.date).toLocaleDateString("he-IL")} · {w.location}
                  {w.types?.length > 0 && ` · ${typeLabels(w.types)}`}
                </p>
              </div>
              <div className="flex gap-2 mr-4">
                <Button variant="ghost" size="icon" onClick={() => openEdit(w)}>
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(w.id)}>
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto" dir="rtl">
          <DialogHeader>
            <DialogTitle>
              {editingWorkshop ? "עריכת סדנה" : "סדנה חדשה"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label>שם הסדנה</Label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>תאריך</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-right font-normal",
                      !form.date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="ml-2 h-4 w-4" />
                    {form.date
                      ? format(new Date(form.date + "T00:00:00"), "dd/MM/yyyy")
                      : "בחר תאריך"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={form.date ? new Date(form.date + "T00:00:00") : undefined}
                    onSelect={(date) => {
                      if (date) {
                        setForm({
                          ...form,
                          date: format(date, "yyyy-MM-dd"),
                        });
                      }
                    }}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>מיקום</Label>
              <Input
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>הסבר על הסדנה</Label>
              <Textarea
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label>קהל יעד</Label>
              <Input
                value={form.target_audience}
                onChange={(e) =>
                  setForm({ ...form, target_audience: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>עלות</Label>
              <Input
                value={form.cost}
                onChange={(e) => setForm({ ...form, cost: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>סוג הסדנה</Label>
              <div className="flex flex-wrap gap-4 mt-1">
                {WORKSHOP_TYPES.map((type) => (
                  <label
                    key={type.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Checkbox
                      checked={form.types.includes(type.value)}
                      onCheckedChange={() => toggleType(type.value)}
                    />
                    <span className="text-sm font-body">{type.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <Button
              onClick={handleSave}
              className="w-full"
              disabled={
                saving ||
                !form.name ||
                !form.date ||
                !form.location ||
                !form.description
              }
            >
              {saving
                ? "שומר..."
                : editingWorkshop
                ? "עדכן סדנה"
                : "צור סדנה"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WorkshopManager;
