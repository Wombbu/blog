import { typography } from "@/essentials/theme/typography";
import { formatDateStr } from "@/essentials/utils/formatDateStr";
import { lessThan2Weeks } from "@/essentials/utils/lessThan2Weeks";
import { ImageOverlayTags } from "@/features/posts/components/Card/ImageOverlayTags";
// import { AudioPlayer } from "@/features/posts/components/AudioPlayer";
import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css";

type Props = {
  date: string;
  imageSrc: string;
  title: string;
  excerpt: string;
  readingTime: string;
  slug: string;
  tags?: string;
  audio?: string;
  href: string;
  priority?: boolean;
};

export const Card = ({
  date,
  imageSrc,
  title,
  readingTime,
  // slug,
  tags,
  excerpt,
  audio,
  href,
  priority,
}: Props) => (
  <Link href={href} className={`${styles.card} flex flex-col`} scroll>
    <figure>
      <div className={`${styles.imgWrapper} mb-3 relative`}>
        <Image
          src={imageSrc}
          alt={title}
          width={342}
          height={456}
          className="object-cover w-full z-10 flex"
          style={{
            aspectRatio: "3/4",
          }}
          priority={priority}
        />
        <ImageOverlayTags
          tags={tags}
          hasAudio={!!audio}
          isNew={/* lessThan2Weeks(date) */ false} // Do not show "new" tag on cards since it'll create clutter
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

      <figcaption className={`${typography.variants.secondaryTitle}`}>
        {formatDateStr(date)} - {readingTime} min kesto
      </figcaption>
      <figcaption
        className="font-primary font-medium text-black text-2xl hover:underline decoration-3"
        title={excerpt}
      >
        {title}
      </figcaption>
    </figure>
  </Link>
);
