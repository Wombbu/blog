"use client";

import { RoundedLinkButton } from "@/components/RoundedLinkButton";
import { isMobile } from "@/essentials/utils/isMobile";
import { routes } from "@/essentials/utils/routes";
import Image from "next/image";

type Props = { slug: string };

export default function ShareOnWhatsapp({ slug }: Props) {
  return isMobile() ? (
    <RoundedLinkButton
      href={`whatsapp://send?text=https://www.laurinevanpera.fi${routes.post(
        slug
      )}`}
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src="/whatsapp.svg"
        alt="whatsapp-logo"
        width={22}
        height={22}
        className={`mr-2`}
      />{" "}
      Jaa Whatsappissa
    </RoundedLinkButton>
  ) : null;
}
