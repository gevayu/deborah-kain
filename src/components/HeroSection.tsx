import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useMemo, useRef, useState, useEffect, useCallback } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import heroBgWebp from "@/assets/hero-bg.jpg?format=webp&quality=80";
import heroWater from "@/assets/hero-water.jpg";
import heroWaterWebp from "@/assets/hero-water.jpg?format=webp&quality=80";
import heroEarth from "@/assets/hero-earth.jpg";
import heroEarthWebp from "@/assets/hero-earth.jpg?format=webp&quality=80";
import heroFire from "@/assets/hero-fire.jpg";
import heroFireWebp from "@/assets/hero-fire.jpg?format=webp&quality=80";
import heroClouds from "@/assets/hero-clouds.jpg";
import heroCloudsWebp from "@/assets/hero-clouds.jpg?format=webp&quality=80";

const heroImages = [
  { jpg: heroBg, webp: heroBgWebp },
  { jpg: heroWater, webp: heroWaterWebp },
  { jpg: heroEarth, webp: heroEarthWebp },
  { jpg: heroFire, webp: heroFireWebp },
  { jpg: heroClouds, webp: heroCloudsWebp },
];

const INTERVAL = 6000;

const Particles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 70 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: 50 + Math.random() * 50,
        size: Math.random() * 10 + 5,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 6,
        opacity: Math.random() * 0.6 + 0.4,
        drift: Math.random() * 50 - 25,
      })),
    []
  );

  return (
    <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: 0,
            background: `radial-gradient(circle, rgba(255,255,255,1), rgba(255,255,255,0.4))`,
            boxShadow: `0 0 ${p.size * 3}px ${p.size}px rgba(255,255,255,0.5)`,
          }}
          animate={{
            y: [0, -100, -220],
            x: [0, p.drift, p.drift * 0.5],
            opacity: [0, p.opacity, p.opacity * 0.7, 0],
            scale: [0.5, 1.3, 0.6],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextImage, INTERVAL);
    return () => clearInterval(timer);
  }, [nextImage]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with crossfade */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <picture>
              <source srcSet={heroImages[currentIndex].webp} type="image/webp" />
              <img
                src={heroImages[currentIndex].jpg}
                alt=""
                className="w-full h-full object-cover"
                loading={currentIndex === 0 ? "eager" : "lazy"}
                decoding={currentIndex === 0 ? "sync" : "async"}
                width={1920}
                height={1080}
                {...(currentIndex === 0 ? { fetchPriority: "high" } as any : {})}
              />
            </picture>
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/90 z-[1]" />
      </motion.div>

      {/* Floating particles */}
      <Particles />

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
            className="text-xl md:text-2xl text-muted-foreground font-body leading-relaxed mb-10 max-w-2xl mx-auto"
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
              href="/services"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-medium text-base hover:opacity-90 transition-opacity"
            >
              ליווי אישי
            </a>
            <a
              href="/services"
              className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-lg font-body font-medium text-base hover:bg-primary/10 transition-colors"
            >
              סדנאות קבוצתיות
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              i === currentIndex
                ? "bg-primary/80 w-6"
                : "bg-primary/30 hover:bg-primary/50"
            }`}
            aria-label={`תמונה ${i + 1}`}
          />
        ))}
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
