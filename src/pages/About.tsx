import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OptimizedImage from "@/components/OptimizedImage";
import aboutHero from "@/assets/about-hero.jpg";
import aboutHeroWebp from "@/assets/about-hero.jpg?format=webp&quality=80";
import dvoraPortrait from "@/assets/dvora-portrait.jpg";
import dvoraPortraitWebp from "@/assets/dvora-portrait.jpg?format=webp&quality=80";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-52 md:pb-24">
        <div className="absolute inset-0">
          <OptimizedImage
            src={aboutHero}
            webpSrc={aboutHeroWebp}
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
            הסיפור שמוביל את הדרך
          </motion.h1>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden flex-shrink-0 mx-auto md:mx-0"
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
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  הסיפור האישי
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed">
                  שמי נקרא על שם סבתי — מתוך חיבור עמוק. סבתי הייתה אישה מלאה חום, תבונה ושלווה.
                  היא ידעה להקשיב בלי למהר, להחזיק מרחב בלי לשפוט, ולראות את האור באדם.
                </p>
              </div>
            </div>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground font-body leading-relaxed">
              <p>
                לפני שנים רבות, מצאתי את עצמי במקום שבו המילים נגמרו. הייתה תחושה, צורך, קריאה פנימית — 
                אבל לא היו לי כלים לתרגם אותה. התחלתי לחפש דרכים אחרות להקשיב לעצמי: דרך דימויים, צבעים, סמלים.
              </p>
              <p>
                התחלתי ללמוד על התודעה, על הנפש, על הדרכים השונות שבהן אנחנו נושאים את הסיפורים שלנו — 
                גם אלה שאנחנו מודעים להם, וגם אלה שטמונים בשכבות יותר עמוקות.
              </p>
              <p>
                המסע הזה הוביל אותי אל הכשרות בפסיכולוגיה עומק, באמנות, בליווי רוחני ובשיטות עבודה מודעות.
                למדתי בבתי ספר שונים, השתתפתי בקורסים, והתנסיתי וליוויתי אנשים לאורך שנים — כל אחד עם הסיפור הייחודי שלו.
              </p>
              <p>
                מעבר לכל התארים והתעודות, הדרך הזו לימדה אותי דבר אחד מרכזי:
                התפקיד של המלווה הוא לא לתקן, אלא להחזיק מראה — ולעזור לך לראות.
                כל אחד מאיתנו נושא בתוכו את המפתח לשלמות הפנימית שלו.
              </p>
              <p>
                כך נולד <strong>שביל הנפש</strong> — מרחב שבו ניתן לצעוד בקצב שלך, להכיר את עצמך מחדש, 
                ולגלות את הכוח הפנימי שתמיד היה שם.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-section-alt">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              הגישה שלנו
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-8">
              אנחנו לא מציעים פתרונות מהירים או מתכונים קבועים.
              אנחנו מאמינים בתהליך, בזמן, ובכבוד לקצב האישי של כל אחד.ת.
            </p>

            <div className="grid gap-6">
              {[
                {
                  title: "עבודה באמצעות דימויים וסמלים",
                  desc: "שפה עתיקה ועכשווית כאחת, שמאפשרת חיבור לתודעה הלא-מודעת ופותחת דלתות פנימיות שמילים לא תמיד מגיעות אליהן."
                },
                {
                  title: "ארכיטיפים וכלים יצירתיים",
                  desc: "תהליכים יצירתיים — SoulCollage קולאז', כתיבה אינטואיטיבית, מפות נפש, עבודה עם ארכיטיפים — שמזמינים אותך לגלות את עצמך מחדש ללא ביקורת או ציפיות."
                },
                {
                  title: "נוכחות והקשבה",
                  desc: "מרחב בטוח לחקור, לגלות, לטעות ולצמוח. אני כאן כדי להקשיב, לשאול ולהיות לצידך — לא כדי לתקן או להורות."
                },
                {
                  title: "שילוב חוכמה רוחנית ופסיכולוגית",
                  desc: "גישה הוליסטית המכבדת את כל מימדי האדם: הגוף, הנפש, הרוח והמכלול."
                },
                {
                  title: "עבודה קהילתית",
                  desc: "בסדנאות, בקבוצות ובמפגשים — כי צמיחה קורית גם ביחד, במעגל של אמון ושיתוף. מקום משותף שבו אפשר להיות עצמך, ולדעת שאת.ה לא לבד."
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50"
                >
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              למי מתאים Soul Road?
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-6">זה בשבילך אם אתם:</p>
            <ul className="space-y-3 text-lg text-muted-foreground font-body">
              {[
                "מחפשים דרך יותר עמוקה להכיר את עצמכם",
                "מרגישים שיש בך עוד משהו שרוצה לצאת החוצה",
                "מעוניינים לחקור שאלות של משמעות, זהות, ייעוד",
                "פתוחים לגישות יצירתיות, סמליות ורוחניות",
                "מחפשים קהילה בטוחה ותומכת",
                "רוצים לצמוח בקצב שלכם, ללא לחץ או ציפיות חיצוניות",
                "זקוקים לליווי בתהליכים של משבר, כאב ופרידה",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 bg-card/60 rounded-xl p-8 border border-border/50 text-center">
              <p className="text-muted-foreground font-body mb-6">
                שביל הנפש הוא מסע של צמיחה, חיבור ועומק — אך הוא אינו תחליף לטיפול פסיכולוגי או פסיכיאטרי במצבי משבר.
              </p>
              <p className="text-lg font-heading font-bold text-foreground mb-6">
                אבל אם אתם במקום של חיפוש, רצון לצמיחה, ושאיפה לחיבור יותר עמוק — יש לכם כאן בית.
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-medium text-base hover:opacity-90 transition-opacity"
              >
                קבעו שיחת היכרות בחינם
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
