import { RoundedLinkButton } from "@/components/RoundedLinkButton";
import { routes } from "@/essentials/utils/routes";
import Image from "next/image";

type Props = { slug: string };

export const ShareOnTwitter = ({ slug }: Props) => {
  return (
    <RoundedLinkButton
      href={`https://twitter.com/intent/tweet?text=https://www.laurinevanpera.fi${routes.post(
        slug
      )}`}
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src="/twitter-logo-blue.svg"
        alt="twitter-logo"
        width={20}
        height={20}
        className={`mr-2`}
      />{" "}
      Jaa Twitterissä
    </RoundedLinkButton>
  );
};
