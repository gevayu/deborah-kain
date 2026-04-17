import { motion } from "framer-motion";
import OptimizedImage from "@/components/OptimizedImage";
import valueWisdom from "@/assets/value-wisdom.jpg";
import valueCreativity from "@/assets/value-creativity.jpg";
import valueCommunity from "@/assets/value-community.jpg";
import valueWisdomWebp from "@/assets/value-wisdom.jpg?format=webp&quality=80";
import valueCreativityWebp from "@/assets/value-creativity.jpg?format=webp&quality=80";
import valueCommunityWebp from "@/assets/value-community.jpg?format=webp&quality=80";

const values = [
  {
    image: valueWisdom,
    webp: valueWisdomWebp,
    title: "חוכמה פנימית",
    description:
      "אנחנו מאמינים שהתשובות כבר בתוכך. התפקיד שלנו הוא לעזור לך לשמוע אותן. דרך תהליכים יצירתיים ומודעים, נפתח יחד מרחב בטוח שבו הקול הפנימי שלך יכול לעלות, להתבטא, להנחות.",
  },
  {
    image: valueCreativity,
    webp: valueCreativityWebp,
    title: "יצירתיות כשפה",
    description:
      "המילים אינן תמיד מבטאות הכל. הדימויים מדברים בשפה משלהם ונותנים יותר מקום לאינטואיציה. כשאנחנו מבולבלים או לחוצים אנחנו נוטים להצטמצם לדפוסים מוכרים עם מילים מוכרות. העבודה עם יצירה חזותית, שיר, מוזיקה, מטאפורה וסמל מאפשרת לנו לגעת במקומות שהשפה הרגילה שלנו לא תמיד מגיעה אליהם.",
  },
  {
    image: valueCommunity,
    webp: valueCommunityWebp,
    title: "קהילה ושייכות",
    description:
      "את.ה אף פעם לא לבד בדרך. ב-SoulRoad גם רואים אותך ומאפשרים לך להתבטא ולהתנסות. העבודה בקבוצה מאפשרת עבודה אישית וגם משותפת. השיתופים משמעותיים ומפרים. נוצרים קשרים וקישורים. הרצון הוא להקים קהילה סביב SoulRoad — שיהיה בית.",
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
              className="bg-background/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm border border-border/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <OptimizedImage
                  src={value.image}
                  webpSrc={value.webp}
                  alt={value.title}
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 33vw"
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
