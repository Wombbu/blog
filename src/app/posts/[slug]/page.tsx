import {
  getAllPosts,
  getPostBySlug,
} from "@/features/posts/utils/md-utils/api";
import PostBody from "@/features/posts/components/PostBody/PostBody";
import markdownToHtml from "@/features/posts/utils/md-utils/markdownToHtml";
import Image from "next/image";
import { typography } from "@/essentials/theme/typography";
import module from "./PostHero.module.css";
import Link from "next/link";
import { button } from "@/essentials/theme/button";
import { formatDateStr } from "@/essentials/utils/formatDateStr";
import { routes } from "@/essentials/utils/routes";
import { palette } from "@/essentials/theme/palette";
import { PostGrid } from "@/features/posts/components/PostGrid/PostGrid";
import { SocialMediaLink } from "@/components/Header/SocialMediaLink";
import { CommentOnTwitter } from "@/components/CommentOnTwitter/CommentOnTwitter";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Post(props: Props) {
  const post = getPostBySlug(props.params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "coverImage",
    "excerpt",
    "readingTime",
    "audio",
    "tags",
    "tweet",
  ]);

  const recommended = getAllPosts([
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

  const contentHtml = await markdownToHtml(post.content || "");

  return (
    <>
      <article className="relative">
        <figure className={module.heroContainer}>
          <div className="relative">
            <Image
              src={post.coverImage.url}
              alt={post.coverImage.desc || "Kansikuva"}
              width={960}
              height={640}
              className={module.heroImage}
              loading="eager"
            />
            <Link
              href={routes.posts}
              className={`${button.variants.smolInverted} ${module.imgOverlayButton} absolute top-2 left-2`}
            >
              Takaisin artikkeleihin
            </Link>
          </div>
          <figcaption
            className={`${typography.variants.caption} mt-1 px-4 md:pl-0`}
          >
            {post.coverImage.desc ? post.coverImage.desc + " " : null}
            {post.coverImage.credit ? (
              <>
                KUVA: {post.coverImage.credit}
                {post.coverImage.license ? (
                  <>
                    {" / "}
                    <a
                      href={post.coverImage.licenseLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {post.coverImage.license}
                    </a>
                  </>
                ) : null}
              </>
            ) : null}
          </figcaption>
        </figure>
        <div className="m-auto max-w-article">
          <h1
            className={`${palette.text.primary} font-primary text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-8 sm:mb-12 sm:mt-12 text-center break-words`}
          >
            {post.title}
          </h1>
          <p
            className={`${palette.text.primary} text-xl md:text-xl font-primary mb-8 sm:mb-12 text-center`}
          >
            {post.excerpt}
          </p>
          {post.audio ? (
            <audio controls preload="none" className="mb-8 sm:mb-12 m-auto">
              <source src={post.audio} type="audio/x-m4a" />
            </audio>
          ) : null}
          <address className="font-bold font-primary text-md not-italic">
            Lauri Nevanper??
          </address>
          <time
            itemProp="datepublished"
            dateTime={post.date}
            className={`${typography.variants.secondaryTitle} mt-12 mb-4`}
          >
            {formatDateStr(post.date)} - {post.readingTime} min kesto
          </time>
        </div>
        <PostBody content={contentHtml} />
        <h1
          className={`${palette.text.primary} font-primary text-3xl font-bold mb-4 text-center mt-6`}
        >
          Kiitos kun luit.
        </h1>
        <div className="flex justify-center mb-6 mt-6">
          <SocialMediaLink
            href={`https://twitter.com/intent/tweet?text=https://www.laurinevanpera.fi${routes.post(
              props.params.slug
            )}`}
            target="_blank"
            src="/twitter-logo-blue.svg"
            alt="Jaa Twitteriss??"
          />
          <SocialMediaLink
            href={`https://www.facebook.com/sharer/sharer.php?u=https://www.laurinevanpera.fi${routes.post(
              props.params.slug
            )}`}
            target="_blank"
            src="/fb-logo.svg"
            alt="Jaa Facebookissa"
            className="ml-4"
          />
        </div>
        {post.tweet ? <CommentOnTwitter tweetUrl={post.tweet} /> : null}
      </article>
      <section className="mt-12">
        <h2 className={`${typography.variants.sectionTitle()}`}>
          Sinua saattaa kiinnostaa
        </h2>
        <PostGrid
          disableLargeFirstPost
          posts={recommended
            .filter((it) => it.slug !== post.slug)
            .slice(0, 3)
            .map((post) => ({
              title: post.title,
              date: post.date,
              imageSrc: post.coverImage.url,
              readingTime: post.readingTime,
              slug: post.slug,
              excerpt: post.excerpt,
              audio: post.audio,
              tags: post.tags,
              href: routes.post(post.slug),
            }))}
        />
        <Link
          href={routes.posts}
          className={`${button.variants.large} flex-1 col-start-1 col-end-3 mt-8`}
        >
          Katso kaikki artikkelit
        </Link>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts(["slug"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
