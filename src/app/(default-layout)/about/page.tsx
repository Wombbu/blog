import { getAllPosts } from "@/model/posts/utils/getAllPosts";
import { PostGrid } from "@/model/posts/components/PostGrid/PostGrid";
import { routes } from "@/essentials/utils/routes";
import { Metadata } from "next";
import { typography } from "@/essentials/theme/typography";
import classNames from "classnames";
import Image from "next/image";
import profileImg from "../../../../public/profiili.jpg";
import { palette } from "@/essentials/theme/palette";

export default function Posts() {
  const allPosts = getAllPosts();

  return (
    <>
      <div
        className={classNames("grid", "grid-cols-1 sm:grid-cols-2", "gap-4")}
      >
        <div
          className={classNames("flex", "justify-center", "flex-col", "gap-2")}
        >
          <h2
            className={classNames(
              typography.variants.sectionTitle({ noGutter: true })
            )}
          >
            Moro taas
          </h2>
          <p
            className={classNames(
              typography.variants.textBody,
              palette.text.secondary
            )}
          ></p>
        </div>
        <Image src={profileImg} alt="Profiilikuva" />
      </div>
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
        withButton
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
