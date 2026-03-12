import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UpcomingWorkshops from "@/components/UpcomingWorkshops";
import OptimizedImage from "@/components/OptimizedImage";
import servicesHero from "@/assets/services-hero.jpg";
import servicesHeroWebp from "@/assets/services-hero.jpg?format=webp&quality=80";
import sc1 from "@/assets/soulcollage-1.jpg";
import sc1Webp from "@/assets/soulcollage-1.jpg?format=webp&quality=80";
import photo1 from "@/assets/phototherapy-1.jpg";
import photo1Webp from "@/assets/phototherapy-1.jpg?format=webp&quality=80";
import workshopCombined from "@/assets/workshop-combined.jpg";
import workshopCombinedWebp from "@/assets/workshop-combined.jpg?format=webp&quality=80";

const testimonials = [
  {
    text: "תקופה מרתקת של למידה והיכרות עם עצמנו והמצלמה... לימדת אותנו להתייחס לעוצמה שיש במצלמה וגם להביע דרכה רכות חוזק סקרנות ורגש",
    name: "לילך א׳",
  },
  {
    text: "אהבתי את הדרך שגם שילבת היכרות עם כל מני צלמים. למדנו להכיר סגנונות שונים של צילום וגם לראות איך כל צלם יש לו שפה שנובעת מההסתכלות שלו על החיים והחוויות שלו",
    name: "דנה ש׳",
  },
  {
    text: "לדבורה יש המון סבלנות ונועם. כל שאלה מקבלת תשובה והיא לא מתייאשת. למדנו גם המון על הטלפון על הדרך. הנכדים שלי מתלהבים מהצילומים שלי גם",
    name: "עדה ג׳",
  },
  {
    text: "תודה דבורה על הסבלנות. מקווה שנמשיך כי את מדהימה. פתאום ראיתי דברים שלא שמתי לב אליהם. העולם עשיר יותר בזכותך.",
    name: "מיכל ש׳",
  },
];

const approaches = [
  {
    title: "SoulCollage – כשהתמונות מספרות את הסיפור שלנו",
    image: sc1,
    webp: sc1Webp,
    intro: "שיטת SoulCollage פותחה בארה\"ב על ידי סינה האנס והפכה לכלי טיפולי והתפתחותי בשימוש בעשרות מדינות. בסדנה, כל משתתף יוצר קלפים אישיים מגזירי תמונות – לא נדרש כישרון אמנותי, רק נכונות לשחק ולהקשיב.",
    howTitle: "מה קורה בפועל?",
    howText: "המשתתפים מקבלים מגוון תמונות מגזרות ממגזינים, ספרים וחומרים ויזואליים. בתהליך אינטואיטיבי, כל אחד בוחר תמונות שמושכות אותו – לפעמים בלי לדעת למה. ההדבקה על קלף יוצרת יצירה ייחודית, ואז מגיע הרגע המרגש: הקלף \"מדבר\". באמצעות תרגיל מובנה, המשתתף נותן קול לדמות שבתמונה ומגלה תובנות מפתיעות על עצמו.",
    whyTitle: "למה זה עובד בקבוצה?",
    whyText: "בסביבה עסקית, אנשים רגילים להציג את הפנים \"המקצועיות\". SoulCollage מאפשר גישה לשכבות עמוקות יותר - שאיפות, חששות, כוחות נסתרים – בדרך בטוחה ולא מאיימת.",
    link: "/services/soul-collage",
  },
  {
    title: "פוטותרפיה - כשהתמונות שלנו מספרות יותר מאלף מילים",
    image: photo1,
    webp: photo1Webp,
    intro: "פוטותרפיה היא שיטה שמשתמשת בתצלומים – של המשתתפים, של אחרים, או תמונות נבחרות – ככלי לחקירה עצמית ותקשורת. בניגוד לטיפול רגיל, כאן התמונה היא הגשר בין הפנים לחוץ.",
    howTitle: "איך זה עובד?",
    howText: "בסדנה, המשתתפים מתבקשים להביא תמונות מסוימות (למשל: \"תמונה שמייצגת אותך בעבודה\", \"תמונה מרגע משמעותי\") או עובדים עם תמונות שמסופקות. דרך תרגילים מובנים, הם מגלים מה התמונה מספרת, מה היא מסתירה, ומה הם היו רוצים לשנות בה.",
    whyTitle: "הכוח הייחודי",
    whyText: "תמונות עוקפות את ההגנות הרציונליות. כשמישהו מסביר למה בחר תמונה מסוימת, הוא בעצם מספר על עצמו – אבל דרך \"מסך\" בטוח. זה מאפשר שיחות עומק בקבוצות שבדרך כלל נשארות ברמה שטחית.",
    link: "/services/phototherapy",
  },
  {
    title: "עבודה סמלית – כשהגוף והחומר יודעים מה הראש עוד לא הבין",
    image: workshopCombined,
    webp: workshopCombinedWebp,
    intro: "עבודה סמלית משלבת חומרים מגוונים – חרסינה, בד, חוטים, אלמנטים מהטבע – ליצירת אובייקטים שמייצגים רעיונות, רגשות או מצבים. זו שפה קדומה שהאנושות השתמשה בה עוד לפני שהיו מילים.",
    howTitle: "התהליך",
    howText: "המשתתפים מקבלים משימה סמלית – \"בנה את האתגר הגדול שלך\", \"צור משהו שמייצג את הצוות שלך\", \"עצב את הפתרון שאתה מחפש\". ללא הנחיות טכניות, הם עובדים עם החומר בדרך אינטואיטיבית. התוצאה תמיד מפתיעה – גם את היוצר עצמו.",
    whyTitle: "למה החומר חשוב",
    whyText: "הידיים יודעות דברים שהמוח מסנן. כשמישהו בונה \"מגדל יציב\" אבל הוא קורס, זה אומר משהו. כשמישהו אחר יוצר צורה סגורה ואז \"פותח\" אותה – יש כאן תובנה. הסמל הופך למראה.",
    link: null,
  },
];

