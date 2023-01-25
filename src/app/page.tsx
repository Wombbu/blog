import { getAllPosts } from "@/features/posts/md-utils/api";
import { BlogPreview } from "@/features/front-page/BlogPreview/BlogPreview";
import { Hero } from "@/features/front-page/Hero/Hero";

type Props = {
  allPosts: { [key: string]: string };
};

export default async function Home(props: Props) {
  const allPosts = await getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "readingTime",
  ]);

  return (
    <div>
      <Hero />
      <BlogPreview
        posts={allPosts.map((it) => {
          return {
            date: it.date,
            coverImage: it.coverImage,
            title: it.title,
            readingTime: it.readingTime,
            slug: it.slug,
          };
        })}
      />
    </div>
  );
}
