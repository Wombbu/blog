import { Card } from "@/components/Card/Card";
import Link from "next/link";
type Props = {
  posts: React.ComponentProps<typeof Card>[];
};
export const BlogPreview = ({ posts }: Props) => (
  <section className="max-w-screen-lg">
    <Link href="/blogi">
      <h2 className="font-primary text-3xl font-medium text-black mb-6 hover:underline decoration-3">
        Artikkelit
      </h2>
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
    <Link
      href="/blog"
      className="flex justify-center mt-4 p-4 border-gray-800 border-3 font-primary text-xl text-gray-800 font-semibold hover:bg-gray-800 hover:text-white"
    >
      Katso kaikki artikkelit
    </Link>
  </section>
);
