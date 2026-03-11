import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-36 pb-16 md:pt-44 md:pb-24 bg-warm-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6"
          >
            צרו קשר
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed"
          >
            נשמח לשמוע מכם. לשאלה, התייעצות או תחילת מסלול — פנו אלינו.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50 space-y-6 text-center">
              <div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-1">טלפון</h3>
                <a href="tel:+972543098970" className="text-primary font-body text-lg hover:underline" dir="ltr">054-309-8970</a>
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-1">אימייל</h3>
                <a href="mailto:dvorakainrainish@gmail.com" className="text-primary font-body hover:underline">dvorakainrainish@gmail.com</a>
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-1">כתובת</h3>
                <p className="text-muted-foreground font-body">רחוב תרצה 10, רמת גן</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground font-body">
                מוזמנים גם לעקוב אחרינו ברשתות החברתיות
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <a href="https://www.facebook.com/cdkrainish/photos_by" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80 transition-opacity font-body">
                  Facebook
                </a>
                <a href="https://www.instagram.com/dvora_kainrainish/" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80 transition-opacity font-body">
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
