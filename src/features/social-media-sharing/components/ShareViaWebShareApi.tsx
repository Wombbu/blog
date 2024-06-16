import { routes } from "@/essentials/utils/routes";
import { ShareButtonGeneric } from "@/features/social-media-sharing/components/ShareButtonGeneric.view";

export const webShareAvailable = () =>
  navigator?.share && typeof navigator?.share === "function";

type Props = { slug: string; title: string };

export const ShareViaWebShareApi = ({ slug, title }: Props) => {
  return (
    <ShareButtonGeneric
      onClick={() => {
        navigator.share({
          title: "Lauri Nevanperä",
          text: title,
          url: `https://www.laurinevanpera.fi${routes.post(slug)}`,
        });
      }}
    >
      Jaa artikkeli
    </ShareButtonGeneric>
  );
};
