import { SocialMediaLink } from "@/components/Header/SocialMediaLink";
import { palette } from "@/essentials/theme/palette";

export const Footer = () => {
  return (
    <footer className="flex items-end justify-between px-6 sm:px-8 pb-6 sm:pb-8">
      <a
        href="mailto:lauri.nevanpera@gmail.com"
        className={`${palette.text.secondary} font-primary text-md hover:underline`}
      >
        Lauri Nevanperä 2023
      </a>
      <SocialMediaLink
        href={`https://twitter.com/LauriNevanpera`}
        target="_blank"
        src="/twitter-logo-blue.svg"
        alt="Jaa Twitterissä"
      />
    </footer>
  );
};
