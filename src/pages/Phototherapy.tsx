import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import phototherapyHero from "@/assets/phototherapy-hero.jpg";
import photo1 from "@/assets/phototherapy-1.jpg";
import photo2 from "@/assets/phototherapy-2.jpg";
import photo3 from "@/assets/phototherapy-3.jpg";
import photo4 from "@/assets/phototherapy-4.jpg";
import photo5 from "@/assets/phototherapy-5.jpg";

const galleryImages = [
  { src: photo1, alt: "עבודת פוטותרפיה 1" },
  { src: photo2, alt: "עבודת פוטותרפיה 2" },
  { src: photo3, alt: "עבודת פוטותרפיה 3" },
  { src: photo4, alt: "עבודת פוטותרפיה 4" },
  { src: photo5, alt: "עבודת פוטותרפיה 5" },
];

const Phototherapy = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goNext = useCallback(() => setLightboxIndex((i) => (i !== null ? (i + 1) % galleryImages.length : null)), []);
  const goPrev = useCallback(() => setLightboxIndex((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null)), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goNext();
      if (e.key === "ArrowRight") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0">
          <img src={phototherapyHero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-4"
          >
            סדנאות פוטותרפיה — מגלים את עצמכם דרך העדשה
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
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">פוטותרפיה? מהי</h2>
              <div className="space-y-4 text-lg text-muted-foreground font-body leading-relaxed">
                <p>
                  פוטותרפיה היא שיטת טיפול ייחודית בפסיכותרפיה המשלבת את כוחו של הצילום עם עבודה רגשית עמוקה ומשמעותית.
                  השיטה פותחת דרך חדשה לחקור את העולם הפנימי שלנו — היא מאפשרת חיבור אותנטי, שיח לא מילולי עוצמתי, 
                  ומסע מרגש של גילוי עצמי דרך התבוננות בתמונות שלנו ושל אחרים.
                </p>
                <p>
                  התמונה הופכת לגשר בין העבר להווה, בין המודע לתת-מודע, בין מה שמוסתר למה שמבקש להיחשף.
                  היא מדברת בשפה אוניברסלית שעוברת מעבר למילים, ופותחת פתח להבנה חדשה של מי שאנחנו באמת.
                </p>
              </div>
            </div>

            {/* Accessibility */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">נגישות מלאה לכולם</h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                הצילום הוא כלי מוכר ונגיש שכמעט כל אחד מכיר ומשתמש בו. בעידן הדיגיטלי, כל סמארטפון הופך להיות 
                כלי טיפולי פוטנציאלי חזק המאפשר ביטוי מיידי ואותנטי. אין צורך בידע מקצועי או בציוד יקר — 
                רק בנכונות להתבונן ולהקשיב למה שעולה דרך העדשה שלכם.
              </p>
            </div>

            {/* Key aspects */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "עומק רגשי אמיתי", desc: "תמונה אחת יכולה להכיל אלף מילים, אלף רגשות ואינסוף משמעויות. הצילום מאפשר חיבור אמיתי, לא מסונן ולא מצונזר, לרגשות עמוקים, לזיכרונות מורכבים ולחוויות שמחכות להיפתח." },
                { title: "הרחקה בטוחה", desc: "המצלמה יוצרת מעין \"מרחק בטוח\" מהכאב והקושי — היא מאפשרת לנו להתבונן בחוויות קשות מזווית יותר חיצונית, ללא ההצפה הרגשית המיידית." },
                { title: "מסגור מחדש של המציאות", desc: "הצילום מלמד אותנו שניתן לראות את אותה מציאות מזוויות שונות לחלוטין — רק ידי שינוי זווית הצילום, והתמונה משתנה. כך גם בחיים." },
                { title: "שחרור רגשי עמוק", desc: "העבודה עם תמונות מאפשרת העלאה עדינה אך עוצמתית של תכנים מהתת-מודע אל המודע. התהליך מביא לשחרור רגשי אמיתי ולתחושת הקלה, מרווחת ומשחררת." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50"
                >
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* What we do */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">מה באמת עושים בסדנה?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "מתבוננים בשורשים ומחברים לעבר", desc: "עבודה מעמיקה עם תמונות אישיות וארכיוניות מהאלבומים המשפחתיים שלכם. חוקרים ביחד זיכרונות ילדות, סיפורי משפחה, רגעים משמעותיים שעיצבו אותנו." },
                  { title: "יוצרים הווה חדש", desc: "צילום אקטיבי ויצירתי של העולם הפנימי והחיצוני שלכם — מה שמרגש, שמאתגר או שמשמח אתכם. אנחנו יוצרים ביטוי אותנטי ואישי לרגשות, למחשבות ולחוויות." },
                  { title: "משתפים, מתבוננים ומגלים", desc: "שיתוף התמונות שלכם במרחב בטוח, תומך ונעים. אנחנו עוסקים בפרשנות אישית של התמונות, מגלים משמעויות חדשות ומפתיעות." },
                  { title: "לומדים כלים מעשיים לחיים", desc: "רכישת כלים קונקרטיים להבנה יותר עמוקה של עצמכם, של היחסים שלכם עם אחרים, ושל הדרכים שבהן אתם מתנהלים בעולם." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="bg-section-alt rounded-xl p-6"
                  >
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">מהסדנאות שלנו</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {galleryImages.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="overflow-hidden rounded-xl aspect-[3/2] cursor-pointer"
                    onClick={() => setLightboxIndex(i)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-section-alt rounded-2xl p-8 text-center">
              <p className="text-xl font-heading font-bold text-foreground mb-2">
                מוכנים להצטרף למסע?
              </p>
              <p className="text-muted-foreground font-body mb-6">
                הצטרפו אלינו למסע צילום מרגש ומשנה חיים. גלו את הסיפור האמיתי, העמוק והייחודי שמאחורי התמונות שלכם.
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-medium text-base hover:opacity-90 transition-opacity"
              >
                הצטרפו אלינו למסע
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 left-4 text-white/80 hover:text-white p-2 z-10"
              aria-label="סגור"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-10"
              aria-label="הקודם"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-10"
              aria-label="הבא"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Phototherapy;
