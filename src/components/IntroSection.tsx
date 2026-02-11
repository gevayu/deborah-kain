import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="py-20 md:py-28 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xl md:text-2xl text-foreground font-body leading-loose">
            Soul Road הוא בית לך. למי שמחפש חיבור עמוק יותר לעצמך,
            לאלה שמרגישים שיש עוד משהו מעבר.
          </p>
          <p className="text-xl md:text-2xl text-foreground font-body leading-loose mt-4">
            אנחנו כאן כדי ללוות אותך במסע שלך — של התבוננות פנימית,
            יצירה אינטואיטיבית, גילוי והסתכלות מחדש על עצמך המתפתח.ת.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mt-6">
            במרכז הדרך שלנו עומדת האמונה שכל אחד.ת מאיתנו נושא.ת בתוכו 
            חוכמה פנימית, קול שקט שמחכה להישמע.
            דרך תהליכים יצירתיים, התבוננות מודעת ושיח לבבי — 
            אנחנו פותחים דלת לעולם הפנימי הזה.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
