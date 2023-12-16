import { SocialMediaLink } from "@/components/SocialMediaLink";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import { palette } from "@/essentials/theme/palette";
import { typography } from "@/essentials/theme/typography";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between px-4 sm:px-8 pb-6 sm:pb-8 max-w-screen-lg m-auto">
      <div>
        <span
          className={`${typography.variants.caption} block`}
          style={{ fontSize: "12px" }}
        >
          Tehty ❤️&apos;lla Tampereella
        </span>
        <a
          href="mailto:lauri.nevanpera@gmail.com"
          className={`${palette.text.secondary} font-primary text-md hover:underline`}
        >
          2023 Lauri Nevanperä
        </a>
      </div>
      <SocialMediaLinks size={20} />
    </footer>
  );
};
