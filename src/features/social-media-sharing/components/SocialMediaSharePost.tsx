"use client";
import { palette } from "@/essentials/theme/palette";
import { Post } from "@/model/posts/types/Post";
import Image from "next/image";
import ShareViaModal from "@/features/social-media-sharing/components/ShareViaModal.controller";

type Props = {
  post: Post;
};

export default function SocialMediaShare({ post }: Props) {
  return (
    <div
      className={`flex flex-col gap-4 justify-center flex-wrap max-w-article mx-auto mb-4 p-4 border-2 ${palette.border.secondary} w-full bg-white`}
    >
      <div
        className="aspect-video"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Image
          src={post.coverImage.url}
          alt={post.coverImage.desc || "Kansikuva"}
          width={600}
          height={300}
          loading="lazy"
          className="object-cover absolute top-0 left-0 right-0 bottom-0 max-h-full "
        />
        <div
          className="text-white font-bold p-3 bg-black flex flex-col items-stretch mx-5 font-primary"
          style={{ zIndex: 1 }}
        >
          <div className="text-xs sm:text-sm mb-0.5">Lauri Nevanperä</div>
          <div className="text-xs sm:text-lg ">{post.title}</div>
          <div className="text-xs sm:text-sm mt-0.5 text-right self-end">
            {post.readingTime != null ? `${post.readingTime} min lukuaika` : ""}
          </div>
        </div>
      </div>
      {/* <TypeAnimation
        className={`${typography.variants.textBody} ${palette.text.secondary} my-2 h-12 sm:h-auto`}
        style={{
          fontSize: "1.25rem",
        }}
        sequence={[
          "Ei Pulitzerin arvoinen, mutta ajatuksia herättävä.",
          500,
          "Kiinnostavaa asiaa kaupungissa asuvalle",
          500,
          "Varsin mukiinmeneviä ajatuksia",
          500,
          "Asiaa tulevaisuuden kaupungeista. Mitä mieltä?",
          500,
          "Nevanperä tykittelee",
          300,
          "Nevanperä hourailee",
          800,
          "Tamperelaiset, huom!",
          2000,
        ]}
        wrapper="span"
        speed={60}
        repeat={Infinity}
      /> */}
      <div className="flex gap-2 flex-wrap items-end justify-end">
        <ShareViaModal slug={post.slug} title={post.title} />
      </div>
    </div>
  );
}
