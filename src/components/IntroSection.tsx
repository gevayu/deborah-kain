import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="py-14 md:py-20 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xl md:text-2xl text-foreground font-body leading-loose">
            SoulRoad מציע לך מקום לנוח רגע ולהתבונן על עצמך ועל הדרך שלך.
            אני כאן כדי ללוות אותך במסע שלך — דרך התבוננות פנימית, יצירה אינטואיטיבית והסתכלות משותפת על עצמך המתפתח.ת.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mt-6">
            בתפיסה הבסיסית שלי עומדת האמונה שיש בתוכנו חכמה פנימית עמוקה, הנובעת מעצם היותנו.
            אנחנו לומדים על הדרך ומאבדים על הדרך מהחכמה והיכולת הזאת.
            דרך תהליכים יצירתיים, התבוננות מודעת ושיח לבבי, אנחנו מרחיבים את יכולות הביטוי, ההבנה והתמיכה המיטיבה בתוכנו.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
