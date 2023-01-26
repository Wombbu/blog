import { Card } from "@/components/Card/Card";
import { button } from "@/essentials/theme/button";
import { typography } from "@/essentials/theme/typography";
import Link from "next/link";
type Props = {
  posts: React.ComponentProps<typeof Card>[];
};
export const BlogPreview = ({ posts }: Props) => (
  <section className="max-w-screen-lg">
    <Link href="/blogi">
      <h2 className={typography.variants.sectionTitle}>Uusimmat</h2>
    </Link>
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
    <Link href="/blog" className={`${button.variants.large} w-full mt-8`}>
      Katso kaikki artikkelit
    </Link>
  </section>
);
