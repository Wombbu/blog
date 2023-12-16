import { getAllPosts } from "@/model/posts/utils/md-utils/api";
import { PostGrid } from "@/model/posts/components/PostGrid/PostGrid";
import { Hero } from "@/components/Hero/Hero";
import { routes } from "@/essentials/utils/routes";
import { typography } from "@/essentials/theme/typography";
import Link from "next/link";
import { YoutubeGrid } from "@/components/YoutubeGrid/YoutubeGrid";
import { TwitterGrid } from "@/components/TwitterGrid/TwitterGrid";

export default async function Home() {
  const allPosts = await getAllPosts();

  return (
    <div>
      <Hero />
      <section>
        <Link href={routes.posts}>
          <h2
            className={`${typography.variants.sectionTitle()} hover:underline decoration-3`}
          >
            Uudet artikkelit
          </h2>
        </Link>
        <PostGrid
          posts={allPosts.slice(0, 3).map((it) => ({
            date: it.date,
            imageSrc: it.coverImage.url,
            title: it.title,
            readingTime: it.readingTime,
            slug: it.slug,
            tags: it.tags,
            excerpt: it.excerpt,
            audio: it.audio,
            href: routes.post(it.slug),
            blurDataURL: it.coverImage.blurDataURL,
            isDraft: it.isDraft,
          }))}
          withButton
        />
        <h2 className={`${typography.variants.sectionTitle({})} mt-6`}>
          Twitter
        </h2>
        <TwitterGrid
          tweetIds={["1539932433289805825", "1577931674649870343"]}
        />
        <h2 className={`${typography.variants.sectionTitle({})} mt-6`}>
          Youtube
        </h2>
        <YoutubeGrid
          youtubeVideos={[
            {
              id: "jaHvLNhJtjY",
              title:
                "Hervanta, Kontula… Miksi Suomen kaupungit hajautettiin 60-luvulla ja mitä seurauksia tästä oli?",
            },
          ]}
        />
      </section>
    </div>
  );
}
