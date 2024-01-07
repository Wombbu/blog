import { getAllPosts } from "@/model/posts/utils/getAllPosts";
import PostBody from "@/model/posts/components/PostBody/PostBody";
import markdownToHtml from "@/model/posts/utils/markdownToHtml";
import { typography } from "@/essentials/theme/typography";
import { routes } from "@/essentials/utils/routes";
import { palette } from "@/essentials/theme/palette";
import { PostGrid } from "@/model/posts/components/PostGrid/PostGrid";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Author } from "@/app/posts/[slug]/Author";
import { PostHero } from "@/app/posts/[slug]/PostHero";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import { TwitterGrid } from "@/components/TwitterGrid/TwitterGrid";
import { YoutubeGrid } from "@/components/YoutubeGrid/YoutubeGrid";
import { buildOgImageUrl } from "@/model/og-image/buildOgImageUrl";
import { getPostBySlug } from "@/model/posts/utils/getPostBySlug";
import { Post } from "@/model/posts/types/Post";

// Do not server side render clap button to be able to use static rendering on this route
// https://beta.nextjs.org/docs/rendering/static-and-dynamic-rendering
// const LazyClapButton = dynamic(
//   () => import("../../../components/ClapButton/ClapButton.controller"),
//   {
//     loading: () => null,
//     ssr: false,
//   }
// );

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

// https://beta.nextjs.org/docs/rendering/static-and-dynamic-rendering
const LazySocialMediaSharePost = dynamic(
  () =>
    import(
      "../../../features/social-media-sharing/components/SocialMediaSharePost"
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
  const post = getPostBySlug(props.params.slug);

  const recommended = getAllPosts();

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
          <Author post={post} />
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
              })} mb-1`}
            >
              Kiitos kun luit.
            </h1>
            <h2
              className={`${typography.variants.textBody} ${palette.text.secondary}`}
            >
              Jaa jos pidit. Pidä aihe keskustelussa.
            </h2>
          </div>
          <LazySocialMediaSharePost post={post} />
          <div>
            <h1
              className={`${typography.variants.sectionTitle({
                noGutter: true,
              })}  mb-1`}
            >
              Kiinnostuitko?
            </h1>
            <h2
              className={`${typography.variants.textBody} ${palette.text.secondary}`}
            >
              Kerron uusista artikkeleista Twitterissä, Threadsissa ja
              Instagramissa.
            </h2>
          </div>
          <SocialMediaLinks />
        </div>
      </div>
      <section className="mt-12">
        <h2 className={`${typography.variants.sectionTitle()}`}>
          Uudet artikkelit
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
              isDraft: post.isDraft,
            }))}
          withButton
        />
        <h2 className={`${typography.variants.sectionTitle({})} mt-12`}>
          Twitter
        </h2>
        <TwitterGrid
          tweetIds={["1539932433289805825", "1577931674649870343"]}
        />
        <h2 className={`${typography.variants.sectionTitle({})} mt-12`}>
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
  const ogImageUrl = buildOgImageUrl({
    imageUrl: post.coverImage.url,
    title: post.title,
    readingTime: post.readingTime,
  });

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
