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
    <h5 className="font-primary font-medium text-gray-600 text-xl mb-4">
      {new Date(date).toLocaleDateString("FI-fi", {})} - {readingTime} min
      lukuaika
    </h5>
    <h4 className="font-primary font-medium text-black text-2xl mb-4">
      {title}
    </h4>
  </Link>
);