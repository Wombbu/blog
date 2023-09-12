"use client";

import { ShareOnFacebook } from "@/features/social-media-sharing/components/ShareOnFacebook";
import { ShareOnReddit } from "@/features/social-media-sharing/components/ShareOnReddit";
import { ShareOnTwitter } from "@/features/social-media-sharing/components/ShareOnTwitter";
import ShareOnWhatsapp from "@/features/social-media-sharing/components/ShareOnWhatsapp";

type Props = {
  slug: string;
  title: string;
};

export default function SocialMediaShareLinkButtons({ slug, title }: Props) {
  return (
    <>
      <ShareOnTwitter slug={slug} />
      <ShareOnFacebook slug={slug} />
      <ShareOnWhatsapp slug={slug} />
      {/* <ShareOnReddit slug={slug} title={slug} /> */}
    </>
  );
}
