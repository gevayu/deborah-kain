interface OptimizedImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  onClick?: () => void;
}

const OptimizedImage = ({
  src,
  webpSrc,
  alt,
  width,
  height,
  sizes,
  className = "",
  loading = "lazy",
  fetchPriority,
  onClick,
}: OptimizedImageProps) => {
  const imgProps: React.ImgHTMLAttributes<HTMLImageElement> = {
    alt,
    className,
    loading,
    decoding: loading === "eager" ? "sync" : "async",
    ...(width && { width }),
    ...(height && { height }),
    ...(sizes && { sizes }),
    ...(onClick && { onClick }),
  };

  // Cast fetchPriority since React types may not include it yet
  if (fetchPriority) {
    (imgProps as any).fetchPriority = fetchPriority;
  }

  if (webpSrc) {
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
        <img src={src} {...imgProps} />
      </picture>
    );
  }

  return <img src={src} {...imgProps} />;
};

export default OptimizedImage;
