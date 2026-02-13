import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OptimizedImage from "@/components/OptimizedImage";
import dvoraPortrait from "@/assets/dvora-portrait.jpg";
import dvoraPortraitWebp from "@/assets/dvora-portrait.jpg?format=webp&quality=80";
import { Button } from "@/components/ui/button";

const AboutPreview = () => {
  return (
    <section className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          dir="rtl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden flex-shrink-0"
          >
            <OptimizedImage
              src={dvoraPortrait}
              webpSrc={dvoraPortraitWebp}
              alt="דבורה קיין-רייניש"
              className="w-full h-full object-cover"
              width={224}
              height={224}
              sizes="(max-width: 768px) 192px, 224px"
            />
          </motion.div>
          <div className="text-center md:text-right">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              דבורה קיין-רייניש
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4">
              פסיכולוגית ומנחת קבוצות בפוטותרפיה וסולקולאז'. מתוך אמונה עמוקה שכל אחד.ת נושא.ת בתוכו חוכמה פנימית — אני מלווה אנשים במסע של גילוי עצמי, דרך דימויים, סמלים ותהליכים יצירתיים.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              התפקיד שלי הוא לא לתקן, אלא להחזיק מראה — ולעזור לך לראות את הכוח הפנימי שתמיד היה שם.
            </p>
            <Button asChild variant="outline" size="lg" className="rounded-lg">
              <Link to="/about">עוד על השיטה</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
