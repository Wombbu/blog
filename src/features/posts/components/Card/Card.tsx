import { typography } from "@/essentials/theme/typography";
import { formatDateStr } from "@/essentials/utils/formatDateStr";
import { ImageOverlayTags } from "@/features/posts/components/Card/ImageOverlayTags";
// import { AudioPlayer } from "@/features/posts/components/AudioPlayer";
import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css";

type Props = {
  date: string;
  coverImage: string;
  title: string;
  excerpt: string;
  readingTime: string;
  slug: string;
  tags?: string;
  audio?: string;
  href: string;
};

export const Card = ({
  date,
  coverImage,
  title,
  readingTime,
  slug,
  tags,
  excerpt,
  audio,
  href,
}: Props) => (
  <Link href={href} className={`${styles.card} flex flex-col`}>
    <div className={`${styles.imgWrapper} mb-3 relative`}>
      <Image
        src={coverImage}
        alt={title}
        width={600}
        height={600}
        className="object-cover w-full z-10 flex"
        style={{
          aspectRatio: "3/4",
        }}
      />
      <ImageOverlayTags tags={tags} hasAudio={!!audio} />
      {/* {audio ? (
        <div className="bg-white bg-opacity-50 p-4 flex items-center justify-center absolute left-0 right-0 bottom-0">
           <audio controls preload="none">
            <source src={audio} type="audio/x-m4a" />
          </audio>
          <AudioPlayer src={audio} />
        </div>
      ) : null} */}
    </div>

    <h5 className={`${typography.variants.secondaryTitle}`}>
      {formatDateStr(date)} - {readingTime} min kesto
    </h5>
    <h4
      className="font-primary font-medium text-black text-2xl hover:underline decoration-3"
      title={excerpt}
    >
      {title}
    </h4>
  </Link>
);
