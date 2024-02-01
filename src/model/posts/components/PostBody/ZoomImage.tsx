"use client";
import { BsArrowsAngleContract } from "react-icons/bs";
import Image from "next/image";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useCallback, useState } from "react";
<BsArrowsAngleContract />;

type Props = {
  src: string;
  alt: string;
};

export const ZoomImage = ({ src, alt }: Props) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback((shouldZoom: boolean) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    // <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
    <Image
      src={src}
      alt={alt}
      height={816}
      width={isZoomed ? 1280 : 612}
      loading="lazy"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGPYe+//1h//XeuOM2zbe+H/ixdiDAwMveVJGxsjVcR4GVx1+bwdNKQYGAC0sRB+mPDsEQAAAABJRU5ErkJggg=="
    />
    // </ControlledZoom>
  );
};
