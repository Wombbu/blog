import { SubscribePlaceholder } from "@/model/subscribers/components/SubscribeEmbed/SubscribeEmbed.placeholder.view";
import dynamic from "next/dynamic";
import { Element } from "react-markdown/lib";

// https://beta.nextjs.org/docs/rendering/static-and-dynamic-rendering
const LazySubscribe = dynamic(
  () =>
    import(
      "../../../../subscribers/components/SubscribeEmbed/SubscribeEmbed.controller"
    ),
  {
    loading: () => <div style={{ height: "183px" }} />,
    ssr: false,
  }
);

/**
 * Newsletter CTA
 *
 * Usage in MD: <subscribe></subscribe>
 */
type Props = {};

export const subscribe = {
  isVisible: (firstElement: Element | undefined) =>
    firstElement?.tagName === "subscribe",
  render: (firstElement: Element | undefined) => {
    const props = firstElement?.properties as Props;

    return <LazySubscribe wrapperClassName="my-4" />;
  },
};
