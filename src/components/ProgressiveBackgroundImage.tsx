import { useState, useEffect, type ReactNode } from "react";

interface ProgressiveBackgroundImageProps {
  src: string;
  placeholderSrc?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
}

const ProgressiveBackgroundImage = ({
  src,
  placeholderSrc,
  className = "",
  style,
  children,
}: ProgressiveBackgroundImageProps) => {
  const [backgroundImage, setBackgroundImage] = useState(
    placeholderSrc ? `url("${placeholderSrc}")` : `url("${src}")`
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setBackgroundImage(`url("${src}")`);
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div
      className={`${className} transition-all duration-700 ${
        isLoading ? "blur-sm" : "blur-0"
      }`}
      style={{
        backgroundImage,
        backgroundSize: style?.backgroundSize || "cover",
        backgroundPosition: style?.backgroundPosition || "center",
        backgroundRepeat: style?.backgroundRepeat || "no-repeat",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default ProgressiveBackgroundImage;
