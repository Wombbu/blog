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
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import Link from "next/link";
import { button } from "@/essentials/theme/button";

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
    import(
      "../../../features/social-media-sharing/components/ShareViaModal.controller"
    ),
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
  const post = await getPostBySlug(props.params.slug);

  const recommended = await getAllPosts();

  const contentHtml = markdownToHtml(post.content || "");

  return (
    <>
      <article className="relative">
        {/* <div
          className="fixed bottom-4 z-30"
          style={{ left: "50%", transform: "translate(-50%, -50%)" }}
        >
          <LazyClapButton slug={props.params.slug} />
        </div> */}
        <PostHero post={post} />
        <h1
          className={`${palette.text.primary} font-primary text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-6 sm:mb-8 sm:mt-12 text-center break-words max-w-4xl m-auto`}
        >
          {post.title}
        </h1>
        <div className="m-auto max-w-article">
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
        </div>
        <PostBody content={contentHtml} />
      </article>

      <div
        className={`relative w-screen bg-gray-100 py-6 sm:py-10`}
        style={{ left: "calc(-50vw + 50%)" }}
      >
        <div className="flex flex-col items-stretch gap-6 max-w-article px-4 sm:px-0 m-auto">
          <div>
            <h1
              className={`${typography.variants.sectionTitle({
                noGutter: true,
              })}`}
            >
              Kiitos kun luit.
            </h1>
            <h2
              className={`${typography.variants.textBody} ${palette.text.secondary}`}
            >
              Jaa jos pidit. Pidä aihe keskustelussa.
            </h2>
          </div>
          <LazySocialMediaShare post={post} />
          <div>
            <h1
              className={`${typography.variants.sectionTitle({
                noGutter: true,
              })}`}
            >
              Seuraa somessa
            </h1>
            <h2
              className={`${typography.variants.textBody} ${palette.text.secondary}`}
            >
              Kerron uusista artikkeleista Twitterissä ja Instagramissa
            </h2>
          </div>
          <SocialMediaLinks />
        </div>
      </div>
      <section className="mt-6 sm:mt-10">
        <h2 className={`${typography.variants.sectionTitle()}`}>
          Uusimmat artikkelit
        </h2>
        <PostGrid
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
              blurDataURL: post.coverImage.blurDataURL,
            }))}
          withButton
        />
      </section>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
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
