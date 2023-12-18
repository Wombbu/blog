import { button } from "@/essentials/theme/button";
import { routes } from "@/essentials/utils/routes";
import { VisualPost } from "@/model/posts/components/VisualPost/VisualPost";
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
  disableLargeFirstPost?: boolean;
  withButton?: true;
};

export const PostGrid = ({
  posts,
  disableLargeFirstPost,
  withButton,
}: Props) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
    {posts.map((post, index) => (
      <div
        className={`${
          index === 0 && !disableLargeFirstPost
            ? "col-start-1 col-end-2 sm:col-end-3"
            : ""
        }`}
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
          imgClassName={
            index === 0 && !disableLargeFirstPost
              ? "aspect-sdInverse sm:aspect-goldenRatio"
              : "aspect-sdInverse"
          }
          blurDataURL={post.blurDataURL}
          isDraft={post.isDraft || false}
        />
      </div>
    ))}
    {withButton ? (
      <Link
        href={routes.posts}
        className={`${button.variants.large} flex-1 mt-2 sm:mt-0 sm:col-start-1 sm:col-end-3`}
      >
        Katso kaikki artikkelit
      </Link>
    ) : null}
  </div>
);
