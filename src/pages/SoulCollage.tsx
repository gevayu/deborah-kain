import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import soulCollageHero from "@/assets/soul-collage-hero.jpg";

const SoulCollage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0">
          <img src={soulCollageHero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-4"
          >
            סדנאות סול קולאז' — מסע אל הקולות שבפנים
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* What is it */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">מה זה סול קולאז'?</h2>
              <div className="space-y-4 text-lg text-muted-foreground font-body leading-relaxed">
                <p>
                  יש בנו הרבה קולות כאלה. ראיתם את הסרט "הקול בראש"? אז יש בנו את התעוזה, את הפחד, 
                  את השאפתנות, את הביקורת העצמית, את החמלה. כל אחד מהחלקים האלה הוא עולם שלם, עם משהו חשוב להגיד לנו.
                </p>
                <p>
                  בסול קולאז' אנחנו נותנים במה לכל הקולות האלה. אנחנו יוצרים קלפים אישיים שמייצגים את החלקים השונים בנו — 
                  הצדדים, האיכויות, האנרגיות, האנשים שהשפיעו עלינו והרגעים המשמעותיים בדרך.
                </p>
                <p>
                  התהליך להפליא פשוט ועמוק באותה מידה. אנחנו בוחרים תמונות שקוראות לנו — כאלה שמשהו בהן נוגע, מושך ומסקרן. 
                  אנחנו גוזרים, משלבים, יוצרים קולאז' על כרטיס קטן. אין צורך ביכולת אמנותית, רק באינטואיציה שלנו.
                </p>
                <p>
                  ואז מגיע החלק הקסום: אנחנו לומדים לדבר מתוך הקלף. לא עליו, אלא ממנו ממש. לתת קול לדמות המרכזית בקלף 
                  ולהפוך להיות דיאלוג פנימי חי, דינמי ומאוד משחרר.
                </p>
              </div>
            </div>

            {/* Roots */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">השורשים</h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                הגישה מבוססת על התיאוריות של קרל יונג — על הארכיטיפים, על הסינכרוניות, על הרחבת התודעה, 
                על הפרסונות השונות שיש בכל אחד מאיתנו. יש בה מימד רוחני של חיפוש משמעות לאורך הדרך.
                תפיסת הסול קולאז' מתכתבת עם תפיסת הגשטאלט של הפסיכולוגיה ועם קרל יונג.
              </p>
            </div>

            {/* Practice */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">הפרקטיקה — קבוצות סקרניות ומגלות</h2>
              <div className="space-y-4 text-lg text-muted-foreground font-body leading-relaxed">
                <p>
                  בקבוצות סול קולאז' אנחנו נפגשים ליצור יחד. גוזרים, מדביקים, משתפים, מקשיבים. 
                  כל פגישה היא הזדמנות לגלות עוד קול פנימי, לתת לו במה, ללמוד איך הוא מסתכל על המציאות שלנו.
                </p>
                <p>
                  הקבוצות שלנו הן מרחבים של יצירה, תמיכה, הכלה וסקרנות אמיתית — מקומות שכיף להיות בהם, 
                  שאפשר להשאיר את הלחצים בחוץ ופשוט להיות.
                </p>
                <p>
                  אנחנו מסתכלים על האמונות שלנו, על האנשים שהשפיעו ומשפיעים עלינו, על הדפוסים שחוזרים בחיינו — 
                  בקשרים, בהצלחות, בכשלונות. ואז אנחנו לומדים להסתכל על אותם דפוסים מפרספקטיבה אחרת. 
                  מה קלף האומץ שלי יגיד על המצב הזה? ומה יגיד הקלף של החמלה העצמית?
                </p>
              </div>
            </div>

            {/* Who is it for */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">למי זה מתאים?</h2>
              <div className="space-y-4 text-lg text-muted-foreground font-body leading-relaxed">
                <p>
                  לכל מי שסקרן. לא משנה בני כמה את או אתה. לכל מי שרוצה ללמוד על עצמו ולגלות את היצירתיות שבפנים. 
                  לכל מי שמוכן לקחת חלק בחוויה יצירתית של חשיבה ועשייה, בלי לחץ, עם רצון אמיתי לשינוי פנימי.
                </p>
                <p>
                  סול קולאז' היא לא טיפול, אבל היא טיפולית להפליא. היא מעוררת את האינטואיציה, מעודדת גילוי עצמי, 
                  מחברת אותנו לחוכמה הפנימית שלנו. קלף אחר קלף, אנחנו חוזרים הביתה — אל עצמנו.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-section-alt rounded-2xl p-8 text-center">
              <p className="text-xl font-heading font-bold text-foreground mb-4">
                בואו לגלות את הקולות שמחכים לכם בפנים.
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-medium text-base hover:opacity-90 transition-opacity"
              >
                רוצים להתנסות?
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoulCollage;
