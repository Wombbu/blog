import { Card } from "@/features/posts/components/Card/Card";
import { VisualPost } from "@/features/posts/components/VisualPost/VisualPost";

type Props = {
  posts: React.ComponentProps<typeof Card>[];
  extraContent?: React.ReactNode;
};

export const PostGrid = ({ posts, extraContent }: Props) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
    {posts.map((post, index) => (
      <div
        className={`${index === 0 ? "col-start-1 col-end-2 sm:col-end-3" : ""}`}
        key={post.title}
      >
        <VisualPost
          date={post.date}
          imageSrc={post.imageSrc}
          title={post.title}
          readingTime={post.readingTime}
          // slug={post.slug}
          tags={post.tags}
          excerpt={post.excerpt}
          audio={post.audio}
          href={post.href}
          priority={index < 3}
          imgClassName={
            index === 0 ? "aspect-sdInverse sm:aspect-sd" : "aspect-sdInverse"
          }
        />
      </div>
    ))}
  </div>
);
