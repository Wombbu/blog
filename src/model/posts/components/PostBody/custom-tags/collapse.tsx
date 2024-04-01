import dynamic from "next/dynamic";
import { Element } from "react-markdown/lib";

// https://beta.nextjs.org/docs/rendering/static-and-dynamic-rendering
const LazyCollapse = dynamic(
  () => import("../../../../../components/Collapse/Collapse.view"),
  {
    loading: () => null,
    ssr: false,
  }
);

/**
 * Collapsible info box
 *
 * Usage in MD: <collapse label="Hello" content="Long text here"></collapse>
 */
type Props = {
  label: string;
  content: string;
};

export const collapse = {
  isVisible: (firstElement: Element | undefined) =>
    firstElement?.tagName === "collapse",
  render: (firstElement: Element | undefined) => {
    const props = firstElement?.properties as Props;

    return (
      <LazyCollapse
        content={props.content.split("\\n").map((str, index) => (
          <p className={index !== 0 ? "mt-8" : ""} key={str}>
            {str}
          </p>
        ))}
        label={props.label}
      />
    );
  },
};
