import { PostMetadata } from "@/features/posts/types/PostMetadata";
import Image from "next/image";

const RECORDING = "recording";

const specialTags = [
  {
    name: "Tampere",
    tag: (
      <>
        <Image
          src="/tampere.svg"
          alt="Tampere"
          width={15}
          height={15}
          className="inline w-auto mr-0.5"
          style={{
            maxHeight: "15px",
          }}
        />{" "}
        Tampere
      </>
    ),
  },
  {
    name: "Helsinki",
    tag: (
      <>
        <Image
          src="/helsinki.svg"
          alt="Helsinki"
          width={15}
          height={15}
          className="inline w-auto mr-0.5"
          style={{
            maxHeight: "15px",
          }}
        />{" "}
        Helsinki
      </>
    ),
  },
  {
    name: "Turku",
    tag: (
      <>
        <Image
          src="/turku.svg"
          alt="Turku"
          width={15}
          height={15}
          className="inline w-auto mr-0.5"
          style={{
            maxHeight: "15px",
          }}
        />{" "}
        Turku
      </>
    ),
  },
  {
    name: "Oulu",
    tag: (
      <>
        <Image
          src="/oulu.svg"
          alt="Oulu"
          width={15}
          height={15}
          className="inline w-auto mr-0.5"
          style={{
            maxHeight: "15px",
          }}
        />{" "}
        Oulu
      </>
    ),
  },
  {
    name: RECORDING,
    tag: "🎧 Kuuntele",
  },
];

export const ImageOverlayTags = ({
  tags,
  hasAudio,
}: {
  tags?: PostMetadata["tags"];
  hasAudio: boolean;
}) => {
  return tags?.length ? (
    <div className="absolute top-2 left-2 flex gap-2 flex-wrap">
      {[...tags.split(" "), ...(hasAudio ? [RECORDING] : [])].map((tag) => (
        <div
          key={tag}
          className="bg-gray-900 p-1 px-2 text-sm font-medium text-gray-100 min-w-0"
        >
          {specialTags.find((specialTag) => specialTag.name === tag)?.tag ||
            tag}
        </div>
      ))}
    </div>
  ) : null;
};
