import { palette } from "@/essentials/theme/palette";
import { typography } from "@/essentials/theme/typography";
import Image from "next/image";

type Props = {
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readingTime: string;
  slug: string;
};

export const FeaturedPost = ({
  title,
  excerpt,
  coverImage,
  date,
  readingTime,
  slug,
}: Props) => {
  return (
    <div
      className={`${palette.border.primary} p-8 border-3 flex items-stretch mb-8`}
    >
      <div className="flex-4 mr-8">
        <h2 className={typography.variants.secondaryTitle}>Nosto</h2>
        <h1 className={typography.variants.sectionTitle}>{title}</h1>
        <p className={typography.variants.textBody}>{excerpt}</p>
      </div>
      <Image
        src={coverImage}
        alt={excerpt}
        height={200}
        width={200}
        className="flex-1 aspect-square object-cover"
      />
    </div>
  );
};
