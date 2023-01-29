import { Card } from "@/features/posts/components/Card/Card";

type Props = {
  posts: React.ComponentProps<typeof Card>[];
  extraContent?: React.ReactNode;
};

export const PostGrid = ({ posts, extraContent }: Props) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {extraContent ? (
      <div
        className={`col-start-1 col-end-2 sm:col-end-3 lg:col-end-4 row-start-2`}
      >
        {extraContent}
      </div>
    ) : null}
    {posts.map((post) => (
      <Card
        key={post.title}
        date={post.date}
        coverImage={post.coverImage}
        title={post.title}
        readingTime={post.readingTime}
        slug={post.slug}
        tags={post.tags}
        excerpt={post.excerpt}
      />
    ))}
  </div>
);
