import { palette } from "@/essentials/theme/palette";
import Image from "next/image";

type NextImageProps = React.ComponentProps<typeof Image>;

type Props = {
  size?: NextImageProps["width"];
  src: NextImageProps["src"];
  alt: NextImageProps["alt"];
} & React.ComponentProps<"a">;

export const SocialMediaLink = ({
  size = 28,
  src,
  alt,
  className,
  ...aProps
}: Props) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className={`${className || ""} ${
        palette.border.secondary
      } rounded-full p-2 hover:bg-gray-200 bg-white border-2 flex-grow-0 flex-shrink-0`}
      {...aProps}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        // Force the image to be square regardless of the source img aspect ratio
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      />
    </a>
  );
};
