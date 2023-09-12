import { palette } from "@/essentials/theme/palette";
import { typography } from "@/essentials/theme/typography";
import styles from "./FeaturedPost.module.css";
import { routes } from "@/essentials/utils/routes";
import Image from "next/image";
import Link from "next/link";
import {
  ImageOverlayTags,
  TagList,
} from "@/model/posts/components/Card/ImageOverlayTags";
import { lessThan2Weeks } from "@/essentials/utils/lessThan2Weeks";

type Props = {
  title: string;
  excerpt: string;
  imageSrc: string;
  readingTime: string;
  slug: string;
  tags: string;
  audio: string | undefined;
  date: string;
};

export const FeaturedPost = ({
  title,
  excerpt,
  imageSrc,
  readingTime,
  slug,
  tags,
  audio,
  date,
}: Props) => {
  return (
    <Link
      href={routes.post(slug)}
      className={`${styles.featuredPost} ${palette.border.primary} border-3 grid lg:grid-cols-3 lg:grid-rows-1 gap-8 items-stretch cursor-pointer relative`}
    >
      <div
        className={`flex flex-col break-words lg:col-start-1 lg:col-end-3 p-4 pb-0 sm:p-8 sm:pb-0 lg:pb-6 lg:pr-0`}
      >
        <h2
          className={`font-primary text-md font-semibold text-center border-3 border-black p-2 px-3 text-gray-900 inline self-start mb-4`}
        >
          Tuorein artikkeli
        </h2>
        <h1
          className={`${typography.variants.sectionTitle()} hover:underline decoration-3`}
        >
          {title}
        </h1>
        <p className={`${typography.variants.textBody} mb-6`}>{excerpt}</p>
        <div className="flex gap-2 flex-wrap mb-auto">
          <TagList
            tags={tags}
            hasAudio={!!audio}
            isNew={lessThan2Weeks(date)}
          />
        </div>
        <p
          className={`${typography.variants.subtitle} hover:underline decoration-2 mt-4`}
        >
          Lue koko artikkeli ({readingTime} min)
        </p>
      </div>
      <div className={`${styles.imageWrapper}`}>
        <Image
          src={imageSrc}
          alt={excerpt}
          height={400}
          width={400}
          className={`${styles.image} object-cover min-w-full`}
        />
      </div>
    </Link>
  );
};
