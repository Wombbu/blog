import { getPostBySlug } from "@/features/posts/utils/md-utils/api";

export default function Head(props: { params: { slug: string } }) {
  const params = props.params;
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
  ]);
  return (
    <>
      <title>{`${post.title} - Lauri Nevanperä`}</title>
      <meta name="description" content={post.excerpt} />

      <meta
        property="og:url"
        content={`https://www.laurinevanpera.fi/posts/${params.slug}`}
      />
      <meta name="og:title" content={post.title} />
      <meta name="og:description" content={post.excerpt} />
      <meta
        name="og:image:secure_url"
        content={`https://www.laurinevanpera.fi/api/og?imgPath=${post.coverImage.url}&title=${post.title}`}
      />
      <meta
        name="og:image"
        content={`https://www.laurinevanpera.fi/api/og?imgPath=${post.coverImage.url}&title=${post.title}`}
      />
      {post.coverImage.desc ? (
        <meta property="og:image:alt" content={post.coverImage.desc} />
      ) : null}
      <meta name="og:type" content="article" />
      <meta name="og:locale" content="fi_FI" />
      <meta name="article:published_time" content={post.date} />
      <meta name="article:author" content="Lauri Nevanperä" />
      <meta name="og:site_name" content="Lauri Nevanperä" />
      {post.audio ? (
        <meta
          name="og:audio"
          content={`https://www.laurinevanpera.fi${post.audio}`}
        />
      ) : null}
      <meta name="section" content="Kaupunkisuunnittelu" />
      {post.tags.split(", ").map((tag) => (
        <meta name="article:tag" content={tag} key={tag} />
      ))}

      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:domain" content="laurinevanpera.fi"></meta>
      <meta name="twitter:title" content={post.title}></meta>
      <meta name="twitter:description" content={post.excerpt}></meta>
      <meta
        name="twitter:image"
        content={`https://www.laurinevanpera.fi/api/og?imgPath=${post.coverImage.url}&title=${post.title}`}
      ></meta>
      <meta name="twitter:site" content="@LauriNevanpera"></meta>
      <meta name="twitter:creator" content="@LauriNevanpera"></meta>
      <meta name="twitter:label1" content="Arvioitu lukuaika"></meta>
      <meta
        name="twitter:data1"
        content={`${post.readingTime} minuuttia`}
      ></meta>
    </>
  );
}
