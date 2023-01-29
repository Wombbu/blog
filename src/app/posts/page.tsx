import { getAllPosts } from "@/features/posts/utils/md-utils/api";
import { PostGrid } from "@/features/posts/components/PostGrid/PostGrid";
import { Hero } from "@/features/front-page/Hero/Hero";
import { FeaturedPost } from "@/features/posts/components/FeaturedPost/FeaturedPost";
import { typography } from "@/essentials/theme/typography";

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

  const featuredPost = allPosts[3];

  return (
    <>
      <h1
        className={`${typography.variants.pageTitle} text-center mb-10 mt-10`}
      >
        Artikkelit
      </h1>
      <PostGrid
        extraContent={
          <FeaturedPost
            title={featuredPost.title}
            coverImage={featuredPost.coverImage}
            slug={featuredPost.slug}
            excerpt={featuredPost.excerpt}
            readingTime={featuredPost.readingTime}
            tags={featuredPost.tags}
          />
        }
        posts={allPosts.map((it) => ({
          date: it.date,
          coverImage: it.coverImage,
          title: it.title,
          readingTime: it.readingTime,
          slug: it.slug,
          tags: it.tags,
          excerpt: it.excerpt,
          audio: it.audio,
        }))}
      />
    </>
  );
}
