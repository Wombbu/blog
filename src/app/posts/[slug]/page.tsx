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
    "ogImage",
    "coverImage",
    "excerpt",
    "readingTime",
  ]);

  const recommended = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "readingTime",
  ]);

  const contentHtml = await markdownToHtml(post.content || "");

  return (
    <>
      <article>
        <h1
          className={`${typography.variants.pageTitle} text-center mb-10 mt-10`}
        >
          Artikkeli
        </h1>
        <div className={module.heroContainer}>
          <Image
            src={post.coverImage}
            alt={post.title}
            width={1000}
            height={1000}
            className={module.heroImage}
          />
          <Link
            href={routes.posts}
            className={`${button.variants.smolInverted} absolute top-4 left-4`}
          >
            Takaisin artikkeleihin
          </Link>
        </div>
        <h5 className={`${typography.variants.secondaryTitle} mt-12 mb-1`}>
          {formatDateStr(post.date)} - {post.readingTime} min luettava
        </h5>
        <h2
          className={`${palette.text.primary} font-primary text-3xl font-bold mb-12`}
        >
          {post.title}
        </h2>
        <p
          className={`${palette.text.primary} text-2xl font-secondary italic mb-12`}
        >
          {post.excerpt}
        </p>
        <PostBody content={contentHtml} />
      </article>

      <section className="mt-12">
        <h3
          className={`${palette.text.primary} font-primary text-3xl font-bold mb-4 text-center`}
        >
          Kiitos kun luit.
        </h3>
        <div className="flex justify-center mb-12">
          <SocialMediaLink
            href={`https://twitter.com/intent/tweet?text=https://www.laurinevanpera.fi${routes.post(
              props.params.slug
            )}`}
            target="_blank"
            src="/twitter-logo-blue.svg"
            alt="Jaa Twitterissä"
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
        <h2 className={`${typography.variants.sectionTitle()}`}>
          Sinua saattaa kiinnostaa
        </h2>
        <PostGrid
          posts={recommended.slice(3).map((post) => ({
            title: post.title,
            date: post.date,
            coverImage: post.coverImage,
            readingTime: post.readingTime,
            slug: post.slug,
          }))}
        />
        <Link
          href={routes.posts}
          className={`${button.variants.large} flex-1 col-start-1 col-end-3 mt-8`}
        >
          Takaisin artikkeleihin
        </Link>
      </section>
    </>
  );
  //   return (
  //     <Layout preview={preview}>
  //       <Container>
  //         <Header />
  //         {router.isFallback ? (
  //           <PostTitle>Loading…</PostTitle>
  //         ) : (
  //           <>
  //             <article className="mb-32">
  //               <Head>
  //                 <title>
  //                   {post.title} | Next.js Blog Example with {CMS_NAME}
  //                 </title>
  //                 <meta property="og:image" content={post.ogImage.url} />
  //               </Head>
  //               <PostHeader
  //                 title={post.title}
  //                 coverImage={post.coverImage}
  //                 date={post.date}
  //                 author={post.author}
  //               />
  //               <PostBody content={post.content} />
  //             </article>
  //           </>
  //         )}
  //       </Container>
  //     </Layout>
  //   )
}

export async function generateStaticParams() {
  const posts = await getAllPosts(["slug"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
