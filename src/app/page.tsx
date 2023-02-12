import { getAllPosts } from "@/features/posts/utils/md-utils/api";
import { PostGrid } from "@/features/posts/components/PostGrid/PostGrid";
import { Hero } from "@/features/front-page/Hero/Hero";
import Link from "next/link";
import { button } from "@/essentials/theme/button";
import { routes } from "@/essentials/utils/routes";
import { typography } from "@/essentials/theme/typography";

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
            className={`${typography.variants.sectionTitle()}  hover:underline decoration-3`}
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
        <Link
          href={routes.posts}
          className={`${button.variants.large} w-full mt-8`}
        >
          Katso kaikki artikkelit
        </Link>
      </section>
    </div>
  );
}
