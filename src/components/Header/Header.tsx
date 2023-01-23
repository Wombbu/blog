import { HeaderLink } from "@/components/Header/HeaderLink";
import Image from "next/image";
import twitterLogo from "./twitter-logo-blue.svg";

export const Header = () => (
  <header className="h-20 bg-white flex items-center justify-around">
    <h1 className="font-primary font-bold text-2xl text-black">Lauri</h1>
    <div className="[&>*]:ml-4">
      <HeaderLink href="/työ">Työ</HeaderLink>
      <HeaderLink href="/blogi">Blogi</HeaderLink>
      <HeaderLink href="/minä">Minä</HeaderLink>
    </div>
    <a
      href="https://twitter.com/laurinevanpera"
      target="_blank"
      rel="noreferrer"
    >
      <Image src={twitterLogo} alt="logo of twitter" height={27} width={27} />
    </a>
  </header>
);
