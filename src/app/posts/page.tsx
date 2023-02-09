import { getAllPosts } from "@/features/posts/utils/md-utils/api";
import { PostGrid } from "@/features/posts/components/PostGrid/PostGrid";
import { FeaturedPost } from "@/features/posts/components/FeaturedPost/FeaturedPost";
import { typography } from "@/essentials/theme/typography";
import { routes } from "@/essentials/utils/routes";
import { VisualPost } from "@/features/posts/components/VisualPost/VisualPost";

type Props = {
  allPosts: { [key: string]: string };
};

export default async function Posts(props: Props) {
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

  const featuredPost = allPosts[0];

  return (
    <>
      <PostGrid
        extraContent={
          featuredPost ? (
            <VisualPost
              href={routes.post(featuredPost.slug)}
              title={featuredPost.title}
              imageSrc={featuredPost.coverImage.url}
              excerpt={featuredPost.excerpt}
              readingTime={featuredPost.readingTime}
              tags={featuredPost.tags}
              audio={featuredPost.audio}
              date={featuredPost.date}
            />
          ) : null
        }
        posts={allPosts
          .filter((it) => it.slug !== featuredPost.slug)
          .map((it) => ({
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
