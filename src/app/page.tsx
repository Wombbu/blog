import { getAllPosts } from "@/model/posts/utils/md-utils/api";
import { PostGrid } from "@/model/posts/components/PostGrid/PostGrid";
import { Hero } from "@/components/Hero/Hero";
import { routes } from "@/essentials/utils/routes";
import { typography } from "@/essentials/theme/typography";
import Link from "next/link";
import { Tweet } from "react-tweet";
import styles from "./styles.module.css";
import { button } from "@/essentials/theme/button";

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
            Uusimmat artikkelit
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
          }))}
          withButton
        />
        {/*
        Todo create a FullScreenGray layout object
        <div
          className={`relative w-screen bg-gray-100 py-6 sm:py-6 mt-6`}
          style={{ left: "calc(-50vw + 50%)" }}
          data-theme="light"
        >
          <div className="flex flex-col items-stretch max-w-screen-lg px-4 sm:px-0 m-auto"> */}
        <h2 className={`${typography.variants.sectionTitle({})} mt-6`}>
          Twitter
        </h2>
        {/* This should be a module */}
        <div
          // react-tweet theme
          data-theme="light"
          className={`grid grid-cols-1 sm:grid-cols-2 gap-2 ${styles.tweetWrapper}`}
        >
          <Tweet id="1539932433289805825" />
          <Tweet id="1577931674649870343" />
          <a
            href="https://twitter.com/LauriNevanpera"
            className={`${button.variants.large} flex-1 sm:col-start-1 sm:col-end-3 border-r-4`}
          >
            Avaa Twitter
          </a>
        </div>
        {/* </div>
        </div> */}
      </section>
    </div>
  );
}
