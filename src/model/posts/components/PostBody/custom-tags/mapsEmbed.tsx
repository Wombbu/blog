import dynamic from "next/dynamic";
import { Element } from "react-markdown/lib";
import { t } from "vitest/dist/reporters-P7C2ytIv";

// https://beta.nextjs.org/docs/rendering/static-and-dynamic-rendering
const LazyMapsEmbed = dynamic(
  () => import("../../../../../components/MapsEmbed/MapsEmbed.view"),
  {
    loading: () => null,
    ssr: false,
  }
);

/**
 * Mock tweet with text animation
 *
 * Usage in MD:
 *
 * - Street view: <maps-embed mapMode="streetview" fov="90" location="13.0827, 80.2707" heading="90" pitch="0"></maps-embed>
 * - Place: <maps-embed mapMode="place" q="Ritakatu 11"></maps-embed>
 * - Directions: <maps-embed mapMode="directions" origin="Tampere" destination="Helsinki" mode="bicycling"></maps-embed>
 * - Search: <maps-embed mapMode="search" q="Restaurants in Tampere"></maps-embed>
 * - View: <maps-embed mapMode="view" center="61.4984, 23.7609" maptype="satellite" zoom="18"></maps-embed>
 */
type Props = React.ComponentProps<typeof LazyMapsEmbed>;

export const mapsEmbed = {
  isVisible: (firstElement: Element | undefined) =>
    firstElement?.tagName === "maps-embed",
  render: (firstElement: Element | undefined) => {
    // @ts-ignore
    const { caption, ...props } = firstElement?.properties as Props & {
      caption?: string;
    };

    return (
      <figure>
        <LazyMapsEmbed
          {...props}
          iframeProps={{ className: "max-w-article" }}
        />
        {caption ? <figcaption>{caption}</figcaption> : null}
      </figure>
    );
  },
};
