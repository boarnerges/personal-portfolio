type Props = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export default function ImageWithFallback({ src, alt, className, width, height, priority }: Props) {
  const basePath = src.replace(/\.\w+$/, "");
  const ext = src.split(".").pop();

  return (
    <picture>
      {ext !== "svg" && <source srcSet={`${basePath}.webp`} type="image/webp" />}
      <source srcSet={src} type={ext === "png" ? "image/png" : ext === "svg" ? "image/svg+xml" : "image/jpeg"} />
      <img
        src={src}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        width={width}
        height={height}
        decoding="async"
      />
    </picture>
  );
}
