import dynamic from "next/dynamic";
import { Element } from "react-markdown/lib";

// https://beta.nextjs.org/docs/rendering/static-and-dynamic-rendering
const LazyAnimatedTweet = dynamic(
  () => import("../../../../../components/AnimatedTweet/AnimatedTweet.view"),
  {
    loading: () => null,
    ssr: false,
  }
);
/**
 * Mock tweet with text animation
 *
 * Usage in MD: <animated-tweet text="Hello world" imgsrc="/assets/img.jpg"></animated-tweet>
 */
type Props = {
  text: string;
  imgsrc: string;
};

export const animatedTweet = {
  isVisible: (firstElement: Element | undefined) =>
    firstElement?.tagName === "animated-tweet",
  render: (firstElement: Element | undefined) => {
    const props = firstElement?.properties as Props;

    return <LazyAnimatedTweet text={props.text} imgSrc={props.imgsrc} />;
  },
};
