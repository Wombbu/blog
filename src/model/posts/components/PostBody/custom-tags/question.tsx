import dynamic from "next/dynamic";
import { Element } from "react-markdown/lib";

// https://beta.nextjs.org/docs/rendering/static-and-dynamic-rendering
const LazyQuestion = dynamic(
  () => import("../../../../../components/Question/Question.view"),
  {
    loading: () => null,
    ssr: false,
  }
);

/**
 * Mock tweet with text animation
 *
 * Usage in MD: <question options="Aamulehti|Poliittinen Twitter" answerIndex={0} answerDesc="Tämäkin on Aamulehden pääkirjoituksesta."></question>
 */
type Props = {
  /**
   * Options for the question. | as delimiter for options
   *
   * @example "Aamulehti|Poliittinen Twitter"
   */
  options: string;
  /**
   * Index of the correct answer. 0-based index.
   *
   * @example 0
   */
  answerindex: string;
  /**
   * Description of the correct answer
   *
   * @example "Tämäkin on Aamulehden pääkirjoituksesta."
   */
  answerdesc: string;
  /**
   * Title of the question
   */
  title: string;
};

export const question = {
  isVisible: (firstElement: Element | undefined) =>
    firstElement?.tagName === "question",
  render: (firstElement: Element | undefined) => {
    const props = firstElement?.properties as Props;

    return (
      <LazyQuestion
        answerDesc={props.answerdesc}
        answerIndex={Number(props.answerindex)}
        options={props.options.split("|")}
        title={props.title}
      />
    );
  },
};
