import { getAllPosts } from "@/model/posts/utils/getAllPosts";
import { PostGrid } from "@/model/posts/components/PostGrid/PostGrid";
import { Hero } from "@/components/Hero/Hero";
import { routes } from "@/essentials/utils/routes";
import { typography } from "@/essentials/theme/typography";
import Link from "next/link";
import { YoutubeGrid } from "@/components/YoutubeGrid/YoutubeGrid";
import { TwitterGrid } from "@/components/TwitterGrid/TwitterGrid";

export default function Home() {
  const allPosts = getAllPosts();

  return (
    <div>
      <Hero />
      <section>
        <Link href={routes.posts}>
          <h2
            className={`${typography.variants.sectionTitle()} hover:underline decoration-3`}
          >
            Lue artikkeli
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
            blurDataURL: it.coverImage.blurDataURL,
            isDraft: it.isDraft,
          }))}
          withButton
        />
        <h2 className={`${typography.variants.sectionTitle({})} mt-12`}>
          Seuraa Twitterissä
        </h2>
        <TwitterGrid
          tweetIds={["1539932433289805825", "1577931674649870343"]}
        />
        <h2 className={`${typography.variants.sectionTitle({})} mt-12`}>
          Katso Youtubessa
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
