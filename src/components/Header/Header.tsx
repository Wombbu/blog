import { HeaderLink } from "@/components/Header/HeaderLink";
import { SocialMediaLink } from "@/components/Header/SocialMediaLink";
import { typography } from "@/essentials/theme/typography";
import Image from "next/image";
import Link from "next/link";

export const Header = () => (
  <header className="bg-white flex items-start sm:items-center justify-between p-6">
    <Link
      href="/"
      className={`${typography.palette.primary} font-primary font-bold text-2xl sm:text-3xl mh-11`}
    >
      Lauri Nevanperä.
    </Link>
    <div className="[&>*]:ml-2 sm:[&>*]:ml-6">
      <HeaderLink href="/blogi">Artikkelit</HeaderLink>
      <HeaderLink href="/minä">Minä</HeaderLink>
      <HeaderLink href="/työ">Työ</HeaderLink>
    </div>
    <div className="[&>*]:ml-2 hidden sm:flex">
      <SocialMediaLink
        href="https://twitter.com/laurinevanpera"
        src="/twitter-logo-blue.svg"
        alt="Twitter"
      />
    </div>
  </header>
);
