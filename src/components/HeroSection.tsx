import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight mb-6">
            ברוכים הבאים למסע
            <br />
            <span className="text-gradient-primary">הכרות עם החוכמה הפנימית שלך</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            כאן, בין המילים והדימויים, בין הדמיון והמציאות — 
            נפתח יחד דלת לעולם הפנימי שלך
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#services"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-medium text-base hover:opacity-90 transition-opacity"
            >
              ליווי אישי
            </a>
            <a
              href="#services"
              className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-lg font-body font-medium text-base hover:bg-primary/10 transition-colors"
            >
              סדנאות קבוצתיות
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-primary/60"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
