import { typography } from "@/essentials/theme/typography";
import { formatDateStr } from "@/essentials/utils/formatDateStr";
// import { AudioPlayer } from "@/features/posts/components/AudioPlayer";
import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css";

type Props = {
  date: string;
  coverImage: string;
  title: string;
  readingTime: string;
  slug: string;
  audio?: string | undefined;
};

export const Card = ({
  date,
  coverImage,
  title,
  readingTime,
  slug,
  audio,
}: Props) => (
  <Link href={`posts/${slug}`} className={`${styles.card} flex flex-col`}>
    <div className={`${styles.imgWrapper} mb-5 relative`}>
      <Image
        src={coverImage}
        alt={title}
        width={600}
        height={600}
        className="object-cover w-full"
        style={{
          aspectRatio: "3/4",
        }}
      />
      {/* {audio ? (
        <div className="bg-white bg-opacity-50 p-4 flex items-center justify-center absolute left-0 right-0 bottom-0">
           <audio controls preload="none">
            <source src={audio} type="audio/x-m4a" />
          </audio>
          <AudioPlayer src={audio} />
        </div>
      ) : null} */}
    </div>

    <h5 className={`${typography.variants.secondaryTitle} mb-2`}>
      {formatDateStr(date)} - {readingTime} min luettava
    </h5>
    <h4 className="font-primary font-medium text-black text-2xl hover:underline decoration-3">
      {title}
    </h4>
  </Link>
);
