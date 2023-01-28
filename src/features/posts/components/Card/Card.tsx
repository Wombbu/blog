import { typography } from "@/essentials/theme/typography";
import { formatDateStr } from "@/essentials/utils/formatDateStr";
import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css";

type Props = {
  date: string;
  coverImage: string;
  title: string;
  readingTime: string;
  slug: string;
};

export const Card = ({ date, coverImage, title, readingTime, slug }: Props) => (
  <Link href={`posts/${slug}`} className={`${styles.card} flex flex-col`}>
    <Image
      src={coverImage}
      alt={title}
      width={600}
      height={600}
      className="object-cover mb-5 w-full"
      style={{
        aspectRatio: "3/4",
      }}
    />
    <h5 className={`${typography.variants.secondaryTitle} mb-2`}>
      {formatDateStr(date)} - {readingTime} min luettava
    </h5>
    <h4 className="font-primary font-medium text-black text-2xl">{title}</h4>
  </Link>
);
