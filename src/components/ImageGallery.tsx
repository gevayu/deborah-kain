import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";

interface GalleryImage {
  src: string;
  webp?: string;
  alt: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  title?: string;
}

const ImageGallery = ({ images, title }: ImageGalleryProps) => {
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
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">{title}</h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-xl aspect-[3/2] cursor-pointer"
              onClick={() => setLightboxIndex(i)}
            >
              <OptimizedImage
                src={img.src}
                webpSrc={img.webp}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                width={400}
                height={267}
                sizes="(max-width: 768px) 50vw, 33vw"
              />
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
            <button onClick={closeLightbox} className="absolute top-4 left-4 text-white/80 hover:text-white p-2 z-10" aria-label="סגור">
              <X className="w-8 h-8" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-10" aria-label="הקודם">
              <ChevronRight className="w-10 h-10" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-10" aria-label="הבא">
              <ChevronLeft className="w-10 h-10" />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
