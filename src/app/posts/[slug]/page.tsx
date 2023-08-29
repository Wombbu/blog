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
import { Metadata } from "next";
import dynamic from "next/dynamic";

// Do not server side render clap button to be able to use static rendering on this route
// https://beta.nextjs.org/docs/rendering/static-and-dynamic-rendering
const LazyClapButton = dynamic(
  () => import("../../../components/ClapButton/ClapButton.controller"),
  {
    loading: () => null,
    ssr: false,
  }
);

// https://beta.nextjs.org/docs/rendering/static-and-dynamic-rendering
const LazySocialMediaShare = dynamic(() => import("./SocialMediaShare"), {
  loading: () => null,
  ssr: false,
});

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
          <div className={`m-auto w-full ${module.imageWrapper}`}>
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
                className={`${button.variants.smolInverted} absolute top-2 left-2`}
              >
                Takaisin artikkeleihin
              </Link>
            </div>
            <figcaption
              className={`${typography.variants.caption} ${module.heroCaption} mt-1`}
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
          </div>
        </figure>
        <div className="m-auto max-w-article">
          <h1
            className={`${palette.text.primary} font-primary text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-8 sm:mb-8 sm:mt-12 text-center break-words`}
          >
            {post.title}
          </h1>
          <p
            className={`${typography.variants.subtitle} mb-8 sm:mb-12 text-center font-light`}
          >
            {post.excerpt}
          </p>
          {post.audio ? (
            <audio controls preload="none" className="mb-8 sm:mb-12 m-auto">
              <source src={post.audio} type="audio/x-m4a" />
            </audio>
          ) : null}
          <div className="flex gap-3  mb-6">
            <a href="https://twitter.com/LauriNevanpera" target="_blank">
              <Image
                src="/profiili.jpg"
                width={66}
                height={66}
                alt="Lauri Nevanperä"
                className="height-auto rounded-full"
              />
            </a>
            <div className="self-center">
              <address className="font-bold font-primary text-md not-italic">
                Lauri Nevanperä
                <span className={`${palette.text.secondary} font-normal`}>
                  {" | "}Tampere
                </span>
              </address>
              <time
                itemProp="datepublished"
                dateTime={post.date}
                className={`${typography.variants.secondaryTitle}`}
              >
                {formatDateStr(post.date)} | {post.readingTime} min lukuaika
              </time>
            </div>
          </div>
        </div>
        <PostBody content={contentHtml} />
      </article>

      {/* <div className="flex flex-col gap-4 justify-center my-4 flex-wrap max-w-article mx-auto bg-black p-4">
        <h3
          className={`${typography.variants.sectionTitle}`}
          style={{ color: "white" }}
        >
          Kiinnostuitko?
        </h3>
        <div className="flex gap-2 p-2 items-stretch border-2 border-black bg-white">
          <input
            type="email"
            placeholder="sinun@sahkopostisi.com"
            className="flex-1 px-2"
          />

          <button className={`${button.variants.smolInverted}`}>
            Tilaa artikkelit
          </button>
        </div>
        <div
          className={`${typography.variants.caption} text-center`}
          style={{ color: "white" }}
        >
          Tieto uusista artikkeleista muutaman viikon välein. Ei spämmiä, ei
          turhuuksia. Lopeta tilaus koska vain.
        </div>
      </div> */}

      <div className="flex flex-col gap-4 justify-center flex-wrap max-w-article mx-auto mb-4 mt-10">
        <div>
          <h1 className={`${typography.variants.sectionTitle}`}>
            Kiitos kun luit.
          </h1>
          <h2
            className={`${typography.variants.textBody} ${palette.text.secondary}`}
          >
            Jaa jos pidit. Keskustelu jatkuu.
          </h2>
        </div>
        <LazySocialMediaShare post={post} slug={props.params.slug} />
      </div>
      <div
        className="fixed bottom-4 z-50"
        style={{ left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <LazyClapButton slug={props.params.slug} />
      </div>
      <section className="mt-10">
        <h2 className={`${typography.variants.sectionTitle()}`}>
          Lisää samankaltaista
        </h2>
        <PostGrid
          disableLargeFirstPost
          posts={recommended
            .filter((it) => it.slug !== post.slug)
            .slice(0, 20)
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
          className={`${button.variants.large} flex-1 col-start-1 col-end-3 mt-4 sm:mt-2`}
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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "author",
    "content",
    "coverImage",
    "excerpt",
    "readingTime",
    "audio",
    "tags",
    "coverImage",
    "ogImageType",
  ]);
  const ogImageUrl = `https://www.laurinevanpera.fi/api/og?imgPath=${
    post.coverImage.url
  }&readingTime=${post.readingTime}&title=${
    post.ogImageType === "ONLY_NAME" ? "" : post.title
  }`;

  return {
    title: `${post.title} - Lauri Nevanperä`,
    description: post.excerpt,
    twitter: {
      card: "summary_large_image",
      site: "@LauriNevanpera",
      creator: "@LauriNevanpera",
      title: post.title,
      description: post.excerpt,
      images: {
        url: ogImageUrl,
        width: 1200,
        height: 627,
        alt: post.coverImage.desc,
      },
    },
    openGraph: {
      url: `https://www.laurinevanpera.fi/posts/${params.slug}`,
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 627,
          alt: post.coverImage.desc,
        },
      ],
      type: "article",
      locale: "fi_FI",
      publishedTime: post.date,
      authors: ["Lauri Nevanperä"],
      tags: post.tags.split(", ").map((tag) => tag.trim()),
    },
    viewport: "width=device-width, initial-scale=1",
  };
}
