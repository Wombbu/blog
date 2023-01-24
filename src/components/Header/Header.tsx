import { HeaderLink } from "@/components/Header/HeaderLink";
import { SocialMediaLink } from "@/components/Header/SocialMediaLink";
import Image from "next/image";
import Link from "next/link";

export const Header = () => (
  <header className="h-24 bg-white flex items-center justify-around sticky top-0">
    <Link href="/" className="font-primary font-bold text-3xl text-black">
      Lauri Nevanperä.
    </Link>
    <div className="[&>*]:ml-2 md:[&>*]:ml-6">
      <HeaderLink href="/blogi">Blogi</HeaderLink>
      <HeaderLink href="/minä">Minä</HeaderLink>
      <HeaderLink href="/työ">Työ</HeaderLink>
    </div>
    <div className="[&>*]:ml-2 hidden md:flex">
      <SocialMediaLink
        href="https://twitter.com/laurinevanpera"
        src="/twitter-logo-blue.svg"
        alt="Twitter"
      />
    </div>
  </header>
);
