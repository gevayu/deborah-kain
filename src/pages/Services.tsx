import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UpcomingWorkshops from "@/components/UpcomingWorkshops";
import OptimizedImage from "@/components/OptimizedImage";
import servicesHero from "@/assets/services-hero.jpg";
import servicesHeroWebp from "@/assets/services-hero.jpg?format=webp&quality=80";
import soulCollageHero from "@/assets/soul-collage-hero.jpg";
import soulCollageHeroWebp from "@/assets/soul-collage-hero.jpg?format=webp&quality=80";
import phototherapyHero from "@/assets/phototherapy-hero.jpg";
import phototherapyHeroWebp from "@/assets/phototherapy-hero.jpg?format=webp&quality=80";
import workshopCombined from "@/assets/workshop-combined.jpg";
import workshopCombinedWebp from "@/assets/workshop-combined.jpg?format=webp&quality=80";
import workshopAnnual from "@/assets/workshop-annual.jpg";
import workshopAnnualWebp from "@/assets/workshop-annual.jpg?format=webp&quality=80";
import workshopSummer from "@/assets/workshop-summer.jpg";
import workshopSummerWebp from "@/assets/workshop-summer.jpg?format=webp&quality=80";

const services = [
  {
    title: "סדנאות והמפגשים",
    desc: "בואו לחוות סדרת סדנאות חווייתיות והמעצימות את הקול הפנימי. נעמיק יחד בתהליכים המשלבים עבודה עם דימויים, יצירה אינטואיטיבית ותשומת לב עמוקה לרגש. בסדנאות שלנו, כל משתתפת ומשתתף מקבלים מקום להיות, לחקור ולהעז — ללא שיפוט וללא צורך בכישרון אמנותי.",
    link: null,
    image: workshopCombined,
    webp: workshopCombinedWebp,
  },
  {
    title: "ליווי אישי",
    desc: "לצד עבודה קבוצתית, ישנה אפשרות לתמיכה אישית, אחד על אחד, במפגשים המותאמים עבורך. יחד נזהה מה מבקש להתגלות ולבוא לידי ביטוי בעולמך, ונעבוד בגישה עדינה, קשובה, ומעודדת צמיחה פנימית. ליווי אישי רוחני נועד גם לתמיכה וליווי במצבי שבר — התבוננות, גילוי ושהות ביחד בשקט ובדיאלוג.",
    link: null,
    image: workshopAnnual,
    webp: workshopAnnualWebp,
  },
  {
    title: "סדנאות סול קולאז'",
    desc: "מסע אל הקולות שבפנים — יצירת קלפים אישיים שמייצגים את החלקים השונים בנו, דרך תמונות, אינטואיציה ודיאלוג פנימי.",
    link: "/services/soul-collage",
    image: soulCollageHero,
    webp: soulCollageHeroWebp,
  },
  {
    title: "סדנאות פוטותרפיה",
    desc: "מגלים את עצמכם דרך העדשה — שילוב ייחודי של צילום ועבודה רגשית עמוקה לגילוי עצמי אמיתי.",
    link: "/services/phototherapy",
    image: phototherapyHero,
    webp: phototherapyHeroWebp,
  },
  {
    title: "סדנאות ייעודיות לארגונים ולמוסדות",
    desc: "אנו מגיעים גם אל צוותים וארגונים: מביאים את עולם ה-SoulCollage וסדנאות ההתפתחות למרחבים מקצועיים, כפתרון להפגת עומס, לבניית אמון, שיפור תקשורת צוותית, יצירה משותפת וגיבוש.",
    link: null,
    image: workshopSummer,
    webp: workshopSummerWebp,
  },
  {
    title: "קורסים והרצאות עומק",
    desc: "למעוניינים בהתעמקות ולמידה שיטתית — מוצעים קורסים רבי-שלבים סביב תכנים כגון חקר העצמי, דימויים, מנהיגות רגשית ועבודה קבוצתית. כל קורס בנוי במבנה מודולרי, המאפשר למשתתפים לנוע בקצב אישי.",
    link: null,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
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
            השירותים שלנו | מסלולים שונים, מסע אחד
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed"
          >
            יש מי שמחפש ליווי אישי צמוד, יש מי שרוצה לחקור בקבוצה, ויש מי שמרגיש צורך במרחב מורחב ומנותק מהשגרה.
            כולם נובעים מאותו מקור — מבוססים על אותם ערכים, אבל מתאימים לצרכים שונים.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden"
              >
                {service.image && (
                  <div className="aspect-video overflow-hidden">
                    <OptimizedImage
                      src={service.image}
                      webpSrc={(service as any).webp}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      width={600}
                      height={338}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed mb-4">{service.desc}</p>
                  {service.link && (
                    <Link
                      to={service.link}
                      className="inline-block text-primary font-body font-medium hover:underline"
                    >
                      קראו עוד ←
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto mt-16 text-center"
          >
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
              המסע היצירתי והרגשי מחכה לך כאן. נשמח להיות כאן עבורך — לשאלה, התייעצות או תחילת מסלול.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-medium text-base hover:opacity-90 transition-opacity"
            >
              פנו אלינו
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
