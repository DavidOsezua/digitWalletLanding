import { useState, useEffect } from "react";

interface ProgressiveImageProps {
  src: string;
  placeholderSrc?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProgressiveImage = ({
  src,
  placeholderSrc,
  alt = "",
  className = "",
  style,
}: ProgressiveImageProps) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
      setIsLoading(false);
    };
  }, [src]);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={`${className} transition-all duration-500 ${
        isLoading ? "blur-sm scale-105" : "blur-0 scale-100"
      }`}
      style={style}
      loading="lazy"
    />
  );
};

export default ProgressiveImage;
