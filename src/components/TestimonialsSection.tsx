import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "אחרי שנים של חיפוש בחוץ, מצאתי את עצמי כאן, בפנים. התהליך עם SoulCollage לימד אותי להקשיב, לסמוך, ולתת מקום לקול הפנימי שלי.",
    name: "ר'",
    location: "תל אביב",
  },
  {
    text: "זאת לא סתם סדנה. זה מסע אמיתי אל תוך הנפש. מקום שבו את יכולה להיות בדיוק מי שאת, ללא מסכות.",
    name: "מ'",
    location: "ירושלים",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-16"
        >
          מה אומרים עלינו
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto relative">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border/30 relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              >
                <Quote className="w-8 h-8 text-accent mb-4" />
              </motion.div>
              <p className="text-foreground font-body leading-relaxed mb-6 text-lg">
                {t.text}
              </p>
              <p className="text-muted-foreground font-body text-sm">
                — {t.name}, {t.location}
              </p>
            </motion.div>
          ))}
          {/* Decorative divider between cards */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
