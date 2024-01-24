import { getAllPosts } from "@/model/posts/utils/getAllPosts";
import { Metadata } from "next";

export default function Posts() {
  const allPosts = getAllPosts();

  return (
    <>
      <div className={`h-screen flex flex-col justify-center items-center`}>
        <p className="font-primary text-5xl text-primary font-bold text-center mb-5">
          Lauri Nevanperä
        </p>
        <h1 className="font-primary text-8xl text-primary font-extrabold text-center">
          Taloudellisesti vahva kaupunki
        </h1>
      </div>
      <div className="h-96 bg-gradient-to-t from-softTown to-strongTown flex flex-col items-center justify-center"></div>
      <div className="h-screen bg-softTown flex flex-col items-center justify-center">
        <h2 className="font-secondary font-extrabold text-center text-8xl text-primary ">
          Tiesitkö että{" "}
          <a className="font-primary text-strongTown" href="/pehmea">
            taloudellisesti vahva{" "}
          </a>
          kaupunki voi olla myös asukkaalle pehmeä?
        </h2>
      </div>
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
