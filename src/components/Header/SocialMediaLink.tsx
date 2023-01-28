import Image from "next/image";

type NextImageProps = React.ComponentProps<typeof Image>;

type Props = {
  size?: NextImageProps["width"];
  src: NextImageProps["src"];
  alt: NextImageProps["alt"];
} & React.ComponentProps<"a">;

export const SocialMediaLink = ({
  size = 32,
  src,
  alt,
  className,
  ...aProps
}: Props) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className={`${className || ""} rounded-full p-2 hover:shadow-outline`}
      {...aProps}
    >
      <Image
        src={src}
        alt={alt}
        width={32}
        height={32}
        // Force the image to be square regardless of the source img aspect ratio
        style={{ width: "32px", height: "32px" }}
      />
    </a>
  );
};
