import { typography } from "@/essentials/theme/typography";
import { formatDateStr } from "@/essentials/utils/formatDateStr";
import { lessThan2Weeks } from "@/essentials/utils/lessThan2Weeks";
import { ImageOverlayTags } from "@/features/posts/components/Card/ImageOverlayTags";
// import { AudioPlayer } from "@/features/posts/components/AudioPlayer";
import Image from "next/image";
import Link from "next/link";
import styles from "./VisualPost.module.css";

type Props = {
  date: string;
  imageSrc: string;
  title: string;
  excerpt: string;
  readingTime: string;
  tags?: string;
  audio?: string;
  href: string;
  priority?: boolean;
};

export const VisualPost = ({
  date,
  imageSrc,
  title,
  readingTime,
  tags,
  excerpt,
  audio,
  href,
  priority,
}: Props) => (
  <Link href={href} className={`${styles.card} flex flex-col`} scroll>
    <figure>
      <div className={`${styles.imgWrapper} relative -mx-4 sm:mx-0`}>
        <Image
          src={imageSrc}
          alt={title}
          width={756}
          height={756}
          className="object-cover w-full z-10 flex aspect-videoInverse sm:aspect-square lg:aspect-sd"
          priority={priority}
          style={{
            width: "100vw",
          }}
        />
        <ImageOverlayTags
          tags={tags}
          hasAudio={!!audio}
          isNew={lessThan2Weeks(date)}
        />
        <div className="absolute bottom-2 left-2 right-2 bg-black p-2 sm:p-4 break-words">
          <figcaption
            className="font-primary font-bold text-gray-100 text-2xl sm:text-3xl hover:underline decoration-3 text-center"
            title={excerpt}
          >
            {title}
          </figcaption>
          <p
            className={`${typography.variants.textBody} text-sm sm:text-base mt-2 sm:mt-3 font-bold text-gray-100 text-center`}
          >
            {excerpt}
          </p>
          <figcaption
            className={`${typography.variants.secondaryTitle} text-gray-100 text-center mt-2 sm:mt-3 text-sm hidden sm:block`}
          >
            {formatDateStr(date)} - {readingTime} min kesto
          </figcaption>
        </div>
      </div>
    </figure>
  </Link>
);
