import { PostMetadata } from "@/features/posts/types/PostMetadata";

const RECORDING = "recording";

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
          className="bg-gray-900 p-1 text-sm font-medium text-gray-100 min-w-0"
        >
          {tag === RECORDING ? "🎧 Kuuntele" : tag}
        </div>
      ))}
    </div>
  ) : null;
};
