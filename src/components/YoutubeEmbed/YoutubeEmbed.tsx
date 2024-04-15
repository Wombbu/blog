import { YouTubeEmbed } from "@next/third-parties/google";

type Props = {
  videoId: string;
};

/**
 * Performantly embeds a YouTube video.
 *
 * Convert to next/third-parties
 */
export const YoutubeEmbed = (props: Props) => {
  return (
    <YouTubeEmbed
      videoid={props.videoId}
      params="loop=1&playsinline=1&mute=1&controls=1&showinfo=1&disablekb=1&fs=0&color=white&hl=fi&iv_load_policy=3"
      style="max-width: 100%; height: auto;"
    />
  );
};
