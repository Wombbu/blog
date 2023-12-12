import { SocialMediaLink } from "@/components/SocialMediaLink";

type Props = { size?: number } & React.ComponentProps<"div">;

export const SocialMediaLinks = ({ size, ...props }: Props) => (
  <div className="flex gap-2" {...props}>
    <SocialMediaLink
      href={`https://twitter.com/LauriNevanpera`}
      target="_blank"
      src="/twitter-logo-blue.svg"
      alt="Profiili Twitterissä"
      size={size}
    />
    <SocialMediaLink
      href={`https://www.instagram.com/laurinevanpera/`}
      target="_blank"
      src="/instagram-logo.svg"
      alt="Profiili Instagramissa"
      size={size}
    />
    <SocialMediaLink
      href={`https://www.youtube.com/@tamperekulkee3983/videos`}
      target="_blank"
      src="/youtube-logo.svg"
      alt="Profiili YouTubessa"
      size={size}
    />
  </div>
);
