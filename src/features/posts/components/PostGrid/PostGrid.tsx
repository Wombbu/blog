import { Card } from "@/features/posts/components/Card/Card";
import { button } from "@/essentials/theme/button";
import { typography } from "@/essentials/theme/typography";
import Link from "next/link";
import { routes } from "@/essentials/utils/routes";
type Props = {
  posts: React.ComponentProps<typeof Card>[];
};

export const PostGrid = ({ posts }: Props) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {posts.map((post) => (
      <Card
        key={post.title}
        date={post.date}
        coverImage={post.coverImage}
        title={post.title}
        readingTime={post.readingTime}
        slug={post.slug}
      />
    ))}
  </div>
);
