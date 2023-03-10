import { getAllPosts } from "@/features/posts/utils/md-utils/api";
import { PostGrid } from "@/features/posts/components/PostGrid/PostGrid";
import { routes } from "@/essentials/utils/routes";

export default async function Posts() {
  const allPosts = await getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "readingTime",
    "tags",
    "audio",
  ]);

  return (
    <>
      <PostGrid
        posts={allPosts.map((it) => ({
          date: it.date,
          imageSrc: it.coverImage.url,
          title: it.title,
          readingTime: it.readingTime,
          slug: it.slug,
          tags: it.tags,
          excerpt: it.excerpt,
          audio: it.audio,
          href: routes.post(it.slug),
        }))}
      />
    </>
  );
}
