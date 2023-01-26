import { getAllPosts, getPostBySlug } from "@/features/posts/md-utils/api";
import PostBody from "@/features/posts/components/PostBody/PostBody";
import markdownToHtml from "@/features/posts/md-utils/markdownToHtml";
import Image from "next/image";
import { typography } from "@/essentials/theme/typography";
import module from "./PostHero.module.css";
import Link from "next/link";
import { button } from "@/essentials/theme/button";

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
    <>
      <div className={module.heroContainer}>
        <Image
          src={post.coverImage}
          alt={post.title}
          width={1000}
          height={1000}
          className={module.heroImage}
        />
        <Link
          href="/blog"
          className={`${button.variants.smolInverted} absolute top-4 left-4`}
        >
          Takaisin artikkeleihin
        </Link>
      </div>
      <h5
        className={`${typography.palette.secondary} font-primary text-xl mt-12 mb-1`}
      >
        {new Date(post.date).toLocaleDateString("FI-fi", {})} -{" "}
        {post.readingTime} min lukuaika
      </h5>
      <h1
        className={`${typography.palette.primary} font-primary text-3xl font-bold mb-12`}
      >
        {post.title}
      </h1>
      <p
        className={`${typography.palette.primary} text-2xl font-secondary italic mb-12`}
      >
        {post.excerpt}
      </p>

      <PostBody content={contentHtml} />
      <Link href="/blog" className={`${button.variants.large} w-full`}>
        Takaisin artikkeleihin
      </Link>
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
