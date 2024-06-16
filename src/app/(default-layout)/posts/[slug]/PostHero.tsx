import { button } from "@/essentials/theme/button";
import { typography } from "@/essentials/theme/typography";
import { routes } from "@/essentials/utils/routes";
import { TagList } from "@/model/posts/components/Card/ImageOverlayTags";
import { Post } from "@/model/posts/types/Post";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import module from "./PostHero.module.css";

type Props = {
  post: Post;
};
export const PostHero = ({ post }: Props) => (
  <figure className={module.heroContainer}>
    <div className={`m-auto w-full ${module.imageWrapper}`}>
      <div className="relative">
        <Image
          src={post.coverImage.url}
          alt={post.coverImage.desc || "Kansikuva"}
          placeholder="blur"
          blurDataURL={post.coverImage.blurDataURL}
          width={1422}
          height={800}
          className={module.heroImage}
          loading="eager"
          priority={true}
        />
        <Link
          href={routes.posts}
          className={`${button.rectangular.primary.medium} !absolute top-2 left-2`}
        >
          <MdArrowBack /> Takaisin artikkeleihin
        </Link>
        <div className="absolute bottom-4 left-0 right-0 justify-center flex">
          <div className="flex gap-2 bg-black bg-opacity-50 p-2">
            <TagList hasAudio={!!post.audio} tags={post.tags} isNew={false} />
          </div>
        </div>
      </div>
      <figcaption
        className={`${typography.variants.caption} ${module.heroCaption} mt-1`}
      >
        {post.coverImage.desc ? post.coverImage.desc + " " : null}
        {post.coverImage.credit ? (
          <>
            KUVA: {post.coverImage.credit}
            {post.coverImage.license ? (
              <>
                {" / "}
                <a
                  href={post.coverImage.licenseLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {post.coverImage.license}
                </a>
              </>
            ) : null}
          </>
        ) : null}
      </figcaption>
    </div>
  </figure>
);
