"use client";
import { BsArrowsAngleContract } from "react-icons/bs";
import Zoom from "react-medium-image-zoom";
import Image from "next/image";
import "react-medium-image-zoom/dist/styles.css";

type Props = {
  src: string;
  alt: string;
};

export const ZoomImage = ({ src, alt }: Props) => {
  return (
    <figure>
      <Zoom
        zoomImg={{
          src: src,
          alt: alt,
        }}
      >
        <Image
          src={src}
          alt={alt}
          height={612}
          width={612}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8Ww8AAj8BXkQ+xPEAAAAASUVORK5CYII="
        />
      </Zoom>
      <figcaption>{alt}</figcaption>
    </figure>
  );
};
