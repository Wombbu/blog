import { palette } from "@/essentials/theme/palette";
import { Post } from "@/model/posts/types/Post";
import Image from "next/image";
import ShareViaModal from "@/features/social-media-sharing/components/ShareViaModal.controller";
import { buildOgImageUrl } from "@/model/og-image/buildOgImageUrl";

type Props = {
  post: Post;
};

export const SocialMediaSharePost = ({ post }: Props) => (
  <div
    className={`flex flex-col gap-4 justify-center flex-wrap max-w-article mx-auto mb-4 p-4 border-2 ${palette.border.secondary} w-full bg-white rounded-lg`}
  >
    <Image
      src={buildOgImageUrl({
        imageUrl: post.coverImage.url,
        title: post.title,
        readingTime: post.readingTime,
      })}
      alt={post.coverImage.desc || "Kansikuva"}
      width={600}
      height={300}
      loading="lazy"
      className="object-cover rounded-md"
    />
    <div className="flex gap-2 flex-wrap items-end justify-end">
      <ShareViaModal slug={post.slug} title={post.title} />
    </div>
  </div>
);
