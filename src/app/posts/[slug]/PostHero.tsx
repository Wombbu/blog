import { button } from "@/essentials/theme/button";
import { typography } from "@/essentials/theme/typography";
import { routes } from "@/essentials/utils/routes";
import { Post } from "@/model/posts/types/Post";
import Image from "next/image";
import Link from "next/link";
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
          width={960}
          height={640}
          className={module.heroImage}
          loading="eager"
        />
        <Link
          href={routes.posts}
          className={`${button.variants.smolInverted} absolute top-2 left-2`}
        >
          Takaisin artikkeleihin
        </Link>
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
