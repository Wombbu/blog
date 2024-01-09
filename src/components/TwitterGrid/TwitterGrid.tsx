import { button } from "@/essentials/theme/button";
import { Tweet } from "react-tweet";

type Props = {
  tweetIds: string[];
};

export const TwitterGrid = ({ tweetIds }: Props) => {
  return (
    <div data-theme="light" className={`grid grid-cols-1 sm:grid-cols-2 gap-4`}>
      {tweetIds.map((id) => (
        <Tweet id={id} key={id} />
      ))}
      <a
        href="https://twitter.com/LauriNevanpera"
        className={`${button.variants.large} flex-1 sm:col-start-1 sm:col-end-3`}
      >
        Avaa Twitter
      </a>
    </div>
  );
};
