import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            מוכנ.ה להתחיל? 🌸
          </h2>
          <p className="text-xl text-muted-foreground font-body leading-relaxed mb-10">
            בין אם זו פעם ראשונה שלך, או שאת.ה כבר מכיר.ה את הדרך — 
            כאן יש מקום בשבילך.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-medium text-base hover:opacity-90 transition-opacity"
            >
              מה אפשר לעשות ביחד?
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-lg font-body font-medium text-base hover:bg-primary/10 transition-colors"
            >
              מדברים איתנו
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
