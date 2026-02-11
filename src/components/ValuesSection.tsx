import { motion } from "framer-motion";
import valueWisdom from "@/assets/value-wisdom.jpg";
import valueCreativity from "@/assets/value-creativity.jpg";
import valueCommunity from "@/assets/value-community.jpg";

const values = [
  {
    image: valueWisdom,
    title: "חוכמה פנימית",
    description:
      "אנחנו מאמינים שהתשובות כבר בתוכך. התפקיד שלנו הוא לעזור לך לשמוע אותן. דרך תהליכים יצירתיים ומודעים, נפתח יחד מרחב בטוח שבו הקול הפנימי שלך יכול לעלות, להתבטא, להנחות.",
  },
  {
    image: valueCreativity,
    title: "יצירתיות כשפה",
    description:
      "כשהמילים לא מספיקות, הדימויים מדברים. כשהשכל מבולבל, האינטואיציה מובילה. אנחנו עובדים עם יצירה חזותית, סיפור, מטאפורה וסמל — כלים שמאפשרים לנו לגעת במקומות שהשפה הרגילה לא מגיעה אליהם.",
  },
  {
    image: valueCommunity,
    title: "קהילה ושייכות",
    description:
      "את.ה לא לבד בדרך. כאן יש מעגל של נשמות חוקרות, מרחב של קבלה ללא שיפוט. קהילה שמחזיקה ומאפשרת לכל אחד.ת לצמוח בקצב שלו.",
  },
];

const ValuesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-16"
        >
          עולם של צבעים, סמלים, רגשות וסיפורים שמחכים להיחשף
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-background/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm border border-border/30 hover:shadow-md transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed text-base">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-muted-foreground font-body mt-12 max-w-2xl mx-auto text-lg"
        >
          זה מסע לא של תיקון, אלא של גילוי. לא של משפט, אלא של קבלה. 
          לא של מאמץ, אלא של הקשבה.
        </motion.p>
      </div>
    </section>
  );
};

export default ValuesSection;
