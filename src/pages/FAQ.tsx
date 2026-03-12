import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import OptimizedImage from "@/components/OptimizedImage";
import soulcollageImg from "@/assets/soulcollage-featured-1.jpg";

const faqs = [
  {
    q: "למי מיועדות הסדנאות?",
    a: "לכל מי שמרגיש תקוע, מחפש כיוון, רוצה להעמיק את ההכרה העצמית שלו – בין אם מדובר ביחידים, קבוצות ארגוניות, נשים בתהליך מעבר, או כל מי שמוכן לעבוד עם עצמו באופן אחר.",
  },
  {
    q: "האם צריך ניסיון קודם ביצירה או בעבודה רגשית?",
    a: "בכלל לא. לא נדרש ניסיון אמנותי או טיפולי. הסדנאות מתוכננות כך שכל אחד יוכל להיכנס בקלות, ללא שיפוט ובסביבה בטוחה לחלוטין.",
  },
  {
    q: "מה ההבדל בין סדנה פרטנית לסדנה קבוצתית?",
    a: "בסדנה הפרטנית הזמן והמרחב מוקדשים לך לחלוטין – קצב אישי, עומק מותאם, פרטיות מלאה. בסדנה הקבוצתית מתווסף כוח ייחודי של שיתוף, מראה קבוצתי ואנרגיה משותפת שמזרזת תהליכים.",
  },
  {
    q: "מה קורה בסדנה בפועל? איך נראה יום שלם?",
    a: "כל סדנה בנויה ממספר שלבים: כניסה מכוונת ומיקוד כוונה, עבודה עם חומרים (קלפים, תמונות, חומרים טבעיים), תהליך יצירה אינטואיטיבי, ושיתוף ועיבוד בסיום. לא יוצאים משם ריקם.",
  },
  {
    q: "מה השיטה SoulCollage ואיך היא נכנסת לתהליך?",
    a: "SoulCollage היא שיטה מבוססת-מחקר ליצירת קלפים אישיים מתמונות קיימות, שמשמשים כמפה פנימית ועוצמתית. בסדנאות אנחנו משתמשים בה כאחד הכלים המרכזיים ליצירת שפת פנים ייחודית לכל משתתף.",
  },
  {
    q: 'מה הסדנה "נותנת" בסוף? עם מה אני הולך/ת הביתה?',
    a: "מעבר לחוויה עצמה, יוצאים עם קלפים/יצירות שנוצרו, תובנות מוגדרות, וכלים מעשיים להמשך עצמאי. רבים מדווחים על שינוי תפיסתי שמשפיע על החלטות, יחסים ואיכות חיים כבר בימים שלאחר מכן.",
  },
  {
    q: "כמה זמן נמשך תהליך שמרגישים בו שינוי?",
    a: "חלק מהמשתתפים חווים תחושת שחרור כבר בסדנה הראשונה. לתהליך עמוק ומתמשך מומלץ על סדרה של מספר מפגשים שמאפשרים בנייה אורגנית לאורך זמן.",
  },
  {
    q: "איך מתחילים? מה השלב הראשון?",
    a: 'מתחילים בשיחת היכרות קצרה ובחינם – שם נבין יחד מה מתאים לך ביותר, בין אם מדובר בפגישה פרטנית, סדנה קבוצתית קרובה, או תהליך מותאם אישית. ניתן להשאיר פרטים ישירות באתר ואחזור תוך 24 שעות.',
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-40 pb-16 md:pt-52 md:pb-24 bg-warm-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6"
          >
            שאלות נפוצות
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed"
          >
            כל מה שרציתם לדעת על הסדנאות, התהליך והדרך להתחיל
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card/60 backdrop-blur-sm rounded-2xl border border-border/30 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-lg md:text-xl font-heading font-bold text-foreground text-right hover:no-underline py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground font-body leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-section-alt">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl font-heading font-bold text-foreground">
              לא מצאתם תשובה? דברו איתנו
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-medium text-lg hover:opacity-90 transition-opacity"
            >
              צרו קשר
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
