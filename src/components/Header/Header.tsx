import { HeaderLink } from "@/components/Header/HeaderLink";
import Image from "next/image";
import Link from "next/link";

export const Header = () => (
  <header className="h-24 bg-white flex items-center justify-around sticky top-0">
    <Link href="/" className="font-primary font-bold text-3xl text-black">
      Lauri Nevanperä.
    </Link>
    <div className="[&>*]:ml-6">
      <HeaderLink href="/työ">Työ</HeaderLink>
      <HeaderLink href="/blogi">Blogi</HeaderLink>
      <HeaderLink href="/minä">Minä</HeaderLink>
    </div>
    <div className="flex [&>*]:ml-6">
      <a
        href="https://twitter.com/laurinevanpera"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/twitter-logo-blue.svg"
          alt="Twitter"
          width={27}
          height={27}
        />
      </a>
      <a
        href="https://twitter.com/laurinevanpera"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/twitter-logo-blue.svg"
          alt="Twitter"
          width={27}
          height={27}
        />
      </a>
      <a
        href="https://twitter.com/laurinevanpera"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/twitter-logo-blue.svg"
          alt="Twitter"
          width={27}
          height={27}
        />
      </a>
    </div>
  </header>
);
