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

type Props = {
  params: {
    slug: string;
    searchParams: any;
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

  const contentHtml = await markdownToHtml(post.content || "");

  return (
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
      <h5
        className={`${palette.text.secondary} font-primary text-xl mt-12 mb-1`}
      >
        {formatDateStr(post.date)} - {post.readingTime} min lukuaika
      </h5>
      <h1
        className={`${palette.text.primary} font-primary text-3xl font-bold mb-12`}
      >
        {post.title}
      </h1>
      <p
        className={`${palette.text.primary} text-2xl font-secondary italic mb-12`}
      >
        {post.excerpt}
      </p>

      <PostBody content={contentHtml} />
      <Link href={routes.posts} className={`${button.variants.large} w-full`}>
        Takaisin artikkeleihin
      </Link>
    </article>
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
