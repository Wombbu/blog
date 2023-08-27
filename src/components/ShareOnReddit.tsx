import { RoundedLinkButton } from "@/components/RoundedLinkButton";
import { routes } from "@/essentials/utils/routes";
import Image from "next/image";

type Props = { slug: string; title: string };

export const ShareOnReddit = ({ slug, title }: Props) => {
  return (
    <RoundedLinkButton
      href={`https://reddit.com/submit?url=https://www.laurinevanpera.fi${routes.post(
        slug
      )}&title=${title}`}
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src="/reddit-logo.svg"
        alt="reddit-logo"
        width={20}
        height={20}
        className={`mr-2`}
      />{" "}
      Reddit
    </RoundedLinkButton>
  );
};
