import { palette } from "@/essentials/theme/palette";
import { typography } from "@/essentials/theme/typography";
import classNames from "classnames";

type Props = {
  wrapperClassName?: string;
};

export const SubscribePlaceholder = ({ wrapperClassName }: Props) => {
  return (
    <div
      className={classNames(
        "flex flex-col gap-3 font-primary items-stretch",
        wrapperClassName
      )}
    >
      <label className={`${typography.variants.subtitle} text-center`}>
        Tilaa uutiskirje
      </label>
      <div
        className={classNames(
          typography.variants.textBody,
          palette.text.secondary,
          "text-center"
        )}
      >
        Uutiskirjeessä kerron, kun julkaisen uutta sisältöä. Silloin tällöin
        kirjoitan sisältöä yksinoikeudella uutiskirjeeseen.
      </div>
      <div className={classNames("flex justify-center")}>
        <div
          style={{ height: "55px" }}
          className={classNames("border-2 border-black max-w-sm flex-1")}
        ></div>
      </div>
    </div>
  );
};
