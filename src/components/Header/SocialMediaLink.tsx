import Image from "next/image";

type NextImageProps = React.ComponentProps<typeof Image>;

type Props = {
  size?: NextImageProps["width"];
  src: NextImageProps["src"];
  alt: NextImageProps["alt"];
} & React.ComponentProps<"a">;

export const SocialMediaLink = ({ size = 27, src, alt, ...aProps }: Props) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="rounded-full hover:bg-gray-100 p-2"
      {...aProps}
    >
      <Image
        src={src}
        alt={alt}
        width={27}
        height={27}
        // Force the image to be square regardless of the source img aspect ratio
        style={{ width: "27px", height: "27px" }}
      />
    </a>
  );
};
