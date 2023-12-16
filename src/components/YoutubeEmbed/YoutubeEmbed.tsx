"use client";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export const YoutubeEmbed = (
  props: React.ComponentProps<typeof LiteYouTubeEmbed>
) => {
  return <LiteYouTubeEmbed {...props} noCookie={true} poster="maxresdefault" />;
};
