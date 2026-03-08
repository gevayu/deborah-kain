import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";

interface FeaturedImage {
  src: string;
  webp: string;
  alt: string;
  caption: string;
}

interface FeaturedImagesProps {
  images: FeaturedImage[];
  title?: string;
}

const FeaturedImages = ({ images, title }: FeaturedImagesProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goNext = useCallback(() => setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null)), [images.length]);
  const goPrev = useCallback(() => setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null)), [images.length]);

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
    <>
      <div>
        {title && (
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <div
                className="aspect-square overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setLightboxIndex(i)}
              >
                <OptimizedImage
                  src={img.src}
                  webpSrc={img.webp}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width={400}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="mt-3 text-center text-muted-foreground font-body text-sm leading-relaxed">
                {img.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

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
            <div className="flex flex-col items-center max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                className="max-h-[80vh] max-w-full object-contain rounded-lg"
              />
              <p className="mt-4 text-white/80 text-center font-body text-base">
                {images[lightboxIndex].caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeaturedImages;