const GroupWorkshops = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-52 md:pb-24">
        <div className="absolute inset-0">
          <OptimizedImage
            src={servicesHero}
            webpSrc={servicesHeroWebp}
            alt=""
            className="w-full h-full object-cover"
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
            סדנאות קבוצתיות
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed"
          >
            חוויות שמחברות, מעצימות ומשנות
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-heading font-bold text-foreground">
              מה קורה כשמפסיקים לדבר ומתחילים ליצור?
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground font-body leading-relaxed">
              <p>
                יש רגעים בחיים שבהם המילים נגמרות. הרצאות כבר שמענו, שיחות פיתוח ניהלנו, ימי גיבוש עשינו - אבל משהו עדיין חסר. החיבור האמיתי, זה שמתרחש מתחת לפני השטח, דורש שפה אחרת.
              </p>
              <p>
                הסדנאות שלי נולדו מתוך הבנה עמוקה: אנשים לא זוכרים מה אמרו להם, הם זוכרים מה הרגישו. כשהידיים עסוקות ביצירה, הלב נפתח. כשהעיניים מתמקדות בתמונה, החומות נופלות. וכשקבוצה יוצרת יחד - קורה קסם שאי אפשר לתכנן מראש.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approaches */}
      <section className="py-16 md:py-24 bg-section-alt">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-16"
          >
            מספר גישות, אינסוף אפשרויות
          </motion.h2>

          <div className="space-y-16">
            {approaches.map((approach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden"
              >
                <div className="aspect-[21/9] overflow-hidden">
                  <OptimizedImage
                    src={approach.image}
                    webpSrc={approach.webp}
                    alt={approach.title}
                    className="w-full h-full object-cover"
                    width={900}
                    height={386}
                    sizes="(max-width: 768px) 100vw, 900px"
                  />
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  <h3 className="text-2xl font-heading font-bold text-foreground">
                    {approach.title}
                  </h3>
                  <p className="text-lg text-muted-foreground font-body leading-relaxed">
                    {approach.intro}
                  </p>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-foreground mb-2">
                      {approach.howTitle}
                    </h4>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {approach.howText}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-foreground mb-2">
                      {approach.whyTitle}
                    </h4>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {approach.whyText}
                    </p>
                  </div>
                  {approach.link && (
                    <Link
                      to={approach.link}
                      className="inline-block text-primary font-body font-medium hover:underline mt-2"
                    >
                      קראו עוד ←
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-heading font-bold text-foreground">
              למי הסדנאות מתאימות?
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground font-body leading-relaxed">
              <p>
                לכל מי שסקרן. לא משנה בני כמה את או אתה. לכל מי שרוצה ללמוד על עצמו ולגלות את היצירתיות שבפנים. לכל מי שמוכן לקחת חלק בחוויה יצירתית של חשיבה ועשייה, בלי לחץ, עם רצון אמיתי לשינוי פנימי.
              </p>
              <p>
                זהו לא טיפול, אבל הגישה היא טיפולית לגמרי. היא מעוררת את האינטואיציה, מעודדת גילוי עצמי, מחברת אותנו לחוכמה הפנימית שלנו. קלף אחר קלף, אנחנו חוזרים הביתה - אל עצמנו.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-warm-gradient">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12"
          >
            מה אומרים משתתפים?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border/30"
              >
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="text-foreground font-body leading-relaxed mb-6 text-lg">
                  {t.text}
                </p>
                <p className="text-muted-foreground font-body text-sm">
                  — {t.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program summary */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg text-muted-foreground font-body leading-relaxed text-center"
          >
            תוכנית הסדנאות משלבת שיטות עבודה סמליות ורגשיות ליצירת תהליך עמוק של חקירה עצמית, שחרור חסמים והעצמה אישית וקבוצתית. כל סדנה בנויה בשלבים מובנים המשלבים תרגילים יצירתיים, שיח פנימי וקבוצתי, וחיבור בין חוויה רגשית למטרות מעשיות - ארגוניות ואישיות כאחד. התוצאות המדידות של התהליך כוללות חיזוק תחושת שייכות, שיפור שיתוף הפעולה, הפחתת מתחים ויצירת שפה משותפת.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
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
              בואו לגלות את הקולות שמחכים לכם בפנים.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-medium text-base hover:opacity-90 transition-opacity"
            >
              רוצים להתנסות?
            </a>
          </motion.div>
        </div>
      </section>

      <UpcomingWorkshops filterType="all" />

      <Footer />
    </div>
  );
};

export default GroupWorkshops;
