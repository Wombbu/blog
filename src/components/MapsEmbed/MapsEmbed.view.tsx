import { createMapsUrl } from "@/components/MapsEmbed/createMapsUrl";

type Props = { iframeProps?: React.ComponentProps<"iframe"> } & Parameters<
  typeof createMapsUrl
>[0];

export default function MapsEmbed({ iframeProps, ...mapsOptions }: Props) {
  return (
    <iframe
      loading="lazy"
      src={createMapsUrl(mapsOptions)}
      title="Street view"
      {...iframeProps}
      className={`border-none aspect-goldenRatioInverse sm:aspect-goldenRatio w-full ${
        iframeProps?.className || ""
      }`}
    />
  );
}
