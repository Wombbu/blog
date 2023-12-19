import { getAllPosts } from "@/model/posts/utils/md-utils/api";
import { PostGrid } from "@/model/posts/components/PostGrid/PostGrid";
import { routes } from "@/essentials/utils/routes";
import { Metadata } from "next";
import { typography } from "@/essentials/theme/typography";
import { FullWidthGray } from "@/components/FullWidthGray/FullWidthGray";

export default async function Posts() {
  const allPosts = await getAllPosts();

  return (
    <>
      <h1 className={`${typography.variants.pageTitle} mb-6`}>
        Kaikki artikkelit
      </h1>
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
          blurDataURL: it.coverImage.blurDataURL,

          isDraft: it.isDraft,
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
        height: 627,
        alt: "Lauri Nevanperä",
      },
    ],
  },
};
