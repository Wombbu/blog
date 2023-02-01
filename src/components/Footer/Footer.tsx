import { SocialMediaLink } from "@/components/Header/SocialMediaLink";
import { palette } from "@/essentials/theme/palette";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between px-6 sm:px-8 pb-6 sm:pb-8 max-w-screen-lg m-auto">
      <a
        href="mailto:lauri.nevanpera@gmail.com"
        className={`${palette.text.secondary} font-primary text-md hover:underline`}
      >
        Lauri Nevanperä 2023
      </a>
      <div className="flex gap-2">
        <SocialMediaLink
          href={`https://www.youtube.com/@tamperekulkee3983/videos`}
          target="_blank"
          src="/youtube-logo.svg"
          alt="Profiili YouTubessa"
        />
        <SocialMediaLink
          href={`https://twitter.com/LauriNevanpera`}
          target="_blank"
          src="/twitter-logo-blue.svg"
          alt="Profiili Twitterissä"
        />
      </div>
    </footer>
  );
};
