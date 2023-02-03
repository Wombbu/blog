import { PostMetadata } from "@/features/posts/types/PostMetadata";
import Image from "next/image";

export enum CustomTags {
  Tampere = "Tampere",
  Helsinki = "Helsinki",
  Turku = "Turku",
  Oulu = "Oulu",
  Recording = "Recording",
  Video = "Video",
  New = "New",
}

const EmojiTag = ({
  emoji,
  text,
  shadow,
}: {
  emoji: string;
  text: string;
  shadow?: boolean;
}) => (
  <>
    <span
      className="mr-1.5 text-lg flex align-center"
      style={{
        textShadow: shadow ? "0px 0px 5px rgba(255,255,255)" : undefined,
        height: "16px",
        lineHeight: "16px",
        fontSize: "16px",
      }}
    >
      {emoji}
    </span>{" "}
    {text}
  </>
);

const specialTags = [
  {
    name: CustomTags.Tampere,
    tag: (
      <>
        <Image
          src="/tampere.svg"
          alt="Tampere"
          width={15}
          height={15}
          className="inline w-auto mr-1.5"
          style={{
            maxHeight: "15px",
          }}
        />{" "}
        Tampere
      </>
    ),
  },
  {
    name: CustomTags.Helsinki,
    tag: (
      <>
        <Image
          src="/helsinki.svg"
          alt="Helsinki"
          width={15}
          height={15}
          className="inline w-auto mr-1.5"
          style={{
            maxHeight: "15px",
          }}
        />{" "}
        Helsinki
      </>
    ),
  },
  {
    name: CustomTags.Turku,
    tag: (
      <>
        <Image
          src="/turku.svg"
          alt="Turku"
          width={15}
          height={15}
          className="inline w-auto mr-1.5"
          style={{
            maxHeight: "15px",
          }}
        />{" "}
        Turku
      </>
    ),
  },
  {
    name: CustomTags.Oulu,
    tag: (
      <>
        <Image
          src="/oulu.svg"
          alt="Oulu"
          width={15}
          height={15}
          className="inline w-auto mr-1.5"
          style={{
            maxHeight: "15px",
          }}
        />{" "}
        Oulu
      </>
    ),
  },
  {
    name: CustomTags.Recording,
    tag: <EmojiTag emoji="🎧" text="Kuuntele" />,
  },
  {
    name: CustomTags.Video,
    tag: <EmojiTag emoji="📼" text="Video" shadow />,
  },
  {
    name: CustomTags.New,
    tag: <EmojiTag emoji="🎉" text="Uusi" />,
  },
];

type Props = {
  tags?: PostMetadata["tags"];
  hasAudio: boolean;
  isNew: boolean;
};

export const TagList = ({ tags, hasAudio, isNew }: Props) => {
  return tags?.length ? (
    <>
      {[
        ...tags.split(", "),
        ...(hasAudio ? [CustomTags.Recording] : []),
        ...(isNew ? [CustomTags.New] : []),
      ].map((tag) => (
        <div
          key={tag}
          className="bg-gray-900 p-1 px-2 text-sm font-medium text-gray-100 min-w-0 flex items-center"
        >
          {specialTags.find((specialTag) => specialTag.name === tag)?.tag ||
            tag}
        </div>
      ))}
    </>
  ) : null;
};

export const ImageOverlayTags = (props: Props) => {
  return (
    <div className="flex gap-2 flex-wrap absolute top-0 left-0  p-2">
      <TagList {...props} />
    </div>
  );
};
