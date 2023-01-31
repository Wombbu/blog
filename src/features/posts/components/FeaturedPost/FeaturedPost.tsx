import { palette } from "@/essentials/theme/palette";
import { typography } from "@/essentials/theme/typography";
import styles from "./FeaturedPost.module.css";
import { routes } from "@/essentials/utils/routes";
import Image from "next/image";
import Link from "next/link";
import { ImageOverlayTags } from "@/features/posts/components/Card/ImageOverlayTags";

type Props = {
  title: string;
  excerpt: string;
  imageSrc: string;
  readingTime: string;
  slug: string;
  tags: string;
  audio: string | undefined;
};

export const FeaturedPost = ({
  title,
  excerpt,
  imageSrc,
  readingTime,
  slug,
  tags,
  audio,
}: Props) => {
  return (
    <Link
      href={routes.post(slug)}
      className={`${styles.featuredPost} ${palette.border.primary} p-4 sm:p-8 border-3 flex flex-col sm:flex-row items-stretch cursor-pointer`}
    >
      <div className="flex-1 sm:mr-8 flex flex-col break-words relative">
        <h2
          className={`font-primary text-md text-center bg-black p-2 mb-6 text-gray-100`}
        >
          Nosto
        </h2>
        <h1 className={typography.variants.sectionTitle()}>{title}</h1>
        <p className={`${typography.variants.textBody} mb-4`}>{excerpt}</p>
        <p
          className={`${typography.variants.subtitle} mt-auto hover:underline decoration-2`}
        >
          Lue koko artikkeli ({readingTime} min)
        </p>
      </div>
      <div className={`mt-8 sm:mt-0 flex-1 relative`}>
        <Image
          src={imageSrc}
          alt={excerpt}
          height={400}
          width={400}
          className={`${styles.image} aspect-sd object-cover min-w-full min-h-full`}
        />
        <ImageOverlayTags tags={tags} hasAudio={!!audio} isNew={false} />
      </div>
    </Link>
  );
};
