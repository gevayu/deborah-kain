import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OptimizedImage from "@/components/OptimizedImage";
import personalSession from "@/assets/personal-session.jpg";
import personalSessionWebp from "@/assets/personal-session.jpg?format=webp&quality=80";
import personalLooking from "@/assets/personal-looking.jpg";
import personalLookingWebp from "@/assets/personal-looking.jpg?format=webp&quality=80";
import personalContemplation from "@/assets/personal-contemplation.jpg";
import personalContemplationWebp from "@/assets/personal-contemplation.jpg?format=webp&quality=80";

const approaches = [
  {
    title: "עבודה באמצעות דימויים וסמלים",
    desc: "יש שפה שקדמה למילים. שפה של דימויים, צבעים, צורות וסמלים — שפה שהנפש מכירה היטב, גם כשהשכל עדיין מחפש מילים. בליווי האישי אנחנו משתמשים בשפה הזו כדי לפתוח דלתות פנימיות, להאיר פינות שנשארו בצל, וליצור חיבור עמוק לתודעה הלא-מודעת.",
  },
  {
    title: "ארכיטיפים וכלים יצירתיים",
    desc: "דרך תהליכים יצירתיים — SoulCollage, כתיבה חופשית, מפות נפש ועבודה עם דמויות ארכיטיפיות — נפתח מרחב שבו אפשר לגלות את עצמך מחדש, ללא ביקורת, ללא ציפיות, וללא \"תשובה נכונה\". הכלים היצירתיים לא דורשים כישרון אמנותי — הם דורשים רק נכונות להקשיב פנימה.",
  },
  {
    title: "פוטותרפיה",
    desc: "תמונה יכולה להיות מראה, חלון, או דלת. בעבודה עם פוטותרפיה אנחנו משתמשים בצילומים כדי לעורר שיח פנימי, לחשוף שכבות של זיכרון, רגש וזהות, ולהביט במה שלפעמים קשה לבטא במילים. התמונה לא שופטת, לא ממהרת — היא פשוט מחזיקה את הרגע.",
  },
  {
    title: "שילוב חוכמה רוחנית ופסיכולוגית",
    desc: "הגישה שלי היא הוליסטית — כזו שמכבדת את כל מימדי האדם: הגוף, הנפש, הרוח, והמכלול שביניהם. אני שואבת מתוך חוכמות רוחניות עתיקות לצד תובנות מעולם הפסיכולוגיה, כדי ללוות אותך בתהליך שמדבר אל כל מי שאת.ה.",
  },
  {
    title: "נוכחות והקשבה",
    desc: "אולי הכלי הכי חשוב שיש לי הוא פשוט — להיות כאן. נוכחות מלאה, הקשבה ללא סדר יום, מרחב שבו מותר לחקור, לגלות, לטעות, להתבלבל ולצמוח. אני לא כאן כדי לתקן אותך — אני כאן כדי ללכת לצידך.",
  },
];

const PersonalAccompaniment = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-52 md:pb-24">
        <div className="absolute inset-0">
          <OptimizedImage
            src={personalContemplation}
            webpSrc={personalContemplationWebp}
            alt="דבורה קיין רייניש — ליווי אישי"
            className="w-full h-full object-cover object-top"
            loading="eager"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-4"
          >
            ליווי אישי — מרחב לגלות את מה שכבר חי בך
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed"
          >
            לפעמים מה שאנחנו צריכים זה לא עוד תשובה מבחוץ — אלא מישהו שיהיה לצידנו בזמן שהתשובה מתגלה מבפנים.
          </motion.p>
        </div>
      </section>

      {/* What is personal accompaniment */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                מהו ליווי אישי?
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                ליווי אישי הוא תהליך של התבוננות, הקשבה וגילוי — שמתקיים במרחב בטוח, קשוב ונטול שיפוט. זה לא טיפול במובן הקליני, וזה לא אימון שמכוון אותך ליעד מוגדר מראש. זו דרך אחרת: דרך שמכבדת את החוכמה הפנימית שלך, ומזמינה אותה לדבר.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                בתהליך הליווי נעבוד יחד בגישה רב-ממדית, שמשלבת כלים מעולמות שונים — פסיכולוגיה, עבודה עם ארכיטיפים וכלים יצירתיים כמו SoulCollage, פוטותרפיה, חוכמה רוחנית הוליסטית, ומעל הכל — נוכחות והקשבה.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                הליווי מתאים גם למי שנמצא/ת בצומת דרכים, גם למי שמרגיש/ה שמשהו מבקש לצאת לאור, וגם למי שעובר/ת רגע של שבר — ומחפש/ת מישהו שישב לצידו בשקט, בדיאלוג, בלי למהר לתקן.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden border border-primary/15"
            >
              <OptimizedImage
                src={personalSession}
                webpSrc={personalSessionWebp}
                alt="דבורה בליווי אישי"
                className="w-full h-full object-cover"
                width={600}
                height={400}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approaches & Tools */}
      <section className="py-16 md:py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12"
          >
            איך זה עובד — הגישות והכלים
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {approaches.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-primary/5 backdrop-blur-sm rounded-xl p-6 border border-primary/15 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 md:order-1 rounded-2xl overflow-hidden border border-primary/15"
            >
              <OptimizedImage
                src={personalLooking}
                webpSrc={personalLookingWebp}
                alt="דבורה מתבוננת"
                className="w-full h-full object-cover"
                width={600}
                height={800}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                למי מתאים הליווי האישי?
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                הליווי מתאים לך אם את.ה מרגיש/ה שמשהו בחיים מבקש תשומת לב — גם אם אין לך מילים מדויקות לתאר מה.
              </p>
              <ul className="space-y-3 text-muted-foreground font-body leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✦</span>
                  <span>למי שעומד/ת בפרשת דרכים ומחפש/ת בהירות</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✦</span>
                  <span>למי שעובר/ת תקופה של שינוי או אובדן ומחפש/ת עוגן</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✦</span>
                  <span>למי שרוצה להעמיק את ההיכרות עם עצמו/ה</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✦</span>
                  <span>למי שפשוט מרגיש/ה שהגיע הזמן — לעצור, להקשיב, ולתת מקום למה שחי בפנים</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto bg-primary/10 rounded-2xl p-10 border border-primary/20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              מוזמנ/ת לשיחת היכרות
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              בלי התחייבות, בלי לחץ
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              אם משהו כאן דיבר אליך, אפשר פשוט להתחיל בשיחה קצרה. נכיר, נבין אם הליווי מתאים לך, ונראה ביחד מה הצעד הבא.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-medium text-base hover:opacity-90 transition-opacity"
            >
              בואו נדבר
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PersonalAccompaniment;
