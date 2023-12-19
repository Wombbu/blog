import { HeaderLink } from "@/components/Header/HeaderLink";
import { palette } from "@/essentials/theme/palette";
import { routes } from "@/essentials/utils/routes";
import Link from "next/link";

export const Header = () => (
  <header className="bg-white flex items-end sm:items-end justify-between px-4 sm:px-8 py-8 sm:py-12 max-w-screen-lg m-auto">
    <Link
      href={routes.home}
      className={`${palette.text.primary} font-primary font-bold text-2xl sm:text-3xl mh-11`}
    >
      Lauri Nevanperä
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
