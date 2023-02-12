import { typography } from "@/essentials/theme/typography";
import { formatDateStr } from "@/essentials/utils/formatDateStr";
import { lessThan2Weeks } from "@/essentials/utils/lessThan2Weeks";
import { TagList } from "@/features/posts/components/Card/ImageOverlayTags";
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
  imgClassName?: string;
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
  imgClassName,
}: Props) => (
  <Link href={href} className={`${styles.card} flex flex-col`}>
    <figure>
      <div
        className={`${styles.imgWrapper} relative -mx-4 sm:mx-0`}
        style={{
          borderBottom: "24px solid black",
        }}
      >
        <Image
          src={imageSrc}
          alt={title}
          width={756}
          height={756}
          className={`object-cover w-full z-10 flex ${imgClassName}`}
          priority={priority}
          style={{}}
        />
        <div className="absolute bottom-0 left-0 right-0 px-2 sm:px-4 pt-28 break-words bg-gradient-to-t from-black to-transparent">
          <div className="flex gap-2 flex-wrap p-2 justify-center ">
            <TagList tags={tags} hasAudio={!!audio} isNew={false} />
          </div>
          <figcaption
            className="font-primary font-bold text-white text-2xl sm:text-3xl hover:underline decoration-3 text-center"
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
            className={`${typography.variants.secondaryTitle} text-gray-100 text-center mt-2 sm:mt-3 text-sm  sm:block`}
          >
            {formatDateStr(date)} - {readingTime} min kesto
          </figcaption>
        </div>
      </div>
    </figure>
  </Link>
);
