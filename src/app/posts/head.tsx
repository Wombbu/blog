import { getPostBySlug } from "@/features/posts/utils/md-utils/api";

export default function Head({ params }: { params: { slug: string } }) {
  return (
    <>
      <title>{`Artikkelit - Lauri Nevanperä`}</title>
      <meta
        name="description"
        content="Kantaaottavaa asiaa kaupunkisuunnittelusta"
      />
      <meta name="og:title" content="Artikkelit - Lauri Nevanperä" />
      <meta
        name="og:description"
        content="Kantaaottavaa asiaa kaupunkisuunnittelusta"
      />
      <meta
        name="og:image"
        content="http://mywebsite.com/default-og-thumbnail.png"
      />
    </>
  );
}
