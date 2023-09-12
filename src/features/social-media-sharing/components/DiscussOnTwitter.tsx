import { RoundedLinkButton } from "@/components/RoundedLinkButton";
import Image from "next/image";

type Props = { url: string };

export const DiscussOnTwitter = ({ url }: Props) => {
  return (
    <RoundedLinkButton href={url} target="_blank" rel="noreferrer">
      <Image
        src="/twitter-logo-blue.svg"
        alt="twitter-logo"
        width={20}
        height={20}
        className={`mr-2`}
      />{" "}
      Twitter
    </RoundedLinkButton>
  );
};
