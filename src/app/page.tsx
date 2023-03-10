import { getAllPosts } from "@/features/posts/utils/md-utils/api";
import { PostGrid } from "@/features/posts/components/PostGrid/PostGrid";
import { Hero } from "@/features/front-page/Hero/Hero";
import { routes } from "@/essentials/utils/routes";
import { typography } from "@/essentials/theme/typography";
import Link from "next/link";

export default async function Home() {
  const allPosts = await getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "readingTime",
    "tags",
    "excerpt",
    "audio",
  ]);

  return (
    <div>
      <Hero />
      <section>
        <Link href={routes.posts}>
          <h2
            className={`${typography.variants.sectionTitle()} hover:underline decoration-3`}
          >
            Uusimmat artikkelit
          </h2>
        </Link>
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
      </section>
    </div>
  );
}
