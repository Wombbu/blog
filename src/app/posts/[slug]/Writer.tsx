import { SocialMediaLink } from "@/components/SocialMediaLink";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import { palette } from "@/essentials/theme/palette";
import { typography } from "@/essentials/theme/typography";
import { formatDateStr } from "@/essentials/utils/formatDateStr";
import { Post } from "@/model/posts/types/Post";
import Image from "next/image";

type Props = { post: Post };

export const Writer = ({ post }: Props) => (
  <div className="flex gap-3  mb-6">
    <a href="https://twitter.com/LauriNevanpera" target="_blank">
      <Image
        src="/profiili.jpg"
        width={66}
        height={66}
        alt="Lauri Nevanperä"
        className="height-auto rounded-full"
      />
    </a>
    <div className="self-center">
      <address className="font-bold font-primary text-md not-italic">
        Lauri Nevanperä
        <span className={`${palette.text.secondary} font-normal`}>
          {" | "}Tampere
        </span>
      </address>
      <time
        itemProp="datepublished"
        dateTime={post.date}
        className={`${typography.variants.secondaryTitle}`}
      >
        {formatDateStr(post.date)} | {post.readingTime} min lukuaika
      </time>
      {/* <time
        itemProp="datepublished"
        dateTime={post.date}
        className={`${typography.variants.secondaryTitle} text-blue-500 cursor-pointer hover:underline flex items-center`}
      >
        Ota yhteyttä
      </time> */}
    </div>
    <SocialMediaLinks className="gap-2 flex-1 justify-end items-center scale-75 hidden sm:flex" />
  </div>
);
