import { YoutubeEmbed } from "@/components/YoutubeEmbed/YoutubeEmbed";
import { button } from "@/essentials/theme/button";
import { Tweet } from "react-tweet";

type Props = {
  youtubeVideos: {
    id: string;
    title: string;
  }[];
};

export const YoutubeGrid = ({ youtubeVideos }: Props) => {
  return (
    <div className={`grid grid-cols-1 gap-2`}>
      {youtubeVideos.map((video) => (
        <YoutubeEmbed {...video} key={video.id} />
      ))}
      <a
        href="https://www.youtube.com/channel/UCW42r9LEBQpVcLz5HzApdpw"
        className={`${button.variants.large} flex-1 sm:col-start-1 sm:col-end-3 border-r-4 mt-2 sm:mt-0`}
      >
        Avaa Youtube
      </a>
    </div>
  );
};
