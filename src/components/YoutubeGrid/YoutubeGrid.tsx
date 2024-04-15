import { YoutubeEmbed } from "@/components/YoutubeEmbed/YoutubeEmbed";
import { button } from "@/essentials/theme/button";

type Props = {
  youtubeVideos: {
    id: string;
    title: string;
  }[];
};

export const YoutubeGrid = ({ youtubeVideos }: Props) => {
  return (
    <div className={`grid grid-cols-1 gap-4`}>
      {youtubeVideos.map((video) => (
        <YoutubeEmbed videoId={video.id} key={video.id} />
      ))}
      <a
        href="https://www.youtube.com/channel/UCW42r9LEBQpVcLz5HzApdpw"
        className={`${button.variants.large} flex-1`}
      >
        Avaa Youtube
      </a>
    </div>
  );
};
