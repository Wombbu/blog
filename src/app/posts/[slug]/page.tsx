import { getAllPosts, getPostBySlug } from "@/model/posts/utils/md-utils/api";
import PostBody from "@/model/posts/components/PostBody/PostBody";
import markdownToHtml from "@/model/posts/utils/md-utils/markdownToHtml";
import { typography } from "@/essentials/theme/typography";
import { routes } from "@/essentials/utils/routes";
import { palette } from "@/essentials/theme/palette";
import { PostGrid } from "@/model/posts/components/PostGrid/PostGrid";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Writer } from "@/app/posts/[slug]/Writer";
import { PostHero } from "@/app/posts/[slug]/PostHero";

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
const LazySocialMediaShare = dynamic(
  () =>
    import(
      "../../../features/social-media-sharing/components/SocialMediaSharePost"
    ),
  {
    loading: () => null,
    ssr: false,
  }
);

// https://beta.nextjs.org/docs/rendering/static-and-dynamic-rendering
const LazySocialMediaShareButtons = dynamic(
  () =>
    import(
      "../../../features/social-media-sharing/components/SocialMediaShareButtons"
    ),
  {
    loading: () => null,
    ssr: false,
  }
);

// https://beta.nextjs.org/docs/rendering/static-and-dynamic-rendering
const LazyShareViaModal = dynamic(
  () =>
    import("../../../features/social-media-sharing/components/ShareViaModal"),
  {
    loading: () => null,
    ssr: false,
  }
);

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
        <div
          className="fixed bottom-4 z-30"
          style={{ left: "50%", transform: "translate(-50%, -50%)" }}
        >
          <LazyClapButton slug={props.params.slug} />
        </div>
        <PostHero post={post} />
        <div className="m-auto max-w-article">
          <h1
            className={`${palette.text.primary} font-primary text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-6 sm:mb-8 sm:mt-12 text-center break-words`}
          >
            {post.title}
          </h1>
          {post.excerpt ? (
            <p
              className={`${typography.variants.subtitle} mb-6 text-center font-light`}
            >
              {post.excerpt}
            </p>
          ) : null}
          <div className="flex justify-center mb-6">
            <LazyShareViaModal slug={post.slug} title={post.title} />
          </div>

          {post.audio ? (
            <audio controls preload="none" className="mb-8 sm:mb-12 m-auto">
              <source src={post.audio} type="audio/x-m4a" />
            </audio>
          ) : null}
          <Writer post={post} />
          {/* <div className="flex gap-2 items-center mb-4 p-4 bg-gray-200 self-center">
            <div className="flex items-center gap-2 flex-wrap">
              <IconShareAndroid />
            </div>
          </div> */}
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
      <div
        className={`relative w-screen bg-gray-100 py-6 sm:py-10`}
        style={{ left: "calc(-50vw + 50%)" }}
      >
        <div className="flex flex-col items-stretch gap-6 max-w-article px-4 sm:px-0 m-auto">
          <div>
            <h1 className={`${typography.variants.sectionTitle}`}>
              Kiitos kun luit.
            </h1>
            <h2
              className={`${typography.variants.textBody} ${palette.text.secondary}`}
            >
              Jaa jos pidit. Pidä aihe keskustelussa.
            </h2>
          </div>
          <LazySocialMediaShare post={post} />
        </div>
      </div>
      <section className="mt-6 sm:mt-10">
        <h2 className={`${typography.variants.sectionTitle()}`}>Lue lisää</h2>
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
        {/* <Link
          href={routes.posts}
          className={`${button.variants.large} flex-1 col-start-1 col-end-3 mt-4 sm:mt-2`}
        >
          Katso kaikki artikkelit
        </Link> */}
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
