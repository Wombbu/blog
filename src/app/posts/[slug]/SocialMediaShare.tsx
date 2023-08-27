"use client";
import { DiscussOnTwitter } from "@/components/DiscussOnTwitter";
import { ShareOnFacebook } from "@/components/ShareOnFacebook";
import { ShareOnReddit } from "@/components/ShareOnReddit";
import { ShareOnTwitter } from "@/components/ShareOnTwitter";
import ShareOnWhatsapp from "@/components/ShareOnWhatsapp";
import { palette } from "@/essentials/theme/palette";
import { typography } from "@/essentials/theme/typography";
import { Post } from "@/features/posts/types/Post";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

type Props = {
  post: Post;
  slug: string;
};

export default function SocialMediaShare({ post, slug }: Props) {
  return (
    <div className="flex flex-col gap-4 justify-center flex-wrap max-w-article mx-auto mb-4 p-4 border-2 border-gray-200 rounded-2xl w-full">
      <div className="flex gap-3">
        <div className="rounded-full overflow-hidden">
          <Image
            src="/profiili.jpg"
            width={4}
            height={4}
            alt="Lauri Nevanperä"
            className="height-auto blur-sm w-12 h-12"
          />
        </div>
        <div className="self-center">
          <address className="font-bold font-primary text-md not-italic leading-none">
            Sinä
          </address>
          <time
            itemProp="datepublished"
            dateTime={post.date}
            className={`${typography.variants.secondaryTitle} leading-none`}
          >
            @Sinä
          </time>
        </div>
      </div>
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
          className="object-cover absolute top-0 left-0 right-0 bottom-0 max-h-full rounded-lg"
        />
        <div
          className="text-white font-bold p-3 bg-black flex flex-col items-stretch mx-3 font-primary"
          style={{ zIndex: 1 }}
        >
          <div className="text-xs sm:text-sm mb-0.5">Lauri Nevanperä</div>
          <div className="text-md sm:text-2xl ">{post.title}</div>
          <div className="text-xs sm:text-sm mt-0.5 text-right self-end">
            {post.readingTime != null ? `${post.readingTime} min lukuaika` : ""}
          </div>
        </div>
      </div>
      <TypeAnimation
        className={`${typography.variants.textBody} ${palette.text.secondary} my-2`}
        style={{
          fontSize: "1.25rem",
          minHeight: "48px",
        }}
        sequence={[
          "Ei Pulitzerin arvoinen, mutta ajatuksia herättävä.",
          500,
          "Jos asut kaupungissa, tämä saattaa kiinnostaa.",
          500,
          "Varsin mukiinmeneviä ajatuksia kaupungeista",
          500,
          "Asiaa tulevaisuuden kaupungeista. Mitä mieltä?",
          500,
          "Nevanperä taas tykittelee",
          300,
          "Nevanperä taas hourailee",
          800,
          "Tamperelaiset, huomio!",
          10000,
        ]}
        wrapper="span"
        speed={80}
        repeat={Infinity}
      />
      <div className="flex gap-2 flex-wrap items-end justify-end">
        {post.tweet ? (
          <DiscussOnTwitter url={post.tweet} />
        ) : (
          <ShareOnTwitter slug={slug} />
        )}
        <ShareOnFacebook slug={slug} />
        <ShareOnWhatsapp slug={slug} />
        {/* <ShareOnReddit slug={slug} title={post.title} /> */}
      </div>
    </div>
  );
}
