import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { CalendarIcon, MapPin, Users, Coins, MessageCircle } from "lucide-react";

import photo1 from "@/assets/phototherapy-1.jpg";
import photo2 from "@/assets/phototherapy-3.jpg";
import photo3 from "@/assets/phototherapy-5.jpg";
import sc1 from "@/assets/soulcollage-1.jpg";
import sc2 from "@/assets/soulcollage-3.jpg";
import sc3 from "@/assets/soulcollage-5.jpg";

const stripImages: Record<string, string[]> = {
  phototherapy: [photo1, photo2, photo3],
  "soul-collage": [sc1, sc2, sc3],
  mixed: [photo1, sc1, photo2],
  default: [photo3, sc3, photo1],
};

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

interface UpcomingWorkshopsProps {
  filterType: "phototherapy" | "soul-collage" | "all";
}

const UpcomingWorkshops = ({ filterType }: UpcomingWorkshopsProps) => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkshops = async () => {
      const today = new Date().toISOString().split("T")[0];
      const { data } = await supabase
        .from("workshops")
        .select("*")
        .gte("date", today)
        .order("date", { ascending: true });

      if (data) {
        const filtered =
          filterType === "all"
            ? data
            : data.filter((w: any) => w.types?.includes(filterType));
        setWorkshops(filtered as Workshop[]);
      }
      setLoading(false);
    };
    fetchWorkshops();
  }, [filterType]);

  if (loading) return null;
  if (workshops.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-section-alt">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12"
        >
          סדנאות קרובות
        </motion.h2>
        <div className="grid gap-6">
          {workshops.map((workshop, i) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50"
              dir="rtl"
            >
              {/* Image strip */}
              <div 
                className="h-24 md:h-28 w-full bg-gradient-to-l from-primary/20 via-primary/10 to-transparent"
                style={{
                  backgroundImage: workshop.types?.includes("phototherapy") 
                    ? "linear-gradient(to left, hsl(var(--primary) / 0.25), hsl(var(--primary) / 0.1), transparent)"
                    : workshop.types?.includes("soul-collage")
                    ? "linear-gradient(to left, hsl(var(--accent) / 0.3), hsl(var(--accent) / 0.1), transparent)"
                    : "linear-gradient(to left, hsl(var(--muted) / 0.4), hsl(var(--muted) / 0.15), transparent)"
                }}
              />
              <div className="p-6 md:p-8">
              {filterType === "all" && workshop.types?.length > 0 && (
                <span className="inline-block text-xs font-body font-medium px-3 py-1 rounded-full bg-primary/10 text-primary mb-3">
                  {workshop.types.includes("phototherapy") && workshop.types.includes("soul-collage")
                    ? "סדנה משולבת"
                    : workshop.types.includes("phototherapy")
                    ? "סדנת פוטותרפיה"
                    : workshop.types.includes("soul-collage")
                    ? "סדנת סול קולאז'"
                    : workshop.types.includes("soul-road")
                    ? "סדנת סול רואד"
                    : "סדנה כללית"}
                </span>
              )}
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                {workshop.name}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                {workshop.description}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-body">
                <span className="flex items-center gap-1.5">
                  <CalendarIcon className="w-4 h-4" />
                  {new Date(workshop.date).toLocaleDateString("he-IL", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {workshop.location}
                </span>
                {workshop.target_audience && (
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    {workshop.target_audience}
                  </span>
                )}
                {workshop.cost && (
                  <span className="flex items-center gap-1.5">
                    <Coins className="w-4 h-4" />
                    {workshop.cost}
                  </span>
                )}
              </div>
              <div className="mt-4 flex justify-start">
                <a
                  href={`https://wa.me/972543098970?text=${encodeURIComponent(`היי, אשמח לשמוע פרטים נוספים על הסדנה: ${workshop.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-body font-medium px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  יצירת קשר
                </a>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingWorkshops;
