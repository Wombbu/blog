import { getAllPosts } from "@/features/posts/utils/md-utils/api";
import { PostGrid } from "@/features/posts/components/PostGrid/PostGrid";
import { routes } from "@/essentials/utils/routes";
import { Metadata } from "next";

export default async function Posts() {
  const allPosts = await getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "readingTime",
    "tags",
    "audio",
  ]);

  return (
    <>
      <PostGrid
        posts={allPosts.map((it) => ({
          date: it.date,
          imageSrc: it.coverImage.url,
          title: it.title,
          readingTime: it.readingTime,
          slug: it.slug,
          tags: it.tags,
          excerpt: it.excerpt,
          audio: it.audio,
          href: routes.post(it.slug),
        }))}
      />
    </>
  );
}

export const metadata: Metadata = {
  title: "Lauri Nevanperä",
  description:
    "Asiaa kaupunkisuunnittelusta, paikallistaloudesta ja asumisesta.",
  openGraph: {
    locale: "fi_FI",
    type: "website",
    url: "https://www.laurinevanpera.fi/",
    title: "Lauri Nevanperä",
    description:
      "Asiaa kaupunkisuunnittelusta, paikallistaloudesta ja asumisesta.",
    images: [
      {
        url: "https://www.laurinevanpera.fi/api/og?imgPath=/assets/blog/elinvoimaa-kytt%C3%A4l%C3%A4%C3%A4n/kokkola1.jpg&title=Asiaa%20kaupungeista",
        width: 1200,
        height: 630,
        alt: "Lauri Nevanperä",
      },
    ],
  },
};
