import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Journey = () => {
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
            המסע האישי
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed"
          >
            עמוד זה בבנייה. בקרוב כאן תמצאו את המסע האישי — שלבים, סיפורים וכלים שילוו אתכם בדרך.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground font-body">
            תוכן העמוד יתעדכן בקרוב. בינתיים, מוזמנים{" "}
            <a href="/contact" className="text-primary hover:underline">ליצור קשר</a>{" "}
            או לחקור את{" "}
            <a href="/services" className="text-primary hover:underline">השירותים שלנו</a>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Journey;
