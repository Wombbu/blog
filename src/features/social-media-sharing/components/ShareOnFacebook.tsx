import { RoundedLinkButton } from "@/components/RoundedLinkButton";
import { routes } from "@/essentials/utils/routes";
import Image from "next/image";

type Props = { slug: string };

export const ShareOnFacebook = ({ slug }: Props) => {
  return (
    <RoundedLinkButton
      href={`https://www.facebook.com/sharer/sharer.php?u=https://www.laurinevanpera.fi${routes.post(
        slug
      )}`}
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src="/fb-logo.svg"
        alt="fb-logo"
        width={20}
        height={20}
        className={`mr-2`}
      />{" "}
      Facebook
    </RoundedLinkButton>
  );
};
