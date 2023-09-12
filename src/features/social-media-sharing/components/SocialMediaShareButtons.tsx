"use client";

import { ShareOnFacebook } from "@/features/social-media-sharing/components/ShareOnFacebook";
import { ShareOnReddit } from "@/features/social-media-sharing/components/ShareOnReddit";
import { ShareOnTwitter } from "@/features/social-media-sharing/components/ShareOnTwitter";
import ShareOnWhatsapp from "@/features/social-media-sharing/components/ShareOnWhatsapp";
import {
  ShareViaWebShareApi,
  webShareAvailable,
} from "@/features/social-media-sharing/components/ShareViaWebShareApi";

type Props = {
  slug: string;
  title: string;
};

export default function SocialMediaShareButtons({ slug, title }: Props) {
  return webShareAvailable() ? (
    <ShareViaWebShareApi title={title} slug={slug} />
  ) : (
    <>
      <ShareOnTwitter slug={slug} />
      <ShareOnFacebook slug={slug} />
      <ShareOnWhatsapp slug={slug} />
      {/* <ShareOnReddit slug={slug} title={slug} /> */}
    </>
  );
}
