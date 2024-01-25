import { typography } from "@/essentials/theme/typography";
import { formatDateStr } from "@/essentials/utils/formatDateStr";
import { TagList } from "@/model/posts/components/Card/ImageOverlayTags";
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
  imgClassName?: string;
  blurDataURL?: string;
  isDraft: boolean;
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
  imgClassName,
  blurDataURL,
  isDraft,
}: Props) => (
  <Link href={href} className={`flex flex-col`}>
    <figure>
      <div className={`relative`}>
        <Image
          src={imageSrc}
          placeholder="blur"
          blurDataURL={blurDataURL}
          alt={title}
          loading={"lazy"}
          width={756}
          height={756}
          className={`object-cover w-full z-10 flex ${imgClassName}`}
          style={{}}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 px-2 sm:px-4 pt-40 pb-4 break-words flex flex-col items-center z-10 ${styles.gradientBlur}`}
        >
          <figcaption className="font-primary font-bold text-gray-100 text-2xl lg:text-3xl hover:underline decoration-3 text-center max-w-xl mb-4 sm:mb-4">
            {isDraft ? "🚧 " : null}
            {title}
          </figcaption>
          <div className="flex gap-3 flex-wrap justify-center ">
            <TagList tags={tags} hasAudio={!!audio} isNew={false} />
          </div>
          {/* <p
            className={`${typography.variants.textBody} text-sm sm:text-base mt-2 sm:mt-3 font-bold text-gray-100 text-center max-w-xl`}
          >
            {excerpt}
          </p> */}
          <figcaption
            className={`${typography.variants.secondaryTitle} text-gray-300 text-center text-sm sm:block self-end mt-4 pr-2 sm:pr-0`}
          >
            {formatDateStr(date)} - {readingTime} min kesto
          </figcaption>
        </div>
      </div>
    </figure>
  </Link>
);
