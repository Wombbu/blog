import { HeaderLink } from "@/components/Header/HeaderLink";
import { SocialMediaLink } from "@/components/Header/SocialMediaLink";
import { palette } from "@/essentials/theme/palette";
import { typography } from "@/essentials/theme/typography";
import { routes } from "@/essentials/utils/routes";
import Image from "next/image";
import Link from "next/link";

export const Header = () => (
  <header className="bg-white flex items-start sm:items-center justify-between p-4 sm:p-8">
    <Link
      href={routes.home}
      className={`${palette.text.primary} font-primary font-bold text-2xl sm:text-3xl mh-11`}
    >
      Lauri Nevanperä.
    </Link>
    <div className="[&>*]:ml-0 sm:[&>*]:ml-4">
      <HeaderLink href={routes.posts}>Artikkelit</HeaderLink>
      {/* <HeaderLink href={routes.about}>Minä</HeaderLink> */}
      {/* <HeaderLink href={routes.work}>Työ</HeaderLink> */}
    </div>
    {/* <div className="[&>*]:ml-2 hidden sm:flex">
      <SocialMediaLink
        href="https://twitter.com/laurinevanpera"
        src="/twitter-logo-blue.svg"
        alt="Twitter"
      />
    </div> */}
  </header>
);
