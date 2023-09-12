"use client";
import { ShareButtonGeneric } from "@/features/social-media-sharing/components/ShareButtonGeneric";
import { ShareViaWebShareApi } from "@/features/social-media-sharing/components/ShareViaWebShareApi";
import { SocialMediaShareModalView } from "@/features/social-media-sharing/components/SocialMediaShareModal/SocialMediaShareModal.view";
import { useState } from "react";

export const webShareAvailable = () =>
  navigator?.share && typeof navigator?.share === "function";

type Props = { slug: string; title: string };

export default function ShareViaModal({ slug, title }: Props) {
  const [isOpen, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  return webShareAvailable() ? (
    <ShareViaWebShareApi slug={slug} title={title} />
  ) : (
    <>
      <ShareButtonGeneric
        onClick={() => {
          setOpen(true);
        }}
      >
        Jaa artikkeli
      </ShareButtonGeneric>
      <SocialMediaShareModalView
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        slug={slug}
        title={title}
        copied={copied}
        onCopy={async () => {
          await navigator.clipboard
            .writeText(`https://www.laurinevanpera.fi/posts/${slug}`)
            .then(() => {
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 2000);
            });
        }}
      />
    </>
  );
}
