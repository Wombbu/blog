import { getAllPosts } from "@/model/posts/utils/getAllPosts";
import { Metadata } from "next";

export default function Posts() {
  const allPosts = getAllPosts();

  return (
    <>
      <h1
        className={`h-screen flex flex-col justify-center items-center font-primary text-8xl text-primary font-extrabold text-center`}
      >
        Taloudellisesti vahva kaupunki
      </h1>
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
