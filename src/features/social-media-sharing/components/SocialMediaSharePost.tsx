import { Post } from "@/model/posts/types/Post";
import ShareViaModal from "@/features/social-media-sharing/components/ShareViaModal.controller";

type Props = {
  post: Post;
};

export default function SocialMediaSharePost({ post }: Props) {
  return (
    <div className={`flex flex-col gap-4`}>
      {/* <Image
        src={buildOgImageUrl({
          imageUrl: post.coverImage.url,
          title: post.title,
          readingTime: post.readingTime,
        })}
        alt={post.coverImage.desc || "Kansikuva"}
        width={600}
        height={300}
        loading="lazy"
        className="object-cover"
      /> */}
      <div className="flex gap-2">
        <ShareViaModal slug={post.slug} title={post.title} />
      </div>
    </div>
  );
}
