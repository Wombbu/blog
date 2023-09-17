import { Card } from "@/model/posts/components/Card/Card";
import { VisualPost } from "@/model/posts/components/VisualPost/VisualPost";

type Props = {
  posts: React.ComponentProps<typeof Card>[];
  disableLargeFirstPost?: boolean;
};

export const PostGrid = ({ posts, disableLargeFirstPost }: Props) => (
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
        />
      </div>
    ))}
  </div>
);
