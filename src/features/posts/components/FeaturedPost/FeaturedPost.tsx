import { palette } from "@/essentials/theme/palette";
import { typography } from "@/essentials/theme/typography";
import { formatDateStr } from "@/essentials/utils/formatDateStr";
import { routes } from "@/essentials/utils/routes";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  excerpt: string;
  coverImage: string;
  readingTime: string;
  slug: string;
};

export const FeaturedPost = ({
  title,
  excerpt,
  coverImage,
  readingTime,
  slug,
}: Props) => {
  return (
    <Link
      href={routes.post(slug)}
      className={`${palette.border.primary} p-4 sm:p-8 border-3 flex flex-col md:flex-row items-stretch mb-8 cursor-pointer`}
    >
      <div className="flex-4 mr-8 flex flex-col break-words">
        <h2 className={typography.variants.secondaryTitle}>Nosto</h2>
        <h1 className={typography.variants.sectionTitle}>{title}</h1>
        <p className={typography.variants.textBody}>{excerpt}</p>
        <p
          className={`${typography.variants.subtitle} mt-6 md:mt-auto hover:underline decoration-2`}
        >
          Lue koko artikkeli ({readingTime} min)
        </p>
      </div>
      <Image
        src={coverImage}
        alt={excerpt}
        height={400}
        width={400}
        className="aspect-square lg:aspect-sd mt-8 md:mt-0 object-cover self-stretch min-w-0 min-h-0 w-full h-full"
      />
    </Link>
  );
};
