import { getAllPosts, getPostBySlug } from "@/features/posts/md-utils/api";
import PostBody from "@/features/posts/components/PostBody/PostBody";
import markdownToHtml from "@/features/posts/md-utils/markdownToHtml";
import Image from "next/image";

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
  ]);

  const contentHtml = await markdownToHtml(post.content || "");

  return (
    <>
      <Image
        src={post.coverImage}
        alt={post.title}
        width={1000}
        height={1000}
        className="object-cover mb-5 w-full h-80"
      />
      <PostBody content={contentHtml} />
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
