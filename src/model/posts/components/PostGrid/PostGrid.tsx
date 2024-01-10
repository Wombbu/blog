import { button } from "@/essentials/theme/button";
import { routes } from "@/essentials/utils/routes";
import { VisualPost } from "@/model/posts/components/VisualPost/VisualPost";
import Image from "next/image";
import Link from "next/link";

type Post = {
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
  blurDataURL?: string;
  isDraft: boolean | undefined;
};

type Props = {
  posts: Post[];
  withButton?: true;
};

export const PostGrid = ({ posts, withButton }: Props) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {posts.slice(0, withButton ? 3 : undefined).map((post, index) => (
      <div
        className={`${"col-start-1 col-end-2 sm:col-end-3"}`}
        key={post.title}
      >
        <VisualPost
          date={post.date}
          imageSrc={post.imageSrc}
          title={post.title}
          readingTime={post.readingTime}
          tags={post.tags}
          excerpt={post.excerpt}
          audio={post.audio}
          href={post.href}
          priority={index < 3}
          imgClassName={"aspect-sdInverse sm:aspect-goldenRatio"}
          blurDataURL={post.blurDataURL}
          isDraft={post.isDraft || false}
        />
      </div>
    ))}

    {withButton ? (
      <>
        <div className="sm:col-start-1 sm:col-end-3 grid grid-cols-3 md:grid-cols-6 gap-2">
          {posts.slice(3, 9).map((post, index) => (
            <Link key={post.href} href={post.href} className={`flex flex-col`}>
              <Image
                src={post.imageSrc}
                alt={post.title}
                width={240}
                height={260}
                loading="lazy"
                className={`object-cover aspect-sdInverse sm:aspect-square flex-1 h-auto min-w-0`}
                key={post.imageSrc}
                blurDataURL={post.blurDataURL}
                placeholder="blur"
              />
            </Link>
          ))}
        </div>
        <div className="sm:col-start-1 sm:col-end-3 flex justify-center">
          <Link
            href={routes.posts}
            className={`${button.variants.largeInverted} flex-1`}
          >
            Katso kaikki artikkelit
          </Link>
        </div>
      </>
    ) : null}
  </div>
);
